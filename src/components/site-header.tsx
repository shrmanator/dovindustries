import Image from "next/image";
import Link from "next/link";

const productNav = [
  { label: "DigiDov", href: "#digidov" },
  { label: "VR", href: "#vr" },
  { label: "Transport", href: "#transport" },
  { label: "SuperMint", href: "#supermint" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-ink backdrop-blur-sm">
      <div className="grid-margin flex items-center justify-between py-4 md:py-6">
        <Link
          href="/"
          className="hover:opacity-70 transition-opacity duration-200"
        >
          <Image
            src="/images/dovindustries-bear-white-transparent.png"
            alt="Dovindustries"
            width={80}
            height={80}
            className="h-12 w-auto object-contain md:h-16"
          />
        </Link>
        <nav className="flex items-center gap-2 text-[0.65rem] md:text-[0.75rem] md:gap-8">
          {productNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-accent transition-colors duration-200 uppercase tracking-wider font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
