import { FadeIn } from "./fade-in";

export function TransportSection() {
  return (
    <section id="transport" className="section-padding grid-margin border-t border-border">
      <div className="max-w-7xl">
        {/* Status */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="brutalist-chip">
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

        {/* Spec reveal - Tesla-style */}
        <FadeIn delay={200} slideFrom="left">
          <div className="max-w-3xl stack-block">
            <div className="type-display-md accent-text mono">
              0–15 MPH / 2.8s
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

        {/* Minimal detail - keep it mysterious */}
        <FadeIn delay={400} slideFrom="right">
          <div className="border-l-2 border-border pl-6 stack-block">
            <p className="type-label text-paper-muted mb-4">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3">
              <span className="brutalist-chip">HARDWARE</span>
              <span className="brutalist-chip">BATTERY TECH</span>
              <span className="brutalist-chip">ENGINEERING</span>
            </div>
          </div>
        </FadeIn>

        {/* Coming soon */}
        <FadeIn delay={500}>
          <div>
            <p className="type-label text-accent">
              COMING SOON
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
