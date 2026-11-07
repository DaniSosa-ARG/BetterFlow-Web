'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const WHATSAPP_URL = 'https://wa.me/541164791603';

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
              Tu equipo,<br />
              trabajando mejor.<br />
              <span style={{ background: 'linear-gradient(120deg, #A855F7 0%, #00C4FF 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                Más foco en crecer.
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
              Diagnosticamos cómo trabaja tu equipo hoy, rediseñamos los procesos que frenan el crecimiento e incorporamos IA donde realmente suma. Resultados medibles en 30 días.
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

          {/* Right: bento grid 2×2 */}
          <div className="flex justify-center lg:justify-end reveal" style={{ animationDelay: '0.15s' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
                width: 340,
                maxWidth: '100%',
              }}
            >
              {[
                {
                  icon: '🔍',
                  title: 'Diagnóstico',
                  sub: 'Oportunidades para ser más eficientes',
                  accent: 'rgba(168,85,247',
                },
                {
                  icon: '⚙️',
                  title: 'Diseño',
                  sub: 'Procesos que fluyen',
                  accent: 'rgba(168,85,247',
                },
                {
                  icon: '🤖',
                  title: 'Incorporamos IA',
                  sub: 'Agentes donde realmente suman',
                  accent: 'rgba(0,196,255',
                },
                {
                  icon: '📈',
                  title: 'Resultados',
                  sub: 'Medibles en 30 días',
                  accent: 'rgba(0,229,160',
                },
              ].map((cell) => (
                <div
                  key={cell.title}
                  style={{
                    background: `${cell.accent},0.09)`,
                    border: `0.5px solid ${cell.accent},0.25)`,
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{cell.icon}</div>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#f3e8ff',
                  }}>
                    {cell.title}
                  </div>
                  <div style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 400,
                    fontSize: 12,
                    color: 'rgba(243,232,255,0.55)',
                    marginTop: 4,
                  }}>
                    {cell.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
