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
  reverse?: boolean;
};

export function StudioProject({ id, name, purpose, detail, href, destination, art, reverse }: StudioProjectProps) {
  return <article id={id} className={`studio-project studio-project-${id}${reverse ? " studio-project-reverse" : ""}`}
    aria-labelledby={`${id}-title`}>
    <div className="studio-project-intro">
      <h3 id={`${id}-title`}>{name}</h3>
      <p>{purpose}</p>
    </div>
    <a className="studio-project-art" href={href} target="_blank" rel="noopener noreferrer"
      aria-label={`${destination} (opens in a new tab)`}>{art}</a>
    <div className="studio-project-detail">
      <p>{detail}</p>
      <ExternalLink href={href}>{destination}</ExternalLink>
    </div>
  </article>;
}
