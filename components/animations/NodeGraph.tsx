"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "lead", x: 60, y: 80, label: "Lead", color: "accent" },
  { id: "enrich", x: 200, y: 40, label: "Enrich", color: "primary" },
  { id: "qualify", x: 200, y: 120, label: "Qualify", color: "primary" },
  { id: "quote", x: 340, y: 80, label: "Quote", color: "primary" },
  { id: "close", x: 480, y: 80, label: "Close", color: "accent" },
];

const edges: Array<[string, string]> = [
  ["lead", "enrich"],
  ["lead", "qualify"],
  ["enrich", "quote"],
  ["qualify", "quote"],
  ["quote", "close"],
];

const findNode = (id: string) => nodes.find((n) => n.id === id)!;

export function NodeGraph() {
  return (
    <div className="w-full aspect-[6/3] bg-dark/5 rounded-[2rem] border border-primary/15 p-6 relative overflow-hidden">
      <svg
        viewBox="0 0 540 160"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {edges.map(([from, to], i) => {
          const a = findNode(from);
          const b = findNode(to);
          return (
            <motion.path
              key={`${from}-${to}`}
              d={`M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${(a.y + b.y) / 2 - 10}, ${b.x} ${b.y}`}
              stroke="#2E4036"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 + i * 0.15 }}
            />
          );
        })}

        {edges.map(([from, to], i) => {
          const a = findNode(from);
          const b = findNode(to);
          return (
            <motion.circle
              key={`pulse-${from}-${to}`}
              r="3"
              fill="#CC5833"
              initial={{ cx: a.x, cy: a.y, opacity: 0 }}
              animate={{
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: 1.5 + i * 0.3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="22"
              fill={node.color === "accent" ? "#CC5833" : "#2E4036"}
              opacity={node.color === "accent" ? 1 : 0.85}
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              className="fill-white font-data text-[9px] font-bold uppercase tracking-wider"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
