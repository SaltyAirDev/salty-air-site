import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { CALENDAR_URL, EMAIL } from "@/lib/site";
import { resolveTurnstileKeys, verifyTurnstile } from "@/lib/turnstile";

/**
 * Contact form endpoint. Spam protection runs in this order, cheapest first:
 *
 *   rate limit → honeypot → timing → field validation → Turnstile → Resend
 *
 * The honeypot and timing checks answer **200 `{ ok: true }` without sending
 * anything**: a bot that learns which trip-wire it hit just edits its script,
 * so they get the same response a real submission does. Validation and
 * Turnstile failures are real 400s with a message a visitor can act on.
 *
 * Env vars:
 *   RESEND_API_KEY                 — required to send at all
 *   NEXT_PUBLIC_TURNSTILE_SITE_KEY — public Turnstile sitekey (client widget)
 *   TURNSTILE_SECRET_KEY           — Turnstile secret, server-side only
 *
 * With the Turnstile pair unset outside production, `lib/turnstile.ts` falls
 * back to Cloudflare's always-pass test keys; unset *in* production it skips
 * Turnstile and leans on the other four checks.
 */

/** Sensible caps — generous for a real inquiry, hostile to a paste-bomb. */
const MAX_LENGTH = {
  name: 100,
  company: 120,
  email: 254,
  phone: 40,
  interest: 120,
  message: 4000,
} as const;

/** Nobody fills this form out honestly in under three seconds. */
const MIN_FILL_MS = 3000;

/** A real inquiry might link one or two systems. Five links is a catalogue. */
const MAX_URLS = 3;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

/**
 * Rate limit state, **per instance** and best-effort: a plain Map in module
 * scope. Vercel runs several lambda instances and recycles them, so a
 * determined flood spread across instances gets more than
 * `RATE_LIMIT_MAX` through. This is a speed bump for one noisy IP, not a
 * global quota — that needs KV/Redis, which this site deliberately does not
 * run.
 */
const hitsByIp = new Map<string, number[]>();

/** First IP in `x-forwarded-for` is the client; the rest are proxies. */
function clientIp(req: NextRequest): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip")?.trim() || null;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;

  // Prune the whole map on every request. The traffic here is tiny and it
  // keeps the Map from growing for the life of the instance.
  for (const [key, times] of hitsByIp) {
    const recent = times.filter((t) => t > cutoff);
    if (recent.length) hitsByIp.set(key, recent);
    else hitsByIp.delete(key);
  }

  const mine = hitsByIp.get(ip) ?? [];
  if (mine.length >= RATE_LIMIT_MAX) return true;

  mine.push(now);
  hitsByIp.set(ip, mine);
  return false;
}

/** Anything that is not a string is treated as absent, not coerced. */
function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** A friendly 400 the form shows verbatim. */
function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

/** The response a bot gets: indistinguishable from success, sends nothing. */
function fakeSuccess() {
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return badRequest("Invalid request body.");
  }

  const ip = clientIp(req);

  // 1. Rate limit.
  if (ip && isRateLimited(ip)) {
    return NextResponse.json(
      {
        error: `That's a few messages in a short window. Give it ten minutes, or email us at ${EMAIL}.`,
      },
      { status: 429 },
    );
  }

  // 2. Honeypot: a field no sighted or screen-reader user ever reaches.
  if (str(body.website) || str(body.company_url)) {
    console.warn("Contact form: honeypot filled, dropping submission.");
    return fakeSuccess();
  }

  // 3. Timing. Best-effort by design: the timestamp is the client's own
  // unsigned clock, so it is forgeable by anyone who reads the bundle — it
  // only catches the scripted post that fires the instant the page loads. A
  // clock running ahead of ours gives a negative elapsed, which is skew
  // rather than speed, so that passes.
  const renderedAt =
    typeof body.formRenderedAt === "number" ? body.formRenderedAt : 0;
  const elapsed = renderedAt > 0 ? Date.now() - renderedAt : -1;
  if (renderedAt <= 0 || (elapsed >= 0 && elapsed < MIN_FILL_MS)) {
    console.warn(
      `Contact form: submitted too fast (elapsed=${elapsed}ms), dropping.`,
    );
    return fakeSuccess();
  }

  // 4. Field validation.
  const name = str(body.name);
  const company = str(body.company);
  const email = str(body.email);
  const phone = str(body.phone);
  const interest = str(body.interest);
  const message = str(body.message);

  if (!name || !email || !message) {
    return badRequest("Missing required fields.");
  }

  const tooLong = (
    [
      ["name", name],
      ["company", company],
      ["email", email],
      ["phone", phone],
      ["interest", interest],
      ["message", message],
    ] as const
  ).find(([field, value]) => value.length > MAX_LENGTH[field]);

  if (tooLong) {
    return badRequest(
      `That ${tooLong[0]} is too long — keep it under ${MAX_LENGTH[tooLong[0]]} characters.`,
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return badRequest("That email address doesn't look right.");
  }

  const urlCount = (message.match(/https?:\/\//gi) ?? []).length;
  if (urlCount > MAX_URLS) {
    return badRequest(
      `Please send that with no more than ${MAX_URLS} links — or email us directly at ${EMAIL}.`,
    );
  }

  // 5. Turnstile.
  const turnstile = resolveTurnstileKeys();
  if (turnstile.mode !== "skipped") {
    const token = str(body.turnstileToken) || str(body["cf-turnstile-response"]);
    if (!token) {
      return badRequest(
        "Please complete the quick human check and try again.",
      );
    }

    const { ok, errorCodes } = await verifyTurnstile(
      token,
      turnstile.secretKey,
      ip,
    );
    if (!ok) {
      console.warn("Turnstile verification failed:", errorCodes.join(", "));
      return badRequest(
        `We couldn't verify that check. Please try again, or email us at ${EMAIL}.`,
      );
    }
  }

  const notificationText = [
    `Name: ${name}`,
    `Company: ${company || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Interested in: ${interest || "—"}`,
    ``,
    message,
  ].join("\n");

  const confirmationText = [
    `Hi ${name},`,
    ``,
    `Thanks for reaching out — we received your message and will be in touch within one business day.`,
    ``,
    `Here's what you submitted:`,
    `  Company: ${company || "—"}`,
    `  Interested in: ${interest || "—"}`,
    `  Message: ${message}`,
    ``,
    `In the meantime, if you'd like to book a call directly:`,
    CALENDAR_URL,
    ``,
    `— Salty Air`,
    EMAIL,
  ].join("\n");

  // Constructed after validation: the Resend client throws on a missing key,
  // which would otherwise turn every request on a deployment without the env
  // var into an opaque 500 — including the ones we mean to reject as 400.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send.");
    return NextResponse.json(
      { error: `Our form is misconfigured. Please email us directly at ${EMAIL}.` },
      { status: 500 },
    );
  }
  const resend = new Resend(apiKey);

  try {
    const [notification, confirmation] = await Promise.allSettled([
      resend.emails.send({
        from: "Salty Air Contact <contact@saltyair.co>",
        to: "romas@saltyair.co",
        replyTo: email,
        subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
        text: notificationText,
      }),
      resend.emails.send({
        from: "Salty Air <contact@saltyair.co>",
        to: email,
        subject: "We received your message — Salty Air",
        text: confirmationText,
      }),
    ]);

    const notifFailed = notification.status === "rejected";
    const confirmFailed = confirmation.status === "rejected";

    if (notifFailed && confirmFailed) {
      console.error("Both emails failed:", notification, confirmation);
      return NextResponse.json(
        { error: `Failed to send. Please email us directly at ${EMAIL}.` },
        { status: 500 },
      );
    }

    if (notifFailed) console.error("Notification email failed:", notification);
    if (confirmFailed) console.error("Confirmation email failed:", confirmation);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: `Failed to send. Please email us directly at ${EMAIL}.` },
      { status: 500 },
    );
  }
}
