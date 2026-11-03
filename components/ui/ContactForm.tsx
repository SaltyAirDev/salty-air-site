"use client";

import { useEffect, useRef, useState } from "react";
import { Turnstile } from "@/components/ui/Turnstile";
import { AUDIT_NAME, AUDIT_PRICE, EMAIL } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

/** Interests an owner would actually pick. The audit is the only priced one. */
export const CONTACT_INTERESTS = [
  `${AUDIT_NAME} (${AUDIT_PRICE})`,
  "Connecting the systems we already run",
  "Setting up something we're missing",
  "A custom build",
  "Embedded engineering engagement",
  "Missed-call text-back / AI answering",
  "Something else",
];

type Props = {
  /**
   * Resolved server-side by `turnstileSiteKey()` and passed in, so the secret
   * half of the pair never has to be reasoned about in the browser. `null`
   * means Turnstile is skipped (production with keys unset) — the form then
   * submits without a token and the other spam checks carry the load.
   */
  turnstileSiteKey: string | null;
};

export function ContactForm({ turnstileSiteKey }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [token, setToken] = useState("");
  const [resetSignal, setResetSignal] = useState(0);
  /** Turnstile's script never arrived — blocked or offline. */
  const [checkUnavailable, setCheckUnavailable] = useState(false);
  /** Decoy field. Humans never see it; bots that fill every input do. */
  const [website, setWebsite] = useState("");
  /**
   * Mount time, not render time: the contact page is prerendered, so reading
   * the clock during render would bake the build timestamp into the HTML. A
   * ref rather than state — nothing renders from it, and the server is the
   * only reader. It treats a sub-3s fill as a bot.
   */
  const formRenderedAt = useRef(0);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  useEffect(() => {
    formRenderedAt.current = Date.now();
  }, []);

  const set =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          website,
          formRenderedAt: formRenderedAt.current,
          turnstileToken: token,
        }),
      });
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};
      if (!res.ok) {
        throw new Error(
          data.error ||
            `Server error ${res.status}. Please email ${EMAIL} directly.`,
        );
      }
      setStatus("success");
    } catch (err) {
      // Turnstile tokens are single-use, so a retry needs a fresh one.
      setToken("");
      setResetSignal((n) => n + 1);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white border border-primary/15 rounded-xl px-4 py-3 font-sans text-[15px] text-ink placeholder:text-body/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";
  const labelClass = "label-caps block font-sans text-body/70 mb-2";

  const awaitingCheck = Boolean(turnstileSiteKey) && !token;

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-primary/15 bg-seafoam/25 px-8 py-14 text-center">
        <h2 className="font-heading text-2xl font-bold text-ink">
          We&rsquo;ll be in touch.
        </h2>
        <p className="mt-3 font-sans text-base text-body">
          Expect a reply within one business day at {form.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label htmlFor="cf-name" className={labelClass}>
          Your name *
        </label>
        <input
          id="cf-name"
          required
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          value={form.name}
          onChange={set("name")}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-company" className={labelClass}>
          Company
        </label>
        <input
          id="cf-company"
          type="text"
          autoComplete="organization"
          placeholder="Smith Electric"
          value={form.company}
          onChange={set("company")}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-email" className={labelClass}>
          Email *
        </label>
        <input
          id="cf-email"
          required
          type="email"
          autoComplete="email"
          placeholder="jane@smithelectric.com"
          value={form.email}
          onChange={set("email")}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className={labelClass}>
          Phone
        </label>
        <input
          id="cf-phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 000-0000"
          value={form.phone}
          onChange={set("phone")}
          className={inputClass}
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="cf-interest" className={labelClass}>
          I&rsquo;m interested in *
        </label>
        <select
          id="cf-interest"
          required
          value={form.interest}
          onChange={set("interest")}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>
            Select one…
          </option>
          {CONTACT_INTERESTS.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="cf-message" className={labelClass}>
          What systems do you run today? *
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          placeholder="What you dispatch or run projects from, what you do accounting in, who answers the phone, and where work keeps falling between them…"
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Honeypot. Positioned off-screen rather than display:none — bots that
          bother to check visibility usually only check for hidden/none — and
          kept out of the tab order and the accessibility tree. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {turnstileSiteKey && (
        <div className="md:col-span-2">
          <span className={labelClass}>Quick human check</span>
          <Turnstile
            siteKey={turnstileSiteKey}
            onToken={setToken}
            resetSignal={resetSignal}
            onScriptError={() => setCheckUnavailable(true)}
            className="max-w-sm"
          />
          {checkUnavailable && (
            <p className="mt-3 font-sans text-sm text-burnt">
              The check couldn&rsquo;t load — an ad blocker or network filter
              is the usual cause. Email us at{" "}
              <a href={`mailto:${EMAIL}`} className="underline">
                {EMAIL}
              </a>{" "}
              and we&rsquo;ll pick it up there.
            </p>
          )}
        </div>
      )}

      {status === "error" && (
        <p role="alert" className="md:col-span-2 font-sans text-sm text-burnt">
          {errorMsg}
        </p>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending" || awaitingCheck}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-white font-sans font-semibold text-[15px] transition-all duration-300 hover:bg-teal-deep hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </button>
        {awaitingCheck && !checkUnavailable && (
          <p className="mt-3 font-sans text-sm text-body/70">
            Finish the quick check above and the button turns on.
          </p>
        )}
      </div>
    </form>
  );
}
