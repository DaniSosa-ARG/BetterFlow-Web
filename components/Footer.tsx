'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function Footer() {
  const { lang } = useLanguage();

  const links = [
    { label: tr(t.footer.inicio, lang), href: '/' },
    { label: tr(t.footer.servicios, lang), href: '/#servicios' },
    { label: tr(t.footer.productos, lang), href: '/productos' },
    { label: tr(t.footer.contacto, lang), href: 'https://wa.me/541165115261', external: true },
  ];

  return (
    <footer
      style={{ background: '#0a1020', borderTop: '1px solid rgba(0,229,160,0.08)' }}
      className="py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo with real image */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.jpeg"
              alt="BetterFlowIA"
              width={32}
              height={32}
              className="rounded-full"
              style={{ objectFit: 'cover' }}
            />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 17,
              textTransform: 'uppercase',
              color: '#eef4ff',
              letterSpacing: '-0.3px',
            }}>
              BetterFlow
              <sup style={{ fontSize: 8, color: '#00e5a0', fontFamily: 'Barlow, sans-serif', fontWeight: 600, letterSpacing: '1px' }}>
                IA
              </sup>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-colors"
                  style={{ color: 'rgba(238,244,255,0.4)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00e5a0')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(238,244,255,0.4)')}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs transition-colors"
                  style={{ color: 'rgba(238,244,255,0.4)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00e5a0')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(238,244,255,0.4)')}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div
          className="mt-6 pt-5 text-center"
          style={{ borderTop: '1px solid rgba(238,244,255,0.05)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(238,244,255,0.2)' }}>
            {tr(t.footer.rights, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
}
