"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    { quote: "NOVA didn't just automate our document ingestion; it completely rewired how our operators think about exceptions.", name: "Sarah Jenkins", role: "VP of Operations", company: "Meridian Supply" },
    { quote: "We scaled our container volume by 4x without adding a single headcount to the documentation team.", name: "David Chen", role: "Director of Customs", company: "OceanBridge" },
    { quote: "The AI agent orchestration handles the messy reality of global trade so our team can focus on client relationships.", name: "Elena Rostova", role: "Chief Logistics Officer", company: "Atlas Freight" }
  ];

  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 bg-[var(--color-background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="headline-cinematic text-4xl text-white">Don't just take our word for it.</h2>
      </div>

      <div className="relative flex overflow-x-hidden group cursor-grab active:cursor-grabbing">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          className="flex gap-8 px-6 md:px-24"
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="min-w-[400px] max-w-[500px] p-8 md:p-12 rounded-xl bg-[#131B2B] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors select-none">
              <p className="text-xl md:text-2xl text-[var(--color-foreground)] font-light leading-relaxed mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-border)] overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${t.name}`} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-[var(--color-muted)]">{t.role}, <span className="text-[var(--color-accent)]">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
