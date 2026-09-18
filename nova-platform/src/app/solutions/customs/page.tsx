"use client";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";

export default function CustomsBrokers() {
  return (
    <SolutionTemplate
      title="Customs Brokers"
      heroHeadline="Zero-touch clearance at the border."
      heroSubheadline="Instantly classify goods, validate commercial invoices against packing lists, and auto-generate entry summaries with AI."
      problemStatement="Customs clearance is a high-stakes bottleneck. A single HS code misclassification or value discrepancy between documents can result in massive fines, cargo holds, and lost clients. Human review is too slow for modern supply chains."
      metrics={[
        { label: "Faster clearance", val: "10x" },
        { label: "Fewer errors", val: "80%" },
        { label: "Revenue improvement", val: "20%" },
        { label: "Audit compliance", val: "100%" }
      ]}
      capabilities={[
        { title: "HS Code Classification", desc: "Vector-database semantic search (RAG) instantly maps colloquial goods descriptions to the correct WCO tariff codes." },
        { title: "Discrepancy Triangulation", desc: "Mathematical verification between Packing Lists and Bills of Lading to automatically flag anomalies." },
        { title: "PGA Form Parsing", desc: "Extract structured data from complex Participating Government Agency (PGA) forms seamlessly." }
      ]}
      testimonial={{
        quote: "The HS classification accuracy is unparalleled. NOVA catches nuances in item descriptions that human operators frequently miss.",
        author: "Sarah Jenkins",
        role: "VP of Customs Compliance",
        company: "Meridian Supply"
      }}
      imageSrc="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
    />
  );
}
