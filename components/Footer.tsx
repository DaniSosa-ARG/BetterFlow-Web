'use client';

import Link from 'next/link';
import FlowLoopIcon from './FlowLoopIcon';

const WHATSAPP_URL = 'https://wa.me/541165115261';

export default function Footer() {
  return (
    <footer id="blog" style={{ background: 'var(--navy-900)', color: '#AEB6C8', padding: '72px 0 40px' }}>
      <div className="max-w-[1200px] mx-auto px-7">
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: '1.6fr 1fr 1fr 1fr' }}
        >
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
              <FlowLoopIcon size={36} />
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 22,
                letterSpacing: '-0.01em',
                color: '#fff',
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'flex-start',
              }}>
                BetterFlow
                <sup style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, fontWeight: 600, color: 'var(--violet-bright)', marginLeft: 3, marginTop: 2 }}>
                  IA
                </sup>
              </span>
            </div>
            <p style={{ fontSize: 14.5, maxWidth: '34ch', margin: 0, color: '#AEB6C8', lineHeight: 1.55 }}>
              Automatización e inteligencia artificial para empresas argentinas. Flujos de valor inteligentes.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#717C92', margin: '0 0 16px', fontWeight: 600 }}>
              Producto
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'FlowMed', href: '/productos#flowmed' },
                { label: 'FlowSport', href: '/productos#flowsport' },
                { label: 'Cómo funciona', href: '/#como' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: 15, color: '#AEB6C8', transition: 'color .15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#AEB6C8')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#717C92', margin: '0 0 16px', fontWeight: 600 }}>
              Empresa
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'Nosotros', href: '/#nosotros' },
                { label: 'Blog', href: '/#blog' },
                { label: 'Contacto', href: WHATSAPP_URL, external: true },
              ].map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 15, color: '#AEB6C8', transition: 'color .15s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#AEB6C8')}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} style={{ fontSize: 15, color: '#AEB6C8', transition: 'color .15s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#AEB6C8')}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hablemos */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#717C92', margin: '0 0 16px', fontWeight: 600 }}>
              Hablemos
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'WhatsApp', href: WHATSAPP_URL },
                { label: 'hola@betterflowia.com', href: 'mailto:hola@betterflowia.com' },
                { label: 'Instagram', href: '#' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 15, color: '#AEB6C8', transition: 'color .15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#AEB6C8')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-wrap justify-between items-center gap-3"
          style={{ marginTop: 56, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.08)', fontSize: 13.5, color: '#717C92' }}
        >
          <span>© 2026 BetterFlowIA · Hecho en Argentina 🇦🇷</span>
          <span>Términos · Privacidad</span>
        </div>
      </div>
    </footer>
  );
}
