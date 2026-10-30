import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Salty Air — AI back office for trade and home service shops";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "AI back office for trade shops",
    line1: "Stop losing jobs",
    line2: "to the voicemail.",
  });
}
