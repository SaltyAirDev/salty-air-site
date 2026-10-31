import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  AUDIT_NAME,
  AUDIT_PATH,
  AUDIT_PRICE,
  EMAIL,
  GA_MEASUREMENT_ID,
  IS_PRODUCTION,
  LINKEDIN_URL,
  SERVICE_TYPE,
  SITE_URL,
  SLOGAN,
} from "@/lib/site";
import { buildOffer, embeddedOffer } from "@/lib/offers";
import { allSystems } from "@/lib/systems";

// Montserrat site-wide, headings and body both. It is a variable font, so no
// explicit weight list is needed — globals.css points --font-heading and
// --font-sans at this one variable.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const TITLE = "Systems Integration for Contractors & Trades | Salty Air";
const DESCRIPTION =
  "We connect the systems you already pay for — Housecall Pro, Jobber, ServiceTitan, Procore, QuickBooks. Integrations for trades, home services, and construction GCs. $499 audit.";

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
    "systems integration for contractors",
    "contractor software integration",
    "embedded engineering team",
    "Housecall Pro integration",
    "Jobber integration",
    "ServiceTitan integration",
    "QuickBooks integration for contractors",
    "Procore integration",
    "custom software for trades",
    "AI back office for trades",
    "construction software integration",
  ],
  // Preview and local builds must never compete with www in the index.
  robots: IS_PRODUCTION
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false, nocache: true },
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
  // The audit is the only priced offer on the site, so it is the only Offer
  // here carrying a `price`. The build and the embedded partnership are quoted
  // after the audit — see lib/offers.ts — so they appear with a description and
  // no figure of any kind.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Salty Air",
    description:
      "An integrations shop for trades, home services, and construction. We get into a business, connect the systems it already pays for — field service, CRM, accounting, phones, email, and data — set up what was bought and never turned on, and build custom where nothing fits.",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-saltyair-teal-lg.png`,
    image: `${SITE_URL}/brand/logo-saltyair-teal-lg.png`,
    email: EMAIL,
    slogan: SLOGAN,
    serviceType: SERVICE_TYPE,
    sameAs: [LINKEDIN_URL],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Trade and home service businesses — electricians, plumbers, HVAC, handymen, roofers, landscapers — and construction general contractors and specialty subcontractors",
    },
    knowsAbout: [
      "Systems integration",
      "Embedded engineering",
      "Custom software development",
      ...allSystems,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Salty Air offers",
      itemListElement: [
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: AUDIT_PRICE.replace("$", ""),
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}${AUDIT_PATH}`,
          itemOffered: { "@type": "Service", name: AUDIT_NAME },
        },
        {
          "@type": "Offer",
          // No price: quoted after the audit.
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Service",
            name: buildOffer.name,
            description:
              "Integration and build work scoped from the audit: the systems you already pay for connected, whatever is missing set up, and custom builds where nothing off the shelf fits.",
          },
        },
        {
          "@type": "Offer",
          // No price: quoted after the audit.
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Service",
            name: embeddedOffer.name,
            description:
              "An engineering team embedded in the business, owning the stack and shipping continuously on a monthly engagement.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-ink font-sans selection:bg-accent selection:text-teal-deep">
        {children}
      </body>
      {/* Production only — keeps local dev and Vercel preview builds out of the
          GA4 reports. Loads after hydration, so it does not block rendering. */}
      {process.env.NODE_ENV === "production" && IS_PRODUCTION && (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
