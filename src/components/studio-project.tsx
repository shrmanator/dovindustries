import type { ReactNode } from "react";
import { ExternalLink } from "./external-link";

type StudioProjectProps = {
  id: string;
  name: string;
  purpose: string;
  detail: string;
  href: string;
  destination: string;
  art: ReactNode;
};

export function StudioProject({ id, name, purpose, detail, href, destination, art }: StudioProjectProps) {
  return <article id={id} className={`studio-project studio-project-${id}`}
    aria-labelledby={`${id}-title`} data-flow-scene={id}>
    <div className="studio-project-intro">
      <h3 id={`${id}-title`}>{name}</h3>
      <p>{purpose}</p>
    </div>
    <div className="studio-project-frame" data-flow-anchor>
      <a className="studio-project-art" href={href} target="_blank" rel="noopener noreferrer"
        aria-label={`${destination} (opens in a new tab)`}>{art}</a>
    </div>
    <div className="studio-project-detail">
      <p>{detail}</p>
      <ExternalLink href={href}>{destination}</ExternalLink>
    </div>
  </article>;
}
