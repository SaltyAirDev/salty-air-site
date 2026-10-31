import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Salty Air — systems integration for general contractors and specialty subs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "General contractors",
    line1: "One record of a job,",
    line2: "bid to closeout.",
  });
}
