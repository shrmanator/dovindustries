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

        <FadeIn delay={100}>
          <div className="portfolio-stack-block">
            <Image
              src="/images/digidov-logo-transparent-white.png"
              alt="DigiDov - Crypto Donation Platform Logo"
              width={160}
              height={80}
              className="h-16 w-auto object-contain brightness-0 invert md:h-20"
            />
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="portfolio-stack-block">
            <h2 id="digidov-heading" className="type-display-lg max-w-4xl">
              CRYPTO DONATIONS FOR NONPROFITS
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="max-w-3xl portfolio-stack-block">
            <p className="type-body-lg text-paper-muted">
              Crypto in, tax receipts automatically sent to donors. IRS forms
              auto-generated. No crypto knowledge needed.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 portfolio-stack-block">
            <article className="minimal-card-emphasis md:col-span-2 flex h-full flex-col">
              <h3 className="type-label mb-4 text-paper">ACCEPTS CRYPTO</h3>
              <p className="text-paper leading-relaxed text-lg mb-6">
                Nonprofits accept crypto donations without managing wallets or
                private keys. Platform handles all blockchain complexity.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="status-badge">USDC</span>
                <span className="status-badge">ETH</span>
              </div>
            </article>

            <article className="minimal-card h-full">
              <h3 className="type-label mb-4 text-paper">IRS COMPLIANCE</h3>
              <p className="text-paper-muted leading-relaxed">
                Automated 8283 forms and tax receipts automatically sent to donors.
                IRS-compliant documentation generated instantly.
              </p>
            </article>

            <article className="minimal-card h-full">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="type-label text-paper">
                  DIGIDOV CASH
                </h3>
                <span className="accent-badge">NEW</span>
              </div>
              <p className="text-paper-muted leading-relaxed">
                New offramping feature allowing creators, nonprofits, and bloggers to
                instantly receive U.S. dollars from crypto donations.
              </p>
            </article>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div>
            <Link
              href="https://digidov.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-button"
              aria-label="Visit DigiDov crypto donation platform"
            >
              VISIT DIGIDOV →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
