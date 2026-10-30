import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Salty Air — other work";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Other work",
    line1: "Law and embedded",
    line2: "engineering.",
  });
}
