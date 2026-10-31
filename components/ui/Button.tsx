import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * - `peach`  — primary CTA. Peach fill with deep-teal type (6.2:1).
 * - `outline`— on teal bands. White hairline, white type.
 * - `teal`   — on off-white sections. Teal fill, white type (7.1:1).
 */
type Variant = "peach" | "outline" | "teal";

const variants: Record<Variant, string> = {
  peach: "bg-accent text-teal-deep hover:bg-orange",
  outline: "border border-white/40 text-white hover:bg-white/10",
  teal: "bg-primary text-white hover:bg-teal-deep",
};

export function Button({
  href,
  variant = "peach",
  children,
  className,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center px-7 py-3.5 rounded-full font-sans font-semibold text-[15px] tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    variants[variant],
    className,
  );

  // Stripe checkout, the Google calendar, and mailto: all have to leave the
  // app, so they stay plain anchors; internal routes get client navigation.
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
