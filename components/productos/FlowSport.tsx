'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const WHATSAPP_FLOWSPORT = 'https://wa.me/541164791603?text=Hola,%20quiero%20saber%20mas%20sobre%20FlowSport';

export default function FlowSport() {
  const { lang } = useLanguage();

  const features = [
    tr(t.flowsport.feat1, lang),
    tr(t.flowsport.feat2, lang),
    tr(t.flowsport.feat3, lang),
    tr(t.flowsport.feat4, lang),
  ];

  return (
    <section id="flowsport" className="py-20" style={{ background: '#0a1020' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: feature list */}
          <div className="relative rounded-2xl p-8 overflow-hidden order-2 lg:order-1"
            style={{ background: 'linear-gradient(160deg,#060e0a 0%,#091410 50%,#0c1a14 100%)', border: '1px solid rgba(0,229,160,0.2)' }}>
            {/* Enso deco */}
            <svg className="absolute pointer-events-none" style={{ right: -40, bottom: -40, width: 200, height: 200, opacity: 0.05 }} viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="#00e5a0" strokeWidth="14" strokeDasharray="400 100" strokeLinecap="round" transform="rotate(90 100 100)" />
            </svg>
            <div className="flex flex-col gap-4 relative">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(0,229,160,0.1)', border: '1px solid rgba(0,229,160,0.22)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00e5a0" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: 'rgba(238,244,255,0.8)', fontWeight: 400 }}>
                    {feat}
                    {feat.includes('Mercado Pago') && (
                      <span className="ml-2 text-xs px-1.5 py-0.5 rounded"
                        style={{ background: 'rgba(0,229,160,0.1)', color: '#00e5a0', border: '1px solid rgba(0,229,160,0.2)' }}>
                        Pronto
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-700 uppercase tracking-widest px-3 py-1.5 rounded mb-6"
              style={{ background: 'rgba(0,229,160,0.08)', color: '#00e5a0', border: '1px solid rgba(0,229,160,0.22)', fontWeight: 700 }}>
              ⚽ {tr(t.flowsport.badge, lang)}
            </span>

            <h2 className="mb-5 leading-none" style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 900, fontSize: 'clamp(32px,4vw,48px)',
              textTransform: 'uppercase', letterSpacing: '-1px', color: '#eef4ff',
            }}>
              FlowSport
            </h2>
            <p className="text-base leading-relaxed mb-7" style={{ color: 'rgba(238,244,255,0.65)', fontWeight: 300 }}>
              {tr(t.flowsport.titulo, lang).replace('FlowSport — ', '')}
            </p>

            {/* Price pill */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-lg mb-8"
              style={{ background: 'rgba(0,229,160,0.06)', border: '1px solid rgba(0,229,160,0.2)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00e5a0" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm font-600" style={{ color: '#00e5a0', fontWeight: 600 }}>
                {tr(t.flowsport.precio, lang)}
              </span>
            </div>

            <div>
              <a href={WHATSAPP_FLOWSPORT} target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 rounded text-sm font-800 transition-all"
                style={{
                  background: '#00e5a0', color: '#060b18', fontWeight: 800,
                  boxShadow: '0 6px 24px rgba(0,229,160,0.35)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,229,160,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,229,160,0.35)'; }}
              >
                {tr(t.flowsport.cta, lang)} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
