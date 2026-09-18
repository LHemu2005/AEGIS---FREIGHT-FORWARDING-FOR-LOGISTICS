"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  const featuredArticle = {
    title: "How Large Language Models are Rewiring Global Trade",
    category: "Insights",
    date: "Aug 12, 2026",
    readTime: "8 min read",
    desc: "A deep dive into why deterministic AI orchestration is replacing RPA in modern freight forwarding and customs clearance.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  };

  const articles = [
    {
      title: "Meridian Supply reduces exception handling time by 80%",
      category: "Case Study",
      date: "Jul 28, 2026",
      readTime: "5 min read",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "The Ultimate Guide to Automating Customs Declarations",
      category: "Playbook",
      date: "Jul 15, 2026",
      readTime: "12 min read",
      img: "https://images.unsplash.com/photo-1541889028647-15d0e0092d40?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Why OCR is Dead: The Rise of Vision-Language Models",
      category: "AI Technology",
      date: "Jun 30, 2026",
      readTime: "6 min read",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Detecting Fraud in Letters of Credit with Multi-Agent Systems",
      category: "Trade Finance",
      date: "Jun 18, 2026",
      readTime: "9 min read",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "OceanBridge scales volume 4x without adding headcount",
      category: "Case Study",
      date: "Jun 02, 2026",
      readTime: "4 min read",
      img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "State of Logistics AI Report: 2026 Edition",
      category: "Report",
      date: "May 25, 2026",
      readTime: "25 min read",
      img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-background)] pt-32 min-h-screen px-6">
      <div className="max-w-7xl mx-auto w-full mb-16 text-center">
        <p className="section-label mb-4 text-[var(--color-accent)]">Resources</p>
        <h1 className="headline-cinematic text-5xl md:text-7xl text-white mb-6">
          Insights for the intelligent supply chain.
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full mb-16">
        {/* Featured Article */}
        <Link href="/resources/featured" className="group block w-full rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors bg-[#131B2B]">
          <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
              <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-4">{featuredArticle.category}</p>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6 leading-tight group-hover:text-[var(--color-accent)] transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-[var(--color-muted)] text-lg mb-8 leading-relaxed">
                {featuredArticle.desc}
              </p>
              <div className="flex items-center gap-4 text-sm text-[var(--color-muted)] mt-auto">
                <span>{featuredArticle.date}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#131B2B] to-transparent z-10 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131B2B] to-transparent z-10 block md:hidden" />
              <img src={featuredArticle.img} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity" />
            </div>
          </div>
        </Link>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
        {articles.map((article, idx) => (
          <Link href={`/resources/article-${idx}`} key={idx} className="group flex flex-col bg-[#0B0F17] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors overflow-hidden">
            <div className="h-48 overflow-hidden relative">
               <div className="absolute inset-0 bg-[var(--color-accent)]/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
               <img src={article.img} alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[var(--color-accent)] text-xs font-semibold tracking-wider uppercase mb-3">{article.category}</p>
              <h3 className="text-xl text-white font-medium mb-4 group-hover:text-[var(--color-accent)] transition-colors">{article.title}</h3>
              <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mt-auto pt-4 border-t border-[var(--color-border)]">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
