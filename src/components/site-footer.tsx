import { ExternalLink } from "./external-link";
import Link from "next/link";
export function SiteFooter() {
  return <>
    <aside id="supermint" className="history container" aria-label="Earlier work">
      <div><h2>Before DigiDov, there was SuperMint.</h2><p>Our earlier project paired donations with digital collectibles. Its donation technology became the foundation for DigiDov.</p></div>
      <ExternalLink href="https://supermint.ca">Original SuperMint site</ExternalLink>
    </aside>
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-intro"><h2>Have something in mind?</h2><a className="text-link contact-link" href="mailto:contact@dovindustries.com">contact@dovindustries.com</a></div>
        <div className="footer-bottom"><Link href="/" className="footer-brand">dovindustries</Link><span>© {new Date().getFullYear()}</span><ExternalLink href="https://github.com/shrmanator">GitHub</ExternalLink></div>
      </div>
    </footer>
  </>;
}
