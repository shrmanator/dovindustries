import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

export function DigiDovSection() {
  return (
    <section
      id="digidov"
      className="portfolio-section"
      aria-labelledby="digidov-heading"
    >
      <div className="max-w-7xl">
        <FadeIn>
          <div className="section-meta">
            <div className="status-badge status-badge-live">
              <span className="status-indicator status-indicator-live"></span>
              <span>LIVE</span>
            </div>
            <span className="type-label text-paper-muted">CRYPTO PLATFORM</span>
          </div>
        </FadeIn>

        {/* Split layout - balanced visual weight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 portfolio-stack-block">
          {/* Content side - more breathing room */}
          <div className="flex flex-col justify-center lg:py-8">
            <FadeIn delay={100}>
              <div className="mb-10">
                <Image
                  src="/images/digidov-logo-transparent-white.png"
                  alt="DigiDov"
                  width={240}
                  height={120}
                  className="h-20 w-auto object-contain brightness-0 invert md:h-24"
                />
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <h2 id="digidov-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-paper leading-[0.9] tracking-tight uppercase mb-6">
                Accept Crypto.<br />Skip the Complexity.
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="type-body-lg text-paper-muted mb-8 max-w-lg">
                Donors give crypto, you get dollars. Tax receipts sent automatically. 
                IRS forms generated. Zero crypto knowledge required.
              </p>
            </FadeIn>

            <FadeIn delay={250}>
              {/* Separated badges - currencies vs compliance */}
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex flex-wrap gap-2">
                  <span className="status-badge">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    USDC
                  </span>
                  <span className="status-badge">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    ETH
                  </span>
                  <span className="status-badge">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    BTC
                  </span>
                </div>
                <p className="type-label text-paper-muted">IRS 8283 COMPLIANT</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <Link
                href="https://digidov.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-button w-fit"
                aria-label="Explore DigiDov platform"
              >
                EXPLORE DIGIDOV
              </Link>
            </FadeIn>
          </div>

          {/* Visual side - integrated floating card */}
          <FadeIn delay={200} slideFrom="right">
            <div className="relative lg:py-4">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/digidov-mockup.jpg"
                  alt="DigiDov dashboard showing crypto donation management"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stat - overlaps image and extends below */}
              <div className="absolute -bottom-6 left-4 md:left-8 bg-ink border border-cyan-500/30 rounded-lg p-5 shadow-2xl">
                <p className="type-label text-cyan-400 mb-1">CONVERSION</p>
                <p className="text-3xl font-bold text-paper mono">USD in 24h</p>
                <p className="text-paper-muted text-sm mt-1">Crypto to bank account</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Feature row - visually distinct cards */}
        <FadeIn delay={350}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <article className="minimal-card flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
              </div>
              <h3 className="type-label mb-2 text-paper">NO WALLET NEEDED</h3>
              <p className="text-paper-muted leading-relaxed text-sm">
                Accept donations without managing wallets, keys, or exchanges.
              </p>
            </article>

            <article className="minimal-card flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="type-label mb-2 text-paper">AUTO TAX RECEIPTS</h3>
              <p className="text-paper-muted leading-relaxed text-sm">
                Donors receive receipts instantly. IRS 8283 forms generated automatically.
              </p>
            </article>

            <article className="minimal-card-emphasis beam-cyan flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="type-label text-paper">DIGIDOV CASH</h3>
                <span className="accent-badge">NEW</span>
              </div>
              <p className="text-paper-muted text-sm mb-2">Direct to your bank</p>
              <p className="text-2xl font-bold text-paper">No Volatility</p>
              <p className="text-paper-muted leading-relaxed text-sm mt-2">
                Receive stable USD regardless of crypto market swings.
              </p>
            </article>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
