import { FadeIn } from "./fade-in";

export function VRSection() {
  return (
    <section
      id="vr"
      className="section-padding grid-margin border-t border-border"
      aria-labelledby="vr-heading"
    >
      <div className="max-w-7xl">
        {/* Status */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="brutalist-chip" role="status" aria-label="Development status">
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

        {/* Feature grid - editorial rhythm */}
        <FadeIn delay={300} slideFrom="left">
          <div className="grid gap-12 md:grid-cols-3 md:gap-16 stack-block">
            <article>
              <h3 className="type-label mb-4 accent-text">HEADSET-ONLY</h3>
              <p className="text-paper-muted leading-relaxed">
                No external hardware required. All sensors built into the VR
                headset.
              </p>
            </article>
            <article>
              <h3 className="type-label mb-4 accent-text">SENSOR FUSION</h3>
              <p className="text-paper-muted leading-relaxed">
                Combines IMU data, head tracking, and custom algorithms to detect
                walking motion.
              </p>
            </article>
            <article>
              <h3 className="type-label mb-4 accent-text">NATURAL MOVEMENT</h3>
              <p className="text-paper-muted leading-relaxed">
                Intuitive locomotion that matches physical walking without
                treadmills or external trackers.
              </p>
            </article>
          </div>
        </FadeIn>

        {/* Tech stack - subtle detail */}
        <FadeIn delay={400} slideFrom="right">
          <div className="border-l-2 border-border pl-6">
            <p className="type-label text-paper-muted mb-4">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3">
              <span className="brutalist-chip">VR</span>
              <span className="brutalist-chip">SENSOR FUSION</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
