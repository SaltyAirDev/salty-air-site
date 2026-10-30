import Link from "next/link";
import { addOnGroups } from "@/lib/offers";

/**
 * The third rung of the ladder: what sits on top of the retainer. Item names
 * only, no descriptions and deliberately no figures — these are scoped in the
 * retainer conversation, so a price here would be invented.
 */
export function AddOns() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {addOnGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-3xl border border-primary/15 bg-white p-8 md:p-10 flex flex-col"
        >
          <span className="label-caps font-sans text-primary/60">Add-on</span>
          <h3 className="mt-3 font-heading font-bold text-2xl text-ink">
            {group.title}
          </h3>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-body">
            {group.desc}
          </p>
          <ul className="mt-6 flex flex-col gap-2.5 font-sans text-[15px] text-body">
            {group.items.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-primary/50"
                />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href={group.href}
              className="font-sans font-semibold text-[15px] text-primary underline underline-offset-4 hover:text-burnt transition-colors"
            >
              {group.linkLabel} →
            </Link>
            <Link
              href="/contact"
              className="font-sans text-[15px] text-body/70 underline underline-offset-4 hover:text-primary transition-colors"
            >
              Inquire
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
