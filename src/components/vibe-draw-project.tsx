import { DrawingStudy } from "./drawing-study";

export function VibeDrawProject({ showBearConcept = false }: { showBearConcept?: boolean }) {
  return <article id="vibe-draw" className="vibe-project">
    <div className="vibe-project-copy">
      <span className="status">In development</span>
      <h3>Vibe Draw</h3>
      <p>We’re developing a drawing model to create and revise individual parts of an illustration.</p>
      <p className="project-note">Current work: testing edits that keep the rest of a scene consistent—from connected joints to overlapping details.</p>
      {showBearConcept && <p className="project-note">The bear animation illustrates this idea. It is an artistic concept, not output from our drawing model.</p>}
    </div>
    <DrawingStudy />
  </article>;
}
