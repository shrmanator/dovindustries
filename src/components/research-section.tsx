import { VibeDrawProject } from "./vibe-draw-project";
import { ResearchStudy } from "./research-study";

export function ResearchSection({ includeVibeDraw = true }: { includeVibeDraw?: boolean }) {
  return <section id="research" className="research-section section" aria-labelledby="research-title">
    <div className="container">
      <div className="section-intro">
        <h2 id="research-title" className="section-title">{includeVibeDraw ? "Research in progress." : "More research."}</h2>
      </div>
      <div className="research-list">
        {includeVibeDraw && <VibeDrawProject />}
        <ResearchStudy id="vr" title="VR locomotion"
          question="Can a headset turn steps in place into movement through a virtual world, without external trackers or a treadmill?"
          image="/images/art-vr-stepping.webp"
          alt="Charcoal and blue paint study of a person wearing a headset and stepping in place" />
        <ResearchStudy id="transport" title="Compact electric transport"
          question="How small can an electric vehicle fold while making room for its battery and motor?"
          image="/images/art-folding-study.webp"
          alt="Charcoal and blue paint study of a folding hinge, tubular frame, and wheel" />
      </div>
    </div>
  </section>;
}
