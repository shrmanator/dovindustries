import { FadeIn } from "./fade-in";

export function VibeDrawSection() {
  return (
    <section
      id="vibe-draw"
      className="portfolio-section"
      aria-labelledby="vibe-draw-heading"
    >
      <div className="max-w-7xl">
        <FadeIn>
          <div className="section-meta">
            <div className="status-badge">
              <span className="type-label text-paper-muted">R&D</span>
            </div>
            <span className="type-label text-paper-muted">AI CREATIVE TOOLS</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="max-w-4xl space-y-3 md:space-y-4 portfolio-stack-block">
            <p className="type-label text-paper-muted">VIBE DRAW</p>
            <h2 id="vibe-draw-heading" className="type-display-lg max-w-4xl">
              AI IS THE BRAIN. WE&apos;RE BUILDING THE HAND.
            </h2>
            <p className="type-body-lg text-paper-muted max-w-3xl">
              Vibe Draw gives multimodal AI a way to directly work on a drawing —
              creating and manipulating its parts, understanding how they relate, and
              updating them as the artwork evolves.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 portfolio-stack-block">
            <article className="minimal-card h-full">
              <h3 className="type-label mb-3 text-paper">PERSISTENT VISUAL WORLD</h3>
              <p className="text-paper-muted leading-relaxed">
                Parts of the artwork remain identifiable and editable as the work
                evolves, with explicit relationships to the things around them.
              </p>
            </article>

            <article className="minimal-card-emphasis beam-orange h-full">
              <h3 className="type-label mb-3 text-paper">DIRECT MANIPULATION</h3>
              <p className="text-paper leading-relaxed text-lg">
                The model can act on specific components through prompts or movement,
                then determine which connected elements need to respond.
              </p>
            </article>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="border-l-2 border-emphasis p-6 portfolio-stack-block">
            <p className="type-label text-paper-muted mb-4">CURRENT RESEARCH</p>
            <p className="text-paper-muted leading-relaxed max-w-3xl">
              Testing whether current multimodal models can reliably create, edit,
              inspect, and repair this shared visual state as scenes become more
              complex, and building the training and verification pipeline where they
              fail.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
