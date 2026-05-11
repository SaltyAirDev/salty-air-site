import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, firm, email, phone, interest, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const notificationText = [
    `Name: ${name}`,
    `Firm: ${firm || "—"}`,
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
    `  Firm: ${firm || "—"}`,
    `  Interested in: ${interest || "—"}`,
    `  Message: ${message}`,
    ``,
    `In the meantime, if you'd like to book a call directly:`,
    `https://calendar.app.google/ipYDWHD4YrQpLedJ9`,
    ``,
    `— Romas at Salty Air`,
    `hello@saltyair.co`,
  ].join("\n");

  try {
    const [notification, confirmation] = await Promise.allSettled([
      resend.emails.send({
        from: "Salty Air Contact <contact@saltyair.co>",
        to: "romas@saltyair.co",
        replyTo: email,
        subject: `New inquiry from ${name}${firm ? ` — ${firm}` : ""}`,
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
      return NextResponse.json({ error: "Failed to send. Please email us directly at hello@saltyair.co." }, { status: 500 });
    }

    if (notifFailed) console.error("Notification email failed:", notification);
    if (confirmFailed) console.error("Confirmation email failed:", confirmation);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send. Please email us directly at hello@saltyair.co." }, { status: 500 });
  }
}
