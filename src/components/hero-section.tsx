import { FadeIn } from "./fade-in";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center grid-margin">
      <div className="w-full section-padding relative z-10">
        <div className="max-w-7xl">
          {/* Company name - pure typography */}
          <FadeIn delay={100}>
            <div className="stack-block">
              <h1 className="text-[11vw] md:text-[12vw] lg:text-[clamp(8rem,12vw,12rem)] font-extrabold leading-[0.85] tracking-tighter uppercase flex items-baseline gap-[0.08em]">
                <span className="text-paper">DOV</span>
                <span className="text-paper" style={{ fontSize: '1.15em' }}>INDUSTRIES</span>
              </h1>
            </div>
          </FadeIn>

          {/* Company motto - minimal card */}
          <FadeIn delay={300}>
            <div className="max-w-3xl stack-block">
              <div className="minimal-card-emphasis">
                <p className="text-2xl md:text-3xl font-bold text-paper mb-4 leading-tight">
                  Forward thinking,<br/>backwards compatible
                </p>
                <p className="type-body-lg text-paper-muted">
                  Crypto without blockchain knowledge. VR movement without
                  external hardware. Compact electric transport. Some live, some
                  in R&D.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Meta badges */}
          <FadeIn delay={500}>
            <div className="flex flex-wrap gap-4">
              <div className="status-badge">
                <span className="type-label">EST. 2025</span>
              </div>
              <div className="status-badge">
                <span className="type-label">TORONTO / REMOTE</span>
              </div>
              <div className="status-badge">
                <span className="status-indicator"></span>
                <span>2 LIVE PROJECTS</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
