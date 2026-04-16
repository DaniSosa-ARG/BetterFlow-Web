'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function CTAFinal() {
  const { lang } = useLanguage();

  return (
    <section
      className="py-20 text-center"
      style={{ background: 'linear-gradient(135deg, #2b6cb0 0%, #1e3a5f 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {tr(t.ctaFinal.titulo, lang)}
        </h2>
        <a
          href="https://wa.me/541165115261"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full font-bold text-base transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
          style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}
        >
          {tr(t.ctaFinal.boton, lang)}
        </a>
      </div>
    </section>
  );
}
