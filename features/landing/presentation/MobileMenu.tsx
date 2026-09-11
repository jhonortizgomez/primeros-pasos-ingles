"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  ["Choose Class", "#choose-class"],
  ["AI Assistant", "#why-eskolica"],
  ["Blog", "#why-eskolica"],
  ["Prize List", "#why-eskolica"],
  ["Instruction", "#about"],
  ["Join Team", "#why-eskolica"],
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      {isOpen && (
        <div className="mobile-navigation" id="mobile-navigation">
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setIsOpen(false)}>{label}</Link>
            ))}
            <Link className="mobile-login" href="#login" onClick={() => setIsOpen(false)}>Login</Link>
          </nav>
        </div>
      )}
    </div>
  );
}