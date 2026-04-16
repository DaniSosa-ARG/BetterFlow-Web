'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function Problema() {
  const { lang } = useLanguage();

  const cards = [
    {
      key: 'card1' as const,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#dd6b20" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <circle cx="12" cy="16" r="0.5" fill="#dd6b20" />
        </svg>
      ),
    },
    {
      key: 'card2' as const,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#dd6b20" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h8M8 18h5" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      key: 'card3' as const,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#dd6b20" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#f7fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            {tr(t.problema.titulo, lang)}
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: '#dd6b20' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.key}
              className="bg-white rounded-2xl p-8 text-center transition-all duration-200 hover:shadow-lg"
              style={{ border: '1px solid #e2e8f0' }}
            >
              <div className="flex justify-center mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#fff7ed' }}
                >
                  {card.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#1e3a5f' }}>
                {tr(t.problema[card.key], lang)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>
                {tr(t.problema[`${card.key}Desc` as 'card1Desc' | 'card2Desc' | 'card3Desc'], lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
