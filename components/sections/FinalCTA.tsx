"use client";

import { useState } from "react";
import { finalCta } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

type Status = "idle" | "sending" | "success" | "error";

export function FinalCTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", firm: "", email: "", phone: "", interest: "", message: "" });

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
      if (!res.ok) throw new Error(data.error || `Server error ${res.status}. Please email hello@saltyair.co directly.`);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/15 rounded-xl px-5 py-3.5 font-sans text-sm text-background placeholder:text-background/30 focus:outline-none focus:border-accent/60 transition-colors";

  return (
    <section
      id="contact"
      className="w-full py-32 md:py-44 px-6 md:px-16 bg-dark text-background relative overflow-hidden rounded-t-[3rem]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-dark to-dark" />
      <div className="absolute inset-x-0 top-0 h-[60%]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,88,51,0.35),transparent_60%)]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <SectionFade>
          <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
            {finalCta.eyebrow}
          </span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mt-4 leading-[1.05]">
            {finalCta.headline.map((line, i) => (
              <span key={i} className="block">
                {line.lead}
                {line.highlight && (
                  <span className="text-accent">{line.highlight}</span>
                )}
              </span>
            ))}
          </h2>
          <p className="mt-8 font-sans text-lg md:text-xl leading-relaxed text-background/88 max-w-2xl mx-auto">
            {finalCta.sub}
          </p>
        </SectionFade>

        <SectionFade delay={0.1}>
          {status === "success" ? (
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 px-8 py-12 text-center">
              <div className="text-4xl mb-4">🌴</div>
              <h3 className="font-heading text-2xl font-bold mb-2">We'll be in touch.</h3>
              <p className="text-background/78 font-sans text-base">
                Expect a reply within one business day at {form.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-12 text-left grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-data text-xs uppercase tracking-widest text-background/78 mb-2">
                  Your name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={set("name")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block font-data text-xs uppercase tracking-widest text-background/78 mb-2">
                  Practice name
                </label>
                <input
                  type="text"
                  placeholder="Smith & Associates"
                  value={form.firm}
                  onChange={set("firm")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block font-data text-xs uppercase tracking-widest text-background/78 mb-2">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="jane@smithlaw.com"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block font-data text-xs uppercase tracking-widest text-background/78 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={form.phone}
                  onChange={set("phone")}
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-data text-xs uppercase tracking-widest text-background/78 mb-2">
                  I'm interested in *
                </label>
                <select
                  required
                  value={form.interest}
                  onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>Select one…</option>
                  <option value="AI Training Day">AI Training Day</option>
                  <option value="Strategic Assessment">Strategic Assessment</option>
                  <option value="Ongoing Retainer">Ongoing Retainer</option>
                  <option value="Custom Project">Custom Project</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block font-data text-xs uppercase tracking-widest text-background/78 mb-2">
                  What are you looking to automate? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your practice, your current bottlenecks, and what you'd most like to get off your plate..."
                  value={form.message}
                  onChange={set("message")}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="md:col-span-2 text-sm text-red-400 font-sans">{errorMsg}</p>
              )}

              <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4 pt-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-block px-10 py-4 rounded-full bg-accent text-dark font-sans font-bold text-base hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative group shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100"
                >
                  <span className="relative z-10 block transition-colors group-hover:text-white">
                    {status === "sending" ? "Sending…" : "Send message"}
                  </span>
                  <span className="absolute inset-0 rounded-full bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                </button>

              </div>
            </form>
          )}
        </SectionFade>
      </div>
    </section>
  );
}
