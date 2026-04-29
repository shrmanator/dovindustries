import Image from "next/image";
import { FadeIn } from "./fade-in";

export function VRSection() {
  return (
    <section
      id="vr"
      className="portfolio-section"
      aria-labelledby="vr-heading"
    >
      <div className="max-w-7xl">
        <FadeIn>
          <div className="section-meta">
            <div className="status-badge">
              <span className="type-label text-paper-muted">R&D</span>
            </div>
            <span className="type-label text-paper-muted">VIRTUAL REALITY</span>
          </div>
        </FadeIn>

        {/* Full-width visual with centered content overlay */}
        <FadeIn delay={100}>
          <div className="relative rounded-xl overflow-hidden portfolio-stack-block">
            <div className="aspect-[16/9] md:aspect-[21/9] relative">
              <Image
                src="/images/vr-concept.jpg"
                alt="VR walk-in-place locomotion concept visualization"
                fill
                className="object-cover"
              />
              {/* Purple gradient overlay matching the beam color */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-900/40 to-transparent" />
            </div>
            
            {/* Overlaid content - left aligned */}
            <div className="absolute inset-0 flex items-center p-6 md:p-10 lg:p-16">
              <div className="max-w-xl">
                <h2 id="vr-heading" className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-paper leading-[0.9] tracking-tight uppercase mb-4">
                  VR Walk-in-Place<br />Locomotion
                </h2>
                <p className="type-body-lg text-paper/80 mb-6">
                  Walk in place to move in VR. Natural movement without external trackers.
                </p>
                {/* Key stat inline */}
                <div className="inline-flex items-baseline gap-2 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <span className="text-3xl md:text-4xl font-bold text-paper mono">&lt;16ms</span>
                  <span className="type-label text-paper-muted">LATENCY</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Technical specs - horizontal cards */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 portfolio-stack-block">
            <article className="minimal-card-emphasis beam-purple text-center py-6">
              <p className="text-2xl md:text-3xl font-bold text-paper mono mb-1">IMU</p>
              <p className="type-label text-paper-muted">SENSORS</p>
            </article>

            <article className="minimal-card text-center py-6">
              <p className="text-2xl md:text-3xl font-bold text-paper mono mb-1">ML</p>
              <p className="type-label text-paper-muted">DETECTION</p>
            </article>

            <article className="minimal-card text-center py-6">
              <p className="text-2xl md:text-3xl font-bold text-paper mono mb-1">0</p>
              <p className="type-label text-paper-muted">EXTERNAL HW</p>
            </article>

            <article className="minimal-card text-center py-6">
              <p className="text-2xl md:text-3xl font-bold text-paper mono mb-1">RT</p>
              <p className="type-label text-paper-muted">PROCESSING</p>
            </article>
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={300}>
          <div className="minimal-card portfolio-stack-block">
            <h3 className="type-label mb-4 text-paper">SENSOR FUSION</h3>
            <p className="text-paper-muted leading-relaxed max-w-3xl">
              Combines IMU data, head tracking, and custom algorithms to detect
              walking motion. All processing happens on-device for natural, 
              lag-free locomotion without treadmills or external trackers.
            </p>
          </div>
        </FadeIn>

        {/* Focus areas */}
        <FadeIn delay={350}>
          <div className="flex flex-wrap gap-3">
            <span className="status-badge">VR HEADSETS</span>
            <span className="status-badge">IMU SENSORS</span>
            <span className="status-badge">MACHINE LEARNING</span>
            <span className="status-badge">REAL-TIME</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
