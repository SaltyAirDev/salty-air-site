import { human } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";
import { NodeGraph } from "@/components/animations/NodeGraph";

export function HumanCentered() {
  return (
    <section
      id="human"
      className="w-full py-32 md:py-40 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <SectionFade>
          <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
            {human.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark tracking-tight mt-4 leading-[1.1]">
            {human.headline}
          </h2>
          <p className="mt-6 text-primary/70 font-sans text-lg leading-relaxed">
            {human.body}
          </p>
        </SectionFade>

        <SectionFade delay={0.1}>
          <NodeGraph />
        </SectionFade>
      </div>
    </section>
  );
}
