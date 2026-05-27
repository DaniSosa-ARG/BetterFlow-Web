'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';
import { useEffect, useRef, useState } from 'react';

/* ─── Particle canvas — versión light (partículas azul claro, muy sutiles) ─── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const c = canvas;
    const cx = ctx;
    let animId: number;
    let W = 0, H = 0;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
    }

    const PARTICLE_COUNT = 55;
    const MAX_DIST = 120;
    const particles: Particle[] = [];

    function resize() {
      W = c.offsetWidth;
      H = c.offsetHeight;
      c.width = W;
      c.height = H;
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.4 + 0.4,
        });
      }
    }

    function draw() {
      cx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            cx.beginPath();
            cx.strokeStyle = `rgba(37,99,235,${alpha})`;
            cx.lineWidth = 0.5;
            cx.moveTo(particles[i].x, particles[i].y);
            cx.lineTo(particles[j].x, particles[j].y);
            cx.stroke();
          }
        }
      }

      for (const p of particles) {
        cx.beginPath();
        cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        cx.fillStyle = 'rgba(37,99,235,0.35)';
        cx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    const ro = new ResizeObserver(() => { resize(); initParticles(); });
    ro.observe(c);

    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}

/* ─── Animated counter ─── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 900, fontSize: 38, lineHeight: 1, letterSpacing: '-1px', color: '#0f172a',
    }}>
      {val}<span style={{ color: '#2563eb', fontSize: 20 }}>{suffix}</span>
    </div>
  );
}

/* ─── WhatsApp mockup — light ─── */
function WaMockup({ lang }: { lang: string }) {
  const msgs = [
    { from: 'user', text: lang === 'es' ? 'Hola, quiero reservar un turno' : 'Hi, I want to book an appointment' },
    { from: 'bot',  text: lang === 'es' ? '¡Hola! ¿Para cuándo lo necesitás?' : 'Hi! When do you need it?' },
    { from: 'user', text: lang === 'es' ? 'Para mañana a las 10hs' : 'Tomorrow at 10am' },
    { from: 'bot',  text: lang === 'es' ? '✅ ¡Confirmado! Código: TRN-4821' : '✅ Confirmed! Code: TRN-4821' },
  ];

  return (
    <div style={{
      width: 270,
      borderRadius: 22,
      overflow: 'hidden',
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 20px 50px rgba(37,99,235,0.12), 0 8px 24px rgba(0,0,0,0.06)',
    }}>
      {/* Status bar */}
      <div style={{
        padding: '10px 14px 8px',
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: '50%',
          background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 800, color: '#fff',
          fontFamily: 'Barlow, sans-serif',
          flexShrink: 0,
        }}>B</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', fontFamily: 'Barlow, sans-serif' }}>BetterFlowIA</div>
          <div style={{ fontSize: 10, color: '#10b981', fontWeight: 600 }}>● en línea</div>
        </div>
        {/* Signal dots */}
        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {[8, 11, 14].map((h, i) => (
            <div key={i} style={{ width: 3, borderRadius: 2, height: h, background: i < 2 ? '#94a3b8' : '#2563eb' }} />
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div style={{
        padding: '14px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        background: '#f8fafc',
        backgroundImage: 'radial-gradient(rgba(37,99,235,0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        minHeight: 195,
      }}>
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`bubble bubble-${i + 1}`}
            style={{
              alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '82%',
              padding: '7px 11px',
              borderRadius: m.from === 'user' ? '14px 14px 3px 14px' : '14px 14px 14px 3px',
              background: m.from === 'user' ? '#2563eb' : '#ffffff',
              border: m.from === 'bot' ? '1px solid #e2e8f0' : 'none',
              boxShadow: m.from === 'bot' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
              fontSize: 11,
              color: m.from === 'user' ? '#ffffff' : '#1e293b',
              fontFamily: 'Barlow, sans-serif',
              lineHeight: 1.45,
              fontWeight: m.from === 'user' ? 400 : 400,
            }}
          >
            {m.text}
          </div>
        ))}
        {/* Typing dots */}
        <div style={{
          alignSelf: 'flex-start',
          padding: '9px 13px',
          borderRadius: '14px 14px 14px 3px',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          display: 'flex', gap: 4, alignItems: 'center',
        }}>
          <span className="td-1" style={{ width: 5, height: 5, borderRadius: '50%', background: '#93c5fd', display: 'inline-block' }} />
          <span className="td-2" style={{ width: 5, height: 5, borderRadius: '50%', background: '#93c5fd', display: 'inline-block' }} />
          <span className="td-3" style={{ width: 5, height: 5, borderRadius: '50%', background: '#93c5fd', display: 'inline-block' }} />
        </div>
      </div>

      {/* Input bar */}
      <div style={{
        padding: '8px 10px',
        background: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <div style={{
          flex: 1, height: 30, borderRadius: 15,
          background: '#f1f5f9',
          border: '1px solid #e2e8f0',
          fontSize: 10, color: '#94a3b8',
          display: 'flex', alignItems: 'center',
          padding: '0 10px',
          fontFamily: 'Barlow, sans-serif',
        }}>Escribí un mensaje…</div>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: '#2563eb',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Feature pill ─── */
function FeaturePill({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 12px', borderRadius: 20,
      background: '#eff6ff', border: '1px solid #bfdbfe',
      fontSize: 12, color: '#1d4ed8', fontWeight: 600,
      fontFamily: 'Barlow, sans-serif',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ fontSize: 13 }}>{icon}</span>
      {text}
    </div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const { lang } = useLanguage();

  const stats = [
    { target: 30,  suffix: 'd',     label: lang === 'es' ? 'Resultados medibles' : 'Measurable results' },
    { target: 24,  suffix: '/7',    label: lang === 'es' ? 'Negocio operando'    : 'Business running'   },
    { target: 25,  suffix: 'usd',   label: lang === 'es' ? 'Desde / por mes'     : 'Starting / month'   },
    { target: 0,   suffix: 'setup', label: lang === 'es' ? 'Sin costo inicial'   : 'No setup fee'       },
  ];

  const features = lang === 'es'
    ? ['WhatsApp 24/7', 'Sin contrato', 'Resultados en 30 días', 'Primer mes gratis']
    : ['WhatsApp 24/7', 'No contract', 'Results in 30 days', 'First month free'];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#ffffff', borderBottom: '1px solid #f1f5f9' }}
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(37,99,235,0.08) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Blue ambient glow — top right */}
      <div className="absolute pointer-events-none" style={{
        top: -120, right: -80,
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)',
        borderRadius: '50%',
      }} />
      {/* Teal accent glow — bottom left */}
      <div className="absolute pointer-events-none" style={{
        bottom: -60, left: '30%',
        width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 65%)',
        borderRadius: '50%',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 md:pt-28">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Left: copy ── */}
          <div className="flex-1 max-w-xl">

            {/* Badge */}
            <div
              className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7"
              style={{
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                animationDelay: '0.05s', opacity: 0,
              }}
            >
              <span
                className="ping-dot-blue w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#2563eb', width: 7, height: 7, display: 'inline-block', borderRadius: '50%' }}
              />
              <span style={{ color: '#1d4ed8', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {tr(t.hero.badge, lang)}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="fade-in-up mb-5 leading-none"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(46px, 5.5vw, 66px)',
                textTransform: 'uppercase',
                letterSpacing: '-1px',
                animationDelay: '0.15s', opacity: 0,
              }}
            >
              <span className="block" style={{ color: '#0f172a' }}>Optimizamos</span>
              <span className="block" style={{ color: '#2563eb' }}>cómo trabaja</span>
              <span className="block" style={{ color: '#0f172a' }}>tu equipo</span>
            </h1>

            {/* Sub */}
            <p
              className="fade-in-up mb-8 text-base leading-relaxed"
              style={{ color: '#64748b', fontWeight: 300, maxWidth: 460, animationDelay: '0.28s', opacity: 0 }}
            >
              {tr(t.hero.subheadline, lang)}
            </p>

            {/* CTAs */}
            <div
              className="fade-in-up flex flex-col sm:flex-row gap-3 mb-8"
              style={{ animationDelay: '0.38s', opacity: 0 }}
            >
              <a
                href="#servicios"
                className="px-8 py-3.5 text-sm rounded-lg text-center transition-all"
                style={{
                  background: '#2563eb', color: '#fff',
                  fontWeight: 800, fontFamily: 'Barlow, sans-serif',
                  boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.3)'; e.currentTarget.style.transform = ''; }}
              >
                {tr(t.hero.ctaPrimary, lang)}
              </a>
              <Link
                href="/productos"
                className="px-8 py-3.5 text-sm rounded-lg text-center transition-all"
                style={{ border: '1.5px solid #cbd5e1', color: '#334155', background: 'transparent', fontWeight: 600 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#94a3b8'; e.currentTarget.style.background = '#f8fafc'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = 'transparent'; }}
              >
                {tr(t.hero.ctaSecondary, lang)} →
              </Link>
            </div>

            {/* Feature pills */}
            <div
              className="fade-in-up flex flex-wrap gap-2"
              style={{ animationDelay: '0.48s', opacity: 0 }}
            >
              {features.map(f => <FeaturePill key={f} icon="✓" text={f} />)}
            </div>
          </div>

          {/* ── Right: mockup ── */}
          <div
            className="fade-in-up hidden lg:flex flex-col items-center gap-3"
            style={{ animationDelay: '0.5s', opacity: 0, paddingBottom: 0 }}
          >
            {/* Label */}
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#1d4ed8', background: '#eff6ff',
              border: '1px solid #bfdbfe', borderRadius: 6, padding: '4px 12px',
            }}>
              Live — FlowMed
            </div>

            <WaMockup lang={lang} />

            {/* Trust line */}
            <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500, marginTop: 4 }}>
              🔒 {lang === 'es' ? 'Datos seguros · Sin acceso a tu agenda' : 'Secure data · No calendar access'}
            </div>
          </div>

        </div>

        {/* ── Stats bar ── */}
        <div
          className="fade-in-up mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{ background: '#e2e8f0', animationDelay: '0.55s', opacity: 0 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-6 py-5 transition-colors"
              style={{ background: '#ffffff' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#f8fafc'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#ffffff'; }}
            >
              <Counter target={s.target} suffix={s.suffix} />
              <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: '#94a3b8', letterSpacing: '0.06em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave separator */}
      <div style={{ lineHeight: 0, marginTop: 48 }}>
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0 48C240 48 240 12 480 12C720 12 720 48 960 48C1200 48 1200 12 1440 12V48H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}
