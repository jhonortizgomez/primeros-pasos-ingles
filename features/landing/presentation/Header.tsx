import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const links = [
  ["Choose Class", "#choose-class"],
  ["AI Assistant", "#why-eskolica"],
  ["Blog", "#why-eskolica"],
  ["Prize List", "#why-eskolica"],
  ["Instruction", "#about"],
  ["Join Team", "#why-eskolica"],
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
      <Link className="login-button" href="#login">Login</Link>
      <MobileMenu />
    </header>
  );
}