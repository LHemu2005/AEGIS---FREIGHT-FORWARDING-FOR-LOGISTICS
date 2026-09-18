"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PlatformLayers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const layers = [
    { num: "01", title: "ORGANIZATION DATA", desc: "Centralize operational information from emails, PDFs, and legacy TMS." },
    { num: "02", title: "CONTEXTUAL AI", desc: "Ground AI in company terminology, historical decisions, and processes." },
    { num: "03", title: "ORCHESTRATION", desc: "Route tasks according to predefined rules and business logic." },
    { num: "04", title: "AI AGENTS", desc: "Deploy specialized agents for repetitive, high-volume workflows." },
    { num: "05", title: "APPLICATION", desc: "Give humans visibility, control, and exception-handling superpowers." }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#0B0F17] relative min-h-[150vh]">
      <div className="sticky top-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        
        {/* Left Side Sticky Text */}
        <div className="flex-1">
          <p className="section-label mb-4 text-[var(--color-accent)]">The NOVA Platform</p>
          <h2 className="headline-cinematic text-4xl md:text-5xl text-white mb-6">One intelligence layer for the entire operation.</h2>
          <p className="text-xl text-[var(--color-muted)] font-light max-w-md">
            We don't just extract data. We build a semantic understanding of your supply chain to execute workflows autonomously.
          </p>
        </div>

        {/* Right Side Scroll-Driven Layers */}
        <div className="flex-1 flex flex-col gap-4 relative mt-16 md:mt-0">
          {layers.map((layer, idx) => {
            const start = idx * 0.15;
            const end = start + 0.15;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, end], [50, 0]);

            return (
              <motion.div 
                key={idx}
                style={{ opacity, y }}
                className="p-8 rounded-xl bg-[#131B2B] border border-[var(--color-border)] shadow-xl relative z-10"
              >
                <div className="flex items-start gap-6">
                  <span className="text-sm font-mono text-[var(--color-accent)]">{layer.num}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{layer.title}</h3>
                    <p className="text-[var(--color-muted)]">{layer.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
