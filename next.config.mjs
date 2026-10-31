import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Trade slugs, mirroring `trades` in lib/trades.ts.
 *
 * Duplicated here because next.config.mjs cannot import the TypeScript module.
 * Add a trade there and add its slug here, or its old /trades/<slug> URL stops
 * resolving.
 */
const TRADE_SLUGS = [
  "electricians",
  "plumbers",
  "hvac",
  "handyman",
  "roofers",
  "landscapers",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // /business was the preview URL for what is now the homepage.
      { source: "/business", destination: "/", permanent: true },

      // The pre-reposition routes. Law and the unlinked law guide fold into
      // Other Work.
      { source: "/guide", destination: "/other-work", permanent: true },
      { source: "/industries/law", destination: "/other-work", permanent: true },

      // The GC page is /general-contractors now: it names the buyer instead of
      // the category, and the category word pulled in the trades that already
      // have their own pages. Both older URLs carry links, so both land on it.
      {
        source: "/industries/construction",
        destination: "/general-contractors",
        permanent: true,
      },
      { source: "/construction", destination: "/general-contractors", permanent: true },

      // Trade pages moved to the root. The dynamic /trades/[trade] segment is
      // gone, so these are the only thing keeping the old URLs alive — and
      // keeping the moved slugs from serving the same page at two addresses.
      ...TRADE_SLUGS.map((slug) => ({
        source: `/trades/${slug}`,
        destination: `/${slug}`,
        permanent: true,
      })),
      { source: "/trades", destination: "/", permanent: true },

      // The engagement is "embedded" now, in plain language. Both of the old
      // offer URLs carry inbound links, so both land on it.
      { source: "/fractional-cto", destination: "/embedded", permanent: true },
      { source: "/ai-back-office", destination: "/embedded", permanent: true },

      // Data services are no longer an offer. The route's inbound links go to
      // the integrations page, which is where that work now lives.
      { source: "/data-addons", destination: "/integrations", permanent: true },
    ];
  },
};

export default nextConfig;
