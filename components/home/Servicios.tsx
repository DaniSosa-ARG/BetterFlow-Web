export default function Servicios() {
  const industries = ['Consultorios', 'Clínicas', 'Clubes', 'Gimnasios', 'PyMEs'];

  return (
    <div style={{ padding: '30px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="flex flex-wrap items-center justify-center gap-10">
          <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
            Pensado para
          </span>
          {industries.map((name) => (
            <span
              key={name}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: '#B3A99B', textTransform: 'uppercase', letterSpacing: '0.02em' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
