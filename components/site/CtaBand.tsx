import { Grain } from "@/components/brand/Grain";
import { Button } from "@/components/ui/Button";
import { AUDIT_CTA, AUDIT_OFFER, CALL_CTA } from "@/lib/site";

/**
 * Closing band on every page. Pushes the brand line one more time, with
 * `Automate.` in peach the way the deck sets accent words — this is one of the
 * two places the slogan belongs (the other is the footer), and it is
 * deliberately not any page's hero.
 */
export function CtaBand({
  sub = `Start with the ${AUDIT_OFFER}, or book a call and we'll talk through what is actually in your stack.`,
  primaryCta = AUDIT_CTA,
  secondaryCta = CALL_CTA,
}: {
  sub?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="teal-band relative overflow-hidden text-white">
      <Grain />
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-28 text-center">
        <h2 className="font-heading font-bold tracking-tight text-4xl md:text-5xl leading-[1.08]">
          Work Less. Live More. <span className="text-accent">Automate.</span>
        </h2>
        <p className="mt-6 font-sans text-lg leading-relaxed text-white/80 max-w-2xl mx-auto">
          {sub}
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={primaryCta.href} variant="peach">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="outline">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
