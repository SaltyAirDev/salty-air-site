"use client";

import { useState } from "react";
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

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

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
        body: JSON.stringify(form),
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
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white border border-primary/15 rounded-xl px-4 py-3 font-sans text-[15px] text-ink placeholder:text-body/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";
  const labelClass = "label-caps block font-sans text-body/70 mb-2";

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

      {status === "error" && (
        <p
          role="alert"
          className="md:col-span-2 font-sans text-sm text-burnt"
        >
          {errorMsg}
        </p>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-white font-sans font-semibold text-[15px] transition-all duration-300 hover:bg-teal-deep hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
