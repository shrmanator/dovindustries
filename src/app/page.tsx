import { DigiDovSection } from "@/components/digidov-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SuperMintSection } from "@/components/supermint-section";
import { TransportSection } from "@/components/transport-section";
import { VRSection } from "@/components/vr-section";

export const metadata = {
  title: "Dovindustries — Technology company & R&D",
  description:
    "Dovindustries — Toronto-based technology company building DigiDov (crypto donations), VR locomotion systems, and compact electric transport. R&D and product development.",
};

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
