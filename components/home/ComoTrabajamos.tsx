'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    n: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Te escriben por WhatsApp',
    desc: 'El paciente o deportista manda un mensaje. El agente lo identifica por nombre o DNI y abre su ficha al instante.',
  },
  {
    n: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
    title: 'Elige un horario libre',
    desc: 'La IA muestra la disponibilidad real en tiempo real y confirma el turno. Sin llamadas, sin idas y vueltas.',
  },
  {
    n: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
      </svg>
    ),
    title: 'Recordatorio automático',
    desc: 'Confirmación inmediata y recordatorio 24 hs antes. Menos ausencias, más agenda llena.',
  },
];

export default function ComoTrabajamos() {
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
    <section id="como" ref={ref as React.RefObject<HTMLDivElement>} style={{ padding: '104px 0', background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="text-center reveal" style={{ marginBottom: 56 }}>
          <p className="flex items-center justify-center gap-2" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--violet-deep)', fontWeight: 600, marginBottom: 18 }}>
            <span style={{ width: 22, height: 2, borderRadius: 2, background: 'var(--grad)', display: 'inline-block' }} />
            Cómo funciona
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(38px,5vw,64px)', letterSpacing: '-0.01em', lineHeight: 0.94, textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 18 }}>
            Tres pasos. Cero fricción.
          </h2>
          <p style={{ fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: '56ch', margin: '0 auto' }}>
            Lo conectamos a tu WhatsApp y tu agenda. A partir de ahí, trabaja solo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div
                style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '32px 28px', boxShadow: 'var(--shadow-sm)', transition: 'transform .2s, box-shadow .2s', height: '100%' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--violet-deep)', fontWeight: 600 }}>{s.n}</div>
                <div className="flex items-center justify-center" style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg,rgba(168,85,247,.16),rgba(0,196,255,.14))', margin: '14px 0 18px', color: 'var(--violet-deep)' }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 25, textTransform: 'none', letterSpacing: 0, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 9 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 15.5, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
