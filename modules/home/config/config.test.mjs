import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { buildWhatsAppUrl, whatsappContact } from "./contact.ts";
import { buildHomeMetadata, resolveDeployMode } from "./site.ts";

const content = { metadata: { title: "t", description: "d", ogLocale: "es_AR" } };
const original = process.env.BF_DEPLOY_MODE;
const originalNode = process.env.NODE_ENV;
const originalVercel = process.env.VERCEL_ENV;
beforeEach(() => {
  process.env.NODE_ENV = "production";
  delete process.env.VERCEL_ENV;
});

afterEach(() => {
  if (originalNode === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = originalNode;
  if (originalVercel === undefined) delete process.env.VERCEL_ENV;
  else process.env.VERCEL_ENV = originalVercel;
  if (original === undefined) delete process.env.BF_DEPLOY_MODE;
  else process.env.BF_DEPLOY_MODE = original;
});

test("cualquier valor no reconocido se trata como local", () => {
  for (const value of [undefined, "", "PRODUCTION", "prod", "bogus"]) {
    assert.equal(resolveDeployMode(value), "local");
  }
  assert.equal(resolveDeployMode("preview"), "preview");
  assert.equal(resolveDeployMode("production"), "production");
});

test("solo producción explícita es indexable", () => {
  for (const value of ["", "local", "preview", "PRODUCTION"]) {
    process.env.BF_DEPLOY_MODE = value;
    assert.deepEqual(buildHomeMetadata(content, "/").robots, { index: false, follow: false });
  }
  delete process.env.BF_DEPLOY_MODE;
  assert.deepEqual(buildHomeMetadata(content, "/").robots, { index: false, follow: false });
  process.env.BF_DEPLOY_MODE = "production";
  assert.deepEqual(buildHomeMetadata(content, "/").robots, { index: true, follow: true });
});

test("el enlace y el número visible apuntan al mismo destino, sin texto prellenado", () => {
  assert.equal(buildWhatsAppUrl(), "https://wa.me/541164791603");
  assert.equal(whatsappContact.display.replace(/\D/g, ""), whatsappContact.digits);
});

test("preview y desarrollo bloquean indexación aunque BF_DEPLOY_MODE sea production", () => {
  process.env.BF_DEPLOY_MODE = "production";
  for (const value of ["preview", "development"]) {
    process.env.VERCEL_ENV = value;
    assert.equal(buildHomeMetadata(content, "/").robots.index, false);
  }
  process.env.VERCEL_ENV = "production";
  process.env.NODE_ENV = "development";
  assert.equal(buildHomeMetadata(content, "/").robots.index, false);
  process.env.NODE_ENV = "production";
  assert.equal(buildHomeMetadata(content, "/").robots.index, true);
});
