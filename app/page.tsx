import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { OfferCards } from "@/components/site/OfferCards";
import { OfferSplit } from "@/components/site/OfferSplit";
import { ValuePillars } from "@/components/site/ValuePillars";
import { SystemChips } from "@/components/site/Systems";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { FaqJsonLd, type FaqItem } from "@/components/seo/FaqJsonLd";
import { Button } from "@/components/ui/Button";
import { trades, tradeHref, GC_LABEL, GC_PATH } from "@/lib/trades";
import { integrationModes } from "@/lib/systems";
import {
  AUDIT_CTA,
  AUDIT_OFFER,
  AUDIT_PATH,
  AUDIT_TURNAROUND,
  HERO_HEADLINE,
  HERO_HEADLINE_ACCENT,
  POSITIONING,
  SHS_URL,
} from "@/lib/site";

// Page metadata for `/` lives in app/layout.tsx, since it is the site-wide default.

const faqItems: FaqItem[] = [
  {
    q: "What does Salty Air actually do?",
    a: "We are an integrations shop. We get into a business, connect the systems it already pays for so work stops falling between them, set up whatever was bought and never turned on, and build custom where nothing off the shelf fits.",
  },
  {
    q: "Do I have to switch off Housecall Pro, Jobber, ServiceTitan, or Procore?",
    a: "No. You already pay for them and your people already know them. We build around the system you work off rather than replacing it, and we connect it to the phones, the CRM, the ledger, and the reporting.",
  },
  {
    q: "What does “embedded” actually mean?",
    a: "That the people who build your systems are the people who sat in your business and watched the work — and who are still on the hook once it is live. In practice it means we come to you: the ride-alongs, the intake process, how the office really books a job.",
  },
  {
    q: "Do you work with contractors as well as trade shops?",
    a: "Both, from day one. A trade shop's problem is mostly the phone and the dispatch board; a general contractor's is a plan room, an estimating system, a project system, and a ledger that barely talk. Different stacks, same shop doing the work.",
  },
  {
    q: `What does the ${AUDIT_OFFER} get me?`,
    a: `An inventory of the software you pay for, a map of every place your team retypes data, and a ranked list of the connections worth making first — in writing, within ${AUDIT_TURNAROUND} of one working session. You keep it whether or not you hire us afterwards.`,
  },
  {
    q: "Why is the audit the only price on the site?",
    a: "Because any other number here would be made up. What a build or an embedded engagement costs depends on how many systems are in play and how much of the work is new. The audit produces the scope, and the scope produces the number.",
  },
  {
    q: "Do you work with businesses outside the trades and construction?",
    a: "Occasionally, and only inbound — a little law practice work and some engineering alongside enterprise teams. That is on the Other Work page.",
  },
];

export default function Home() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      <Shell>
        <PageHero
          eyebrow="Integrations & embedded engineering"
          headline={HERO_HEADLINE}
          headlineAccent={HERO_HEADLINE_ACCENT}
          sub={POSITIONING}
          primaryCta={AUDIT_CTA}
          secondaryCta={{ label: "See what we connect", href: "/integrations" }}
          image="/brand/hero-palms.jpg"
          imageAlt="Sun through a stand of palms"
          priority
          footnote="Salt Lake, UT"
        />

        {/* The three value pillars — shared with /integrations */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>What we do</Eyebrow>
            <Heading>
              Three things, and we do them in this order.
            </Heading>
          </div>

          <div className="mt-12">
            <ValuePillars />
          </div>
        </Section>

        {/* The two offers */}
        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>Two ways we work</Eyebrow>
            <Heading>Connect the stack, or let us run it.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              Most engagements start with the integrations: the systems you
              already pay for, wired together, with the missing pieces set up on
              the way. Some become something bigger — us embedded in the
              business, owning the whole stack and shipping every week.
            </p>
          </div>

          <div className="mt-12">
            <OfferSplit />
          </div>
        </Section>

        {/* The stack we connect */}
        <TealBand innerClassName="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="label-caps block font-sans text-accent">
              The stack
            </span>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
              Connect. Set up.{" "}
              <span className="text-accent">Build what is left.</span>
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-white/80">
              In that order, on purpose. Connecting what you already own is the
              cheapest fix available, and most businesses have never had anyone
              do it properly.
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

          <div className="mt-14 border-t border-white/15 pt-10">
            <span className="label-caps block font-sans text-accent">
              Systems we work in
            </span>
            <div className="mt-5">
              <SystemChips />
            </div>
            <div className="mt-9">
              <Button href="/integrations" variant="peach">
                See how we connect a stack
              </Button>
            </div>
          </div>
        </TealBand>

        {/* Who it's for — trades and construction, both */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>Who this is for</Eyebrow>
            <Heading>
              Businesses where the software has quietly become somebody&rsquo;s
              second job.
            </Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              Trade and home services shops, and construction general
              contractors and specialty subs. Both from day one, because both
              run six systems that were never introduced to each other.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trades.map((trade) => (
              <Link
                key={trade.slug}
                href={tradeHref(trade.slug)}
                className="group rounded-2xl border border-primary/15 bg-white px-6 py-5 flex items-center justify-between transition-colors hover:border-primary/40 hover:bg-seafoam/20"
              >
                <span className="font-heading font-semibold text-lg text-ink">
                  {trade.label}
                </span>
                <span
                  aria-hidden
                  className="text-primary transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Construction gets its own card: a GC's stack is a different shape. */}
          <div className="mt-6 rounded-3xl border border-primary/15 bg-seafoam/20 p-8 md:p-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Eyebrow>Construction</Eyebrow>
              <h3 className="mt-3 font-heading font-bold text-2xl text-ink">
                General contractors &amp; specialty subs
              </h3>
              <p className="mt-4 font-sans text-[15px] leading-relaxed text-body">
                Plan rooms, estimating, RFIs and submittals, change orders, job
                cost to the ledger, and sub compliance — more systems than
                anyone else runs and fewer of them connected.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Button href={GC_PATH} variant="teal">
                {GC_LABEL}
              </Button>
            </div>
          </div>
        </Section>

        {/* Case study callout — facts only, no metrics */}
        <Section tone="sand">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>Case study</Eyebrow>
              <Heading>A stack we built and still run.</Heading>
              <p className="mt-6 font-sans text-lg leading-relaxed text-body">
                Salty Home Services is our own home services company. We built
                and run its stack — missed-call text-back and AI answering on
                Quo, web leads into Housecall Pro, the estimate follow-up, the
                review requests, the scheduling, and the SEO site. The same work
                described on this page, on a business that dispatches every day.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button href="/case-studies/salty-home-services" variant="teal">
                  Read the case study
                </Button>
                <Button
                  href={SHS_URL}
                  variant="teal"
                  className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
                >
                  Visit the site
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
              <Image
                src="/brand/interior-plants.jpg"
                alt="Warm, sunlit interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* The offer ladder */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>How to work with us</Eyebrow>
            <Heading>An audit to start. Everything else quoted off it.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              The {AUDIT_OFFER} is the only published price on this site. It
              maps your stack and hands you a plan you could run yourself. The
              build and the embedded engagement are quoted from that plan — no
              packages, no tiers, no numbers invented to fill a table.
            </p>
            <div className="mt-9">
              <Button href={AUDIT_PATH} variant="teal">
                What is in the {AUDIT_OFFER}
              </Button>
            </div>
          </div>

          <div className="mt-12">
            <OfferCards />
          </div>
        </Section>

        <Faq items={faqItems} />

        <CtaBand
          sub={`Start with the ${AUDIT_OFFER} and you'll have the map of your own stack, or book a call and describe it to us first.`}
        />
      </Shell>
    </>
  );
}
