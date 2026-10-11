import type { Metadata } from "next";
import { StudioPortfolio } from "@/components/studio-portfolio";

export const metadata: Metadata = {
  title: "Art direction study | Dovindustries",
  robots: { index: false, follow: false },
};

export default function ArtDirectionStudy() {
  return <StudioPortfolio homeHref="/art-direction" />;
}
