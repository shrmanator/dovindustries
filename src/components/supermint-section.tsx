import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

export function SuperMintSection() {
  return (
    <section id="supermint" className="section-padding grid-margin border-t border-white/5">
      <div className="max-w-7xl">
        {/* Status + Logo */}
        <FadeIn>
          <div className="flex items-center justify-between stack">
            <div className="glass-chip">
              <span>ARCHIVED</span>
            </div>
            <span className="type-label text-paper-muted">WEB3 PLATFORM</span>
          </div>
        </FadeIn>

        {/* Logo + Name */}
        <FadeIn delay={100} slideFrom="left" withScale>
          <div className="stack-block flex items-center gap-6">
            <Image
              src="/images/supermint-logo-transparent-grey.png"
              alt="SuperMint"
              width={160}
              height={80}
              className="h-16 w-auto object-contain brightness-0 invert md:h-20 opacity-70"
              style={{ width: 'auto' }}
            />
          </div>
        </FadeIn>

        {/* Product statement */}
        <FadeIn delay={200}>
          <div className="stack-block">
            <h2 className="type-display-lg max-w-4xl opacity-80">
              NFT GIFTS FOR DONATIONS
            </h2>
          </div>
        </FadeIn>

        {/* Lead description */}
        <FadeIn delay={300}>
          <div className="max-w-3xl stack-block">
            <p className="type-body-lg text-paper-muted">
              Charities give NFTs as gifts when donors contribute.
            </p>
          </div>
        </FadeIn>

        {/* Feature bento grid - asymmetric layout */}
        <FadeIn delay={400} slideFrom="right">
          <div className="bento-grid-asymmetric stack-block">
            <article className="glass-card p-8 hover-lift opacity-90">
              <h3 className="type-label mb-4 accent-text">NFT GIFTS</h3>
              <p className="text-paper-muted leading-relaxed">
                Charities reward donors with unique NFT gifts for their contributions.
              </p>
            </article>

            <article className="glass-card p-8 bento-span-2 hover-lift opacity-90">
              <h3 className="type-label mb-4 accent-text">SIMPLE MINTING</h3>
              <p className="text-paper-muted leading-relaxed">
                Platform handled NFT creation and distribution. Charities managed campaigns without blockchain expertise.
              </p>
            </article>

            <article className="glass-card p-8 hover-lift opacity-90">
              <h3 className="type-label mb-4 accent-text">DONOR ENGAGEMENT</h3>
              <p className="text-paper-muted leading-relaxed">
                Digital collectibles as thank-you gifts to recognize and engage supporters.
              </p>
            </article>
          </div>
        </FadeIn>

        {/* CTA - Glass button */}
        <FadeIn delay={500} withDepth>
          <div>
            <Link
              href="https://supermint.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-block opacity-80 hover:opacity-100"
            >
              VISIT SUPERMINT →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
