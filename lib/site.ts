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
 * way the deck sets accent words.
 */
export const HERO_HEADLINE = "We connect the systems you";
export const HERO_HEADLINE_ACCENT = "already pay for.";

/**
 * The positioning line, directly under the hero headline and echoed in the
 * root metadata. Salty Air is an engineering shop that embeds: the integrations
 * are the offer, and the systems a business ends up with are what the
 * engagement produces.
 */
export const POSITIONING =
  "Salty Air is a forward-deployed engineering and integrations shop. We embed with your business, wire the software you already run into one working stack, set up what is missing, and build custom where nothing fits.";

/** Short form of the above, for titles, OG eyebrows, and JSON-LD. */
export const SERVICE_TYPE =
  "Forward-deployed engineering and systems integration for trades, home services, and construction";

export const EMAIL = "hello@saltyair.co";
export const LINKEDIN_URL = "https://www.linkedin.com/company/salty-air/";

/** Booking link used by every "book a call" CTA. */
export const CALENDAR_URL = "https://calendar.app.google/ipYDWHD4YrQpLedJ9";

/**
 * The one published price on the site, and the only dollar figure anywhere in
 * it. Builds and the embedded partnership are quoted off the back of this
 * audit — see QUOTED_AFTER_AUDIT and lib/offers.ts.
 */
export const AUDIT_NAME = "Business & Integration Audit";
export const AUDIT_PRICE = "$499";
export const AUDIT_CHECKOUT_URL = "https://buy.stripe.com/4gM5kC9zj2RCcpCa9fd7q0b";

/**
 * What every offer that is not the audit prints where a price would go. No
 * ranges, no "starting at", no monthly bands — a scope comes out of the audit,
 * and the number comes out of the scope.
 */
export const QUOTED_AFTER_AUDIT = "Quoted after the audit";

/** Our own home services company, whose stack we built and run. */
export const SHS_URL = "https://www.saltyhomeservices.co";
