import { ReleasedProjects } from "./released-projects";
import { VibeDrawProject } from "./vibe-draw-project";
export function WorkSection({ showBearConcept = false }: { showBearConcept?: boolean }) {
  return <section id="work" className={`section container work-section${showBearConcept ? " work-continuation" : ""}`} aria-label="Projects">
    <VibeDrawProject showBearConcept={showBearConcept} />
    <div className="section-intro">
      <h2 id="released-projects" className="section-title released-projects-title">Released projects.</h2>
    </div>
    <ReleasedProjects />
  </section>;
}
