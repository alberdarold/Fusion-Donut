import Link from "next/link";
import AuthNav from "./AuthNav";

const navLinks = [
  { href: "/news", label: "News" },
  { href: "/community", label: "Community" },
  { href: "/members", label: "Members" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-400">⚛</span>
            <span className="text-xl font-bold tracking-tight text-white">FusionHub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <AuthNav />
        </div>
      </div>
    </header>
  );
}
