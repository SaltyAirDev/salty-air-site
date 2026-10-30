import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { FaqJsonLd, type FaqItem } from "@/components/seo/FaqJsonLd";
import { SystemChips } from "@/components/site/Systems";
import { Button } from "@/components/ui/Button";
import {
  AUDIT_CHECKOUT_URL,
  AUDIT_PRICE,
  CALENDAR_URL,
  QUOTED_AFTER_AUDIT,
  SERVICE_TYPE,
  SITE_URL,
  SLOGAN,
} from "@/lib/site";

const PATH = "/embedded";
const TITLE = "Embedded Engineering — We Show Up and Own the Stack";
const DESCRIPTION =
  "A forward-deployed engineering team embedded in your business: we show up, own the software and the integrations, and ship continuously. Monthly, quoted after the $499 audit.";

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

/**
 * What embedding means, in owner language. "Forward-deployed engineering" is
 * the industry term and it buys nothing with somebody running four trucks or
 * three job sites, so it appears once and then gets explained.
 */
const commitments = [
  {
    title: "We show up in your business",
    desc: "On the phones, in the dispatch board, in the plan room, in the estimate folder. Before anything gets built, and after. You should not have to explain your business twice, and you should not have to write a spec to get work done.",
  },
  {
    title: "We own the stack",
    desc: "The software, the integrations, the accounts, the subscriptions, and the vendor calls. One team responsible for all of it instead of four vendors pointing at each other and you refereeing.",
  },
  {
    title: "We ship continuously",
    desc: "Small pieces that go live and get used, every week. Not a six-month project with a launch date and an invoice schedule. If something is not working by Thursday, it changes.",
  },
];

const days = [
  {
    label: "First 30 days",
    heading: "We learn the business",
    items: [
      "Time with you and whoever answers the phone, watching how work actually moves",
      "An inventory of every system you pay for, who uses it, and what it was meant to fix",
      "A written picture of where work is falling between systems, ranked by what it costs",
      "Agreement on the first two or three things we build — and what we deliberately leave alone",
    ],
  },
  {
    label: "Days 30–60",
    heading: "We connect and set up",
    items: [
      "The phone usually goes first: missed-call text-back and answering, wired into dispatch",
      "Intake connected to the system you already work off, so nothing gets retyped",
      "Follow-up and review or closeout requests running on a schedule rather than on memory",
      "Everything in your accounts, documented, with your crew trained on the parts they touch",
    ],
  },
  {
    label: "Days 60–90",
    heading: "We run it and widen",
    items: [
      "A standing weekly working session on what shipped and what the business needs next",
      "Accounting, CRM, and reporting brought onto the same record instead of living apart",
      "Custom builds where the integration ran out of road",
      "Vendor and subscription cleanup — we take the software decisions off your plate",
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    q: "What does “embedded” actually mean?",
    a: "That the people who build your systems are the people who sat in your business and watched the work — and who are still on the hook once it is live. We spend the first stretch of an engagement learning how work really moves before anything gets built. The industry calls it forward-deployed engineering; in practice it means we come to you.",
  },
  {
    q: "How is this different from hiring an agency?",
    a: "An agency takes a brief and returns a deliverable. We work inside the business, with your people, on your accounts, and we decide what to build with you rather than waiting to be told. There is no account manager in the middle and no change-request form.",
  },
  {
    q: "Do I need to start with the audit?",
    a: `Almost always, yes. The ${AUDIT_PRICE} audit is what makes a real scope possible — without it we would be quoting a guess. You keep the report either way, and if you go on to the embedded engagement we start from it rather than charging you to discover the same things twice.`,
  },
  {
    q: "Why is there no price on this page?",
    a: "Because it would be a made-up number. What the engagement costs depends on how many systems are in play, how much of the build is new, and how deep you want us in. Start with the audit and the scope writes itself.",
  },
  {
    q: "Is there a contract or a lock-in?",
    a: "The engagement is monthly. What gets built is yours, documented, in accounts you own. If you stop, the stack keeps running on your accounts and another team can pick it up.",
  },
  {
    q: "Who does this work for?",
    a: "Trade and home services companies, and construction general contractors and specialty subs — businesses big enough that the software has become a job, and not big enough to have hired someone to do it. A little inbound work outside that is handled case by case on the Other Work page.",
  },
];

export default function EmbeddedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Embedded forward-deployed engineering",
        description: DESCRIPTION,
        serviceType: SERVICE_TYPE,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        url: `${SITE_URL}${PATH}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Embedded",
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
          headline="An engineering team that shows up at your"
          headlineAccent="shop."
          sub="We embed with your business, take the whole stack off your plate, and keep shipping. One team on the hook for the software, the integrations, and the vendors you already pay."
          primaryCta={{ label: "Book a call", href: CALENDAR_URL }}
          secondaryCta={{ label: `Start with the ${AUDIT_PRICE} audit`, href: AUDIT_CHECKOUT_URL }}
          image="/brand/palm-portrait.jpg"
          imageAlt="Palm fronds against a warm sky"
          priority
        />

        {/* What the engagement is */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>What this is</Eyebrow>
            <Heading>Somebody has to own the software. That somebody is us.</Heading>
            <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
              <p>
                Most businesses reach a size where the technology stops being a
                few apps and starts being a job. The phone, the field system,
                the estimates, the accounting, the website, the five
                subscriptions nobody can account for — it adds up to a role,
                and the owner ends up filling it between jobs.
              </p>
              <p>
                An embedded engagement is us filling it instead. We make the
                software and operations calls with you, connect and build what
                needs it, and stay responsible for the result. You get an
                engineering team without carrying payroll for one.
              </p>
              <p>
                This is not an arrangement where work goes over a wall and a
                report comes back. We work inside your business, with your
                people, on your accounts.
              </p>
            </div>
          </div>
        </Section>

        {/* The FDE explainer */}
        <TealBand innerClassName="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="label-caps block font-sans text-accent">
              What &ldquo;embedded&rdquo; means
            </span>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
              Show up. Own the stack.{" "}
              <span className="text-accent">Keep shipping.</span>
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-white/80">
              The industry term for this is forward-deployed engineering.
              Stripped of the jargon, it means the people who build your systems
              are the same people who sat in your business and watched the work
              — and who are still on the hook once it is live.
            </p>
          </div>

          <ol className="mt-14 grid md:grid-cols-3 gap-8">
            {commitments.map((item, i) => (
              <li key={item.title}>
                <span className="label-caps font-sans text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-white/80">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-white/15 pt-10">
            <span className="label-caps block font-sans text-accent">
              The stack we take on
            </span>
            <div className="mt-5">
              <SystemChips />
            </div>
          </div>
        </TealBand>

        {/* 30 / 60 / 90 */}
        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>The first 90 days</Eyebrow>
            <Heading>What actually happens, week by week.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              Every business is different, so the order shifts. The shape does
              not: learn it, connect what is already there, then build what is
              left while we keep the rest running.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {days.map((stage) => (
              <div
                key={stage.label}
                className="rounded-3xl border border-primary/15 bg-white p-8"
              >
                <span className="label-caps font-sans text-primary/60">
                  {stage.label}
                </span>
                <h3 className="mt-3 font-heading font-bold text-xl text-ink">
                  {stage.heading}
                </h3>
                <ul className="mt-5 flex flex-col gap-3 font-sans text-[15px] leading-relaxed text-body">
                  {stage.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-primary/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* What it costs, stated as the boundary it is */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>What it costs</Eyebrow>
            <Heading>{QUOTED_AFTER_AUDIT}.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              The {AUDIT_PRICE} audit is the only published price on this site.
              The embedded engagement is monthly and quoted off what the audit
              finds — no bands, no tiers, no figure invented to fill a table.
              Start there and the scope writes itself.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href={AUDIT_CHECKOUT_URL} variant="teal">
                Book the {AUDIT_PRICE} audit
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
        </Section>

        {/* Proof */}
        <Section tone="sand">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden order-last lg:order-first">
              <Image
                src="/brand/stock/van-job.jpg"
                alt="Work van parked at a residential job site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow>Proof</Eyebrow>
              <Heading>A stack we built and still run.</Heading>
              <p className="mt-6 font-sans text-lg leading-relaxed text-body">
                Salty Home Services is our own home services company. We built
                and run its stack — the missed-call text-back and AI answering
                on Quo, web leads into Housecall Pro, the estimate follow-up,
                the review requests, the scheduling, and the SEO site. The case
                study lists what was built and nothing we haven&rsquo;t
                measured.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button href="/case-studies/salty-home-services" variant="teal">
                  Read the case study
                </Button>
                <Button
                  href="/integrations"
                  variant="teal"
                  className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
                >
                  What we connect
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Faq items={faqItems} eyebrow="Common questions" heading="Before you embed us." />

        <CtaBand
          sub={`Start with the ${AUDIT_PRICE} audit to see what's actually in your stack, or book a call and we'll scope the engagement around it.`}
        />
      </Shell>
    </>
  );
}
