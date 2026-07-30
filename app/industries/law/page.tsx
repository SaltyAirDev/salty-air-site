import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { lawContent } from "@/lib/content";
import { withIndustryChrome } from "@/lib/industries";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { SITE_URL } from "@/lib/site";

const LAW_URL = `${SITE_URL}/industries/law`;

export const metadata: Metadata = {
  // Suffixed with "| Salty Air" by the template in app/layout.tsx.
  title: "AI Automation for Law Firms",
  description:
    "Salty Air builds custom AI workflows for boutique and mid-size law firms — automating intake, document drafting, follow-ups, and billing ops. Reclaim 15–25 non-billable hours per attorney per week.",
  alternates: { canonical: LAW_URL },
  keywords: [
    "AI automation for law firms",
    "law firm AI workflows",
    "legal intake automation",
    "law firm document drafting AI",
    "legal workflow automation",
    "AI for lawyers",
    "law practice management automation",
    "boutique law firm technology",
    "legal AI software",
    "law firm billing automation",
  ],
  openGraph: {
    title: "AI Automation for Law Firms | Salty Air",
    description:
      "Custom AI workflows for boutique and mid-size law firms. Automate intake, drafting, follow-ups, and billing ops. Reclaim 15–25 hours per attorney per week.",
    type: "website",
    url: LAW_URL,
    siteName: "Salty Air",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Law Firms | Salty Air",
    description:
      "Custom AI workflows for boutique and mid-size law firms. Automate intake, drafting, follow-ups, and billing ops. Reclaim 15–25 hours per attorney per week.",
  },
};

const content = withIndustryChrome(lawContent);

/**
 * Law-specific structured data. The root layout describes Salty Air as a
 * general-business agency, so this page carries the legal-vertical signals that
 * used to live in the layout.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Automation for Law Firms",
      description:
        "Custom AI workflows for boutique and mid-size law firms: client intake and triage, document drafting and routing, follow-up and nurture, and matter and billing operations.",
      url: LAW_URL,
      serviceType: "AI Workflow Automation",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", audienceType: "Law Firms" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: LAW_URL,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Law Practices",
          item: LAW_URL,
        },
      ],
    },
  ],
};

export default function LawIndustryPage() {
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
