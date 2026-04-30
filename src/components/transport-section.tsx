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
            <div className="status-badge status-badge-rnd">
              <span className="status-indicator status-indicator-rnd"></span>
              <span>R&D</span>
            </div>
            <span className="type-label text-paper-muted">HARDWARE</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="portfolio-stack-block">
            <h2 id="transport-heading" className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-paper leading-[0.9] tracking-tight uppercase">
              Last Mile,<br />Solved.
            </h2>
          </div>
        </FadeIn>

        {/* Bento grid - lead with compelling stats */}
        <FadeIn delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 portfolio-stack-block">
            {/* Lead stat - portability, not speed */}
            <article className="minimal-card-emphasis beam-green col-span-2 flex flex-col justify-center p-6 md:p-8">
              <p className="type-label text-emerald-400 mb-2">FOOTPRINT</p>
              <div className="text-5xl md:text-6xl font-bold text-paper leading-none">
                Under<br />Desk
              </div>
              <p className="text-paper-muted mt-3">Fits where bikes can&apos;t</p>
            </article>

            {/* Product image */}
            <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden border border-emerald-500/20">
              <Image
                src="/images/transport-concept.jpg"
                alt="Compact electric transport concept"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xl md:text-2xl font-bold text-paper">Compact. Foldable. Electric.</p>
              </div>
            </div>

            {/* Supporting stats */}
            <article className="minimal-card flex flex-col justify-center">
              <p className="type-label text-paper-muted mb-1">RANGE</p>
              <p className="text-2xl md:text-3xl font-bold text-paper">15+ mi</p>
            </article>

            <article className="minimal-card flex flex-col justify-center">
              <p className="type-label text-paper-muted mb-1">WEIGHT</p>
              <p className="text-2xl md:text-3xl font-bold text-paper">&lt;20 lbs</p>
            </article>

            {/* Value prop card */}
            <article className="minimal-card col-span-2">
              <p className="type-label text-paper mb-3">THE PROBLEM WE&apos;RE SOLVING</p>
              <p className="text-paper-muted leading-relaxed">
                E-bikes are too big for apartments. Scooters lack range. We&apos;re building 
                something that folds to backpack size with enough range for real commutes.
              </p>
            </article>
          </div>
        </FadeIn>

        {/* CTA row with waitlist */}
        <FadeIn delay={250}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              <span className="status-badge">PROTOTYPING</span>
              <span className="status-badge">BATTERY R&D</span>
              <span className="status-badge">MOTOR DESIGN</span>
            </div>
            <a
              href="mailto:contact@dovindustries.com?subject=Transport%20Updates"
              className="minimal-button w-fit"
            >
              GET NOTIFIED
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
