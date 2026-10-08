export function VibeDrawProject({ showBearConcept = false }: { showBearConcept?: boolean }) {
  return <article id="vibe-draw" className={`vibe-project${showBearConcept ? " vibe-project--presentation" : ""}`} aria-labelledby="vibe-title">
    <div className="vibe-project-heading">
      <h2 id="vibe-title" className={showBearConcept ? "visually-hidden" : undefined}>Vibe Draw</h2>
      {!showBearConcept && <span className="status">In development</span>}
    </div>
    <div className="vibe-project-copy">
      <p>We’re developing a drawing model to create illustrations and revise individual parts without changing the rest.</p>
    </div>
  </article>;
}
