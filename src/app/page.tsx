import type { Metadata } from "next";
import { DigiDovSection } from "@/components/digidov-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SimplySeferSection } from "@/components/simplysefer-section";
import { SuperMintSection } from "@/components/supermint-section";
import { TransportSection } from "@/components/transport-section";
import { VRSection } from "@/components/vr-section";

export const metadata: Metadata = {
  title: "Dovindustries | Seforim Marketplace, Crypto Donations, VR Locomotion & Electric Transport",
  description:
    "Technology company building Simply Sefer (community marketplace for seforim and Judaica), DigiDov (IRS-compliant crypto donation platform for nonprofits), headset-only VR locomotion systems, and compact electric transport.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex flex-col">
        <HeroSection />
        <SimplySeferSection />
        <DigiDovSection />
        <VRSection />
        <TransportSection />
        <SuperMintSection />
      </main>
      <SiteFooter />
    </div>
  );
}
