import { v } from "./voice";

/**
 * Canonical origin for the site.
 *
 * The apex domain 307-redirects to www, so www is what actually serves. Every
 * canonical URL, sitemap entry, and JSON-LD identifier must use this value —
 * pointing search engines at the redirecting apex is a self-inflicted wound.
 */
export const SITE_URL = "https://www.saltyair.co";

/** Absolute URL for a site-relative path, e.g. url("/pricing"). */
export const url = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

/**
 * GA4 measurement ID for the saltyair.co data stream. Safe to keep in source —
 * it ships to the browser in the gtag script either way. Only loaded in
 * production (see app/layout.tsx) so local and preview traffic stays out of
 * the reports.
 */
export const GA_MEASUREMENT_ID = "G-S68DGJ996G";

/**
 * Anything that is not the production deployment gets noindex/nofollow, so
 * preview branches never compete with www in the index. `VERCEL_ENV` is
 * `production` | `preview` | `development`, and is simply absent locally —
 * absent therefore has to count as "not production".
 */
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

/**
 * The brand line. It is deliberately **not** the homepage hero — the front
 * door sells the capability, not the mood. It still carries the trade and
 * construction pages, the CTA band, and the footer.
 */
export const SLOGAN = "Work Less. Live More. Automate.";

/**
 * The homepage hero headline, split so the closing phrase renders in peach the
 * way the deck sets accent words. Rendered as one sentence:
 * "We connect the systems you already pay for."
 */
export const HERO_HEADLINE = "We connect the systems you";
export const HERO_HEADLINE_ACCENT = "already pay for.";

/**
 * The one line under the hero headline. Deliberately shorter than POSITIONING
 * — the front door says what we connect and who for, in plain words, and the
 * rest of the page has room to breathe. POSITIONING still carries the
 * metadata, the OG cards, and the supporting pages.
 */
export const HERO_SUB =
  "Field service software, the phones, the CRM, and the books — joined up, for trade, home service, and construction businesses.";

/**
 * The positioning line, directly under the hero headline and echoed in the
 * root metadata. Salty Air is an integrations shop that embeds: the
 * integrations are the offer, and the systems a business ends up with are what
 * the engagement produces.
 *
 * Plain trade and construction language only — "forward-deployed engineer",
 * "FDE", and "fractional CTO" buy nothing with somebody running four trucks or
 * three job sites, so none of them appear in copy anywhere on the site.
 */
export const POSITIONING =
  "Integrations and embedded engineering for trades, home services, and construction. We get in the business, connect the software you already run into one working stack, set up what was bought and never turned on, and build custom where nothing fits.";

/** Short form of the above, for titles, OG eyebrows, and JSON-LD. */
export const SERVICE_TYPE =
  "Systems integration and embedded engineering for trades, home services, and construction";

export const EMAIL = "hello@saltyair.co";
export const LINKEDIN_URL = "https://www.linkedin.com/company/salty-air/";

/** Booking link used by every "book a call" CTA. */
export const CALENDAR_URL = "https://calendar.app.google/ipYDWHD4YrQpLedJ9";

/**
 * The entry offer. One name site-wide — "Integration Audit", because the name
 * states the deliverable — and one published price, the only dollar figure
 * anywhere on the site. Builds and the embedded partnership are quoted off the
 * back of this audit; see QUOTED_AFTER_AUDIT and lib/offers.ts.
 */
export const AUDIT_NAME = "Integration Audit";
export const AUDIT_PRICE = "$499";

/** The offer as it is named in copy: "$499 Integration Audit". */
export const AUDIT_OFFER = `${AUDIT_PRICE} ${AUDIT_NAME}`;

/**
 * The audit page is the site's main conversion target: every primary CTA
 * points here rather than straight at checkout, so a visitor meets the scope,
 * the turnaround, and the fit questions before paying.
 */
export const AUDIT_PATH = "/audit";

/** Primary CTA, used verbatim across the site. */
export const AUDIT_CTA = {
  label: `Book the ${AUDIT_OFFER}`,
  href: AUDIT_PATH,
} as const;

/** Book-a-call CTA. Stays available everywhere alongside the audit. */
export const CALL_CTA = { label: "Book a call", href: CALENDAR_URL } as const;

/**
 * Stripe payment link for the audit. Deliberately reached from /audit only —
 * the page states what the $499 buys and how long it takes, and checkout sits
 * under that as the second path for anyone who does not want a call first.
 */
export const AUDIT_CHECKOUT_URL = "https://buy.stripe.com/4gM5kC9zj2RCcpCa9fd7q0b";

/** Written findings land this long after the working session. */
export const AUDIT_TURNAROUND = "five business days";

/**
 * The credit window, counted from **delivery of the findings** — not from
 * payment, and not from the working session. Sign for a build or a retainer
 * inside it and the audit fee comes off the work. Single source of truth for
 * the number: /audit states it in two places and the homepage carries the
 * short form, and all three read from here.
 */
export const AUDIT_CREDIT_DAYS = 14;

/** Short form of the credit, for the homepage offer area. */
export const AUDIT_CREDIT_SHORT = `Credited toward the work: sign for a build or a retainer within ${AUDIT_CREDIT_DAYS} days of the findings and the ${AUDIT_PRICE} comes off it.`;

/** Length of the live working session the audit is built around. */
export const AUDIT_SESSION = "60–90 minutes";

/**
 * What every offer that is not the audit prints where a price would go. No
 * ranges, no "starting at", no monthly bands — a scope comes out of the audit,
 * and the number comes out of the scope.
 */
export const QUOTED_AFTER_AUDIT = "Quoted after the audit";

/** Our own home services company, whose stack we built and run. */
export const SHS_URL = "https://www.saltyhomeservices.co";

/** Our own home services company, by name. */
export const SHS_NAME = "Salty Home Services";

/**
 * The homepage story block: an operator that builds, said once and plainly.
 *
 * Built from `lib/voice.ts` rather than hard-coded, so the site can move to a
 * founder's first person in one line later. Company "we" is the shipped voice
 * and the house style — no bio, no degrees, no named operator in copy.
 */
export const STORY_HEADING = `${v.We} run one of these businesses too.`;
export const STORY_BODY = [
  `${v.We} own and run ${SHS_NAME}, a home services company here in Salt Lake. The missed-call text-back, the web leads landing in the dispatch system, the estimate follow-up, the review requests, the scheduling — ${v.we} built that back office ${v.ourselves}, and ${v.we} still run it every day.`,
  `So the work on this page is not a methodology. It is what ${v.we} already do for ${v.our} own company, done for yours.`,
];

/**
 * Optional team photograph, shown on `/about` only — never on the homepage.
 *
 * Off until there is a real photograph to use. Turning it on is two steps:
 * drop the file at `TEAM_PHOTO_SRC` and flip this to `true`. Until then the
 * section does not render at all, which is better than a grey box.
 */
export const SHOW_TEAM_PHOTO: boolean = false;
export const TEAM_PHOTO_SRC = "/brand/team.jpg";
export const TEAM_PHOTO_ALT = "The Salty Air team";
