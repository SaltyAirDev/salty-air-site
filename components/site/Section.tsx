import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/** Airy off-white (or sand) section on the light half of the system. */
export function Section({
  children,
  className,
  innerClassName,
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "light" | "sand";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        tone === "sand" ? "bg-sand/45" : "bg-background",
        className,
      )}
    >
      <div className={cn("max-w-7xl mx-auto px-6 md:px-10", innerClassName)}>
        {children}
      </div>
    </section>
  );
}

/** Section eyebrow — the deck's small-caps label. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("label-caps block font-sans text-primary/70", className)}>
      {children}
    </span>
  );
}

/** Section heading. Montserrat, tight, teal on light surfaces. */
export function Heading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-heading font-bold tracking-tight text-ink text-3xl md:text-[2.75rem] md:leading-[1.1] mt-4",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
