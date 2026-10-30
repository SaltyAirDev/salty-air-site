import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/Button";
import { AUDIT_PRICE, CALENDAR_URL, SHS_URL, SITE_URL, SLOGAN } from "@/lib/site";

const PATH = "/case-studies/salty-home-services";
const TITLE = "Case Study: Salty Home Services";
const DESCRIPTION =
  "A back office we built and run for a Utah home services company — missed-call text-back and AI answering via Quo, lead intake into Housecall Pro, estimate follow-up, review requests, scheduling, and an SEO site.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    type: "article",
    siteName: "Salty Air",
  },
};

/**
 * Verifiable facts only. No response times, no close rates, no hours
 * reclaimed — nothing here is measured, so nothing here is claimed.
 */
const built = [
  {
    title: "Missed-call text-back & AI answering",
    desc: "Built on Quo. Calls that aren't picked up get an immediate text back; the AI line answers and takes the job details when nobody is free.",
  },
  {
    title: "Lead form into Housecall Pro",
    desc: "Web leads land directly in Housecall Pro with the job details attached, so dispatch works from one list.",
  },
  {
    title: "Estimate follow-up",
    desc: "Sent estimates are followed up on a schedule rather than waiting for someone to remember them.",
  },
  {
    title: "Review requests",
    desc: "Completed jobs trigger a review request to the customer.",
  },
  {
    title: "Scheduling",
    desc: "Jobs, crews, and customer records kept in one calendar rather than spread across text threads.",
  },
  {
    title: "SEO website",
    desc: "saltyhomeservices.co — built to be found for the work the shop wants and wired into the same intake.",
  },
];

export default function CaseStudyPage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="A back office we built, and still"
        headlineAccent="run."
        sub="Salty Home Services is a Utah home services company. Its phone, intake, follow-up, reviews, scheduling, and site are all work we did — and work we keep running."
        primaryCta={{ label: "Visit saltyhomeservices.co", href: SHS_URL }}
        secondaryCta={{ label: "Book a call", href: CALENDAR_URL }}
        image="/brand/surfboards.jpg"
        imageAlt="Surfboards lined up against a wall"
        priority
      />

      {/* Context */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The context</Eyebrow>
          <Heading>A home services shop with one phone and no office.</Heading>
          <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
            <p>
              Salty Home Services is a home services company in Utah. The admin
              load was the usual one: calls arriving while the crew was on a
              job, estimates waiting on a follow-up nobody owned, reviews never
              asked for, and a schedule living across text threads.
            </p>
            <p>
              We embedded, built the back office around how the shop actually
              dispatches, and now run it. What&rsquo;s listed below is what was
              built and is live. There are no performance figures on this page,
              because publishing numbers we haven&rsquo;t measured would make
              the rest of it worth less.
            </p>
          </div>
        </div>
      </Section>

      {/* What was built */}
      <TealBand innerClassName="py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="label-caps block font-sans text-accent">
            What was built
          </span>
          <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
            The stack, in <span className="text-accent">full.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {built.map((item) => (
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
      </TealBand>

      <Section tone="sand">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Why it matters to you</Eyebrow>
            <Heading>You&rsquo;re not the pilot customer.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              This is the same stack, built by the same team, in a shop that
              dispatches every day. We didn&rsquo;t hand it over and leave — we
              still run it, which is what the retainer is.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href="/fractional-cto" variant="teal">
                How we build and run it
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

          <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
            <Image
              src="/brand/shells.jpg"
              alt="Shells on sand"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <CtaBand
        sub={`Want the same thing running on your shop? Start with the ${AUDIT_PRICE} audit, or book a call.`}
      />
    </Shell>
  );
}
