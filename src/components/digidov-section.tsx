import Image from "next/image";
import Link from "next/link";

export function DigiDovSection() {
  return (
    <section id="digidov" className="section-padding grid-margin border-t border-border">
      <div className="max-w-7xl">
        {/* Status + Logo */}
        <div className="flex items-center justify-between stack">
          <div className="brutalist-chip">
            <span className="status-indicator h-2 w-2 rounded-full bg-accent" />
            <span>LIVE</span>
          </div>
          <span className="type-label text-paper-muted">CRYPTO PLATFORM</span>
        </div>

        {/* Logo + Name */}
        <div className="stack-block flex items-center gap-6">
          <Image
            src="/images/digidov-logo-transparent-white.png"
            alt="DigiDov"
            width={160}
            height={80}
            className="h-16 w-auto object-contain brightness-0 invert md:h-20"
            style={{ width: 'auto' }}
          />
        </div>

        {/* Product statement */}
        <div className="stack-block">
          <h2 className="type-display-lg max-w-4xl">
            CRYPTO DONATIONS FOR NONPROFITS
          </h2>
        </div>

        {/* Lead description */}
        <div className="max-w-3xl stack-block">
          <p className="type-body-lg text-paper-muted">
            Crypto in, tax receipts out. IRS forms auto-generated. No crypto knowledge needed.
          </p>
        </div>

        {/* Feature grid - editorial rhythm */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-16 stack-block">
          <div>
            <h3 className="type-label mb-4 accent-text">ACCEPTS CRYPTO</h3>
            <p className="text-paper-muted leading-relaxed">
              Nonprofits accept crypto donations without managing wallets or private keys.
            </p>
          </div>
          <div>
            <h3 className="type-label mb-4 accent-text">TAX COMPLIANCE</h3>
            <p className="text-paper-muted leading-relaxed">
              Automated 8283 forms and tax receipts. IRS-compliant documentation generated instantly.
            </p>
          </div>
          <div>
            <h3 className="type-label mb-4 accent-text">ZERO CRYPTO KNOWLEDGE</h3>
            <p className="text-paper-muted leading-relaxed">
              Platform handles conversion, compliance, and reporting. Nonprofits get USD deposits.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Link
            href="https://digidov.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-border inline-block px-8 py-4 type-label hover:bg-accent hover:text-ink transition-all"
          >
            VISIT DIGIDOV →
          </Link>
        </div>
      </div>
    </section>
  );
}
