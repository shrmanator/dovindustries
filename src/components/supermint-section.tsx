import Image from "next/image";
import Link from "next/link";

export function SuperMintSection() {
  return (
    <section id="supermint" className="section-padding grid-margin border-t border-border">
      <div className="max-w-7xl">
        {/* Status + Logo */}
        <div className="flex items-center justify-between stack">
          <div className="brutalist-chip">
            <span>ARCHIVED</span>
          </div>
          <span className="type-label text-paper-muted">WEB3 PLATFORM</span>
        </div>

        {/* Logo + Name */}
        <div className="stack-block flex items-center gap-6">
          <Image
            src="/images/supermint-logo-transparent-grey.png"
            alt="SuperMint"
            width={160}
            height={80}
            className="h-16 w-auto object-contain brightness-0 invert md:h-20"
            style={{ width: 'auto' }}
          />
        </div>

        {/* Product statement */}
        <div className="stack-block">
          <h2 className="type-display-lg max-w-4xl">
            NFT GIFTS FOR DONATIONS
          </h2>
        </div>

        {/* Lead description */}
        <div className="max-w-3xl stack-block">
          <p className="type-body-lg text-paper-muted">
            Charities give NFTs as gifts when donors contribute.
          </p>
        </div>

        {/* Feature grid - editorial rhythm */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-16 stack-block">
          <div>
            <h3 className="type-label mb-4 accent-text">NFT GIFTS</h3>
            <p className="text-paper-muted leading-relaxed">
              Charities reward donors with unique NFT gifts for their contributions.
            </p>
          </div>
          <div>
            <h3 className="type-label mb-4 accent-text">SIMPLE MINTING</h3>
            <p className="text-paper-muted leading-relaxed">
              Platform handled NFT creation and distribution. Charities managed campaigns without blockchain expertise.
            </p>
          </div>
          <div>
            <h3 className="type-label mb-4 accent-text">DONOR ENGAGEMENT</h3>
            <p className="text-paper-muted leading-relaxed">
              Digital collectibles as thank-you gifts to recognize and engage supporters.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Link
            href="https://supermint.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-border inline-block px-8 py-4 type-label hover:bg-accent hover:text-ink transition-all"
          >
            VISIT SUPERMINT →
          </Link>
        </div>
      </div>
    </section>
  );
}
