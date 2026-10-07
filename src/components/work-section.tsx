import Image from "next/image";
import { ExternalLink } from "./external-link";
import { DonationIllustration } from "./donation-illustration";
export function WorkSection() {
  return <section id="work" className="section container" aria-labelledby="work-title">
    <div className="section-intro">
      <h2 id="work-title" className="section-title">Live projects.</h2>
      <p>A marketplace for seforim. A platform for crypto donations.</p>
    </div>
    <div className="work-grid">
      <article id="simplysefer" className="work-project">
        <a className="project-visual sefer-visual" href="https://simplysefer.com" target="_blank"
          rel="noopener noreferrer" aria-label="Explore simplysefer.com (opens in a new tab)">
          <div className="website-frame">
            <div className="website-bar" aria-hidden="true"><i /><i /><i /><span>simplysefer.com</span></div>
            <Image src="/images/simplysefer-marketplace.webp"
              alt="Simply Sefer marketplace showing a featured collection and seforim listings"
              width={1280} height={720} sizes="(max-width: 700px) 90vw, 44vw" />
          </div>
        </a>
        <div className="project-heading"><h3>Simply Sefer</h3><span className="status"><i className="status-dot" />Live</span></div>
        <p className="project-description">A marketplace for seforim and Judaica. Buy, sell, and find your next sefer, with photo identification to help along the way.</p>
        <ExternalLink href="https://simplysefer.com">Explore the marketplace</ExternalLink>
      </article>
      <article id="digidov" className="work-project">
        <div className="project-visual donation-visual">
          <DonationIllustration />
        </div>
        <div className="project-heading"><h3>DigiDov</h3><span className="status"><i className="status-dot" />Live</span></div>
        <p className="project-description">Crypto donations, donor receipts, and documentation in one workflow. Built for organizations receiving digital contributions.</p>
        <ExternalLink href="https://digidov.com/login">Sign in to DigiDov</ExternalLink>
      </article>
    </div>
  </section>;
}
