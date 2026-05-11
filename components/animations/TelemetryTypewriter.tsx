"use client";

import { useEffect, useState } from "react";

type Props = {
  lines?: string[];
  label?: string;
};

const DEFAULT_LINES = [
  "  > AGENT TRACE:",
  "  > Lead enriched: ACME Corp (12 employees)",
  "  > Intent score: 0.84 (warm)",
  "  > Drafting personalized follow-up...",
  "  > Sent: 'Hey Sarah, saw you're scaling...'",
  "  > Status: Optimal_",
];

export function TelemetryTypewriter({
  lines = DEFAULT_LINES,
  label = "Agent Telemetry",
}: Props) {
  const fullText = lines.join("\n");
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="w-full h-56 bg-[#0D120F] rounded-[1.5rem] border border-primary/30 p-4 shadow-inner relative overflow-hidden flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-primary/80 uppercase font-sans tracking-widest font-bold">
          {label}
        </span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] text-green-500 font-data">LIVE</span>
        </div>
      </div>
      <div className="flex-1 text-primary font-data text-xs md:text-sm whitespace-pre-wrap leading-relaxed">
        {text}
        <span className="inline-block w-2 bg-accent ml-1 animate-pulse">
          &nbsp;
        </span>
      </div>
    </div>
  );
}
