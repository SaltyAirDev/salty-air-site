import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Salty Air — data add-ons";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Data add-ons",
    line1: "Public data, pointed",
    line2: "at your market.",
  });
}
