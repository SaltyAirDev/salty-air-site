import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { offers, type Offer } from "@/lib/offers";

/**
 * The offer ladder: the audit you can book today, the build that comes out of
 * it, and the embedded partnership. Only the audit carries a figure — the other
 * two print "Quoted after the audit" where a price would go, and deliberately
 * do not hint at a number anywhere else on the card.
 */
export function OfferCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {offers.map((offer) => (
        <OfferCard key={offer.name} offer={offer} />
      ))}
    </div>
  );
}

function OfferCard({ offer }: { offer: Offer }) {
  const teal = offer.tone === "teal";

  return (
    <div
      className={cn(
        "rounded-3xl p-8 md:p-9 flex flex-col",
        teal
          ? "bg-primary text-white"
          : "border border-primary/15 bg-white",
      )}
    >
      <span
        className={cn("label-caps font-sans", teal ? "text-accent" : "text-primary/60")}
      >
        {offer.badge}
      </span>
      <h3
        className={cn(
          "mt-3 font-heading font-bold text-2xl",
          teal ? "text-white" : "text-ink",
        )}
      >
        {offer.name}
      </h3>
      {/* The audit's figure gets the display size; "Quoted after the audit" is
          a sentence, so it is set smaller rather than stretched to match. */}
      <p
        className={cn(
          "mt-4 font-heading font-bold",
          offer.price.startsWith("$") ? "text-5xl" : "text-2xl md:text-[1.75rem]",
          teal ? "text-accent" : "text-primary",
        )}
      >
        {offer.price}
      </p>
      <p
        className={cn(
          "mt-2 label-caps font-sans",
          teal ? "text-white/60" : "text-body/60",
        )}
      >
        {offer.period}
      </p>
      <p
        className={cn(
          "mt-5 font-sans text-[15px] leading-relaxed",
          teal ? "text-white/85" : "text-body",
        )}
      >
        {offer.desc}
      </p>
      <ul
        className={cn(
          "mt-6 flex flex-col gap-3 font-sans text-[15px]",
          teal ? "text-white/85" : "text-body",
        )}
      >
        {offer.features.map((f) => (
          <li key={f} className="flex gap-3">
            <Check className={teal ? "text-accent" : "text-primary"} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-3">
        <Button href={offer.cta.href} variant={teal ? "peach" : "teal"}>
          {offer.cta.label}
        </Button>
        {offer.secondaryCta && (
          <Button
            href={offer.secondaryCta.href}
            variant={teal ? "outline" : "teal"}
            className={
              teal
                ? undefined
                : "bg-transparent text-primary border border-primary/25 hover:bg-primary/5 hover:text-primary"
            }
          >
            {offer.secondaryCta.label}
          </Button>
        )}
      </div>
      {offer.note && (
        <p
          className={cn(
            "mt-5 font-sans text-sm",
            teal ? "text-white/65" : "text-body/70",
          )}
        >
          {offer.note}
        </p>
      )}
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
