'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t, tr } from '@/lib/translations';

function IconDiagnostico() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#eff6ff" />
      <polyline points="8,28 14,18 20,22 26,12 32,16" stroke="#2b6cb0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="12" r="2" fill="#2b6cb0" />
    </svg>
  );
}

function IconDiseno() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#eff6ff" />
      <circle cx="20" cy="20" r="7" stroke="#2b6cb0" strokeWidth="2.5" fill="none" />
      <path d="M20 13V11M20 29v-2M13 20h-2M29 20h-2" stroke="#2b6cb0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2.5" fill="#2b6cb0" />
    </svg>
  );
}

function IconAutomatiza() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#eff6ff" />
      <polygon points="20,8 23,18 32,18 25,24 27,32 20,27 13,32 15,24 8,18 17,18" stroke="#2b6cb0" strokeWidth="2" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export default function ComoTrabajamos() {
  const { lang } = useLanguage();

  const columns = [
    {
      icon: <IconDiagnostico />,
      title: tr(t.comoTrabajamos.col1Title, lang),
      desc: tr(t.comoTrabajamos.col1Desc, lang),
    },
    {
      icon: <IconDiseno />,
      title: tr(t.comoTrabajamos.col2Title, lang),
      desc: tr(t.comoTrabajamos.col2Desc, lang),
    },
    {
      icon: <IconAutomatiza />,
      title: tr(t.comoTrabajamos.col3Title, lang),
      desc: tr(t.comoTrabajamos.col3Desc, lang),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            {tr(t.comoTrabajamos.titulo, lang)}
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: '#2b6cb0' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl transition-all duration-200 hover:shadow-lg group"
              style={{ border: '1px solid #e2e8f0' }}
            >
              <div className="flex justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                {col.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1e3a5f' }}>
                {col.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                {col.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
