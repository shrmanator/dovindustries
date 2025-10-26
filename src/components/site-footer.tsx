export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-white bg-black px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="text-4xl font-black uppercase">
            DOVINDUSTRIES
          </div>
        </div>
        <div>
          <div className="mb-6 text-sm text-accent uppercase font-bold">
            [CONNECT]
          </div>
          <nav className="flex flex-col gap-3 text-lg">
            <a href="mailto:contact@dovindustries.com" className="hover:text-accent uppercase">
              → CONTACT@DOVINDUSTRIES.COM
            </a>
            <a
              href="https://github.com/shrmanator"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent uppercase"
            >
              → GITHUB
            </a>
          </nav>
        </div>
      </div>
      <div className="mt-16 border-t-4 border-white pt-8">
        <p className="text-sm">
          © {currentYear} DOVINDUSTRIES — FORWARD_THINKING / BACKWARD_COMPATIBLE
        </p>
      </div>
    </footer>
  );
}
