"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/brand/Logo";
import { navLinks, type NavLink } from "@/lib/nav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  // Close on route change (including browser back/forward). React's documented
  // "adjust state during render" pattern — cheaper than an effect, which would
  // paint the open menu once before closing it.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    // Leaving the panel open across the breakpoint would strand the scroll lock.
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

  const closeMobile = () => setMobileOpen(false);

  // Three items, no dropdowns. The two internal ones are text links in the
  // bar; the external call is the bar's one button. See lib/nav.ts.
  const textLinks = navLinks.filter((link) => !link.cta);
  const ctaLink = navLinks.find((link) => link.cta);

  const renderLink = (link: NavLink, className: string) =>
    link.external ? (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={closeMobile}
        className={className}
      >
        {link.label}
      </a>
    ) : (
      <Link key={link.label} href={link.href} onClick={closeMobile} className={className}>
        {link.label}
      </Link>
    );

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
            "hidden lg:flex items-center gap-8 font-sans font-medium text-sm",
            solid ? "text-ink" : "text-white",
          )}
        >
          {textLinks.map((link) => renderLink(link, "transition-colors hover:text-accent"))}
        </div>

        <div className="flex items-center gap-1.5">
          {ctaLink &&
            renderLink(
              ctaLink,
              "px-5 py-2.5 rounded-full bg-accent text-teal-deep font-sans font-semibold text-[13px] md:text-sm whitespace-nowrap transition-colors hover:bg-orange",
            )}

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
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

      {/* Same three items as the bar, nothing more. */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden relative mt-3 origin-top transition-all duration-300",
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none invisible",
        )}
      >
        <div className="rounded-3xl border border-primary/10 bg-background shadow-xl p-3">
          {navLinks.map((link) =>
            renderLink(
              link,
              "block rounded-2xl px-4 py-3 font-sans font-medium text-base text-ink hover:bg-primary/5 transition-colors",
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
