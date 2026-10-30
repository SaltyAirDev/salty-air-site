import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getTrade, trades } from "@/lib/trades";

export const alt = "Salty Air — fractional CTO & AI back office for the trades";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** One card per trade, prerendered alongside the pages. */
export function generateStaticParams() {
  return trades.map((t) => ({ trade: t.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ trade: string }>;
}) {
  const { trade: slug } = await params;
  const trade = getTrade(slug);

  return ogCard({
    eyebrow: trade ? `Fractional CTO · ${trade.label}` : "Fractional CTO for the trades",
    line1: "We embed, we build,",
    line2: "we run it.",
  });
}
