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
  title: "Salty Air | Systems that turn owner-operators into closers",
  description:
    "We design and automate the sales infrastructure that lets your business sell while you sleep. Stop being the bottleneck.",
  metadataBase: new URL("https://saltyair.co"),
  openGraph: {
    title: "Salty Air | Systems that turn owner-operators into closers",
    description:
      "We design and automate the sales infrastructure that lets your business sell while you sleep.",
    type: "website",
    url: "https://saltyair.co",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cormorant.variable} ${plexMono.variable} antialiased`}
    >
      <body className="bg-background text-dark font-sans selection:bg-accent/40 selection:text-dark">
        {children}
      </body>
    </html>
  );
}
