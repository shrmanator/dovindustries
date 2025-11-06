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
            <div className="liquid-glass-clear px-4 py-2">
              <span className="type-label text-paper-muted relative z-10">R&D</span>
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
              <div className="liquid-glass-regular vibrancy-accent p-10 md:p-12 card-3d glass-refraction">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="type-label text-accent mb-2 relative z-10">ACCELERATION</p>
                    <div className="text-5xl md:text-6xl font-bold text-accent mono relative z-10">
                      0–15
                    </div>
                    <p className="type-label text-paper-muted mt-2 relative z-10">MPH / 2.8s</p>
                  </div>
                  <div>
                    <p className="type-label text-accent mb-2 relative z-10">FOOTPRINT</p>
                    <div className="text-3xl md:text-4xl font-bold text-paper leading-tight relative z-10">
                      UNDER-<br/>DESK
                    </div>
                    <p className="type-label text-paper-muted mt-2 relative z-10">FITS ANYWHERE</p>
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
            <div className="liquid-glass-regular p-6 spring-hover glass-refraction">
              <p className="type-label accent-text mb-4 relative z-10">BATTERY SYSTEM</p>
              <p className="text-paper-muted leading-relaxed relative z-10">
                Custom lithium-ion pack with intelligent power management for optimal
                range and longevity.
              </p>
            </div>
            <div className="liquid-glass-regular p-6 spring-hover glass-refraction">
              <p className="type-label accent-text mb-4 relative z-10">FORM FACTOR</p>
              <p className="text-paper-muted leading-relaxed relative z-10">
                Folding design engineered for portability without compromising
                structural integrity.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Tech focus */}
        <FadeIn delay={450} slideFrom="right" withDepth>
          <div className="liquid-glass-clear p-6 border-l-2 border-accent/30 stack-block">
            <p className="type-label text-paper-muted mb-4 relative z-10">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3 relative z-10">
              <span className="liquid-glass-clear px-3 py-1 text-xs">MOTOR CONTROL</span>
              <span className="liquid-glass-clear px-3 py-1 text-xs">BATTERY DENSITY</span>
              <span className="liquid-glass-clear px-3 py-1 text-xs">MECHANICAL DESIGN</span>
              <span className="liquid-glass-clear px-3 py-1 text-xs">SAFETY SYSTEMS</span>
            </div>
          </div>
        </FadeIn>

        {/* Coming soon - Premium badge */}
        <FadeIn delay={500}>
          <div className="liquid-glass-regular vibrancy-accent px-6 py-3 inline-flex glass-refraction">
            <p className="type-label text-accent relative z-10">
              COMING 2026
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
