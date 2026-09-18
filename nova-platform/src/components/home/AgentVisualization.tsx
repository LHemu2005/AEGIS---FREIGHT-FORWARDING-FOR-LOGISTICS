"use client";

import { motion } from "framer-motion";
import { BrainCircuit, FileSearch, CheckSquare, MessageSquare, ShieldCheck } from "lucide-react";

export default function AgentVisualization() {
  const agents = [
    { name: "Document Agent", icon: FileSearch, desc: "Extracts unstructured data", x: -200, y: -100 },
    { name: "Invoice Agent", icon: CheckSquare, desc: "Matches POs to Invoices", x: 200, y: -100 },
    { name: "Tracking Agent", icon: BrainCircuit, desc: "Monitors global ETA", x: -250, y: 100 },
    { name: "Compliance Agent", icon: ShieldCheck, desc: "Validates Customs rules", x: 250, y: 100 },
    { name: "Communication Agent", icon: MessageSquare, desc: "Drafts client updates", x: 0, y: 200 },
  ];

  return (
    <section className="py-32 bg-[var(--color-background)] border-b border-[var(--color-border)] relative flex flex-col items-center overflow-hidden">
      <div className="text-center mb-24 z-10">
        <p className="section-label mb-4">Orchestration</p>
        <h2 className="headline-cinematic text-white text-5xl md:text-6xl max-w-4xl mx-auto">
          An AI workforce that collaborates.
        </h2>
      </div>

      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
        {/* Central Node */}
        <div className="absolute z-20 w-32 h-32 rounded-full border border-[var(--color-accent)] bg-[#0B0F17] flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
          <span className="text-sm font-bold tracking-widest text-center text-white">NOVA<br/>ORCHESTRATOR</span>
        </div>

        {/* Pulsing rings around center */}
        <motion.div 
          animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          className="absolute z-10 w-32 h-32 rounded-full border border-[var(--color-accent)] pointer-events-none"
        />

        {/* Agents */}
        {agents.map((agent, idx) => (
          <div key={idx} className="absolute z-30 group" style={{ transform: `translate(${agent.x}px, ${agent.y}px)` }}>
            {/* Animated Connection Line */}
            <svg className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" style={{ transformOrigin: 'center' }}>
              <motion.line 
                x1="250" y1="250" x2={250 - agent.x} y2={250 - agent.y}
                stroke="var(--color-border)" strokeWidth="1" strokeDasharray="5,5"
              />
              {/* Particle travelling along line */}
              <motion.circle 
                r="3" fill="var(--color-accent)"
                animate={{
                  cx: [250, 250 - agent.x],
                  cy: [250, 250 - agent.y],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
              />
            </svg>

            {/* Agent Node */}
            <div className="relative z-10 w-16 h-16 rounded-2xl border border-[var(--color-border)] bg-[#131B2B] flex items-center justify-center group-hover:border-[var(--color-accent)] transition-colors cursor-pointer shadow-lg">
              <agent.icon className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" size={24} />
            </div>

            {/* Hover Card */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 p-3 rounded-lg border border-[var(--color-border)] bg-[#0B0F17] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-50">
              <p className="text-xs font-bold text-white mb-1">{agent.name}</p>
              <p className="text-xs text-[var(--color-muted)] mb-2">{agent.desc}</p>
              <div className="flex items-center justify-between text-[10px] text-emerald-400">
                <span>Status: Active</span>
                <span>Conf: 99%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
