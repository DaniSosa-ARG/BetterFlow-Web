'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';
import { BetterFlowLogo } from './Header';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer style={{ backgroundColor: '#1e3a5f' }} className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <BetterFlowLogo white />
            <a
              href="https://betterflowia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-300 hover:text-white transition-colors"
            >
              betterflowia.com
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-sm text-blue-200 hover:text-white transition-colors">
              {tr(t.footer.inicio, lang)}
            </Link>
            <Link href="/#servicios" className="text-sm text-blue-200 hover:text-white transition-colors">
              {tr(t.footer.servicios, lang)}
            </Link>
            <Link href="/productos" className="text-sm text-blue-200 hover:text-white transition-colors">
              {tr(t.footer.productos, lang)}
            </Link>
            <a
              href="https://wa.me/541165115261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-200 hover:text-white transition-colors"
            >
              {tr(t.footer.contacto, lang)}
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-800 text-center">
          <p className="text-sm text-blue-300">{tr(t.footer.rights, lang)}</p>
        </div>
      </div>
    </footer>
  );
}
