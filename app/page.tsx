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

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen text-dark">
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <section id="solutions">
        <SolutionsGrid />
      </section>
      <section id="roi">
        <ROISection />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <FinalCTA />
      </section>
      <Footer />
    </main>
  );
}
