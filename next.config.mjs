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
      // Other Work; construction's audience is now served by the homepage and
      // the trade pages.
      { source: "/guide", destination: "/other-work", permanent: true },
      { source: "/industries/law", destination: "/other-work", permanent: true },
      { source: "/industries/construction", destination: "/", permanent: true },

      // The offer is a fractional CTO engagement now; the back office systems
      // are what it produces. The old route is the one with inbound links.
      { source: "/ai-back-office", destination: "/fractional-cto", permanent: true },
    ];
  },
};

export default nextConfig;
