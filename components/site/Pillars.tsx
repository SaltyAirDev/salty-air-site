import Link from "next/link";
import { pillars } from "@/lib/offers";

/**
 * The two main offers side by side: integrations, and the embedded engagement
 * that integrations turn into. Replaced the old add-on cards — data work is no
 * longer an offer, so it is no longer presented as one.
 */
export function Pillars() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {pillars.map((pillar) => (
        <div
          key={pillar.title}
          className="rounded-3xl border border-primary/15 bg-white p-8 md:p-10 flex flex-col"
        >
          <span className="label-caps font-sans text-primary/60">What we do</span>
          <h3 className="mt-3 font-heading font-bold text-2xl text-ink">
            {pillar.title}
          </h3>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-body">
            {pillar.desc}
          </p>
          <ul className="mt-6 flex flex-col gap-2.5 font-sans text-[15px] text-body">
            {pillar.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-primary/50"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href={pillar.href}
              className="font-sans font-semibold text-[15px] text-primary underline underline-offset-4 hover:text-burnt transition-colors"
            >
              {pillar.linkLabel} →
            </Link>
            <Link
              href="/contact"
              className="font-sans text-[15px] text-body/70 underline underline-offset-4 hover:text-primary transition-colors"
            >
              Inquire
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
