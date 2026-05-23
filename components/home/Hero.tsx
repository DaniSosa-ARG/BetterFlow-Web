'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 md:py-28 min-h-[520px]" style={{ background: '#060b18' }}>
      {/* Grid lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,229,160,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,160,0.03) 1px,transparent 1px)',
        backgroundSize: '56px 56px',
      }} />
      {/* Radial glows */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 55% 70% at 20% 50%, rgba(22,32,64,0.9) 0%,transparent 65%), radial-gradient(ellipse 40% 50% at 75% 30%, rgba(0,229,160,0.06) 0%,transparent 60%), radial-gradient(ellipse 30% 40% at 85% 75%, rgba(0,196,255,0.05) 0%,transparent 55%)',
      }} />
      {/* Enso background decoration */}
      <svg className="absolute pointer-events-none"
        style={{ right: -80, top: '50%', transform: 'translateY(-50%)', width: 540, height: 540, opacity: 0.045 }}
        viewBox="0 0 540 540" fill="none">
        <circle cx="270" cy="270" r="215" stroke="#00e5a0" strokeWidth="26" strokeDasharray="1050 290" strokeLinecap="round" />
        <circle cx="270" cy="270" r="158" stroke="#00e5a0" strokeWidth="11" strokeDasharray="720 220" strokeLinecap="round" transform="rotate(25 270 270)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded mb-7"
            style={{ background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.22)' }}>
            <span className="w-1.5 h-1.5 rounded-full ping-dot" style={{ backgroundColor: '#00e5a0' }} />
            <span className="text-xs font-700 uppercase tracking-widest" style={{ color: '#00e5a0', fontWeight: 700, letterSpacing: '0.15em' }}>
              {tr(t.hero.badge, lang)}
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-5 leading-none" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: 'clamp(48px,6vw,68px)',
            textTransform: 'uppercase', letterSpacing: '-1px',
          }}>
            <span className="block" style={{ color: '#eef4ff' }}>Optimizamos</span>
            <span className="block" style={{ WebkitTextStroke: '1.5px rgba(0,229,160,0.5)', color: 'transparent' }}>cómo trabaja</span>
            <span className="block" style={{
              background: 'linear-gradient(90deg,#00e5a0,#00c4ff)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              tu equipo
            </span>
          </h1>

          {/* Sub */}
          <p className="mb-9 text-base leading-relaxed" style={{ color: 'rgba(238,244,255,0.7)', fontWeight: 300, maxWidth: 460 }}>
            {tr(t.hero.subheadline, lang)}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#servicios"
              className="px-8 py-3.5 text-sm rounded font-800 transition-all text-center"
              style={{
                backgroundColor: '#00e5a0', color: '#060b18',
                fontWeight: 800, fontFamily: 'Barlow, sans-serif',
                boxShadow: '0 6px 28px rgba(0,229,160,0.35)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,229,160,0.45)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,229,160,0.35)'; e.currentTarget.style.transform = ''; }}
            >
              {tr(t.hero.ctaPrimary, lang)}
            </a>
            <Link href="/productos"
              className="px-8 py-3.5 text-sm rounded font-600 transition-all text-center"
              style={{
                border: '1.5px solid rgba(238,244,255,0.18)', color: '#eef4ff',
                backgroundColor: 'transparent', fontWeight: 600,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(238,244,255,0.45)'; e.currentTarget.style.backgroundColor = 'rgba(238,244,255,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(238,244,255,0.18)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              {tr(t.hero.ctaSecondary, lang)} →
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{ background: 'rgba(0,229,160,0.07)' }}>
          {[
            { n: '30', u: 'd', l: 'Resultados medibles' },
            { n: '24', u: '/7', l: 'Negocio operando' },
            { n: '$25', u: 'usd', l: 'Desde / por mes' },
            { n: '0', u: 'setup', l: 'Sin costo inicial' },
          ].map((s) => (
            <div key={s.l} className="px-6 py-5 transition-colors"
              style={{ background: '#0a1020' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0e1628')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0a1020')}
            >
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 36, lineHeight: 1, letterSpacing: '-1px', color: '#eef4ff' }}>
                {s.n}<span style={{ color: '#00e5a0', fontSize: 20 }}>{s.u}</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: 'rgba(238,244,255,0.4)', letterSpacing: '0.05em' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
