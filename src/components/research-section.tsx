import { VibeDrawProject } from "./vibe-draw-project";
import { ResearchStudy } from "./research-study";
import { transportResearchDescription, vrResearchDescription } from "../content/research";

export function ResearchSection({ includeVibeDraw = true }: { includeVibeDraw?: boolean }) {
  return <section id="research" className="research-section section" aria-labelledby="research-title">
    <div className="container">
      <div className="section-intro">
        <h2 id="research-title" className="section-title">{includeVibeDraw ? "Research in progress." : "More research."}</h2>
      </div>
      <div className="research-list">
        {includeVibeDraw && <VibeDrawProject />}
        <ResearchStudy id="vr" title="VR locomotion"
          question={vrResearchDescription}
          image="/images/art-vr-stepping.webp"
          alt="Charcoal and blue paint study of a person wearing a headset and stepping in place" />
        <article id="transport" className="research-entry transport-study">
          <h3>Compact electric transport</h3>
          <p>{transportResearchDescription}</p>
        </article>
      </div>
    </div>
  </section>;
}
