'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 border-none outline-none focus:outline-none focus:ring-0 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 border-none outline-none">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-text-primary transition-colors hover:text-accent-violet flex items-center gap-2 cursor-pointer outline-none focus:outline-none"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-accent-violet to-accent-cyan text-white font-black text-lg shadow-md shadow-accent-violet/30 border-none">
            A
          </span>
          <span className="font-extrabold text-gradient-static">Anil Chandra</span>
          <span className="text-text-muted font-mono text-xs hidden sm:inline-block">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex border-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary hover:bg-white/5 cursor-pointer outline-none focus:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan px-5 py-2 text-sm font-semibold text-white shadow-md shadow-accent-violet/20 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-violet/30 cursor-pointer outline-none focus:outline-none border-none"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer outline-none focus:outline-none border-none"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 rounded bg-text-primary transition-all duration-300 ${
              mobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-text-primary transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-text-primary transition-all duration-300 ${
              mobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden border-none outline-none ${
          mobileOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-xl border-none" />
        <nav className="relative flex h-full flex-col items-center justify-center gap-6 border-none">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-text-primary transition-colors hover:text-accent-violet cursor-pointer outline-none focus:outline-none"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan px-8 py-3 text-lg font-semibold text-white cursor-pointer outline-none focus:outline-none border-none"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}
