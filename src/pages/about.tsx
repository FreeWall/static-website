export default function About() {
  return (
    <div className="flex flex-col space-y-12">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold text-white md:text-6xl">O nás</h1>
        <p className="text-xl text-[var(--color-text-muted)]">
          Jsme tým nadšenců do moderních technologií a designu. Tvoříme weby, které nejen fungují,
          ale i skvěle vypadají.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--color-gold)]">Naše Vize</h2>
          <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
            Věříme, že každý projekt si zaslouží unikátní přístup. Naše šablony jsou navrženy tak,
            aby poskytovaly pevný základ pro jakýkoliv druh statické prezentace.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--color-gold)]">Naše Mise</h2>
          <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
            Zjednodušujeme proces vývoje statických stránek. S naší šablonou můžete mít
            profesionální web hotový během několika hodin.
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-2)] to-black p-12 text-center">
        <h2 className="mb-6 text-3xl font-bold italic">
          &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
        </h2>
        <p className="font-medium text-[var(--color-gold)]">– Steve Jobs</p>
      </div>
    </div>
  );
}
