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

        {/* Feature bento grid - iOS 26 liquid glass */}
        <FadeIn delay={300} slideFrom="left">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 stack-block">
            <InteractiveCard className="md:col-span-2">
              <article className="liquid-glass-regular p-8 h-full spring-hover glass-refraction">
                <h3 className="type-label mb-4 accent-text relative z-10">HEADSET-ONLY</h3>
                <p className="text-paper-muted leading-relaxed relative z-10">
                  No external hardware required. All sensors built into the VR
                  headset.
                </p>
              </article>
            </InteractiveCard>

            <InteractiveCard className="md:col-span-3 md:row-span-2">
              <article className="liquid-glass-regular vibrancy-accent p-10 h-full card-3d flex flex-col glass-refraction">
                <h3 className="type-label mb-6 text-accent relative z-10">SENSOR FUSION</h3>
                <p className="text-paper leading-relaxed text-lg mb-8 flex-grow relative z-10">
                  Combines IMU data, head tracking, and custom algorithms to detect
                  walking motion. Real-time processing for natural locomotion.
                </p>
                <div className="liquid-glass-clear p-4 relative z-10">
                  <p className="type-label text-accent mb-2">LATENCY</p>
                  <p className="text-3xl font-bold text-accent mono">&lt;16ms</p>
                </div>
              </article>
            </InteractiveCard>

            <InteractiveCard className="md:col-span-2">
              <article className="liquid-glass-regular p-8 h-full spring-hover glass-refraction">
                <h3 className="type-label mb-4 accent-text relative z-10">NATURAL MOVEMENT</h3>
                <p className="text-paper-muted leading-relaxed relative z-10">
                  Intuitive locomotion that matches physical walking without
                  treadmills or external trackers.
                </p>
              </article>
            </InteractiveCard>
          </div>
        </FadeIn>

        {/* Tech stack - liquid glass */}
        <FadeIn delay={400} slideFrom="right" withDepth>
          <div className="liquid-glass-clear p-6 border-l-2 border-accent/30 stack-block">
            <p className="type-label text-paper-muted mb-4 relative z-10">FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3 relative z-10">
              <span className="liquid-glass-clear px-3 py-1 text-xs">VR HEADSETS</span>
              <span className="liquid-glass-clear px-3 py-1 text-xs">IMU SENSORS</span>
              <span className="liquid-glass-clear px-3 py-1 text-xs">MACHINE LEARNING</span>
              <span className="liquid-glass-clear px-3 py-1 text-xs">REAL-TIME PROCESSING</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
