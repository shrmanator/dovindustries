import { BearSequence } from "./bear-sequence";
import { vibeDrawDescription } from "./vibe-draw-project";

export function VibeDrawHero() {
  return <section id="vibe-draw" className="vibe-hero container" aria-labelledby="hero-title">
    <p className="studio-context">Dovindustries builds software and hardware, and researches new ways to draw and move.</p>
    <div className="vibe-hero-intro">
      <h1 id="hero-title"><span>Current research</span>Vibe Draw</h1>
      <p className="vibe-hero-description">{vibeDrawDescription}</p>
    </div>
    <BearSequence />
  </section>;
}
