'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function ProductosDestacados() {
  const { lang } = useLanguage();

  return (
    <section className="py-20" style={{ backgroundColor: '#1e3a5f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {tr(t.productosDestacados.titulo, lang)}
          </h2>
          <p className="text-blue-200 text-base">
            {tr(t.productosDestacados.subtitulo, lang)}
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4 bg-blue-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* FlowMed card */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
            style={{
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: '2px solid #38a169',
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: '#38a169' }}
              >
                {tr(t.productosDestacados.flowmedBadge, lang)}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">FlowMed</h3>
              <p className="text-blue-100 leading-relaxed">
                {tr(t.productosDestacados.flowmedDesc, lang)}
              </p>
            </div>
            <p className="text-green-300 font-semibold">{tr(t.productosDestacados.flowmedPrecio, lang)}</p>
            <Link
              href="/productos#flowmed"
              className="inline-block text-center py-3 px-6 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#38a169' }}
            >
              {tr(t.productosDestacados.flowmedCta, lang)}
            </Link>
          </div>

          {/* FlowSport card */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
            style={{
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: '2px solid #dd6b20',
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: '#dd6b20' }}
              >
                {tr(t.productosDestacados.flowsportBadge, lang)}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">FlowSport</h3>
              <p className="text-blue-100 leading-relaxed">
                {tr(t.productosDestacados.flowsportDesc, lang)}
              </p>
            </div>
            <p className="text-orange-300 font-semibold">{tr(t.productosDestacados.flowsportPrecio, lang)}</p>
            <Link
              href="/productos#flowsport"
              className="inline-block text-center py-3 px-6 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#dd6b20' }}
            >
              {tr(t.productosDestacados.flowsportCta, lang)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
