'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const WHATSAPP_URL = 'https://wa.me/541165115261';

function BetterFlowLogo({ white = false }: { white?: boolean }) {
  const textColor = white ? '#ffffff' : '#1e3a5f';
  const accentColor = white ? '#93c5fd' : '#2b6cb0';
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" fill={white ? 'rgba(255,255,255,0.15)' : '#1e3a5f'} stroke={accentColor} strokeWidth="1.5" />
        <path d="M8 16 Q12 10 16 16 Q20 22 24 16" stroke={white ? '#ffffff' : '#60a5fa'} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M8 20 Q12 14 16 20 Q20 26 24 20" stroke={accentColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M8 12 Q12 6 16 12 Q20 18 24 12" stroke={white ? 'rgba(255,255,255,0.5)' : '#bfdbfe'} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
      </svg>
      <span style={{ color: textColor }} className="font-bold text-xl tracking-tight">
        Better<span style={{ color: accentColor }}>Flow</span>
      </span>
    </div>
  );
}

export { BetterFlowLogo };

export default function Header() {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: tr(t.nav.inicio, lang), href: '/' },
    { label: tr(t.nav.servicios, lang), href: '/#servicios' },
    { label: tr(t.nav.productos, lang), href: '/productos' },
    { label: tr(t.nav.nosotros, lang), href: '/#nosotros' },
    { label: tr(t.nav.contacto, lang), href: WHATSAPP_URL, external: true },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full transition-shadow duration-300"
      style={{
        backgroundColor: '#1e3a5f',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.25)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <BetterFlowLogo white />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center rounded-full overflow-hidden border border-blue-400">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  lang === 'es' ? 'bg-white text-[#1e3a5f]' : 'text-blue-100 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  lang === 'en' ? 'bg-white text-[#1e3a5f]' : 'text-blue-100 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              style={{ backgroundColor: '#2b6cb0', color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2c5282')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2b6cb0')}
            >
              {tr(t.nav.cta, lang)}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-blue-700 mt-2 pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-100 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center rounded-full overflow-hidden border border-blue-400">
                <button
                  onClick={() => setLang('es')}
                  className={`px-3 py-1 text-xs font-medium ${
                    lang === 'es' ? 'bg-white text-[#1e3a5f]' : 'text-blue-100'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-medium ${
                    lang === 'en' ? 'bg-white text-[#1e3a5f]' : 'text-blue-100'
                  }`}
                >
                  EN
                </button>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: '#2b6cb0', color: '#ffffff' }}
              >
                {tr(t.nav.cta, lang)}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
