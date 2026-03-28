# Ukončit skript při jakékoli chybě
set -e

# --- Nastavení proměnných ---
DESC="Release: $(date +'%Y-%m-%d %H:%M')"
REMOTE="origin"
DEVELOP="develop"
MASTER="master"

echo "🚀 Startuji workflow (Clean Develop)..."

# 1. Commit změn do develop
# Kontrola, zda jsme na správné větvi
git checkout $DEVELOP

if [[ -n $(git status -s) ]]; then
    echo "📦 Commituji změny do $DEVELOP..."
    git add .
    git commit -m "$DESC"
else
    echo "✅ Žádné změny k commitu."
fi

# 2. Push na remote develop
echo "📤 Pushuji $DEVELOP na $REMOTE..."
git push $REMOTE $DEVELOP --force-with-lease

# 3. Vytvoření Pull Requestu
echo "🔀 Vytvářím Pull Request do $MASTER..."
PR_URL=$(gh pr create --base $MASTER --head $DEVELOP --title "$DESC" --body "Automatický deploy.")
echo "🔗 PR vytvořen: $PR_URL"

# 4. Mergnutí PR (rebase)
echo "📥 Merguji PR do $MASTER přes rebase..."
gh pr merge --rebase --auto

# 5. Aktualizace lokálního masteru
echo "🔄 Aktualizuji lokální $MASTER..."
git checkout $MASTER
git pull $REMOTE $MASTER

# 6. Smazání a znovuvytvoření develop branch
echo "♻️ Resetuji větev $DEVELOP z $MASTER..."
git branch -D $DEVELOP
git checkout -b $DEVELOP

# 7. Git fetch
echo "📡 Aktualizuji remote info (fetch)..."
git fetch $REMOTE

# 8. Sledování GitHub Pages deploye
echo "⏳ Čekám na GitHub Pages deploy (gh run watch)..."
# Získá ID posledního běhu pro Pages a čeká na dokončení
RUN_ID=$(gh run list --workflow "pages-build-deployment" --limit 1 --json databaseId --jq '.[0].databaseId')
if [ -n "$RUN_ID" ]; then
    gh run watch "$RUN_ID"
    echo "✅ Stránky byly úspěšně nasazeny!"
else
    echo "⚠️ Nepodařilo se najít aktivní 'pages-build-deployment' run."
fi

# 9. Výpis URL
PAGES_URL=$(gh repo view --json homepageUrl --jq '.homepageUrl')

echo "--------------------------------------------------"
echo "🎉 Workflow dokončeno!"
echo "🌐 Odkaz na web: ${PAGES_URL}"
echo "--------------------------------------------------"
