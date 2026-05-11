"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cases } from "@/lib/content";
import { SectionFade } from "@/components/ui/SectionFade";

export function CaseStudies() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % cases.studies.length);
  const prev = () =>
    setIndex((i) => (i - 1 + cases.studies.length) % cases.studies.length);

  return (
    <section
      id="cases"
      className="w-full py-32 md:py-40 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <SectionFade>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
              {cases.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark tracking-tight mt-4 leading-[1.1]">
              {cases.headline}
            </h2>
            <p className="mt-6 text-primary/70 font-sans text-lg leading-relaxed">
              {cases.sub}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-data text-sm text-primary/60 mr-2">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(cases.studies.length).padStart(2, "0")}
            </span>
            <button
              onClick={prev}
              aria-label="Previous case study"
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-dark hover:text-background hover:border-dark transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next case study"
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-dark hover:text-background hover:border-dark transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </SectionFade>

      <SectionFade delay={0.1}>
        <div className="relative bg-white rounded-organic border border-primary/5 p-10 md:p-16 min-h-[320px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
                {cases.studies[index].vertical}
              </span>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark mt-4 tracking-tight leading-[1.1]">
                {cases.studies[index].result}
              </h3>
              <p className="mt-6 text-primary/70 font-sans text-lg leading-relaxed max-w-3xl">
                {cases.studies[index].detail}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionFade>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-2">
        {cases.studies.map((study, i) => (
          <button
            key={study.vertical}
            onClick={() => setIndex(i)}
            className={`px-4 py-3 rounded-full font-data text-xs uppercase tracking-widest transition-all ${
              i === index
                ? "bg-dark text-background"
                : "bg-white text-primary/60 border border-primary/10 hover:border-primary/30"
            }`}
          >
            {study.vertical}
          </button>
        ))}
      </div>
    </section>
  );
}
