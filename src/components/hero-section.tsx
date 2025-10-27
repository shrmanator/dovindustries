export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center grid-margin">
      <div className="w-full section-padding">
        <div className="max-w-7xl">
          {/* Company name - pure type */}
          <div className="stack-block">
            <h1 className="text-[11vw] md:text-[12vw] lg:text-[clamp(8rem,12vw,12rem)] font-extrabold leading-[0.85] tracking-tighter uppercase">
              DOVINDUSTRIES
            </h1>
          </div>

          {/* Company statement - editorial rhythm */}
          <div className="max-w-3xl stack-block">
            <p className="type-body-lg text-paper-muted">
              We build products in crypto, VR, and hardware.
            </p>
          </div>

          {/* Minimal meta - subtle */}
          <div className="flex gap-6 type-label text-paper-muted">
            <span>EST. 2025</span>
            <span className="text-border-emphasis">—</span>
            <span>TORONTO / REMOTE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
