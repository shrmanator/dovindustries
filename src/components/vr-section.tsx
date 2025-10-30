export function VRSection() {
  return (
    <section
      id="vr"
      className="section-padding grid-margin border-t border-border"
      aria-labelledby="vr-heading"
    >
      <div className="max-w-7xl">
        {/* Status */}
        <div className="flex items-center justify-between stack">
          <div className="brutalist-chip" role="status" aria-label="Development status">
            <span>R&D</span>
          </div>
          <span className="type-label text-paper-muted">VIRTUAL REALITY</span>
        </div>

        {/* Product statement */}
        <div className="stack-block">
          <h2 id="vr-heading" className="type-display-lg max-w-4xl">
            VR WALK-IN-PLACE LOCOMOTION
          </h2>
        </div>

        {/* Lead description */}
        <div className="max-w-3xl stack-block">
          <p className="type-body-lg text-paper-muted">
            Walk in place to move in VR. Natural movement without external
            trackers.
          </p>
        </div>

        {/* Feature grid - editorial rhythm */}
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

        {/* Tech stack - subtle detail */}
        <div className="border-l-2 border-border pl-6">
          <p className="type-label text-paper-muted mb-4">FOCUS AREAS</p>
          <div className="flex flex-wrap gap-3">
            <span className="brutalist-chip">VR</span>
            <span className="brutalist-chip">SENSOR FUSION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
