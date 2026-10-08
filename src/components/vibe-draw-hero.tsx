import { BearSequence } from "./bear-sequence";

export function VibeDrawHero() {
  return <section className="vibe-hero container" aria-labelledby="hero-title">
    <div className="vibe-hero-intro">
      <h1 id="hero-title"><span>Introducing</span>Vibe Draw</h1>
      <a className="vibe-project-link" href="#released-projects">Explore our projects <span aria-hidden="true">↓</span></a>
    </div>
    <BearSequence />
  </section>;
}
