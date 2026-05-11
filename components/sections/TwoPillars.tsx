import { Plug, BookOpen } from "lucide-react";
import { pillars } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

const ICONS = { Plug, BookOpen } as const;

export function TwoPillars() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionFade>
        <div className="max-w-2xl mb-16">
          <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
            {pillars.eyebrow}
          </span>
        </div>
      </SectionFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.cards.map((card, i) => {
          const Icon = ICONS[card.icon as keyof typeof ICONS] ?? Plug;
          return (
            <SectionFade key={card.title} delay={i * 0.08}>
              <div className="bg-white rounded-organic p-10 md:p-12 border border-primary/5 hover:shadow-xl transition-shadow duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary text-background flex items-center justify-center mb-8">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-primary/70 font-sans text-lg leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </SectionFade>
          );
        })}
      </div>
    </section>
  );
}
