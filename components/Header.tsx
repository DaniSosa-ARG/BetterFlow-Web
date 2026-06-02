'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const WHATSAPP_URL = 'https://wa.me/541165115261';

export function BetterFlowLogo({ size = 38 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.jpeg"
        alt="BetterFlowIA"
        width={size}
        height={size}
        className="rounded-full"
        style={{ objectFit: 'cover' }}
        priority
      />
      <span style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 900,
        fontSize: 20,
        letterSpacing: '-0.5px',
        color: '#f3e8ff',
        textTransform: 'uppercase' as const,
        lineHeight: 1,
      }}>
        BetterFlow
        <sup style={{
          fontSize: 8,
          fontWeight: 600,
          letterSpacing: '1.5px',
          color: '#a855f7',
          verticalAlign: 'super',
          fontFamily: 'Barlow, sans-serif',
          textTransform: 'none' as const,
        }}>
          IA
        </sup>
      </span>
    </div>
  );
}

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
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(6,11,24,0.96)' : '#060b18',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid rgba(168,85,247,0.1)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <BetterFlowLogo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(243,232,255,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f3e8ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,232,255,0.45)')}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(243,232,255,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f3e8ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,232,255,0.45)')}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side: lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div
              className="flex items-center rounded overflow-hidden"
              style={{ border: '1px solid rgba(168,85,247,0.25)' }}
            >
              {(['es', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-3 py-1 text-xs uppercase transition-colors"
                  style={{
                    backgroundColor: lang === l ? '#a855f7' : 'transparent',
                    color: lang === l ? '#f3e8ff' : 'rgba(243,232,255,0.45)',
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm rounded transition-all"
              style={{
                background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
                color: '#fff',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 800,
                boxShadow: '0 6px 28px rgba(168,85,247,0.4)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 10px 36px rgba(168,85,247,0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 6px 28px rgba(168,85,247,0.4)';
                e.currentTarget.style.transform = '';
              }}
            >
              {tr(t.nav.cta, lang)}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: '#f3e8ff' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden pb-5 pt-3"
            style={{ borderTop: '1px solid rgba(168,85,247,0.08)' }}
          >
            <nav className="flex flex-col gap-4 mb-4">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                    style={{ color: 'rgba(243,232,255,0.6)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm"
                    style={{ color: 'rgba(243,232,255,0.6)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
            <div className="flex items-center gap-3">
              <div
                className="flex rounded overflow-hidden"
                style={{ border: '1px solid rgba(168,85,247,0.25)' }}
              >
                {(['es', 'en'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="px-3 py-1 text-xs uppercase"
                    style={{
                      backgroundColor: lang === l ? '#a855f7' : 'transparent',
                      color: lang === l ? '#f3e8ff' : 'rgba(243,232,255,0.45)',
                      fontWeight: 700,
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm rounded"
                style={{
                  background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
                  color: '#fff',
                  fontWeight: 800,
                }}
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
