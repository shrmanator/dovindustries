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
    highlight: "Accepts crypto donations. Automated tax receipts. No crypto knowledge needed.",
    stack: "Crypto Platform",
  },
  {
    name: "VR Walk-in-Place Locomotion",
    summary:
      "Walk in place to move in VR. Natural movement without external trackers.",
    focus: ["VR", "Sensor Fusion"],
    status: "R&D",
    highlight: "Headset-only locomotion. No external hardware.",
    stack: "Virtual Reality",
  },
  {
    name: "Urban Transportation",
    summary:
      "Fits under a desk. 0-15mph in 2.8 seconds.",
    focus: ["Hardware", "Battery Tech", "Engineering"],
    status: "R&D",
    highlight: "Coming soon.",
    stack: "Hardware",
  },
  {
    name: "SuperMint",
    logo: "/images/supermint-logo-transparent-grey.png",
    url: "https://supermint.ca",
    summary:
      "NFT platform connecting charitable organizations with donors.",
    focus: ["NFTs", "Web3"],
    status: "Archived",
    highlight: "NFT rewards for donations.",
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
