import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { requireTrade } from "@/lib/trades";

const trade = requireTrade("plumbers");

export const alt = `Salty Air — systems integration for ${trade.label.toLowerCase()}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: `Integrations · ${trade.label}`,
    line1: "We connect the systems",
    line2: "you already pay for.",
  });
}
