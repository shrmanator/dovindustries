import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

export function SuperMintSection() {
  return (
    <section id="supermint" className="section-padding grid-margin border-t border-subtle relative">
      {/* Dimmed overlay for archived state */}
      <div className="absolute inset-0 bg-ink/30 pointer-events-none" />

      <div className="max-w-7xl relative z-10">
        {/* Status + Label */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="status-badge opacity-60">
              <span className="type-label text-paper-muted">ARCHIVED</span>
            </div>
            <span className="type-label text-paper-muted opacity-60">WEB3 PLATFORM</span>
          </div>
        </FadeIn>

        {/* Logo */}
        <FadeIn delay={100}>
          <div className="stack-block opacity-70">
            <Image
              src="/images/supermint-logo-transparent-grey.png"
              alt="SuperMint"
              width={160}
              height={80}
              className="h-16 w-auto object-contain brightness-0 invert md:h-20 opacity-60"
              style={{ width: 'auto' }}
            />
          </div>
        </FadeIn>

        {/* Product statement */}
        <FadeIn delay={200}>
          <div className="stack-block">
            <h2 className="type-display-lg max-w-4xl opacity-60">
              NFT GIFTS FOR DONATIONS
            </h2>
          </div>
        </FadeIn>

        {/* Lead description */}
        <FadeIn delay={300}>
          <div className="max-w-3xl stack-block">
            <div className="minimal-card opacity-70">
              <p className="type-body-lg text-paper-muted">
                Charities gave NFTs as gifts when donors contributed. Platform evolved into DigiDov.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Feature grid - subtle for archived */}
        <FadeIn delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 stack-block">
            <article className="minimal-card opacity-70 h-full">
              <h3 className="type-label mb-4 text-paper-muted">NFT REWARDS</h3>
              <p className="text-paper-muted leading-relaxed text-sm">
                Unique digital collectibles minted on-chain for donor recognition and engagement.
              </p>
            </article>

            <article className="minimal-card opacity-70 h-full">
              <h3 className="type-label mb-4 text-paper-muted">NO-CODE MINTING</h3>
              <p className="text-paper-muted leading-relaxed text-sm">
                Charities created and distributed NFTs without blockchain knowledge or technical expertise.
              </p>
            </article>

            <article className="minimal-card opacity-70 h-full">
              <h3 className="type-label mb-4 text-paper-muted">ENGAGEMENT</h3>
              <p className="text-paper-muted leading-relaxed text-sm">
                Digital assets as thank-you gifts to recognize and build lasting donor relationships.
              </p>
            </article>
          </div>
        </FadeIn>

        {/* Evolution note */}
        <FadeIn delay={450}>
          <div className="minimal-card-emphasis beam-gray opacity-80 stack-block">
            <p className="type-label text-paper mb-2">EVOLUTION</p>
            <p className="text-paper-muted">
              SuperMint&#39;s crypto donation technology evolved into DigiDov, focusing on tax compliance
              and broader cryptocurrency acceptance for nonprofits.
            </p>
          </div>
        </FadeIn>

        {/* CTA - Subtle for archived */}
        <FadeIn delay={500}>
          <div className="stack-block">
            <Link
              href="https://supermint.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-button opacity-60 hover:opacity-80"
            >
              VIEW ARCHIVE →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
