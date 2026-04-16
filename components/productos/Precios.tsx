'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const WHATSAPP_URL = 'https://wa.me/541165115261';

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38a169" strokeWidth="2.5" className="mt-0.5 flex-shrink-0">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="text-sm" style={{ color: '#4a5568' }}>{text}</span>
    </li>
  );
}

export default function Precios() {
  const { lang } = useLanguage();

  const plans = [
    {
      title: tr(t.precios.starterTitle, lang),
      price: tr(t.precios.starterPrice, lang),
      features: [
        tr(t.precios.starterFeat1, lang),
        tr(t.precios.starterFeat2, lang),
        tr(t.precios.starterFeat3, lang),
        tr(t.precios.starterFeat4, lang),
      ],
      cta: tr(t.precios.empezar, lang),
      popular: false,
    },
    {
      title: tr(t.precios.proTitle, lang),
      price: tr(t.precios.proPrice, lang),
      features: [
        tr(t.precios.proFeat1, lang),
        tr(t.precios.proFeat2, lang),
        tr(t.precios.proFeat3, lang),
        tr(t.precios.proFeat4, lang),
        tr(t.precios.proFeat5, lang),
      ],
      cta: tr(t.precios.empezar, lang),
      popular: true,
    },
    {
      title: tr(t.precios.businessTitle, lang),
      price: tr(t.precios.businessPrice, lang),
      features: [
        tr(t.precios.businessFeat1, lang),
        tr(t.precios.businessFeat2, lang),
        tr(t.precios.businessFeat3, lang),
        tr(t.precios.businessFeat4, lang),
      ],
      cta: tr(t.precios.contactar, lang),
      popular: false,
    },
  ];

  return (
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            {tr(t.precios.titulo, lang)}
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: '#2b6cb0' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-200"
              style={{
                border: plan.popular ? '2px solid #2b6cb0' : '1px solid #e2e8f0',
                boxShadow: plan.popular ? '0 8px 40px rgba(43,108,176,0.18)' : undefined,
                transform: plan.popular ? 'scale(1.04)' : undefined,
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: '#2b6cb0' }}
                >
                  {tr(t.precios.popular, lang)}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#1e3a5f' }}>
                  {plan.title}
                </h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-extrabold" style={{ color: '#1e3a5f' }}>
                    {plan.price}
                  </span>
                  <span className="text-sm mb-1" style={{ color: '#4a5568' }}>
                    {tr(t.precios.mes, lang)}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feat, j) => (
                  <CheckItem key={j} text={feat} />
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md"
                style={
                  plan.popular
                    ? { backgroundColor: '#2b6cb0', color: '#ffffff' }
                    : { backgroundColor: '#f7fafc', color: '#1e3a5f', border: '1px solid #e2e8f0' }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
