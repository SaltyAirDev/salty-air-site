import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { OfferCards } from "@/components/site/OfferCards";
import { AddOns } from "@/components/site/AddOns";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { FaqJsonLd, type FaqItem } from "@/components/seo/FaqJsonLd";
import { Button } from "@/components/ui/Button";
import { trades, tradeHref } from "@/lib/trades";
import { AUDIT_PRICE, CALENDAR_URL, POSITIONING, SHS_URL } from "@/lib/site";

// Page metadata for `/` lives in app/layout.tsx, since it is the site-wide default.

/** Embed, build, run — the short version of /fractional-cto. */
const howWeWork = [
  {
    title: "We embed",
    desc: "Our team spends time in your business first — on the phones, in the dispatch board, in the estimate folder. No proposal before we have seen the work.",
  },
  {
    title: "We build",
    desc: "Then we build what the shop is actually losing money on, in accounts you own. Small pieces that go live and get used.",
  },
  {
    title: "We run it",
    desc: "And we stay on the hook for it. Seasons turn, crews change, things break — owning that is the retainer.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "What is a fractional CTO for a trade business?",
    a: "It is the technology and operations role your shop has grown into, filled part time. We make the decisions with you about the phone, the dispatch software, the site, and the subscriptions nobody can account for — then we build what is needed and keep it running. You get the function without carrying a salary for it.",
  },
  {
    q: "What does “embedded” actually mean?",
    a: "That the people who build your systems are the people who sat in your shop and watched the work. We spend the first stretch of an engagement learning how calls, leads, and estimates really move before anything gets built. The industry calls it forward-deployed engineering; in practice it just means we come to you.",
  },
  {
    q: "What actually happens when I miss a call?",
    a: "The caller gets a text back within seconds — not a voicemail beep. It comes from your number, says you're on a job, and gives them a way to book or describe what they need. If you'd rather a real conversation happen, the AI answering line picks up instead and takes the details.",
  },
  {
    q: "Do I have to switch off Housecall Pro or Jobber?",
    a: "No. The point is that leads land in the system you already dispatch from. We build around Housecall Pro or Jobber rather than replacing them. If you run something else, tell us what and we'll work with it.",
  },
  {
    q: "What does the $499 audit get me?",
    a: "A walkthrough of how calls, leads, and estimates move through your shop today, and a written report on what's leaking and what to fix first. You keep the report whether or not you hire us afterwards.",
  },
  {
    q: "Why isn't the retainer price on the site?",
    a: "Because it would be a made-up number. Scope depends on your call volume, crew size, and what you already run. Book a call, describe the shop, and you'll get a real number instead of a range you'd have to negotiate down from.",
  },
  {
    q: "Do you work with businesses outside the trades?",
    a: "Occasionally, and only inbound — a little law practice work and some embedded engineering for enterprise teams. That's on the Other Work page. The trades are what this is built for.",
  },
];

export default function Home() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      <Shell>
        <PageHero
          eyebrow="Fractional CTO & ops partner for the trades"
          headline="Work Less. Live More."
          headlineAccent="Automate."
          sub={POSITIONING}
          primaryCta={{ label: `Book a ${AUDIT_PRICE} audit`, href: "/pricing" }}
          secondaryCta={{ label: "Ask about the retainer", href: "/contact" }}
          image="/brand/hero-palms.jpg"
          imageAlt="Sun through a stand of palms"
          priority
          footnote="Salt Lake, UT"
        />

        {/* Who it's for */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>Who this is for</Eyebrow>
            <Heading>
              Shops where the owner is still the one answering the phone.
            </Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              Electricians, plumbers, HVAC, handymen, GCs, roofers,
              landscapers. Stop losing jobs to the voicemail — and stop being
              the one who does the admin at nine at night. If the work gets
              done on a ladder, this is built for you.
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
        </Section>

        {/* How we work — embed, build, run */}
        <TealBand innerClassName="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="label-caps block font-sans text-accent">
              How we work
            </span>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
              We embed in the business, then build and{" "}
              <span className="text-accent">run the systems.</span>
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-white/80">
              Not an agency you brief and wait on. A partner inside the shop,
              on a monthly retainer, responsible for the technology and the
              back office so you can run the work.
            </p>
          </div>

          <ol className="mt-14 grid md:grid-cols-3 gap-8">
            {howWeWork.map((step, i) => (
              <li key={step.title}>
                <span className="label-caps font-sans text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-white/80">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <Button href="/fractional-cto" variant="peach">
              See the first 30, 60, and 90 days
            </Button>
          </div>
        </TealBand>

        {/* Case study callout — facts only, no metrics */}
        <Section tone="sand">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>Case study</Eyebrow>
              <Heading>A back office we built and still run.</Heading>
              <p className="mt-6 font-sans text-lg leading-relaxed text-body">
                Salty Home Services is a Utah home services company. We built
                and run its missed-call text-back and AI answering on Quo, the
                Housecall Pro lead form, the estimate follow-up, the review
                requests, the scheduling, and the SEO site — the same work
                described on this page.
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
            <Heading>An audit to start, a retainer to run.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              A {AUDIT_PRICE} audit you can take and run yourself, or the
              fractional CTO and ops retainer where we embed, build, and run
              it. The add-ons sit on top of the retainer. No packages, no
              tiers, no numbers invented to fill a table.
            </p>
          </div>

          <div className="mt-12">
            <OfferCards />
          </div>

          <div className="mt-6">
            <AddOns />
          </div>
        </Section>

        <Faq items={faqItems} />

        <CtaBand
          sub={`Book the ${AUDIT_PRICE} audit, or book a call and we'll scope the retainer around how your shop actually runs.`}
          primaryCta={{ label: `Book the ${AUDIT_PRICE} audit`, href: "/pricing" }}
          secondaryCta={{ label: "Book a call", href: CALENDAR_URL }}
        />
      </Shell>
    </>
  );
}
