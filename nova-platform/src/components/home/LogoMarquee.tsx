"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "DB Schenker", src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/DB_Schenker_Logo.svg" },
  { name: "HSBC", src: "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg" },
  { name: "DSV", src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/DSV_logo.svg" },
  { name: "Expeditors", src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Expeditors_logo.svg" },
  { name: "Crane Worldwide", src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Crane_Worldwide_Logistics_Logo.svg" },
];

export default function LogoMarquee() {
  return (
    <section className="py-12 bg-[var(--color-background)] overflow-hidden flex flex-col items-center border-b border-black/5">
      <p className="text-sm font-medium text-[#666666] mb-10">
        Trusted by industry leaders that move the world
      </p>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[var(--color-background)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[var(--color-background)] to-transparent pointer-events-none" />
        
        {/* Marquee Track */}
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          className="flex items-center gap-24 whitespace-nowrap px-12"
        >
          {/* Duplicate list to create seamless infinite loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <img 
              key={idx} 
              src={logo.src} 
              alt={logo.name} 
              className="h-6 md:h-8 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
