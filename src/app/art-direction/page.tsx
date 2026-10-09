import type { Metadata } from "next";
import { VibeDrawHero } from "@/components/vibe-draw-hero";
import { StudioResearch } from "@/components/studio-research";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";
import "./bear-sequence.css";
import "./vibe-hero.css";
import "./studio.css";
import "./studio-work.css";
import "./studio-donation.css";
import "./studio-research.css";

export const metadata: Metadata = {
  title: "Art direction study | Dovindustries",
  robots: { index: false, follow: false },
};

export default function ArtDirectionStudy() {
  return <div className="studio-site">
    <SiteHeader homeHref="/art-direction" researchHref="#vibe-draw" />
    <main id="main" tabIndex={-1}>
      <VibeDrawHero />
      <WorkSection presentation="studio" />
      <StudioResearch />
    </main>
    <SiteFooter homeHref="/art-direction" />
  </div>;
}
