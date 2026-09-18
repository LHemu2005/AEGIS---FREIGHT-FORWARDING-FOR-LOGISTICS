import Hero from "@/components/Hero";
import LogoMarquee from "@/components/home/LogoMarquee";
import ProductDashboard from "@/components/home/ProductDashboard";
import MetricsSection from "@/components/home/MetricsSection";
import PlatformSection from "@/components/home/PlatformSection";
import VerticalsSection from "@/components/home/VerticalsSection";
import VisionSection from "@/components/home/VisionSection";
import FooterCTA from "@/components/home/FooterCTA";

export default function Home() {
  return (
    <main className="w-full bg-[var(--color-background)] min-h-screen">
      <Hero />
      <LogoMarquee />
      <ProductDashboard />
      <MetricsSection />
      <PlatformSection />
      <VerticalsSection />
      <VisionSection />
      <FooterCTA />
    </main>
  );
}
