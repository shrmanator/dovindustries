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

        {/* Hero layout - Large image with overlaid content */}
        <FadeIn delay={100}>
          <div className="portfolio-stack-block">
            <div className="relative rounded-xl overflow-hidden">
              {/* Product mockup */}
              <div className="aspect-[16/9] md:aspect-[21/9] relative">
                <Image
                  src="/images/simplysefer-mockup.jpg"
                  alt="Simply Sefer marketplace interface showing seforim listings"
                  fill
                  className="object-cover brightness-[0.85]"
                  priority
                />
                {/* Stronger gradient overlay for text readability and to blend light mockup */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
              </div>
              
              {/* Overlaid content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                {/* Logo placeholder - styled text until real logo available */}
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center">
                    <span className="text-xl font-bold text-paper">S</span>
                  </div>
                  <span className="type-label text-paper tracking-wider">SIMPLY SEFER</span>
                </div>
                <h2 id="simplysefer-heading" className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-paper leading-[0.9] tracking-tight uppercase mb-4">
                  The Seforim<br />Network
                </h2>
                <p className="type-body-lg text-paper/90 max-w-xl">
                  Buy. Trade. Collect. Discover.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Feature cards - horizontal scroll on mobile */}
        <FadeIn delay={200}>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 portfolio-stack-block scrollbar-hide">
            <article className="minimal-card flex-shrink-0 w-64 md:w-auto">
              <h3 className="type-label text-paper mb-3">BUY / SELL / BID</h3>
              <p className="text-paper leading-relaxed text-lg mb-2">
                Discover seforim. Find Judaica.
              </p>
              <p className="text-paper-muted leading-relaxed text-sm">
                From everyday listings to rare finds.
              </p>
            </article>

            <article className="minimal-card-emphasis beam-amber flex-shrink-0 w-64 md:w-auto">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="type-label text-paper">AI IDENTIFICATION</h3>
                <span className="accent-badge">NEW</span>
              </div>
              <div className="text-4xl font-bold text-paper mono mb-2">85-88%</div>
              <p className="text-paper-muted leading-relaxed text-sm">
                Estimated accuracy on sefer identification from photos.
              </p>
            </article>

            <article className="minimal-card flex-shrink-0 w-64 md:w-auto">
              <h3 className="type-label text-paper mb-3">COMMUNITY</h3>
              <p className="text-paper-muted leading-relaxed">
                Connect with collectors, scholars, and sellers worldwide.
              </p>
            </article>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div>
            <Link
              href="https://simplysefer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-button"
              aria-label="Visit Simply Sefer marketplace"
            >
              VISIT SIMPLY SEFER
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
