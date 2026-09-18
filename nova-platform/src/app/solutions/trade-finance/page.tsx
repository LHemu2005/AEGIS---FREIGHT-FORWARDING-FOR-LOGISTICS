"use client";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";

export default function TradeFinance() {
  return (
    <SolutionTemplate
      title="Trade Finance"
      heroHeadline="De-risk global transactions."
      heroSubheadline="Automatically cross-check Letters of Credit against shipping documents to detect fraud and compliance risks in milliseconds."
      problemStatement="Trade finance relies heavily on manual document verification. Checking a Letter of Credit against a 50-page trade bundle takes hours and is highly prone to human error, exposing banks to massive compliance and financial risks."
      metrics={[
        { label: "Document automation", val: "90%" },
        { label: "Processing capacity", val: "4x" },
        { label: "Manual errors", val: "80%↓" },
        { label: "SLA improvement", val: "3x" }
      ]}
      capabilities={[
        { title: "Letter of Credit Analysis", desc: "Extract complex conditions from MT700 SWIFT messages and convert them into verifiable rules." },
        { title: "Document Matching", desc: "Auto-compare Bills of Lading, Certificates of Origin, and Invoices against LC terms pixel-by-pixel." },
        { title: "Risk Detection", desc: "Real-time sanction screening and anomaly detection across all unstructured trade data." }
      ]}
      testimonial={{
        quote: "Settlement times dropped from 3 days to under 4 hours. The risk detection catches discrepancies our analysts used to spend hours searching for.",
        author: "Marcus Vance",
        role: "Head of Trade Finance",
        company: "Global Capital Bank"
      }}
      imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    />
  );
}
