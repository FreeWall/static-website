export default function Contact() {
  return (
    <div className="flex flex-col space-y-12">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Kontaktujte <span className="text-[var(--color-gold)]">Nás</span>
        </h1>
        <p className="text-xl text-[var(--color-text-muted)]">
          Máte dotaz nebo zájem o spolupráci? Jsme tu pro Vás.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        {[
          { label: 'E-mail', value: 'hello@example.com', icon: '📧' },
          { label: 'Telefon', value: '+420 123 456 789', icon: '📱' },
          { label: 'Adresa', value: 'Praha, Česká Republika', icon: '📍' },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center"
          >
            <span className="text-4xl">{item.icon}</span>
            <div className="space-y-1">
              <h3 className="text-sm font-bold tracking-wider text-[var(--color-text-muted)] uppercase">
                {item.label}
              </h3>
              <p className="text-xl font-bold text-white">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-xl rounded-3xl border border-[var(--color-border)] bg-white/5 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Napište nám přímo</h2>
        <p className="mb-8 text-[var(--color-text-muted)]">
          Tady by mohl být Váš kontaktní formulář.
        </p>
        <button className="w-full rounded-xl bg-[var(--color-gold)] py-4 text-lg font-bold text-black transition-all hover:brightness-110">
          Odeslat zprávu
        </button>
      </div>
    </div>
  );
}
