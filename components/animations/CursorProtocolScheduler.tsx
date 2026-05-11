"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MousePointer2 } from "lucide-react";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export function CursorProtocolScheduler() {
  const container = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.to(cursorRef.current, { opacity: 1, duration: 0.3 })
        .to(cursorRef.current, {
          x: 190,
          y: 35,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .call(() => setActiveDay(5))
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, {
          x: 110,
          y: 105,
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.4,
        })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { opacity: 0, duration: 0.3 })
        .call(() => setActiveDay(null))
        .set(cursorRef.current, { x: 0, y: 0 });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="relative w-full h-48 flex flex-col items-center justify-center p-4"
    >
      <div className="grid grid-cols-7 gap-1 md:gap-2 mb-6 cursor-default">
        {DAYS.map((d, i) => (
          <div
            key={i}
            className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-data text-sm font-medium transition-colors duration-300 ${
              activeDay === i
                ? "bg-accent text-white"
                : "bg-primary/10 text-primary"
            }`}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="px-6 py-2 rounded-full bg-dark text-background text-xs font-bold font-sans uppercase tracking-widest shadow-md">
        Save Workflow
      </div>

      <div
        ref={cursorRef}
        className="absolute top-4 left-6 md:left-12 opacity-0 z-10 pointer-events-none drop-shadow-md"
        style={{ color: "#CC5833" }}
      >
        <MousePointer2 size={24} fill="currentColor" stroke="white" strokeWidth={1.5} />
      </div>
    </div>
  );
}
