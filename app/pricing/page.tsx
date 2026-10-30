import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { OfferCards } from "@/components/site/OfferCards";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { FaqJsonLd, type FaqItem } from "@/components/seo/FaqJsonLd";
import {
  AUDIT_CHECKOUT_URL,
  AUDIT_PRICE,
  CALENDAR_URL,
  SITE_URL,
  SLOGAN,
} from "@/lib/site";

const TITLE = "Pricing";
const DESCRIPTION =
  "Two offers. A $499 business audit you can book today, and a monthly retainer for the AI back office — scoped on a call, not listed as a package price.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}/pricing`,
    type: "website",
    siteName: "Salty Air",
  },
};

const faqItems: FaqItem[] = [
  {
    q: "Why is there no retainer price on this page?",
    a: "Because any number here would be made up. What the retainer costs depends on your call volume, how many crews you run, which systems you already pay for, and how much of the build is new. Book a call, describe the shop, and you'll get a real number.",
  },
  {
    q: "Is the audit fee credited if I hire you?",
    a: "The audit is a standalone piece of work, paid up front, and you keep the report either way. If you go on to a retainer, we start from that report rather than charging you to discover the same things twice.",
  },
  {
    q: "What do I need to have in place first?",
    a: "A phone number and some way you currently track jobs. If you already run Housecall Pro or Jobber, that's ideal. If you're running on a notebook and a group text, say so on the call — that's a normal starting point.",
  },
  {
    q: "Is there a contract or a lock-in?",
    a: "The retainer is monthly. What gets built is yours, documented, in accounts you own. If you stop, the systems keep running on your accounts.",
  },
  {
    q: "Do you charge for the data add-ons separately?",
    a: "The public-data add-ons are scoped as part of the retainer conversation. There's no separate published price for them either, for the same reason.",
  },
];

export default function PricingPage() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      <Shell>
        <PageHero
          eyebrow={SLOGAN}
          headline="Two offers. No packages, no invented"
          headlineAccent="tiers."
          sub={`A ${AUDIT_PRICE} audit you can book right now, or a retainer where we build and run the AI back office for you.`}
          primaryCta={{ label: `Book the ${AUDIT_PRICE} audit`, href: AUDIT_CHECKOUT_URL }}
          secondaryCta={{ label: "Book a call", href: CALENDAR_URL }}
          image="/brand/beach-aerial.jpg"
          imageAlt="Aerial view of a shoreline"
          priority
        />

        <Section>
          <OfferCards />

          <p className="mt-10 max-w-3xl font-sans text-[15px] leading-relaxed text-body/80">
            That is the entire price list. There is no setup fee, no tiered
            monthly table, and no &ldquo;starting at&rdquo; figure hiding
            further down the page — if you need a number for the retainer, it
            comes out of a conversation about your shop.
          </p>
        </Section>

        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>What happens next</Eyebrow>
            <Heading>Three steps, nothing clever.</Heading>
          </div>

          <ol className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                t: "Book",
                d: `Take the ${AUDIT_PRICE} audit, or book a call if you'd rather talk before paying anything.`,
              },
              {
                t: "Walk the shop",
                d: "Forty-five minutes on how calls, leads, and estimates actually move today.",
              },
              {
                t: "Get the plan",
                d: "A written report on what's leaking and what to fix first — yours to run with or hand to us.",
              },
            ].map((step, i) => (
              <li key={step.t}>
                <span className="label-caps font-sans text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading font-bold text-xl text-ink">
                  {step.t}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-body">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Faq items={faqItems} eyebrow="Pricing questions" heading="Before you book." />

        <CtaBand
          sub={`Book the ${AUDIT_PRICE} audit now, or get on a call first and we'll scope the retainer around how your shop actually runs.`}
          primaryCta={{ label: `Book the ${AUDIT_PRICE} audit`, href: AUDIT_CHECKOUT_URL }}
          secondaryCta={{ label: "Book a call", href: CALENDAR_URL }}
        />
      </Shell>
    </>
  );
}
