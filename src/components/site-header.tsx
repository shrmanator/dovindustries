import Link from "next/link";

const navItems = [
  { label: "[WORK]", href: "#work" },
  { label: "[CAPABILITIES]", href: "#capabilities" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-white bg-black">
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-black uppercase hover:text-accent"
        >
          DOVINDUSTRIES
        </Link>
        <nav className="flex items-center gap-6 text-sm uppercase">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
