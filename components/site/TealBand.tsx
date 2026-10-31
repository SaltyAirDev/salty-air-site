import { Grain } from "@/components/brand/Grain";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * A deep-teal, grain-textured section band — the site's signature surface.
 * White type, peach accent words. Everything inside sits above the grain.
 */
export function TealBand({
  children,
  className,
  innerClassName,
  id,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("teal-band relative overflow-hidden text-white", className)}
    >
      <Grain />
      <div className={cn("relative max-w-7xl mx-auto px-6 md:px-10", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
