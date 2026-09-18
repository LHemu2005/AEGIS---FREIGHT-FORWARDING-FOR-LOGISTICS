"use client";

import { motion } from "framer-motion";
import { 
  Inbox, FileCode2, Map, CheckSquare, 
  Users, Layers, ShieldCheck, PieChart 
} from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    { num: "01", title: "Intelligent Inbox", icon: Inbox, desc: "Auto-classify and route incoming emails and attachments instantly." },
    { num: "02", title: "Extraction Studio", icon: FileCode2, desc: "Turn unstructured PDFs into structured, validated JSON data." },
    { num: "03", title: "Shipment Navigator", icon: Map, desc: "PPO-driven multimodal routing optimizing for cost, time, and CO2." },
    { num: "04", title: "Workitems", icon: CheckSquare, desc: "Human-in-the-loop exception handling and task assignment." },
    { num: "05", title: "Collaboration", icon: Users, desc: "Contextual chat natively linked to shipment records." },
    { num: "06", title: "Integrations", icon: Layers, desc: "Bi-directional sync with CargoWise, SAP, and legacy TMS." },
    { num: "07", title: "Governance", icon: ShieldCheck, desc: "Complete audit trails of every AI decision and human override." },
    { num: "08", title: "Analytics", icon: PieChart, desc: "Real-time visibility into operator efficiency and AI accuracy." }
  ];

  return (
    <section className="py-32 bg-[var(--color-card)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="headline-cinematic text-4xl text-white mb-4">Platform Capabilities</h2>
          <p className="text-xl text-[var(--color-muted)] max-w-2xl">
            Everything you need to automate logistics workflows from quote to cash.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-[#0B0F17] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-8">
                <cap.icon className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" size={28} />
                <span className="text-xs font-mono text-[var(--color-border)]">{cap.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
