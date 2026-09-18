"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to submit request.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[var(--color-background)] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side Info */}
        <div>
          <p className="section-label mb-6 text-[var(--color-accent)]">Book a Demo</p>
          <h1 className="headline-cinematic text-5xl text-white mb-6">See NOVA in action.</h1>
          <p className="text-xl text-[var(--color-muted)] font-light mb-12">
            Schedule a personalized walkthrough of the platform and see how our AI agents can automate your specific logistics workflows.
          </p>

          <div className="flex flex-col gap-6">
             {[
               "Discuss your specific operational bottlenecks.",
               "See live triangulation of Bills of Lading and Invoices.",
               "Understand our deterministic security and compliance.",
               "Get a custom ROI and capacity impact analysis."
             ].map((point, idx) => (
               <div key={idx} className="flex items-start gap-3">
                 <CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-1" size={20} />
                 <span className="text-[var(--color-muted)]">{point}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-[#131B2B] p-8 rounded-2xl border border-[var(--color-border)] shadow-xl relative overflow-hidden">
          
          {status === "success" ? (
            <div className="absolute inset-0 bg-[#131B2B] flex flex-col items-center justify-center p-8 text-center z-10">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="text-[var(--color-accent)]" size={32} />
              </div>
              <h2 className="text-2xl text-white font-medium mb-4">Request Received</h2>
              <p className="text-[var(--color-muted)]">
                Thank you for your interest in NOVA. A member of our enterprise team will be in touch within 24 hours to schedule your demo.
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--color-muted)]">First Name</label>
                <input required name="firstName" type="text" className="bg-[#0B0F17] border border-[var(--color-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--color-muted)]">Last Name</label>
                <input required name="lastName" type="text" className="bg-[#0B0F17] border border-[var(--color-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--color-muted)]">Work Email</label>
              <input required name="email" type="email" className="bg-[#0B0F17] border border-[var(--color-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--color-muted)]">Company</label>
                <input required name="company" type="text" className="bg-[#0B0F17] border border-[var(--color-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--color-muted)]">Role</label>
                <input required name="role" type="text" className="bg-[#0B0F17] border border-[var(--color-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--color-muted)]">Company Size</label>
              <select required name="companySize" className="bg-[#0B0F17] border border-[var(--color-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none">
                <option value="">Select size...</option>
                <option value="1-50">1-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--color-muted)]">Message (Optional)</label>
              <textarea name="message" rows={4} className="bg-[#0B0F17] border border-[var(--color-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none" />
            </div>

            {status === "error" && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 text-sm mt-2">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === "loading"}
              className="mt-4 w-full bg-white text-black font-semibold p-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50"
            >
              {status === "loading" ? <Loader2 className="animate-spin" size={20} /> : "Request Demo"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
