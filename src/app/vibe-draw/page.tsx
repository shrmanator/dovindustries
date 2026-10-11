import type { Metadata } from "next";
import { VibeDrawResearch } from "@/components/vibe-draw-research";

export const metadata: Metadata = {
  title: "Vibe Draw research | Dovindustries",
  description: "Research into super intelligence (SI) that creates editable drawings from individual strokes and connected parts.",
  alternates: { canonical: "/vibe-draw" },
};

export default function Research() {
  return <VibeDrawResearch />;
}
