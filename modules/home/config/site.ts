import type { Metadata } from "next";
import type { HomeContent } from "../content/types";

export type DeployMode = "local" | "preview" | "production";

export const canonicalOrigin = "https://betterflowia.com";

/** Producción requiere un valor explícito; cualquier otro valor se trata como local. */
export function resolveDeployMode(value: string | undefined): DeployMode {
  return value === "preview" || value === "production" ? value : "local";
}

export function isProductionIndexable(): boolean {
  return resolveDeployMode(process.env.BF_DEPLOY_MODE) === "production" &&
    (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production") &&
    process.env.NODE_ENV === "production";
}

export function buildHomeMetadata(content: HomeContent, path: string): Metadata {
  const indexable = isProductionIndexable();

  return {
    metadataBase: new URL(canonicalOrigin),
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: { canonical: path },
    robots: { index: indexable, follow: indexable },
    icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
    twitter: { card: "summary_large_image", title: content.metadata.title, description: content.metadata.description, images: ["/og-image.jpg"] },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: path,
      siteName: "BetterFlow IA",
      locale: content.metadata.ogLocale,
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "BetterFlow IA" }],
    },
  };
}
