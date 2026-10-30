import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getTrade, trades } from "@/lib/trades";

export const alt = "Salty Air — AI back office for the trades";
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
    eyebrow: trade ? `AI back office · ${trade.label}` : "AI back office",
    line1: "Stop losing jobs",
    line2: "to the voicemail.",
  });
}
