"use client";

export default function MetricsSection() {
  const metrics = [
    { label: "Tasks completed by AI agents", val: "20M+" },
    { label: "Shipments processed per year", val: "5M+" },
    { label: "Faster task turnaround", val: "90%" },
    { label: "Savings delivered", val: "$150M+" },
  ];

  const testimonials = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/DSV_logo.svg",
      quote: "Raft matched our global vision with their leader-in-class automation platform. Their AI leadership, product breadth, and deep TMS integrations provide a clear path to automate our entire shipment lifecycle.",
      author: "Carsten Trolle",
      title: "President, Air & Sea"
    },
    {
      company: "Navia",
      quote: "A core takeaway of last year is that you do not delay, and the automation required us to optimize our processes, revealing areas for improvement. This has not only streamlined our operations but has also allowed us to provide better service to our customers.",
      author: "Bob Brikul",
      title: "COO"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl text-center font-normal text-[#111111] mb-12">
          Teams running on NOVA are already there
        </h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm border border-black/5 h-48">
              <p className="text-4xl lg:text-5xl text-[#111111] font-light tracking-tight mb-4">{m.val}</p>
              <p className="text-xs text-[#666666] uppercase tracking-wider font-semibold">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-10 shadow-sm border border-black/5 flex flex-col justify-between min-h-[300px]">
              <div>
                {t.logo ? (
                  <img src={t.logo} alt="Logo" className="h-6 mb-8 object-contain" />
                ) : (
                  <h3 className="text-2xl font-bold mb-8 text-[#111111]">{t.company}</h3>
                )}
                <p className="text-lg text-[#111111] leading-relaxed mb-8">"{t.quote}"</p>
              </div>
              <div>
                <p className="font-semibold text-[#111111] text-sm">{t.author}</p>
                <p className="text-[#666666] text-sm">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
