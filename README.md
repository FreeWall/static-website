# 🌐 Statický Web (FreeWall)

Moderní a vysoce výkonná statická webová aplikace vytvořená pomocí nejnovějších technologií. Tento projekt je optimalizován pro rychlost, skvělou uživatelskou zkušenost a snadnou údržbu.

## 🛠️ Použité Technologie (Tech Stack)

Projekt staví na moderním ekosystému **React** s důrazem na typovou bezpečnost a čistý design.

### Jádro (Core)

- **[Next.js 15](https://nextjs.org/)**: React framework pro vývoj webových aplikací. V tomto projektu je použit pro generování statických stránek (Static Export).
- **[React 18](https://reactjs.org/)**: Knihovna pro tvorbu uživatelských rozhraní.
- **[TypeScript](https://www.typescriptlang.org/)**: Jazyk rozšiřující JavaScript o statické typování pro bezpečnější a čitelnější kód.

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com/)**: Moderní CSS framework pro rychlý a flexibilní design přímo v HTML.
- **[Radix UI](https://www.radix-ui.com/)**: Kolekce neostylovaných, přístupných komponent proDropdown menu, Selecty a Switche.
- **[Motion](https://motion.dev/)**: Knihovna pro plynulé a profesionální animace.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Široká knihovna ikon pro moderní design.

### Správa Stavů & Data

- **[Zustand](https://zustand-demo.pmnd.rs/)**: Lehká a rychlá správa globálního stavu aplikace.
- **[TanStack Query (React Query)](https://tanstack.com/query/latest)**: Výkonný nástroj pro asynchronní správu dat a cachování.
- **[TanStack Form](https://tanstack.com/form/latest)**: Moderní přístup k tvorbě a validaci formulářů.

---

## 📂 Struktura Projektu

Projekty je přehledně rozdělen do modulů:

- 🧱 `src/components/`: Znovupoužitelné UI komponenty.
- 📄 `src/pages/`: Jednotlivé stránky aplikace (Home, Kontakt, atd.).
- 📦 `src/stores/`: Globální stavy aplikace (Zustand).
- 🎨 `src/styles/`: Globální CSS styly a konfigurace Tailwindu.
- 🔧 `src/utils/`: Pomocné funkce a utility.
- 📁 `public/`: Statické soubory jako obrázky a fonty.

---

## 🚀 Jak Začít (Vývoj)

Projekt používá balíčkovací systém **Yarn**.

### 1. Instalace závislostí

```bash
yarn
```

### 2. Spuštění vývojového serveru

```bash
yarn dev
```

Aplikace poběží na adrese [http://localhost:3000](http://localhost:3000).

### 3. Vytvoření produkční verze (Build)

```bash
yarn build
```

### 4. Statický export

```bash
yarn export
```

Výsledné soubory pro nahrání na server naleznete ve složce `/build`.

---

## ✅ Kvalita Kódu

Projekt je vybaven nástroji pro udržení vysoké kvality kódu:

- **ESLint**: Pro kontrolu chyb v kódu.
- **Prettier**: Pro automatické formátování kódu.
