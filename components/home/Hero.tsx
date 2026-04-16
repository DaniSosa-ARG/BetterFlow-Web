'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #2b6cb0 100%)' }}
    >
      {/* Decorative background circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #60a5fa, transparent)', transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #93c5fd, transparent)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#bfdbfe', border: '1px solid rgba(255,255,255,0.2)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          {tr(t.hero.badge, lang)}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
          {tr(t.hero.headline, lang)}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          {tr(t.hero.subheadline, lang)}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicios"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}
          >
            {tr(t.hero.ctaPrimary, lang)}
          </a>
          <Link
            href="/productos"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ border: '2px solid rgba(255,255,255,0.7)', color: '#ffffff', backgroundColor: 'transparent' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {tr(t.hero.ctaSecondary, lang)}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce opacity-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
