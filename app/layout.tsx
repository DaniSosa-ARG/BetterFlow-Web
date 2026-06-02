import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://betterflowia.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "BetterFlowIA — Consultoría e IA para optimizar tu negocio",
  description:
    "Consultoría en optimización de procesos e inteligencia artificial para empresas, consultorios médicos y complejos deportivos en Argentina.",
  keywords: [
    "consultoría IA", "automatización procesos", "FlowMed", "FlowSport",
    "inteligencia artificial Argentina", "optimización negocios",
  ],

  // ── OpenGraph (LinkedIn, Facebook, WhatsApp, Telegram) ──
  openGraph: {
    title: "BetterFlowIA — Consultoría + IA para tu negocio",
    description:
      "Optimizamos cómo trabaja tu equipo incorporando automatización e IA. FlowMed y FlowSport: resultados en 30 días, desde $25 USD/mes.",
    url: BASE_URL,
    siteName: "BetterFlowIA",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",        // 1200×630 — ideal para todas las redes
        width: 1200,
        height: 630,
        alt: "BetterFlowIA — Consultoría e IA para tu negocio",
        type: "image/jpeg",
      },
      {
        url: "/logo.jpeg",           // 1024×1024 — fallback cuadrado
        width: 1024,
        height: 1024,
        alt: "BetterFlowIA logo",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "BetterFlowIA — Consultoría + IA para tu negocio",
    description:
      "Optimizamos cómo trabaja tu equipo con automatización e IA. Desde $25 USD/mes. Sin contrato. Sin setup.",
    images: ["/og-image.jpg"],
    site: "@betterflowia",        // cambiá si tienen otro handle
    creator: "@betterflowia",
  },

  // ── Icons ──
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  // ── Canonical & robots ──
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${barlow.variable} ${barlowCondensed.variable} ${jetBrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
