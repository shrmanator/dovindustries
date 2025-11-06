import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";
import { InteractiveCard } from "./interactive-card";

export function DigiDovSection() {
  return (
    <section
      id="digidov"
      className="section-padding grid-margin border-t border-white/5 relative overflow-hidden"
      aria-labelledby="digidov-heading"
    >
      {/* Background accent gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl relative z-10">
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
            <div className="glass-card-subtle p-4 hover:scale-105 transition-transform duration-500">
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

        {/* Feature bento grid - premium asymmetric layout */}
        <FadeIn delay={400} slideFrom="left">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 stack-block">
            {/* Featured card - spans 4 columns, taller */}
            <InteractiveCard className="md:col-span-4 md:row-span-2">
              <article className="glass-accent p-8 md:p-10 h-full card-3d">
                <h3 className="type-label mb-6 text-accent">ACCEPTS CRYPTO</h3>
                <p className="text-paper leading-relaxed text-lg mb-6">
                  Nonprofits accept crypto donations without managing wallets or
                  private keys. Platform handles all blockchain complexity.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="glass-chip text-xs">BTC</span>
                  <span className="glass-chip text-xs">ETH</span>
                  <span className="glass-chip text-xs">USDC</span>
                  <span className="glass-chip text-xs">+20 MORE</span>
                </div>
              </article>
            </InteractiveCard>

            {/* Stacked cards */}
            <InteractiveCard className="md:col-span-2">
              <article className="glass-card p-6 md:p-8 h-full spring-hover">
                <h3 className="type-label mb-4 accent-text">TAX COMPLIANCE</h3>
                <p className="text-paper-muted leading-relaxed">
                  Automated 8283 forms and tax receipts. IRS-compliant documentation
                  generated instantly.
                </p>
              </article>
            </InteractiveCard>

            <InteractiveCard className="md:col-span-2">
              <article className="glass-card p-6 md:p-8 h-full spring-hover">
                <h3 className="type-label mb-4 accent-text">
                  ZERO CRYPTO KNOWLEDGE
                </h3>
                <p className="text-paper-muted leading-relaxed">
                  Platform handles conversion, compliance, and reporting. Nonprofits
                  get USD deposits.
                </p>
              </article>
            </InteractiveCard>
          </div>
        </FadeIn>

        {/* CTA - Premium glass button */}
        <FadeIn delay={500} withDepth>
          <div>
            <Link
              href="https://digidov.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-block group"
              aria-label="Visit DigiDov crypto donation platform"
            >
              <span className="relative z-10">VISIT DIGIDOV →</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
