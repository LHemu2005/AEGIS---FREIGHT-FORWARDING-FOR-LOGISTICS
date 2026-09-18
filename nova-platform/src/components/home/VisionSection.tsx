"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

export default function VisionSection() {
  const stories = [
    {
      img: "https://picsum.photos/seed/vision1/800/600",
      title: "AI, Freight and the Art of Not Breaking Things",
      desc: "Discover why AI models aren't enough for supply chain tech. Learn how custom pipelines, strict guardrails, and domain-driven testing shape the future of freight."
    },
    {
      img: "https://picsum.photos/seed/vision2/800/600",
      title: "The State of AI in Supply Chain: Why Adoption Hinges on Organizational Change",
      desc: "An original research report produced in partnership with The Loadstar, based on an independent survey of 200+ supply chain leaders worldwide."
    },
    {
      img: "https://picsum.photos/seed/vision3/800/600",
      title: "When Your Experts Leave, How Can You Keep Their Expertise?",
      desc: "Decision trace is how agentic platforms stop losing institutional knowledge. Your operators' reasoning is no longer trapped in their heads—it's applied across your organization."
    }
  ];

  return (
    <section className="py-32 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Our Vision */}
        <div className="flex flex-col md:flex-row gap-16 mb-40">
          <div className="w-full md:w-1/3">
             <p className="text-[11px] font-bold tracking-widest text-[#111111] uppercase mb-4">Our Vision</p>
             <h2 className="text-4xl text-[#111111] font-normal leading-tight">
               The limitless supply chain era starts here
             </h2>
          </div>
          <div className="w-full md:w-2/3 max-w-2xl">
             <p className="text-lg text-[#111111] font-medium leading-relaxed mb-6">
               We believe that service industries built on the supply chain, freight forwarders, customs brokers and others, should be technology-first. Until now, that wasn't possible. Only human judgment could navigate the complexity: a customer's SOP, the right rate, a missing ETA. AI changes that.
             </p>
             <p className="text-lg text-[#111111] font-medium leading-relaxed mb-10">
               It's now the fabric that runs beneath every operation, every decision, every shipment. We're building a platform where teams deploy secure, auditable AI agents deep within their operations, and reach a scale that was never possible before.
             </p>
             <button className="flex items-center gap-4 bg-[#EAE8E3] text-[#111111] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d9d8d5] transition-colors">
               Our Vision <ArrowRight size={16} />
             </button>
             
             {/* Abstract Sketch Graphic */}
             <div className="mt-8 opacity-40">
               <svg viewBox="0 0 400 100" className="w-full h-auto">
                 <path d="M0,80 L100,80 L100,20 L300,20 L300,60 L400,60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                 <circle cx="100" cy="80" r="4" fill="currentColor" />
                 <circle cx="300" cy="20" r="4" fill="currentColor" />
                 <rect x="150" y="40" width="100" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
               </svg>
             </div>
          </div>
        </div>

        {/* Customer Stories */}
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-4xl text-[#111111] font-normal">Customer Stories</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
               <ArrowLeft size={16} />
            </button>
            <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
               <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 flex flex-col group cursor-pointer">
              <div className="h-48 overflow-hidden">
                 <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                 <h3 className="text-lg font-bold text-[#111111] mb-4 group-hover:text-[#666666] transition-colors">{story.title}</h3>
                 <p className="text-sm text-[#666666] leading-relaxed">{story.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
