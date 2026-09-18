"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        
        {/* Left Dark Pill */}
        <div className="flex items-center gap-6 bg-[#3B383E] text-[#E8E6E3] px-6 py-3 rounded-full shadow-lg border border-white/10 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-black rounded-sm" />
            </div>
            NOVA
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium">
            <Link href="/platform" className="hover:text-white transition-colors flex items-center gap-1">Platform <ChevronDown size={14} className="opacity-50" /></Link>
            <Link href="/solutions" className="hover:text-white transition-colors flex items-center gap-1">Solutions <ChevronDown size={14} className="opacity-50" /></Link>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1">About <ChevronDown size={14} className="opacity-50" /></Link>
          </nav>
        </div>

        {/* Right Light Pill */}
        <div className="hidden md:flex items-center gap-4 bg-white/90 backdrop-blur-md text-[#111111] px-2 py-2 rounded-full shadow-lg border border-black/5">
          <Link href="#" className="flex items-center gap-2 text-[13px] font-medium hover:bg-black/5 px-4 py-1.5 rounded-full transition-colors">
            <MessageSquare size={14} /> Ask
          </Link>
          <Link href="/signin" className="text-[13px] font-medium hover:bg-black/5 px-4 py-1.5 rounded-full transition-colors">
            Sign in
          </Link>
          <Link href="/contact" className="bg-white text-black font-medium text-[13px] px-5 py-2 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center gap-2 hover:bg-gray-50 transition-colors">
            Book a demo <span className="text-gray-400">→</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
