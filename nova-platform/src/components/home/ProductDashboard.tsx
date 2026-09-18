"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductDashboard() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    shipment_id?: string;
    state?: string;
    variance?: string;
    assigned_hs_code?: string;
    optimal_route?: string;
  } | null>(null);

  const handleTestAPI = async () => {
    setLoading(true);
    try {
      // Step 1: Simulate the POST request
      const initRes = await fetch("http://localhost:8000/api/v1/shipments/extract", {
        method: "POST",
        // In a real app we'd pass a FormData object with the file here
        body: new Blob(["mock pdf content"], { type: "application/pdf" })
      });
      const initData = await initRes.json();
      
      // Step 2: Poll the status endpoint using the shipment_id
      const statusRes = await fetch(`http://localhost:8000/api/v1/shipments/${initData.shipment_id}/status`);
      const statusData = await statusRes.json();
      
      setData(statusData);
    } catch (error) {
      console.error("API Error:", error);
    }
    setLoading(false);
  };

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
            <div className="flex-1 text-center font-medium text-xs text-gray-500">Live AI Extract & Route API</div>
          </div>

          {/* App Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-white/60 border-r border-black/5 p-4 flex flex-col gap-6 shrink-0">
              <div>
                <p className="text-xs font-bold text-gray-800 mb-2">Aegis-Forward Agent</p>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-black/5 text-sm">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-4 h-4 mt-0.5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                       <span className="text-blue-600 text-[10px]">✓</span>
                    </div>
                    <p className="text-gray-700">Ready to ingest trade documents.</p>
                  </div>
                  <div className="pl-6 flex flex-col gap-2 mt-4">
                    <button 
                      onClick={handleTestAPI}
                      disabled={loading}
                      className="bg-[#111111] text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                    >
                      {loading ? "Processing..." : "Run Extraction API"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-2xl font-semibold text-gray-800">Shipment Analysis</h3>
                 {data && <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Triangulation Complete</span>}
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Shipment ID</div>
                  <div className="w-full p-3 bg-gray-50 rounded border border-gray-100 font-mono text-sm text-gray-700 truncate">
                    {data ? data.shipment_id : "Waiting for upload..."}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Triangulation Variance</div>
                  <div className="w-full p-3 bg-gray-50 rounded border border-gray-100 font-mono text-sm text-gray-700">
                    {data ? data.variance : "--"}
                  </div>
                </div>
              </div>

              {/* Key AI Determinations */}
              <div className="w-full rounded-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 h-10 w-full border-b border-gray-100 flex items-center px-4 font-semibold text-sm text-gray-700">
                  AI Decisions (ChromaDB & PPO)
                </div>
                
                <div className="h-16 w-full border-b border-gray-50 flex items-center px-4 gap-4">
                  <div className="font-medium text-gray-700 w-1/3">Assigned HS Code</div>
                  <div className="flex-1">
                    {data ? (
                      <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100">{data.assigned_hs_code}</span>
                    ) : (
                      <div className="w-24 h-4 bg-gray-100 rounded" />
                    )}
                  </div>
                  <div className="text-xs text-gray-400">Via ChromaDB</div>
                </div>
                
                <div className="h-16 w-full border-b border-gray-50 flex items-center px-4 gap-4">
                  <div className="font-medium text-gray-700 w-1/3">Optimal Route</div>
                  <div className="flex-1">
                    {data ? (
                      <span className="font-mono text-purple-600 bg-purple-50 px-2 py-1 rounded border border-purple-100">{data.optimal_route}</span>
                    ) : (
                      <div className="w-24 h-4 bg-gray-100 rounded" />
                    )}
                  </div>
                  <div className="text-xs text-gray-400">Via Gymnasium PPO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
