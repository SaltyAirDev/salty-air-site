import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  AUDIT_PRICE,
  EMAIL,
  GA_MEASUREMENT_ID,
  IS_PRODUCTION,
  LINKEDIN_URL,
  SERVICE_TYPE,
  SITE_URL,
  SLOGAN,
} from "@/lib/site";
import { backOfficeSystems, dataServices, retainerOffer } from "@/lib/offers";

// Montserrat is variable, so it needs no explicit weights. Poppins is not —
// every weight we use has to be listed or it won't be bundled.
const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const TITLE = "Fractional CTO & Ops Partner for the Trades | Salty Air";
const DESCRIPTION =
  "Work Less. Live More. Automate. Salty Air is a fractional CTO and operations partner for trade and home service businesses — we embed in your shop, then build and run the AI back office: missed-call text-back, AI answering, lead routing into Housecall Pro or Jobber, estimate follow-up, review requests, and an SEO site.";

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
    "fractional CTO for trades",
    "fractional CTO for contractors",
    "forward deployed engineering",
    "AI back office for trades",
    "missed call text back for contractors",
    "AI answering service for plumbers",
    "Housecall Pro automation",
    "Jobber lead automation",
    "estimate follow up software",
    "review requests for contractors",
    "home service business operations partner",
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
  // Exactly two offers are published anywhere on the site, so exactly two
  // appear here — see lib/offers.ts. The retainer, which is the headline
  // offer, carries no price on purpose, and neither do the add-ons.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Salty Air",
    description:
      "Fractional CTO and operations partner for trade and home service businesses. We embed in the business, then build and run the AI back office — missed-call text-back, AI answering, lead routing, estimate follow-up, review requests, CRM and scheduling, and SEO websites.",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-saltyair-teal-lg.png`,
    image: `${SITE_URL}/brand/logo-saltyair-teal-lg.png`,
    email: EMAIL,
    slogan: SLOGAN,
    serviceType: SERVICE_TYPE,
    areaServed: { "@type": "Country", name: "United States" },
    sameAs: [LINKEDIN_URL],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Trade and home service businesses — electricians, plumbers, HVAC, handymen, general contractors, roofers, landscapers",
    },
    knowsAbout: [
      "Fractional CTO",
      "Forward-deployed engineering",
      ...backOfficeSystems.map((i) => i.title),
      ...dataServices.map((i) => i.title),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Salty Air offers",
      itemListElement: [
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: AUDIT_PRICE.replace("$", ""),
          itemOffered: { "@type": "Service", name: "Business Audit" },
        },
        {
          "@type": "Offer",
          // No price: the retainer is inquire-only.
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Service",
            name: retainerOffer.name,
            description:
              "A fractional CTO and operations partner on a monthly retainer. We embed in the business, build the systems it needs, and run them. Add-ons: the AI back office systems, and the Local Leads and Reddit lead finder data services.",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} antialiased`}
    >
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
