'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import FlowLoopIcon from '@/components/FlowLoopIcon';

const products = [
  {
    id: 'med',
    tag: 'Salud',
    tagColor: 'var(--cyan)',
    name: 'Flow',
    nameB: 'Med',
    accentColor: 'var(--cyan)',
    bg: 'radial-gradient(120% 130% at 85% 12%, #0a2a3a, var(--navy-900))',
    desc: 'Gestión de turnos para consultorios y clínicas. Tus pacientes agendan en segundos; tu secretaría respira.',
    features: ['Identificación por nombre o DNI', 'Disponibilidad en tiempo real', 'Recordatorios que reducen ausencias'],
    href: '/productos#flowmed',
    ctaLabel: 'Conocer FlowMed',
    symbolColor: 'var(--cyan)',
  },
  {
    id: 'sport',
    tag: 'Deporte',
    tagColor: 'var(--green)',
    name: 'Flow',
    nameB: 'Sport',
    accentColor: 'var(--green)',
    bg: 'radial-gradient(120% 130% at 85% 12%, #0a3329, var(--navy-900))',
    desc: 'Reservas de canchas y espacios deportivos. Tus clientes reservan y señan solos, incluso a las 2 de la mañana.',
    features: ['Reserva y seña por WhatsApp', 'Disponibilidad por cancha y horario', 'Menos huecos, más ocupación'],
    href: '/productos#flowsport',
    ctaLabel: 'Conocer FlowSport',
    symbolColor: 'var(--green)',
  },
];

export default function ProductosDestacados() {
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
    <section id="productos" ref={ref as React.RefObject<HTMLDivElement>} style={{ padding: '104px 0', background: 'var(--cream-2)' }}>
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="text-center reveal" style={{ marginBottom: 56 }}>
          <p className="flex items-center justify-center gap-2" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--violet-deep)', fontWeight: 600, marginBottom: 18 }}>
            <span style={{ width: 22, height: 2, borderRadius: 2, background: 'var(--grad)', display: 'inline-block' }} />
            Nuestros productos
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(38px,5vw,64px)', letterSpacing: '-0.01em', lineHeight: 0.94, textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 18 }}>
            Una base, dos mundos
          </h2>
          <p style={{ fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: '56ch', margin: '0 auto' }}>
            El mismo motor de IA, afinado para lo que tu negocio necesita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="reveal flex flex-col"
              style={{
                background: p.bg,
                borderRadius: 'var(--radius-lg)',
                padding: 40,
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 320,
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div style={{ width: 60, height: 60, marginBottom: 22 }}>
                <FlowLoopIcon size={60} color={p.symbolColor} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: p.accentColor }}>
                {p.tag}
              </span>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 40, lineHeight: 0.9, margin: '8px 0 14px' }}>
                {p.name}<b style={{ color: p.accentColor }}>{p.nameB}</b>
              </div>
              <p style={{ color: '#C3CAD8', fontSize: 15.5, lineHeight: 1.55, margin: '0 0 22px', maxWidth: '42ch' }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2" style={{ fontSize: 14.5, color: '#D6DCE8' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" width="18" height="18" style={{ flexShrink: 0, marginTop: 2, color: p.accentColor }}>
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href={p.href}
                className="mt-auto inline-flex items-center gap-2 transition-all"
                style={{ color: p.accentColor, fontWeight: 600, fontSize: 15.5 }}
                onMouseEnter={e => (e.currentTarget.querySelector('svg') as SVGElement | null)?.style.setProperty('transform', 'translateX(4px)')}
                onMouseLeave={e => (e.currentTarget.querySelector('svg') as SVGElement | null)?.style.setProperty('transform', '')}
              >
                {p.ctaLabel}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" width="17" height="17" style={{ transition: 'transform .2s' }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
