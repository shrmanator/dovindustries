import Image from "next/image";
import { ExternalLink } from "./external-link";
import { DonationIllustration } from "./donation-illustration";
import { VibeDrawProject } from "./vibe-draw-project";
export function WorkSection({ showBearConcept = false }: { showBearConcept?: boolean }) {
  return <section id="work" className={`section container work-section${showBearConcept ? " work-continuation" : ""}`} aria-label="Projects">
    <VibeDrawProject showBearConcept={showBearConcept} />
    <div className="section-intro">
      <h2 id="released-projects" className="section-title released-projects-title">Released projects.</h2>
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
        <aside id="supermint" className="project-history" aria-label="DigiDov origins">
          <p>DigiDov grew out of SuperMint, our earlier project pairing donations with digital collectibles.</p>
          <ExternalLink href="https://supermint.ca">Original SuperMint site</ExternalLink>
        </aside>
      </article>
    </div>
  </section>;
}
