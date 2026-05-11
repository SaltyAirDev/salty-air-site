"use client";

import { useEffect, useState } from "react";

type Card = { id: number; label: string };

type Props = {
  items?: string[];
  className?: string;
};

const DEFAULT_ITEMS = [
  "Inbound Lead Captured",
  "Lead Enriched + Routed",
  "Quote Sent + Tracked",
];

export function DiagnosticShuffler({ items = DEFAULT_ITEMS, className }: Props) {
  const [cards, setCards] = useState<Card[]>(
    items.map((label, i) => ({ id: i + 1, label })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const next = [...prev];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-48 flex items-center justify-center ${className ?? ""}`}>
      {cards.map((card, idx) => {
        const isTop = idx === 0;
        const isMiddle = idx === 1;
        const yOffset = isTop ? 0 : isMiddle ? 20 : 40;
        const scale = isTop ? 1 : isMiddle ? 0.95 : 0.9;
        const opacity = isTop ? 1 : isMiddle ? 0.7 : 0.4;
        const zIndex = 3 - idx;

        return (
          <div
            key={card.id}
            className="absolute w-72 h-24 bg-dark rounded-[1.5rem] border border-primary/20 shadow-xl flex items-center px-6 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              transform: `translateY(${yOffset}px) scale(${scale})`,
              opacity,
              zIndex,
            }}
          >
            <div className="w-3 h-3 rounded-full bg-accent mr-4 shrink-0" />
            <span className="text-background font-data text-sm font-medium">
              {card.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
