import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Salty Air — fractional CTO & operations partner for the trades";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Fractional CTO & ops partner",
    line1: "We embed, we build,",
    line2: "we run it.",
  });
}
