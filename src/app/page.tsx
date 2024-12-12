import { CTA } from "@/components/landing/cta/CTA";
import { Customers } from "@/components/landing/customers/Customers";
import Carousel from "@/components/landing/features/carousel/Carousel";
import { CodeDemo } from "@/components/landing/features/code/CodeDemo";
import { FeatureGrid } from "@/components/landing/features/grid/FeatureGrid";
import { Stats } from "@/components/landing/features/stats/Stats";
import { Footer } from "@/components/landing/footer/Footer";
import { Hero } from "@/components/landing/hero/Hero";
import { Logos } from "@/components/landing/logos/Logos";
import { Pricing } from "@/components/landing/pricing/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Logos />
      <FeatureGrid />
      <CodeDemo />
      <Carousel />
      <Customers />
      <Stats />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
