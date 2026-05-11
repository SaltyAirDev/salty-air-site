import { problem } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

export function ProblemStatement() {
  return (
    <section
      id="problem"
      className="w-full py-32 md:py-40 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <SectionFade>
        <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
          {problem.eyebrow}
        </span>
      </SectionFade>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8">
        <div className="md:col-span-7">
          <SectionFade>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark tracking-tight leading-[1.1]">
              {problem.headline}
            </h2>
          </SectionFade>
        </div>
        <div className="md:col-span-5 flex flex-col justify-end">
          <SectionFade delay={0.1}>
            <p className="text-primary/70 font-sans text-lg leading-relaxed">
              {problem.body}
            </p>
            <p className="mt-6 font-data text-sm text-accent uppercase tracking-widest font-bold">
              {problem.tagline}
            </p>
          </SectionFade>
        </div>
      </div>
    </section>
  );
}
