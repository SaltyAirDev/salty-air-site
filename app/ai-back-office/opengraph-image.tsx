import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Salty Air — the AI back office";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "The AI back office",
    line1: "Everything after",
    line2: "the phone rings.",
  });
}
