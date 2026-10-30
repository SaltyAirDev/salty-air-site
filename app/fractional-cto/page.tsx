import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/Button";
import { backOfficeSystems, dataServices } from "@/lib/offers";
import { AUDIT_PRICE, CALENDAR_URL, SITE_URL, SLOGAN } from "@/lib/site";

const PATH = "/fractional-cto";
const TITLE = "Fractional CTO & Operations Partner for the Trades";
const DESCRIPTION =
  "We embed in your business, build the systems it needs, and then run them — a fractional CTO and operations partner for trade and home service companies, with a first 30, 60, and 90 days you can hold us to.";

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
 * The three movements of an engagement. This is the "forward-deployed
 * engineering" idea in owner language — the term itself buys nothing with
 * somebody who runs four trucks, so it appears once and then gets explained.
 */
const phases = [
  {
    title: "We embed",
    desc: "Our team spends real time in your business before proposing anything — on the phones, in the dispatch board, in the estimate folder. You should not have to explain your shop twice.",
  },
  {
    title: "We build",
    desc: "Then we build, in accounts you own, starting with whatever is losing you the most work. Small pieces that go live and get used, not a six-month project with a launch date.",
  },
  {
    title: "We run it",
    desc: "And we keep running it. Systems break, seasons turn, crews change. Somebody has to own that, and on a retainer it is us rather than you at nine at night.",
  },
];

const days = [
  {
    label: "First 30 days",
    heading: "We learn the shop",
    items: [
      "Time with you and whoever answers the phone, watching how calls, leads, and estimates actually move",
      "An inventory of every tool you pay for, who uses it, and what it was supposed to fix",
      "A written picture of where work is leaking, ranked by what it is costing you",
      "Agreement on the first two or three things we build — and what we are deliberately not touching yet",
    ],
  },
  {
    label: "Days 30–60",
    heading: "We build the first pieces",
    items: [
      "The phone gets handled first in most shops: missed-call text-back and AI answering go live",
      "Lead intake wired into the system you already dispatch from, so nothing gets retyped",
      "Estimate follow-up and review requests set running on a schedule",
      "Everything built in your accounts, documented, with your crew trained on the parts they touch",
    ],
  },
  {
    label: "Days 60–90",
    heading: "We run it and widen",
    items: [
      "Weekly working session on what the systems are doing and what the shop needs next",
      "CRM, scheduling, and the site brought into the same intake rather than living apart",
      "Vendor and subscription cleanup — we take the tool decisions off your plate",
      "Data services pointed at your market, if going to find work is the right next move",
    ],
  },
];

export default function FractionalCtoPage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="A CTO for your shop, without the"
        headlineAccent="hire."
        sub="We embed in your business, build the systems it actually needs, and then run them. One partner for the technology and the back office, on a monthly retainer."
        primaryCta={{ label: "Book a call", href: CALENDAR_URL }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        image="/brand/palm-portrait.jpg"
        imageAlt="Palm fronds against a warm sky"
        priority
      />

      {/* What the engagement is */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>What this is</Eyebrow>
          <Heading>Somebody has to own the systems. That somebody is us.</Heading>
          <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
            <p>
              Most trade businesses reach a size where the technology stops
              being a few apps and starts being a job. The phone, the dispatch
              software, the estimates, the website, the five subscriptions
              nobody can account for — it adds up to a role, and the owner ends
              up filling it between jobs.
            </p>
            <p>
              A fractional CTO is that role, part time and on a retainer. We
              make the technology and operations decisions with you, build what
              needs building, and stay responsible for it afterwards. You get
              the function without carrying a salary for it.
            </p>
            <p>
              This is not an agency arrangement where work goes over a wall and
              a report comes back. We work inside your business, with your
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
            Embed first. Then build.{" "}
            <span className="text-accent">Then run it.</span>
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-white/80">
            The industry term for this is forward-deployed engineering. Stripped
            of the jargon, it means the people who build your systems are the
            same people who sat in your shop and watched the work — and who are
            still on the hook once it is live.
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <li key={phase.title}>
              <span className="label-caps font-sans text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading font-semibold text-xl">
                {phase.title}
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-white/80">
                {phase.desc}
              </p>
            </li>
          ))}
        </ol>
      </TealBand>

      {/* 30 / 60 / 90 */}
      <Section tone="sand">
        <div className="max-w-3xl">
          <Eyebrow>The first 90 days</Eyebrow>
          <Heading>What actually happens, week by week.</Heading>
          <p className="mt-6 font-sans text-lg leading-relaxed text-body">
            Every shop is different, so the order shifts. The shape does not:
            learn it, build the piece that is costing you most, then keep it
            running while we widen.
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

      {/* What gets built */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>What we build</Eyebrow>
          <Heading>The AI back office, as it comes out of the work.</Heading>
          <p className="mt-6 font-sans text-lg leading-relaxed text-body">
            These are the systems most shops end up with. They aren&rsquo;t
            separate products bolted together — they share the same customer
            records, the same calendar, and the same intake, which is the only
            reason any of it holds up over a busy week.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {backOfficeSystems.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-primary/15 bg-white p-7"
            >
              <span className="label-caps font-sans text-primary/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading font-bold text-xl text-ink">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-body">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-primary/15 bg-seafoam/20 p-8 md:p-10">
          <Eyebrow>Also available</Eyebrow>
          <h3 className="mt-3 font-heading font-bold text-2xl text-ink">
            Data services
          </h3>
          <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-body">
            {dataServices.map((s) => s.title).join(" and ")} — public-data feeds
            pointed at your market, for when the shop is ready to go find work
            instead of waiting for it. Scoped inside the retainer, same as
            everything else.
          </p>
          <div className="mt-7">
            <Link
              href="/data-addons"
              className="font-sans font-semibold text-[15px] text-primary underline underline-offset-4 hover:text-burnt transition-colors"
            >
              See the data services →
            </Link>
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
            <Heading>A back office we built and still run.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              Salty Home Services is a Utah home services company whose back
              office we built and run — the missed-call text-back and AI
              answering on Quo, the Housecall Pro lead form, the estimate
              follow-up, the review requests, the scheduling, and the site. The
              case study lists what was built and nothing we haven&rsquo;t
              measured.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href="/case-studies/salty-home-services" variant="teal">
                Read the case study
              </Button>
              <Button
                href="/about"
                variant="teal"
                className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
              >
                How we work
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        sub={`Start with the ${AUDIT_PRICE} audit to see what's leaking, or book a call and we'll scope the retainer around your shop.`}
      />
    </Shell>
  );
}
