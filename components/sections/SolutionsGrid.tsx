import { solutions } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

export function SolutionsGrid() {
  return (
    <section
      id="solutions"
      className="w-full py-32 md:py-40 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <SectionFade>
        <div className="max-w-3xl mb-16">
          <span className="font-data text-xs text-accent-warm uppercase tracking-[0.3em]">
            {solutions.eyebrow}
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark tracking-tight mt-4 leading-[1.1]">
            Built with <span className="text-accent-warm">law practices</span> in mind.
          </h2>
          <p className="mt-6 text-body font-sans text-lg leading-relaxed">
            {solutions.sub}
          </p>
        </div>
      </SectionFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.categories.map((cat, i) => {
          const isLast = i === solutions.categories.length - 1;
          const isOdd = solutions.categories.length % 2 === 1;
          const spanFull = isLast && isOdd;
          return (
            <SectionFade
              key={cat.title}
              delay={i * 0.05}
              className={spanFull ? "md:col-span-2" : ""}
            >
              <div className="group bg-white rounded-organic p-8 md:p-10 border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                <span className="font-data text-xs text-body/60 uppercase tracking-widest mb-6">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-3">
                  {cat.title}
                </h3>
                <p className="text-body font-sans text-base leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </SectionFade>
          );
        })}
      </div>

      <SectionFade delay={0.2}>
        <div className="mt-12 flex items-center gap-4">
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-primary text-background font-sans font-bold text-base hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative group shadow-md"
          >
            <span className="relative z-10 block transition-colors group-hover:text-white">
              Get Started Today
            </span>
            <span className="absolute inset-0 rounded-full bg-accent-warm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
          </a>
        </div>
      </SectionFade>
    </section>
  );
}
