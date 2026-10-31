import type { MetadataRoute } from "next";
import { AUDIT_PATH, SITE_URL } from "@/lib/site";
import { GC_PATH, tradeHref, trades } from "@/lib/trades";

const BASE = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    // The audit is the site's conversion target, so it ranks with the home
    // page rather than with the supporting offer pages.
    { url: `${BASE}${AUDIT_PATH}`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/integrations`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/embedded`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}${GC_PATH}`, changeFrequency: "monthly", priority: 0.8 },
    ...trades.map((trade) => ({
      url: `${BASE}${tradeHref(trade.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/case-studies/salty-home-services`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/other-work`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  return routes.map((route) => ({ ...route, lastModified }));
}
