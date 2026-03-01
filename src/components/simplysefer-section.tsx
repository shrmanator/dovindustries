import Link from "next/link";
import { FadeIn } from "./fade-in";

export function SimplySeferSection() {
  return (
    <section
      id="simplysefer"
      className="section-padding grid-margin border-t border-subtle"
      aria-labelledby="simplysefer-heading"
    >
      <div className="max-w-7xl">
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="status-badge" role="status" aria-label="Product status">
              <span className="status-indicator"></span>
              <span>LIVE</span>
            </div>
            <span className="type-label text-paper-muted">TEXTS PLATFORM</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="stack-block">
            <h2 id="simplysefer-heading" className="type-display-lg max-w-4xl">
              SIMPLYSEFER.COM
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-3xl stack-block">
            <p className="type-body-lg text-paper-muted">
              A streamlined reading experience for Sefer texts with a clean,
              distraction-free interface.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 stack-block">
            <article className="minimal-card-emphasis md:col-span-2">
              <h3 className="type-label mb-6 text-paper">FOCUSED READING</h3>
              <p className="text-paper leading-relaxed text-lg">
                Built for clarity with typography and spacing tuned to keep the
                text central and easy to navigate.
              </p>
            </article>

            <article className="minimal-card md:col-span-1 h-full">
              <h3 className="type-label mb-4 text-paper">WEB-BASED ACCESS</h3>
              <p className="text-paper-muted leading-relaxed">
                Opens instantly in the browser with no app installation required.
              </p>
            </article>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="stack-block">
            <Link
              href="https://simplysefer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-button"
              aria-label="Visit SimplySefer"
            >
              VISIT SIMPLYSEFER →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
