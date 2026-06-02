'use client';

import { useEffect, useRef } from 'react';

const WHATSAPP_URL = 'https://wa.me/541165115261';

export default function CTAFinal() {
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
    <section ref={ref as React.RefObject<HTMLDivElement>} style={{ padding: '72px 0', background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7">
        <div
          className="reveal text-center relative overflow-hidden"
          style={{
            background: 'radial-gradient(120% 140% at 80% 15%, var(--navy-700), var(--navy-900))',
            borderRadius: 'var(--radius-lg)',
            padding: '72px 60px',
            color: '#fff',
          }}
        >
          {/* Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 420,
              height: 420,
              borderRadius: '50%',
              filter: 'blur(90px)',
              opacity: 0.5,
              background: 'radial-gradient(circle, rgba(168,85,247,.5), transparent 65%)',
              top: -160,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />

          <p className="flex items-center justify-center gap-2 relative" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--violet-bright)', fontWeight: 600, marginBottom: 18 }}>
            <span style={{ width: 22, height: 2, borderRadius: 2, background: 'var(--grad)', display: 'inline-block' }} />
            Hablemos
          </p>

          <h2 className="relative" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(38px,5vw,64px)', letterSpacing: '-0.01em', lineHeight: 0.94, textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>
            ¿Listo para dejar de perseguir turnos?
          </h2>
          <p className="relative" style={{ color: '#AEB6C8', maxWidth: '50ch', margin: '0 auto 30px', fontSize: 17 }}>
            Contanos qué hace tu negocio y te mostramos, en una charla, cómo lo automatizamos. Sin compromiso.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 relative">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full transition-all"
              style={{ background: 'var(--wa)', color: '#fff', fontWeight: 600, fontSize: 17, padding: '18px 32px', boxShadow: '0 10px 22px -8px rgba(37,211,102,.5)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--wa-deep)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--wa)'; e.currentTarget.style.transform = ''; }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Escribinos por WhatsApp
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full transition-all"
              style={{ background: '#fff', color: 'var(--ink)', fontWeight: 600, fontSize: 17, padding: '18px 32px', boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
            >
              Agendar una demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
