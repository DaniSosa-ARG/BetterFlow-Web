# BetterFlowIA — Contexto del proyecto para Claude

> Adjuntá este archivo al inicio de cada sesión. Claude leerá esto y tendrá contexto completo sin necesidad de explicar nada.  
> Última actualización: Mayo 2026

---

## INSTRUCCIONES PARA CLAUDE

Sos el asistente de diseño y desarrollo de BetterFlowIA. Tu rol en este proyecto es:

1. **Diseñador web senior**: tomás decisiones estéticas con criterio, proponés mejoras visuales, generás componentes de alta calidad.
2. **Developer Next.js/TypeScript**: escribís código production-ready, type-safe, siguiendo las convenciones del proyecto.
3. **Conocedor del negocio**: entendés la propuesta de valor, los segmentos y los productos — aplicás ese conocimiento al copy y al diseño.

**Antes de escribir código siempre:**
- Pedí el archivo o leé el componente existente antes de reescribirlo.
- Respetá las convenciones del proyecto (inline styles, no hover: Tailwind, etc.).
- Corré `npx tsc --noEmit` mentalmente — generá código sin errores de TypeScript.
- Si vas a modificar el sistema de colores, avisá el impacto en otros componentes.

**No hagas sin preguntar:**
- Cambiar el sistema de fuentes (está manejado por next/font en layout.tsx).
- Agregar dependencias npm — el proyecto tiene cero dependencias externas de UI intencional.
- Cambiar la estructura de `translations.ts` — podés agregar claves, nunca reestructurar.

---

## 1. La empresa

**BetterFlowIA** — Consultoría en optimización de procesos e inteligencia artificial para negocios argentinos.

| | |
|---|---|
| URL | https://betterflowia.com |
| País | Argentina (precios en USD, mercado local) |
| WhatsApp | +54 11 6511 5261 |
| Twitter/X | @betterflowia |
| Idiomas | Español (default) + Inglés (toggle en header) |

### Propuesta de valor
Ayudamos a empresas, consultorios médicos y complejos deportivos a trabajar mejor incorporando automatización e IA. Metodología en 3 pasos: **Diagnosticar → Diseñar → Automatizar**. Resultados medibles en 30 días.

### Tono de marca
- Directo, confiante, sin tecnicismos innecesarios
- Orientado a resultados concretos (números, porcentajes, plazos)
- Cercano pero profesional — tuteo en español
- No usar: "revolucionario", "disruptivo", "de última generación"

---

## 2. Productos

### FlowMed — Agente IA para consultorios médicos
- Reserva turnos por WhatsApp 24/7 sin intervención humana
- Identifica pacientes por nombre o DNI
- Confirmación automática con código de turno
- Panel web para secretarias
- WA deep link: `https://wa.me/541165115261?text=Hola,%20quiero%20saber%20mas%20sobre%20FlowMed`
- Color de acento: **cyan** `#67e8f9` / `#00c4ff`

| Plan | Precio | Límite |
|---|---|---|
| Starter | $25 USD/mes | 1 médico |
| Pro | $50 USD/mes | Hasta 5 médicos |
| Business | $100 USD/mes | Ilimitado |

### FlowSport — Agente IA para complejos deportivos
- Reserva canchas por WhatsApp sin registro previo
- Múltiples canchas simultáneas
- Seña con Mercado Pago *(próximamente — mostrar badge "Pronto")*
- Panel web de gestión
- WA deep link: `https://wa.me/541165115261?text=Hola,%20quiero%20saber%20mas%20sobre%20FlowSport`
- Color de acento: **verde eléctrico** `#00e5a0`

| Plan | Precio | Límite |
|---|---|---|
| Starter | $40 USD/mes | 2 canchas |
| Pro | Escalable | Hasta 5 canchas |
| Business | Escalable | Ilimitado |

**Ambos productos:** Sin costo de setup · Primer mes gratis · Sin contrato

---

## 3. Stack técnico

```
Framework:     Next.js 16.2.3 (App Router)
React:         19.2.4
Estilos:       Tailwind CSS v4 + inline styles (design tokens en CSS vars)
Lenguaje:      TypeScript 5
Fuentes:       next/font/google — Barlow 300/400/600/700/800/900 + Barlow Condensed 700/800/900
Deploy:        Vercel (auto-deploy en push a main)
OS desarrollo: Windows (usar `type` no `cat` en PowerShell)
Dependencias:  CERO dependencias de UI externas — intencional
```

> ⚠️ **Tailwind v4**: `@import "tailwindcss"` en globals.css. NO usar `@tailwind base/components/utilities`.  
> ⚠️ **Fuentes**: NUNCA agregar `@import url(fonts.googleapis.com)` — las fuentes están en `layout.tsx` via `next/font`.  
> ⚠️ **No instalar** framer-motion, react-spring ni ninguna lib de animación — todo se hace con CSS + Web APIs nativas (canvas, IntersectionObserver, requestAnimationFrame).

---

## 4. Sistema de diseño

### Estado actual de la paleta

El Hero (home) fue migrado a **Paleta v4 — Índigo + Violeta eléctrico** en Mayo 2026.  
El resto del sitio todavía usa la **Paleta v3 — Dark Navy + Electric Green**.  
La migración completa al violeta es parte del roadmap.

### Paleta v3 — Dark Navy + Electric Green (sitio actual, excepto Hero home)

```css
--bg0: #060b18    /* fondo base */
--bg1: #0a1020    /* secciones alternas */
--bg2: #0e1628    /* cards */
--bg3: #162040    /* hover */
--electric:  #00e5a0   /* acento primario */
--electric2: #00c4ff   /* acento FlowMed */
--white: #eef4ff       /* texto */
--w70:  rgba(238,244,255,0.7)
--w40:  rgba(238,244,255,0.4)
```

### Paleta v4 — Índigo + Violeta eléctrico (nuevo Hero, dirección futura)

```css
/* Fondos — igual que v3 */
#060b18  /* base */
#0d0a1a  /* secciones cards */
#0a0718  /* fondo chat/mockup */
#130e24  /* hover */
#1a0a3c  /* header mockup */

/* Acentos nuevos */
#7c3aed   /* violeta profundo — botones, glows */
#a855f7   /* violeta eléctrico — acento principal */
#e879f9   /* fucsia — gradiente de títulos */

/* Texto */
#f3e8ff   /* blanco violáceo — titulos y texto */
rgba(243,232,255,0.65)  /* texto secundario */
rgba(243,232,255,0.4)   /* texto muted */

/* Partículas y bordes */
rgba(168,85,247, X)  /* usar para borders, glows, partículas */
```

### Colores de acento por contexto

| Contexto | Color | Hex |
|---|---|---|
| Hero home (nuevo) | Violeta eléctrico | `#a855f7` |
| FlowMed | Cyan | `#67e8f9` / `#00c4ff` |
| FlowSport | Verde eléctrico | `#00e5a0` |
| Problema / dolor | Rojo suave | `#f87171` |
| WhatsApp CTA | Verde WA | `#25D366` (excepción) |
| Métricas positivas | Verde eléctrico | `#00e5a0` |
| Métricas negativas | Rojo suave | `#f87171` |

### Tipografía

```
Títulos:     Barlow Condensed 900 · UPPERCASE · letter-spacing -1px
             font-size: clamp(32px, 4vw, 46px) secciones / clamp(46px, 5.5vw, 66px) hero
Subtítulos:  Barlow 800 · 18-22px
Body:        Barlow 300 (texto largo) · 400 (normal) · sm text-sm
Labels:      Barlow 700 · uppercase · tracking-widest · 11-12px
CTAs:        Barlow 800
```

### Componentes visuales recurrentes

**Section tag** (encabezado de sección):
```tsx
<div className="flex items-center gap-2 mb-3">
  <div className="w-5 h-px" style={{ background: '#00e5a0' }} />
  <span style={{ color: '#00e5a0', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
    Nombre sección
  </span>
</div>
```

**Enso SVG** (decoración de fondo):
```tsx
<svg style={{ right: -80, top: '50%', transform: 'translateY(-50%)', width: 540, height: 540, opacity: 0.045 }}
  viewBox="0 0 540 540" fill="none">
  <circle cx="270" cy="270" r="215" stroke="#00e5a0" strokeWidth="26"
    strokeDasharray="1050 290" strokeLinecap="round" />
</svg>
```

**Stats/steps grid** con separador de 1px:
```tsx
<div className="grid grid-cols-3 gap-px" style={{ background: 'rgba(0,229,160,0.08)' }}>
  <div style={{ background: '#0a1020' }}>...</div>
</div>
```

**Hover bottom bar**:
```tsx
<div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
  style={{ background: 'linear-gradient(90deg,#00e5a0,#00c4ff)' }} />
```

### Jerarquía de botones

```tsx
// Primario (v3 verde / v4 violeta)
style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)', color: '#fff', fontWeight: 800,
  boxShadow: '0 6px 28px rgba(168,85,247,0.4)' }}
onMouseEnter → translateY(-2px) + boxShadow intenso
onMouseLeave → reset

// Secundario (ghost)
style={{ border: '1.5px solid rgba(168,85,247,0.28)', color: '#f3e8ff', background: 'transparent' }}
onMouseEnter → borderColor más opaco + bg rgba(168,85,247,0.07)

// WhatsApp (solo en CTAFinalProductos y FAB)
style={{ background: '#25D366', color: '#fff' }}
```

### Animaciones CSS (globals.css — no agregar sin avisar)

```
ping-dot    → pulso badge "en línea"
td-1/2/3    → typing dots del mockup WA (delay escalonado)
bubbleIn    → entrada burbujas de chat
fadeInUp    → entrada genérica (usado con animationDelay y opacity:0 inicial)
```

**Animaciones JS disponibles en Hero nuevo:**
- `ParticleCanvas` — canvas con partículas conectadas (viola, requestAnimationFrame)
- `Counter` — contador animado con IntersectionObserver + easing cúbico
- Fade-in escalonado por sección via `fadeInUp` + `animationDelay` + `opacity: 0`

---

## 5. Convenciones de código

```tsx
// ✅ Estilos: inline para design tokens, Tailwind solo para layout
<div className="flex gap-4 px-6" style={{ background: '#0e1628', color: '#eef4ff' }}>

// ✅ Hover: siempre onMouseEnter/onMouseLeave (Tailwind hover: no funciona con inline styles)
onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#162040'; }}
onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#0e1628'; }}

// ✅ Fuentes en JSX: comillas internas escapadas
fontFamily: "'Barlow Condensed', sans-serif"

// ✅ Links
import Link from 'next/link'           // internos
<a target="_blank" rel="noopener noreferrer">  // externos

// ✅ Imágenes
import Image from 'next/image'
<Image src="/logo.jpeg" width={38} height={38} alt="BetterFlowIA" priority />

// ✅ 'use client' obligatorio en todo componente con:
// useLanguage(), useState, useEffect, useRef, onMouseEnter/Leave
```

### i18n — cómo agregar texto nuevo

```typescript
// 1. En lib/translations.ts, dentro de la sección correcta:
nuevaSeccion: {
  titulo: { es: 'Título en español', en: 'Title in English' },
  descripcion: { es: 'Descripción', en: 'Description' },
}

// 2. En el componente:
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';
const { lang } = useLanguage();
const texto = tr(t.nuevaSeccion.titulo, lang);
```

---

## 6. Estructura de archivos

```
betterflow-web/
├── app/
│   ├── globals.css          ← CSS vars + animaciones globales
│   ├── layout.tsx           ← next/font, Metadata OG/Twitter
│   ├── page.tsx             ← Home (solo importa componentes)
│   └── productos/page.tsx   ← Página productos (solo importa componentes)
├── components/
│   ├── Header.tsx           ← Nav sticky, logo, toggle ES/EN, CTA
│   ├── Footer.tsx           ← Logo + links + copyright
│   ├── WhatsAppButton.tsx   ← FAB fijo, verde #25D366
│   ├── home/
│   │   ├── Hero.tsx             ← ⭐ ACTUALIZADO: partículas violeta + mockup + counters
│   │   ├── ComoTrabajamos.tsx   ← 3 pasos, borde eléctrico izquierdo
│   │   ├── Servicios.tsx        ← 3 cards hover, bottom bar gradient
│   │   ├── ProductosDestacados.tsx
│   │   ├── Nosotros.tsx         ← métricas con barras CSS
│   │   └── CTAFinal.tsx
│   └── productos/
│       ├── HeroProductos.tsx
│       ├── Problema.tsx
│       ├── FlowMed.tsx          ← acento cyan
│       ├── FlowSport.tsx        ← acento verde eléctrico
│       ├── ComoFunciona.tsx
│       ├── Precios.tsx
│       └── CTAFinalProductos.tsx
├── lib/
│   ├── translations.ts      ← Todas las cadenas ES/EN
│   └── LanguageContext.tsx  ← Context + useLanguage()
└── public/
    ├── logo.jpeg            ← 1024×1024, circular en UI
    └── og-image.jpg         ← 1200×630, social sharing
```

---

## 7. SEO y deploy

**og-image.jpg** (1200×630): fondo `#060b18`, logo circular izquierda, wordmark + tagline + URL. Regenerar con Python + Pillow si cambia el branding.

**Deploy**: `git push origin main` → Vercel detecta y despliega en ~2 min. Verificar en dashboard.vercel.com.

**Antes de cada push:**
```powershell
npx tsc --noEmit   # TypeScript limpio
git status         # revisar qué cambió
```

---

## 8. Roadmap activo

### En progreso / próximo
- [ ] **Migración paleta violeta** — aplicar Paleta v4 al resto del sitio (ComoTrabajamos, Servicios, Nosotros, Productos)
- [ ] **Animaciones scroll** — fade-in-up en todas las secciones via IntersectionObserver (modelo: Hero.tsx nuevo)
- [ ] **Contadores animados** — Nosotros métricas y stats (modelo: Counter component en Hero.tsx)
- [ ] **Ilustraciones SVG** — íconos propios por servicio (proceso, IA, automatización)
- [ ] **Mockups de producto** — UI en celular para FlowMed y FlowSport en sus secciones

### Pendientes técnicos
- [ ] Integración Mercado Pago en FlowSport (quitar badge "Pronto" cuando esté listo)
- [ ] Google Analytics o Plausible
- [ ] Formulario de contacto propio (hoy todo va a WhatsApp)
- [ ] og:image dinámica por ruta (`app/opengraph-image.tsx`)
- [ ] Favicon `.ico` dedicado
- [ ] Verificar handle real de @betterflowia en Twitter/X

### Completado
- [x] Diseño home completo (v3)
- [x] Diseño /productos completo
- [x] Logo real integrado
- [x] og:image social sharing
- [x] Fuentes migradas a next/font
- [x] i18n ES/EN completo
- [x] Deploy en Vercel
- [x] Hero home — paleta violeta + partículas + mockup WA + counters animados

---

## 9. Preguntas frecuentes para Claude

**¿Puedo instalar X librería?**  
No sin aprobación explícita. El proyecto no tiene dependencias de UI intencional. Para animaciones: CSS + Web APIs nativas. Para iconos: SVG inline.

**¿Cómo agrego una página nueva?**  
Crear `app/nueva-ruta/page.tsx` (componente server por defecto), luego crear los componentes en `components/nueva-ruta/`. Agregar link en Header.tsx y Footer.tsx.

**¿Cómo manejo imágenes?**  
Siempre `next/image`. Imágenes propias en `public/`. Stock photos: solo si el usuario las provee — no usar URLs externas de Unsplash/etc.

**¿Qué hago si TypeScript se queja de `null`?**  
Usar `if (!ref.current) return;` y asignar a variable local antes de usar en callbacks/closures (ver patrón en Hero.tsx `ParticleCanvas`).

**¿Cómo nombro commits?**  
`feat: descripción` / `fix: descripción` / `style: descripción` / `refactor: descripción`

---

## 10. Archivos que me podrías pedir adjuntar

Si en algún momento necesito más contexto, pedime:

| Archivo | Cuándo pedirlo |
|---|---|
| `lib/translations.ts` | Antes de agregar o modificar copy |
| `components/home/[componente].tsx` | Antes de rediseñar una sección |
| `app/globals.css` | Antes de agregar animaciones o CSS vars |
| `app/layout.tsx` | Antes de tocar fuentes, metadata o estructura |
| `components/productos/[componente].tsx` | Antes de trabajar en /productos |
| `public/logo.jpeg` | Para decisiones de color o branding |

O simplemente subí el ZIP del repo completo al inicio de la sesión — es la opción más eficiente.

---

*Documento generado con Claude (Anthropic) · BetterFlowIA · Mayo 2026*
