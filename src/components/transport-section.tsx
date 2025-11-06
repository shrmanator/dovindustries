import { FadeIn } from "./fade-in";
import { InteractiveCard } from "./interactive-card";

export function TransportSection() {
  return (
    <section id="transport" className="section-padding grid-margin border-t border-white/5 relative overflow-hidden">
      {/* Accent orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl relative z-10">
        {/* Status */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="glass-dark px-4 py-2">
              <span className="type-label text-paper-muted">R&D</span>
            </div>
            <span className="type-label text-paper-muted">HARDWARE</span>
          </div>
        </FadeIn>

        {/* Product statement */}
        <FadeIn delay={100}>
          <div className="stack-block">
            <h2 className="type-display-lg max-w-4xl">
              <span className="text-accent">URBAN</span> TRANSPORTATION
            </h2>
          </div>
        </FadeIn>

        {/* Spec reveal - Premium card */}
        <FadeIn delay={200} slideFrom="left" withScale withDepth>
          <div className="max-w-4xl stack-block">
            <InteractiveCard>
              <div className="glass-accent p-10 md:p-12 card-3d">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="type-label text-accent mb-2">ACCELERATION</p>
                    <div className="text-5xl md:text-6xl font-bold text-accent mono">
                      0–15
                    </div>
                    <p className="type-label text-paper-muted mt-2">MPH / 2.8s</p>
                  </div>
                  <div>
                    <p className="type-label text-accent mb-2">FORM FACTOR</p>
                    <div className="text-3xl md:text-4xl font-bold text-paper leading-tight">
                      DESK-<br/>SIZED
                    </div>
                    <p className="type-label text-paper-muted mt-2">COMPACT</p>
                  </div>
                </div>
              </div>
            </InteractiveCard>
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
        <FadeIn delay={400} slideFrom="right" withDepth>
          <div className="grid md:grid-cols-2 gap-6 stack-block">
            <div className="glass-card p-6 spring-hover">
              <p className="type-label text-accent mb-4">BATTERY SYSTEM</p>
              <p className="text-paper-muted leading-relaxed">
                Custom lithium-ion pack with intelligent power management for optimal
                range and longevity.
              </p>
            </div>
            <div className="glass-card p-6 spring-hover">
              <p className="type-label text-accent mb-4">FORM FACTOR</p>
              <p className="text-paper-muted leading-relaxed">
                Folding design engineered for portability without compromising
                structural integrity.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Tech focus */}
        <FadeIn delay={450} slideFrom="right" withDepth>
          <div className="glass-card-subtle p-6 border-l-2 border-accent/30 stack-block">
            <p className="type-label text-paper-muted mb-4">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3">
              <span className="glass-chip">MOTOR CONTROL</span>
              <span className="glass-chip">BATTERY DENSITY</span>
              <span className="glass-chip">MECHANICAL DESIGN</span>
              <span className="glass-chip">SAFETY SYSTEMS</span>
            </div>
          </div>
        </FadeIn>

        {/* Coming soon - Premium badge */}
        <FadeIn delay={500}>
          <div className="glass-accent px-6 py-3 inline-flex">
            <p className="type-label text-accent">
              COMING 2026
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
