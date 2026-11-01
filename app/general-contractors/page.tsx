import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { FaqJsonLd, type FaqItem } from "@/components/seo/FaqJsonLd";
import { SystemChips } from "@/components/site/Systems";
import { Button } from "@/components/ui/Button";
import { systemGroups } from "@/lib/systems";
import { trades, tradeHref, GC_PATH } from "@/lib/trades";
import {
  AUDIT_CTA,
  AUDIT_OFFER,
  CALL_CTA,
  SERVICE_TYPE,
  SITE_URL,
  SLOGAN,
} from "@/lib/site";

const TITLE = "Software Integration for General Contractors";
const DESCRIPTION =
  "Procore, Buildertrend, estimating and QuickBooks that finally agree. We connect the systems your construction business already pays for. $499 audit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${GC_PATH}` },
  keywords: [
    "software integration for general contractors",
    "construction software integration",
    "Procore integration",
    "Buildertrend integration",
    "general contractor software integration",
    "construction RFI workflow",
    "submittal tracking",
    "change order workflow",
    "subcontractor compliance tracking",
    "construction QuickBooks integration",
  ],
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}${GC_PATH}`,
    type: "website",
    siteName: "Salty Air",
  },
};

/**
 * A GC's stack is messier than a trade shop's — more systems, more parties,
 * and a job that runs for months rather than an afternoon. The copy speaks to
 * that directly; the voice is the same company's.
 */
const seams = [
  "A plan room nobody can get a drawing out of without asking the one person who knows where it lives",
  "Estimating in one system, the budget in another, and the two reconciled by hand after award",
  "RFIs and submittals tracked well enough to send and not well enough to chase",
  "Change orders that start as a text from the field and end as an argument three months later",
  "Job costs in the project system and invoices in QuickBooks or Sage, joined at month end by somebody's evening",
  "COIs, lien waivers, and prequal packets chased by memory until a pay application stalls on one missing page",
];

const work = [
  {
    title: "Plan room & document flow",
    desc: "Drawings, specs, and the current revision landing where the field and the office both look, instead of in an inbox. Markups and sets connected to the project record rather than living beside it.",
  },
  {
    title: "Estimating into the budget",
    desc: "The estimate that won the job carried into the budget and the schedule of values without a re-key, so cost codes mean the same thing in both systems from day one.",
  },
  {
    title: "RFIs & submittals",
    desc: "Routed to the right reviewer, logged against the drawing, and chased automatically once something sits past its ball-in-court date.",
  },
  {
    title: "Change orders",
    desc: "A field condition becomes a priced change with the backup attached and a signature request out the door — before the work gets buried and the margin argument starts.",
  },
  {
    title: "Job cost to the ledger",
    desc: "Field hours, POs, and committed costs reaching QuickBooks or Sage coded correctly, so the WIP report is something you read rather than rebuild.",
  },
  {
    title: "Sub compliance & pay apps",
    desc: "COI expirations, lien waivers, and prequal packets tracked and chased on schedule, so pay applications stop stalling on missing paperwork.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Do we have to replace Procore or Buildertrend?",
    a: "No. You are already paying for it and your PMs already know it. We build on top of what you run — Procore, Buildertrend, Autodesk Build, Bluebeam, Sage, QuickBooks — and connect it to the rest of the stack. Nothing gets ripped out mid-project.",
  },
  {
    q: "Our field crews are not going to learn new software.",
    a: "They should not have to. The best field-facing work runs through what crews already use: a text message, a photo, an email. If a workflow needs the field to learn an app, we have usually designed it wrong. The heavy lifting happens in the office.",
  },
  {
    q: "Is this only for large GCs?",
    a: "The opposite. Large GCs have IT departments and enterprise contracts. The gap is widest in businesses where the owner or a couple of project managers are still doing work the systems should be doing between them.",
  },
  {
    q: "Do you work with specialty subs, or only general contractors?",
    a: "Both. The work shifts — bid coverage and submittals matter less, while scheduling, crew dispatch, T&M tickets, and progress billing matter more — but the approach is the same. We start by mapping how work actually flows.",
  },
  {
    q: "What if an automation gets something wrong?",
    a: "Nothing goes to an owner, architect, or sub without a person approving it unless you specifically ask for that. Drafts get generated, a human reviews, then it sends. You decide where the approval gates sit.",
  },
  {
    q: "How is this different from the trade pages?",
    a: "Same company, different stack. A trade shop's problem is mostly the phone and the dispatch board. A contractor's is a plan room, an estimating system, a project system, and a ledger that barely talk — more systems, more parties, and a job that runs for months. Both start with the same audit.",
  },
];

export default function ConstructionPage() {
  // Construction-relevant groups only: a GC does not need the field-service
  // dispatch row, and the chip row reads better without it.
  const constructionGroups = systemGroups.filter(
    (g) => g.title !== "Field service & dispatch",
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Systems integration for construction",
        description: DESCRIPTION,
        serviceType: SERVICE_TYPE,
        provider: { "@id": `${SITE_URL}/#organization` },
        audience: {
          "@type": "Audience",
          audienceType: "General contractors and specialty subcontractors",
        },
        url: `${SITE_URL}${GC_PATH}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "General Contractors",
            item: `${SITE_URL}${GC_PATH}`,
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
        <PageHero
          eyebrow={SLOGAN}
          headline="The plan room, the estimate, and the ledger have never"
          headlineAccent="met."
          sub="General contractors and specialty subs run more systems than anyone, and fewer of them are connected. We wire the stack you already pay for together, set up what is missing, and build the rest."
          primaryCta={AUDIT_CTA}
          secondaryCta={CALL_CTA}
          image="/brand/stock/van-job.jpg"
          imageAlt="Contractor van parked at a job site"
          priority
        />

        {/* Why a contractor's stack is different */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>Why construction is its own problem</Eyebrow>
            <Heading>More systems, more parties, and a job that lasts months.</Heading>
            <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
              <p>
                A service shop loses work in an afternoon: the phone rings, no
                one picks up, the job goes elsewhere. A contractor loses it over
                a quarter — in a change that never got priced, a submittal that
                sat, a cost code that meant two different things in two systems.
              </p>
              <p>
                That is a harder problem, and it is almost never solved by
                buying another platform. It is solved by making the plan room,
                the estimating system, the project system, and the ledger agree
                on what a job is.
              </p>
            </div>
          </div>

          <ul className="mt-12 grid md:grid-cols-2 gap-5">
            {seams.map((seam) => (
              <li
                key={seam}
                className="rounded-2xl border border-primary/15 bg-white p-7 font-sans text-[15px] leading-relaxed text-body"
              >
                {seam}
              </li>
            ))}
          </ul>
        </Section>

        {/* What we build for contractors */}
        <TealBand innerClassName="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="label-caps block font-sans text-accent">
              What we connect and build
            </span>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
              One record of a job, from bid to{" "}
              <span className="text-accent">closeout.</span>
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-white/80">
              Built on the systems you already run, in accounts you own, with
              the approval gates where you want them.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {work.map((item) => (
              <div key={item.title}>
                <h3 className="font-heading font-semibold text-xl text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-white/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-white/15 pt-10">
            <span className="label-caps block font-sans text-accent">
              Systems we work in
            </span>
            <div className="mt-5">
              <SystemChips groups={constructionGroups} />
            </div>
            <div className="mt-9">
              <Button href="/integrations" variant="peach">
                How we connect a stack
              </Button>
            </div>
          </div>
        </TealBand>

        {/* How to start */}
        <Section tone="sand">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>How to start</Eyebrow>
              <Heading>Map the stack first. Quote the work after.</Heading>
              <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
                <p>
                  The {AUDIT_OFFER} is the only published price on this site. A
                  working session on how a job moves from bid to closeout
                  through every system it touches, then written findings: your
                  systems inventory, where the same information gets retyped,
                  and the connections worth making first.
                </p>
                <p>
                  The build and the embedded engagement are quoted off those
                  findings. You keep the document whether or not we do the work.
                </p>
              </div>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button href={AUDIT_CTA.href} variant="teal">
                  {AUDIT_CTA.label}
                </Button>
                <Button
                  href="/embedded"
                  variant="teal"
                  className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
                >
                  Or embed with us
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
              <Image
                src="/brand/beach-aerial.jpg"
                alt="Aerial view of a shoreline"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Trades cross-link */}
        <Section>
          <Eyebrow>Also serving</Eyebrow>
          <Heading>Trade and home service shops.</Heading>
          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-body">
            If you run service work alongside the projects, the trade pages
            cover that side of it — the phone, the dispatch board, and the
            follow-up.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {trades.map((trade) => (
              <Link
                key={trade.slug}
                href={tradeHref(trade.slug)}
                className="rounded-full border border-primary/25 bg-white px-5 py-2.5 font-sans font-medium text-[15px] text-primary transition-colors hover:bg-primary hover:text-white"
              >
                {trade.label}
              </Link>
            ))}
          </div>
        </Section>

        <Faq
          items={faqItems}
          eyebrow="Contractor questions"
          heading="What contractors ask first."
        />

        <CtaBand
          sub={`Tell us how a job moves from bid to closeout today. Start with the ${AUDIT_OFFER}, or book a call.`}
        />
      </Shell>
    </>
  );
}
