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

/** The brand line. Primary on the homepage hero, CTA bands, footer, and OG. */
export const SLOGAN = "Work Less. Live More. Automate.";

/**
 * The positioning line, directly under the slogan on the homepage and echoed
 * in the root metadata. Salty Air is a partner, not a software vendor: the
 * systems are what the partnership produces, not the thing being sold.
 */
export const POSITIONING =
  "Your fractional CTO & operations partner for the trades. We embed, build, and run the systems so you can run the work.";

/** Short form of the above, for titles, OG eyebrows, and JSON-LD. */
export const SERVICE_TYPE =
  "Fractional CTO and operations partner for trade and home service businesses";

export const EMAIL = "hello@saltyair.co";
export const LINKEDIN_URL = "https://www.linkedin.com/company/salty-air/";

/** Booking link used by every "book a call" CTA. */
export const CALENDAR_URL = "https://calendar.app.google/ipYDWHD4YrQpLedJ9";

/**
 * The one published price on the site. The retainer — the headline offer — is
 * deliberately inquire-only, and the add-ons carry no figure at all. See
 * lib/offers.ts.
 */
export const AUDIT_PRICE = "$499";
export const AUDIT_CHECKOUT_URL = "https://buy.stripe.com/4gM5kC9zj2RCcpCa9fd7q0b";

/** The Utah home services company whose back office we built and run. */
export const SHS_URL = "https://www.saltyhomeservices.co";
