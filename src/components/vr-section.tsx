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
            <div className="status-badge status-badge-rnd">
              <span className="status-indicator status-indicator-rnd"></span>
              <span>R&D</span>
            </div>
            <span className="type-label text-paper-muted">VIRTUAL REALITY</span>
          </div>
        </FadeIn>

        {/* Full-width visual with outcome-focused content */}
        <FadeIn delay={100}>
          <div className="relative rounded-xl overflow-hidden portfolio-stack-block">
            <div className="aspect-[16/9] md:aspect-[21/9] relative">
              <Image
                src="/images/vr-concept.jpg"
                alt="VR walk-in-place locomotion visualization"
                fill
                className="object-cover"
              />
              {/* Stronger purple gradient for text safety */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-purple-900/60 to-purple-950/40" />
            </div>
            
            {/* Outcome-focused content */}
            <div className="absolute inset-0 flex items-center p-6 md:p-10 lg:p-16">
              <div className="max-w-xl">
                <h2 id="vr-heading" className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-paper leading-[0.9] tracking-tight uppercase mb-4">
                  Walk Naturally<br />in VR
                </h2>
                <p className="type-body-lg text-paper/90 mb-6">
                  Move through virtual worlds by walking in place. No treadmills. No external trackers. Just you.
                </p>
                {/* Human-readable latency */}
                <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-sm rounded-lg px-4 py-3 border border-purple-500/30">
                  <span className="text-2xl md:text-3xl font-bold text-paper mono">&lt;16ms</span>
                  <span className="text-paper-muted text-sm">Faster than human perception</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Specs - human-readable labels */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 portfolio-stack-block">
            <article className="minimal-card-emphasis beam-purple text-center py-6">
              <p className="text-xl md:text-2xl font-bold text-paper mb-1">Headset Only</p>
              <p className="type-label text-paper-muted">NO EXTRA HARDWARE</p>
            </article>

            <article className="minimal-card text-center py-6">
              <p className="text-xl md:text-2xl font-bold text-paper mb-1">Real-Time</p>
              <p className="type-label text-paper-muted">ON-DEVICE ML</p>
            </article>

            <article className="minimal-card text-center py-6">
              <p className="text-xl md:text-2xl font-bold text-paper mb-1">Natural Gait</p>
              <p className="type-label text-paper-muted">WALK IN PLACE</p>
            </article>

            <article className="minimal-card text-center py-6">
              <p className="text-xl md:text-2xl font-bold text-paper mb-1">IMU Fusion</p>
              <p className="type-label text-paper-muted">SENSOR DATA</p>
            </article>
          </div>
        </FadeIn>

        {/* CTA row - specific audience */}
        <FadeIn delay={300}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-paper-muted max-w-xl">
              Combining IMU data, head tracking, and custom ML to detect walking motion. 
              All processing happens on-device for lag-free locomotion.
            </p>
            <a
              href="mailto:contact@dovindustries.com?subject=VR%20Locomotion%20Partnership"
              className="minimal-button w-fit shrink-0"
            >
              PARTNER WITH US
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
