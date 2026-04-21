import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

const productNav = [
  { label: "Simply Sefer", href: "#simplysefer" },
  { label: "DigiDov", href: "#digidov" },
  { label: "VR", href: "#vr" },
  { label: "Transport", href: "#transport" },
  { label: "SuperMint", href: "#supermint" },
];

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

const getRevealStyle = (delay: number): RevealStyle => ({
  "--reveal-delay": `${delay}ms`,
});

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-subtle bg-ink/95 backdrop-blur-sm">
      <div className="grid-margin flex items-center justify-between py-4 md:py-6">
        <Link
          href="/"
          aria-label="Dovindustries home"
          className="header-reveal inline-flex transition-opacity duration-300 hover:opacity-70"
          style={getRevealStyle(0)}
        >
          <Image
            src="/images/dovindustries-bear-white-transparent.png"
            alt="Dovindustries"
            width={80}
            height={80}
            priority
            className="h-12 w-auto object-contain md:h-16"
          />
        </Link>
        <nav
          aria-label="Primary"
          className="flex max-w-[20rem] flex-wrap items-center justify-end gap-x-2 gap-y-1 text-[0.65rem] md:max-w-none md:gap-x-8 md:gap-y-2 md:text-[0.75rem]"
        >
          {productNav.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="header-reveal group relative font-semibold uppercase tracking-wider text-paper transition-colors duration-300 hover:text-paper/70"
              style={getRevealStyle(100 + index * 50)}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-paper transition-[width] duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

