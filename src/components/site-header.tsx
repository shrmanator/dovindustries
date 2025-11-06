"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const productNav = [
  { label: "DigiDov", href: "#digidov" },
  { label: "VR", href: "#vr" },
  { label: "Transport", href: "#transport" },
  { label: "SuperMint", href: "#supermint" },
];

export function SiteHeader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="navigation-layer sticky top-0 liquid-glass-thick border-b border-white/5">
      <div className="grid-margin flex items-center justify-between py-4 md:py-6">
        <Link
          href="/"
          className={`hover:opacity-70 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-2 opacity-0 blur-sm"
          }`}
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
        <nav className="flex items-center gap-2 text-[0.65rem] md:text-[0.75rem] md:gap-8">
          {productNav.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative hover:text-accent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase tracking-wider font-semibold group ${
                isLoaded
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-2 opacity-0 blur-sm"
              }`}
              style={{
                transitionDelay: `${100 + index * 50}ms`,
              }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

