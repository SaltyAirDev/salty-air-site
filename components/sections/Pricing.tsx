import { pricing } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

export function Pricing() {
  return (
    <section className="w-full bg-primary text-background py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <SectionFade>
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
              {pricing.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mt-4 leading-[1.1]">
              {pricing.headline}
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-background/78">
              {pricing.sub}
            </p>
          </div>
        </SectionFade>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          {pricing.tiers.map((tier, i) => (
            <SectionFade key={tier.title} delay={i * 0.07}>
              <div className={`rounded-[1.75rem] p-7 h-full flex flex-col ${
                tier.highlight
                  ? "border-2 border-accent/50 bg-white/10"
                  : "border border-white/15 bg-white/5"
              }`}>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 min-h-[3.5rem] md:min-h-[4rem]">
                  {tier.title}
                </h3>
                <div className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  <span className={`block font-sans text-xs font-normal tracking-wide mb-1 ${tier.price.startsWith("Starting at ") ? "text-background/55" : "invisible"}`}>
                    Starting at
                  </span>
                  {tier.price.startsWith("Starting at ") ? tier.price.replace("Starting at ", "") : tier.price}
                </div>
                <p className="font-data text-xs text-accent tracking-wide mb-5">
                  {tier.period}
                </p>
                <p className="font-sans text-sm text-background/78 leading-relaxed mb-6">
                  {tier.desc}
                </p>

                {tier.note && (
                  <p className="mb-5 font-sans text-xs text-background/55 leading-relaxed">
                    {tier.note}
                  </p>
                )}

                <ul className="flex flex-col gap-3 border-t border-white/10 pt-5 mb-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg className="shrink-0 mt-0.5 text-accent" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.5" />
                        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-sans text-sm text-background/88 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — checkout tiers get filled button, contact tiers get outline */}
                {/* TODO: replace href on checkout tiers with real payment link */}
                <div className="mt-auto">
                  {tier.ctaType === "checkout" ? (
                    <a
                      href={tier.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-6 py-3.5 rounded-full bg-accent text-dark font-sans font-bold text-sm hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative group shadow-lg"
                    >
                      <span className="relative z-10 block transition-colors group-hover:text-white">{tier.cta.label}</span>
                      <span className="absolute inset-0 rounded-full bg-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    </a>
                  ) : (
                    <a
                      href={tier.cta.href}
                      className="inline-block w-full text-center px-6 py-3.5 rounded-full border border-accent/50 text-accent font-sans font-bold text-sm hover:bg-accent/10 transition-colors duration-300"
                    >
                      {tier.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </SectionFade>
          ))}
        </div>

        {/* How pricing works */}
        <SectionFade delay={0.15}>
          <div className="rounded-[1.75rem] border border-white/15 bg-white/5 px-8 md:px-12 py-10 mb-10">
            <span className="font-data text-sm text-background/65 uppercase tracking-[0.3em]">
              {pricing.howItWorks.eyebrow}
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mt-3 mb-4 text-background">
              Priced by <span className="text-accent">capacity</span>, not by <span className="text-accent">hours</span>.
            </h3>
            <p className="font-sans text-sm md:text-base text-background/78 leading-relaxed max-w-2xl mb-8">
              {pricing.howItWorks.body}
            </p>
            <div className="flex flex-wrap gap-3">
              {pricing.howItWorks.tiers.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-white/20 font-sans text-sm text-background/88"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Closing note */}
        <SectionFade delay={0.18}>
          <p className="font-sans text-sm text-background/78 leading-relaxed max-w-2xl">
            {pricing.note}
          </p>
        </SectionFade>

      </div>
    </section>
  );
}
