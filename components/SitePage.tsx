import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { ROISection } from "@/components/sections/ROISection";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { SiteContent } from "@/lib/content";

/**
 * The full marketing page, driven entirely by a content variant.
 * `/` and `/industries/law` pass the law copy; the business homepage passes
 * `businessContent`. Section order matches the original law homepage.
 */
export function SitePage({ content }: { content: SiteContent }) {
  return (
    <main className="relative bg-background min-h-screen text-dark">
      <NoiseOverlay />
      <Navbar content={content.nav} />
      <Hero content={content.hero} tools={content.tools} />
      <section id="solutions">
        <SolutionsGrid content={content.solutions} />
      </section>
      <section id="roi">
        <ROISection content={content.roi} />
      </section>
      <section id="process">
        <Process content={content.process} />
      </section>
      <section id="pricing">
        <Pricing content={content.pricing} />
      </section>
      <section id="faq">
        <FAQ content={content.faq} />
      </section>
      <section id="contact">
        <FinalCTA content={content.finalCta} />
      </section>
      <Footer content={content.footer} />
    </main>
  );
}
