import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/Button";
import { AUDIT_PRICE, SITE_URL, SLOGAN } from "@/lib/site";

const TITLE = "About Salty Air & How We Work";
const DESCRIPTION =
  "Salty Air is a fractional CTO and operations partner for trade and home service businesses. Who we serve, what we build, and how an engagement actually runs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    type: "website",
    siteName: "Salty Air",
  },
};

/** How we work, stated as commitments rather than adjectives. */
const principles = [
  {
    title: "We come to you",
    desc: "Engagements start with our team in your business — on the phones, in the dispatch board, in the estimate folder. You should never have to explain your shop twice.",
  },
  {
    title: "You own everything",
    desc: "Systems get built in accounts in your name, documented as we go. If we part ways, the back office keeps running and you keep the keys.",
  },
  {
    title: "We stay on the hook",
    desc: "Building it is the easy half. The retainer exists because somebody has to own the thing once the season turns and the crew changes.",
  },
  {
    title: "No numbers we haven't measured",
    desc: "There are no case-study metrics, testimonials, or client logos on this site, because none of them have been earned yet. When they are, they go up with the engagement named.",
  },
];

const engagement = [
  {
    t: "Start with the audit",
    d: `The ${AUDIT_PRICE} business audit is the normal first step. Forty-five minutes on how the shop runs today, then a written report on what is leaking and what to fix first. Yours either way.`,
  },
  {
    t: "Move to the retainer",
    d: "If it makes sense, we take on the fractional CTO and operations role monthly. We embed, agree what gets built first, build it, and then run it. Scope comes out of a conversation, not a package.",
  },
  {
    t: "Widen when ready",
    d: "Add-ons — the back office systems and the data services — get layered on as the shop can absorb them. One partner across the lot, rather than four vendors and a spreadsheet.",
  },
];

export default function AboutPage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="The technology team your shop never"
        headlineAccent="hired."
        sub="Salty Air is a fractional CTO and operations partner for trade and home service businesses. We embed in the business, build the systems it needs, and run them. This is how that works."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "See the engagement", href: "/fractional-cto" }}
        image="/brand/interior-plants.jpg"
        imageAlt="Warm, sunlit interior with plants"
        priority
      />

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Who we serve</Eyebrow>
          <Heading>Trade and home service companies, run by the owner.</Heading>
          <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
            <p>
              Electricians, plumbers, HVAC contractors, handymen, general
              contractors, roofers, and landscapers — from an owner-operator
              with one truck to a shop running several crews. The common thread
              is that the phone, the estimates, and the software all still land
              on the owner.
            </p>
            <p>
              We are based in Salt Lake and work with shops across the United
              States. Trade and home services are the whole focus; a small
              amount of inbound work outside that is handled case by case on
              the Other Work page.
            </p>
          </div>
        </div>
      </Section>

      <TealBand innerClassName="py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="label-caps block font-sans text-accent">
            How we work
          </span>
          <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
            Four things you can hold us{" "}
            <span className="text-accent">to.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {principles.map((item) => (
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
        <div className="max-w-3xl">
          <Eyebrow>How engagements work</Eyebrow>
          <Heading>Audit, retainer, add-ons.</Heading>
        </div>

        <ol className="mt-12 grid md:grid-cols-3 gap-8">
          {engagement.map((step, i) => (
            <li key={step.t}>
              <span className="label-caps font-sans text-primary/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading font-bold text-xl text-ink">
                {step.t}
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-body">
                {step.d}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>Why it reads this way</Eyebrow>
            <Heading>No agency translation layer.</Heading>
            <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
              <p>
                You won&rsquo;t spend the first call explaining what a service
                area is, why a panel upgrade quote is worth chasing, or how
                dispatch actually works on a busy Tuesday. Our team works in
                trade shops, not around them.
              </p>
              <p>
                And you won&rsquo;t get a deck full of numbers borrowed from
                somebody else&rsquo;s industry. If a figure isn&rsquo;t
                measured, it isn&rsquo;t published here.
              </p>
            </div>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href="/fractional-cto" variant="teal">
                What we build and run
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

          <div className="relative aspect-4/5 rounded-3xl overflow-hidden">
            <Image
              src="/brand/palm-portrait.jpg"
              alt="Palm fronds against a warm sky"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <CtaBand sub="If the shop sounds like yours, there's a good chance the fix is the same one." />
    </Shell>
  );
}
