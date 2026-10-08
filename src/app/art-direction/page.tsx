import type { Metadata } from "next";
import { BearSequence } from "@/components/bear-sequence";
import { HeroSection } from "@/components/hero-section";
import { ResearchSection } from "@/components/research-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";
import "./bear-sequence.css";

export const metadata: Metadata = {
  title: "Art direction study | Dovindustries",
  robots: { index: false, follow: false },
};

export default function ArtDirectionStudy() {
  return <>
    <SiteHeader />
    <main id="main" tabIndex={-1}>
      <HeroSection artwork={<BearSequence />} />
      <WorkSection />
      <ResearchSection showBearConcept />
    </main>
    <SiteFooter />
  </>;
}
