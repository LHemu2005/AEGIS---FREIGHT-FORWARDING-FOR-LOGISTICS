"use client";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";

export default function FreightForwarders() {
  return (
    <SolutionTemplate
      title="Freight Forwarders"
      heroHeadline="Scale capacity, not headcount."
      heroSubheadline="Automate booking confirmations, pre-alerts, tracking updates, and document processing so your operators can focus on client relationships."
      problemStatement="Freight forwarding is plagued by endless email chains, disjointed legacy TMS platforms, and manual data entry across disparate documents. Operators spend 80% of their time transcribing data rather than managing exceptions or negotiating rates."
      metrics={[
        { label: "Faster shipment execution", val: "5x" },
        { label: "Document automation", val: "93%" },
        { label: "Operational capacity", val: "4x" },
        { label: "Data entry reduction", val: "85%" }
      ]}
      capabilities={[
        { title: "Booking Extraction", desc: "Instantly convert unstructured email bookings into structured records directly in your TMS." },
        { title: "Automated Tracking", desc: "Live multimodal tracking APIs combined with AI to predict delays and proactively notify clients." },
        { title: "Exception Handling", desc: "Smart human-in-the-loop workflows that only pause execution when anomalies are detected." }
      ]}
      testimonial={{
        quote: "We scaled our container volume by 4x without adding a single headcount to the documentation team.",
        author: "David Chen",
        role: "Director of Operations",
        company: "OceanBridge"
      }}
      imageSrc="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop"
    />
  );
}
