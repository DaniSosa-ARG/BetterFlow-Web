'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const WHATSAPP_URL = 'https://wa.me/541165115261';

function ServiceCard({
  title,
  desc,
  ctaLabel,
  ctaHref,
  isExternal,
  badge,
}: {
  title: string;
  desc: string;
  ctaLabel: string;
  ctaHref: string;
  isExternal?: boolean;
  badge?: string;
}) {
  return (
    <div
      className="relative bg-white rounded-2xl p-8 flex flex-col gap-4 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
      style={{ border: '1px solid #e2e8f0' }}
    >
      {badge && (
        <span
          className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: '#dd6b20' }}
        >
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold pr-16" style={{ color: '#1e3a5f' }}>
        {title}
      </h3>
      <p className="text-base leading-relaxed flex-1" style={{ color: '#4a5568' }}>
        {desc}
      </p>
      {isExternal ? (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
          style={{ color: '#2b6cb0' }}
        >
          {ctaLabel}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      ) : (
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
          style={{ color: '#2b6cb0' }}
        >
          {ctaLabel}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}

export default function Servicios() {
  const { lang } = useLanguage();

  const cards = [
    {
      title: tr(t.servicios.card1Title, lang),
      desc: tr(t.servicios.card1Desc, lang),
      ctaLabel: tr(t.servicios.saberMas, lang),
      ctaHref: WHATSAPP_URL,
      isExternal: true,
    },
    {
      title: tr(t.servicios.card2Title, lang),
      desc: tr(t.servicios.card2Desc, lang),
      ctaLabel: tr(t.servicios.saberMas, lang),
      ctaHref: WHATSAPP_URL,
      isExternal: true,
    },
    {
      title: tr(t.servicios.card3Title, lang),
      desc: tr(t.servicios.card3Desc, lang),
      ctaLabel: tr(t.servicios.verProductos, lang),
      ctaHref: '/productos',
      isExternal: false,
      badge: tr(t.servicios.badge, lang),
    },
  ];

  return (
    <section id="servicios" className="py-20" style={{ backgroundColor: '#f7fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1e3a5f' }}>
            {tr(t.servicios.titulo, lang)}
          </h2>
          <p className="text-base" style={{ color: '#4a5568' }}>
            {tr(t.servicios.subtitulo, lang)}
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: '#2b6cb0' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <ServiceCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
