import Link from "next/link";
import { FadeIn } from "./fade-in";

export function SimplySeferSection() {
  return (
    <section
      id="simplysefer"
      className="portfolio-section"
      aria-labelledby="simplysefer-heading"
    >
      <div className="max-w-7xl">
        <FadeIn>
          <div className="section-meta">
            <div className="status-badge">
              <span className="status-indicator"></span>
              <span>LIVE</span>
            </div>
            <span className="type-label text-paper-muted">MARKETPLACE</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="portfolio-stack-block space-y-3">
            <p className="type-label font-hebrew text-paper-muted" dir="rtl" lang="yi">
              אלץ גייט פון האנט צו האנט
            </p>
            <p className="type-label text-paper-muted">SIMPLY SEFER</p>
            <h2 id="simplysefer-heading" className="type-display-lg max-w-4xl">
              THE SEFORIM NETWORK
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-3xl portfolio-stack-block">
            <p className="type-body-lg text-paper-muted">Buy. Trade. Collect. Discover.</p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 portfolio-stack-block">
            <article className="minimal-card h-full">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="type-label text-paper">BUY / SELL / BID</h3>
              </div>
              <div className="mt-3 space-y-2">
                <p className="text-paper leading-relaxed text-lg">
                  Discover seforim. Find Judaica.
                </p>
                <p className="text-paper-muted leading-relaxed">
                  From everyday listings to rare finds.
                </p>
              </div>
            </article>

            <article className="minimal-card h-full">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="type-label text-paper">SEFER IDENTIFICATION</h3>
                <span className="accent-badge">NEW</span>
              </div>
              <div className="mt-3 space-y-2">
                <p className="text-paper leading-relaxed text-lg">
                  85-88% estimated overall accuracy.
                </p>
                <p className="text-paper-muted leading-relaxed">
                  Roughly 90-92% on common seforim from uploaded photos.
                </p>
              </div>
            </article>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div>
            <Link
              href="https://simplysefer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-button"
              aria-label="Visit Simply Sefer marketplace"
            >
              VISIT SIMPLY SEFER →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
