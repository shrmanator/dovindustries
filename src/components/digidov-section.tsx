import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

export function DigiDovSection() {
  return (
    <section
      id="digidov"
      className="section-padding grid-margin border-t border-subtle"
      aria-labelledby="digidov-heading"
    >
      <div className="max-w-7xl">
        {/* Status + Label */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="status-badge" role="status" aria-label="Product status">
              <span className="status-indicator"></span>
              <span>LIVE</span>
            </div>
            <span className="type-label text-paper-muted">CRYPTO PLATFORM</span>
          </div>
        </FadeIn>

        {/* Logo */}
        <FadeIn delay={100}>
          <div className="stack-block">
            <Image
              src="/images/digidov-logo-transparent-white.png"
              alt="DigiDov - Crypto Donation Platform Logo"
              width={160}
              height={80}
              className="h-16 w-auto object-contain brightness-0 invert md:h-20"
              style={{ width: "auto" }}
              priority
            />
          </div>
        </FadeIn>

        {/* Product statement */}
        <FadeIn delay={200}>
          <div className="stack-block">
            <h2 id="digidov-heading" className="type-display-lg max-w-4xl">
              CRYPTO DONATIONS FOR NONPROFITS
            </h2>
          </div>
        </FadeIn>

        {/* Lead description */}
        <FadeIn delay={300}>
          <div className="max-w-3xl stack-block">
            <p className="type-body-lg text-paper-muted">
              Crypto in, tax receipts automatically sent to donors. IRS forms
              auto-generated. No crypto knowledge needed.
            </p>
          </div>
        </FadeIn>

        {/* Feature cards - minimal border-based */}
        <FadeIn delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 stack-block">
            {/* Featured card */}
            <article className="minimal-card-emphasis md:col-span-3">
              <h3 className="type-label mb-6 text-paper">ACCEPTS CRYPTO</h3>
              <p className="text-paper leading-relaxed text-lg mb-6">
                Nonprofits accept crypto donations without managing wallets or
                private keys. Platform handles all blockchain complexity.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="status-badge">USDC</span>
                <span className="status-badge">ETH</span>
              </div>
            </article>

            {/* Standard cards */}
            <article className="minimal-card md:col-span-1 h-full">
              <h3 className="type-label mb-4 text-paper">IRS COMPLIANCE</h3>
              <p className="text-paper-muted leading-relaxed">
                Automated 8283 forms and tax receipts automatically sent to donors.
                IRS-compliant documentation generated instantly.
              </p>
            </article>

            <article className="minimal-card md:col-span-2 h-full">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="type-label text-paper">
                  DIGIDOV CASH
                </h3>
                <span className="px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide border border-yellow-500 text-yellow-500 rounded">NEW</span>
              </div>
              <p className="text-paper-muted leading-relaxed">
                New offramping feature allowing creators, nonprofits, and bloggers to
                instantly receive U.S. dollars from crypto donations.
              </p>
            </article>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={500}>
          <div className="stack-block">
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
