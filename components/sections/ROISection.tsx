import { roi } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";
import { DashboardMockup } from "@/components/animations/DashboardMockup";

export function ROISection() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-16 bg-primary text-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionFade>
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
              {roi.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mt-4 leading-[1.1]">
              More billable hours.<br />Less <span className="text-accent">admin work</span>.
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-background/88">
              {roi.sub}
            </p>
          </div>
        </SectionFade>

        <SectionFade delay={0.15}>
          <DashboardMockup />
        </SectionFade>

        <SectionFade delay={0.2}>
          <p className="mt-10 text-center font-data text-xs text-background/80 tracking-wide">
            * Example data from a client engagement. Results vary by firm size, caseload, and workflow complexity.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-block px-10 py-4 rounded-full bg-accent text-dark font-sans font-bold text-base hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative group shadow-lg"
            >
              <span className="relative z-10 block transition-colors group-hover:text-white">Let's Talk</span>
              <span className="absolute inset-0 rounded-full bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
            </a>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
