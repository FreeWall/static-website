import Link from 'next/link';

export default function Index() {
  return (
    <div className="flex flex-col items-center space-y-12 text-center">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-5xl leading-tight font-bold tracking-tight text-white md:text-7xl">
          Vítejte na Vašem <span className="text-[var(--color-gold)]">Novém Webu</span>
        </h1>
        <p className="text-xl font-medium text-[var(--color-text-muted)] md:text-2xl">
          Moderní, rychlá a vizuálně úchvatná statická stránka postavená na nejnovějších
          technologiích.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <Link
          href="/about"
          className="shadow-gold rounded-full bg-[var(--color-gold)] px-8 py-4 text-lg font-bold text-black transition-all hover:scale-105"
        >
          O nás
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-[var(--color-border)] bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
        >
          Kontaktujte nás
        </Link>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 pt-16 md:grid-cols-3">
        {[
          { title: 'Rychlost', desc: 'Optimalizováno pro bleskové načítání.' },
          { title: 'Design', desc: 'Propracovaný vizuál s důrazem na detail.' },
          { title: 'Responzivita', desc: 'Perfektní zobrazení na všech zařízeních.' },
        ].map((feature, i) => (
          <div
            key={i}
            className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-left transition-colors hover:border-[var(--color-gold)]"
          >
            <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-[var(--color-gold)]">
              {feature.title}
            </h3>
            <p className="text-[var(--color-text-muted)]">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
