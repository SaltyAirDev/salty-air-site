import { Eyebrow, Heading, Section } from "@/components/site/Section";
import type { FaqItem } from "@/components/seo/FaqJsonLd";

export function Faq({
  items,
  eyebrow = "Common questions",
  heading = "What owners ask first.",
}: {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <Section tone="sand">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
      </div>

      <div className="mt-12 max-w-3xl divide-y divide-primary/10 border-y border-primary/10">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex items-start justify-between gap-6 cursor-pointer list-none font-heading font-semibold text-lg text-ink marker:hidden">
              {item.q}
              <span
                aria-hidden
                className="mt-1.5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2v12M2 8h12"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-3 pr-10 font-sans text-[15px] leading-relaxed text-body">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
