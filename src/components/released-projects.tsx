import Image from "next/image";
import { ExternalLink } from "./external-link";
import { DonationIllustration } from "./donation-illustration";

export function ReleasedProjects() {
  return <div className="released-projects">
    <article id="simplysefer" className="work-project">
      <a className="project-visual sefer-visual" href="https://simplysefer.com" target="_blank"
        rel="noopener noreferrer" aria-label="Explore simplysefer.com (opens in a new tab)">
        <Image src="/images/simplysefer-marketplace.webp"
          alt="Simply Sefer marketplace showing a featured collection and seforim listings"
          width={1280} height={720} sizes="(max-width: 800px) 90vw, 55vw" />
      </a>
      <div className="project-copy">
        <div className="project-heading"><h3>Simply Sefer</h3><span className="status"><i className="status-dot" />Live</span></div>
        <p className="project-description">Buy and sell seforim and Judaica, with photo identification to help you find a sefer.</p>
        <ExternalLink href="https://simplysefer.com">Explore the marketplace</ExternalLink>
      </div>
    </article>
    <article id="digidov" className="work-project">
      <div className="project-visual donation-visual"><DonationIllustration /></div>
      <div className="project-copy">
        <div className="project-heading"><h3>DigiDov</h3><span className="status"><i className="status-dot" />Live</span></div>
        <p className="project-description">Crypto donations and donor receipts in one workflow, built for organizations receiving digital contributions.</p>
        <ExternalLink href="https://digidov.com/login">Sign in to DigiDov</ExternalLink>
        <aside id="supermint" className="project-history" aria-label="DigiDov origins">
          <p>Built on the donation technology behind our earlier project, SuperMint.</p>
          <ExternalLink href="https://supermint.ca">Original SuperMint site</ExternalLink>
        </aside>
      </div>
    </article>
  </div>;
}
