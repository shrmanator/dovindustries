import { FadeIn } from "./fade-in";
import { Parallax } from "./parallax";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center grid-margin overflow-hidden">
      {/* Floating accent orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Parallax speed={0.3}>
          <div className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </Parallax>
        <Parallax speed={0.5}>
          <div className="absolute bottom-40 left-[15%] w-72 h-72 rounded-full bg-accent/3 blur-3xl" />
        </Parallax>
      </div>

      <div className="w-full section-padding relative z-10">
        <div className="max-w-7xl">
          {/* Company name - dramatic scale */}
          <FadeIn delay={100} withScale>
            <div className="stack-block">
              <h1 className="text-[11vw] md:text-[12vw] lg:text-[clamp(8rem,12vw,12rem)] font-extrabold leading-[0.85] tracking-tighter uppercase">
                <span className="inline-block hover:text-accent transition-colors duration-700">
                  DOV
                </span>
                <span className="inline-block opacity-90">INDUSTRIES</span>
              </h1>
            </div>
          </FadeIn>

          {/* Company statement - liquid glass with vibrancy */}
          <FadeIn delay={300} withDepth>
            <div className="max-w-3xl stack-block">
              <div className="liquid-glass-regular vibrancy-warm p-6 md:p-8 hover-lift glass-refraction">
                <p className="type-body-lg text-paper relative z-10">
                  Crypto without blockchain knowledge. VR movement without
                  external hardware. Compact electric transport. Some live, some
                  in R&D.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Meta badges - liquid glass chips */}
          <FadeIn delay={500} slideFrom="left">
            <div className="flex flex-wrap gap-4">
              <div className="liquid-glass-clear px-4 py-2">
                <span className="type-label relative z-10">EST. 2025</span>
              </div>
              <div className="liquid-glass-clear px-4 py-2">
                <span className="type-label relative z-10">TORONTO / REMOTE</span>
              </div>
              <div className="liquid-glass-regular vibrancy-accent px-4 py-2">
                <span className="type-label text-accent relative z-10">3 LIVE PROJECTS</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
