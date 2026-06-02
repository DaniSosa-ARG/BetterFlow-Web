'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const WHATSAPP_URL = 'https://wa.me/541165115261';

function ServiceCard({ num, title, desc, ctaLabel, ctaHref, isExternal, badge }: {
  num: string; title: string; desc: string; ctaLabel: string;
  ctaHref: string; isExternal?: boolean; badge?: string;
}) {
  return (
    <div className="relative rounded-xl p-7 flex flex-col gap-4 group transition-all duration-250"
      style={{ background: '#0a0718', border: '1px solid rgba(168,85,247,0.07)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(168,85,247,0.3)'; (e.currentTarget as HTMLDivElement).style.background = '#130e24'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(168,85,247,0.07)'; (e.currentTarget as HTMLDivElement).style.background = '#0a0718'; (e.currentTarget as HTMLDivElement).style.transform = ''; }}
    >
      {badge && (
        <span className="absolute top-4 right-4 text-xs font-700 px-2.5 py-1 rounded"
          style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', color: '#a855f7', fontWeight: 700, letterSpacing: '0.05em' }}>
          {badge}
        </span>
      )}
      <div className="text-xs font-700 uppercase tracking-widest" style={{ color: 'rgba(168,85,247,0.3)', fontWeight: 700 }}>{num}</div>
      <h3 className="text-lg font-800 pr-16" style={{ color: '#f3e8ff', fontWeight: 800, fontFamily: 'Barlow, sans-serif' }}>{title}</h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(243,232,255,0.4)', fontWeight: 300 }}>{desc}</p>
      {isExternal ? (
        <a href={ctaHref} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-700 transition-colors"
          style={{ color: '#a855f7', fontWeight: 700, letterSpacing: '0.03em' }}>
          {ctaLabel} →
        </a>
      ) : (
        <Link href={ctaHref}
          className="inline-flex items-center gap-1.5 text-xs font-700 transition-colors"
          style={{ color: '#a855f7', fontWeight: 700, letterSpacing: '0.03em' }}>
          {ctaLabel} →
        </Link>
      )}
      {/* Hover bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{ background: 'linear-gradient(90deg,#7c3aed,#e879f9)' }} />
    </div>
  );
}

export default function Servicios() {
  const { lang } = useLanguage();

  const cards = [
    { num: '01', title: tr(t.servicios.card1Title, lang), desc: tr(t.servicios.card1Desc, lang), ctaLabel: tr(t.servicios.saberMas, lang), ctaHref: WHATSAPP_URL, isExternal: true },
    { num: '02', title: tr(t.servicios.card2Title, lang), desc: tr(t.servicios.card2Desc, lang), ctaLabel: tr(t.servicios.saberMas, lang), ctaHref: WHATSAPP_URL, isExternal: true },
    { num: '03', title: tr(t.servicios.card3Title, lang), desc: tr(t.servicios.card3Desc, lang), ctaLabel: tr(t.servicios.verProductos, lang), ctaHref: '/productos', badge: tr(t.servicios.badge, lang) },
  ];

  return (
    <section id="servicios" className="py-20" style={{ background: '#060b18' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-11">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px" style={{ background: '#a855f7' }} />
            <span className="text-xs font-700 uppercase tracking-widest" style={{ color: '#a855f7', fontWeight: 700, letterSpacing: '0.15em' }}>Servicios</span>
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(32px,4vw,46px)', textTransform: 'uppercase', letterSpacing: '-1px', color: '#f3e8ff' }}>
            {tr(t.servicios.titulo, lang)}
          </h2>
          <p className="mt-1.5 text-sm" style={{ color: 'rgba(243,232,255,0.4)', fontWeight: 300 }}>{tr(t.servicios.subtitulo, lang)}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => <ServiceCard key={i} {...c} />)}
        </div>
      </div>
    </section>
  );
}
