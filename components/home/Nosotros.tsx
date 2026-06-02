'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const metrics = [
  { label: 'Tareas manuales', val: '−70%', pct: 70, color: '#f87171', grad: 'linear-gradient(90deg,#1a3a5c,#f87171)' },
  { label: 'Turnos perdidos', val: '−85%', pct: 85, color: '#00e5a0', grad: 'linear-gradient(90deg,#0f3a2a,#00e5a0)' },
  { label: 'Respuesta a clientes', val: '24/7', pct: 100, color: '#00c4ff', grad: 'linear-gradient(90deg,#0f2a3a,#00c4ff)' },
  { label: 'Satisfacción del equipo', val: '+90%', pct: 90, color: '#00e5a0', grad: 'linear-gradient(90deg,#0f3a2a,#00e5a0)' },
];

const puntos = ['punto1', 'punto2', 'punto3', 'punto4'] as const;

export default function Nosotros() {
  const { lang } = useLanguage();

  return (
    <section id="nosotros" className="py-20" style={{ background: '#0a1020' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px" style={{ background: '#00e5a0' }} />
              <span className="text-xs font-700 uppercase tracking-widest" style={{ color: '#00e5a0', fontWeight: 700, letterSpacing: '0.15em' }}>¿Por qué elegirnos?</span>
            </div>
            <h2 className="mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(32px,4vw,44px)', textTransform: 'uppercase', letterSpacing: '-1px', color: '#eef4ff', lineHeight: 1 }}>
              {tr(t.nosotros.titulo, lang)}
            </h2>
            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(238,244,255,0.7)', fontWeight: 300 }}>
              {tr(t.nosotros.parrafo, lang)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {puntos.map((p) => (
                <div key={p} className="flex items-center gap-2.5 px-4 py-3 rounded-lg"
                  style={{ background: 'rgba(0,229,160,0.05)', border: '1px solid rgba(0,229,160,0.1)' }}>
                  <span style={{ color: '#00e5a0', fontSize: 14, flexShrink: 0 }}>✓</span>
                  <span className="text-sm" style={{ color: 'rgba(238,244,255,0.8)', fontWeight: 400 }}>{tr(t.nosotros[p], lang)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — metrics panel */}
          <div className="rounded-2xl p-7" style={{ background: '#060b18', border: '1px solid rgba(0,229,160,0.1)' }}>
            <div className="text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(238,244,255,0.35)', letterSpacing: '0.15em' }}>
              Impacto típico en clientes
            </div>
            <div className="flex flex-col gap-5">
              {metrics.map((m) => (
                <div key={m.label} className="flex items-center gap-3">
                  <div className="text-xs w-36 flex-shrink-0" style={{ color: 'rgba(238,244,255,0.4)' }}>{m.label}</div>
                  <div className="flex-1 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(238,244,255,0.06)' }}>
                    <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: m.grad }} />
                  </div>
                  <div className="text-xs font-700 w-10 text-right" style={{ color: m.color, fontWeight: 700 }}>{m.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
