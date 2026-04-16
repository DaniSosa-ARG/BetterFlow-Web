'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const points = [
  {
    key: 'punto1' as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b6cb0" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    key: 'punto2' as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b6cb0" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    key: 'punto3' as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b6cb0" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    key: 'punto4' as const,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b6cb0" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function Nosotros() {
  const { lang } = useLanguage();

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            {tr(t.nosotros.titulo, lang)}
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: '#2b6cb0' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {points.map((p) => (
            <div
              key={p.key}
              className="flex items-center gap-4 p-5 rounded-xl"
              style={{ backgroundColor: '#f7fafc', border: '1px solid #e2e8f0' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#eff6ff' }}
              >
                {p.icon}
              </div>
              <span className="font-semibold" style={{ color: '#1e3a5f' }}>
                {tr(t.nosotros[p.key], lang)}
              </span>
            </div>
          ))}
        </div>

        <p
          className="text-center text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#4a5568' }}
        >
          {tr(t.nosotros.parrafo, lang)}
        </p>
      </div>
    </section>
  );
}
