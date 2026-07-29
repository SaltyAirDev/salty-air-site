import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "5 Workflows Law Practices Automate First — Salty Air";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Salty Air · Guide",
    line1: "5 workflows practices",
    line2: "automate first.",
  });
}
