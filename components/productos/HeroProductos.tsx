'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function HeroProductos() {
  const { lang } = useLanguage();

  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: '#1e3a5f' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#bfdbfe', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {tr(t.heroProductos.badge, lang)}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {tr(t.heroProductos.headline, lang)}
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              {tr(t.heroProductos.subheadline, lang)}
            </p>
          </div>

          {/* WhatsApp mockup */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: '#e5ddd5' }}
            >
              {/* Chat header */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{ backgroundColor: '#128C7E' }}
              >
                <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold text-sm">
                  BF
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">BetterFlow Bot</p>
                  <p className="text-green-200 text-xs">en línea</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 flex flex-col gap-3 min-h-[220px]">
                {/* User bubble right */}
                <div className="bubble bubble-1 flex justify-end">
                  <div className="max-w-[75%] px-4 py-2 rounded-2xl rounded-tr-sm text-sm shadow"
                    style={{ backgroundColor: '#dcf8c6', color: '#111' }}>
                    {tr(t.heroProductos.msg1, lang)}
                    <span className="block text-right text-xs mt-1 opacity-50">10:31</span>
                  </div>
                </div>

                {/* Bot bubble left */}
                <div className="bubble bubble-2 flex justify-start">
                  <div className="max-w-[75%] px-4 py-2 rounded-2xl rounded-tl-sm text-sm shadow bg-white text-gray-800">
                    {tr(t.heroProductos.msg2, lang)}
                    <span className="block text-right text-xs mt-1 opacity-40">10:31</span>
                  </div>
                </div>

                {/* User bubble right */}
                <div className="bubble bubble-3 flex justify-end">
                  <div className="max-w-[75%] px-4 py-2 rounded-2xl rounded-tr-sm text-sm shadow"
                    style={{ backgroundColor: '#dcf8c6', color: '#111' }}>
                    {tr(t.heroProductos.msg3, lang)}
                    <span className="block text-right text-xs mt-1 opacity-50">10:32</span>
                  </div>
                </div>

                {/* Bot bubble left */}
                <div className="bubble bubble-4 flex justify-start">
                  <div className="max-w-[75%] px-4 py-2 rounded-2xl rounded-tl-sm text-sm shadow bg-white text-gray-800">
                    {tr(t.heroProductos.msg4, lang)}
                    <span className="block text-right text-xs mt-1 opacity-40">10:32</span>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: '#f0f0f0' }}>
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-gray-400">
                  Escribí un mensaje...
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#128C7E' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
