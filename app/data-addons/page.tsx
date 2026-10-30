import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/Button";
import { CALENDAR_URL, SITE_URL, SLOGAN } from "@/lib/site";

const TITLE = "Data Services";
const DESCRIPTION =
  "Two public-data services for trade shops: Local Leads, and a Reddit lead finder. Apify-backed, public sources only, and scoped inside the fractional CTO retainer.";

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

/**
 * Two named services, both built on Apify and both from public sources. No
 * prices: these are scoped in the retainer conversation like everything else
 * that isn't the audit.
 */
const services = [
  {
    name: "Local Leads",
    desc: "Businesses and properties in your service area, pulled from public listings and directories, then filtered down to the work you actually want.",
    detail: [
      "Built around your trade, your radius, and the job types you want more of",
      "Public listings and directory records only — nothing behind a login",
      "Delivered somewhere you will actually use it: your CRM, or a sheet your office works from",
      "Refreshed on a cadence we agree, rather than scraped once and left to rot",
    ],
  },
  {
    name: "Reddit lead finder",
    desc: "Public Reddit threads where people in your market are asking for the work you do — surfaced while the thread is still live and worth replying to.",
    detail: [
      "Watches the local and home-improvement subreddits that matter for your area",
      "Matched on the work you want, not every mention of your trade",
      "Public posts only — we read what anyone can read, and we don't impersonate anyone",
      "You decide how to reply; we can draft the approach with you, but the account stays yours",
    ],
  },
];

export default function DataServicesPage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="Public data, pointed at your"
        headlineAccent="market."
        sub="Two data services that sit on top of the retainer: Local Leads and a Reddit lead finder. Apify-backed, built from public sources, for when the shop is ready to go find work instead of waiting for it."
        primaryCta={{ label: "Inquire about data services", href: "/contact" }}
        secondaryCta={{ label: "Book a call", href: CALENDAR_URL }}
        image="/brand/beach-aerial.jpg"
        imageAlt="Aerial view of a shoreline"
        priority
      />

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>What&rsquo;s available</Eyebrow>
          <Heading>Two services, both worth having.</Heading>
          <p className="mt-6 font-sans text-lg leading-relaxed text-body">
            Neither is required. They&rsquo;re useful once the back office is
            running and handling what comes in — at which point the question
            stops being &ldquo;did we miss a call&rdquo; and starts being
            &ldquo;where is the next job.&rdquo;
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-3xl border border-primary/15 bg-white p-8 md:p-10"
            >
              <span className="label-caps font-sans text-primary/60">
                Data service
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl text-ink">
                {service.name}
              </h2>
              <p className="mt-4 font-sans text-[15px] leading-relaxed text-body">
                {service.desc}
              </p>
              <ul className="mt-6 flex flex-col gap-3 font-sans text-[15px] leading-relaxed text-body">
                {service.detail.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-primary/50"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
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
              Both services are built on Apify and read information that is
              already published — public listings, directory records, open
              forum posts.
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
          <Heading>Scoped with the retainer. Inquire.</Heading>
          <p className="mt-6 font-sans text-lg leading-relaxed text-body">
            Data services are priced as part of the retainer conversation,
            because what they cost depends on which you want, how big your
            market is, and how often you want them refreshed. There&rsquo;s no
            monthly figure published here for the same reason there isn&rsquo;t
            one on the pricing page — ask, and you&rsquo;ll get a real number.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" variant="teal">
              Inquire about data services
            </Button>
            <Button
              href="/fractional-cto"
              variant="teal"
              className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
            >
              See the retainer
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand sub="Tell us your trade and your market, and we'll tell you which of the two is actually worth running." />
    </Shell>
  );
}
