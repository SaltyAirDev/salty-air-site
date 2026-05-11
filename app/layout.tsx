import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "AI Automation for Law Firms | Salty Air",
  description:
    "Salty Air builds custom AI workflows for boutique and mid-size law firms — automating intake, document drafting, follow-ups, and billing ops. Reclaim 15–25 non-billable hours per attorney per week.",
  metadataBase: new URL("https://saltyair.co"),
  alternates: {
    canonical: "https://saltyair.co",
  },
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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Automation for Law Firms | Salty Air",
    description:
      "Custom AI workflows for boutique and mid-size law firms. Automate intake, drafting, follow-ups, and billing ops. Reclaim 15–25 hours per attorney per week.",
    type: "website",
    url: "https://saltyair.co",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Salty Air",
    description:
      "AI automation agency building custom workflows for boutique and mid-size law firms.",
    url: "https://saltyair.co",
    email: "hello@saltyair.co",
    serviceType: "AI Workflow Automation",
    areaServed: "United States",
    audience: {
      "@type": "Audience",
      audienceType: "Law Firms",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Law Firm AI Automation Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Training Day" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategic AI Assessment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monthly Retainer" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "One-Off Project" } },
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
