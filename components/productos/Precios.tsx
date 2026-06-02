'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const WHATSAPP_URL = 'https://wa.me/541165115261';

export default function Precios() {
  const { lang } = useLanguage();

  const plans = [
    {
      title: tr(t.precios.starterTitle, lang),
      price: tr(t.precios.starterPrice, lang),
      features: [tr(t.precios.starterFeat1, lang), tr(t.precios.starterFeat2, lang), tr(t.precios.starterFeat3, lang), tr(t.precios.starterFeat4, lang)],
      cta: tr(t.precios.empezar, lang),
      popular: false,
    },
    {
      title: tr(t.precios.proTitle, lang),
      price: tr(t.precios.proPrice, lang),
      features: [tr(t.precios.proFeat1, lang), tr(t.precios.proFeat2, lang), tr(t.precios.proFeat3, lang), tr(t.precios.proFeat4, lang), tr(t.precios.proFeat5, lang)],
      cta: tr(t.precios.empezar, lang),
      popular: true,
    },
    {
      title: tr(t.precios.businessTitle, lang),
      price: tr(t.precios.businessPrice, lang),
      features: [tr(t.precios.businessFeat1, lang), tr(t.precios.businessFeat2, lang), tr(t.precios.businessFeat3, lang), tr(t.precios.businessFeat4, lang)],
      cta: tr(t.precios.contactar, lang),
      popular: false,
    },
  ];

  return (
    <section id="precios" className="py-20" style={{ background: '#0d0a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-11 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-5 h-px" style={{ background: '#a855f7' }} />
            <span className="text-xs font-700 uppercase tracking-widest" style={{ color: '#a855f7', fontWeight: 700, letterSpacing: '0.15em' }}>Precios</span>
            <div className="w-5 h-px" style={{ background: '#a855f7' }} />
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(32px,4vw,46px)', textTransform: 'uppercase', letterSpacing: '-1px', color: '#f3e8ff' }}>
            {tr(t.precios.titulo, lang)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <div key={i} className="relative rounded-xl p-7 flex flex-col gap-5 transition-all duration-200"
              style={{
                background: plan.popular ? 'linear-gradient(160deg,#0a0718,#130e24)' : '#0a0718',
                border: plan.popular ? '1.5px solid rgba(168,85,247,0.4)' : '1px solid rgba(243,232,255,0.07)',
                transform: plan.popular ? 'scale(1.03)' : undefined,
                boxShadow: plan.popular ? '0 0 40px rgba(168,85,247,0.08)' : undefined,
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-xs font-700 uppercase tracking-wider"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)', color: '#fff', fontWeight: 800 }}>
                  {tr(t.precios.popular, lang)}
                </div>
              )}

              {/* Title + Price */}
              <div>
                <div className="text-xs font-700 uppercase tracking-widest mb-2"
                  style={{ color: plan.popular ? '#a855f7' : 'rgba(243,232,255,0.4)', fontWeight: 700 }}>
                  {plan.title}
                </div>
                <div className="flex items-end gap-1">
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 40, color: '#f3e8ff', letterSpacing: '-1px', lineHeight: 1 }}>
                    {plan.price}
                  </span>
                  <span className="text-xs mb-1" style={{ color: 'rgba(243,232,255,0.4)' }}>
                    {tr(t.precios.mes, lang)}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: plan.popular ? 'rgba(168,85,247,0.2)' : 'rgba(243,232,255,0.06)' }} />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(243,232,255,0.7)', fontWeight: 300 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? '#a855f7' : 'rgba(243,232,255,0.35)'} strokeWidth="2.5" className="mt-0.5 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="block text-center py-3 px-6 rounded text-sm font-800 transition-all"
                style={
                  plan.popular
                    ? { background: 'linear-gradient(135deg,#7c3aed,#a855f7)', color: '#fff', fontWeight: 800, boxShadow: '0 6px 20px rgba(168,85,247,0.3)' }
                    : { background: 'transparent', color: 'rgba(243,232,255,0.6)', border: '1px solid rgba(243,232,255,0.12)', fontWeight: 600 }
                }
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
