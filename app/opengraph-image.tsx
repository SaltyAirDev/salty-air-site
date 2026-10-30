import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Salty Air — forward-deployed engineering and integrations for trades, home services, and construction";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Forward-deployed engineering",
    line1: "We connect the systems",
    line2: "you already pay for.",
  });
}
