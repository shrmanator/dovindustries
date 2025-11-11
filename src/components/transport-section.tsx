import { FadeIn } from "./fade-in";

export function TransportSection() {
  return (
    <section id="transport" className="section-padding grid-margin border-t border-subtle">
      <div className="max-w-7xl">
        {/* Status */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="status-badge">
              <span className="type-label text-paper-muted">R&D</span>
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

        {/* Spec reveal */}
        <FadeIn delay={200}>
          <div className="max-w-4xl stack-block">
            <div className="minimal-card-emphasis beam-green">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="type-label text-paper-muted mb-2">ACCELERATION</p>
                  <div className="text-5xl md:text-6xl font-bold text-paper mono">
                    0–15
                  </div>
                  <p className="type-label text-paper-muted mt-2">MPH / 2.8s</p>
                </div>
                <div>
                  <p className="type-label text-paper-muted mb-2">FOOTPRINT</p>
                  <div className="text-3xl md:text-4xl font-bold text-paper leading-tight">
                    UNDER-<br/>DESK
                  </div>
                  <p className="type-label text-paper-muted mt-2">FITS ANYWHERE</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Lead description */}
        <FadeIn delay={300}>
          <div className="max-w-3xl stack-block">
            <p className="type-body-lg text-paper-muted">
              Compact. Electric. Urban-optimized.
            </p>
          </div>
        </FadeIn>

        {/* Specs grid */}
        <FadeIn delay={400}>
          <div className="grid md:grid-cols-2 gap-6 stack-block">
            <div className="minimal-card">
              <p className="type-label text-paper mb-4">BATTERY SYSTEM</p>
              <p className="text-paper-muted leading-relaxed">
                Custom lithium-ion pack with intelligent power management for optimal
                range and longevity.
              </p>
            </div>
            <div className="minimal-card">
              <p className="type-label text-paper mb-4">FORM FACTOR</p>
              <p className="text-paper-muted leading-relaxed">
                Folding design engineered for portability without compromising
                structural integrity.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Tech focus */}
        <FadeIn delay={450}>
          <div className="border-l-2 border-emphasis p-6 stack-block">
            <p className="type-label text-paper-muted mb-4">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3">
              <span className="status-badge">MOTOR CONTROL</span>
              <span className="status-badge">BATTERY DENSITY</span>
              <span className="status-badge">MECHANICAL DESIGN</span>
              <span className="status-badge">SAFETY SYSTEMS</span>
            </div>
          </div>
        </FadeIn>

        {/* Coming soon */}
        <FadeIn delay={500}>
          <div className="stack-block">
            <div className="minimal-card inline-flex">
              <p className="type-label text-paper">
                COMING 2026
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
