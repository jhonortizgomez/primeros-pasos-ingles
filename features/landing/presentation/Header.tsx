import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const links = [
  ["Choose Class", "#choose-class"],
  ["Lesson Plans", "/lesson-plans"],
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="eŠkolica home">
        <span>Fundes</span>Discovery<span className="brand-dot">.</span>
      </Link>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
      </nav>
      <MobileMenu />
    </header>
  );
}