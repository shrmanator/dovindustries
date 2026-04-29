import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

export function DigiDovSection() {
  return (
    <section
      id="digidov"
      className="portfolio-section"
      aria-labelledby="digidov-heading"
    >
      <div className="max-w-7xl">
        <FadeIn>
          <div className="section-meta">
            <div className="status-badge">
              <span className="status-indicator"></span>
              <span>LIVE</span>
            </div>
            <span className="type-label text-paper-muted">CRYPTO PLATFORM</span>
          </div>
        </FadeIn>

        {/* Split layout - Content left, visual right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 portfolio-stack-block">
          {/* Content side */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={100}>
              <div className="mb-6">
                <Image
                  src="/images/digidov-logo-transparent-white.png"
                  alt="DigiDov - Crypto Donation Platform Logo"
                  width={180}
                  height={90}
                  className="h-14 w-auto object-contain brightness-0 invert md:h-16"
                />
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <h2 id="digidov-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-paper leading-[0.9] tracking-tight uppercase mb-6">
                Crypto Donations<br />for Nonprofits
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="type-body-lg text-paper-muted mb-8 max-w-lg">
                Crypto in, tax receipts automatically sent to donors. IRS forms
                auto-generated. No crypto knowledge needed.
              </p>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="status-badge">USDC</span>
                <span className="status-badge">ETH</span>
                <span className="status-badge">IRS COMPLIANT</span>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <Link
                href="https://digidov.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-button w-fit"
                aria-label="Visit DigiDov crypto donation platform"
              >
                VISIT DIGIDOV
              </Link>
            </FadeIn>
          </div>

          {/* Visual side */}
          <FadeIn delay={200} slideFrom="right">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/digidov-mockup.jpg"
                  alt="DigiDov dashboard showing crypto donation management"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-ink border border-border-emphasis rounded-lg p-4 md:p-5 shadow-2xl">
                <p className="type-label text-paper-muted mb-1">TAX RECEIPTS</p>
                <p className="text-2xl md:text-3xl font-bold text-paper mono">AUTO</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Feature row */}
        <FadeIn delay={350}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 portfolio-stack-block">
            <article className="minimal-card">
              <h3 className="type-label mb-3 text-paper">ACCEPTS CRYPTO</h3>
              <p className="text-paper-muted leading-relaxed text-sm">
                Nonprofits accept donations without managing wallets or private keys.
              </p>
            </article>

            <article className="minimal-card">
              <h3 className="type-label mb-3 text-paper">IRS COMPLIANCE</h3>
              <p className="text-paper-muted leading-relaxed text-sm">
                Automated 8283 forms and tax receipts generated instantly.
              </p>
            </article>

            <article className="minimal-card">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="type-label text-paper">DIGIDOV CASH</h3>
                <span className="accent-badge">NEW</span>
              </div>
              <p className="text-paper-muted leading-relaxed text-sm">
                Instantly receive U.S. dollars from crypto donations.
              </p>
            </article>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
