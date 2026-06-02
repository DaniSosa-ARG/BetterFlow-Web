'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function CTAFinal() {
  const { lang } = useLanguage();

  return (
    <section className="relative py-24 text-center overflow-hidden" style={{ background: '#060b18' }}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(168,85,247,0.08) 0%, transparent 65%)',
      }} />
      {/* Enso decoration */}
      <svg className="absolute pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 520, height: 520, opacity: 0.045 }} viewBox="0 0 520 520" fill="none">
        <circle cx="260" cy="260" r="200" stroke="#a855f7" strokeWidth="28" strokeDasharray="1000 270" strokeLinecap="round" />
        <circle cx="260" cy="260" r="148" stroke="#a855f7" strokeWidth="11" strokeDasharray="690 200" strokeLinecap="round" transform="rotate(20 260 260)" />
      </svg>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 leading-none" style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 900, fontSize: 'clamp(40px,6vw,58px)',
          textTransform: 'uppercase', letterSpacing: '-1.5px', color: '#f3e8ff',
        }}>
          {tr(t.ctaFinal.titulo, lang).split('?')[0]}
          <span style={{ background: 'linear-gradient(90deg,#a855f7,#e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>?</span>
        </h2>
        <p className="text-sm mb-9" style={{ color: 'rgba(243,232,255,0.4)', fontWeight: 300 }}>
          Primer mes gratis. Sin contratos. Sin setup.
        </p>
        <a href="https://wa.me/541165115261" target="_blank" rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded font-800 text-base transition-all"
          style={{
            background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
            color: '#fff',
            fontWeight: 800, fontFamily: 'Barlow, sans-serif',
            boxShadow: '0 6px 32px rgba(168,85,247,0.35)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(168,85,247,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 32px rgba(168,85,247,0.35)'; }}
        >
          {tr(t.ctaFinal.boton, lang)} →
        </a>
      </div>
    </section>
  );
}
