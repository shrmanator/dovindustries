import { DigiDovSection } from "@/components/digidov-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SuperMintSection } from "@/components/supermint-section";
import { TransportSection } from "@/components/transport-section";
import { VRSection } from "@/components/vr-section";

export const metadata = {
  title: "Dovindustries | Crypto Donations, VR Locomotion & Electric Transport | Toronto Tech",
  description:
    "Toronto technology company building DigiDov (IRS-compliant crypto donation platform for nonprofits), headset-only VR locomotion systems, and compact electric transport. Innovation in Web3, virtual reality, and sustainable mobility.",
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
