export const vibeDrawDescription = "We’re building AI that draws with individual strokes and can revise specific parts of a drawing through conversation.";

export function VibeDrawProject() {
  return <article id="vibe-draw" className="research-entry research-feature" aria-labelledby="vibe-title">
    <h3 id="vibe-title">Vibe Draw</h3>
    <p>{vibeDrawDescription}</p>
  </article>;
}
