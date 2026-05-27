'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';
import { useEffect, useRef, useState } from 'react';

/* ─── Particle canvas ─── */
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

    const PARTICLE_COUNT = 72;
    const MAX_DIST = 130;
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
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() * 1.8 + 0.6,
        });
      }
    }

    function draw() {
      cx.clearRect(0, 0, W, H);

      // update
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35;
            cx.beginPath();
            cx.strokeStyle = `rgba(168,85,247,${alpha})`;
            cx.lineWidth = 0.6;
            cx.moveTo(particles[i].x, particles[i].y);
            cx.lineTo(particles[j].x, particles[j].y);
            cx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        cx.beginPath();
        cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        cx.fillStyle = 'rgba(168,85,247,0.7)';
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
    <div ref={ref} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 38, lineHeight: 1, letterSpacing: '-1px', color: '#f3e8ff' }}>
      {val}<span style={{ color: '#a855f7', fontSize: 20 }}>{suffix}</span>
    </div>
  );
}

/* ─── WhatsApp mockup ─── */
function WaMockup({ lang }: { lang: string }) {
  const msgs = [
    { from: 'user', text: lang === 'es' ? 'Hola, quiero reservar un turno' : 'Hi, I want to book an appointment', delay: 0.3 },
    { from: 'bot',  text: lang === 'es' ? '¡Hola! ¿Para cuándo lo necesitás?' : 'Hi! When do you need it?', delay: 0.9 },
    { from: 'user', text: lang === 'es' ? 'Para mañana a las 10hs' : 'Tomorrow at 10am', delay: 1.6 },
    { from: 'bot',  text: lang === 'es' ? '✅ ¡Confirmado! Código: TRN-4821' : '✅ Confirmed! Code: TRN-4821', delay: 2.3 },
  ];

  return (
    <div style={{
      width: 260, borderRadius: 20, overflow: 'hidden',
      background: '#0d0a1a',
      border: '1px solid rgba(168,85,247,0.25)',
      boxShadow: '0 0 60px rgba(168,85,247,0.12), 0 24px 48px rgba(0,0,0,0.5)',
    }}>
      {/* header */}
      <div style={{ padding: '12px 14px', background: 'linear-gradient(135deg, #1a0a3c, #120828)', borderBottom: '1px solid rgba(168,85,247,0.2)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff', fontFamily: 'Barlow, sans-serif' }}>B</div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#f3e8ff', fontFamily: 'Barlow, sans-serif' }}>BetterFlowIA</div>
          <div style={{ fontSize: 10, color: '#a855f7' }}>● en línea</div>
        </div>
      </div>
      {/* messages */}
      <div style={{ padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 8, background: '#0a0718', minHeight: 180 }}>
        {msgs.map((m, i) => (
          <div key={i} className={`bubble bubble-${i + 1}`} style={{
            alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '80%',
            padding: '7px 10px',
            borderRadius: m.from === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
            background: m.from === 'user' ? 'rgba(168,85,247,0.85)' : 'rgba(255,255,255,0.07)',
            border: m.from === 'bot' ? '1px solid rgba(168,85,247,0.2)' : 'none',
            fontSize: 11,
            color: '#f3e8ff',
            fontFamily: 'Barlow, sans-serif',
            lineHeight: 1.4,
          }}>{m.text}</div>
        ))}
        {/* typing indicator */}
        <div style={{ alignSelf: 'flex-start', padding: '8px 12px', borderRadius: '12px 12px 12px 2px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(168,85,247,0.2)', display: 'flex', gap: 4, alignItems: 'center' }}>
          <span className="td-1" style={{ width: 5, height: 5, borderRadius: '50%', background: '#a855f7', display: 'inline-block' }} />
          <span className="td-2" style={{ width: 5, height: 5, borderRadius: '50%', background: '#a855f7', display: 'inline-block' }} />
          <span className="td-3" style={{ width: 5, height: 5, borderRadius: '50%', background: '#a855f7', display: 'inline-block' }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const { lang } = useLanguage();

  const stats = [
    { target: 30, suffix: 'd',    label: lang === 'es' ? 'Resultados medibles' : 'Measurable results' },
    { target: 24, suffix: '/7',   label: lang === 'es' ? 'Negocio operando'    : 'Business running'   },
    { target: 25, suffix: 'usd',  label: lang === 'es' ? 'Desde / por mes'     : 'Starting / month'   },
    { target: 0,  suffix: 'setup',label: lang === 'es' ? 'Sin costo inicial'   : 'No setup fee'       },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 min-h-[560px]" style={{ background: '#060b18' }}>

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.04) 1px,transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 70% at 15% 50%, rgba(26,10,60,0.95) 0%,transparent 65%), radial-gradient(ellipse 45% 55% at 75% 25%, rgba(124,58,237,0.08) 0%,transparent 60%), radial-gradient(ellipse 35% 45% at 85% 80%, rgba(232,121,249,0.06) 0%,transparent 55%)',
      }} />

      {/* Decorative ring */}
      <svg className="absolute pointer-events-none"
        style={{ right: -60, top: '50%', transform: 'translateY(-50%)', width: 520, height: 520, opacity: 0.04 }}
        viewBox="0 0 520 520" fill="none">
        <circle cx="260" cy="260" r="200" stroke="#a855f7" strokeWidth="28" strokeDasharray="980 280" strokeLinecap="round" />
        <circle cx="260" cy="260" r="145" stroke="#e879f9" strokeWidth="10" strokeDasharray="680 200" strokeLinecap="round" transform="rotate(35 260 260)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: copy ── */}
          <div className="flex-1 max-w-xl">

            {/* Badge */}
            <div className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded mb-7"
              style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.28)', animationDelay: '0.05s', opacity: 0 }}>
              <span className="w-1.5 h-1.5 rounded-full ping-dot" style={{ backgroundColor: '#a855f7' }} />
              <span style={{ color: '#a855f7', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {tr(t.hero.badge, lang)}
              </span>
            </div>

            {/* Headline */}
            <h1 className="fade-in-up mb-5 leading-none" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 'clamp(46px,5.5vw,66px)',
              textTransform: 'uppercase', letterSpacing: '-1px',
              animationDelay: '0.15s', opacity: 0,
            }}>
              <span className="block" style={{ color: '#f3e8ff' }}>Optimizamos</span>
              <span className="block" style={{ WebkitTextStroke: '1.5px rgba(168,85,247,0.55)', color: 'transparent' }}>cómo trabaja</span>
              <span className="block" style={{
                background: 'linear-gradient(90deg,#a855f7,#e879f9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>tu equipo</span>
            </h1>

            {/* Sub */}
            <p className="fade-in-up mb-9 text-base leading-relaxed" style={{
              color: 'rgba(243,232,255,0.65)', fontWeight: 300, maxWidth: 460,
              animationDelay: '0.28s', opacity: 0,
            }}>
              {tr(t.hero.subheadline, lang)}
            </p>

            {/* CTAs */}
            <div className="fade-in-up flex flex-col sm:flex-row gap-3" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <a href="#servicios"
                className="px-8 py-3.5 text-sm rounded font-800 transition-all text-center"
                style={{
                  background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
                  color: '#fff', fontWeight: 800,
                  fontFamily: 'Barlow, sans-serif',
                  boxShadow: '0 6px 28px rgba(168,85,247,0.4)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(168,85,247,0.55)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(168,85,247,0.4)'; e.currentTarget.style.transform = ''; }}
              >
                {tr(t.hero.ctaPrimary, lang)}
              </a>
              <Link href="/productos"
                className="px-8 py-3.5 text-sm rounded font-600 transition-all text-center"
                style={{ border: '1.5px solid rgba(168,85,247,0.28)', color: '#f3e8ff', backgroundColor: 'transparent', fontWeight: 600 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)'; e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.28)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                {tr(t.hero.ctaSecondary, lang)} →
              </Link>
            </div>
          </div>

          {/* ── Right: mockup ── */}
          <div className="fade-in-up hidden lg:flex flex-col items-center gap-4" style={{ animationDelay: '0.5s', opacity: 0 }}>
            {/* Floating label */}
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#a855f7', background: 'rgba(168,85,247,0.1)',
              border: '1px solid rgba(168,85,247,0.25)', borderRadius: 6, padding: '4px 12px',
            }}>
              Live — FlowMed
            </div>
            <WaMockup lang={lang} />
            {/* Glow under mockup */}
            <div style={{
              width: 180, height: 18,
              background: 'radial-gradient(ellipse, rgba(168,85,247,0.35) 0%, transparent 70%)',
              marginTop: -8,
            }} />
          </div>

        </div>

        {/* ── Stats bar ── */}
        <div className="fade-in-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{ background: 'rgba(168,85,247,0.12)', animationDelay: '0.55s', opacity: 0 }}>
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-5 transition-colors"
              style={{ background: '#0d0a1a' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#130e24'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#0d0a1a'; }}
            >
              <Counter target={s.target} suffix={s.suffix} />
              <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: 'rgba(243,232,255,0.4)', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
