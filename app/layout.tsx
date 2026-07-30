import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-drama",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const TITLE = "AI Automation for Businesses | Salty Air";
const DESCRIPTION =
  "Salty Air builds custom AI workflows for small and mid-size businesses — automating lead intake, proposals, follow-ups, and back-office ops. Reclaim 15–25 hours per person per week.";

export const metadata: Metadata = {
  // `%s` is filled by each page's own title; `/` uses the default.
  title: { default: TITLE, template: "%s | Salty Air" },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  applicationName: "Salty Air",
  authors: [{ name: "Salty Air", url: SITE_URL }],
  creator: "Salty Air",
  publisher: "Salty Air",
  category: "technology",
  keywords: [
    "AI automation for business",
    "business workflow automation",
    "AI workflows for small business",
    "lead intake automation",
    "proposal automation AI",
    "back office automation",
    "AI automation agency",
    "custom AI automation development",
    "business process automation",
    "AI for business owners",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Salty Air",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Offer names mirror the tiers in lib/content-business.ts — keep them in sync.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Salty Air",
    description:
      "AI automation agency building custom workflows for small and mid-size businesses.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-green.png`,
    image: `${SITE_URL}/logo-green.png`,
    email: "hello@saltyair.co",
    slogan: "Work Less. Live More. Automate.",
    serviceType: "AI Workflow Automation",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: ["https://www.linkedin.com/company/salty-air/"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Small and mid-size businesses",
    },
    knowsAbout: [
      "Business process automation",
      "AI workflow design",
      "Lead intake automation",
      "Document and proposal drafting",
      "Back-office and billing operations",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "499",
          itemOffered: { "@type": "Service", name: "Business Audit" },
        },
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "7500",
          itemOffered: { "@type": "Service", name: "AI Training Day" },
        },
        {
          "@type": "Offer",
          priceCurrency: "USD",
          itemOffered: { "@type": "Service", name: "Custom Project" },
        },
        {
          "@type": "Offer",
          priceCurrency: "USD",
          itemOffered: { "@type": "Service", name: "Monthly Retainer" },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cormorant.variable} ${plexMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-dark font-sans selection:bg-accent/40 selection:text-dark">
        {children}
      </body>
    </html>
  );
}
