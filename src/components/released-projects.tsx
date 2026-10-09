import Image from "next/image";
import { ExternalLink } from "./external-link";
import { DigiDovProject } from "./digidov-project";

export function ReleasedProjects() {
  return <div className="released-projects">
    <article id="simplysefer" className="work-project">
      <div className="project-heading"><h3>Simply Sefer</h3></div>
      <a className="project-visual sefer-visual" href="https://simplysefer.com" target="_blank"
        rel="noopener noreferrer" aria-label="Explore simplysefer.com (opens in a new tab)">
        <Image src="/images/art-sefer-exchange-v3.webp"
          alt="Painterly study of a worn burgundy sefer being passed between two readers"
          width={1448} height={1086} sizes="(max-width: 800px) 90vw, 50vw" />
      </a>
      <div className="project-copy">
        <p className="project-description">A marketplace for seforim and Judaica.</p>
        <p className="project-detail">Identify a sefer from a photo, find a copy, or list one from your shelf.</p>
        <ExternalLink href="https://simplysefer.com">Explore the marketplace</ExternalLink>
      </div>
    </article>
    <DigiDovProject />
  </div>;
}
