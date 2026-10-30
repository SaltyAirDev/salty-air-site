import { valuePillars } from "@/lib/offers";

/**
 * The three value pillars, from `valuePillars` in lib/offers.ts: connect what
 * you already bought, embed don't advise, build the missing piece.
 *
 * Shared by the homepage and /integrations on purpose — these are the three
 * things the company says about itself, and the two pages that carry the
 * positioning should never drift apart on them. Not the same thing as
 * OfferSplit, which is the integrations / embedded packaging.
 */
export function ValuePillars({ tone = "light" }: { tone?: "light" | "teal" }) {
  const teal = tone === "teal";

  return (
    <ol className="grid md:grid-cols-3 gap-8">
      {valuePillars.map((pillar, i) => (
        <li key={pillar.title}>
          <span
            className={`label-caps font-sans ${teal ? "text-accent" : "text-primary/60"}`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3
            className={`mt-3 font-heading font-bold text-xl md:text-2xl ${
              teal ? "text-white" : "text-ink"
            }`}
          >
            {pillar.title}
          </h3>
          <p
            className={`mt-3 font-sans text-[15px] leading-relaxed ${
              teal ? "text-white/80" : "text-body"
            }`}
          >
            {pillar.desc}
          </p>
        </li>
      ))}
    </ol>
  );
}
