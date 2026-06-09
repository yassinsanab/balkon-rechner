# BalkonRechner

Balkonkraftwerk- und Energie-Rechner für den deutschen Markt. Next.js 14 (App Router,
TypeScript), statisch auf Vercel deploybar. Eigenes Design (System-Schriften, Accent `#0071e3`,
warme Solar-Atmosphäre als Signature), ohne externe Schrift-CDNs.

## SEO-Architektur (das "FastRechnen-Modell", 2026-konform)

Aufgebaut als **Pillar-Cluster-Topical-Authority** – nicht als Masse dünner Seiten. Nach dem
Google-Core-Update vom März 2026 ziehen schwache Seiten die ganze Domain runter; deshalb wenige,
starke, eng verlinkte Seiten statt tausender PLZ-Seiten.

- **Pillar:** die Startseite (`/`) = Balkonkraftwerk-Rechner (Haupt-Keyword) + Hub, der auf alle
  Rechner und Top-Artikel verlinkt.
- **Cluster:** weitere Rechner (`/rechner/[slug]`) und Ratgeber-Artikel (`/ratgeber/[slug]`).
- **Interne Verlinkung:** bidirektional Pillar ↔ Cluster, plus „Passend dazu"-Blöcke
  (`RelatedLinks`) und kontextuelle Links im Fließtext. Jede Seite ist ≤ 3 Klicks von der Startseite.
- **Daten-Moat:** jeder Rechner ist interaktiv und einzigartig – kein Boilerplate.

## Backend-Modell (datengetrieben)

Inhalte sind Registries, kein hartkodiertes Markup:

- `content/calculators.ts` – Registry aller Rechner (Slug, SEO, Content-Layer, FAQ, related).
  Treibt Detailseiten, Verzeichnis, Sitemap, Footer und den Verlinkungsgraphen.
- `content/posts.ts` – Ratgeber-Artikel (Kategorie, related Rechner + Artikel, HTML-Body).

### Neuen Rechner hinzufügen

1. Eintrag in `content/calculators.ts` ergänzen (Slug, Texte, FAQ, related).
2. Interaktive Komponente in `components/` bauen (Vorlage: `StromkostenRechner.tsx`, nutzt
   `Rechner.module.css`).
3. Slug → Komponente in `app/rechner/[slug]/page.tsx` (`COMPONENTS`-Map) eintragen.

Verzeichnis, Sitemap, Footer-Links und interne Verlinkung aktualisieren sich automatisch.

### Neuen Artikel hinzufügen

Ein Objekt in `content/posts.ts` ergänzen (mit `category`, `relatedCalculators`, `relatedPosts`).
Index, Detailseite und Sitemap ziehen automatisch nach.

## SEO-Technik

- Pro Seite Metadaten + Canonical (`app/layout.tsx` + `generateMetadata`).
- `sitemap.xml` und `robots.txt` dynamisch.
- JSON-LD: WebSite, WebApplication/SoftwareApplication, FAQPage, Article, BreadcrumbList –
  relevant für Google und KI-Suche (ChatGPT, Gemini, AI Overviews).
- Breadcrumbs auf allen Unterseiten (sichtbar + strukturiert).

## Projektstruktur

```
app/
  page.tsx                 Startseite / Pillar (Balkonkraftwerk-Rechner)
  rechner/page.tsx         Rechner-Verzeichnis
  rechner/[slug]/page.tsx  Rechner-Detailseiten (Slug → Komponente)
  ratgeber/page.tsx        Blog-Index
  ratgeber/[slug]/page.tsx Artikel
  impressum / datenschutz  Rechtliches (Platzhalter)
  sitemap.ts, robots.ts, globals.css, layout.tsx
components/
  Rechner.tsx              Balkonkraftwerk-Rechner (Hauptseite)
  StromkostenRechner.tsx   Stromkosten-Rechner
  SpeicherRechner.tsx      Speicher-Rechner
  Rechner.module.css       gemeinsame Rechner-Styles
  Header / Footer / Faq / Icon / RelatedLinks / Breadcrumbs
content/
  calculators.ts           Rechner-Registry
  posts.ts                 Ratgeber-Inhalte
lib/site.ts                zentrale Konfiguration (Domain, Brand, Impressum)
```

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build prüfen
```

## Mit Claude Code weiterbauen

Im Projektordner `claude` starten, z. B.:

- „Füge einen Wallbox-Ladekosten-Rechner hinzu: Registry-Eintrag, Komponente nach Vorlage
  StromkostenRechner, und in der COMPONENTS-Map verdrahten."
- „Schreibe drei weitere Ratgeber-Artikel im Cluster, jeweils mit relatedCalculators/relatedPosts."

## Deployen

`git add . && git commit -m "..." && git push` – Vercel rebuildet automatisch bei jedem Push.

## Vor dem Launch unbedingt anpassen

- [ ] `lib/site.ts`: echte Domain + Impressum-Daten.
- [ ] Affiliate-Link im Balkonkraftwerk-Rechner (`components/Rechner.tsx`, `href="#"`) ersetzen.
- [ ] Impressum + Datenschutz vervollständigen.
- [ ] Ertragswerte (`BUNDESLAENDER` in `Rechner.tsx`) an eine zitierbare Quelle anlehnen
      (HTW Berlin Stecker-Solar-Simulator) und Quelle auf der Seite verlinken.
- [ ] In Google Search Console verifizieren und `sitemap.xml` einreichen.

## Hinweis zu den Zahlen

Ertragswerte und Eigenverbrauchsquoten sind belastbare Richtwerte (Stand 2026), keine Messdaten.
Förderangaben in Artikeln sind datiert und ändern sich häufig – regelmäßig prüfen.
