import { FadeIn } from "./fade-in";
import { InteractiveCard } from "./interactive-card";

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
            <div className="glass-dark px-4 py-2">
              <span className="type-label text-paper-muted">R&D</span>
            </div>
            <span className="type-label text-paper-muted">VIRTUAL REALITY</span>
          </div>
        </FadeIn>

        {/* Product statement */}
        <FadeIn delay={100}>
          <div className="stack-block">
            <h2 id="vr-heading" className="type-display-lg max-w-4xl">
              VR WALK-IN-PLACE <span className="text-accent">LOCOMOTION</span>
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

        {/* Feature bento grid - dramatic asymmetry */}
        <FadeIn delay={300} slideFrom="left">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 stack-block">
            <InteractiveCard className="md:col-span-2">
              <article className="glass-card p-8 h-full spring-hover">
                <h3 className="type-label mb-4 accent-text">HEADSET-ONLY</h3>
                <p className="text-paper-muted leading-relaxed">
                  No external hardware required. All sensors built into the VR
                  headset.
                </p>
              </article>
            </InteractiveCard>

            <InteractiveCard className="md:col-span-3 md:row-span-2">
              <article className="glass-accent p-10 h-full card-3d flex flex-col">
                <h3 className="type-label mb-6 text-accent">SENSOR FUSION</h3>
                <p className="text-paper leading-relaxed text-lg mb-8 flex-grow">
                  Combines IMU data, head tracking, and custom algorithms to detect
                  walking motion. Real-time processing for natural locomotion.
                </p>
                <div className="glass-dark p-4">
                  <p className="type-label text-accent mb-2">LATENCY</p>
                  <p className="text-3xl font-bold text-accent mono">&lt;16ms</p>
                </div>
              </article>
            </InteractiveCard>

            <InteractiveCard className="md:col-span-2">
              <article className="glass-card p-8 h-full spring-hover">
                <h3 className="type-label mb-4 accent-text">NATURAL MOVEMENT</h3>
                <p className="text-paper-muted leading-relaxed">
                  Intuitive locomotion that matches physical walking without
                  treadmills or external trackers.
                </p>
              </article>
            </InteractiveCard>
          </div>
        </FadeIn>

        {/* Tech stack - enhanced */}
        <FadeIn delay={400} slideFrom="right" withDepth>
          <div className="glass-card-subtle p-6 border-l-2 border-accent/30">
            <p className="type-label text-paper-muted mb-4">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3">
              <span className="glass-chip">VR HEADSETS</span>
              <span className="glass-chip">IMU SENSORS</span>
              <span className="glass-chip">MACHINE LEARNING</span>
              <span className="glass-chip">REAL-TIME PROCESSING</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
