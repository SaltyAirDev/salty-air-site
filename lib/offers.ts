/**
 * The offer ladder. Three rungs, one published number.
 *
 * 1. Business Audit, $499, existing Stripe link — the entry point.
 * 2. Fractional CTO & Ops Retainer — the headline offer, inquire only.
 * 3. Add-ons — the systems and the data services. No figures at all; both are
 *    scoped inside a retainer conversation.
 *
 * Nothing but the audit carries a dollar amount anywhere on the site: no setup
 * fee, no monthly band, no "starting at", no package prices. If a number is
 * needed, it comes from a conversation, not a page.
 */
import { AUDIT_CHECKOUT_URL, AUDIT_PRICE, CALENDAR_URL } from "./site";

export type Offer = {
  name: string;
  /** Rendered verbatim where the price sits. */
  price: string;
  period: string;
  /** Small label above the name — which rung of the ladder this is. */
  badge: string;
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
  badge: "Start here",
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

/** What the retainer actually is. Not a feature list of software. */
export const retainerOffer: Offer = {
  name: "Fractional CTO & Ops Retainer",
  price: "Inquire Only",
  period: "Monthly · scoped to your shop",
  badge: "The main engagement",
  desc: "A technology and operations partner on the hook for your systems, without a full-time hire. We embed with your crew, build what the shop actually needs, and then run it.",
  features: [
    "We embed first — time in the shop and on the phones before anything gets built",
    "We build the systems, in accounts you own, documented as we go",
    "We run them: monitoring, fixes, and changes as the shop changes",
    "One partner across the software, the data, and the vendors you already pay",
    "A standing weekly working session and a monthly review of what the systems did",
  ],
  cta: { label: "Book a call", href: CALENDAR_URL },
  secondaryCta: { label: "Send an inquiry", href: "/contact" },
  note: "No price listed on purpose. Tell us how the shop runs and we'll scope it.",
};

export const offers: Offer[] = [auditOffer, retainerOffer];

/**
 * The AI back office systems — what we build and run inside a retainer. These
 * are add-ons to the engagement, not a product you buy off this page.
 */
export const backOfficeSystems: Array<{ title: string; desc: string }> = [
  {
    title: "Missed-call text-back & AI answering",
    desc: "Every call you can't pick up gets a text back in seconds, and the AI answering line takes the details when nobody is free. Built on Quo.",
  },
  {
    title: "Lead routing into Housecall Pro or Jobber",
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
];

/**
 * The data services. Public sources only, Apify-backed, and priced inside the
 * retainer conversation like everything else here.
 */
export const dataServices: Array<{ title: string; desc: string }> = [
  {
    title: "Local Leads",
    desc: "Businesses and properties in your service area, pulled from public listings and directories and filtered down to the work you actually want.",
  },
  {
    title: "Reddit lead finder",
    desc: "Public Reddit threads where people in your market are asking for the work you do, surfaced while the thread is still live.",
  },
];

/** The two add-on groups, as the homepage and /pricing present them. */
export const addOnGroups = [
  {
    title: "AI back office systems",
    desc: "The phone, the intake, the follow-up, the reviews, the calendar, and the site — built once, then run.",
    items: backOfficeSystems,
    href: "/fractional-cto",
    linkLabel: "How we build it",
  },
  {
    title: "Data services",
    desc: "Public-data feeds pointed at your market, for when you want to go find work rather than wait for it.",
    items: dataServices,
    href: "/data-addons",
    linkLabel: "See the data services",
  },
];
