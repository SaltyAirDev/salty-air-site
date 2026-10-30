import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Salty Air — systems integration for trades, home services, and construction";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Integrations",
    line1: "We connect the systems",
    line2: "you already pay for.",
  });
}
