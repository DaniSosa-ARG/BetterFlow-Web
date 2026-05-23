# BetterFlowIA — Project Handoff
> Documento de contexto para nuevas sesiones de Claude u otros proyectos.  
> Generado: Mayo 2026 | Versión de diseño: v3 (Dark Navy + Electric Green)

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

### FlowSport
- Agente WhatsApp para complejos deportivos
- Reserva canchas sin registro previo
- Soporta múltiples canchas simultáneas
- Seña con Mercado Pago *(próximamente)*
- Panel web de gestión
- **Precio:** Starter $40 USD/mes · Pro / Business escalable
- Sin costo de setup · Primer mes gratis
- Ruta: `/productos#flowsport`

---

## 3. Stack técnico

```
Framework:     Next.js 16.2.3 (App Router)
UI Library:    React 19.2.4
Styling:       Tailwind CSS v4 + inline styles (design tokens via CSS vars)
Language:      TypeScript 5
Linting:       ESLint 9 + eslint-config-next
Package mgr:   npm
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

---

## 4. Estructura del proyecto

```
betterflow-web/
├── app/
│   ├── globals.css          ← Design tokens, fuentes, animaciones globales
│   ├── layout.tsx           ← Metadata OG/Twitter, Header, Footer, WhatsApp
│   ├── page.tsx             ← Home: Hero + ComoTrabajamos + Servicios + Productos + Nosotros + CTA
│   └── productos/
│       └── page.tsx         ← Página de productos
├── components/
│   ├── Header.tsx           ← Nav sticky, logo real, toggle ES/EN, CTA
│   ├── Footer.tsx           ← Logo + links + copyright
│   ├── WhatsAppButton.tsx   ← FAB fijo esquina inferior derecha
│   └── home/
│       ├── Hero.tsx             ← H1 condensado, badge, CTAs, stats bar 4 cols
│       ├── ComoTrabajamos.tsx   ← 3 pasos con borde izquierdo eléctrico
│       ├── Servicios.tsx        ← 3 cards con hover bar animada
│       ├── ProductosDestacados.tsx ← 2 product cards con enso deco
│       ├── Nosotros.tsx         ← 2 cols: puntos + panel métricas
│       └── CTAFinal.tsx         ← CTA centrado con glow + enso fondo
│   └── productos/
│       ├── HeroProductos.tsx
│       ├── Problema.tsx
│       ├── FlowMed.tsx
│       ├── FlowSport.tsx
│       ├── ComoFunciona.tsx
│       ├── Precios.tsx
│       └── CTAFinalProductos.tsx
├── lib/
│   ├── translations.ts      ← Todas las cadenas ES/EN como objeto tipado
│   └── LanguageContext.tsx  ← Context + hook useLanguage() → { lang, setLang }
└── public/
    ├── logo.jpeg            ← Logo original 1024×1024px (circular en UI)
    └── og-image.jpg         ← Social preview 1200×630px (generada con Pillow)
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

### Tipografía
```
Títulos:    Barlow Condensed — weight 900, UPPERCASE, letter-spacing -1px
Cuerpo:     Barlow — weight 300 (texto) / 700-800 (labels) / 900 (CTAs)
Import:     Google Fonts en globals.css
```

### Patrones visuales recurrentes
- **Enso SVG** (símbolo del logo): aparece como decoración de fondo translúcida en hero, product cards y CTA final. Opacidad 0.04–0.06
- **Grid lines**: `background-image` con líneas cada 56px en color eléctrico opacity 0.03 — solo en el hero
- **Section tag**: línea de 20px + texto uppercase tracking-widest en `#00e5a0`
- **Stats bar**: grid de 4 cols con `gap: 1px` sobre fondo eléctrico — crea separadores sutiles
- **Hover bottom bar**: `scaleX(0 → 1)` en gradient eléctrico, solo en service cards
- **Radial glows**: `radial-gradient` para simular iluminación ambiental

### Jerarquía de botones
```
Primario:   bg #00e5a0, color #060b18, font-weight 800, box-shadow eléctrico
Secundario: border rgba(white,0.18), color white, bg transparent
Nav CTA:    igual al primario pero más pequeño
```

### Animaciones CSS (definidas en globals.css)
```
ping-dot    → pulso del badge "en línea"
td-1/2/3    → typing dots del mockup WhatsApp
bubbleIn    → entrada de burbujas de chat
fadeInUp    → animación de entrada genérica
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
  hero: {
    headline: { es: '...', en: '...' }
  }
}
export type Lang = 'es' | 'en';
export function tr(key: { es: string; en: string }, lang: Lang): string
```

**Agregar nueva clave:** añadir el objeto `{ es: '...', en: '...' }` en `translations.ts` y usar `tr(t.seccion.nuevaClave, lang)` en el componente.

---

## 7. SEO y Social Sharing

### Archivos
- `public/logo.jpeg` — 1024×1024, favicon y og:image cuadrada
- `public/og-image.jpg` — 1200×630, generada con Python/Pillow, contiene: logo circular + wordmark + tagline + 3 value props + URL

### Metadatos en layout.tsx
```typescript
metadataBase: new URL("https://betterflowia.com")

openGraph:
  - images[0]: /og-image.jpg (1200×630) — LinkedIn, Facebook, WhatsApp, Telegram
  - images[1]: /logo.jpeg (1024×1024)   — fallback cuadrado

twitter:
  card: "summary_large_image"
  images: ["/og-image.jpg"]
  site: "@betterflowia"

icons:
  icon: "/logo.jpeg"
  apple: "/logo.jpeg"
```

> Para regenerar og-image.jpg: usar Python + Pillow, canvas 1200×630, fondo #060b18, logo circular izquierda, texto Barlow derecha.

---

## 8. Componentes — notas de implementación

### Header.tsx
- Sticky top-0, z-50
- Cambia de transparente a blur oscuro al hacer scroll (umbral: 10px)
- Logo: `<Image src="/logo.jpeg" width={38} height={38} className="rounded-full" />`
- Toggle de idioma: botones ES/EN con fondo eléctrico al activo
- CTA a WhatsApp en nueva pestaña
- Mobile: hamburger con menú desplegable

### Hero.tsx
- Fondo: grid lines + radial glows + enso SVG decorativo derecha
- H1 en 3 líneas: sólido / text-stroke / gradient
- Stats bar integrada al pie del hero (no sección separada)

### ProductosDestacados.tsx
- FlowMed: acento `#00c4ff` (cyan)
- FlowSport: acento `#00e5a0` (verde eléctrico)
- Enso SVG decorativo en esquina inferior derecha de cada card

### Nosotros.tsx
- Layout 2 columnas en desktop, apilado en mobile
- Panel derecho: métricas con barras de progreso animadas (CSS width %)
- Gradientes de barras: rojo para reducción, eléctrico para mejoras

### WhatsAppButton.tsx
- FAB fixed bottom-6 right-6
- Tooltip aparece en hover (opacity + translateX transition)
- Color: verde WhatsApp `#25D366` (excepcional — es el único componente fuera del sistema de color del sitio)

---

## 9. Convenciones de código

- **Estilos**: preferencia por `style={{ }}` inline sobre clases Tailwind para valores del design system. Tailwind se usa para utilidades de layout (flex, grid, padding, etc.)
- **Hover**: implementado con `onMouseEnter`/`onMouseLeave` en elementos `<a>` y `<div>` — no con clases Tailwind hover: (incompatibilidad con inline styles)
- **Imágenes**: siempre `next/image` con `width`, `height` y `alt` explícitos
- **Links internos**: `next/link`; externos: `<a target="_blank" rel="noopener noreferrer">`
- **'use client'**: todos los componentes que usan `useLanguage()` o state lo requieren

---

## 10. Historial de diseño

| Versión | Descripción |
|---|---|
| **v1 — Original** | Azul corporativo `#1e3a5f` → `#2b6cb0`, fondo blanco, Inter, CTAs redondeados. Funcional pero genérico. |
| **v2 — Dark Electric** | Fondo negro `#0a0a0f`, acentos `#00e5a0`, tipografía Syne. Alta diferenciación pero sin identidad de marca. |
| **v3 — Blue + Electric (actual)** | Navy profundo `#060b18` + verde eléctrico `#00e5a0`. Barlow Condensed. Enso del logo integrado como motivo gráfico. Mejor coherencia marca + tech. |
| **v3-Blue** | Variante all-navy con Barlow, sin verde eléctrico. Descartada — menos diferenciación. |

---

## 11. Pendientes / Roadmap

- [ ] Rediseño de `/productos` con el nuevo sistema visual
- [ ] Integración Mercado Pago en FlowSport
- [ ] Página de blog/casos de éxito
- [ ] Animaciones de entrada con Intersection Observer (fade-in-up al hacer scroll)
- [ ] og:image dinámica por ruta (Next.js ImageResponse / `opengraph-image.tsx`)
- [ ] Google Analytics / Plausible
- [ ] Formulario de contacto propio (hoy todo va a WhatsApp)
- [ ] Verificar handle real de Twitter/X y actualizar `twitter.site` en layout.tsx

---

## 12. Comandos útiles

```bash
npm run dev      # desarrollo local → http://localhost:3000
npm run build    # build de producción
npx tsc --noEmit # validar TypeScript sin compilar
```

---

*Este documento fue generado con Claude (Anthropic) en Mayo 2026 a partir del código fuente del repositorio `betterflow-web`.*
