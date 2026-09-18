import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOVA | AI Workforce for Modern Supply Chains",
  description: "AI agents that understand your operational data, follow your business rules, and execute repetitive logistics workflows alongside your team.",
  openGraph: {
    title: "NOVA | AI Workforce for Modern Supply Chains",
    description: "AI agents that understand your operational data, follow your business rules, and execute repetitive logistics workflows alongside your team.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)] selection:bg-[var(--color-accent)] selection:text-white`}
      >
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
