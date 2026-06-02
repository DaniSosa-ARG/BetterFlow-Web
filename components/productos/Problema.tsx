'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const cards = [
  {
    key: 'card1' as const,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r="0.5" fill="#f87171" />
      </svg>
    ),
  },
  {
    key: 'card2' as const,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h8M8 18h5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    key: 'card3' as const,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function Problema() {
  const { lang } = useLanguage();

  return (
    <section className="py-20" style={{ background: '#0a1020' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-11">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px" style={{ background: '#f87171' }} />
            <span className="text-xs font-700 uppercase tracking-widest" style={{ color: '#f87171', fontWeight: 700, letterSpacing: '0.15em' }}>El problema</span>
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(32px,4vw,46px)', textTransform: 'uppercase', letterSpacing: '-1px', color: '#eef4ff' }}>
            {tr(t.problema.titulo, lang)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.key}
              className="rounded-xl p-7 transition-all duration-250 group"
              style={{ background: '#0e1628', border: '1px solid rgba(248,113,113,0.12)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(248,113,113,0.35)'; (e.currentTarget as HTMLDivElement).style.background = '#162040'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(248,113,113,0.12)'; (e.currentTarget as HTMLDivElement).style.background = '#0e1628'; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.18)' }}>
                {card.icon}
              </div>
              <h3 className="text-base font-800 mb-3" style={{ color: '#eef4ff', fontWeight: 800 }}>
                {tr(t.problema[card.key], lang)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(238,244,255,0.45)', fontWeight: 300 }}>
                {tr(t.problema[`${card.key}Desc` as 'card1Desc' | 'card2Desc' | 'card3Desc'], lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
