"use client";

import { useEffect, useState } from "react";
import { roi } from "@/lib/content";

export function DashboardMockup() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % roi.metrics.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-dark rounded-[2rem] border border-primary/30 p-6 md:p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-data text-xs uppercase tracking-widest text-background/78">
            Owner Dashboard · Live
          </span>
        </div>
        <span className="font-data text-xs text-background/55">
          {new Date().toLocaleDateString()}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {roi.metrics.map((metric, i) => (
          <div
            key={metric.label}
            className={`rounded-[1.25rem] p-4 transition-all duration-500 ${
              pulse === i
                ? "bg-accent/15 border border-accent/40 scale-[1.02]"
                : "bg-primary/10 border border-primary/20"
            }`}
          >
            <div className="font-data text-[10px] uppercase tracking-widest text-background/65 mb-2">
              {metric.label}
            </div>
            <div className="font-heading text-2xl md:text-3xl font-bold text-background">
              {metric.value}
            </div>
            <div
              className={`font-data text-xs mt-1 ${
                metric.trend === "—" ? "text-background/55" : "text-accent"
              }`}
            >
              {metric.trend}
            </div>
            <p className="font-sans text-xs text-background/55 leading-snug mt-2">
              {metric.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-primary/20">
        <div className="font-data text-[10px] uppercase tracking-widest text-background/65 mb-3">
          Pipeline Velocity (last 30 days)
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {[35, 50, 42, 65, 58, 72, 68, 80, 75, 88, 82, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-accent/70 transition-all duration-1000"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
