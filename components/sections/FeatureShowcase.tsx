import { Zap, Layers, LineChart } from "lucide-react";
import { features } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

const ICONS = [Zap, Layers, LineChart];

export function FeatureShowcase() {
  return (
    <section
      id="features"
      className="w-full py-32 md:py-40 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <SectionFade>
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
            {features.eyebrow}
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark tracking-tight mt-4 leading-[1.1]">
            {features.headline}
          </h2>
        </div>
      </SectionFade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.cards.map((card, i) => {
          const Icon = ICONS[i] ?? Zap;
          return (
            <SectionFade key={card.title} delay={i * 0.08}>
              <div className="bg-white rounded-organic p-8 border border-primary/5 hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Icon size={22} />
                </div>
                <div className="mb-6">
                  <div className="font-heading text-4xl md:text-5xl font-bold text-dark">
                    {card.stat}
                  </div>
                  <div className="font-data text-xs text-primary/50 uppercase tracking-widest mt-1">
                    {card.statLabel}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-dark mb-3">
                  {card.title}
                </h3>
                <p className="text-primary/70 font-sans text-sm leading-relaxed">
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
