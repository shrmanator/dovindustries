import Image from "next/image";
import { FadeIn } from "./fade-in";

export function TransportSection() {
  return (
    <section
      id="transport"
      className="portfolio-section"
      aria-labelledby="transport-heading"
    >
      <div className="max-w-7xl">
        <FadeIn>
          <div className="section-meta">
            <div className="status-badge">
              <span className="type-label text-paper-muted">R&D</span>
            </div>
            <span className="type-label text-paper-muted">HARDWARE</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 id="transport-heading" className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-paper leading-[0.9] tracking-tight uppercase mb-6 portfolio-stack-block">
            Urban<br />Transportation
          </h2>
        </FadeIn>

        {/* Bento grid layout */}
        <FadeIn delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 portfolio-stack-block">
            {/* Large stat card */}
            <article className="minimal-card-emphasis beam-green col-span-2 row-span-2 flex flex-col justify-center p-6 md:p-8">
              <p className="type-label text-paper-muted mb-2">ACCELERATION</p>
              <div className="text-6xl md:text-8xl font-bold text-paper mono leading-none">
                0-15
              </div>
              <p className="type-label text-paper-muted mt-2">MPH IN 2.8 SECONDS</p>
            </article>

            {/* Product image */}
            <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/transport-concept.jpg"
                alt="Compact electric transport concept"
                fill
                className="object-cover"
              />
              {/* Bottom gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="type-label text-paper-muted">CONCEPT</p>
                <p className="text-lg font-bold text-paper">Compact. Foldable. Electric.</p>
              </div>
            </div>

            {/* Smaller feature cards */}
            <article className="minimal-card">
              <p className="type-label text-paper-muted mb-1">FOOTPRINT</p>
              <p className="text-xl md:text-2xl font-bold text-paper">UNDER-DESK</p>
            </article>

            <article className="minimal-card">
              <p className="type-label text-paper-muted mb-1">DESIGN</p>
              <p className="text-xl md:text-2xl font-bold text-paper">FOLDABLE</p>
            </article>

            <article className="minimal-card col-span-2">
              <p className="type-label text-paper mb-3">BATTERY SYSTEM</p>
              <p className="text-paper-muted leading-relaxed text-sm">
                Custom lithium-ion pack with intelligent power management for optimal range and longevity.
              </p>
            </article>
          </div>
        </FadeIn>

        {/* Focus areas and timeline */}
        <FadeIn delay={250}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              <span className="status-badge">MOTOR CONTROL</span>
              <span className="status-badge">BATTERY DENSITY</span>
              <span className="status-badge">MECHANICAL DESIGN</span>
            </div>
            <div className="minimal-card inline-flex w-fit">
              <p className="type-label text-paper">COMING 2027</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
