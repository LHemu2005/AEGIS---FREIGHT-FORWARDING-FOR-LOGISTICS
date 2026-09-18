"use client";

import { motion } from "framer-motion";
import PlatformLayers from "@/components/home/PlatformLayers";
import Capabilities from "@/components/home/Capabilities";

export default function PlatformPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-background)] pt-24">
      {/* Platform Hero */}
      <section className="py-24 border-b border-[var(--color-border)] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="section-label mb-6 text-[var(--color-accent)]">The Platform Architecture</p>
          <h1 className="headline-cinematic text-5xl md:text-7xl text-white mb-8">
            Engineered for the complexity of global trade.
          </h1>
          <p className="text-xl text-[var(--color-muted)] font-light max-w-2xl mx-auto">
            NOVA is not a wrapper around a language model. It is a deterministic orchestration engine built to parse, validate, and execute mission-critical logistics workflows with absolute precision.
          </p>
        </motion.div>
      </section>

      {/* Reusing the Platform Layers component from Homepage but as a standalone section */}
      <PlatformLayers />

      {/* Deep dive into security/infrastructure */}
      <section className="py-32 bg-[#0B0F17] border-t border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl text-white font-light mb-6">Enterprise-grade security and governance.</h2>
              <p className="text-[var(--color-muted)] text-lg mb-8 leading-relaxed">
                When you hand over execution to an AI workforce, you need verifiable trust. Every action taken by a NOVA agent is deterministically logged, instantly reversible, and compliant with ISO 27001 and SOC 2 Type II standards.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Deterministic fallback mechanisms",
                  "Human-in-the-loop override controls",
                  "Single-tenant cloud isolation",
                  "Immutable audit logging"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Security Element */}
            <div className="relative h-[400px] w-full rounded-2xl border border-[var(--color-border)] bg-[#131B2B] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-luminosity" />
              <div className="relative z-10 w-64 h-64 border border-[var(--color-accent)]/50 rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(6,182,212,0.1)]">
                <div className="w-48 h-48 border border-[var(--color-accent)]/30 rounded-full flex items-center justify-center animate-spin-slow">
                   <div className="w-32 h-32 border border-[var(--color-accent)]/80 rounded-full" />
                </div>
              </div>
              <div className="absolute z-20 text-center">
                <p className="text-[var(--color-accent)] font-mono text-sm mb-1">SYSTEM STATUS</p>
                <p className="text-white text-2xl tracking-widest">SECURE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Capabilities />
    </div>
  );
}
