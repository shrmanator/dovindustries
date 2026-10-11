import { VibeDrawHero } from "./vibe-draw-hero";
import { StudioResearch } from "./studio-research";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { WorkSection } from "./work-section";
import "../app/art-direction/bear-sequence.css";
import "../app/art-direction/vibe-hero.css";
import "../app/art-direction/studio.css";
import "../app/art-direction/studio-work.css";
import "../app/art-direction/studio-donation.css";
import "../app/art-direction/studio-research.css";

export function StudioPortfolio({ homeHref = "/" }: { homeHref?: string }) {
  const researchHref = homeHref === "/" ? "/vibe-draw" : `${homeHref}/vibe-draw`;
  return <div className="studio-site">
    <SiteHeader homeHref={homeHref} researchHref="#vibe-draw" markSrc="/images/bear-mark-clean.webp" />
    <main id="main" tabIndex={-1}>
      <VibeDrawHero researchHref={researchHref} />
      <WorkSection presentation="studio" />
      <StudioResearch />
    </main>
    <SiteFooter homeHref={homeHref} invitation="Discuss the work."
      description="For research collaboration, or questions about Simply Sefer and DigiDov." />
  </div>;
}
