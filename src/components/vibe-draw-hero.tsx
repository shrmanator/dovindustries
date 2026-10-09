import { BearSequence } from "./bear-sequence";
import { vibeDrawDescription } from "./vibe-draw-project";

export function VibeDrawHero() {
  return <section id="vibe-draw" className="vibe-hero container" aria-labelledby="hero-title">
    <div className="vibe-hero-intro">
      <h1 id="hero-title">Vibe Draw</h1>
      <p className="vibe-research-status">Current research</p>
    </div>
    <BearSequence caption={vibeDrawDescription} />
  </section>;
}
