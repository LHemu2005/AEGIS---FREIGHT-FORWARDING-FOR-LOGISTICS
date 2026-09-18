"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-background)] pt-32 min-h-screen">
      
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label mb-6 text-[var(--color-accent)]">Our Mission</p>
          <h1 className="headline-cinematic text-5xl md:text-7xl text-white mb-8 max-w-5xl mx-auto">
            Logistics is the physical internet. We are building its intelligence layer.
          </h1>
        </div>
      </section>

      {/* Cinematic Image Break */}
      <section className="w-full h-[60vh] relative mb-24 border-y border-[var(--color-border)]">
         <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17] via-transparent to-[#0B0F17] z-10" />
         <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Global Supply Chain" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
      </section>

      {/* The Problem & Our Approach */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          
          <div>
            <h2 className="text-3xl text-white font-light mb-6 border-b border-[var(--color-border)] pb-4">The Problem</h2>
            <p className="text-xl text-[var(--color-muted)] leading-relaxed font-light">
              Despite trillions of dollars flowing through the global supply chain, the execution layer is shockingly manual. Highly skilled operators spend their days acting as human APIs—copying data from PDFs, cross-referencing spreadsheets, and fighting legacy interfaces. This isn't just inefficient; it fundamentally limits global trade capacity.
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-white font-light mb-6 border-b border-[var(--color-border)] pb-4">Our Approach</h2>
            <p className="text-xl text-[var(--color-muted)] leading-relaxed font-light mb-6">
              We don't believe in simple OCR or standard RPA bots that break when a vendor changes a template. We believe in <strong>Agentic Orchestration</strong>.
            </p>
            <p className="text-xl text-[var(--color-muted)] leading-relaxed font-light">
              NOVA deploys multi-agent systems powered by Vision-Language Models and Reinforcement Learning. They don't just read documents; they understand the semantic context of a shipment, mathematically validate discrepancies, and autonomously execute decisions within strict compliance guardrails.
            </p>
          </div>

        </div>
      </section>

      {/* Leadership / Team (Abstracted) */}
      <section className="py-32 bg-[#131B2B] border-t border-[var(--color-border)] px-6 text-center">
        <h2 className="headline-cinematic text-4xl text-white mb-6">Join the revolution.</h2>
        <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10 font-light">
          We are a team of AI researchers, supply chain veterans, and engineers who have moved millions of TEUs. We are hiring across engineering and go-to-market.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-full border border-[var(--color-border)] text-white font-semibold hover:bg-white hover:text-black transition-colors inline-block"
        >
          View Open Roles
        </Link>
      </section>

    </div>
  );
}
