/**
 * The two — and only two — offers the site publishes.
 *
 * 1. Business Audit, $499, existing Stripe link.
 * 2. Retainer, inquire only. Inclusions are listed; the price is not.
 *
 * Nothing else carries a dollar figure anywhere on the site: no setup fee, no
 * monthly band, no "starting at". If a number is needed, it comes from a
 * conversation, not a page.
 */
import { AUDIT_CHECKOUT_URL, AUDIT_PRICE, CALENDAR_URL } from "./site";

export type Offer = {
  name: string;
  /** Rendered verbatim where the price sits. */
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  note: string | null;
};

export const auditOffer: Offer = {
  name: "Business Audit",
  price: AUDIT_PRICE,
  period: "One-time",
  desc: "We map where your shop is leaking work — the missed calls, the estimates nobody chased, the review requests that never went out — and hand you a written plan you can run yourself.",
  features: [
    "45-minute walkthrough of how calls, leads, and estimates move through your shop today",
    "Written report: what is leaking, what to fix first, and which tools to use",
    "Recommendations mapped to Housecall Pro, Jobber, or whatever you already run",
    "30-minute review call to go through the findings",
  ],
  cta: { label: `Book the ${AUDIT_PRICE} audit`, href: AUDIT_CHECKOUT_URL },
  secondaryCta: { label: "Talk it through first", href: "/contact" },
  note: "Paid up front. You keep the report whether or not we work together after.",
};

/** What living on the retainer actually gets you. Used on /pricing and /ai-back-office. */
export const retainerInclusions: Array<{ title: string; desc: string }> = [
  {
    title: "Missed-call text-back & AI answering",
    desc: "Every call you can't pick up gets a text back in seconds, and the AI answering line takes the details when nobody is free. Built on Quo.",
  },
  {
    title: "Lead form into Housecall Pro or Jobber",
    desc: "Web and phone leads land straight in the system you already dispatch from, with the job details attached. No retyping.",
  },
  {
    title: "Estimate follow-up",
    desc: "Sent estimates get chased on a schedule instead of sitting in a folder until the customer books someone else.",
  },
  {
    title: "Review requests",
    desc: "Closed jobs trigger a review ask, timed for when the customer is still happy about the work.",
  },
  {
    title: "CRM & scheduling",
    desc: "Your customer records, job history, and calendar kept in one place and actually maintained.",
  },
  {
    title: "SEO website",
    desc: "A site built to get found for the work you want, and to book it — not a brochure.",
  },
  {
    title: "Apify public-data add-ons",
    desc: "Optional. Lead lists, permit feeds, competitor and supplier monitoring, all from public sources.",
  },
];

export const retainerOffer: Offer = {
  name: "Retainer",
  price: "Inquire only",
  period: "Monthly · scoped to your shop",
  desc: "We build and run the AI back office for you. Scope depends on your call volume, crew size, and which systems you already run, so the number comes out of a conversation rather than a pricing table.",
  features: retainerInclusions.map((i) => i.title),
  cta: { label: "Book a call", href: CALENDAR_URL },
  secondaryCta: { label: "Send an inquiry", href: "/contact" },
  note: "No price listed on purpose. Tell us how the shop runs and we'll scope it.",
};

export const offers: Offer[] = [auditOffer, retainerOffer];
