"use client";
import { useEffect, useRef, useState } from "react";
export function MobileNav({ links }: { links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); button.current?.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 701px)");
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", close);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  return <div className="mobile-nav">
    <button ref={button} type="button" className="menu-toggle" aria-expanded={open}
      aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
      <span>{open ? "Close" : "Menu"}</span>
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className={open ? "menu-icon is-open" : "menu-icon"}>
        <path d="M3 7h14M3 13h14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </button>
    <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!open}>
      {links.map(({ label, href }) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </div>;
}
