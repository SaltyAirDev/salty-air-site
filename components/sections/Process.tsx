import { process } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

export function Process() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionFade>
        <div className="max-w-3xl mb-20">
          <span className="font-data text-xs text-accent-warm uppercase tracking-[0.3em]">
            {process.eyebrow}
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark tracking-tight mt-4 leading-[1.1]">
            {process.headline}
          </h2>
          <p className="mt-6 text-body font-sans text-lg leading-relaxed">
            {process.sub}
          </p>
        </div>
      </SectionFade>

      <ol className="relative max-w-3xl mx-auto">
        <span
          aria-hidden
          className="absolute left-[18px] md:left-[28px] top-2 bottom-2 w-px bg-primary/15"
        />

        {process.steps.map((step, i) => (
          <SectionFade key={step.title} delay={i * 0.06}>
            <li className="relative flex gap-6 md:gap-10 pb-12 last:pb-0">
              <div className="relative z-10 shrink-0 flex items-center justify-center w-9 md:w-14 h-9 md:h-14 rounded-full bg-background border border-primary/15 font-data text-xs md:text-sm font-bold text-accent-warm tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="pt-1 md:pt-3">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-body font-sans text-base leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>
            </li>
          </SectionFade>
        ))}
      </ol>
    </section>
  );
}
