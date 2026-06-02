'use client';

import { useEffect, useRef } from 'react';

const cells = [
  {
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Cada minuto que tu equipo no pasa al teléfono, lo pasa con la gente',
    desc: 'Automatizamos lo repetitivo para que tu secretaría atienda mejor lo que de verdad importa. La IA no reemplaza el trato humano — lo libera.',
    big: null,
  },
  {
    wide: false,
    icon: null,
    title: 'Siempre disponible',
    desc: 'Tus clientes agendan cuando pueden, no cuando vos abrís.',
    big: '24/7',
  },
  {
    wide: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/>
      </svg>
    ),
    title: 'Panel y dashboard',
    desc: 'Toda la operación y tus datos, en una pantalla clara para tu equipo.',
    big: null,
  },
  {
    wide: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Sin tecnicismos, sin proyectos eternos',
    desc: 'Hablamos tu idioma, no el de los ingenieros. Implementamos rápido, te acompañamos y ajustamos sobre la marcha. En días, no en meses.',
    big: null,
  },
];

export default function Nosotros() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const els = el.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach(e => io.observe(e));
    const fb = setTimeout(() => els.forEach(e => e.classList.add('in')), 1600);
    return () => { io.disconnect(); clearTimeout(fb); };
  }, []);

  return (
    <section id="nosotros" ref={ref as React.RefObject<HTMLDivElement>} style={{ padding: '104px 0', background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="text-center reveal" style={{ marginBottom: 56 }}>
          <p className="flex items-center justify-center gap-2" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--violet-deep)', fontWeight: 600, marginBottom: 18 }}>
            <span style={{ width: 22, height: 2, borderRadius: 2, background: 'var(--grad)', display: 'inline-block' }} />
            Por qué BetterFlowIA
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(38px,5vw,64px)', letterSpacing: '-0.01em', lineHeight: 0.94, textTransform: 'uppercase', color: 'var(--ink)' }}>
            Tecnología que se siente humana
          </h2>
        </div>

        {/* Bento grid */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {cells.map((c, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                gridColumn: c.wide ? 'span 2' : undefined,
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-lg)',
                padding: 30,
                boxShadow: 'var(--shadow-sm)',
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {c.big ? (
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 58, lineHeight: 1, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12 }}>
                  {c.big}
                </div>
              ) : c.icon ? (
                <div className="flex items-center justify-center" style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--cream-2)', color: 'var(--violet-deep)', marginBottom: 16 }}>
                  {c.icon}
                </div>
              ) : null}
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 22, textTransform: 'none', letterSpacing: 0, color: 'var(--ink)', marginBottom: 8, lineHeight: 1.2 }}>
                {c.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
