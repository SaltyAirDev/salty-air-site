"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/brand/Logo";
import { navCta, navLinks, type NavLink } from "@/lib/nav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // The bar goes solid on scroll, and also while the mobile panel is open so
  // the two read as one surface over the teal hero.
  const solid = scrolled || mobileOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

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
      if (window.innerWidth >= 1024) setMobileOpen(false);
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

  const linkClass = "transition-colors hover:text-accent";

  const renderLink = (link: NavLink) => {
    if (!link.children?.length) {
      return (
        <Link key={link.label} href={link.href} className={linkClass}>
          {link.label}
        </Link>
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
            "absolute left-1/2 -translate-x-1/2 top-full pt-4 w-56 transition-all duration-300",
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1 pointer-events-none",
          )}
        >
          <div className="rounded-2xl border border-primary/10 bg-background shadow-xl p-2">
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpenMenu(null)}
                className="block rounded-xl px-4 py-2.5 font-sans font-medium text-sm text-ink hover:bg-primary/5 hover:text-primary transition-colors"
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
    <nav className="fixed top-4 inset-x-0 z-50 max-w-7xl mx-auto px-3 md:px-6">
      {/* Scrim: dims the page and gives the expected tap-outside-to-close.
          First child, so it paints behind the bar and panel. */}
      <div
        onClick={closeMobile}
        aria-hidden
        className={cn(
          "lg:hidden fixed inset-0 bg-ink/50 transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />

      <div
        className={cn(
          "relative flex items-center justify-between gap-4 px-5 md:px-6 py-3 rounded-full transition-all duration-500",
          // Opaque while the panel is open, otherwise the scrim behind the bar
          // shows through the translucent fill and greys it against the panel.
          mobileOpen
            ? "bg-background border border-primary/10 shadow-sm"
            : scrolled
              ? "bg-background/90 backdrop-blur-xl border border-primary/10 shadow-sm"
              : "bg-transparent border border-transparent",
        )}
      >
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Salty Air — home"
          onClick={closeMobile}
        >
          <Logo variant={solid ? "teal" : "white"} priority className="h-7 md:h-8" />
        </Link>

        <div
          className={cn(
            "hidden lg:flex items-center gap-7 font-sans font-medium text-sm",
            solid ? "text-ink" : "text-white",
          )}
        >
          {navLinks.map(renderLink)}
        </div>

        <div className="flex items-center gap-1.5">
          <Link
            href={navCta.href}
            onClick={closeMobile}
            className="px-5 py-2.5 rounded-full bg-accent text-teal-deep font-sans font-semibold text-[13px] md:text-sm whitespace-nowrap transition-colors hover:bg-orange"
          >
            {navCta.label}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "lg:hidden flex items-center justify-center w-10 h-10 -mr-2 rounded-full transition-colors",
              solid ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10",
            )}
          >
            {/* Two bars that cross into an X when open. */}
            <span className="relative block w-5 h-4" aria-hidden>
              <span
                className={cn(
                  "absolute left-0 block w-5 h-0.5 bg-current rounded-full transition-all duration-300",
                  mobileOpen ? "top-[7px] rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block w-5 h-0.5 bg-current rounded-full transition-all duration-300",
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
          "lg:hidden relative mt-3 origin-top transition-all duration-300",
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none invisible",
        )}
      >
        <div className="rounded-3xl border border-primary/10 bg-background shadow-xl p-3 max-h-[calc(100dvh-8rem)] overflow-y-auto">
          {navLinks.map((link) =>
            link.children?.length ? (
              <div key={link.label} className="px-2 pt-3 pb-1">
                <span className="label-caps block font-sans text-body/60">
                  {link.label}
                </span>
                <div className="mt-2 flex flex-col border-l border-primary/10 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMobile}
                      className="py-2.5 font-sans font-medium text-base text-ink hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="block rounded-2xl px-4 py-3 font-sans font-medium text-base text-ink hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
