import { animatedDemo } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";
import { DiagnosticShuffler } from "@/components/animations/DiagnosticShuffler";

const STAGES = [
  "Inbound Lead Captured",
  "Enriched + Routed",
  "Qualified",
  "Quote Sent",
  "Deal Closed",
];

export function AnimatedDemo() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-16 bg-primary text-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionFade>
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
              {animatedDemo.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mt-4 leading-[1.1]">
              {animatedDemo.headline}
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-background/70">
              {animatedDemo.sub}
            </p>
          </div>
        </SectionFade>

        <SectionFade delay={0.15}>
          <div className="bg-dark rounded-[2.5rem] border border-background/10 p-8 md:p-16 shadow-2xl">
            <DiagnosticShuffler items={STAGES} />
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
