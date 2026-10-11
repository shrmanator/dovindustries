import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
type SiteHeaderProps = { homeHref?: string; researchHref?: string; workHref?: string; markSrc?: string };

export function SiteHeader({ homeHref = "/", researchHref = "#research", workHref = "#work", markSrc = "/images/bear-mark.webp" }: SiteHeaderProps) {
  const navigation = [
    { label: "Work", href: workHref },
    { label: "Research", href: researchHref },
    { label: "Contact", href: "#contact" },
  ];
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="container header-inner">
        <Link href={homeHref} className="brand" aria-label="Dovindustries home">
          <Image src={markSrc} alt="" width={38} height={38} priority />
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
