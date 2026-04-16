import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BetterFlow — Consultoria e IA para optimizar tu negocio",
  description:
    "Consultoria en optimizacion de procesos e inteligencia artificial para empresas, consultorios medicos y complejos deportivos en Argentina.",
  keywords: ["consultoria", "IA", "procesos", "automatizacion", "Argentina", "FlowMed", "FlowSport"],
  openGraph: {
    title: "BetterFlow — Consultoria + IA",
    description: "Optimizamos como trabaja tu equipo con tecnologia e IA",
    url: "https://betterflowia.com",
    siteName: "BetterFlow",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
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
