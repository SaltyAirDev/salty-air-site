/**
 * Canonical origin for the site.
 *
 * The apex domain 307-redirects to www, so www is what actually serves. Every
 * canonical URL, sitemap entry, and JSON-LD identifier must use this value —
 * pointing search engines at the redirecting apex is a self-inflicted wound.
 */
export const SITE_URL = "https://www.saltyair.co";

/** Absolute URL for a site-relative path, e.g. url("/guide"). */
export const url = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

/**
 * GA4 measurement ID for the saltyair.co data stream. Safe to keep in source —
 * it ships to the browser in the gtag script either way. Only loaded in
 * production (see app/layout.tsx) so local and preview traffic stays out of
 * the reports.
 */
export const GA_MEASUREMENT_ID = "G-S68DGJ996G";
