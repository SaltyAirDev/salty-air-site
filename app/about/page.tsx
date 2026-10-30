import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/Button";
import { AUDIT_OFFER, AUDIT_TURNAROUND, SITE_URL, SLOGAN } from "@/lib/site";

const TITLE = "About Salty Air & How We Work";
const DESCRIPTION =
  "Salty Air is an integrations shop for trades, home services, and construction. Who we serve, what we connect and build, and how an engagement actually runs.";

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
    desc: "Engagements start with our team in your business — on the phones, in the dispatch board, in the plan room, in the estimate folder. You should never have to explain your business twice.",
  },
  {
    title: "We use what you already pay for",
    desc: "Connecting the systems you own is the cheapest fix available, so it comes first. We only set up something new when there is a real gap, and we only build custom when nothing fits.",
  },
  {
    title: "You own everything",
    desc: "Systems get built in accounts in your name, documented as we go, with the source yours. If we part ways, the stack keeps running and you keep the keys.",
  },
  {
    title: "No numbers we haven't measured",
    desc: "There are no case-study metrics, testimonials, or client logos on this site, because none of them have been earned yet. When they are, they go up with the engagement named.",
  },
];

const engagement = [
  {
    t: "Start with the audit",
    d: `The ${AUDIT_OFFER} is the normal first step. One working session on every system in the business and how work moves between them, then written findings within ${AUDIT_TURNAROUND}. Yours either way.`,
  },
  {
    t: "Connect and build",
    d: "Then the work the audit found: the integrations between what you already run, the missing pieces set up, and custom builds where nothing off the shelf fits. Quoted off the plan.",
  },
  {
    t: "Or embed with us",
    d: "If you would rather not own any of it, we stay in the business monthly — the stack, the integrations, and the vendors on us, shipping continuously. One team instead of four vendors and a spreadsheet.",
  },
];

export default function AboutPage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="The engineering team your business never"
        headlineAccent="hired."
        sub="Salty Air is an integrations shop. We get into a business, connect the systems it already pays for, set up what was bought and never turned on, and build custom where nothing fits. This is how that works."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "See what we connect", href: "/integrations" }}
        image="/brand/interior-plants.jpg"
        imageAlt="Warm, sunlit interior with plants"
        priority
      />

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Who we serve</Eyebrow>
          <Heading>Trades, home services, and construction.</Heading>
          <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
            <p>
              Electricians, plumbers, HVAC contractors, handymen, roofers, and
              landscapers — from an owner-operator with one truck to a shop
              running several crews. And construction general contractors and
              specialty subs, where the stack is bigger and messier and a job
              runs for months.
            </p>
            <p>
              The common thread is that the software has become somebody&rsquo;s
              second job, usually the owner&rsquo;s. We are based in Salt Lake
              and work with businesses across the United States. A small amount
              of inbound work outside those two audiences is handled case by
              case on the Other Work page.
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
          <Heading>Audit, build, or embed.</Heading>
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
            <Heading>No translation layer.</Heading>
            <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
              <p>
                You won&rsquo;t spend the first call explaining what a service
                area is, why a panel upgrade quote is worth chasing, or what
                happens to a change order that nobody priced. Our team works in
                these businesses, not around them.
              </p>
              <p>
                And you won&rsquo;t get a deck full of numbers borrowed from
                somebody else&rsquo;s industry. If a figure isn&rsquo;t
                measured, it isn&rsquo;t published here.
              </p>
            </div>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href="/embedded" variant="teal">
                What embedding means
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

      <CtaBand sub="If the stack sounds like yours, there's a good chance the fix is the same one." />
    </Shell>
  );
}
