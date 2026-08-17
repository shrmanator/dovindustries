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
              AI THAT CAN KEEP WORKING ON THE SAME DRAWING
            </h2>
            <p className="type-body-lg text-paper-muted max-w-3xl">
              A structured visual editing system where artists can select, prompt,
              move, or reshape part of an artwork and have the AI understand what
              else needs to change with it while preserving unrelated work.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 portfolio-stack-block">
            <article className="minimal-card h-full">
              <h3 className="type-label mb-3 text-paper">PERSISTENT ARTWORK</h3>
              <p className="text-paper-muted leading-relaxed">
                The system keeps working on the same editable visual artifact over
                time instead of treating every requested change as a fresh image.
              </p>
            </article>

            <article className="minimal-card-emphasis beam-orange h-full">
              <h3 className="type-label mb-3 text-paper">RELATIONSHIP-AWARE EDITS</h3>
              <p className="text-paper leading-relaxed text-lg">
                Changes can propagate through connected parts, anatomy, overlaps,
                and other dependencies while preserving what should remain unchanged.
              </p>
            </article>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="border-l-2 border-emphasis p-6 portfolio-stack-block">
            <p className="type-label text-paper-muted mb-4">CURRENT RESEARCH</p>
            <p className="text-paper-muted leading-relaxed max-w-3xl">
              Prototyping structured creation and editing, measuring where current
              multimodal models fail on complex edits, and building the training and
              verification pipeline needed to improve reliability.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
