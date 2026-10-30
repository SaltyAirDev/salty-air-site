import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { OfferCards } from "@/components/site/OfferCards";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import { FaqJsonLd, type FaqItem } from "@/components/seo/FaqJsonLd";
import { Button } from "@/components/ui/Button";
import { retainerInclusions } from "@/lib/offers";
import { trades, tradeHref } from "@/lib/trades";
import { AUDIT_PRICE, CALENDAR_URL, SHS_URL } from "@/lib/site";

// Page metadata for `/` lives in app/layout.tsx, since it is the site-wide default.

const faqItems: FaqItem[] = [
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
    q: "Is this an AI agency?",
    a: "No. Romas runs Grazys Construction and Salty Home Services and launched Salty Electric. The back office on this site is the one he built for his own shops first. You're buying something that already answers his phone.",
  },
  {
    q: "Do you work with businesses outside the trades?",
    a: "Occasionally, and only inbound — a little law practice work and some embedded engineering. That's on the Other Work page. The trades are what this is built for.",
  },
];

export default function Home() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      <Shell>
        <PageHero
          eyebrow="AI back office for trade shops"
          headline="Work Less. Live More."
          headlineAccent="Automate."
          sub="Stop losing jobs to the voicemail. Missed-call text-back, estimate follow-up, review requests, and a site that books work — built by someone who runs the trucks."
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
              Electricians, plumbers, HVAC, handymen, GCs, roofers, landscapers.
              If the work gets done on a ladder and the admin gets done at
              nine at night, this is built for you.
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

        {/* AI back office snapshot */}
        <TealBand innerClassName="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="label-caps block font-sans text-accent">
              The AI back office
            </span>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
              Everything that should happen after the phone rings{" "}
              <span className="text-accent">— happening.</span>
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-white/80">
              One system that answers, captures, follows up, and asks for the
              review. You keep running the jobs.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {retainerInclusions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-7"
              >
                <h3 className="font-heading font-semibold text-lg text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-white/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/ai-back-office" variant="peach">
              See the whole back office
            </Button>
          </div>
        </TealBand>

        {/* Case study callout — facts only, no metrics */}
        <Section tone="sand">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>Case study</Eyebrow>
              <Heading>We ran it on our own shop first.</Heading>
              <p className="mt-6 font-sans text-lg leading-relaxed text-body">
                Salty Home Services is Romas&rsquo;s own home service company.
                Its missed-call text-back, AI answering, lead intake into
                Housecall Pro, estimate follow-up, review requests, scheduling,
                and SEO site were all built in-house — the same stack described
                on this page.
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

        {/* Pricing teaser */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>Pricing</Eyebrow>
            <Heading>Two ways in. That&rsquo;s the whole menu.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              A {AUDIT_PRICE} audit you can take and run yourself, or a retainer
              where we build and run it for you. No packages, no tiers, no
              numbers invented to fill a table.
            </p>
          </div>

          <div className="mt-12">
            <OfferCards />
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
