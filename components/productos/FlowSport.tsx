'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const WHATSAPP_FLOWSPORT = 'https://wa.me/541165115261?text=Hola,%20quiero%20saber%20mas%20sobre%20FlowSport';

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dd6b20" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function FlowSport() {
  const { lang } = useLanguage();

  const features = [
    tr(t.flowsport.feat1, lang),
    tr(t.flowsport.feat2, lang),
    tr(t.flowsport.feat3, lang),
    tr(t.flowsport.feat4, lang),
  ];

  return (
    <section id="flowsport" className="py-20" style={{ backgroundColor: '#1e3a5f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: features */}
          <div
            className="rounded-2xl p-8 order-2 lg:order-1"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '2px solid rgba(221,107,32,0.5)' }}
          >
            <ul className="flex flex-col gap-5">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(221,107,32,0.2)' }}
                  >
                    <CheckIcon />
                  </div>
                  <span className="text-base font-medium text-white">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-block text-sm font-bold px-4 py-1.5 rounded-full text-white mb-6"
              style={{ backgroundColor: '#dd6b20' }}
            >
              {tr(t.flowsport.badge, lang)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
              {tr(t.flowsport.titulo, lang)}
            </h2>
            <p
              className="text-base font-semibold mb-8 px-4 py-3 rounded-xl"
              style={{ backgroundColor: 'rgba(221,107,32,0.15)', color: '#fed7aa', border: '1px solid rgba(221,107,32,0.3)' }}
            >
              {tr(t.flowsport.precio, lang)}
            </p>
            <a
              href={WHATSAPP_FLOWSPORT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#dd6b20' }}
            >
              {tr(t.flowsport.cta, lang)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
