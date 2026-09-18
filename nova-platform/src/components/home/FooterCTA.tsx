"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="bg-[#111111] pt-32 pb-12 w-full text-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-32">
        <h2 className="headline-cinematic text-4xl md:text-5xl text-white mb-6">
          Your team was hired to move freight, not data
        </h2>
        <p className="text-lg text-white/70 mb-10">
          See how NOVA can eliminate the manual work holding your business back.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Book a demo <ArrowRight size={16} />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between text-sm text-white/50">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-4 text-white">
            <div className="w-4 h-4 bg-white rounded-sm" />
            <span className="font-bold">The AI Workforce For Supply Chain</span>
          </div>
          <Link href="#" className="hover:text-white underline decoration-white/30">LinkedIn</Link>
        </div>

        <div className="grid grid-cols-3 gap-16">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2">Product</h4>
            <Link href="/platform" className="hover:text-white">Platform Overview</Link>
            <Link href="#" className="hover:text-white">Our Capabilities</Link>
            <Link href="#" className="hover:text-white">Integrations</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2">Solutions</h4>
            <Link href="/solutions/freight" className="hover:text-white">Freight Forwarders</Link>
            <Link href="/solutions/customs" className="hover:text-white">Customs Brokers</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="#" className="hover:text-white">Careers</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/resources" className="hover:text-white">Resources</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>© 2026 NOVA. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
          <Link href="#" className="hover:text-white">Cookie Notice</Link>
        </div>
      </div>
    </footer>
  );
}
