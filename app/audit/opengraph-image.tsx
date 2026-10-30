import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { AUDIT_NAME, AUDIT_PRICE } from "@/lib/site";

export const alt = `Salty Air — the ${AUDIT_PRICE} ${AUDIT_NAME} for trades and general contractors`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return ogCard({
    eyebrow: AUDIT_NAME,
    line1: `The ${AUDIT_PRICE}`,
    line2: `${AUDIT_NAME}.`,
  });
}
