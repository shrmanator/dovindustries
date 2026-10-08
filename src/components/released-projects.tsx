import Image from "next/image";
import { ExternalLink } from "./external-link";

export function ReleasedProjects() {
  return <div className="released-projects">
    <article id="simplysefer" className="work-project">
      <a className="project-visual sefer-visual" href="https://simplysefer.com" target="_blank"
        rel="noopener noreferrer" aria-label="Explore simplysefer.com (opens in a new tab)">
        <Image src="/images/simplysefer-listings.jpg"
          alt="Books, prices, and listing details in the Simply Sefer marketplace"
          width={490} height={435} sizes="(max-width: 800px) 90vw, 50vw" />
      </a>
      <div className="project-copy">
        <div className="project-heading"><h3>Simply Sefer</h3></div>
        <p className="project-description">A marketplace for seforim and Judaica.</p>
        <p className="project-detail">Identify a sefer from a photo, find a copy, or list one from your shelf.</p>
        <ExternalLink href="https://simplysefer.com">Explore the marketplace</ExternalLink>
      </div>
    </article>
    <article id="digidov" className="work-project">
      <a className="project-visual digidov-visual" href="https://www.digidov.com/" target="_blank"
        rel="noopener noreferrer" aria-label="Explore DigiDov (opens in a new tab)">
        <Image src="/images/digidov-introduction.jpg" alt="DigiDov’s public introduction to crypto donations and automatic donor receipts"
          width={890} height={470} sizes="(max-width: 800px) 90vw, 50vw" />
      </a>
      <div className="project-copy">
        <div className="project-heading"><h3>DigiDov</h3></div>
        <p className="project-description">Crypto donations for nonprofits, with automatic donor receipts.</p>
        <ExternalLink href="https://www.digidov.com/">Explore DigiDov</ExternalLink>
        <aside id="supermint" className="project-history" aria-label="DigiDov origins">
          <p>Built on the donation technology behind our earlier project, SuperMint.</p>
          <ExternalLink href="https://supermint.ca">Original SuperMint site</ExternalLink>
        </aside>
      </div>
    </article>
  </div>;
}
