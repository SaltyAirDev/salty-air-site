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
    ];
  },
};

export default nextConfig;
