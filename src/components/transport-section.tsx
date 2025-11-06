import { FadeIn } from "./fade-in";

export function TransportSection() {
  return (
    <section id="transport" className="section-padding grid-margin border-t border-white/5">
      <div className="max-w-7xl">
        {/* Status */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="glass-chip">
              <span>R&D</span>
            </div>
            <span className="type-label text-paper-muted">HARDWARE</span>
          </div>
        </FadeIn>

        {/* Product statement */}
        <FadeIn delay={100}>
          <div className="stack-block">
            <h2 className="type-display-lg max-w-4xl">
              URBAN TRANSPORTATION
            </h2>
          </div>
        </FadeIn>

        {/* Spec reveal - Tesla-style with glass emphasis */}
        <FadeIn delay={200} slideFrom="left" withScale withDepth>
          <div className="max-w-3xl stack-block">
            <div className="glass-card-emphasis p-8 inline-block">
              <div className="type-display-md accent-text mono">
                0–15 MPH / 2.8s
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Lead description */}
        <FadeIn delay={300}>
          <div className="max-w-3xl stack-block">
            <p className="type-body-lg text-paper-muted">
              Fits under a desk.
            </p>
          </div>
        </FadeIn>

        {/* Minimal detail - glass card with chips */}
        <FadeIn delay={400} slideFrom="right" withDepth>
          <div className="glass-card-subtle p-6 border-l-2 border-accent/30 stack-block">
            <p className="type-label text-paper-muted mb-4">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3">
              <span className="glass-chip">HARDWARE</span>
              <span className="glass-chip">BATTERY TECH</span>
              <span className="glass-chip">ENGINEERING</span>
            </div>
          </div>
        </FadeIn>

        {/* Coming soon - glass badge */}
        <FadeIn delay={500}>
          <div className="glass-chip inline-flex">
            <p className="type-label text-accent">
              COMING SOON
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
