export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 grid-margin section-padding">
      <div className="max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 stack-block">
          {/* Company info */}
          <div>
            <div className="text-[8vw] md:text-[5vw] lg:text-[clamp(3rem,5vw,5rem)] font-bold leading-[1] tracking-tight uppercase">
              DOVINDUSTRIES
            </div>
          </div>

          {/* Contact - Glass card */}
          <div className="glass-card-subtle p-6 hover-lift">
            <p className="type-label text-accent stack">
              CONNECT
            </p>
            <nav className="flex flex-col gap-4">
              <a
                href="mailto:contact@dovindustries.com"
                className="type-body-lg hover:text-accent transition-all duration-300 relative group inline-block w-fit"
              >
                contact@dovindustries.com
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="https://github.com/shrmanator"
                target="_blank"
                rel="noopener noreferrer"
                className="type-body-lg hover:text-accent transition-all duration-300 relative group inline-block w-fit"
              >
                GitHub
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </nav>
          </div>
        </div>

        {/* Legal / Meta */}
        <div className="border-t border-white/5 pt-8">
          <p className="type-label text-paper-muted">
            © {currentYear} DOVINDUSTRIES
          </p>
        </div>
      </div>
    </footer>
  );
}
