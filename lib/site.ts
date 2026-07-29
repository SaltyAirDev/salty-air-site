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
