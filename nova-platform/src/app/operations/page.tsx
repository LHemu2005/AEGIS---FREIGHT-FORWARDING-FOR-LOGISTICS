"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OperationsPage() {
  const steps = [
    { num: "01", title: "Capture", desc: "NOVA ingests unstructured documents from email inboxes, APIs, or legacy EDI systems. It instantly recognizes Bill of Ladings, Commercial Invoices, and Packing Lists without manual templates." },
    { num: "02", title: "Understand", desc: "Using advanced vision-language models, the system extracts critical data points—weights, HS codes, container numbers, and seal IDs—with 99%+ accuracy." },
    { num: "03", title: "Validate", desc: "The orchestration engine cross-references extracted data against business rules. If the packing list weight differs from the Bill of Lading by more than 2%, the system flags an exception." },
    { num: "04", title: "Execute", desc: "Validated shipments are automatically routed. NOVA drafts the customs declaration, books the optimal freight carrier, and updates the ERP without human intervention." },
    { num: "05", title: "Monitor", desc: "Live telematics tracking monitors the shipment across oceans and roads, instantly alerting your team if demurrage risks or ETA delays are detected." }
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-background)] pt-24 min-h-screen">
      
      {/* Operations Hero */}
      <section className="py-24 border-b border-[var(--color-border)] px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-6 text-[var(--color-accent)]">The Workflow</p>
          <h1 className="headline-cinematic text-5xl md:text-7xl text-white mb-6">
            From inbound request<br/>to completed shipment.
          </h1>
        </div>
      </section>

      {/* Sequential Scroll-Driven Steps */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-[50%] top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <OperationsStep key={idx} step={step} isEven={isEven} idx={idx} />
            );
          })}
        </div>
      </section>
      
    </div>
  );
}

function OperationsStep({ step, isEven, idx }: { step: any, isEven: boolean, idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className={`relative w-full flex flex-col md:flex-row items-center justify-between mb-32 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Center Node on Timeline */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0B0F17] border border-[var(--color-accent)] items-center justify-center z-10 text-[var(--color-accent)] font-mono text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        {step.num}
      </div>

      {/* Text Content */}
      <div className={`w-full md:w-[45%] mb-8 md:mb-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
        <h3 className="text-4xl text-white font-light mb-4">{step.title}</h3>
        <p className="text-[var(--color-muted)] text-lg leading-relaxed">{step.desc}</p>
      </div>

      {/* UI Visualization Panel */}
      <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
        <div className="h-64 rounded-2xl bg-[#131B2B] border border-[var(--color-border)] shadow-xl overflow-hidden relative group">
           {/* Decorative Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
           
           <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
             <div className="w-16 h-16 rounded-lg border border-[var(--color-accent)]/50 bg-[#0B0F17] flex items-center justify-center mb-4 text-[var(--color-accent)] group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                {step.num}
             </div>
             <p className="text-white font-mono text-sm border-b border-[var(--color-border)] pb-2 mb-2 w-full">SYSTEM.EXECUTE("{step.title.toUpperCase()}")</p>
             <p className="text-[var(--color-muted)] text-xs">Awaiting data stream...</p>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
