import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";
import { ResearchSection } from "@/components/research-section";
export default function Home() {
  return <>
    <SiteHeader />
    <main id="main" tabIndex={-1}>
      <HeroSection />
      <WorkSection />
      <ResearchSection />
    </main>
    <SiteFooter />
  </>;
}
