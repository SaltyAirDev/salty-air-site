import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white [&>span:last-child]:bg-primary",
  ghost:
    "bg-transparent text-dark border border-dark/20 [&>span:last-child]:bg-dark",
  dark:
    "bg-dark text-background [&>span:last-child]:bg-accent",
};

export function Button({
  variant = "primary",
  children,
  className,
  ...rest
}: Props) {
  return (
    <a
      className={cn(
        "inline-block px-7 py-3.5 rounded-full font-sans font-bold text-base transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 overflow-hidden relative group shadow-sm",
        variants[variant],
        className,
      )}
      {...rest}
    >
      <span className="relative z-10 block transition-colors group-hover:text-white">
        {children}
      </span>
      <span className="absolute inset-0 rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
    </a>
  );
}
