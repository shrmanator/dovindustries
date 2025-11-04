import { FadeIn } from "./fade-in";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center grid-margin">
      <div className="w-full section-padding">
        <div className="max-w-7xl">
          {/* Company name - pure type */}
          <FadeIn delay={100}>
            <div className="stack-block">
              <h1 className="text-[11vw] md:text-[12vw] lg:text-[clamp(8rem,12vw,12rem)] font-extrabold leading-[0.85] tracking-tighter uppercase">
                DOVINDUSTRIES
              </h1>
            </div>
          </FadeIn>

          {/* Company statement - editorial rhythm */}
          <FadeIn delay={300}>
            <div className="max-w-3xl stack-block">
              <p className="type-body-lg text-paper-muted">
                Crypto without blockchain knowledge. VR movement without
                external hardware. Compact electric transport. Some live, some
                in R&D.
              </p>
            </div>
          </FadeIn>

          {/* Minimal meta - subtle */}
          <FadeIn delay={500} slideFrom="left">
            <div className="flex gap-6 type-label text-paper-muted">
              <span>EST. 2025</span>
              <span className="text-border-emphasis">—</span>
              <span>TORONTO / REMOTE</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
