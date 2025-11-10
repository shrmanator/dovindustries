import { FadeIn } from "./fade-in";
import { Parallax } from "./parallax";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center grid-margin overflow-x-hidden">
      {/* Floating accent orbs */}
      <div className="absolute inset-0 overflow-x-hidden pointer-events-none">
        <Parallax speed={0.3}>
          <div className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </Parallax>
        <Parallax speed={0.5}>
          <div className="absolute bottom-40 left-[15%] w-72 h-72 rounded-full bg-accent/3 blur-3xl" />
        </Parallax>
      </div>

      <div className="w-full section-padding relative z-10">
        <div className="max-w-7xl">
          {/* Company name - clean typography */}
          <FadeIn delay={100}>
            <div className="stack-block">
              <h1 className="text-[11vw] md:text-[12vw] lg:text-[clamp(8rem,12vw,12rem)] font-extrabold leading-[0.85] tracking-tighter uppercase flex items-baseline gap-[0.08em]">
                <span className="text-paper">DOV</span>
                <span className="text-accent" style={{ fontSize: '1.15em' }}>INDUSTRIES</span>
              </h1>
            </div>
          </FadeIn>

          {/* Company motto - liquid glass 3.0 with specular highlights */}
          <FadeIn delay={300} withDepth>
            <div className="max-w-3xl stack-block">
              <div className="glass-layered glass-specular vibrancy-accent p-6 md:p-8 hover-lift glass-refraction spatial-shadow gpu-accelerated">
                <p className="text-2xl md:text-3xl font-bold text-accent relative z-10 mb-4 leading-tight">
                  Forward thinking,<br/>backwards compatible
                </p>
                <p className="type-body-lg text-paper relative z-10">
                  Crypto without blockchain knowledge. VR movement without
                  external hardware. Compact electric transport. Some live, some
                  in R&D.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Meta badges - clean indicators */}
          <FadeIn delay={500} slideFrom="left">
            <div className="flex flex-wrap gap-4">
              <div className="material-depth-thin px-4 py-2 glass-specular">
                <span className="type-label relative z-10">EST. 2025</span>
              </div>
              <div className="material-depth-thin px-4 py-2 glass-specular">
                <span className="type-label relative z-10">TORONTO / REMOTE</span>
              </div>
              <div className="hud-indicator">
                <span className="relative z-10">2 LIVE PROJECTS</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
