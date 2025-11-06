import { FadeIn } from "./fade-in";

export function VRSection() {
  return (
    <section
      id="vr"
      className="section-padding grid-margin border-t border-white/5"
      aria-labelledby="vr-heading"
    >
      <div className="max-w-7xl">
        {/* Status */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="glass-chip" role="status" aria-label="Development status">
              <span>R&D</span>
            </div>
            <span className="type-label text-paper-muted">VIRTUAL REALITY</span>
          </div>
        </FadeIn>

        {/* Product statement */}
        <FadeIn delay={100}>
          <div className="stack-block">
            <h2 id="vr-heading" className="type-display-lg max-w-4xl">
              VR WALK-IN-PLACE LOCOMOTION
            </h2>
          </div>
        </FadeIn>

        {/* Lead description */}
        <FadeIn delay={200}>
          <div className="max-w-3xl stack-block">
            <p className="type-body-lg text-paper-muted">
              Walk in place to move in VR. Natural movement without external
              trackers.
            </p>
          </div>
        </FadeIn>

        {/* Feature bento grid - varied layout */}
        <FadeIn delay={300} slideFrom="left">
          <div className="bento-grid-asymmetric stack-block">
            <article className="glass-card p-8 hover-lift">
              <h3 className="type-label mb-4 accent-text">HEADSET-ONLY</h3>
              <p className="text-paper-muted leading-relaxed">
                No external hardware required. All sensors built into the VR
                headset.
              </p>
            </article>

            <article className="glass-card p-8 bento-span-2 hover-lift">
              <h3 className="type-label mb-4 accent-text">SENSOR FUSION</h3>
              <p className="text-paper-muted leading-relaxed">
                Combines IMU data, head tracking, and custom algorithms to detect
                walking motion. Real-time processing for natural locomotion.
              </p>
            </article>

            <article className="glass-card p-8 hover-lift">
              <h3 className="type-label mb-4 accent-text">NATURAL MOVEMENT</h3>
              <p className="text-paper-muted leading-relaxed">
                Intuitive locomotion that matches physical walking without
                treadmills or external trackers.
              </p>
            </article>
          </div>
        </FadeIn>

        {/* Tech stack - glass card detail */}
        <FadeIn delay={400} slideFrom="right" withDepth>
          <div className="glass-card-subtle p-6 border-l-2 border-accent/30">
            <p className="type-label text-paper-muted mb-4">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3">
              <span className="glass-chip">VR</span>
              <span className="glass-chip">SENSOR FUSION</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
