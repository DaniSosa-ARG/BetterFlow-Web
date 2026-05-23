'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function ProductosDestacados() {
  const { lang } = useLanguage();

  const products = [
    {
      id: 'flowmed',
      badge: tr(t.productosDestacados.flowmedBadge, lang),
      name: 'FlowMed',
      desc: tr(t.productosDestacados.flowmedDesc, lang),
      price: tr(t.productosDestacados.flowmedPrecio, lang),
      cta: tr(t.productosDestacados.flowmedCta, lang),
      href: '/productos#flowmed',
      bg: 'linear-gradient(160deg,#080f1e 0%,#0b1528 50%,#0f1d3a 100%)',
      border: 'rgba(0,196,255,0.18)',
      badgeColor: '#67e8f9',
      badgeBg: 'rgba(0,196,255,0.1)',
      badgeBorder: 'rgba(0,196,255,0.25)',
      btnBg: 'linear-gradient(135deg,#0ea5e9,#67e8f9)',
      glowColor: '#00c4ff',
      ensoRotate: 0,
    },
    {
      id: 'flowsport',
      badge: tr(t.productosDestacados.flowsportBadge, lang),
      name: 'FlowSport',
      desc: tr(t.productosDestacados.flowsportDesc, lang),
      price: tr(t.productosDestacados.flowsportPrecio, lang),
      cta: tr(t.productosDestacados.flowsportCta, lang),
      href: '/productos#flowsport',
      bg: 'linear-gradient(160deg,#060e0a 0%,#091410 50%,#0c1a14 100%)',
      border: 'rgba(0,229,160,0.2)',
      badgeColor: '#00e5a0',
      badgeBg: 'rgba(0,229,160,0.08)',
      badgeBorder: 'rgba(0,229,160,0.22)',
      btnBg: '#00e5a0',
      glowColor: '#00e5a0',
      ensoRotate: 90,
    },
  ];

  return (
    <section className="py-20" style={{ background: '#060b18' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-11">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px" style={{ background: '#00e5a0' }} />
            <span className="text-xs font-700 uppercase tracking-widest" style={{ color: '#00e5a0', fontWeight: 700, letterSpacing: '0.15em' }}>Productos</span>
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(32px,4vw,46px)', textTransform: 'uppercase', letterSpacing: '-1px', color: '#eef4ff' }}>
            {tr(t.productosDestacados.titulo, lang)}
          </h2>
          <p className="mt-1.5 text-sm" style={{ color: 'rgba(238,244,255,0.4)', fontWeight: 300 }}>{tr(t.productosDestacados.subtitulo, lang)}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((p) => (
            <div key={p.id} className="relative rounded-2xl p-9 overflow-hidden"
              style={{ background: p.bg, border: `1px solid ${p.border}` }}>
              {/* Enso decoration */}
              <svg className="absolute pointer-events-none" style={{ right: -40, bottom: -40, width: 200, height: 200, opacity: 0.05 }} viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke={p.glowColor} strokeWidth="14" strokeDasharray="400 100" strokeLinecap="round" transform={`rotate(${p.ensoRotate} 100 100)`} />
              </svg>
              <span className="inline-flex items-center gap-1.5 text-xs font-700 uppercase tracking-widest px-3 py-1.5 rounded mb-5"
                style={{ background: p.badgeBg, color: p.badgeColor, border: `1px solid ${p.badgeBorder}`, fontWeight: 700 }}>
                {p.badge}
              </span>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 40, textTransform: 'uppercase', letterSpacing: '-0.5px', color: '#eef4ff', lineHeight: 1, marginBottom: 12 }}>
                {p.name}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(238,244,255,0.7)', fontWeight: 300 }}>{p.desc}</p>
              <div className="text-xl font-800 mb-5" style={{ color: '#eef4ff', fontWeight: 800, fontFamily: 'Barlow, sans-serif' }}>
                {p.price}
              </div>
              <Link href={p.href}
                className="inline-block px-6 py-2.5 rounded text-sm font-800 transition-all"
                style={{ background: p.btnBg, color: '#060b18', fontWeight: 800, boxShadow: `0 6px 20px rgba(0,0,0,0.3)` }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.9'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.opacity = '1'; }}
              >
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
