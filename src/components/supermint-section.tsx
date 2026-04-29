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
            <div className="status-badge opacity-60">
              <span className="type-label text-paper-muted">ARCHIVED</span>
            </div>
            <span className="type-label text-paper-muted opacity-60">WEB3 PLATFORM</span>
          </div>
        </FadeIn>

        {/* Compact horizontal layout for archived project */}
        <FadeIn delay={100}>
          <div className="minimal-card opacity-80 portfolio-stack-block">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Logo and title */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/supermint-logo-transparent-grey.png"
                  alt="SuperMint"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain brightness-0 invert opacity-60"
                />
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <h2 id="supermint-heading" className="text-2xl md:text-3xl font-bold text-paper opacity-70 mb-2">
                  NFT Gifts for Donations
                </h2>
                <p className="text-paper-muted leading-relaxed">
                  Charities gave NFTs as gifts when donors contributed. Platform evolved into DigiDov.
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <Link
                  href="https://supermint.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="minimal-button opacity-60 hover:opacity-80 text-sm"
                >
                  VIEW ARCHIVE
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Collapsed feature summary */}
        <FadeIn delay={150}>
          <div className="flex flex-wrap gap-3 opacity-60">
            <span className="status-badge">NFT REWARDS</span>
            <span className="status-badge">NO-CODE MINTING</span>
            <span className="status-badge">DONOR ENGAGEMENT</span>
            <span className="text-paper-muted type-label flex items-center">
              EVOLVED INTO DIGIDOV
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
