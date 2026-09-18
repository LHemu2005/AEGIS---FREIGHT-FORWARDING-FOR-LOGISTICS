"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface SolutionProps {
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  problemStatement: string;
  metrics: { label: string; val: string }[];
  capabilities: { title: string; desc: string }[];
  testimonial: { quote: string; author: string; role: string; company: string };
  imageSrc: string;
}

export default function SolutionTemplate({
  title,
  heroHeadline,
  heroSubheadline,
  problemStatement,
  metrics,
  capabilities,
  testimonial,
  imageSrc
}: SolutionProps) {
  return (
    <div className="flex flex-col w-full bg-[var(--color-background)] pt-24 min-h-screen">
      
      {/* Hero */}
      <section className="py-24 border-b border-[var(--color-border)] px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="section-label mb-6 text-[var(--color-accent)]">{title}</p>
            <h1 className="headline-cinematic text-5xl md:text-6xl text-white mb-6">
              {heroHeadline}
            </h1>
            <p className="text-xl text-[var(--color-muted)] font-light mb-10 leading-relaxed">
              {heroSubheadline}
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Book a Demo
            </Link>
          </div>
          
          <div className="flex-1 w-full h-[500px] bg-[#131B2B] rounded-2xl overflow-hidden border border-[var(--color-border)] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] to-transparent z-10" />
            <img src={imageSrc} alt={title} className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
          </div>
        </div>
      </section>

      {/* Problem & Metrics */}
      <section className="py-32 bg-[#0B0F17] border-b border-[var(--color-border)] px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl text-white font-light mb-6">The Challenge</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">{problemStatement}</p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="p-6 bg-[#131B2B] rounded-xl border border-[var(--color-border)]">
                <p className="text-4xl text-[var(--color-accent)] font-light mb-2">{m.val}</p>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 bg-[var(--color-background)] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-cinematic text-4xl text-white mb-16 text-center">AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="p-8 bg-[#131B2B] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors">
                <CheckCircle2 className="text-[var(--color-accent)] mb-6" size={32} />
                <h3 className="text-xl font-semibold text-white mb-4">{cap.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-[#131B2B] border-t border-[var(--color-border)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">"{testimonial.quote}"</p>
          <div>
            <p className="font-semibold text-white">{testimonial.author}</p>
            <p className="text-sm text-[var(--color-muted)]">{testimonial.role}, <span className="text-[var(--color-accent)]">{testimonial.company}</span></p>
          </div>
        </div>
      </section>

    </div>
  );
}
