import { DigiDovSection } from "@/components/digidov-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SuperMintSection } from "@/components/supermint-section";
import { TransportSection } from "@/components/transport-section";
import { VRSection } from "@/components/vr-section";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="flex flex-col">
        <HeroSection />
        <DigiDovSection />
        <VRSection />
        <TransportSection />
        <SuperMintSection />
      </main>
      <SiteFooter />
    </div>
  );
}
