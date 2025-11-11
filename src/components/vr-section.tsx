import { FadeIn } from "./fade-in";

export function VRSection() {
  return (
    <section
      id="vr"
      className="section-padding grid-margin border-t border-subtle"
      aria-labelledby="vr-heading"
    >
      <div className="max-w-7xl">
        {/* Status */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="status-badge">
              <span className="type-label text-paper-muted">R&D</span>
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

        {/* Feature grid - minimal */}
        <FadeIn delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 stack-block">
            <article className="minimal-card md:col-span-2 h-full">
              <h3 className="type-label mb-4 text-paper">HEADSET-ONLY</h3>
              <p className="text-paper-muted leading-relaxed">
                No external hardware required. All sensors built into the VR
                headset.
              </p>
            </article>

            <article className="minimal-card-emphasis md:col-span-3 md:row-span-2 flex flex-col h-full">
              <h3 className="type-label mb-6 text-paper">SENSOR FUSION</h3>
              <p className="text-paper leading-relaxed text-lg mb-8 flex-grow">
                Combines IMU data, head tracking, and custom algorithms to detect
                walking motion. Real-time processing for natural locomotion.
              </p>
              <div className="border border-subtle p-4 rounded">
                <p className="type-label text-paper-muted mb-2">LATENCY</p>
                <p className="text-3xl font-bold text-paper mono">&lt;16ms</p>
              </div>
            </article>

            <article className="minimal-card md:col-span-2 h-full">
              <h3 className="type-label mb-4 text-paper">NATURAL MOVEMENT</h3>
              <p className="text-paper-muted leading-relaxed">
                Intuitive locomotion that matches physical walking without
                treadmills or external trackers.
              </p>
            </article>
          </div>
        </FadeIn>

        {/* Tech stack */}
        <FadeIn delay={400}>
          <div className="border-l-2 border-emphasis p-6 stack-block">
            <p className="type-label text-paper-muted mb-4">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3">
              <span className="status-badge">VR HEADSETS</span>
              <span className="status-badge">IMU SENSORS</span>
              <span className="status-badge">MACHINE LEARNING</span>
              <span className="status-badge">REAL-TIME PROCESSING</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
