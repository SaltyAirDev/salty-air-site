import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
      // Other Work; the old construction URL now has a real page to land on.
      { source: "/guide", destination: "/other-work", permanent: true },
      { source: "/industries/law", destination: "/other-work", permanent: true },
      { source: "/industries/construction", destination: "/construction", permanent: true },

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
