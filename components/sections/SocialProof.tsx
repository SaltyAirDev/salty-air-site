import { Star } from "lucide-react";
import { social } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

export function SocialProof() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionFade>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark tracking-tight text-center max-w-3xl mx-auto leading-[1.1]">
          {social.headline}
        </h2>
      </SectionFade>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {social.stats.map((stat, i) => (
          <SectionFade key={stat.label} delay={i * 0.08}>
            <div className="bg-white rounded-organic p-8 border border-primary/5 text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-accent-warm">
                {stat.value}
              </div>
              <div className="font-data text-xs text-primary/60 uppercase tracking-widest mt-2">
                {stat.label}
              </div>
            </div>
          </SectionFade>
        ))}
      </div>

      <SectionFade delay={0.3}>
        <div className="mt-20 max-w-3xl mx-auto bg-dark rounded-organic p-10 md:p-14 text-background">
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-accent stroke-accent"
              />
            ))}
          </div>
          <p className="font-drama italic text-2xl md:text-3xl leading-snug text-background">
            &ldquo;{social.quote.body}&rdquo;
          </p>
          <div className="mt-8 pt-6 border-t border-background/10 flex flex-col gap-1">
            <span className="font-sans font-bold text-background">
              {social.quote.author}
            </span>
            <span className="font-data text-xs text-background/50 uppercase tracking-widest">
              {social.quote.role}
            </span>
          </div>
        </div>
      </SectionFade>
    </section>
  );
}
