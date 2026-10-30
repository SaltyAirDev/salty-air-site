import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { CALENDAR_URL, SITE_URL, SLOGAN } from "@/lib/site";

const TITLE = "Data Add-Ons";
const DESCRIPTION =
  "Optional public-data add-ons built on Apify: lead lists, permit feeds, competitor monitoring, supplier pricing, and hiring signals. Public sources only, scoped on the retainer.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/data-addons` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}/data-addons`,
    type: "website",
    siteName: "Salty Air",
  },
};

const addons = [
  {
    title: "Lead lists",
    desc: "Businesses and properties in your service area, pulled from public listings and directories, filtered to the work you actually want.",
  },
  {
    title: "Permit feeds",
    desc: "Public building and electrical permit records for your area, so you see the jobs that are about to need a sub.",
  },
  {
    title: "Competitor monitoring",
    desc: "What the other shops in your market publish — services, service areas, public review activity — tracked over time instead of checked once.",
  },
  {
    title: "Supplier pricing",
    desc: "Published supplier and distributor prices on the materials you buy most, watched for changes.",
  },
  {
    title: "Hiring signals",
    desc: "Public job postings in your trade and market, which is as good a read on who's growing as you'll get.",
  },
];

export default function DataAddonsPage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="Public data, pointed at your"
        headlineAccent="market."
        sub="Optional add-ons on top of the retainer. Built on Apify, from public sources only — permits, listings, published prices, job posts."
        primaryCta={{ label: "Ask about add-ons", href: "/contact" }}
        secondaryCta={{ label: "Book a call", href: CALENDAR_URL }}
        image="/brand/beach-aerial.jpg"
        imageAlt="Aerial view of a shoreline"
        priority
      />

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>What&rsquo;s available</Eyebrow>
          <Heading>Five feeds worth having.</Heading>
          <p className="mt-6 font-sans text-lg leading-relaxed text-body">
            None of these are required. They&rsquo;re useful when you already
            have the back office running and want to point it at new work
            instead of just handling what comes in.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {addons.map((addon) => (
            <div
              key={addon.title}
              className="rounded-2xl border border-primary/15 bg-white p-7"
            >
              <h2 className="font-heading font-bold text-xl text-ink">
                {addon.title}
              </h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-body">
                {addon.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* The boundary. Stated plainly, because it is the part that matters. */}
      <TealBand innerClassName="py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="label-caps block font-sans text-accent">
            What we don&rsquo;t do
          </span>
          <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
            Public sources <span className="text-accent">only.</span>
          </h2>
          <div className="mt-7 flex flex-col gap-5 font-sans text-[17px] leading-relaxed text-white/80">
            <p>
              Everything above comes from information that is already published
              — permit records, public listings, posted prices, open job ads.
            </p>
            <p>
              We don&rsquo;t scrape private data, we don&rsquo;t buy or build
              lists of personal information, and we don&rsquo;t touch anything
              behind a login or a terms-of-service wall. If a feed can&rsquo;t
              be built from public sources, we&rsquo;ll tell you that rather
              than find a way around it.
            </p>
          </div>
        </div>
      </TealBand>

      <Section tone="sand">
        <div className="max-w-3xl">
          <Eyebrow>What it costs</Eyebrow>
          <Heading>Scoped on the retainer.</Heading>
          <p className="mt-6 font-sans text-lg leading-relaxed text-body">
            Add-ons are priced as part of the retainer conversation, because
            what they cost depends on which feeds you want, how big your market
            is, and how often you want them refreshed. There&rsquo;s no monthly
            figure published here for the same reason there isn&rsquo;t one on
            the pricing page — ask, and you&rsquo;ll get a real number.
          </p>
        </div>
      </Section>

      <CtaBand sub="Tell us your trade and your market, and we'll tell you which feeds are actually worth running." />
    </Shell>
  );
}
