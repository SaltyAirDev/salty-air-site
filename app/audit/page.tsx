import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { FaqJsonLd, type FaqItem } from "@/components/seo/FaqJsonLd";
import { Button } from "@/components/ui/Button";
import { GC_PATH, tradeHref } from "@/lib/trades";
import {
  AUDIT_CHECKOUT_URL,
  AUDIT_CREDIT_DAYS,
  AUDIT_NAME,
  AUDIT_OFFER,
  AUDIT_PATH,
  AUDIT_PRICE,
  AUDIT_SESSION,
  AUDIT_TURNAROUND,
  CALENDAR_URL,
  CALL_CTA,
  SITE_URL,
} from "@/lib/site";

/**
 * The audit page: the one conversion target on the site, and the only place
 * the Stripe link appears.
 *
 * Two paths on purpose. The call is primary, because it is where we confirm
 * fit before anyone pays — a bad-fit buyer who checks out first costs more to
 * unwind than the $499 earns. Checkout sits under it for the owner who has
 * already decided and does not want a call to get started.
 *
 * Hard rules this page lives under: $499 is the only figure anywhere on it,
 * the work after the audit is "quoted after" with no ranges, the Salty Home
 * Services proof carries no metrics, and the slogan appears in the CTA band
 * rather than the hero.
 */

const TITLE = `${AUDIT_PRICE} ${AUDIT_NAME} for Trades & GCs`;
const DESCRIPTION =
  "A $499 Integration Audit maps the software you pay for, finds where your team retypes data, and ranks what to connect first. For trades and GCs across the US.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${AUDIT_PATH}` },
  keywords: [
    "integration audit",
    "contractor software audit",
    "tech stack audit for contractors",
    "systems integration for contractors",
    "connect Housecall Pro to QuickBooks",
    "Procore QuickBooks integration",
  ],
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}${AUDIT_PATH}`,
    type: "website",
    siteName: "Salty Air",
  },
};

/** What the $499 buys. Five deliverables, nothing implied beyond them. */
const deliverables = [
  {
    title: "Systems inventory",
    desc: "A written list of every piece of software the business pays for, and — separately — what your team actually uses. The two lists are rarely the same, and the gap is usually the first thing worth acting on.",
  },
  {
    title: "Integration and double-entry map",
    desc: "A diagram and a written walkthrough of how information moves through your business, marking every point where somebody retypes data that already exists somewhere else. Estimating, CRM, scheduling, accounting, phones.",
  },
  {
    title: "Priority connection list",
    desc: "The top three to five fixes, ranked. For each one: what connects to what, and whether it is a connector you already pay for, a setup nobody turned on, or something that has to be built.",
  },
  {
    title: "Written findings and a working session",
    desc: `A working session of ${AUDIT_SESSION} with you and whoever actually runs the office — screen share through the systems, following one real job end to end — then the findings as a written document.`,
  },
  {
    title: `Delivered in ${AUDIT_TURNAROUND}`,
    desc: `The document lands within ${AUDIT_TURNAROUND} of the working session. If there is work worth doing, it outlines what that work would cover, and we go through the number with you directly.`,
  },
];

/**
 * The same five deliverables as above, cut to a line each for the hero card.
 * The long-form section below is the source of truth; this is the glance
 * version a visitor reads before scrolling, so the two must stay in step.
 */
const heroDeliverables = [
  "Systems inventory",
  "Double-entry and integration map",
  "Top three to five priority connections",
  `Written findings and a working session of ${AUDIT_SESSION}`,
  `Delivered in ${AUDIT_TURNAROUND}`,
];

/**
 * Fills the right half of the hero on desktop, where a photograph sits on the
 * other pages. A translucent card on the teal band rather than a solid one —
 * the grain reads through it, so it belongs to the band instead of covering
 * it. Drops below the copy on mobile (see PageHero's `aside`).
 */
function HeroDeliverablesCard() {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/[0.07] p-8 md:p-9 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.75)]">
      <span className="label-caps block font-sans text-accent">
        What the {AUDIT_PRICE} buys
      </span>
      <p className="mt-3 font-heading font-bold text-xl leading-snug text-white">
        Five deliverables, all of them in writing.
      </p>

      <ol className="mt-7 flex flex-col divide-y divide-white/15">
        {heroDeliverables.map((item, i) => (
          <li key={item} className="flex items-baseline gap-4 py-3.5 first:pt-0">
            <span className="label-caps shrink-0 font-sans text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-sans text-[15px] leading-snug text-white/90">
              {item}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-6 border-t border-white/15 pt-5 font-sans text-[13px] leading-relaxed text-white/65">
        Fixed scope, fixed price. The document is yours to keep and act on,
        with us or without us.
      </p>
    </div>
  );
}

/** How the engagement runs, start to finish. */
const steps = [
  {
    title: "Book a call",
    desc: "Twenty minutes. We ask what you run and what is breaking, and tell you honestly whether an audit is worth your money.",
  },
  {
    title: "Pay and schedule",
    desc: `${AUDIT_PRICE}, by card. Then we book the working session and send a short list of what to have handy.`,
  },
  {
    title: "The working session",
    desc: `${AUDIT_SESSION} with you and whoever actually runs the office. We screen share through the systems and follow one real job from first call to paid invoice.`,
  },
  {
    title: `Written findings, within ${AUDIT_TURNAROUND}`,
    desc: "The inventory, the map, and the ranked list of what to connect first — in writing, so you can hand it to anyone.",
  },
  {
    title: "Decide",
    desc: "Take the document and act on it yourself, or have us quote the work. Both are fine, and we mean that.",
  },
];

/**
 * FAQ. The credit question is answered here now that the terms are settled:
 * the audit fee comes off a build or a retainer signed within
 * AUDIT_CREDIT_DAYS of the findings — counted from the findings, not from
 * payment. The ownership/IP language is the one question still deliberately
 * absent — it lives on /terms, pending confirmation, and an unanswered
 * question is better off the page than on it as a placeholder.
 */
const faqItems: FaqItem[] = [
  {
    q: "Do we have to switch software?",
    a: "No. The whole point is to make what you already own work together. If something genuinely needs replacing we will say so, but that is not what we are looking for.",
  },
  {
    q: "What do you need from us?",
    a: "About ninety minutes of your time, read-only access to the systems where that is practical, and a recent invoice or two so we can follow one job end to end. We send a short list before the session.",
  },
  {
    q: "How long does it take?",
    a: `The working session is ${AUDIT_SESSION}. Written findings land within ${AUDIT_TURNAROUND} of it.`,
  },
  {
    q: `Is the ${AUDIT_PRICE} credited toward the work after?`,
    a: `Yes. If you sign for a build or a retainer within ${AUDIT_CREDIT_DAYS} days of the findings, we credit the ${AUDIT_PRICE} toward it. If you do not, the document is still yours to keep and act on.`,
  },
  {
    q: "What does the work after the audit cost?",
    a: "We quote it after the audit. We do not publish a range, because a number given before we have seen your stack would be a guess.",
  },
  {
    q: "What if the audit says we do not need you?",
    a: `Then that is what it will say, and you will have a document worth more than ${AUDIT_PRICE} either way. If the fix is to turn on something you already pay for, we would rather tell you that than sell you a project.`,
  },
  {
    q: "Where do you work?",
    a: "Anywhere in the US. We are remote-first: the working session and the findings happen over a call and a shared screen, and the build work after it runs the same way. When an engagement needs us on-site — a plan room, a dispatch desk, a crew walkthrough — we come out for it.",
  },
];

const audiences = [
  {
    label: "Trades",
    heading: "Electrical, plumbing, HVAC, roofing, landscaping, handyman",
    desc: "You are on Housecall Pro, Jobber, or ServiceTitan, with QuickBooks and a phone system that do not quite line up, and the same job gets typed in more than once.",
    links: [
      { label: "Electricians", href: tradeHref("electricians") },
      { label: "Plumbers", href: tradeHref("plumbers") },
      { label: "HVAC", href: tradeHref("hvac") },
    ],
  },
  {
    label: "Construction",
    heading: "General contractors and specialty subs",
    desc: "Your bids are in a spreadsheet, your projects are in Procore or Buildertrend, your money is in QuickBooks, and sub coordination happens in text messages.",
    links: [{ label: "General contractors", href: GC_PATH }],
  },
];

export default function AuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: AUDIT_NAME,
        serviceType: "Systems integration audit",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Trade contractors and general contractors",
        },
        description:
          "A $499 audit that maps the software a contractor already pays for, identifies where data is retyped between systems, and ranks which connections to make first.",
        url: `${SITE_URL}${AUDIT_PATH}`,
        offers: {
          "@type": "Offer",
          price: AUDIT_PRICE.replace("$", ""),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}${AUDIT_PATH}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: AUDIT_NAME,
            item: `${SITE_URL}${AUDIT_PATH}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqJsonLd items={faqItems} />
      <Shell>
        {/* The price is in the H1 so it is visible without scrolling on a
            phone — it is what qualifies the visitor. No slogan up here. */}
        <PageHero
          eyebrow="Start here"
          headline={`The ${AUDIT_PRICE} Integration`}
          headlineAccent="Audit"
          sub="We connect the systems you already pay for."
          primaryCta={CALL_CTA}
          secondaryCta={{ label: `Pay ${AUDIT_PRICE} now`, href: AUDIT_CHECKOUT_URL }}
          aside={<HeroDeliverablesCard />}
        >
          <p className="mt-6 font-sans text-[15px] leading-relaxed text-white/70 max-w-xl">
            Twenty minutes on the call, and we will confirm it is a fit before
            you pay anything. Already decided? Pay the {AUDIT_PRICE} and we will
            schedule the working session.
          </p>

          <div className="mt-10 border-t border-white/15 pt-8 max-w-xl flex flex-col gap-5 font-sans text-base leading-relaxed text-white/80">
            <p>
              Most contractors we meet already own the software they need and
              use a fraction of what they pay for, because none of it talks to
              the rest. The audit is how we find out what is actually going on
              in your business before anyone talks about building anything.
            </p>
            <p>
              One working session. A written map of your stack, every place your
              team retypes data, and a ranked list of what to connect first,
              within {AUDIT_TURNAROUND}.
            </p>
          </div>
        </PageHero>

        {/* What the $499 buys */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>What you get</Eyebrow>
            <Heading>Five things, all of them in writing.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              The {AUDIT_OFFER} is a fixed piece of work with a fixed price.
              This is the whole of it.
            </p>
          </div>

          <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <li
                key={item.title}
                className="rounded-3xl border border-primary/15 bg-seafoam/25 p-8 flex flex-col"
              >
                <span className="label-caps font-sans text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading font-bold text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 font-sans text-[15px] leading-relaxed text-body">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-10 max-w-3xl font-heading font-semibold text-xl leading-snug text-ink">
            If the audit tells you the fix is to turn on something you are
            already paying for, that is what it will say. We would rather tell
            you that than sell you a project.
          </p>
        </Section>

        {/* How it works */}
        <TealBand innerClassName="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="label-caps block font-sans text-accent">
              How it works
            </span>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
              A call, a working session, and a document in{" "}
              <span className="text-accent">{AUDIT_TURNAROUND}.</span>
            </h2>
          </div>

          <ol className="mt-14 grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className="label-caps font-sans text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-white/80">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-white/15 pt-10 flex flex-col sm:flex-row gap-3">
            <Button href={CALENDAR_URL} variant="peach">
              Book a call
            </Button>
            <Button href={AUDIT_CHECKOUT_URL} variant="outline">
              Pay {AUDIT_PRICE} now
            </Button>
          </div>
        </TealBand>

        {/* Who it's for */}
        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>Who this is for</Eyebrow>
            <Heading>Trade shops and general contractors, both.</Heading>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.label}
                className="rounded-3xl border border-primary/15 bg-white p-8 md:p-10 flex flex-col"
              >
                <span className="label-caps font-sans text-primary/60">
                  {audience.label}
                </span>
                <h3 className="mt-3 font-heading font-bold text-2xl text-ink">
                  {audience.heading}
                </h3>
                <p className="mt-4 font-sans text-[15px] leading-relaxed text-body">
                  {audience.desc}
                </p>
                <div className="mt-auto pt-7 flex flex-wrap gap-3">
                  {audience.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-primary/25 px-5 py-2.5 font-sans font-medium text-[15px] text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-primary/15 bg-white p-8">
              <h3 className="font-heading font-bold text-lg text-ink">
                It is the right fit if
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-body">
                You run a trade, home service, or construction business, you
                already run real software, and nobody on payroll owns it. It is
                probably not the right fit if you are pre-software, if you are
                happy with how everything runs, or if you want someone to pick a
                brand-new platform and migrate you onto it.
              </p>
            </div>
            <div className="rounded-3xl bg-seafoam/35 p-8">
              <h3 className="font-heading font-bold text-lg text-teal-deep">
                Most owners call us when
              </h3>
              <ul className="mt-3 flex flex-col gap-2.5 font-sans text-[15px] leading-relaxed text-teal-deep/90">
                <li>You just bought a new platform and it is not landing</li>
                <li>You opened a second location and nothing scaled with it</li>
                <li>
                  Your ops person left and took the system knowledge with them
                </li>
                <li>You are trying not to make a big office hire</li>
              </ul>
            </div>
          </div>

          {/* Reassurance strip */}
          <ul className="mt-6 rounded-3xl bg-primary px-8 py-7 grid md:grid-cols-3 gap-4 font-sans text-[15px] text-white/90">
            <li>No new software to buy</li>
            <li>No long contract to start</li>
            <li>If the fix is free, we will tell you it is free</li>
          </ul>
        </Section>

        {/* After the audit — no figures of any kind in this section */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>What happens after</Eyebrow>
            <Heading>We quote the work once we have seen the stack.</Heading>
            <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
              <p>
                Most owners find there is work worth doing. If so, we will quote
                it — a fixed-scope build with one named outcome, or ongoing
                embedded work where we own the stack and keep shipping.
              </p>
              <p>
                We quote that <strong>after</strong> the audit, because quoting
                it before would be guessing. The {AUDIT_PRICE} is the only price
                we publish, and it stays that way on purpose.
              </p>
              <p>
                If you sign for a build or a retainer within{" "}
                {AUDIT_CREDIT_DAYS} days of the findings, we credit the {AUDIT_PRICE} toward it — so the audit
                costs you nothing if it leads to work.
              </p>
              <p>
                And if the audit says the answer is to fix two settings and
                cancel a subscription, you will have that in writing and you can
                go do it.
              </p>
            </div>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href="/integrations" variant="teal">
                What we connect
              </Button>
              <Button
                href="/embedded"
                variant="teal"
                className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
              >
                How embedding works
              </Button>
            </div>
          </div>
        </Section>

        {/* Proof — a fact, with no metrics attached to it */}
        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>Work we have done</Eyebrow>
            <Heading>A stack we built and still run.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              We built and run the back office and systems for Salty Home
              Services, a Utah home services company — AI answering and
              missed-call text-back, web leads into Housecall Pro, estimate
              follow-up, review requests, and their website. We did not advise
              on it. We built it, and we still run it.
            </p>
            <div className="mt-9">
              <Button href="/case-studies/salty-home-services" variant="teal">
                Read the case study
              </Button>
            </div>
          </div>
        </Section>

        <Faq
          items={faqItems}
          eyebrow="Audit questions"
          heading="What owners ask before they book."
        />

        {/* The slogan's one appearance on this page */}
        <CtaBand
          sub={`${AUDIT_PRICE}. One working session. Written findings in ${AUDIT_TURNAROUND}. Not sure it is a fit? Book the call anyway — we will tell you.`}
          primaryCta={CALL_CTA}
          secondaryCta={{ label: `Pay ${AUDIT_PRICE} now`, href: AUDIT_CHECKOUT_URL }}
        />
      </Shell>
    </>
  );
}
