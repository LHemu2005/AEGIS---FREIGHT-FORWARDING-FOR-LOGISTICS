"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PlatformSection() {
  const cards = [
    {
      title: "Centralize & Activate Your Data",
      desc: "NOVA continuously ingests data from a single source of truth that powers intelligent operations and provides complete visibility and transparency to your organization.",
      mockup: (
        <div className="w-full h-48 bg-gray-50/50 rounded-t-xl overflow-hidden border-b border-black/5 relative">
          <div className="absolute top-4 left-4 right-4 bg-[#1B1A1E] text-white p-3 rounded-lg shadow-xl text-sm">
             <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
               <span className="font-semibold text-[10px]">Select data point to gap analysis</span>
             </div>
             <div className="flex flex-col gap-1 text-[11px] text-gray-300">
               <div className="flex items-center gap-2 hover:bg-white/10 p-1 rounded"><span className="w-2 h-2 rounded-full bg-blue-400"/> Forwarders email</div>
               <div className="flex items-center gap-2 hover:bg-white/10 p-1 rounded"><span className="w-2 h-2 rounded-full bg-purple-400"/> Line item data</div>
               <div className="flex items-center gap-2 hover:bg-white/10 p-1 rounded bg-white/10"><span className="w-2 h-2 rounded-full bg-green-400"/> Delivery proof</div>
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Deploy Your Fleet of AI Agents",
      desc: "Launch intelligent, fully customizable AI agents that work autonomously safely with your exact specifications going beyond workflow automation to true task execution.",
      mockup: (
        <div className="w-full h-48 bg-[url('https://picsum.photos/seed/agents/800/400')] bg-cover bg-center rounded-t-xl overflow-hidden border-b border-black/5 relative flex items-center justify-center">
          <div className="w-48 bg-white p-3 rounded-lg shadow-xl text-xs text-gray-800">
             <div className="flex items-center gap-2 mb-2"><span className="w-4 h-4 bg-purple-100 text-purple-600 rounded flex items-center justify-center">✓</span> Customs agent</div>
             <p className="mb-2">We are classifying HS codes for this shipment based on invoice data.</p>
             <div className="bg-gray-50 p-2 rounded text-[10px] text-gray-500 border border-gray-100">
                Evaluating data for shoe imports...
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Every Department, Moving as One",
      desc: "Operational alignment, ensuring everyone across your enterprise works with full visibility, shared context, and coordinated workflows.",
      mockup: (
        <div className="w-full h-48 bg-[#EAE8E3] rounded-t-xl overflow-hidden border-b border-black/5 relative flex items-end justify-center p-4">
          <div className="w-full bg-white/60 backdrop-blur-md p-3 rounded-lg shadow-sm text-[10px] text-gray-800 border border-white/50">
             <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
               <span className="font-semibold text-xs">Assigned Workflow</span>
             </div>
             <div className="flex flex-col gap-1.5">
               <div className="flex justify-between"><span>PL-1</span> <span>Origin Agent</span> <span className="bg-green-100 text-green-700 px-1 rounded">Complete</span></div>
               <div className="flex justify-between"><span>CI-2</span> <span>Customs</span> <span className="bg-green-100 text-green-700 px-1 rounded">Complete</span></div>
               <div className="flex justify-between"><span>AWB</span> <span>Delivery</span> <span className="bg-blue-100 text-blue-700 px-1 rounded">In Transit</span></div>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <p className="text-[11px] font-bold tracking-widest text-[#111111] uppercase mb-4">Our Platform</p>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="headline-cinematic text-[#111111] max-w-2xl leading-tight">
            The Last AI Platform You'll Ever Need to Buy
          </h2>
          <div className="max-w-md">
            <p className="text-lg text-[#111111] mb-6">
              One platform, designed to deliver lasting AI gains into your business. 
              NOVA centralizes your data across your organization, creating a data backbone on which your teams can define clear rules, driven workflows and deploy agents to help accomplish them.
            </p>
            <Link href="/platform" className="inline-flex items-center gap-2 bg-[#E6E5E2] text-[#111111] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d9d8d5] transition-colors">
              Explore our platform <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col">
              {card.mockup}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#111111] mb-3">{card.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
