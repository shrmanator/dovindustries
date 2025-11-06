import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";
import { InteractiveCard } from "./interactive-card";

export function SuperMintSection() {
  return (
    <section id="supermint" className="section-padding grid-margin border-t border-white/5 relative">
      {/* Dimmed overlay for archived state */}
      <div className="absolute inset-0 bg-ink/30 pointer-events-none" />

      <div className="max-w-7xl relative z-10">
        {/* Status + Logo */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="liquid-glass-clear px-4 py-2 border border-white/5">
              <span className="type-label text-paper-muted/60 relative z-10">ARCHIVED</span>
            </div>
            <span className="type-label text-paper-muted/60">WEB3 PLATFORM</span>
          </div>
        </FadeIn>

        {/* Logo + Name */}
        <FadeIn delay={100} slideFrom="left" withScale>
          <div className="stack-block flex items-center gap-6">
            <div className="liquid-glass-clear p-4 opacity-70">
              <Image
                src="/images/supermint-logo-transparent-grey.png"
                alt="SuperMint"
                width={160}
                height={80}
                className="h-16 w-auto object-contain brightness-0 invert md:h-20 opacity-60 relative z-10"
                style={{ width: 'auto' }}
              />
            </div>
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
            <div className="liquid-glass-clear p-6">
              <p className="type-body-lg text-paper-muted/70 relative z-10">
                Charities gave NFTs as gifts when donors contributed. Platform evolved into DigiDov.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Feature bento grid - subtle for archived */}
        <FadeIn delay={400} slideFrom="right">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 stack-block">
            <InteractiveCard>
              <article className="liquid-glass-regular p-6 opacity-70 h-full glass-refraction">
                <h3 className="type-label mb-4 text-accent/70 relative z-10">NFT REWARDS</h3>
                <p className="text-paper-muted/70 leading-relaxed text-sm relative z-10">
                  Unique digital collectibles minted on-chain for donor recognition and engagement.
                </p>
              </article>
            </InteractiveCard>

            <InteractiveCard>
              <article className="liquid-glass-regular p-6 opacity-70 h-full glass-refraction">
                <h3 className="type-label mb-4 text-accent/70 relative z-10">NO-CODE MINTING</h3>
                <p className="text-paper-muted/70 leading-relaxed text-sm relative z-10">
                  Charities created and distributed NFTs without blockchain knowledge or technical expertise.
                </p>
              </article>
            </InteractiveCard>

            <InteractiveCard>
              <article className="liquid-glass-regular p-6 opacity-70 h-full glass-refraction">
                <h3 className="type-label mb-4 text-accent/70 relative z-10">ENGAGEMENT</h3>
                <p className="text-paper-muted/70 leading-relaxed text-sm relative z-10">
                  Digital assets as thank-you gifts to recognize and build lasting donor relationships.
                </p>
              </article>
            </InteractiveCard>
          </div>
        </FadeIn>

        {/* Evolution note */}
        <FadeIn delay={450}>
          <div className="liquid-glass-regular vibrancy-accent p-6 opacity-80 glass-refraction stack-block">
            <p className="type-label text-accent/80 mb-2 relative z-10">EVOLUTION</p>
            <p className="text-paper-muted/70 relative z-10">
              SuperMint's crypto donation technology evolved into DigiDov, focusing on tax compliance
              and broader cryptocurrency acceptance for nonprofits.
            </p>
          </div>
        </FadeIn>

        {/* CTA - Subtle for archived */}
        <FadeIn delay={500} withDepth>
          <div className="stack-block">
            <Link
              href="https://supermint.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-block opacity-60 hover:opacity-80"
            >
              VIEW ARCHIVE →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
