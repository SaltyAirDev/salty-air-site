import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Salty Air — embedded engineering for trades and construction";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Embedded engineering",
    line1: "We show up, own the",
    line2: "stack, keep shipping.",
  });
}
