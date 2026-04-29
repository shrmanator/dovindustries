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
            <div className="status-badge status-badge-live">
              <span className="status-indicator status-indicator-live"></span>
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
              <div className="mb-8">
                <Image
                  src="/images/digidov-logo-transparent-white.png"
                  alt="DigiDov - Crypto Donation Platform Logo"
                  width={220}
                  height={110}
                  className="h-16 w-auto object-contain brightness-0 invert md:h-20"
                />
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <h2 id="digidov-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-paper leading-[0.9] tracking-tight uppercase mb-6">
                Accept Crypto.<br />Skip the Complexity.
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="type-body-lg text-paper-muted mb-8 max-w-lg">
                Donors give crypto, you get dollars. Tax receipts sent automatically. 
                IRS forms generated. Zero crypto knowledge required.
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

        {/* Feature row - more visual differentiation */}
        <FadeIn delay={350}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 portfolio-stack-block">
            <article className="minimal-card flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="type-label mb-2 text-paper">ACCEPTS CRYPTO</h3>
              <p className="text-paper-muted leading-relaxed text-sm">
                Accept donations without managing wallets or private keys.
              </p>
            </article>

            <article className="minimal-card flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="type-label mb-2 text-paper">IRS COMPLIANCE</h3>
              <p className="text-paper-muted leading-relaxed text-sm">
                Automated 8283 forms and tax receipts generated instantly.
              </p>
            </article>

            <article className="minimal-card-emphasis beam-cyan flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="type-label text-paper">DIGIDOV CASH</h3>
                <span className="accent-badge">NEW</span>
              </div>
              <p className="text-2xl font-bold text-paper mb-2">USD Instantly</p>
              <p className="text-paper-muted leading-relaxed text-sm">
                Receive U.S. dollars directly from crypto donations.
              </p>
            </article>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
