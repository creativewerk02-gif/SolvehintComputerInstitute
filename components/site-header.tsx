"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  ["Courses", "/courses"],
  ["Virtual class", "/virtual-class"],
  ["About", "/about"],
  ["LMS", "/lms"],
  ["Testimonials", "/testimonials"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="SolveHint Computer Institute home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">S</span>
          <span>
            <strong>SolveHint</strong>
            <small>Computer Institute</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="button button-small header-cta" href="/register">Register now <span aria-hidden="true">↗</span></Link>
        <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span className="sr-only">{isOpen ? "Close" : "Open"} navigation</span>
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-navigation" className="mobile-nav shell" aria-label="Mobile navigation">
          {navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setIsOpen(false)}>{label}</Link>)}
          <Link className="button" href="/register" onClick={() => setIsOpen(false)}>Register now <span aria-hidden="true">↗</span></Link>
        </nav>
      )}
    </header>
  );
}
