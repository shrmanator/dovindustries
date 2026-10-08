import type { Metadata } from "next";
import { VibeDrawHero } from "@/components/vibe-draw-hero";
import { ResearchSection } from "@/components/research-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";
import "./bear-sequence.css";
import "./vibe-hero.css";

export const metadata: Metadata = {
  title: "Art direction study | Dovindustries",
  robots: { index: false, follow: false },
};

export default function ArtDirectionStudy() {
  return <>
    <SiteHeader />
    <main id="main" tabIndex={-1}>
      <VibeDrawHero />
      <WorkSection />
      <ResearchSection />
    </main>
    <SiteFooter />
  </>;
}
