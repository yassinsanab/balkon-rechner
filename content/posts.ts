// Blog ("Ratgeber") content. Each post is plain data with an HTML body that you
// author and control. To add a post, append an object here — the index page and
// the dynamic [slug] route pick it up automatically, including sitemap entries.

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO, publication
  updated?: string; // ISO, last meaningful update
  readingMinutes: number;
  keywords: string[];
  // Internal linking (pillar-cluster). Slugs of related calculators + posts.
  relatedCalculators: string[];
  relatedPosts: string[];
  // Trusted, hand-authored HTML. Rendered as-is.
  body: string;
};

export const categories = [
  "Wirtschaftlichkeit",
  "Recht & Anmeldung",
  "Technik & Montage",
  "Förderung",
] as const;

export const posts: Post[] = [
  {
    slug: "lohnt-sich-ein-balkonkraftwerk",
    title: "Lohnt sich ein Balkonkraftwerk 2026? Die ehrliche Rechnung",
    category: "Wirtschaftlichkeit",
    description:
      "Amortisiert sich ein Balkonkraftwerk wirklich? Wir rechnen ehrlich nach – mit realistischem Eigenverbrauch, ohne Einspeise-Mythen, und zeigen, wovon sich die Ersparnis tatsächlich abhängt.",
    date: "2026-05-12",
    updated: "2026-06-02",
    readingMinutes: 6,
    keywords: ["lohnt sich ein balkonkraftwerk", "balkonkraftwerk amortisation", "balkonkraftwerk ersparnis"],
    relatedCalculators: ["balkonkraftwerk-rechner", "speicher-rechner"],
    relatedPosts: ["balkonkraftwerk-anmelden", "balkonkraftwerk-ausrichtung"],
    body: `
<p class="lead">Die kurze Antwort: Ja – aber nicht aus dem Grund, den viele vermuten. Wer mit der Einspeisevergütung rechnet, rechnet falsch. Der Wert eines Balkonkraftwerks steckt fast vollständig im selbst genutzten Strom.</p>

<h2>Warum die Einspeisung kaum eine Rolle spielt</h2>
<p>Die meisten Balkonkraftwerke laufen über die vereinfachte Meldung im Marktstammdatenregister – ganz ohne Anspruch auf Einspeisevergütung. Und selbst wenn: Eine eingespeiste Kilowattstunde bringt aktuell nur rund 7,8 Cent, während eine selbst genutzte Kilowattstunde dir den vollen Strompreis von etwa 37 Cent spart. Selbst genutzter Strom ist damit fast fünfmal so wertvoll wie eingespeister.</p>
<p>Die ehrliche Ersparnis ist deshalb simpel: <strong>selbst genutzte Kilowattstunden × dein Strompreis</strong>. Mehr nicht. Jeder Rechner, der die Einspeisung in die Rentabilität einrechnet, schönt die Zahlen.</p>

<h2>Wie viel Strom kommt zusammen?</h2>
<p>Ein 800-Wp-Set erzeugt je nach Standort, Ausrichtung und Montage rund 600 bis 800 kWh pro Jahr. Größere Sets bis 2.000 Wp Modulleistung kommen auf 1.200 bis 1.400 kWh – der 800-W-Wechselrichter kappt zwar die Mittagsspitzen, ist dafür aber morgens, abends und bei Bewölkung häufiger ausgelastet.</p>
<p>Entscheidend ist aber nicht die Erzeugung, sondern der Eigenverbrauch.</p>

<h2>Der Knackpunkt: Eigenverbrauch</h2>
<p>Ohne Speicher nutzt ein typischer Haushalt nur etwa 30 bis 40 Prozent des erzeugten Stroms selbst. Der Rest fällt mittags an, wenn niemand zu Hause ist, und fließt unvergütet ins Netz. Mit einem Speicher steigt der Eigenverbrauch auf 60 bis 70 Prozent.</p>
<p>Du kannst den Eigenverbrauch auch ohne Speicher erhöhen: Geschirrspüler, Waschmaschine oder Warmwasserboiler in die Mittagsstunden legen, Grundlast-Geräte (Kühlschrank, Router, Standby) decken ohnehin einen Teil ab.</p>

<h2>Beispielrechnung</h2>
<ul>
<li>Set: 800 Wp, Südbalkon, aufgeständert</li>
<li>Erzeugung: ca. 700 kWh/Jahr</li>
<li>Eigenverbrauch ohne Speicher: 35 % = 245 kWh</li>
<li>Strompreis: 37 ct/kWh</li>
<li><strong>Ersparnis: rund 91 € pro Jahr</strong></li>
<li>Anschaffung: 500 € → Amortisation nach gut 5 Jahren</li>
</ul>
<p>Mit einem günstigeren Set (350 €) oder kommunaler Förderung sinkt die Amortisation schnell auf zwei bis drei Jahre. Über 20 Jahre summiert sich die Ersparnis – bei steigenden Strompreisen entsprechend mehr.</p>

<div class="note">Rechne deinen eigenen Fall mit dem Rechner auf der Startseite durch. Stell dort dein Bundesland, deine Ausrichtung und deinen Strompreis ein – das macht den Unterschied zwischen einer groben Faustregel und einer belastbaren Schätzung.</div>

<h2>Für wen lohnt es sich besonders?</h2>
<p>Am meisten profitieren Haushalte mit hoher Tag-Grundlast (Homeoffice, mehrere Personen), gutem Strompreis-Niveau und einer halbwegs sonnigen Ausrichtung. Selbst ein Nord- oder Ostbalkon kann sich rechnen – nur eben langsamer.</p>

<p>Wann es schwierig wird: stark verschattete Balkone, sehr niedriger Eigenverbrauch (tagsüber niemand da, kein Speicher) oder überteuerte Komplettpakete. In diesen Fällen lohnt der genaue Blick in den Rechner besonders.</p>
`,
  },
  {
    slug: "balkonkraftwerk-anmelden",
    title: "Balkonkraftwerk anmelden 2026: Anleitung fürs Marktstammdatenregister",
    category: "Recht & Anmeldung",
    description:
      "Seit dem Solarpaket I ist die Anmeldung deutlich einfacher: nur noch das Marktstammdatenregister, kein Netzbetreiber mehr. Schritt für Schritt erklärt, inklusive Fristen und typischer Fehler.",
    date: "2026-04-28",
    updated: "2026-06-01",
    readingMinutes: 4,
    keywords: ["balkonkraftwerk anmelden", "marktstammdatenregister balkonkraftwerk", "balkonkraftwerk anmeldung"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["lohnt-sich-ein-balkonkraftwerk", "balkonkraftwerk-foerderung-2026"],
    body: `
<p class="lead">Gute Nachricht vorweg: Die Anmeldung eines Balkonkraftwerks dauert heute nur wenige Minuten und ist komplett kostenlos. Seit dem Solarpaket I ist nur noch eine einzige Stelle zuständig.</p>

<h2>Was sich geändert hat</h2>
<p>Früher musstest du dein Steckersolargerät doppelt anmelden – beim Netzbetreiber und im Marktstammdatenregister. Die Anmeldung beim Netzbetreiber ist <strong>entfallen</strong>. Es bleibt nur noch die Registrierung im Marktstammdatenregister (MaStR) der Bundesnetzagentur.</p>

<h2>Schritt für Schritt</h2>
<ol>
<li>Auf der Website des Marktstammdatenregisters ein Benutzerkonto anlegen.</li>
<li>Dich selbst als Marktakteur (Anlagenbetreiber) registrieren.</li>
<li>Die Anlage als „Steckerfertige Solaranlage / Balkonkraftwerk“ erfassen.</li>
<li>Angaben zu Standort, Inbetriebnahmedatum, Modulleistung und Wechselrichterleistung machen.</li>
<li>Absenden – fertig. Eine Bestätigung kommt direkt im Portal.</li>
</ol>

<h2>Die wichtigsten Eckdaten</h2>
<ul>
<li><strong>Frist:</strong> in der Regel innerhalb eines Monats nach Inbetriebnahme.</li>
<li><strong>Wechselrichterleistung:</strong> maximal 800 Watt.</li>
<li><strong>Modulleistung:</strong> bis 2.000 Wp (mit Schuko-Stecker nach aktueller Norm bis 960 Wp).</li>
<li><strong>Kosten:</strong> keine. Die Registrierung ist kostenlos.</li>
</ul>

<div class="note">Achtung beim Zähler: Ein alter Ferraris-Zähler darf nicht rückwärts laufen. Der Tausch gegen einen modernen Zähler ist Sache des Messstellenbetreibers und wird durch deine MaStR-Meldung angestoßen. Bis zum Tausch darfst du die Anlage in der Regel bereits betreiben.</div>

<h2>Typische Fehler</h2>
<ul>
<li><strong>Watt mit Wattpeak verwechseln:</strong> Der Wechselrichter wird in Watt (AC) angegeben, die Module in Wattpeak (Wp). Nicht durcheinanderbringen.</li>
<li><strong>Frist verstreichen lassen:</strong> Die Anmeldung ist Pflicht, auch ohne Einspeisevergütung.</li>
<li><strong>Vermieter vergessen:</strong> Du brauchst zwar keine Genehmigung mehr im klassischen Sinn, solltest Vermieter oder Eigentümergemeinschaft aber informieren, vor allem bei Eingriffen an der Fassade oder am Geländer.</li>
</ul>
`,
  },
  {
    slug: "balkonkraftwerk-mit-speicher",
    title: "Balkonkraftwerk mit Speicher: Lohnt sich das 2026?",
    category: "Wirtschaftlichkeit",
    description:
      "Ein Speicher hebt den Eigenverbrauch von rund 35 auf 60 bis 70 Prozent – kostet aber extra. Wann sich die Investition rechnet und wann nicht.",
    date: "2026-05-20",
    readingMinutes: 5,
    keywords: ["balkonkraftwerk mit speicher", "balkonkraftwerk speicher lohnt sich", "mini pv speicher"],
    relatedCalculators: ["speicher-rechner", "balkonkraftwerk-rechner"],
    relatedPosts: ["lohnt-sich-ein-balkonkraftwerk", "balkonkraftwerk-ausrichtung"],
    body: `
<p class="lead">Ein Speicher löst das größte Problem des Balkonkraftwerks: Strom entsteht mittags, gebraucht wird er abends. Die Frage ist nur, ob die höhere Ersparnis die Mehrkosten trägt.</p>

<h2>Was ein Speicher bringt</h2>
<p>Ohne Speicher nutzt du typischerweise 30 bis 40 Prozent deines Solarstroms selbst. Ein Speicher hebt diesen Anteil auf 60 bis 70 Prozent, weil er die Mittagsüberschüsse in die Abendstunden verschiebt. Da nur selbst genutzter Strom Geld spart, steigt deine jährliche Ersparnis spürbar.</p>

<h2>Die Kehrseite: Kosten und Amortisation</h2>
<p>Ein Speicher kostet je nach Kapazität mehrere hundert Euro extra. Diese Investition verlängert zunächst die Amortisationszeit. Die Rechnung lohnt sich vor allem dann, wenn:</p>
<ul>
<li>du tagsüber wenig zu Hause bist und sonst viel einspeisen würdest,</li>
<li>dein Strompreis hoch ist,</li>
<li>der Speicher zur Modulleistung passt (ein zu großer Speicher wird nie voll).</li>
</ul>

<h2>Faustregel für die Speichergröße</h2>
<p>Der Speicher sollte ungefähr zur täglichen Überschussmenge passen. Bei einem 800-Wp-Set, das im Sommer vielleicht 3 bis 4 kWh Überschuss am Tag produziert, ist ein Speicher mit rund 2 kWh nutzbarer Kapazität meist sinnvoll. Größer bedeutet nicht automatisch besser – im Winter bleibt jeder Speicher oft leer.</p>

<div class="note">Tipp: Vergleiche im Rechner beide Varianten direkt. Schalte den Speicher an und aus und beobachte, wie sich Ersparnis und Amortisation verändern – inklusive der höheren Anschaffungskosten, die du im Feld „Anschaffung“ einträgst.</div>

<h2>Wann sich der Speicher (noch) nicht lohnt</h2>
<p>Wenn du ohnehin einen hohen Tag-Eigenverbrauch hast – etwa durch Homeoffice oder eine große Grundlast – nutzt du schon ohne Speicher viel direkt. Der Zusatznutzen eines Speichers ist dann kleiner, und die reine Modulanlage amortisiert sich schneller. Auch bei sehr günstigen Modul-Sets ohne Förderung kann es sinnvoll sein, erst die Module zu betreiben und den Speicher später nachzurüsten.</p>
`,
  },
  {
    slug: "balkonkraftwerk-foerderung-2026",
    title: "Balkonkraftwerk Förderung 2026: Wo es Zuschüsse gibt",
    category: "Förderung",
    description:
      "Es gibt keine bundesweite Förderung, aber 0 % Mehrwertsteuer und regionale Zuschüsse zwischen 100 und 500 Euro. Der Überblick, welche Programme 2026 aktiv sind – und worauf du beim Antrag achten musst.",
    date: "2026-05-30",
    updated: "2026-06-05",
    readingMinutes: 5,
    keywords: ["balkonkraftwerk förderung 2026", "balkonkraftwerk zuschuss", "steckersolar förderung"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["lohnt-sich-ein-balkonkraftwerk", "balkonkraftwerk-anmelden"],
    body: `
<p class="lead">Die wichtigste Förderung gilt bundesweit und automatisch: 0 Prozent Mehrwertsteuer auf Balkonkraftwerk und Speicher. Darüber hinaus ist Förderung reine Regionalsache – und ändert sich ständig.</p>

<div class="note">Stand der Angaben: Juni 2026. Förderprogramme sind oft schnell ausgeschöpft und werden laufend angepasst. Prüfe vor dem Kauf immer die aktuellen Bedingungen bei deinem Bundesland und deiner Kommune.</div>

<h2>Bundesweit: 0 % Mehrwertsteuer</h2>
<p>Seit 2023 gilt für private Photovoltaik bis 30 kWp ein Nullsteuersatz – das schließt Balkonkraftwerke und passende Speicher ein. Du zahlst also keine 19 Prozent Mehrwertsteuer mehr. Diese „Förderung“ ist im Kaufpreis bereits enthalten und gilt überall.</p>

<h2>Förderung auf Landesebene</h2>
<p>Eine bundesweit einheitliche Förderung gibt es nicht. Nur wenige Bundesländer haben eigene Landesprogramme – darunter Sachsen (Zuschuss für Mieter), Mecklenburg-Vorpommern (bis zu 500 Euro, an Mietverhältnis gebunden) und eingeschränkt Hamburg. Berlins SolarPLUS-Programm wurde Anfang 2026 eingestellt. Die meisten Länder verweisen auf kommunale Programme.</p>

<h2>Förderung auf kommunaler Ebene</h2>
<p>Hier liegt das meiste Potenzial – aber auch die größte Unübersichtlichkeit. Viele Städte und Gemeinden zahlen zwischen 100 und 500 Euro. Beispiele wie Leipzig oder München zeigen: Die Programme unterscheiden sich stark in Höhe, Zielgruppe (oft nur Mieter) und Bedingungen. Mittel sind häufig schnell aufgebraucht.</p>

<h2>Worauf du beim Antrag achten musst</h2>
<ul>
<li><strong>Reihenfolge:</strong> Manche Programme verlangen den Antrag <em>vor</em> dem Kauf. Wer zuerst kauft, geht dann leer aus.</li>
<li><strong>Kombinierbarkeit:</strong> Kommunale und Landesförderung lassen sich meist nicht kombinieren.</li>
<li><strong>Nachweise:</strong> Rechnung, MaStR-Registrierung und teils Mietnachweis bereithalten.</li>
<li><strong>Budget:</strong> Früh sein lohnt sich – ist der Fördertopf leer, ist Schluss.</li>
</ul>

<h2>Lohnt sich das Warten auf Förderung?</h2>
<p>Nicht unbedingt. Selbst ohne Zuschuss amortisiert sich ein günstiges Set in wenigen Jahren. Eine Förderung beschleunigt das, sollte aber keine Kaufentscheidung blockieren – zumal Programme jederzeit auslaufen können. Rechne deinen Fall mit und ohne Zuschuss im Rechner durch, indem du die Anschaffungskosten entsprechend anpasst.</p>
`,
  },
  {
    slug: "balkonkraftwerk-ausrichtung",
    title: "Balkonkraftwerk Ausrichtung & Neigung: So holst du den maximalen Ertrag",
    category: "Technik & Montage",
    description:
      "Süd, Ost-West oder Nord, senkrecht oder aufgeständert: Wie Ausrichtung und Neigungswinkel den Ertrag deines Balkonkraftwerks beeinflussen – und wann sich welche Montage lohnt.",
    date: "2026-05-25",
    readingMinutes: 5,
    keywords: ["balkonkraftwerk ausrichtung", "balkonkraftwerk neigungswinkel", "balkonkraftwerk ertrag optimieren"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["lohnt-sich-ein-balkonkraftwerk", "balkonkraftwerk-welche-geraete"],
    body: `
<p class="lead">Dieselbe Anlage kann je nach Ausrichtung und Neigung doppelt so viel Strom liefern – oder eben die Hälfte. Wer das versteht, holt mehr aus seinem Balkonkraftwerk heraus, ohne einen Cent mehr auszugeben.</p>

<h2>Die Ausrichtung entscheidet am meisten</h2>
<p>Eine Südausrichtung liefert in Deutschland den höchsten Jahresertrag. Südost und Südwest sind fast gleichwertig. Eine reine Ost- oder Westausrichtung bringt etwa 80 bis 85 Prozent davon, eine Nordausrichtung nur rund die Hälfte – kann sich bei günstigen Strompreisen aber trotzdem rechnen.</p>
<p>Wichtig für Balkonbesitzer: Ost-West verteilt den Ertrag über den Tag (morgens und abends), während Süd die Mittagsspitze betont. Da du abends oft mehr Strom verbrauchst, kann Ost-West den Eigenverbrauch sogar verbessern.</p>

<h2>Der Neigungswinkel</h2>
<p>Optimal ist in Deutschland ein Winkel von etwa 30 bis 35 Grad. Genau das erreichst du mit einer aufgeständerten Montage – sie bringt den vollen Ertrag. Senkrecht am Balkongeländer montiert (90 Grad) sinkt der Ertrag auf rund 70 Prozent, dafür sind die Module schneefrei und nutzen den tiefen Wintersonnenstand besser.</p>

<h3>Montage-Varianten im Vergleich</h3>
<ul>
<li><strong>Aufgeständert (ca. 30°):</strong> höchster Ertrag, braucht Platz auf Balkon oder Flachdach.</li>
<li><strong>Senkrecht am Geländer:</strong> einfachste Montage, ca. 70 Prozent Ertrag, robust im Winter.</li>
<li><strong>Flach liegend:</strong> ca. 85 bis 90 Prozent, aber Verschmutzung sammelt sich leichter.</li>
</ul>

<div class="note">Spiel die Kombinationen direkt im Rechner durch: Stell deine Ausrichtung und Montageart ein und vergleiche, wie sich Ertrag und Ersparnis verändern.</div>

<h2>Verschattung nicht unterschätzen</h2>
<p>Schon ein Teilschatten – etwa durch ein Geländer, einen Baum oder das Nachbarhaus – kann den Ertrag stark drücken. Beobachte über den Tag, wann und wo Schatten fällt, und richte die Module so aus, dass sie in den ertragsstärksten Stunden (späte Vormittage bis früher Nachmittag) frei in der Sonne stehen.</p>
`,
  },
  {
    slug: "balkonkraftwerk-welche-geraete",
    title: "Welche Geräte kann ein Balkonkraftwerk mit 800 Watt betreiben?",
    category: "Technik & Montage",
    description:
      "800 Watt klingen wenig – decken aber die Grundlast vieler Haushalte. Welche Geräte ein Balkonkraftwerk versorgt und wie du den Eigenverbrauch ohne Speicher erhöhst.",
    date: "2026-06-03",
    readingMinutes: 4,
    keywords: ["balkonkraftwerk welche geräte", "800 watt balkonkraftwerk geräte", "balkonkraftwerk eigenverbrauch erhöhen"],
    relatedCalculators: ["balkonkraftwerk-rechner", "stromkosten-rechner"],
    relatedPosts: ["lohnt-sich-ein-balkonkraftwerk", "balkonkraftwerk-ausrichtung"],
    body: `
<p class="lead">800 Watt reichen nicht für alles gleichzeitig – aber sie decken die Grundlast, die in jedem Haushalt ständig läuft. Und genau da steckt die Ersparnis.</p>

<h2>Die Grundlast ist der Schlüssel</h2>
<p>Geräte, die rund um die Uhr laufen, summieren sich: Kühlschrank, Gefriertruhe, Router, Standby-Verbraucher, Heizungspumpe. Diese Grundlast liegt bei vielen Haushalten zwischen 100 und 300 Watt – genau im Bereich, den ein Balkonkraftwerk tagsüber dauerhaft liefern kann. Dieser Strom wird direkt selbst verbraucht und spart bares Geld.</p>

<h2>Was 800 Watt typischerweise versorgen</h2>
<ul>
<li>Kühlschrank und Gefriertruhe (ca. 100–150 W im Mittel)</li>
<li>WLAN-Router, Smart-Home-Geräte, Ladegeräte</li>
<li>Laptop und Monitor im Homeoffice</li>
<li>Kleinere Verbraucher wie Aquarienpumpe oder Lüftung</li>
</ul>
<p>Große Verbraucher wie Backofen, Wasserkocher oder Herd ziehen kurzzeitig 2.000 Watt und mehr – die deckt ein Balkonkraftwerk nicht allein, der Rest kommt dann aus dem Netz.</p>

<h2>So erhöhst du den Eigenverbrauch ohne Speicher</h2>
<p>Je mehr du tagsüber selbst nutzt, desto höher die Ersparnis. Ein paar einfache Hebel:</p>
<ul>
<li>Waschmaschine, Geschirrspüler und Trockner in die Mittagsstunden legen (Zeitschaltuhr oder Timer).</li>
<li>Warmwasserboiler oder Heizstab über Mittag laufen lassen.</li>
<li>E-Bike, Laptop und Powerbanks tagsüber laden.</li>
</ul>

<div class="note">Wie viel ein Balkonkraftwerk konkret von deinen Stromkosten abdeckt, zeigt dir der Balkonkraftwerk-Rechner – und deine gesamten Stromkosten ermittelst du im Stromkosten-Rechner.</div>
`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function allSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
