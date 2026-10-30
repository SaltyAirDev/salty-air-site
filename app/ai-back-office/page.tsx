import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/Button";
import { retainerInclusions } from "@/lib/offers";
import { AUDIT_PRICE, CALENDAR_URL, SITE_URL, SLOGAN } from "@/lib/site";

const TITLE = "The AI Back Office";
const DESCRIPTION =
  "What the retainer covers: missed-call text-back and AI answering, lead intake into Housecall Pro or Jobber, estimate follow-up, review requests, CRM and scheduling, an SEO website, and optional public-data add-ons.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/ai-back-office` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}/ai-back-office`,
    type: "website",
    siteName: "Salty Air",
  },
};

const steps = [
  {
    title: "The call comes in",
    desc: "Picked up, or answered by the AI line. Either way somebody gets the address, the problem, and whether it's urgent.",
  },
  {
    title: "Nothing goes to voicemail",
    desc: "Any call you can't take gets a text back in seconds with a way to book. The caller never has a reason to dial the next shop.",
  },
  {
    title: "The job lands in your system",
    desc: "Housecall Pro, Jobber, or whatever you dispatch from — populated with the details, not waiting for you to retype them.",
  },
  {
    title: "The estimate gets chased",
    desc: "Quotes go out and then get followed up on a schedule until they're won, lost, or answered.",
  },
  {
    title: "The review gets asked for",
    desc: "Closed jobs trigger the ask while the customer is still pleased, which is the only time it works.",
  },
  {
    title: "The site keeps feeding it",
    desc: "An SEO site built to rank for the work you want and to turn visits into booked jobs, wired into the same intake.",
  },
];

export default function AiBackOfficePage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="The back office that runs while you're on the"
        headlineAccent="roof."
        sub="One connected system: answering, intake, follow-up, reviews, scheduling, and the website that feeds it. This is what the retainer covers."
        primaryCta={{ label: "Book a call", href: CALENDAR_URL }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        image="/brand/palm-portrait.jpg"
        imageAlt="Palm fronds against a warm sky"
        priority
      />

      {/* What's in it */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>What&rsquo;s included</Eyebrow>
          <Heading>Seven pieces, one system.</Heading>
          <p className="mt-6 font-sans text-lg leading-relaxed text-body">
            These aren&rsquo;t separate products you bolt together. They share
            the same customer records, the same calendar, and the same intake,
            which is the only reason any of it holds up over a busy week.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {retainerInclusions.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-primary/15 bg-white p-7"
            >
              <span className="label-caps font-sans text-primary/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-heading font-bold text-xl text-ink">
                {item.title}
              </h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-body">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How a job moves through it */}
      <TealBand innerClassName="py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="label-caps block font-sans text-accent">
            How a job moves through it
          </span>
          <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
            From the ring to the{" "}
            <span className="text-accent">review.</span>
          </h2>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="label-caps font-sans text-accent">
                Step {i + 1}
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
      </TealBand>

      {/* Who builds it */}
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
            <Eyebrow>Who builds it</Eyebrow>
            <Heading>Built by someone who runs the trucks.</Heading>
            <p className="mt-6 font-sans text-lg leading-relaxed text-body">
              Romas runs Grazys Construction and Salty Home Services, and
              launched Salty Electric. The back office described here is the one
              he built for his own shops — not a template adapted from somebody
              else&rsquo;s industry.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href="/about" variant="teal">
                About Romas
              </Button>
              <Button
                href="/case-studies/salty-home-services"
                variant="teal"
                className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
              >
                See the case study
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
