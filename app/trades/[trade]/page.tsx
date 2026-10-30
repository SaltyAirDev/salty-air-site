import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { TealBand } from "@/components/site/TealBand";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/Button";
import { getTrade, trades, tradeHref } from "@/lib/trades";
import { backOfficeSystems } from "@/lib/offers";
import { AUDIT_PRICE, CALENDAR_URL, SERVICE_TYPE, SITE_URL, SLOGAN } from "@/lib/site";

type Params = { params: Promise<{ trade: string }> };

/** All six trades are known at build time, so every page prerenders. */
export function generateStaticParams() {
  return trades.map((t) => ({ trade: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { trade: slug } = await params;
  const trade = getTrade(slug);
  if (!trade) return {};

  const canonical = `${SITE_URL}${tradeHref(trade.slug)}`;
  return {
    title: trade.title,
    description: trade.description,
    alternates: { canonical },
    openGraph: {
      title: `${trade.title} | Salty Air`,
      description: trade.description,
      url: canonical,
      type: "website",
      siteName: "Salty Air",
    },
  };
}

export default async function TradePage({ params }: Params) {
  const { trade: slug } = await params;
  const trade = getTrade(slug);
  if (!trade) notFound();

  const others = trades.filter((t) => t.slug !== trade.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: trade.title,
        description: trade.description,
        serviceType: SERVICE_TYPE,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        url: `${SITE_URL}${tradeHref(trade.slug)}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: trade.label,
            item: `${SITE_URL}${tradeHref(trade.slug)}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Shell>
        {/* The brand line stays the eyebrow; the trade line is the subhead. */}
        <PageHero
          eyebrow={SLOGAN}
          headline={trade.headline}
          headlineAccent={trade.headlineAccent}
          sub={trade.sub}
          primaryCta={{ label: `Book a ${AUDIT_PRICE} audit`, href: "/pricing" }}
          secondaryCta={{ label: "Book a call", href: CALENDAR_URL }}
          image={trade.image}
          imageAlt={trade.imageAlt}
          priority
        />

        {/* The partner angle first — the systems are what it produces */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>Partner first</Eyebrow>
            <Heading>
              A fractional CTO for {trade.label.toLowerCase()}, not another app
              to log into.
            </Heading>
            <div className="mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
              <p>
                We take on the technology and operations role your shop has
                grown into, on a monthly retainer. Our team embeds with you
                first — on the phones, in the dispatch board, in the estimate
                folder — then builds what is actually losing you work, and runs
                it afterwards.
              </p>
              <p>
                That order matters. Software handed to a busy shop with a login
                and a tutorial does not get used. Systems built around how you
                already dispatch, by people who watched you do it, do.
              </p>
            </div>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href="/fractional-cto" variant="teal">
                How the engagement works
              </Button>
              <Button
                href="/pricing"
                variant="teal"
                className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
              >
                See pricing
              </Button>
            </div>
          </div>
        </Section>

        {/* Where the work leaks out */}
        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>Where the work leaks out</Eyebrow>
            <Heading>Sound familiar?</Heading>
          </div>

          <ul className="mt-12 grid md:grid-cols-2 gap-5">
            {trade.leaks.map((leak) => (
              <li
                key={leak}
                className="rounded-2xl border border-primary/15 bg-white p-7 font-sans text-[15px] leading-relaxed text-body"
              >
                {leak}
              </li>
            ))}
          </ul>
        </Section>

        {/* What we build for this trade */}
        <TealBand innerClassName="py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="label-caps block font-sans text-accent">
              What we build
            </span>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-3xl md:text-[2.75rem] md:leading-[1.1]">
              The AI back office, set up for{" "}
              <span className="text-accent">{trade.label.toLowerCase()}.</span>
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-white/80">
              What the retainer produces for a shop like yours.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {trade.built.map((item) => (
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

          <div className="mt-14 border-t border-white/15 pt-10">
            <p className="font-sans text-[15px] text-white/70">
              Every retainer also covers{" "}
              {backOfficeSystems.map((i) => i.title).join(" · ")}.
            </p>
            <div className="mt-7">
              <Button href="/fractional-cto" variant="peach">
                See the first 30, 60, and 90 days
              </Button>
            </div>
          </div>
        </TealBand>

        {/* Other trades */}
        <Section>
          <Eyebrow>Other trades</Eyebrow>
          <Heading>We build this for the rest of them too.</Heading>
          <div className="mt-10 flex flex-wrap gap-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={tradeHref(other.slug)}
                className="rounded-full border border-primary/25 bg-white px-5 py-2.5 font-sans font-medium text-[15px] text-primary transition-colors hover:bg-primary hover:text-white"
              >
                {other.label}
              </Link>
            ))}
          </div>
        </Section>

        <CtaBand
          sub={`${trade.sub.split(". ")[0]}. Start with the ${AUDIT_PRICE} audit, or book a call and we'll scope the retainer.`}
        />
      </Shell>
    </>
  );
}
