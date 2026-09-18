"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 w-full min-h-[90vh] flex flex-col justify-end px-6 md:px-12">
      {/* Background Elegant Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8E6E3] via-[var(--color-background)] to-[var(--color-background)] h-full" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="headline-cinematic text-[#111111] mb-12">
            The AI Workforce <br/>
            <span className="text-[#8C7A6B]">for Supply Chains</span>
          </h1>
          
          <div className="max-w-md">
            <p className="text-lg md:text-xl text-[#111111] font-medium mb-8 leading-snug">
              The agentic platform that empowers your teams to ship more, solve more, and scale with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group flex items-center justify-between gap-4 bg-[#5F5955] text-white px-6 py-4 rounded-full font-medium hover:bg-[#4a4542] transition-colors"
              >
                Book a Demo 
                <span className="bg-white text-black rounded-full p-1"><ChevronRight size={16} /></span>
              </Link>
              <Link
                href="/platform"
                className="group flex items-center justify-between gap-4 bg-white/50 backdrop-blur-md text-[#111111] px-6 py-4 rounded-full font-medium hover:bg-white transition-colors border border-black/5"
              >
                Explore the platform 
                <span className="text-black"><ChevronRight size={16} /></span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
