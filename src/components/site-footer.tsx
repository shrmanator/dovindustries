import { ExternalLink } from "./external-link";
import Link from "next/link";
type SiteFooterProps = { homeHref?: string; invitation?: string; description?: string };

export function SiteFooter({ homeHref = "/", invitation = "Work with us.",
  description = "For research collaboration or enquiries about our products." }: SiteFooterProps) {
  return <footer id="contact" className="site-footer" data-flow-scene="contact">
      <div className="container">
        <div className="footer-intro">
          <div className="footer-invitation"><h2>{invitation}</h2><p>{description}</p></div>
          <a className="text-link contact-link" href="mailto:contact@dovindustries.com">contact@dovindustries.com</a>
        </div>
        <div className="footer-bottom"><Link href={homeHref} className="footer-brand">dovindustries</Link><span>© {new Date().getFullYear()}</span><ExternalLink href="https://github.com/shrmanator">GitHub</ExternalLink></div>
      </div>
    </footer>;
}
