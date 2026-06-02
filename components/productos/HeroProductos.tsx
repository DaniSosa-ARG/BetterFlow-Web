'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function HeroProductos() {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: '#060b18' }}>
      {/* Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,229,160,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,160,0.03) 1px,transparent 1px)',
        backgroundSize: '56px 56px',
      }} />
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(22,32,64,0.8) 0%,transparent 65%), radial-gradient(ellipse 30% 50% at 80% 20%, rgba(0,229,160,0.07) 0%,transparent 55%)',
      }} />
      {/* Enso bg */}
      <svg className="absolute pointer-events-none hidden lg:block" style={{ right: -60, top: '50%', transform: 'translateY(-50%)', width: 480, height: 480, opacity: 0.04 }} viewBox="0 0 480 480" fill="none">
        <circle cx="240" cy="240" r="190" stroke="#00e5a0" strokeWidth="24" strokeDasharray="940 260" strokeLinecap="round" />
        <circle cx="240" cy="240" r="140" stroke="#00e5a0" strokeWidth="10" strokeDasharray="640 200" strokeLinecap="round" transform="rotate(25 240 240)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded mb-7"
              style={{ background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.22)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#00e5a0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-xs font-700 uppercase tracking-widest" style={{ color: '#00e5a0', fontWeight: 700, letterSpacing: '0.15em' }}>
                {tr(t.heroProductos.badge, lang)}
              </span>
            </div>

            <h1 className="mb-5 leading-none" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 'clamp(44px,6vw,64px)',
              textTransform: 'uppercase', letterSpacing: '-1px', color: '#eef4ff',
            }}>
              {tr(t.heroProductos.headline, lang)}
            </h1>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(238,244,255,0.65)', fontWeight: 300, maxWidth: 460 }}>
              {tr(t.heroProductos.subheadline, lang)}
            </p>

            {/* Product anchor pills */}
            <div className="flex gap-3 flex-wrap">
              {[
                { label: '⚕ FlowMed', href: '#flowmed', color: '#00c4ff', border: 'rgba(0,196,255,0.25)', bg: 'rgba(0,196,255,0.08)' },
                { label: '⚽ FlowSport', href: '#flowsport', color: '#00e5a0', border: 'rgba(0,229,160,0.25)', bg: 'rgba(0,229,160,0.08)' },
              ].map((p) => (
                <a key={p.href} href={p.href}
                  className="px-4 py-2 rounded text-xs font-700 uppercase tracking-wider transition-all"
                  style={{ color: p.color, border: `1px solid ${p.border}`, background: p.bg, fontWeight: 700 }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp mockup — dark version */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: '#0e1628', border: '1px solid rgba(0,229,160,0.15)', boxShadow: '0 32px 64px rgba(0,0,0,0.5), 0 0 40px rgba(0,229,160,0.06)' }}>

              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 py-3"
                style={{ background: 'linear-gradient(135deg,#0a1a10,#0f2a1a)', borderBottom: '1px solid rgba(0,229,160,0.1)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#0f3a2a,#0a2a1a)', border: '1.5px solid #00e5a0' }}>
                  <span style={{ fontSize: 9, fontWeight: 900, color: '#00e5a0', fontFamily: 'Barlow, sans-serif', letterSpacing: '-0.5px' }}>BF</span>
                </div>
                <div>
                  <p className="font-700 text-sm" style={{ color: '#eef4ff', fontWeight: 700 }}>BetterFlow Bot</p>
                  <p className="text-xs" style={{ color: '#00e5a0' }}>● en línea</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 flex flex-col gap-3 min-h-[220px]" style={{ background: '#0a1020' }}>
                <div className="bubble bubble-1 flex justify-end">
                  <div className="max-w-[78%] px-3.5 py-2 rounded-xl rounded-tr-sm text-xs shadow"
                    style={{ background: 'linear-gradient(135deg,#0f3a2a,#0d4a38)', color: '#00e5a0', border: '1px solid rgba(0,229,160,0.2)' }}>
                    {tr(t.heroProductos.msg1, lang)}
                    <span className="block text-right text-xs mt-1 opacity-50">10:31</span>
                  </div>
                </div>
                <div className="bubble bubble-2 flex justify-start">
                  <div className="max-w-[78%] px-3.5 py-2 rounded-xl rounded-tl-sm text-xs shadow"
                    style={{ background: '#162040', color: 'rgba(238,244,255,0.85)', border: '1px solid rgba(238,244,255,0.06)' }}>
                    {tr(t.heroProductos.msg2, lang)}
                    <span className="block text-right text-xs mt-1 opacity-40">10:31</span>
                  </div>
                </div>
                <div className="bubble bubble-3 flex justify-end">
                  <div className="max-w-[78%] px-3.5 py-2 rounded-xl rounded-tr-sm text-xs shadow"
                    style={{ background: 'linear-gradient(135deg,#0f3a2a,#0d4a38)', color: '#00e5a0', border: '1px solid rgba(0,229,160,0.2)' }}>
                    {tr(t.heroProductos.msg3, lang)}
                    <span className="block text-right text-xs mt-1 opacity-50">10:32</span>
                  </div>
                </div>
                <div className="bubble bubble-4 flex justify-start">
                  <div className="max-w-[78%] px-3.5 py-2 rounded-xl rounded-tl-sm text-xs shadow"
                    style={{ background: 'rgba(0,229,160,0.08)', color: 'rgba(238,244,255,0.9)', border: '1px solid rgba(0,229,160,0.15)' }}>
                    {tr(t.heroProductos.msg4, lang)}
                    <span className="block text-right text-xs mt-1 opacity-40">10:32</span>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-2 px-3 py-2.5"
                style={{ background: '#0e1628', borderTop: '1px solid rgba(0,229,160,0.08)' }}>
                <div className="flex-1 rounded px-3 py-1.5 text-xs" style={{ background: '#162040', color: 'rgba(238,244,255,0.3)' }}>
                  Escribí un mensaje...
                </div>
                <div className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#00e5a0' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#060b18"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
