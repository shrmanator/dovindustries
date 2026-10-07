import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
const navigation = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];
export function SiteHeader() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Dovindustries home">
          <Image src="/images/bear-mark.webp" alt="" width={38} height={38} priority />
          <span>dovindustries</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {navigation.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <MobileNav links={navigation} />
      </div>
    </header>
  </>;
}
