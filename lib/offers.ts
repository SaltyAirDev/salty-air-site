/**
 * The offer ladder. Three rungs, one published number.
 *
 * 1. Business & Integration Audit, $499, existing Stripe link — the entry point.
 * 2. Integration & build — quoted after the audit.
 * 3. The embedded partnership — quoted after the audit.
 *
 * The audit is the ONLY price on this site. Nothing else carries a figure
 * anywhere: no ranges, no "starting at", no monthly bands, no package prices,
 * and none in the JSON-LD either. A scope comes out of the audit and the
 * number comes out of the scope.
 */
import {
  AUDIT_CHECKOUT_URL,
  AUDIT_NAME,
  AUDIT_PRICE,
  CALENDAR_URL,
  QUOTED_AFTER_AUDIT,
} from "./site";

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
  /** Light card on off-white, or the teal card that anchors the row. */
  tone: "light" | "teal";
};

export const auditOffer: Offer = {
  name: AUDIT_NAME,
  price: AUDIT_PRICE,
  period: "One-time",
  badge: "Start here",
  desc: "We map the systems you are already paying for, find where work falls between them, and hand you a written plan — what to connect, what to set up, and what to build.",
  features: [
    "45-minute walkthrough of every system in the business and how work moves between them",
    "An inventory of what you pay for, who uses it, and what it was supposed to fix",
    "Written report: the seams costing you work, in the order worth closing them",
    "30-minute review call to go through the findings",
  ],
  cta: { label: `Book the ${AUDIT_PRICE} audit`, href: AUDIT_CHECKOUT_URL },
  secondaryCta: { label: "Talk it through first", href: "/contact" },
  note: "Paid up front. You keep the report whether or not we work together after.",
  tone: "light",
};

/** The build. Scoped off the audit's findings, so it has no price of its own. */
export const buildOffer: Offer = {
  name: "Integration & build",
  price: QUOTED_AFTER_AUDIT,
  period: "Per scope of work",
  badge: "Then we wire it up",
  desc: "The work the audit found, done. We connect the systems you already run, set up whatever is missing, and build custom where nothing off the shelf fits.",
  features: [
    "Integrations between the systems you already pay for, in accounts you own",
    "Missing pieces set up and wired in on the way — not bolted on later",
    "Custom builds as real code, versioned, documented, and yours to keep",
    "Your crew trained on the parts they touch, in the tools they already use",
  ],
  cta: { label: "See what we connect", href: "/integrations" },
  secondaryCta: { label: "Book a call", href: CALENDAR_URL },
  note: "Quoted off the audit's findings, so the number describes real work rather than a package.",
  tone: "light",
};

/** The ongoing engagement. Also quoted after the audit, for the same reason. */
export const embeddedOffer: Offer = {
  name: "Embedded partnership",
  price: QUOTED_AFTER_AUDIT,
  period: "Monthly",
  badge: "Or embed with us",
  desc: "We show up in your business, take the stack off your plate, and keep shipping. One team on the hook for the software, the integrations, and the vendors you already pay.",
  features: [
    "We embed first — time in the business before anything gets built",
    "We own the stack: the integrations, the accounts, the vendor decisions",
    "We ship continuously, in small pieces that go live and get used",
    "Monitoring and fixes, because seasons turn and crews change",
    "A standing weekly working session and a monthly review of what shipped",
  ],
  cta: { label: "How embedding works", href: "/embedded" },
  secondaryCta: { label: "Book a call", href: CALENDAR_URL },
  note: "No figure listed on purpose. Start with the audit and the scope writes itself.",
  tone: "teal",
};

export const offers: Offer[] = [auditOffer, buildOffer, embeddedOffer];

/**
 * The two main offers, as the homepage and the nav present them. Integrations
 * is the front door; embedded is what it becomes when a business wants us to
 * keep owning it.
 */
export const pillars: Array<{
  title: string;
  desc: string;
  items: string[];
  href: string;
  linkLabel: string;
}> = [
  {
    title: "Integrations",
    desc: "The systems you already pay for, connected — plus whatever is missing, set up and wired in.",
    items: [
      "Field service, CRM, accounting, phones, email, and data joined up",
      "Leads and jobs moving between systems without anyone retyping them",
      "Missing pieces set up in accounts you own",
      "Custom builds where nothing off the shelf fits",
    ],
    href: "/integrations",
    linkLabel: "How we connect a stack",
  },
  {
    title: "Embedded engineering",
    desc: "We show up in your business, own the stack, and keep shipping — forward-deployed, on a monthly engagement.",
    items: [
      "Time in the business before anything gets built",
      "One team responsible for the software and the vendors",
      "Continuous shipping instead of a project with a launch date",
      "Everything in your accounts, documented as we go",
    ],
    href: "/embedded",
    linkLabel: "What embedding means",
  },
];

/**
 * The home services back office — the systems a trade shop usually ends up
 * with once its stack is connected. Still the trade-page language, and still
 * what runs at Salty Home Services; it is just no longer the front door.
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
