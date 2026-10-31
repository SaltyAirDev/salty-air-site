import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Palm + tall condensed SALTYAIR, from the brand deck.
 *
 * Two colourways: `white` for teal bands, `teal` for off-white surfaces. The
 * `-lg` files are the same artwork at 2× for the footer and hero lockups.
 */
export function Logo({
  variant = "white",
  large = false,
  className,
  priority = false,
}: {
  variant?: "white" | "teal";
  large?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/brand/logo-saltyair-${variant}${large ? "-lg" : ""}.png`}
      alt="Salty Air"
      width={large ? 590 : 393}
      height={large ? 183 : 122}
      priority={priority}
      className={cn("w-auto object-contain", className)}
    />
  );
}
