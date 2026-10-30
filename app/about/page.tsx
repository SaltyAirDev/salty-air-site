import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE_URL, SLOGAN } from "@/lib/site";

const TITLE = "About";
const DESCRIPTION =
  "Salty Air is Romas — BA Graphic Design (University of Utah), MS Business, Design & Technology (USC). He runs Grazys Construction and Salty Home Services, launched Salty Electric, and built the whole back office himself.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    type: "profile",
    siteName: "Salty Air",
  },
};

export default function AboutPage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="A contractor who got tired of losing jobs to"
        headlineAccent="voicemail."
        sub="Salty Air is Romas. He runs the trucks, built the back office for his own shops, and now sets it up for other trade businesses."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        image="/brand/interior-plants.jpg"
        imageAlt="Warm, sunlit interior with plants"
        priority
      />

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Why Romas</Eyebrow>
          <Heading>Design school, then a work truck.</Heading>
          <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
            <p>
              BA in Graphic Design from the University of Utah, then an MS in
              Business, Design &amp; Technology from USC. That combination is
              why the sites look the way they do and why the systems behind
              them hold together.
            </p>
            <p>
              Today he runs Grazys Construction and Salty Home Services, and
              recently launched Salty Electric. The admin problem described all
              over this site is his own: calls landing while both hands are
              busy, estimates going cold, reviews never asked for.
            </p>
            <p>
              He built the whole back office himself — the missed-call
              text-back, the AI answering, the intake into Housecall Pro, the
              follow-ups, the review requests, the sites. Salty Air exists
              because other owners kept asking how it worked.
            </p>
          </div>
        </div>
      </Section>

      <TealBand innerClassName="py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="label-caps block font-sans text-accent">
              What that means for you
            </span>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.5rem] md:leading-[1.12]">
              No agency translation <span className="text-accent">layer.</span>
            </h2>
            <div className="mt-7 flex flex-col gap-5 font-sans text-[17px] leading-relaxed text-white/80">
              <p>
                You won&rsquo;t spend the first call explaining what a service
                area is, why a panel upgrade quote is worth chasing, or how
                dispatch actually works on a busy Tuesday.
              </p>
              <p>
                And you won&rsquo;t get a deck full of numbers from somebody
                else&rsquo;s industry. If a figure isn&rsquo;t measured on this
                site, it isn&rsquo;t published on this site.
              </p>
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
      </TealBand>

      <Section tone="sand">
        <div className="max-w-3xl">
          <Eyebrow>The businesses</Eyebrow>
          <Heading>Three shops, one back office.</Heading>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Grazys Construction",
              d: "General contracting. The original business, and where most of the back-office problems first turned up.",
            },
            {
              t: "Salty Home Services",
              d: "Home services. The shop the AI back office was built on and the subject of the case study.",
            },
            {
              t: "Salty Electric",
              d: "Electrical. Launched most recently, set up on the same systems from day one.",
            },
          ].map((item) => (
            <div
              key={item.t}
              className="rounded-2xl border border-primary/15 bg-white p-7"
            >
              <h3 className="font-heading font-bold text-xl text-ink">{item.t}</h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-body">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand sub="If the shop sounds like yours, there's a good chance the fix is the same one." />
    </Shell>
  );
}
