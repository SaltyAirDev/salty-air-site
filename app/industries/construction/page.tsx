import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { constructionContent } from "@/lib/content-construction";
import { withIndustryChrome } from "@/lib/industries";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/industries/construction`;

export const metadata: Metadata = {
  // Suffixed with "| Salty Air" by the template in app/layout.tsx.
  title: "AI Automation for General Contractors",
  description:
    "Salty Air builds custom AI workflows for general contractors — automating bid and preconstruction, RFIs and submittals, change orders, and closeout. Reclaim 15–25 hours per project manager per week.",
  alternates: { canonical: PAGE_URL },
  // Unlisted for now: not in the nav, footer, or sitemap. Keep it out of the
  // index until it is ready to go public again.
  robots: { index: false, follow: false },
  keywords: [
    "AI automation for construction",
    "general contractor workflow automation",
    "construction RFI automation",
    "submittal tracking automation",
    "change order automation",
    "Procore automation",
    "construction back office automation",
    "AI for general contractors",
    "construction closeout automation",
    "subcontractor compliance automation",
  ],
  openGraph: {
    title: "AI Automation for General Contractors | Salty Air",
    description:
      "Custom AI workflows for general contractors. Automate bid and precon, RFIs and submittals, change orders, and closeout. Reclaim 15–25 hours per PM per week.",
    type: "website",
    url: PAGE_URL,
    siteName: "Salty Air",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for General Contractors | Salty Air",
    description:
      "Custom AI workflows for general contractors. Automate bid and precon, RFIs and submittals, change orders, and closeout. Reclaim 15–25 hours per PM per week.",
  },
};

const content = withIndustryChrome(constructionContent);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Automation for General Contractors",
      description:
        "Custom AI workflows for general contractors: bid and preconstruction, RFIs and submittals, change orders, daily reports and closeout, and subcontractor compliance operations.",
      url: PAGE_URL,
      serviceType: "AI Workflow Automation",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", audienceType: "General Contractors" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Industries", item: PAGE_URL },
        { "@type": "ListItem", position: 3, name: "Construction", item: PAGE_URL },
      ],
    },
  ],
};

export default function ConstructionIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqJsonLd items={content.faq.items} />
      <SitePage content={content} />
    </>
  );
}
