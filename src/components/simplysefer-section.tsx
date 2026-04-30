import Image from "next/image";
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
            <div className="status-badge status-badge-live">
              <span className="status-indicator status-indicator-live"></span>
              <span>LIVE</span>
            </div>
            <span className="type-label text-paper-muted">MARKETPLACE</span>
          </div>
        </FadeIn>

        {/* Hero layout - Large image with overlaid content + CTA */}
        <FadeIn delay={100}>
          <div className="portfolio-stack-block">
            <div className="relative rounded-xl overflow-hidden group">
              {/* Product mockup */}
              <div className="aspect-[16/9] md:aspect-[21/9] relative">
                <Image
                  src="/images/simplysefer-mockup.jpg"
                  alt="Simply Sefer marketplace interface showing seforim listings"
                  fill
                  className="object-cover brightness-75 group-hover:brightness-[0.8] transition-all duration-500"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
              </div>
              
              {/* Overlaid content with CTA in hero */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    {/* Wordmark instead of placeholder icon */}
                    <p className="type-label text-amber-400 tracking-widest mb-3">SIMPLY SEFER</p>
                    <h2 id="simplysefer-heading" className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-paper leading-[0.9] tracking-tight uppercase mb-4">
                      The Seforim<br />Network
                    </h2>
                    <p className="type-body-lg text-paper/80 max-w-md">
                      Where Torah scholars and collectors connect.
                    </p>
                  </div>
                  {/* CTA in hero - peak interest moment */}
                  <Link
                    href="https://simplysefer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="minimal-button shrink-0"
                    aria-label="Explore Simply Sefer marketplace"
                  >
                    EXPLORE MARKETPLACE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Feature cards with scroll hint on mobile */}
        <FadeIn delay={200}>
          <div className="relative">
            {/* Scroll hint gradient - right fade */}
            <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-ink to-transparent pointer-events-none z-10 md:hidden" />
            
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 scrollbar-hide">
              <article className="minimal-card flex-shrink-0 w-72 md:w-auto group cursor-default">
                <h3 className="type-label text-paper mb-3">BUY / SELL / BID</h3>
                <p className="text-paper leading-relaxed text-lg mb-2">
                  From rare manuscripts to everyday texts.
                </p>
                <p className="text-paper-muted leading-relaxed text-sm">
                  Auctions, fixed-price, and offers.
                </p>
              </article>

              <article className="minimal-card-emphasis beam-amber flex-shrink-0 w-72 md:w-auto">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="type-label text-paper">AI IDENTIFICATION</h3>
                  <span className="accent-badge">NEW</span>
                </div>
                <p className="text-paper-muted text-sm mb-3">Upload a photo, get an ID</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-paper mono">85-88%</span>
                  <span className="text-paper-muted text-sm">accuracy</span>
                </div>
                <p className="text-paper-muted leading-relaxed text-xs mt-2">
                  vs ~60% baseline for untrained identification
                </p>
              </article>

              <article className="minimal-card flex-shrink-0 w-72 md:w-auto cursor-default">
                <h3 className="type-label text-paper mb-3">GLOBAL COMMUNITY</h3>
                <p className="text-paper-muted leading-relaxed">
                  Collectors, scholars, yeshivos, and dealers across three continents.
                </p>
              </article>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
