import { IS_PRODUCTION } from "./site";

/**
 * Cloudflare Turnstile — key resolution and token verification.
 *
 * **Server-side module.** It reads `TURNSTILE_SECRET_KEY`, so nothing in here
 * may be imported from a client component. The contact form receives its
 * sitekey as a prop from `app/contact/page.tsx` (a server component) via
 * `turnstileSiteKey()`, which returns the one value in this file that is safe
 * to hand to a browser.
 *
 * Env vars (set them in Vercel project settings, never in the repo):
 *   NEXT_PUBLIC_TURNSTILE_SITE_KEY — public, inlined into the client bundle
 *   TURNSTILE_SECRET_KEY           — secret, server only, never NEXT_PUBLIC_
 */

/**
 * Cloudflare's documented "always passes / visible widget" dummy pair. Public
 * values from the Turnstile docs, safe in source: the dummy sitekey only ever
 * mints the dummy token `XXXX.DUMMY.TOKEN.XXXX`, and only the dummy secret
 * accepts it — real keys reject it and these reject real tokens. Resolved as a
 * **pair** so client and server can never end up on mismatched keys.
 */
const TEST_SITE_KEY = "1x00000000000000000000AA";
const TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type TurnstileKeys =
  | { mode: "live" | "test"; siteKey: string; secretKey: string }
  | { mode: "skipped"; siteKey: null; secretKey: null };

/**
 * The single source of truth for which keys are in play.
 *
 * - Both env vars set → `live`.
 * - Either missing **and** not the production deployment → `test`, so a clone
 *   of the repo with no secrets still has a working, always-passing widget.
 * - Either missing **in production** → `skipped`: Turnstile drops out
 *   entirely rather than wedging the form shut. Honeypot, timing, validation
 *   and the rate limit all still run, so the form is never left unguarded.
 *
 * Both keys are read from the same process, so the client (which gets its
 * sitekey from the prerendered contact page) and the API route always agree:
 * on Vercel a deployment's env is fixed when it is built, so build-time and
 * request-time resolution cannot disagree for the same deployment.
 */
export function resolveTurnstileKeys(): TurnstileKeys {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (siteKey && secretKey) return { mode: "live", siteKey, secretKey };

  if (!IS_PRODUCTION) {
    return { mode: "test", siteKey: TEST_SITE_KEY, secretKey: TEST_SECRET_KEY };
  }

  console.warn(
    "Turnstile keys missing in production — skipping bot verification. " +
      "Set NEXT_PUBLIC_TURNSTILE_SITE_KEY and TURNSTILE_SECRET_KEY.",
  );
  return { mode: "skipped", siteKey: null, secretKey: null };
}

/**
 * Client-safe sitekey: the public half of the pair, or `null` when Turnstile
 * is skipped. Call this from a server component and pass the result down — it
 * is the only Turnstile value that belongs in the browser.
 */
export function turnstileSiteKey(): string | null {
  return resolveTurnstileKeys().siteKey;
}

type SiteverifyResponse = {
  success?: boolean;
  "error-codes"?: string[];
};

/**
 * Verify a widget token against siteverify. Tokens are single-use and expire
 * after five minutes, so a rejection means the widget has to be reset before
 * the visitor can retry.
 */
export async function verifyTurnstile(
  token: string,
  secretKey: string,
  remoteIp: string | null,
): Promise<{ ok: boolean; errorCodes: string[] }> {
  const body = new URLSearchParams({ secret: secretKey, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });
    const data = (await res.json()) as SiteverifyResponse;
    return {
      ok: data.success === true,
      errorCodes: data["error-codes"] ?? [],
    };
  } catch (err) {
    // A siteverify outage should not swallow real inquiries, but it also must
    // not become a bypass: the caller turns this into a 400 the visitor can
    // retry, which is the safe side of the trade for a low-volume form.
    console.error("Turnstile siteverify request failed:", err);
    return { ok: false, errorCodes: ["siteverify-unreachable"] };
  }
}
