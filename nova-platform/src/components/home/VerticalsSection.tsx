"use client";

export default function VerticalsSection() {
  return (
    <section className="py-24 bg-[var(--color-background)] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        
        {/* Left Side Labels */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <p className="text-[11px] font-bold tracking-widest text-[#111111] uppercase">Verticals We Serve</p>
          
          <div className="flex flex-col gap-4 text-3xl md:text-4xl">
             <h3 className="font-medium text-[#111111] flex items-center justify-between cursor-pointer">
               Freight Forwarders
               <span className="text-sm font-normal text-[#666666]">More ↗</span>
             </h3>
             <h3 className="font-light text-[#A3A3A3] cursor-pointer hover:text-[#666666] transition-colors">Customs Brokers</h3>
             <h3 className="font-light text-[#A3A3A3] cursor-pointer hover:text-[#666666] transition-colors">Trade Finance</h3>
          </div>

          <p className="text-sm text-[#111111] max-w-sm mt-auto pt-24 leading-relaxed font-medium">
            Automate the work behind every shipment. Customs preparation, AP matching, ETA tracking, and more. So your team can move more freight with fewer bottlenecks.
          </p>
        </div>

        {/* Right Side Massive Card */}
        <div className="w-full md:w-2/3">
          <div className="w-full h-[600px] rounded-2xl overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/containers/800/600" 
              alt="Cargo Containers" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay Metrics */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent flex flex-wrap gap-12">
               <div>
                 <p className="text-6xl text-white font-light mb-2">5<span className="text-4xl text-white/50">X</span></p>
                 <p className="text-[10px] uppercase text-white/70 tracking-wider">Faster shipment execution</p>
               </div>
               <div>
                 <p className="text-6xl text-white font-light mb-2">93<span className="text-4xl text-white/50">%</span></p>
                 <p className="text-[10px] uppercase text-white/70 tracking-wider">Document automation</p>
               </div>
               <div>
                 <p className="text-6xl text-white font-light mb-2">4<span className="text-4xl text-white/50">X</span></p>
                 <p className="text-[10px] uppercase text-white/70 tracking-wider">Operational capacity</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
