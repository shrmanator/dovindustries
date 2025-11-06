"use client";

import { InteractiveCard } from "./interactive-card";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 grid-margin section-padding relative overflow-x-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl relative z-10">
        <div className="grid gap-12 md:grid-cols-2 stack-block">
          {/* Company info */}
          <div>
            <div className="text-[8vw] md:text-[5vw] lg:text-[clamp(3rem,5vw,5rem)] font-bold leading-[1] tracking-tight uppercase mb-6">
              <span className="inline-block hover:text-accent transition-colors duration-700">
                DOV
              </span>
              <span className="inline-block opacity-80">INDUSTRIES</span>
            </div>
            <p className="type-label text-paper-muted max-w-md">
              Building the future of crypto adoption, VR locomotion, and urban mobility.
            </p>
          </div>

          {/* Contact - Premium glass card */}
          <InteractiveCard>
            <div className="liquid-glass-regular vibrancy-accent p-8 spring-hover h-full glass-refraction">
              <p className="type-label text-accent mb-6 relative z-10">
                CONNECT
              </p>
              <nav className="flex flex-col gap-4 relative z-10">
                <a
                  href="mailto:contact@dovindustries.com"
                  className="type-body-lg hover:text-accent transition-all duration-300 relative group inline-block w-fit"
                >
                  contact@dovindustries.com
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="https://github.com/shrmanator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body-lg hover:text-accent transition-all duration-300 relative group inline-block w-fit"
                >
                  GitHub
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
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
            <span className="liquid-glass-clear px-3 py-1 text-xs">TORONTO</span>
            <span className="liquid-glass-clear px-3 py-1 text-xs">REMOTE-FIRST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
