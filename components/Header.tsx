'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FlowLoopIcon from './FlowLoopIcon';
import { useLanguage } from '@/lib/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/541164791603';

const navLinks = [
  { label: 'Cómo funciona', href: '/#como' },
  { label: 'Productos',     href: '/productos' },
  { label: 'Nosotros',      href: '/#nosotros' },
  { label: 'Blog',          href: '/#blog' },
];

export function BetterFlowLogo({ size = 38 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <FlowLoopIcon size={size} />
      <span style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 900,
        fontSize: 22,
        letterSpacing: '-0.01em',
        color: 'var(--ink)',
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'flex-start',
        whiteSpace: 'nowrap',
      }}>
        BetterFlow
        <sup style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: 10,
          fontWeight: 600,
          color: 'var(--violet-deep)',
          marginLeft: 3,
          marginTop: 2,
          letterSpacing: 0,
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: '#F7F4EF',
          backdropFilter: 'saturate(140%) blur(14px)',
          borderBottom: `1px solid ${scrolled ? '#E6DFD5' : 'transparent'}`,
        }}
      >
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="flex items-center gap-7" style={{ height: 76 }}>
            <Link href="/" className="flex-shrink-0">
              <BetterFlowLogo />
            </Link>

            <nav className="hidden md:flex items-center gap-6 ml-5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="whitespace-nowrap transition-colors"
                  style={{ fontSize: 15.5, fontWeight: 500, color: 'var(--ink-soft)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex-1" />

            <div className="hidden md:flex items-center gap-3">
              <div
                className="flex items-center rounded-full overflow-hidden"
                style={{ border: '1px solid var(--sand)' }}
              >
                {(['es', 'en'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="px-3 py-1 text-xs uppercase transition-colors"
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      backgroundColor: lang === l ? 'var(--ink)' : 'transparent',
                      color: lang === l ? '#fff' : 'var(--ink-soft)',
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
                className="flex items-center gap-2 rounded-full transition-all"
                style={{
                  background: 'var(--wa)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '10px 22px',
                  boxShadow: '0 10px 22px -8px rgba(37,211,102,.5)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--wa-deep)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 16px 30px -10px rgba(37,211,102,.55)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--wa)';
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 10px 22px -8px rgba(37,211,102,.5)';
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Escribinos
              </a>
            </div>

            <button
              className="md:hidden p-2"
              style={{ color: 'var(--ink)' }}
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
        </div>
      </header>

      {mobileOpen && (
        <div
          className="md:hidden fixed z-40 inset-x-0 overflow-y-auto"
          style={{ top: 76, bottom: 0, background: 'var(--cream)', padding: 28 }}
        >
          <nav className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 30,
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  padding: '14px 0',
                  borderBottom: '1px solid var(--line)',
                  display: 'block',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <div
              className="flex items-center rounded-full overflow-hidden"
              style={{ border: '1px solid var(--sand)' }}
            >
              {(['es', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-3 py-1.5 text-xs uppercase"
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontWeight: 600,
                    backgroundColor: lang === l ? 'var(--ink)' : 'transparent',
                    color: lang === l ? '#fff' : 'var(--ink-soft)',
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
              className="flex items-center gap-2 rounded-full"
              style={{
                background: 'var(--wa)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
                padding: '10px 22px',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
