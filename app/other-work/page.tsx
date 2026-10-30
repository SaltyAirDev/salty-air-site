import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { EMAIL, SITE_URL, SLOGAN } from "@/lib/site";

const TITLE = "Other Work";
const DESCRIPTION =
  "Salty Air is built for the trades. A small amount of inbound work outside that — law practices and embedded engineering — is handled case by case.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/other-work` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}/other-work`,
    type: "website",
    siteName: "Salty Air",
  },
};

export default function OtherWorkPage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="Not a trade shop? Read this"
        headlineAccent="first."
        sub="The trades are what Salty Air is built for. A little work outside that still comes in, and it's taken on case by case."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
      />

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Inbound only</Eyebrow>
          <Heading>Two things we still take on.</Heading>
          <p className="mt-6 font-sans text-lg leading-relaxed text-body">
            Neither is advertised and neither is in the main navigation. If one
            of them describes you, write in and we&rsquo;ll tell you honestly
            whether it&rsquo;s a fit.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-primary/15 bg-white p-8">
            <h2 className="font-heading font-bold text-2xl text-ink">
              Law practices
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-body">
              Intake, conflict checks, matter management, and document drafting
              — the same back-office logic as a trade shop, with the paperwork
              swapped out. We built this before the trade focus and still take
              it on when a practice asks.
            </p>
          </div>

          <div className="rounded-3xl border border-primary/15 bg-white p-8">
            <h2 className="font-heading font-bold text-2xl text-ink">
              Embedded engineering
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-body">
              Enterprise teams occasionally bring Romas in to build alongside
              their own engineers on a defined piece of work. Scoped per
              engagement, and only when there&rsquo;s capacity.
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-3xl font-sans text-[15px] leading-relaxed text-body/80">
          Everything else on this site — the pricing, the case study, the trade
          pages — describes the trade and home service work. If you&rsquo;re
          here for one of the two above, email{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-primary underline underline-offset-4 hover:text-burnt transition-colors"
          >
            {EMAIL}
          </a>{" "}
          and say which.
        </p>
      </Section>

      <CtaBand
        sub="Trade shop after all? The audit and the retainer are both on the pricing page."
      />
    </Shell>
  );
}
