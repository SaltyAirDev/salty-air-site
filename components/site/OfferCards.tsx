import { Button } from "@/components/ui/Button";
import { auditOffer, retainerOffer } from "@/lib/offers";

/**
 * The two published offers, side by side. Audit carries its price; the
 * retainer says "Inquire only" where a price would go, and deliberately
 * doesn't hint at a number anywhere else on the card.
 */
export function OfferCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Audit — light card */}
      <div className="rounded-3xl border border-primary/15 bg-white p-8 md:p-10 flex flex-col">
        <h3 className="font-heading font-bold text-2xl text-ink">{auditOffer.name}</h3>
        <p className="mt-4 font-heading font-bold text-5xl text-primary">
          {auditOffer.price}
        </p>
        <p className="mt-2 label-caps font-sans text-body/60">{auditOffer.period}</p>
        <p className="mt-5 font-sans text-[15px] leading-relaxed text-body">
          {auditOffer.desc}
        </p>
        <ul className="mt-6 flex flex-col gap-3 font-sans text-[15px] text-body">
          {auditOffer.features.map((f) => (
            <li key={f} className="flex gap-3">
              <Check className="text-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-2 flex flex-col sm:flex-row gap-3">
          <Button href={auditOffer.cta.href} variant="teal">
            {auditOffer.cta.label}
          </Button>
          {auditOffer.secondaryCta && (
            <Button
              href={auditOffer.secondaryCta.href}
              variant="teal"
              className="bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
            >
              {auditOffer.secondaryCta.label}
            </Button>
          )}
        </div>
        {auditOffer.note && (
          <p className="mt-5 font-sans text-sm text-body/70">{auditOffer.note}</p>
        )}
      </div>

      {/* Retainer — teal card, no price */}
      <div className="rounded-3xl bg-primary text-white p-8 md:p-10 flex flex-col">
        <h3 className="font-heading font-bold text-2xl">{retainerOffer.name}</h3>
        <p className="mt-4 font-heading font-bold text-4xl md:text-5xl text-accent">
          {retainerOffer.price}
        </p>
        <p className="mt-2 label-caps font-sans text-white/60">{retainerOffer.period}</p>
        <p className="mt-5 font-sans text-[15px] leading-relaxed text-white/85">
          {retainerOffer.desc}
        </p>
        <ul className="mt-6 flex flex-col gap-3 font-sans text-[15px] text-white/85">
          {retainerOffer.features.map((f) => (
            <li key={f} className="flex gap-3">
              <Check className="text-accent" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-2 flex flex-col sm:flex-row gap-3">
          <Button href={retainerOffer.cta.href} variant="peach">
            {retainerOffer.cta.label}
          </Button>
          {retainerOffer.secondaryCta && (
            <Button href={retainerOffer.secondaryCta.href} variant="outline">
              {retainerOffer.secondaryCta.label}
            </Button>
          )}
        </div>
        {retainerOffer.note && (
          <p className="mt-5 font-sans text-sm text-white/65">{retainerOffer.note}</p>
        )}
      </div>
    </div>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className={`mt-0.5 shrink-0 ${className ?? ""}`}
    >
      <path
        d="M3.5 9.5l3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
