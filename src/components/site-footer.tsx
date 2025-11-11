import { InteractiveCard } from "./interactive-card";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle grid-margin section-padding">
      <div className="max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 stack-block">
          {/* Company info */}
          <div>
            <div className="text-[8vw] md:text-[5vw] lg:text-[clamp(3rem,5vw,5rem)] font-bold leading-[1] tracking-tight uppercase mb-6">
              <span className="inline-block hover:text-paper-muted transition-colors duration-700">
                DOV
              </span>
              <span className="inline-block opacity-80">INDUSTRIES</span>
            </div>
            <p className="type-label text-paper-muted max-w-md">
              Building the future of crypto adoption, VR locomotion, and urban mobility.
            </p>
          </div>

          {/* Contact card */}
          <InteractiveCard>
            <div className="minimal-card p-8 h-full">
              <p className="type-label text-paper mb-6">
                CONNECT
              </p>
              <nav className="flex flex-col gap-4">
                <a
                  href="mailto:contact@dovindustries.com"
                  className="type-body-lg text-paper hover:text-paper-muted transition-all duration-300 relative group inline-block w-fit"
                >
                  contact@dovindustries.com
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-paper transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="https://github.com/shrmanator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body-lg text-paper hover:text-paper-muted transition-all duration-300 relative group inline-block w-fit"
                >
                  GitHub
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-paper transition-all duration-300 group-hover:w-full" />
                </a>
              </nav>
            </div>
          </InteractiveCard>
        </div>

        {/* Legal / Meta */}
        <div className="border-t border-white/5 pt-8 flex flex-wrap gap-4 justify-between items-center">
          <p className="type-label text-paper-muted">
            © {currentYear} DOVINDUSTRIES
          </p>
          <div className="flex gap-3">
            <span className="status-badge">TORONTO</span>
            <span className="status-badge">REMOTE-FIRST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
