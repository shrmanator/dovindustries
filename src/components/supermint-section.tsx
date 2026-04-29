import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

export function SuperMintSection() {
  return (
    <section
      id="supermint"
      className="portfolio-section relative"
      aria-labelledby="supermint-heading"
    >
      {/* Dimmed overlay for archived state */}
      <div className="absolute inset-0 bg-ink/40 pointer-events-none" />

      <div className="max-w-7xl relative z-10">
        <FadeIn>
          <div className="section-meta">
            <div className="status-badge status-badge-archived">
              <span className="status-indicator status-indicator-archived"></span>
              <span>ARCHIVED</span>
            </div>
            <span className="type-label text-paper-muted opacity-60">WEB3 PLATFORM</span>
          </div>
        </FadeIn>

        {/* Compact horizontal layout for archived project */}
        <FadeIn delay={100}>
          <div className="minimal-card opacity-90 portfolio-stack-block">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Logo and title */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/supermint-logo-transparent-grey.png"
                  alt="SuperMint"
                  width={140}
                  height={70}
                  className="h-14 w-auto object-contain opacity-70"
                />
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <h2 id="supermint-heading" className="text-2xl md:text-3xl font-bold text-paper opacity-80 mb-2">
                  Web3 Donor Engagement
                </h2>
                <p className="text-paper-muted leading-relaxed">
                  NFT gifts for charitable donations. First product to validate the crypto-giving market, 
                  paving the way for DigiDov.
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <Link
                  href="https://supermint.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="minimal-button opacity-70 hover:opacity-90 text-sm"
                >
                  VIEW ARCHIVE
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Collapsed feature summary */}
        <FadeIn delay={150}>
          <div className="flex flex-wrap items-center gap-3 opacity-70">
            <span className="status-badge">NFT REWARDS</span>
            <span className="status-badge">NO-CODE MINTING</span>
            <span className="status-badge">DONOR ENGAGEMENT</span>
            <span className="inline-flex items-center gap-2 text-paper-muted type-label">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              EVOLVED INTO DIGIDOV
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
