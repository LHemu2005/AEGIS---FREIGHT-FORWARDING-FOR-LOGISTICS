"use client";

import { motion } from "framer-motion";

export default function ProductDashboard() {
  return (
    <section className="py-24 bg-[var(--color-background)] relative overflow-hidden flex flex-col items-center">
      <div className="text-center mb-16 px-6">
        <p className="text-sm font-semibold tracking-wider text-[#666666] uppercase mb-4">See it in action</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#111111] font-normal tracking-tight">
          What does a 10x team look like?
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[1000px] mx-auto px-6 relative"
      >
        {/* MacOS Window Mockup */}
        <div className="w-full rounded-2xl bg-[#E8E8E8]/60 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-white/40 overflow-hidden flex flex-col h-[600px]">
          
          {/* Mac Header */}
          <div className="h-12 bg-white/40 border-b border-black/5 flex items-center px-4 shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>
            <div className="flex-1 text-center font-medium text-xs text-gray-500">Review declaration</div>
          </div>

          {/* App Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-white/60 border-r border-black/5 p-4 flex flex-col gap-6 shrink-0">
              <div>
                <p className="text-xs font-bold text-gray-800 mb-2">Customs agent</p>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-black/5 text-sm">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-4 h-4 mt-0.5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                       <span className="text-blue-600 text-[10px]">✓</span>
                    </div>
                    <p className="text-gray-700">Tell us what you want to do with this declaration.</p>
                  </div>
                  <div className="pl-6 flex flex-col gap-1 text-gray-500">
                    <label className="flex items-center gap-2"><input type="radio" /> Generate draft declaration</label>
                    <label className="flex items-center gap-2"><input type="radio" defaultChecked /> Review draft declaration</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-2xl font-semibold text-gray-800">Review declaration</h3>
                 <button className="bg-[#111111] text-white px-4 py-1.5 rounded-md text-sm font-medium">Post</button>
              </div>

              {/* Form Grid Mock */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="w-24 h-3 bg-gray-100 rounded" />
                    <div className="w-full h-8 bg-gray-50 rounded border border-gray-100" />
                  </div>
                ))}
              </div>

              {/* Table Mock */}
              <div className="w-full rounded-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 h-10 w-full border-b border-gray-100 flex items-center px-4">
                  <div className="w-16 h-3 bg-gray-200 rounded" />
                </div>
                {[1,2,3].map(i => (
                  <div key={i} className="h-12 w-full border-b border-gray-50 flex items-center px-4 gap-4">
                    <div className="w-8 h-3 bg-gray-100 rounded" />
                    <div className="w-32 h-3 bg-gray-100 rounded" />
                    <div className="w-16 h-4 bg-purple-100 text-purple-600 text-[10px] flex items-center justify-center rounded">Missing</div>
                    <div className="w-24 h-3 bg-gray-100 rounded ml-auto" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Pane */}
            <div className="w-72 bg-gray-50/50 border-l border-black/5 p-4 shrink-0 flex flex-col gap-4">
               <div className="w-full h-48 bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col gap-4">
                 <div className="w-full h-24 bg-gray-100 rounded" />
                 <div className="w-2/3 h-3 bg-gray-200 rounded" />
                 <div className="w-full h-3 bg-gray-100 rounded" />
               </div>
               <div className="w-full h-48 bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col gap-4">
                 <div className="w-full h-24 bg-gray-100 rounded" />
                 <div className="w-2/3 h-3 bg-gray-200 rounded" />
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
