"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hero } from "@/lib/content";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { AuroraGradient } from "@/components/animations/AuroraGradient";

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative w-full min-h-[100dvh] overflow-hidden bg-dark"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-dark to-dark z-0" />

      <div className="absolute inset-x-0 top-0 h-[60%] z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,88,51,0.35),transparent_60%)]" />
      </div>

      <AuroraGradient />

      <div className="relative z-10 flex flex-col justify-center w-full min-h-[100dvh] px-8 md:px-16 max-w-7xl mx-auto pt-12 pb-12">
        {hero.eyebrow && (
          <span className="font-data text-xs text-accent uppercase tracking-[0.3em] mb-5 hero-anim">
            {hero.eyebrow}
          </span>
        )}
        <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tight hero-anim leading-[1.05]">
          <span className="text-white">{hero.headline}</span>{" "}
          <span className="text-accent">{hero.headlineAccent}</span>
        </h1>

        <p className="text-white/88 font-sans text-lg md:text-xl max-w-2xl mt-8 leading-relaxed hero-anim">
          {hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 hero-anim">
          <a
            href={hero.primaryCta.href}
            className="inline-block px-8 py-4 rounded-full bg-accent text-dark font-sans font-bold text-base hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative group shadow-lg"
          >
            <span className="relative z-10 block transition-colors group-hover:text-white">
              {hero.primaryCta.label}
            </span>
            <span className="absolute inset-0 rounded-full bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
          </a>
        </div>

        <p className="mt-6 font-data text-[11px] text-white/35 tracking-wide hero-anim">
          {hero.trust}
        </p>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-dark/40 backdrop-blur-sm">
        <LogoMarquee />
      </div>
    </section>
  );
}
