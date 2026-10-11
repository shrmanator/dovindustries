import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "../studio.css";
import "./research-brief.css";

export const metadata: Metadata = {
  title: "Vibe Draw research | Dovindustries",
  robots: { index: false, follow: false },
};

export default function VibeDrawResearch() {
  return <div className="studio-site">
    <SiteHeader homeHref="/art-direction" workHref="/art-direction#work" markSrc="/images/bear-mark-clean.webp"
      researchHref="/art-direction#vibe-draw" />
    <main id="main" tabIndex={-1} className="research-brief container">
      <Link href="/art-direction#vibe-draw" className="research-back">Back to the drawing</Link>
      <header className="research-brief-intro">
        <p>Current research</p>
        <h1>Vibe Draw</h1>
        <p className="research-thesis">Keeping the drawing editable.</p>
      </header>
      <div className="research-brief-body">
        <div className="research-brief-text">
          <section aria-labelledby="parts-title">
            <h2 id="parts-title">A drawing made of parts</h2>
            <p>We’re researching super intelligence (SI) that builds a drawing from strokes and keeps track of what they belong to: a paw, a leg, a character. The goal is a drawing you can keep working on.</p>
          </section>
          <section aria-labelledby="edit-title">
            <h2 id="edit-title">Editing what is already there</h2>
            <p>An artist could select a part and describe a change, or move it directly. Both would work on the same drawing, preserving the strokes and details outside the edit.</p>
          </section>
          <section aria-labelledby="connections-title">
            <h2 id="connections-title">Keeping connected parts coherent</h2>
            <p>Lifting a paw also affects the leg it belongs to. We’re investigating how an edit can account for those connections while keeping the artist in control of what changes.</p>
          </section>
        </div>
        <figure className="research-brief-art">
          <Image src="/images/art-bear-paw-edit.webp" alt="Bear drawing with its front paw lifted"
            width={1200} height={600} sizes="(max-width: 800px) 90vw, 48vw" />
          <figcaption>The paw edit in the presentation is the kind of interaction we’re working toward.</figcaption>
        </figure>
      </div>
    </main>
    <SiteFooter homeHref="/art-direction" invitation="Discuss Vibe Draw."
      description="For questions about the research or collaboration on editable drawing systems." />
  </div>;
}
