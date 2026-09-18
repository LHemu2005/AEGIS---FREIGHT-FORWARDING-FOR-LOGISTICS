"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsIndex() {
  const solutions = [
    {
      title: "Freight Forwarders",
      desc: "Scale your capacity without scaling headcount. Automate bookings, tracking, and exceptions.",
      href: "/solutions/freight",
      img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Customs Brokers",
      desc: "Zero-touch clearance at the border. Auto-classify goods and validate commercial documents.",
      href: "/solutions/customs",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Trade Finance",
      desc: "De-risk global transactions. Automatically cross-check Letters of Credit against shipping data.",
      href: "/solutions/trade-finance",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-background)] pt-32 min-h-screen px-6">
      <div className="max-w-7xl mx-auto w-full mb-16 text-center">
        <p className="section-label mb-4 text-[var(--color-accent)]">Solutions</p>
        <h1 className="headline-cinematic text-5xl md:text-7xl text-white mb-6">
          Intelligence for every node.
        </h1>
        <p className="text-xl text-[var(--color-muted)] font-light max-w-2xl mx-auto">
          NOVA provides specialized AI workflows tailored to the unique regulatory and operational demands of your specific logistics sector.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
        {solutions.map((sol, idx) => (
          <Link href={sol.href} key={idx} className="group block h-[500px] relative rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/80 to-transparent z-10" />
              <img src={sol.img} alt={sol.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end">
              <h2 className="text-3xl text-white font-light mb-4 flex items-center justify-between">
                {sol.title}
                <ArrowRight className="text-[var(--color-accent)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h2>
              <p className="text-[var(--color-muted)]">{sol.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
