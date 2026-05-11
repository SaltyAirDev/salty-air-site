"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { nav } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 inset-x-0 z-50 max-w-7xl mx-auto px-2 md:px-10">
      <div
        className={cn(
          "transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center justify-between px-6 py-3.5 rounded-full",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border border-primary/10 text-primary shadow-sm"
            : "bg-transparent text-white border border-transparent",
        )}
      >
        <a href="#" className="flex items-center" aria-label={nav.brand}>
          <Image
            src={scrolled ? "/logo-green.png" : "/logo-white.png"}
            alt={nav.brand}
            width={140}
            height={36}
            priority
            className="h-9 w-auto object-contain"
          />
        </a>
        <div className="hidden md:flex gap-8 font-sans font-medium text-sm">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-accent hover:-translate-y-px transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={nav.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "px-5 py-2.5 rounded-full font-sans font-semibold text-sm transition-transform hover:scale-[1.03] active:scale-95 overflow-hidden relative group",
            scrolled ? "bg-accent-warm text-white" : "bg-white text-dark",
          )}
        >
          <span className="relative z-10 transition-colors group-hover:text-white">
            {nav.cta.label}
          </span>
          <span
            className={cn(
              "absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
              scrolled ? "bg-primary" : "bg-accent",
            )}
          />
        </a>
      </div>
    </nav>
  );
}
