import { trust } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

export function TrustStrip() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-16 max-w-5xl mx-auto text-center">
      <SectionFade>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark/80 tracking-tight">
          {trust.headline}
        </h2>
        <a
          href={trust.link.href}
          className="inline-flex items-center mt-6 font-data text-sm text-accent-warm uppercase tracking-widest font-bold hover:tracking-[0.2em] transition-all"
        >
          {trust.link.label}
        </a>
      </SectionFade>
    </section>
  );
}
