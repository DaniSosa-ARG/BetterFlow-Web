# BetterFlowIA — Project Handoff
> Documento de contexto para nuevas sesiones de Claude u otros proyectos.  
> Generado: Mayo 2026 | Versión de diseño: v3 (Dark Navy + Electric Green)  
> Última actualización: Mayo 2026 — /productos rediseñado, fuentes migradas a next/font, deploy en Vercel

---

## 1. Identidad de la empresa

| Campo | Detalle |
|---|---|
| **Nombre** | BetterFlowIA |
| **URL** | https://betterflowia.com |
| **WhatsApp comercial** | +54 11 6511 5261 → `https://wa.me/541165115261` |
| **Twitter/X** | @betterflowia |
| **País** | Argentina |
| **Idiomas del sitio** | Español (default) + Inglés (toggle ES/EN) |

### Propuesta de valor
Consultoría en optimización de procesos e inteligencia artificial para empresas, consultorios médicos y complejos deportivos en Argentina. Metodología en 3 pasos: **Diagnosticar → Diseñar → Automatizar**. Resultados medibles en 30 días.

### Segmentos objetivo
1. **Empresas generales** — mejora de procesos internos
2. **Consultorios médicos** — producto FlowMed
3. **Complejos deportivos** — producto FlowSport

---

## 2. Productos

### FlowMed
- Agente WhatsApp para consultorios médicos
- Reserva turnos automáticamente 24/7
- Identifica pacientes por nombre o DNI
- Confirmación automática con código de turno
- Panel web de gestión para secretarias
- **Precio:** Starter $25 USD/mes · Pro $50 USD/mes · Business $100 USD/mes
- Sin costo de setup · Primer mes gratis
- Ruta: `/productos#flowmed`
- WA link: `https://wa.me/541165115261?text=Hola,%20quiero%20saber%20mas%20sobre%20FlowMed`

### FlowSport
- Agente WhatsApp para complejos deportivos
- Reserva canchas sin registro previo
- Soporta múltiples canchas simultáneas
- Seña con Mercado Pago *(próximamente)*
- Panel web de gestión
- **Precio:** Starter $40 USD/mes · Pro / Business escalable
- Sin costo de setup · Primer mes gratis
- Ruta: `/productos#flowsport`
- WA link: `https://wa.me/541165115261?text=Hola,%20quiero%20saber%20mas%20sobre%20FlowSport`

### Planes de precios (ambos productos)
| Plan | Precio | Incluye |
|---|---|---|
| Starter | $25 USD/mes | 1 médico o 2 canchas, agente WA ilimitado, panel web, soporte email |
| Pro | $50 USD/mes | Hasta 5 médicos o canchas, recordatorios automáticos, métricas, soporte prioritario |
| Business | $100 USD/mes | Ilimitado, onboarding personalizado, soporte WhatsApp |

---

## 3. Stack técnico

```
Framework:     Next.js 16.2.3 (App Router)
UI Library:    React 19.2.4
Styling:       Tailwind CSS v4 + inline styles (design tokens via CSS vars)
Language:      TypeScript 5
Fuentes:       next/font/google — Barlow + Barlow Condensed (self-hosted en Vercel)
Linting:       ESLint 9 + eslint-config-next
Package mgr:   npm
Deploy:        Vercel (auto-deploy en push a main)
SO desarrollo: Windows
```

### Dependencias clave
```json
"next": "16.2.3",
"react": "19.2.4",
"react-dom": "19.2.4",
"@tailwindcss/postcss": "^4",
"tailwindcss": "^4"
```

> ⚠️ **Tailwind v4** — usa `@import "tailwindcss"` en globals.css, NO `@tailwind base/components/utilities`. La API cambió respecto a v3.

> ⚠️ **Windows** — usar `type` en lugar de `cat` en PowerShell. Git desde PowerShell o VS Code Source Control.

---

## 4. Estructura del proyecto

```
betterflow-web/
├── app/
│   ├── globals.css          ← Design tokens CSS vars, animaciones globales (SIN @import Google Fonts)
│   ├── layout.tsx           ← next/font Barlow, Metadata OG/Twitter completos
│   ├── page.tsx             ← Home: Hero + ComoTrabajamos + Servicios + Productos + Nosotros + CTA
│   └── productos/
│       └── page.tsx         ← Página de productos (no tocar — solo importa componentes)
├── components/
│   ├── Header.tsx           ← Nav sticky blur-on-scroll, logo real, toggle ES/EN, CTA eléctrico
│   ├── Footer.tsx           ← Logo imagen + links + copyright
│   ├── WhatsAppButton.tsx   ← FAB fixed, tooltip hover, verde WA #25D366
│   ├── home/
│   │   ├── Hero.tsx             ← H1 3 líneas (solid/stroke/gradient), stats bar 4 cols
│   │   ├── ComoTrabajamos.tsx   ← 3 pasos, borde izquierdo eléctrico, grid gap:1px
│   │   ├── Servicios.tsx        ← 3 cards, hover bottom bar scaleX, badge "Nuevo"
│   │   ├── ProductosDestacados.tsx ← 2 product cards (cyan/electric), enso SVG deco
│   │   ├── Nosotros.tsx         ← 2 cols: puntos + panel métricas con barras CSS
│   │   └── CTAFinal.tsx         ← CTA centrado, glow radial + enso SVG fondo
│   └── productos/
│       ├── HeroProductos.tsx    ← 2 cols: texto + mockup WhatsApp dark, pills anchor
│       ├── Problema.tsx         ← 3 cards, acento rojo #f87171
│       ├── FlowMed.tsx          ← acento cyan #00c4ff/#67e8f9
│       ├── FlowSport.tsx        ← acento eléctrico #00e5a0, layout espejado
│       ├── ComoFunciona.tsx     ← 3 pasos circulares con badge número, línea conectora
│       ├── Precios.tsx          ← 3 planes, Pro escalado con borde eléctrico
│       └── CTAFinalProductos.tsx ← CTA con botón WA verde #25D366
├── lib/
│   ├── translations.ts      ← Todas las cadenas ES/EN como objeto tipado
│   └── LanguageContext.tsx  ← Context + hook useLanguage() → { lang, setLang }
└── public/
    ├── logo.jpeg            ← Logo original 1024×1024px (circular en UI, 38px nav / 32px footer)
    └── og-image.jpg         ← Social preview 1200×630px (generada con Python/Pillow)
```

---

## 5. Sistema de diseño — v3 Dark Navy + Electric Green

### Paleta de colores (CSS variables en globals.css)
```css
--bg0: #060b18    /* fondo base — más oscuro */
--bg1: #0a1020    /* fondo secciones alternas */
--bg2: #0e1628    /* cards y panels */
--bg3: #162040    /* hover de cards */

--electric:  #00e5a0   /* verde eléctrico — color primario de acción */
--electric2: #00c4ff   /* cyan eléctrico — acento FlowMed */
--electric-dim:    rgba(0,229,160,0.12)
--electric-border: rgba(0,229,160,0.22)

--white:  #eef4ff       /* texto principal */
--w70:    rgba(238,244,255,0.7)   /* texto secundario */
--w40:    rgba(238,244,255,0.4)   /* texto muted */
--w10:    rgba(238,244,255,0.08)  /* borders sutiles */
```

### Colores de acento por producto/sección
```
FlowMed:     #00c4ff / #67e8f9  (cyan)
FlowSport:   #00e5a0            (electric green)
Problema:    #f87171            (rojo — dolor del cliente)
WhatsApp:    #25D366            (verde WA — único color fuera del sistema)
```

### Tipografía
```
Títulos:    Barlow Condensed 900, UPPERCASE, letter-spacing -1px
            CSS var: var(--font-barlow-condensed)
Cuerpo:     Barlow 300 (texto largo) / 600-700 (labels) / 800-900 (CTAs)
            CSS var: var(--font-barlow)
Carga:      next/font/google → self-hosted en Vercel, sin request externo
```

> ⚠️ **No usar** `@import url('https://fonts.googleapis.com/...')` en globals.css — las fuentes están manejadas por `next/font` en `layout.tsx`. Agregar fuentes nuevas siempre desde layout.tsx.

### Patrones visuales recurrentes
- **Enso SVG**: símbolo circular del logo como decoración translúcida (opacity 0.04–0.06) en hero, product cards y CTAs finales
- **Grid lines**: `background-image` con líneas cada 56px en eléctrico opacity 0.03 — solo en heroes
- **Section tag**: `<div w-5 h-px electric> + <span uppercase tracking-widest electric>` — patrón consistente en todas las secciones
- **Stats/steps grid**: `gap: 1px` sobre fondo eléctrico — crea separadores sin borders explícitos
- **Hover bottom bar**: `scaleX(0→1)` con `transform-origin: left` en gradient eléctrico
- **Radial glows**: `radial-gradient` para iluminación ambiental, siempre `pointer-events: none`

### Jerarquía de botones
```
Primario:   bg #00e5a0, color #060b18, font-weight 800, box-shadow eléctrico
            hover: translateY(-2px) + box-shadow más intenso
Secundario: border rgba(white,0.18), color white, bg transparent
            hover: borderColor más opaco + bg rgba(white,0.04)
Nav CTA:    igual al primario, padding menor
WA CTA:     bg #25D366 (solo CTAFinalProductos y WhatsAppButton)
```

### Animaciones CSS (globals.css)
```
ping-dot    → pulso del indicador "en línea" del badge hero
td-1/2/3    → typing dots del mockup WhatsApp (delay escalonado)
bubbleIn    → entrada de burbujas de chat (scale + translateY)
fadeInUp    → animación genérica de entrada
```

---

## 6. Internacionalización (i18n)

Sistema propio, sin librerías externas.

```typescript
// Patrón de uso en cualquier componente
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

const { lang } = useLanguage();
const texto = tr(t.seccion.clave, lang); // retorna string ES o EN
```

```typescript
// Estructura de translations.ts
export const t = {
  hero: { headline: { es: '...', en: '...' } },
  // secciones: nav, hero, comoTrabajamos, servicios, productosDestacados,
  //            nosotros, ctaFinal, heroProductos, problema, flowmed,
  //            flowsport, comoFunciona, precios, ctaFinalProductos,
  //            footer, whatsapp
}
export type Lang = 'es' | 'en';
export function tr(key: { es: string; en: string }, lang: Lang): string
```

**Agregar nueva clave:** añadir `{ es: '...', en: '...' }` en `translations.ts` y usar `tr(t.seccion.nuevaClave, lang)` en el componente.

---

## 7. SEO y Social Sharing

### Archivos
- `public/logo.jpeg` — 1024×1024, favicon y og:image cuadrada
- `public/og-image.jpg` — 1200×630, generada con Python/Pillow: fondo #060b18, grid lines, logo circular izquierda, wordmark + tagline + 3 value props + URL

### Metadatos en layout.tsx
```typescript
metadataBase: new URL("https://betterflowia.com")

openGraph:
  images[0]: /og-image.jpg (1200×630) — LinkedIn, Facebook, WhatsApp, Telegram
  images[1]: /logo.jpeg (1024×1024)   — fallback cuadrado

twitter:
  card: "summary_large_image"
  images: ["/og-image.jpg"]
  site: "@betterflowia"   ← verificar handle real

icons:
  icon: "/logo.jpeg"
  apple: "/logo.jpeg"
```

> Para regenerar og-image.jpg: `pip install Pillow`, canvas 1200×630, fondo `#060b18`, logo circular izquierda con ring eléctrico, tipografía DejaVu Bold (fallback de Barlow).

---

## 8. Deploy — Vercel

- **Trigger**: push a `main` → Vercel detecta automáticamente y despliega
- **Fuentes**: `next/font/google` las descarga en build time y las hostea en la CDN de Vercel — sin requests externos en runtime
- **Variables de entorno**: ninguna requerida actualmente
- **Comandos en Vercel**: build `next build`, output `next start` (defaults de Next.js)

### Flujo de deploy desde Windows
```powershell
git add .
git commit -m "descripción del cambio"
git push origin main
# Vercel despliega en ~1-2 minutos
# Verificar en dashboard.vercel.com o en betterflowia.com
```

### Verificar antes de cada push
```powershell
# TypeScript sin errores
npx tsc --noEmit

# Ver archivos cambiados
git status

# Ver contenido de un archivo (Windows)
type .gitignore
```

---

## 9. Componentes — notas de implementación

### Header.tsx
- Sticky top-0, z-50
- Scroll threshold 10px → `rgba(6,11,24,0.96)` + `backdrop-filter: blur(16px)`
- Logo: `<Image src="/logo.jpeg" width={38} height={38} className="rounded-full" priority />`
- Toggle ES/EN: fondo `#00e5a0` / color `#060b18` en activo
- Mobile: hamburger SVG, menú desplegable con `borderTop` eléctrico

### Hero.tsx (home)
- Grid lines + radial glows + enso SVG decorativo (right: -80px)
- H1 tres líneas: `color: #eef4ff` / `WebkitTextStroke` / `WebkitBackgroundClip gradient`
- Stats bar: grid 4 cols con `gap: 1px` y `background: rgba(0,229,160,0.07)`

### HeroProductos.tsx
- Layout 2 cols: texto izquierda + mockup WhatsApp dark derecha
- Mockup: fondo `#0a1020`, header gradient dark green, burbujas usuario en `rgba(0,229,160)`, bot en navy
- Pills anchor a `#flowmed` y `#flowsport`

### FlowMed.tsx / FlowSport.tsx
- Layouts espejados: FlowMed texto izquierda / FlowSport texto derecha
- FlowMed: cyan `#67e8f9`, gradient botón `#0ea5e9→#67e8f9`
- FlowSport: eléctrico `#00e5a0`, badge "Pronto" inline en feature Mercado Pago
- Enso SVG decorativo `right: -40, bottom: -40`, opacity 0.05

### Precios.tsx
- Plan Pro: `scale(1.03)` + borde eléctrico + badge `#00e5a0`
- Checkmarks: eléctrico en Pro, `rgba(white,0.35)` en Starter/Business
- Precio en Barlow Condensed 900, fontSize 40

### Nosotros.tsx
- Panel métricas: barras CSS `width: X%`, gradientes de color
- Rojo `#f87171` para métricas de reducción (tareas manuales, turnos perdidos)
- Eléctrico `#00e5a0` para mejoras (respuesta, satisfacción)

### WhatsAppButton.tsx + CTAFinalProductos.tsx
- Únicos componentes con verde WhatsApp `#25D366` — excepción intencional del sistema de color

---

## 10. Convenciones de código

- **Estilos**: `style={{ }}` inline para valores del design system; Tailwind solo para layout (flex, grid, padding, gap, overflow)
- **Hover**: `onMouseEnter`/`onMouseLeave` en `<a>` y `<div>` — NO clases Tailwind `hover:` (incompatible con inline styles)
- **Imágenes**: siempre `next/image` con `width`, `height`, `alt` y `priority` en above-the-fold
- **Links internos**: `next/link`; externos: `<a target="_blank" rel="noopener noreferrer">`
- **'use client'**: obligatorio en todo componente que use `useLanguage()`, `useState` o `useEffect`
- **Fuentes en JSX**: `fontFamily: "'Barlow Condensed', sans-serif"` con comillas internas escapadas

---

## 11. Historial de diseño

| Versión | Descripción |
|---|---|
| **v1 — Original** | Azul corporativo `#1e3a5f`→`#2b6cb0`, fondo blanco, Inter, CTAs redondeados. Funcional pero genérico. |
| **v2 — Dark Electric** | Fondo negro `#0a0a0f`, acentos `#00e5a0`, tipografía Syne. Alta diferenciación pero sin identidad de marca. |
| **v3-Blue** | Variante all-navy con Barlow. Descartada — menos diferenciación visual. |
| **v3 — Dark Navy + Electric (actual)** | Navy profundo `#060b18` + verde eléctrico `#00e5a0`. Barlow Condensed. Enso integrado como motivo gráfico. Coherencia marca + tech. |

---

## 12. Pendientes / Roadmap

- [x] ~~Rediseño home~~ ✓
- [x] ~~Rediseño /productos~~ ✓
- [x] ~~Logo real integrado~~ ✓
- [x] ~~og:image social sharing~~ ✓
- [x] ~~Fuentes migradas a next/font~~ ✓
- [ ] Integración Mercado Pago en FlowSport
- [ ] Página de blog / casos de éxito
- [ ] Animaciones de entrada scroll (Intersection Observer)
- [ ] og:image dinámica por ruta (`app/opengraph-image.tsx`)
- [ ] Google Analytics o Plausible
- [ ] Formulario de contacto propio (hoy todo deriva a WhatsApp)
- [ ] Verificar handle real de Twitter/X → actualizar `twitter.site` en layout.tsx
- [ ] Favicon `.ico` dedicado (hoy usa logo.jpeg)

---

## 13. Comandos útiles

```powershell
# Desarrollo
npm run dev           # local → http://localhost:3000

# Validación antes de commit
npx tsc --noEmit      # TypeScript sin errores

# Deploy
git add .
git commit -m "feat: descripción"
git push origin main  # Vercel despliega automáticamente
```

---

*Este documento fue generado y actualizado con Claude (Anthropic) en Mayo 2026 a partir del código fuente del repositorio `betterflow-web`.*
