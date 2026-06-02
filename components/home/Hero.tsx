'use client';

import Link from 'next/link';
import FlowLoopIcon from '@/components/FlowLoopIcon';
import { useLanguage } from '@/lib/LanguageContext';
import { useEffect, useRef } from 'react';

const WHATSAPP_URL = 'https://wa.me/541165115261';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const els = el.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach(e => io.observe(e));
    const fallback = setTimeout(() => els.forEach(e => e.classList.add('in')), 1600);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  return ref;
}

export default function Hero() {
  const { lang } = useLanguage();
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      id="top"
      className="relative overflow-hidden"
      style={{
        background: 'radial-gradient(130% 120% at 78% 10%, #15203B 0%, #060B18 60%)',
        color: '#fff',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-7">
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 56,
            padding: '84px 0 96px',
          }}
        >
          {/* Left: copy */}
          <div className="reveal">
            {/* Eyebrow */}
            <p
              className="flex items-center gap-2"
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 12,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--violet-bright)',
                fontWeight: 600,
                marginBottom: 18,
              }}
            >
              <span style={{ width: 22, height: 2, borderRadius: 2, background: 'linear-gradient(120deg, #A855F7 0%, #00C4FF 100%)', display: 'inline-block', flexShrink: 0 }} />
              Automatización + IA, sin vueltas
            </p>

            {/* H1 */}
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(44px, 6vw, 78px)',
                letterSpacing: '-0.01em',
                lineHeight: 0.94,
                textTransform: 'uppercase',
                marginBottom: 22,
                color: '#fff',
              }}
            >
              Menos teléfono.<br />
              Mejor experiencia{' '}
              <span style={{ background: 'linear-gradient(120deg, #A855F7 0%, #00C4FF 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                para las personas.
              </span>
            </h1>

            {/* Lede */}
            <p
              style={{
                fontSize: 'clamp(18px, 1.5vw, 21px)',
                lineHeight: 1.55,
                color: '#AEB6C8',
                maxWidth: '56ch',
                marginBottom: 32,
              }}
            >
              Implementamos agentes de WhatsApp e inteligencia artificial que reservan y confirman turnos{' '}
              <strong style={{ color: '#fff' }}>las 24 horas</strong>. Tu equipo suelta el teléfono; tus clientes agendan desde el chat que ya usan todos los días.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: 30 }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full transition-all"
                style={{
                  background: 'var(--wa)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 17,
                  padding: '18px 32px',
                  boxShadow: '0 10px 22px -8px rgba(37,211,102,.5)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--wa-deep)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--wa)'; e.currentTarget.style.transform = ''; }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Hablar con nosotros
              </a>
              <Link
                href="/#como"
                className="rounded-full transition-all"
                style={{
                  background: 'transparent',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 17,
                  padding: '17px 32px',
                  border: '1.5px solid rgba(255,255,255,.22)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)')}
              >
                Ver cómo funciona
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <div
                className="flex items-center gap-2 rounded-full"
                style={{
                  background: 'rgba(168,85,247,.18)',
                  border: '1px solid rgba(168,85,247,.4)',
                  color: '#fff',
                  padding: '7px 14px',
                  fontWeight: 600,
                  fontSize: 14.5,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--violet-bright)" strokeWidth="2.2" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                </svg>
                Reservás 24/7
              </div>
              {['Sin app que instalar', 'Listo en días'].map((label) => (
                <div key={label} className="flex items-center gap-2" style={{ fontSize: 14.5, color: '#AEB6C8' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.4" style={{ flexShrink: 0 }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp phone mockup */}
          <div className="flex justify-center lg:justify-end reveal" style={{ animationDelay: '0.15s' }}>
            <div
              style={{
                position: 'relative',
                width: 340,
                maxWidth: '100%',
                background: '#0B141A',
                borderRadius: 38,
                padding: 12,
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(255,255,255,.06)',
              }}
            >
              <div style={{ borderRadius: 28, overflow: 'hidden', background: '#E5DDD5' }}>
                {/* WA header */}
                <div
                  className="flex items-center gap-3"
                  style={{ background: '#075E54', color: '#fff', padding: '16px 16px 14px' }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--grad)' }}
                  >
                    <FlowLoopIcon size={24} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15.5, lineHeight: 1.1 }}>FlowSport · Complejo</div>
                    <div className="flex items-center gap-1" style={{ fontSize: 12, color: '#B7D8D2' }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3ad07f', display: 'inline-block' }} />
                      en línea
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div
                  className="flex flex-col gap-2"
                  style={{ background: '#E5DDD5', padding: '18px 14px', minHeight: 340 }}
                >
                  {[
                    { me: false, text: '¡Hola! 👋 ¿Querés reservar una cancha? Decime día y horario y te muestro lo libre.', time: '18:40' },
                    { me: true,  text: 'Hoy a la noche, fútbol 5', time: '18:40' },
                    { me: false, text: 'Para hoy me queda:\n⚽ 20:00 — Cancha 3\n⚽ 21:00 — Cancha 1\n⚽ 22:00 — Cancha 3', time: '18:40' },
                    { me: true,  text: 'Dale, 21 en la 1', time: '18:41' },
                  ].map((msg, i) => (
                    <div key={i} className={`bubble bubble-${i + 1} flex ${msg.me ? 'justify-end' : 'justify-start'}`}>
                      <div
                        style={{
                          maxWidth: '80%',
                          padding: '9px 12px',
                          borderRadius: 12,
                          borderTopLeftRadius: msg.me ? 12 : 3,
                          borderTopRightRadius: msg.me ? 3 : 12,
                          fontSize: 14,
                          lineHeight: 1.42,
                          boxShadow: '0 1px 1px rgba(0,0,0,.08)',
                          background: msg.me ? '#D9FDD3' : '#fff',
                          color: '#111B21',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {msg.text}
                        <span style={{ display: 'block', textAlign: 'right', fontSize: 10.5, color: msg.me ? 'rgba(7,94,84,.5)' : 'rgba(0,0,0,.42)', marginTop: 3, fontFamily: 'var(--font-mono), monospace' }}>
                          {msg.time}{msg.me && <span style={{ color: '#34B7F1', fontWeight: 700 }}> ✓✓</span>}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Confirmation card */}
                  <div className="bubble bubble-4 flex justify-start" style={{ animationDelay: '2.0s' }}>
                    <div style={{ maxWidth: '86%', borderRadius: 12, borderTopLeftRadius: 3, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 1px rgba(0,0,0,.08)' }}>
                      <div style={{ background: 'var(--green)', color: 'var(--navy-900)', padding: '8px 12px', fontFamily: 'var(--font-mono), monospace', fontSize: 11, fontWeight: 600, letterSpacing: '0.04em' }}>
                        RES-2207 · RESERVADO
                      </div>
                      <div style={{ padding: '11px 12px', fontSize: 13.5, color: '#111B21' }}>
                        <strong style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 17 }}>Hoy · 21:00</strong><br />
                        Cancha 1 · Fútbol 5<br />
                        Seña abonada ✅
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2" style={{ background: '#F0F0F0', padding: '9px 12px' }}>
                  <div style={{ flex: 1, background: '#fff', borderRadius: 999, padding: '9px 14px', fontSize: 13, color: '#9aa0a6' }}>
                    Escribí un mensaje…
                  </div>
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--wa)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
