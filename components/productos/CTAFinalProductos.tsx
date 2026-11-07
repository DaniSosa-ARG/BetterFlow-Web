'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function CTAFinalProductos() {
  const { lang } = useLanguage();

  return (
    <section className="relative py-24 text-center overflow-hidden" style={{ background: '#060b18' }}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,160,0.08) 0%, transparent 65%)',
      }} />
      {/* Enso */}
      <svg className="absolute pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, opacity: 0.04 }} viewBox="0 0 500 500" fill="none">
        <circle cx="250" cy="250" r="195" stroke="#00e5a0" strokeWidth="26" strokeDasharray="980 265" strokeLinecap="round" />
        <circle cx="250" cy="250" r="144" stroke="#00e5a0" strokeWidth="10" strokeDasharray="670 195" strokeLinecap="round" transform="rotate(20 250 250)" />
      </svg>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 leading-none" style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 900, fontSize: 'clamp(36px,5vw,52px)',
          textTransform: 'uppercase', letterSpacing: '-1.5px', color: '#eef4ff',
        }}>
          {tr(t.ctaFinalProductos.titulo, lang).replace('.', '')}
          <span style={{ background: 'linear-gradient(90deg,#00e5a0,#00c4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>.</span>
        </h2>
        <p className="text-sm mb-9" style={{ color: 'rgba(238,244,255,0.4)', fontWeight: 300 }}>
          Sin contratos. Sin setup. Primer mes gratis.
        </p>
        <a href="https://wa.me/541164791603" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-9 py-4 rounded font-800 text-base transition-all"
          style={{
            background: '#25D366', color: '#ffffff', fontWeight: 800,
            fontFamily: 'Barlow, sans-serif',
            boxShadow: '0 6px 32px rgba(37,211,102,0.4)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,211,102,0.55)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 32px rgba(37,211,102,0.4)'; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {tr(t.ctaFinalProductos.boton, lang)}
        </a>
      </div>
    </section>
  );
}
