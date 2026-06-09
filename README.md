# BalkonRechner

Ein Balkonkraftwerk-Rechner für den deutschen Markt. Next.js 14 (App Router, TypeScript),
statisch deploybar auf Vercel. Apple-/Cupertino-Design, System-Schriften, Accent `#0071e3`,
ohne externe Schrift-CDNs.

## Was drin ist

- **Rechner** (`components/Rechner.tsx`): Ertrag, Ersparnis, Amortisation und 20-Jahres-Ersparnis.
  Mit Bundesland-Ertragsdaten, Ausrichtung, Montageart, Strompreis, Anschaffung und Speicher-Toggle.
  Methodisch ehrlich: Einspeisevergütung wird **nicht** eingerechnet, realistischer Eigenverbrauch.
- **Ratgeber/Blog** (`content/posts.ts`): vier Artikel zu starken Keywords. Neuen Post anlegen =
  ein Objekt im Array ergänzen; Index, Detailseite und Sitemap ziehen automatisch nach.
- **SEO**: pro Seite Metadaten + Canonical, `sitemap.xml`, `robots.txt`, sowie JSON-LD
  (WebSite, WebApplication, FAQPage, Article, BreadcrumbList) – relevant für Google und KI-Suche.
- **Rechtliches**: Impressum + Datenschutz als Platzhalter (vor Launch ersetzen).

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build prüfen
```

## Mit Claude Code weiterbauen

Im Projektordner `claude` starten und z. B. anweisen:

- „Füge einen Wärmepumpen-vs-Gas-Rechner als neue Route `/waermepumpe` hinzu, gleiche Komponenten-Struktur."
- „Schreibe drei weitere Ratgeber-Artikel zu den Keywords X, Y, Z im Stil von `content/posts.ts`."
- „Baue eine programmatische Route `/balkonkraftwerk/[stadt]` mit stadtspezifischen Ertragswerten."

## Auf GitHub pushen

```bash
git init
git add .
git commit -m "Initial commit: Balkonkraftwerk-Rechner"
git branch -M main
git remote add origin https://github.com/DEIN-USER/balkon-rechner.git
git push -u origin main
```

## Auf Vercel deployen

1. Auf vercel.com mit GitHub anmelden.
2. „Add New Project" → das Repo importieren.
3. Framework wird als Next.js erkannt – Defaults übernehmen, „Deploy".
4. Eigene Domain unter „Settings → Domains" verbinden.

## Vor dem Launch unbedingt anpassen

- [ ] `lib/site.ts`: `url` auf die echte Domain, `operator`-Daten fürs Impressum.
- [ ] Affiliate-Link im Rechner (`components/Rechner.tsx`, `href="#"`) ersetzen.
- [ ] Impressum (`app/impressum/page.tsx`) und Datenschutz (`app/datenschutz/page.tsx`) vervollständigen.
- [ ] Ertragswerte (`BUNDESLAENDER` in `Rechner.tsx`) an eine zitierbare Quelle anlehnen
      (z. B. HTW Berlin Stecker-Solar-Simulator) und Quelle auf der Seite verlinken – stärkt
      Vertrauen und KI-Zitierfähigkeit.
- [ ] In Google Search Console verifizieren und `sitemap.xml` einreichen.

## Hinweis zu den Zahlen

Die Ertragswerte und Eigenverbrauchsquoten sind belastbare Richtwerte (Stand 2026), keine
Messdaten. Förderangaben in den Artikeln sind datiert und ändern sich häufig – regelmäßig prüfen.
```
