// Verifica el HTML servido. Uso: `npm run build && npm start`, y en otra terminal `npm run verify:home [url]`.
import assert from "node:assert/strict";

const base = process.argv[2] ?? "http://localhost:3000";
const DIGITS = "541164791603";
const DISPLAY = "+54 11 6479-1603";
const count = (html, regex) => (html.match(regex) ?? []).length;

async function get(path) {
  const response = await fetch(base + path);
  return { status: response.status, html: await response.text() };
}

const checks = {
  "/ tiene un solo h1, lang y skip-link con destino": async () => {
    const { status, html } = await get("/");
    assert.equal(status, 200);
    assert.match(html, /<html lang="es"/);
    assert.equal(count(html, /<h1[\s>]/g), 1);
    assert.match(html, /href="#contenido"/);
    assert.match(html, /<main id="contenido"/);
  },
  "/ muestra el Hero del prototipo C": async () => {
    const { html } = await get("/");
    assert.match(html, /Hacemos que la IA/);
    assert.match(html, /funcione\./);
    assert.match(html, /hero-architecture\.webp/);
    for (const title of ["Acelera la", "Mejora la", "Ordena y escala", "Genera impacto"]) {
      assert.ok(html.includes(title));
    }
  },
  "/ usa un único destino de WhatsApp y muestra el número": async () => {
    const { html } = await get("/");
    const hrefs = [...html.matchAll(/href="(https:\/\/wa\.me[^"]*)"/g)].map((m) => m[1]);
    assert.equal(hrefs.length, 4);
    for (const href of hrefs) assert.equal(href, `https://wa.me/${DIGITS}`);
    assert.ok(html.includes(DISPLAY));
  },
  "/ tiene metadata SEO y recurso social": async () => {
    const { html } = await get("/");
    assert.match(html, /rel="canonical" href="https:\/\/betterflowia\.com\/"/);
    assert.match(html, /property="og:image" content="https:\/\/betterflowia\.com\/og-image\.jpg"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    assert.match(html, /name="robots" content="[^"]+"/);
  },
  "/ conserva las anclas que usa legacy": async () => {
    const { html } = await get("/");
    for (const id of ["como", "nosotros", "blog"]) assert.match(html, new RegExp(`id="${id}"`));
  },
  "/ no enlaza a destinos futuros ni trae chrome legacy": async () => {
    const { html } = await get("/");
    assert.doesNotMatch(html, /href="\/en/);
    assert.doesNotMatch(html, /Academy/);
    assert.doesNotMatch(html, /--font-barlow|Cómo funciona/);
    assert.equal(count(html, /<header[\s>]/g), 1);
    assert.equal(count(html, /<footer[\s>]/g), 1);
  },
  "/productos conserva un solo shell legacy": async () => {
    const { status, html } = await get("/productos");
    assert.equal(status, 200);
    assert.equal(count(html, /<header[\s>]/g), 1);
    assert.equal(count(html, /<footer[\s>]/g), 1);
    assert.match(html, /Cómo funciona/);
    assert.match(html, /rel="canonical" href="https:\/\/betterflowia\.com\/productos"/);
    const contacts = [...html.matchAll(/href="https:\/\/wa\.me\/(\d+)[^"]*"/g)];
    assert.ok(contacts.length > 0);
    for (const contact of contacts) assert.equal(contact[1], DIGITS);
    assert.doesNotMatch(html, /id="contenido"/);
  },
  "una URL desconocida responde 404 con salida": async () => {
    const { status, html } = await get("/ruta-que-no-existe");
    assert.equal(status, 404);
    assert.match(html, /No encontramos esta página/);
    assert.match(html, /noindex/);
    assert.match(html, /href="\/"/);
  },
};

let failed = 0;
for (const [name, check] of Object.entries(checks)) {
  try {
    await check();
    console.log(`ok   ${name}`);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${name}\n     ${error.message}`);
  }
}
process.exit(failed ? 1 : 0);
