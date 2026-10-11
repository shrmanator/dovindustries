import type { ReactNode } from "react";
export function LinkIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" />
  </svg>;
}
export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
    {children}<LinkIcon /><span className="visually-hidden"> (opens in a new tab)</span>
  </a>;
}
