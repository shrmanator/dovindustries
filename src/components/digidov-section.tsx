import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

export function DigiDovSection() {
  return (
    <section
      id="digidov"
      className="section-padding grid-margin border-t border-white/5"
      aria-labelledby="digidov-heading"
    >
      <div className="max-w-7xl">
        {/* Status + Logo */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div
              className="glass-chip"
              role="status"
              aria-label="Product status"
            >
              <span className="status-indicator h-2 w-2 rounded-full bg-accent" />
              <span>LIVE</span>
            </div>
            <span className="type-label text-paper-muted">CRYPTO PLATFORM</span>
          </div>
        </FadeIn>

        {/* Logo + Name */}
        <FadeIn delay={100} withScale>
          <div className="stack-block flex items-center gap-6">
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
              Crypto in, tax receipts out. IRS forms auto-generated. No crypto
              knowledge needed.
            </p>
          </div>
        </FadeIn>

        {/* Feature bento grid - 2026 asymmetric layout */}
        <FadeIn delay={400} slideFrom="left">
          <div className="bento-grid-asymmetric stack-block">
            {/* Featured card - spans 2 columns */}
            <article className="glass-card p-8 bento-span-2 hover-lift">
              <h3 className="type-label mb-4 accent-text">ACCEPTS CRYPTO</h3>
              <p className="text-paper-muted leading-relaxed">
                Nonprofits accept crypto donations without managing wallets or
                private keys. Platform handles all blockchain complexity.
              </p>
            </article>

            {/* Standard cards */}
            <article className="glass-card p-8 hover-lift">
              <h3 className="type-label mb-4 accent-text">TAX COMPLIANCE</h3>
              <p className="text-paper-muted leading-relaxed">
                Automated 8283 forms and tax receipts. IRS-compliant documentation
                generated instantly.
              </p>
            </article>

            <article className="glass-card p-8 hover-lift">
              <h3 className="type-label mb-4 accent-text">
                ZERO CRYPTO KNOWLEDGE
              </h3>
              <p className="text-paper-muted leading-relaxed">
                Platform handles conversion, compliance, and reporting. Nonprofits
                get USD deposits.
              </p>
            </article>
          </div>
        </FadeIn>

        {/* CTA - Glass button */}
        <FadeIn delay={500} withDepth>
          <div>
            <Link
              href="https://digidov.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-block"
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
