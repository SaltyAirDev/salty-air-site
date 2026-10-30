import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { CALENDAR_URL, EMAIL } from "@/lib/site";

export async function POST(req: NextRequest) {
  let name: string,
    company: string,
    email: string,
    phone: string,
    interest: string,
    message: string;
  try {
    ({ name, company, email, phone, interest, message } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
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
