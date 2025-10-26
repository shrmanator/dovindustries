import { FocusAreas } from "@/components/focus-areas";
import { HeroSection } from "@/components/hero-section";
import {
  ProjectsSection,
  type Project,
} from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const projects: Project[] = [
  {
    name: "DigiDov",
    logo: "/images/digidov-logo-transparent-white.png",
    url: "https://digidov.com/login",
    summary:
      "Crypto donations for nonprofits. Ethereum in, tax receipts out. IRS forms auto-generated.",
    focus: ["Ethereum", "Tax Compliance", "Web3"],
    status: "Live",
    highlight: "You get donations. We handle the blockchain.",
    stack: "Crypto Platform",
  },
  {
    name: "VR Walk-in-Place Locomotion",
    summary:
      "Walk in place, move in VR. Headset sensors track motion and body lean. Look anywhere.",
    focus: ["VR", "Sensor Fusion"],
    status: "R&D",
    highlight: "Your brain thinks you're walking.",
    stack: "Virtual Reality",
  },
  {
    name: "SuperMint",
    logo: "/images/supermint-logo-transparent-grey.png",
    url: "https://supermint.ca",
    summary:
      "NFT rewards for donations. Explored new ways to engage donors. Foundation for DigiDov.",
    focus: ["NFTs", "Web3"],
    status: "Archived",
    highlight: "First iteration. Validated the model.",
    stack: "Web3 Platform",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="flex flex-col">
        <HeroSection />
        <ProjectsSection projects={projects} />
        <FocusAreas />
      </main>
      <SiteFooter />
    </div>
  );
}
