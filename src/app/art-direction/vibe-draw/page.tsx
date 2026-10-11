import type { Metadata } from "next";
import { VibeDrawResearch } from "@/components/vibe-draw-research";

export const metadata: Metadata = {
  title: "Vibe Draw research | Dovindustries",
  robots: { index: false, follow: false },
};

export default function ResearchStudy() {
  return <VibeDrawResearch homeHref="/art-direction" />;
}
