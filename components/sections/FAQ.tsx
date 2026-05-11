"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionFade>
          <div className="max-w-3xl mb-16">
            <span className="font-data text-xs text-accent-warm uppercase tracking-[0.3em]">
              {faq.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark tracking-tight mt-4 leading-[1.1]">
              {faq.headline}
            </h2>
          </div>
        </SectionFade>

        <div className="max-w-3xl divide-y divide-primary/10">
          {faq.items.map((item, i) => (
            <SectionFade key={i} delay={i * 0.04}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-heading text-xl md:text-2xl font-bold text-dark group-hover:text-primary transition-colors leading-snug">
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 mt-1 w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center text-body/60 transition-transform duration-300"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  style={{ maxHeight: open === i ? "400px" : "0px", opacity: open === i ? 1 : 0 }}
                >
                  <p className="pb-7 font-sans text-base md:text-lg text-body leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
