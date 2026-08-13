"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { nav as lawNav } from "@/lib/content";
import type { NavContent, NavLink } from "@/lib/content-types";

export function Navbar({ content: nav = lawNav }: { content?: NavContent }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // The bar goes solid on scroll, and also while the mobile panel is open so the
  // two read as one surface over the dark hero.
  const solid = scrolled || mobileOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  // Close on route change (including browser back/forward). React's documented
  // "adjust state during render" pattern — cheaper than an effect, which would
  // paint the open menu once before closing it.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    // Leaving the panel open across the md breakpoint would strand the scroll lock.
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);

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
            "absolute left-1/2 -translate-x-1/2 top-full pt-4 w-56 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
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
                className="block rounded-[1rem] px-4 py-2.5 font-sans font-semibold text-sm text-dark hover:bg-primary/5 transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="fixed top-6 inset-x-0 z-50 max-w-7xl mx-auto px-2 md:px-10">
      {/* Scrim: dims the page and gives the expected tap-outside-to-close.
          First child, so it paints behind the bar and panel. */}
      <div
        onClick={closeMobile}
        aria-hidden
        className={cn(
          "md:hidden fixed inset-0 bg-dark/40 transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />

      <div
        className={cn(
          "relative transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center justify-between px-5 md:px-6 py-3.5 rounded-full",
          // Opaque while the panel is open, otherwise the scrim behind the bar
          // shows through the translucent fill and greys it against the panel.
          mobileOpen
            ? "bg-background border border-primary/10 text-primary shadow-sm"
            : scrolled
              ? "bg-background/85 backdrop-blur-xl border border-primary/10 text-primary shadow-sm"
              : "bg-transparent text-white border border-transparent",
        )}
      >
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label={nav.brand}
          onClick={closeMobile}
        >
          <Image
            src={solid ? "/logo-green.png" : "/logo-white.png"}
            alt={nav.brand}
            width={140}
            height={36}
            priority
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
          {nav.links.map(renderLink)}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={nav.cta.href}
            onClick={closeMobile}
            className={cn(
              "px-4 md:px-5 py-2.5 rounded-full font-sans font-semibold text-[13px] md:text-sm whitespace-nowrap transition-transform hover:scale-[1.03] active:scale-95 overflow-hidden relative group",
              solid ? "bg-accent-warm text-white" : "bg-white text-dark",
            )}
          >
            <span className="relative z-10 transition-colors group-hover:text-white">
              {nav.cta.label}
            </span>
            <span
              className={cn(
                "absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                solid ? "bg-primary" : "bg-accent",
              )}
            />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "md:hidden flex items-center justify-center w-10 h-10 -mr-1.5 rounded-full transition-colors",
              solid ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10",
            )}
          >
            {/* Two bars that cross into an X when open. */}
            <span className="relative block w-5 h-4" aria-hidden>
              <span
                className={cn(
                  "absolute left-0 block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                  mobileOpen ? "top-[7px] rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                  mobileOpen ? "top-[7px] -rotate-45" : "top-[13px]",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden relative mt-3 origin-top transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none invisible",
        )}
      >
        <div className="rounded-[1.75rem] border border-primary/10 bg-background shadow-xl p-3 max-h-[calc(100dvh-8rem)] overflow-y-auto">
          {nav.links.map((link) =>
            link.children?.length ? (
              <div key={link.label} className="px-2 pt-3 pb-1">
                <span className="block font-data text-[11px] uppercase tracking-[0.2em] text-body/50">
                  {link.label}
                </span>
                <div className="mt-1.5 flex flex-col border-l border-primary/10 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMobile}
                      className="py-2.5 font-sans font-semibold text-base text-dark hover:text-accent-warm transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="block rounded-[1.25rem] px-4 py-3 font-sans font-semibold text-base text-dark hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
