"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      title: "Freight Forwarders",
      heading: "Scale your operations without scaling headcount.",
      desc: "Automate booking confirmations, pre-alerts, and tracking updates. Let operators handle relationships, not data entry.",
      metrics: [
        { label: "Faster execution", val: "5x" },
        { label: "Document automation", val: "93%" },
        { label: "Operational capacity", val: "4x" }
      ],
      features: ["Booking extraction", "Carrier tracking", "Exception alerts"],
      img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Customs Brokers",
      heading: "Zero-touch clearance at the border.",
      desc: "Instantly classify goods, validate commercial invoices against packing lists, and auto-generate entry summaries.",
      metrics: [
        { label: "Faster clearance", val: "10x" },
        { label: "Fewer errors", val: "80%" },
        { label: "Revenue improvement", val: "20%" }
      ],
      features: ["HS Code RAG Classification", "Discrepancy Triangulation", "PGA form parsing"],
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Trade Finance",
      heading: "De-risk global transactions.",
      desc: "Automatically cross-check Letters of Credit against shipping documents to detect fraud and compliance risks in milliseconds.",
      metrics: [
        { label: "Document automation", val: "90%" },
        { label: "Processing capacity", val: "4x" },
        { label: "Manual errors", val: "80%↓" }
      ],
      features: ["LC Analysis", "Risk Detection", "Settlement Workflows"],
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-[var(--color-background)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Controls */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <p className="section-label mb-4 text-[var(--color-accent)]">Built For</p>
            {industries.map((ind, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === idx 
                    ? "bg-[#131B2B] border border-[var(--color-border)] text-white shadow-lg" 
                    : "text-[var(--color-muted)] hover:text-white"
                }`}
              >
                <h3 className="text-xl font-semibold">{ind.title}</h3>
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#131B2B] rounded-2xl overflow-hidden border border-[var(--color-border)] flex flex-col h-full"
              >
                <div className="h-64 w-full bg-[#0B0F17] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131B2B] to-transparent z-10" />
                  <img src={industries[activeTab].img} alt={industries[activeTab].title} className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                </div>
                
                <div className="p-8 md:p-12 -mt-16 relative z-20">
                  <h3 className="text-3xl md:text-4xl text-white font-light mb-4">{industries[activeTab].heading}</h3>
                  <p className="text-[var(--color-muted)] text-lg mb-8">{industries[activeTab].desc}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-[#0B0F17] rounded-xl border border-[var(--color-border)]">
                    {industries[activeTab].metrics.map((m, i) => (
                      <div key={i}>
                        <p className="text-3xl text-[var(--color-accent)] font-light">{m.val}</p>
                        <p className="text-xs text-[var(--color-muted)] uppercase">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-[var(--color-muted)] mb-4">Key Workflows</p>
                    <ul className="flex flex-wrap gap-2">
                      {industries[activeTab].features.map((f, i) => (
                        <li key={i} className="px-3 py-1 bg-[var(--color-background)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-foreground)]">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-8 text-xs text-[var(--color-muted)]/50 italic">*Demonstration metrics</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
