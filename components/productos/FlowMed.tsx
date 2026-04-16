'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const WHATSAPP_FLOWMED = 'https://wa.me/541165115261?text=Hola,%20quiero%20saber%20mas%20sobre%20FlowMed';

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38a169" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function FlowMed() {
  const { lang } = useLanguage();

  const features = [
    tr(t.flowmed.feat1, lang),
    tr(t.flowmed.feat2, lang),
    tr(t.flowmed.feat3, lang),
    tr(t.flowmed.feat4, lang),
  ];

  return (
    <section id="flowmed" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <span
              className="inline-block text-sm font-bold px-4 py-1.5 rounded-full text-white mb-6"
              style={{ backgroundColor: '#38a169' }}
            >
              {tr(t.flowmed.badge, lang)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: '#1e3a5f' }}>
              {tr(t.flowmed.titulo, lang)}
            </h2>
            <p
              className="text-base font-semibold mb-8 px-4 py-3 rounded-xl"
              style={{ backgroundColor: '#f0fff4', color: '#276749', border: '1px solid #c6f6d5' }}
            >
              {tr(t.flowmed.precio, lang)}
            </p>
            <a
              href={WHATSAPP_FLOWMED}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#38a169' }}
            >
              {tr(t.flowmed.cta, lang)}
            </a>
          </div>

          {/* Right: features */}
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: '#f0fff4', border: '2px solid #c6f6d5' }}
          >
            <ul className="flex flex-col gap-5">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#c6f6d5' }}
                  >
                    <CheckIcon />
                  </div>
                  <span className="text-base font-medium" style={{ color: '#1e3a5f' }}>
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
