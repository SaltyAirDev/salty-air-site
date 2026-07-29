import type { MetadataRoute } from "next";
import { industries, industryHref } from "@/lib/industries";

const BASE = "https://saltyair.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...industries.map((industry) => ({
      url: `${BASE}${industryHref(industry.slug)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${BASE}/guide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
