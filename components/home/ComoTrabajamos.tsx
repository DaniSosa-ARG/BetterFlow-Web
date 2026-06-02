'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

export default function ComoTrabajamos() {
  const { lang } = useLanguage();

  const steps = [
    { n: '01', title: tr(t.comoTrabajamos.col1Title, lang), desc: tr(t.comoTrabajamos.col1Desc, lang) },
    { n: '02', title: tr(t.comoTrabajamos.col2Title, lang), desc: tr(t.comoTrabajamos.col2Desc, lang) },
    { n: '03', title: tr(t.comoTrabajamos.col3Title, lang), desc: tr(t.comoTrabajamos.col3Desc, lang) },
  ];

  return (
    <section className="py-20" style={{ background: '#0d0a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-11">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-px" style={{ background: '#a855f7' }} />
            <span className="text-xs font-700 uppercase tracking-widest" style={{ color: '#a855f7', fontWeight: 700, letterSpacing: '0.15em' }}>Metodología</span>
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(32px,4vw,46px)', textTransform: 'uppercase', letterSpacing: '-1px', color: '#f3e8ff' }}>
            {tr(t.comoTrabajamos.titulo, lang)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden"
          style={{ background: 'rgba(168,85,247,0.08)' }}>
          {steps.map((s) => (
            <div key={s.n} className="relative pl-7 pr-7 py-9 transition-colors"
              style={{ background: '#0d0a1a', borderLeft: '2px solid rgba(168,85,247,0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0a0718')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0d0a1a')}
            >
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 56, lineHeight: 1, color: 'rgba(168,85,247,0.1)', letterSpacing: '-2px', marginBottom: 14 }}>
                {s.n}
              </div>
              <div className="text-lg font-800 mb-2" style={{ color: '#f3e8ff', fontWeight: 800 }}>{s.title}</div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(243,232,255,0.4)', fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
