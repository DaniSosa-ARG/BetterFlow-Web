'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const steps = [
  {
    num: '01',
    keyLabel: 'paso1' as const,
    color: '#25D366',
    border: 'rgba(37,211,102,0.25)',
    bg: 'rgba(37,211,102,0.08)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    num: '02',
    keyLabel: 'paso2' as const,
    color: '#a855f7',
    border: 'rgba(168,85,247,0.25)',
    bg: 'rgba(168,85,247,0.08)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: '03',
    keyLabel: 'paso3' as const,
    color: '#a855f7',
    border: 'rgba(168,85,247,0.25)',
    bg: 'rgba(168,85,247,0.08)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

export default function ComoFunciona() {
  const { lang } = useLanguage();

  return (
    <section className="py-20" style={{ background: '#060b18' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-11 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-5 h-px" style={{ background: '#a855f7' }} />
            <span className="text-xs font-700 uppercase tracking-widest" style={{ color: '#a855f7', fontWeight: 700, letterSpacing: '0.15em' }}>Proceso</span>
            <div className="w-5 h-px" style={{ background: '#a855f7' }} />
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(32px,4vw,46px)', textTransform: 'uppercase', letterSpacing: '-1px', color: '#f3e8ff' }}>
            {tr(t.comoFunciona.titulo, lang)}
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 h-px"
            style={{ background: 'linear-gradient(90deg,rgba(168,85,247,0.2),rgba(232,121,249,0.2))', left: '22%', right: '22%' }} />

          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center">
              {/* Icon circle */}
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-5 z-10"
                style={{ background: s.bg, border: `1.5px solid ${s.border}` }}>
                {s.icon}
                {/* Step number badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: '#060b18', border: `1.5px solid ${s.color}` }}>
                  <span style={{ fontSize: 9, fontWeight: 800, color: s.color, fontFamily: 'Barlow Condensed, sans-serif' }}>{s.num}</span>
                </div>
              </div>
              <h3 className="text-sm font-700" style={{ color: '#f3e8ff', fontWeight: 700 }}>
                {tr(t.comoFunciona[s.keyLabel], lang)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
