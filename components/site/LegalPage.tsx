import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { SLOGAN } from "@/lib/site";
import type { ReactNode } from "react";

export type LegalSection = { heading: string; body: ReactNode };

/**
 * Shared chrome for /privacy and /terms. Both are plain-language
 * small-business templates — see the notice rendered under the hero.
 */
export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <Shell>
      <PageHero eyebrow={SLOGAN} headline={title} sub={intro} />

      <Section>
        <div className="max-w-3xl">
          <p className="label-caps font-sans text-body/60">
            Last updated {updated}
          </p>

          <p className="mt-6 rounded-2xl border border-primary/15 bg-sand/50 px-6 py-5 font-sans text-[15px] leading-relaxed text-body">
            This page is informational and is <strong>not legal advice</strong>.
            It describes how Salty Air operates in plain language. If you need
            advice about your own obligations, talk to a lawyer.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-heading font-bold text-2xl text-ink">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4 font-sans text-[15px] leading-relaxed text-body">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </Shell>
  );
}
