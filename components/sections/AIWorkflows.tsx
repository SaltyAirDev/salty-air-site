import { ai } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";
import { TelemetryTypewriter } from "@/components/animations/TelemetryTypewriter";

export function AIWorkflows() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-16 bg-dark text-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionFade>
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
              {ai.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mt-4 leading-[1.1]">
              {ai.headline}
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-background/60">
              {ai.sub}
            </p>
          </div>
        </SectionFade>

        <SectionFade delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <TelemetryTypewriter />
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
