import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { OfferCards } from "@/components/site/OfferCards";
import { OfferSplit } from "@/components/site/OfferSplit";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { FaqJsonLd, type FaqItem } from "@/components/seo/FaqJsonLd";
import {
  AUDIT_CTA,
  AUDIT_OFFER,
  AUDIT_PRICE,
  AUDIT_TURNAROUND,
  CALL_CTA,
  QUOTED_AFTER_AUDIT,
  SITE_URL,
  SLOGAN,
} from "@/lib/site";

const TITLE = "Pricing";
const DESCRIPTION =
  "One published price: the $499 Integration Audit. The build and the embedded engagement are quoted after the audit — no packages, no tiers, no monthly bands.";

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
    q: "Why is the audit the only price on this page?",
    a: "Because any other number here would be made up. What a build costs depends on how many systems are in play, what they expose, and how much of the work is new. The audit produces a scope, and the scope produces a number you can hold us to.",
  },
  {
    q: "What am I actually buying with the audit?",
    a: `A map of your own stack. One working session on every system in the business and how work moves between them, then written findings within ${AUDIT_TURNAROUND}: your inventory, every place data gets retyped, and the connections worth making first. You keep it either way.`,
  },
  {
    q: "What happens to the audit findings if I hire you?",
    a: "The audit is standalone work, paid up front, and the findings are yours regardless. If you go on to a build or an embedded engagement, we start from that document rather than charging you to discover the same things twice.",
  },
  {
    q: "What is the difference between the build and the embedded engagement?",
    a: "The build is a scope of work: the integrations the audit found, done, then handed over. The embedded engagement is ongoing — we stay in the business, own the stack, and keep shipping. Both are quoted after the audit.",
  },
  {
    q: "What do I need to have in place first?",
    a: "Whatever you already run. If that is Housecall Pro or Procore and QuickBooks, ideal. If it is a notebook, a group text, and an inbox, say so on the call — that is a normal starting point and it changes the plan, not the welcome.",
  },
  {
    q: "Is there a contract or a lock-in?",
    a: "The embedded engagement is monthly. What gets built is yours, documented, in accounts you own. If you stop, the stack keeps running and another team can pick it up.",
  },
];

export default function PricingPage() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      <Shell>
        <PageHero
          eyebrow={SLOGAN}
          headline="One published price, and no invented"
          headlineAccent="tiers."
          sub={`A ${AUDIT_OFFER} you can book right now. Everything after it — the integration build, the embedded engagement — is quoted off what the audit finds.`}
          primaryCta={AUDIT_CTA}
          secondaryCta={CALL_CTA}
          image="/brand/beach-aerial.jpg"
          imageAlt="Aerial view of a shoreline"
          priority
        />

        <Section>
          <OfferCards />

          <p className="mt-10 max-w-3xl font-sans text-[15px] leading-relaxed text-body/80">
            That is the entire price list: {AUDIT_PRICE} for the audit, and
            &ldquo;{QUOTED_AFTER_AUDIT.toLowerCase()}&rdquo; for everything
            else. There is no setup fee, no tiered monthly table, and no
            &ldquo;starting at&rdquo; figure hiding further down the page.
          </p>

          <div className="mt-14 max-w-3xl">
            <Eyebrow>What the work is</Eyebrow>
            <Heading>Integrations, and the engagement they become.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              Listed here so you know what is on the table, not so you can pick
              a tier. Both are scoped from the audit.
            </p>
          </div>

          <div className="mt-12">
            <OfferSplit />
          </div>
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
                d: `Take the ${AUDIT_OFFER}, or book a call if you'd rather talk before paying anything.`,
              },
              {
                t: "Map the stack",
                d: "One working session on every system in the business and how work actually moves between them.",
              },
              {
                t: "Get the findings",
                d: `Written findings within ${AUDIT_TURNAROUND} — yours to run with, or the thing the build gets quoted from.`,
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
          sub={`Start with the ${AUDIT_OFFER}, or get on a call first and we'll talk through what is in your stack.`}
        />
      </Shell>
    </>
  );
}
