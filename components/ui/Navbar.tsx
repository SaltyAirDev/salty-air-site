"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { nav as lawNav } from "@/lib/content";
import type { NavContent, NavLink } from "@/lib/content-types";

export function Navbar({ content: nav = lawNav }: { content?: NavContent }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  // Small grace period so the pointer can cross the gap into the dropdown.
  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const linkClass = "hover:text-accent hover:-translate-y-px transition-all";

  const renderLink = (link: NavLink) => {
    if (!link.children?.length) {
      return (
        <a key={link.label} href={link.href} className={linkClass}>
          {link.label}
        </a>
      );
    }

    const isOpen = openMenu === link.label;

    return (
      <div
        key={link.label}
        className="relative"
        onMouseEnter={() => open(link.label)}
        onMouseLeave={scheduleClose}
        onFocus={() => open(link.label)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
        }}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setOpenMenu(isOpen ? null : link.label)}
          className={cn(linkClass, "flex items-center gap-1.5 cursor-pointer")}
        >
          {link.label}
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden
            className="transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path
              d="M1.5 3.5L5 7l3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1 pointer-events-none",
          )}
        >
          <div className="rounded-[1.5rem] border border-primary/10 bg-background/95 backdrop-blur-xl shadow-xl p-2 text-primary">
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpenMenu(null)}
                className="block rounded-[1rem] px-4 py-3 hover:bg-primary/5 transition-colors"
              >
                <span className="block font-sans font-semibold text-sm text-dark">
                  {child.label}
                </span>
                {child.desc && (
                  <span className="block font-data text-[11px] text-body/60 mt-1 leading-snug">
                    {child.desc}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

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
        <a href="/" className="flex items-center" aria-label={nav.brand}>
          <Image
            src={scrolled ? "/logo-green.png" : "/logo-white.png"}
            alt={nav.brand}
            width={140}
            height={36}
            priority
            className="h-9 w-auto object-contain"
          />
        </a>
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
          {nav.links.map(renderLink)}
        </div>
        <a
          href={nav.cta.href}
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
