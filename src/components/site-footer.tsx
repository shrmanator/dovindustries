import { ExternalLink } from "./external-link";
import Link from "next/link";
export function SiteFooter({ homeHref = "/" }: { homeHref?: string }) {
  return <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-intro">
          <div className="footer-invitation"><h2>Work with us.</h2><p>For research collaboration or enquiries about our products.</p></div>
          <a className="text-link contact-link" href="mailto:contact@dovindustries.com">contact@dovindustries.com</a>
        </div>
        <div className="footer-bottom"><Link href={homeHref} className="footer-brand">dovindustries</Link><span>© {new Date().getFullYear()}</span><ExternalLink href="https://github.com/shrmanator">GitHub</ExternalLink></div>
      </div>
    </footer>;
}
