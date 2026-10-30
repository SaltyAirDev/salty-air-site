import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Salty Air — fractional CTO & operations partner for trade and home service shops";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Fractional CTO & ops partner",
    line1: "We embed, build, and",
    line2: "run your systems.",
  });
}
