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
    const c = canvas; const cx = ctx;
    let animId: number; let W = 0, H = 0;
    interface Particle { x: number; y: number; vx: number; vy: number; r: number; }
    const particles: Particle[] = [];
    function resize() { W = c.offsetWidth; H = c.offsetHeight; c.width = W; c.height = H; }
    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < 50; i++) particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.2 + 0.4,
      });
    }
    function draw() {
      cx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            cx.beginPath();
            cx.strokeStyle = `rgba(37,99,235,${(1 - dist / 120) * 0.14})`;
            cx.lineWidth = 0.5;
            cx.moveTo(particles[i].x, particles[i].y);
            cx.lineTo(particles[j].x, particles[j].y);
            cx.stroke();
          }
        }
      }
      for (const p of particles) {
        cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        cx.fillStyle = 'rgba(37,99,235,0.28)'; cx.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    resize(); initParticles(); draw();
    const ro = new ResizeObserver(() => { resize(); initParticles(); });
    ro.observe(c);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}

/* ─── Animated counter ─── */
function Counter({ target, suffix, color = '#2563eb' }: { target: number; suffix: string; color?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400; const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return (
    <div ref={ref} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 36, lineHeight: 1, letterSpacing: '-1px', color: '#0f172a' }}>
      {val}<span style={{ color, fontSize: 18 }}>{suffix}</span>
    </div>
  );
}

/* ─── Floating stat card ─── */
function StatCard({ value, label, sub, color, icon }: { value: string; label: string; sub?: string; color: string; icon: string }) {
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: 14,
      padding: '12px 16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)',
      minWidth: 140,
    }}>
      <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 26, lineHeight: 1, letterSpacing: '-0.5px', color }}>
        {value}
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', marginTop: 2, fontFamily: 'Barlow, sans-serif' }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 1, fontFamily: 'Barlow, sans-serif' }}>{sub}</div>}
    </div>
  );
}

/* ─── WhatsApp mockup ─── */
function WaMockup({ lang }: { lang: string }) {
  const msgs = [
    { from: 'user', text: lang === 'es' ? 'Hola, quiero reservar un turno para mañana' : 'Hi, I want to book an appointment tomorrow' },
    { from: 'bot',  text: lang === 'es' ? '¡Hola! Encontré disponibilidad a las 10:00hs. ¿Confirmo?' : 'Hi! I found availability at 10am. Shall I confirm?' },
    { from: 'user', text: lang === 'es' ? 'Sí, perfecto' : 'Yes, perfect' },
    { from: 'bot',  text: lang === 'es' ? '✅ ¡Turno confirmado! Código: TRN-4821. ¡Hasta mañana!' : '✅ Appointment confirmed! Code: TRN-4821. See you tomorrow!' },
  ];

  return (
    <div style={{
      width: '100%',
      borderRadius: 24,
      overflow: 'hidden',
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      boxShadow: '0 8px 40px rgba(37,99,235,0.14), 0 2px 8px rgba(0,0,0,0.06)',
    }}>
      {/* Header */}
      <div style={{ padding: '14px 16px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 800, color: '#fff', fontFamily: 'Barlow, sans-serif', flexShrink: 0 }}>B</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', fontFamily: 'Barlow, sans-serif' }}>BetterFlowIA</div>
          <div style={{ fontSize: 11, color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            {lang === 'es' ? 'En línea · responde al instante' : 'Online · responds instantly'}
          </div>
        </div>
        {/* Signal bars */}
        <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end' }}>
          {[8, 12, 16].map((h, i) => (
            <div key={i} style={{ width: 4, borderRadius: 2, height: h, background: i === 2 ? '#2563eb' : '#cbd5e1' }} />
          ))}
        </div>
      </div>

      {/* Chat */}
      <div style={{
        padding: '16px 12px 12px',
        display: 'flex', flexDirection: 'column', gap: 10,
        background: '#f8fafc',
        backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        minHeight: 280,
      }}>
        {/* Timestamp */}
        <div style={{ textAlign: 'center', fontSize: 10, color: '#94a3b8', fontFamily: 'Barlow, sans-serif', marginBottom: 2 }}>
          {lang === 'es' ? 'Hoy · 09:14 AM' : 'Today · 09:14 AM'}
        </div>

        {msgs.map((m, i) => (
          <div key={i} className={`bubble bubble-${i + 1}`} style={{
            alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '85%',
            padding: '9px 13px',
            borderRadius: m.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
            background: m.from === 'user' ? '#2563eb' : '#ffffff',
            border: m.from === 'bot' ? '1px solid #e2e8f0' : 'none',
            boxShadow: m.from === 'bot' ? '0 1px 4px rgba(0,0,0,0.06)' : '0 2px 8px rgba(37,99,235,0.25)',
            fontSize: 12, lineHeight: 1.5,
            color: m.from === 'user' ? '#fff' : '#1e293b',
            fontFamily: 'Barlow, sans-serif',
          }}>{m.text}</div>
        ))}

        {/* Typing */}
        <div style={{ alignSelf: 'flex-start', padding: '10px 14px', borderRadius: '16px 16px 16px 4px', background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', gap: 5, alignItems: 'center' }}>
          <span className="td-1" style={{ width: 6, height: 6, borderRadius: '50%', background: '#93c5fd', display: 'inline-block' }} />
          <span className="td-2" style={{ width: 6, height: 6, borderRadius: '50%', background: '#93c5fd', display: 'inline-block' }} />
          <span className="td-3" style={{ width: 6, height: 6, borderRadius: '50%', background: '#93c5fd', display: 'inline-block' }} />
        </div>
      </div>

      {/* Input */}
      <div style={{ padding: '10px 12px', background: '#fff', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ flex: 1, height: 36, borderRadius: 18, background: '#f1f5f9', border: '1px solid #e2e8f0', fontSize: 12, color: '#94a3b8', display: 'flex', alignItems: 'center', padding: '0 14px', fontFamily: 'Barlow, sans-serif' }}>
          {lang === 'es' ? 'Escribí un mensaje…' : 'Type a message…'}
        </div>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(37,99,235,0.4)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Feature pill ─── */
function FeaturePill({ text }: { text: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 20, background: '#eff6ff', border: '1px solid #bfdbfe', fontSize: 12, color: '#1d4ed8', fontWeight: 600, fontFamily: 'Barlow, sans-serif', whiteSpace: 'nowrap' }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
    <section className="relative overflow-hidden" style={{ background: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
      }} />

      <ParticleCanvas />

      {/* Ambient glows */}
      <div className="absolute pointer-events-none" style={{ top: -140, right: -100, width: 560, height: 560, background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)', borderRadius: '50%' }} />
      <div className="absolute pointer-events-none" style={{ bottom: -80, left: '25%', width: 360, height: 360, background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 65%)', borderRadius: '50%' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 md:pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

          {/* ── Left ── */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7"
              style={{ background: '#eff6ff', border: '1px solid #bfdbfe', animationDelay: '0.05s', opacity: 0 }}>
              <span className="ping-dot" style={{ backgroundColor: '#2563eb', width: 7, height: 7, display: 'inline-block', borderRadius: '50%' }} />
              <span style={{ color: '#1d4ed8', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {tr(t.hero.badge, lang)}
              </span>
            </div>

            {/* H1 */}
            <h1 className="fade-in-up mb-5 leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(46px,5.5vw,68px)', textTransform: 'uppercase', letterSpacing: '-1px', animationDelay: '0.15s', opacity: 0 }}>
              <span className="block" style={{ color: '#0f172a' }}>Optimizamos</span>
              <span className="block" style={{ color: '#2563eb' }}>cómo trabaja</span>
              <span className="block" style={{ color: '#0f172a' }}>tu equipo</span>
            </h1>

            {/* Sub */}
            <p className="fade-in-up mb-8 text-base leading-relaxed"
              style={{ color: '#64748b', fontWeight: 300, maxWidth: 460, animationDelay: '0.28s', opacity: 0 }}>
              {tr(t.hero.subheadline, lang)}
            </p>

            {/* CTAs */}
            <div className="fade-in-up flex flex-col sm:flex-row gap-3 mb-8"
              style={{ animationDelay: '0.38s', opacity: 0 }}>
              <a href="#servicios" className="px-8 py-3.5 text-sm rounded-lg text-center transition-all"
                style={{ background: '#2563eb', color: '#fff', fontWeight: 800, fontFamily: 'Barlow, sans-serif', boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.3)'; }}>
                {tr(t.hero.ctaPrimary, lang)}
              </a>
              <Link href="/productos" className="px-8 py-3.5 text-sm rounded-lg text-center transition-all"
                style={{ border: '1.5px solid #cbd5e1', color: '#334155', background: 'transparent', fontWeight: 600 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#94a3b8'; e.currentTarget.style.background = '#f8fafc'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = 'transparent'; }}>
                {tr(t.hero.ctaSecondary, lang)} →
              </Link>
            </div>

            {/* Pills */}
            <div className="fade-in-up flex flex-wrap gap-2" style={{ animationDelay: '0.48s', opacity: 0 }}>
              {features.map(f => <FeaturePill key={f} text={f} />)}
            </div>
          </div>

          {/* ── Right: mockup + floating cards ── */}
          <div className="fade-in-up hidden lg:block relative" style={{ animationDelay: '0.45s', opacity: 0, width: 420, flexShrink: 0 }}>

            {/* Floating card — top left */}
            <div className="absolute" style={{ top: -16, left: -24, zIndex: 10 }}>
              <StatCard value="−70%" label={lang === 'es' ? 'Tareas manuales' : 'Manual tasks'} sub={lang === 'es' ? 'reducción promedio' : 'average reduction'} color="#ef4444" icon="⚡" />
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute" style={{ bottom: 80, right: -28, zIndex: 10 }}>
              <StatCard value="24/7" label={lang === 'es' ? 'Siempre disponible' : 'Always available'} sub={lang === 'es' ? 'sin intervención humana' : 'no human needed'} color="#2563eb" icon="🤖" />
            </div>

            {/* Floating card — bottom left */}
            <div className="absolute" style={{ bottom: 0, left: -16, zIndex: 10 }}>
              <StatCard value="+90%" label={lang === 'es' ? 'Satisfacción' : 'Satisfaction'} sub={lang === 'es' ? 'clientes reportan mejora' : 'clients report improvement'} color="#10b981" icon="✅" />
            </div>

            {/* Phone frame */}
            <div style={{
              margin: '32px 24px 90px 40px',
              borderRadius: 28,
              padding: 12,
              background: 'linear-gradient(145deg, #f1f5f9, #e2e8f0)',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 24px 64px rgba(37,99,235,0.15), 0 8px 24px rgba(0,0,0,0.08)',
              position: 'relative',
            }}>
              {/* Notch */}
              <div style={{ width: 80, height: 6, background: '#cbd5e1', borderRadius: 3, margin: '0 auto 10px' }} />
              {/* Label */}
              <div style={{ textAlign: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 6, padding: '3px 10px', fontFamily: 'Barlow, sans-serif' }}>
                  Live — FlowMed
                </span>
              </div>
              <WaMockup lang={lang} />
              {/* Home bar */}
              <div style={{ width: 48, height: 4, background: '#cbd5e1', borderRadius: 2, margin: '10px auto 0' }} />
            </div>
          </div>

        </div>

        {/* ── Stats bar ── */}
        <div className="fade-in-up mt-10 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{ background: '#e2e8f0', animationDelay: '0.6s', opacity: 0 }}>
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-5 transition-colors" style={{ background: '#ffffff' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#f8fafc'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#ffffff'; }}>
              <Counter target={s.target} suffix={s.suffix} />
              <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: '#94a3b8', letterSpacing: '0.06em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div style={{ lineHeight: 0, marginTop: 48 }}>
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0 48C240 48 240 12 480 12C720 12 720 48 960 48C1200 48 1200 12 1440 12V48H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}
