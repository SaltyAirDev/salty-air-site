import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { FaqJsonLd, type FaqItem } from "@/components/seo/FaqJsonLd";
import { SystemGroups } from "@/components/site/Systems";
import { ValuePillars } from "@/components/site/ValuePillars";
import { Button } from "@/components/ui/Button";
import { commonSeams, integrationModes } from "@/lib/systems";
import {
  AUDIT_CTA,
  AUDIT_OFFER,
  AUDIT_TURNAROUND,
  CALL_CTA,
  SERVICE_TYPE,
  SITE_URL,
  SLOGAN,
} from "@/lib/site";

const PATH = "/integrations";
const TITLE = "Contractor Software Integration Services";
const DESCRIPTION =
  "Connect Housecall Pro, Jobber, ServiceTitan, Procore, Buildertrend and QuickBooks. We integrate the systems your shop already pays for. Start with a $499 audit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    type: "website",
    siteName: "Salty Air",
  },
};

/** How a project actually runs, once the audit has said what to do. */
const steps = [
  {
    label: "Step one",
    heading: "Map the stack",
    items: [
      "Every system in the business written down: what it does, who uses it, what it costs",
      "The path a lead takes from first ring to paid invoice, traced through each tool it passes",
      "The handoffs that are currently a person retyping something",
      "A ranked list of the seams worth closing, and the ones not worth touching yet",
    ],
  },
  {
    label: "Step two",
    heading: "Connect and set up",
    items: [
      "Integrations built between the systems you keep, in accounts in your name",
      "Missing pieces — answering, follow-up, a real CRM — set up and wired in on the way",
      "One record of a job, shared by the systems that need it, instead of four partial ones",
      "Documented as we go, so your office can see what moves where",
    ],
  },
  {
    label: "Step three",
    heading: "Build what is left",
    items: [
      "Where no product fits, we write the thing: real code, versioned, source yours",
      "Reporting that joins the field system and the ledger without a manual export",
      "Changes as the business changes — new trade, new crew, new software",
      "Hand off, or keep us on as the embedded team that owns it",
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Do I have to switch off Housecall Pro, Jobber, or ServiceTitan?",
    a: "No, and that is the whole point. You are already paying for those and your crews already know them. We build around the system you dispatch from rather than replacing it. The same goes for Procore, QuickBooks, and whatever CRM you landed on.",
  },
  {
    q: "What counts as an integration?",
    a: "Anything that stops a person being the wire between two systems. A web lead that becomes a job in dispatch without retyping. A phone call that shows the customer's history before you pick up. Job costs that land in the ledger coded correctly. A single report that reads from the field system and accounting at once.",
  },
  {
    q: "What if the system I use has no integration available?",
    a: "Then we look at what it does expose — an API, a webhook, a scheduled export, an inbox — and build against that. If a system genuinely cannot be connected safely, we will tell you that and say what it would cost to move off it, rather than pretending otherwise.",
  },
  {
    q: "Do you build custom software, or only connect things?",
    a: "Both. Connecting is first because it is cheaper and uses what you already own. When the work is specific enough that no product covers it, we build it as real code in your accounts, documented, with the source yours to keep or hand to someone else.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Everything is built in accounts in your name, with the source and the documentation handed over. If we part ways, the stack keeps running and you keep the keys.",
  },
  {
    q: `What does the ${AUDIT_OFFER} have to do with this?`,
    a: `It is how every integration project starts. One working session on the systems and how work moves between them, then written findings within ${AUDIT_TURNAROUND}: your inventory, every place data gets retyped, and the connections worth making first. The build is quoted off those findings, so the number describes real work instead of a package.`,
  },
];

export default function IntegrationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Systems integration and custom development",
        description: DESCRIPTION,
        serviceType: SERVICE_TYPE,
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}${PATH}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Integrations",
            item: `${SITE_URL}${PATH}`,
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
          headline="Your software already knows this. It just isn’t"
          headlineAccent="talking."
          sub="We connect the systems you already pay for, set up whatever is missing, and build custom where nothing fits. One stack, one record of a job, nobody retyping anything."
          primaryCta={AUDIT_CTA}
          secondaryCta={CALL_CTA}
          image="/brand/hero-palms.jpg"
          imageAlt="Sun through a stand of palms"
          priority
        />

        {/* The three value pillars — shared with the homepage */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>What we do</Eyebrow>
            <Heading>Three things, and we do them in this order.</Heading>
          </div>

          <div className="mt-12">
            <ValuePillars />
          </div>
        </Section>

        {/* The problem, in symptoms rather than vocabulary */}
        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>Where the work falls through</Eyebrow>
            <Heading>
              Nobody buys software hoping to become the integration.
            </Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              Every system in your business was bought to fix one thing, and it
              probably does. The cost is in the gaps between them — which is
              where somebody in your office spends their day, copying a job from
              one screen into another.
            </p>
          </div>

          <ul className="mt-12 grid md:grid-cols-2 gap-5">
            {commonSeams.map((seam) => (
              <li
                key={seam}
                className="rounded-2xl border border-primary/15 bg-white p-7 font-sans text-[15px] leading-relaxed text-body"
              >
                {seam}
              </li>
            ))}
          </ul>
        </Section>

        {/* Connect / set up / build */}
        <TealBand innerClassName="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="label-caps block font-sans text-accent">
              What we do about it
            </span>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
              Connect. Set up.{" "}
              <span className="text-accent">Build what is left.</span>
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-white/80">
              In that order, on purpose. Connecting what you own is the cheapest
              fix available, and most businesses have never had anyone do it.
              Building comes last, when the work is specific enough to deserve
              it.
            </p>
          </div>

          <ol className="mt-14 grid md:grid-cols-3 gap-8">
            {integrationModes.map((mode, i) => (
              <li key={mode.title}>
                <span className="label-caps font-sans text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-xl">
                  {mode.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-white/80">
                  {mode.desc}
                </p>
              </li>
            ))}
          </ol>
        </TealBand>

        {/* The systems themselves */}
        <Section tone="sand" id="systems">
          <div className="max-w-3xl">
            <Eyebrow>What we connect</Eyebrow>
            <Heading>The systems already on your card statement.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              These are the stacks we work in day to day. If something you run
              is not listed, say what it is — the question is what it exposes,
              not whether we have seen the logo before.
            </p>
          </div>

          <div className="mt-12">
            <SystemGroups />
          </div>
        </Section>

        {/* How a project runs */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>How a project runs</Eyebrow>
            <Heading>Map it, connect it, then build what is left.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              Small pieces that go live and get used, not a six-month project
              with a launch date. The first thing we touch is usually whatever
              is losing you the most work.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.label}
                className="rounded-3xl border border-primary/15 bg-white p-8"
              >
                <span className="label-caps font-sans text-primary/60">
                  {step.label}
                </span>
                <h3 className="mt-3 font-heading font-bold text-xl text-ink">
                  {step.heading}
                </h3>
                <ul className="mt-5 flex flex-col gap-3 font-sans text-[15px] leading-relaxed text-body">
                  {step.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-primary/50"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Proof + the price boundary */}
        <Section tone="sand">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>What it costs</Eyebrow>
              <Heading>One price published: the audit.</Heading>
              <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
                <p>
                  The {AUDIT_OFFER} is the only figure on this site. It buys the
                  map: every system, every handoff, and a ranked list of what to
                  connect first.
                </p>
                <p>
                  The build is quoted after that, because a number before it
                  would be a guess. There are no packages, no tiers, and no
                  &ldquo;starting at&rdquo; hiding further down the page.
                </p>
              </div>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button href={AUDIT_CTA.href} variant="teal">
                  {AUDIT_CTA.label}
                </Button>
                <Button
                  href="/pricing"
                  variant="teal"
                  className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
                >
                  See the full ladder
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

        <Faq
          items={faqItems}
          eyebrow="Integration questions"
          heading="What owners ask first."
        />

        <CtaBand
          sub={`Start with the ${AUDIT_OFFER} and you'll have the map of your own stack, or book a call and describe it to us first.`}
        />
      </Shell>
    </>
  );
}
