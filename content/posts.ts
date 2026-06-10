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
  {
    slug: "balkonkraftwerk-kosten",
    title: "Was kostet ein Balkonkraftwerk 2026? Preise & Komplettpakete",
    category: "Wirtschaftlichkeit",
    description:
      "Komplettsets gibt es ab rund 300 Euro, mit Speicher ab 600 Euro. Was im Preis steckt, worauf du achten solltest und warum 0 Prozent Mehrwertsteuer gelten.",
    date: "2026-06-06",
    readingMinutes: 5,
    keywords: ["balkonkraftwerk kosten", "balkonkraftwerk preis", "balkonkraftwerk komplettset preis"],
    relatedCalculators: ["balkonkraftwerk-rechner", "speicher-rechner"],
    relatedPosts: ["lohnt-sich-ein-balkonkraftwerk", "balkonkraftwerk-foerderung-2026"],
    body: `
<p class="lead">Ein Balkonkraftwerk ist günstiger als viele denken: Komplettsets starten bei rund 300 Euro. Entscheidend ist nicht der niedrigste Preis, sondern was im Set steckt – und ob es zu deinem Balkon passt.</p>

<h2>Preisrahmen 2026</h2>
<ul>
<li><strong>Einsteiger-Set (1 Modul, ~400–500 Wp):</strong> rund 250 bis 400 Euro.</li>
<li><strong>Standard-Set (2 Module, ~800–960 Wp, 800-W-Wechselrichter):</strong> rund 350 bis 600 Euro.</li>
<li><strong>Leistungs-Set (bis 2.000 Wp Module):</strong> rund 500 bis 800 Euro.</li>
<li><strong>Set mit Speicher:</strong> ab rund 600 Euro, je nach Kapazität deutlich mehr.</li>
</ul>
<p>Seit 2023 gilt der Nullsteuersatz: Auf Balkonkraftwerk und Speicher fällt keine Mehrwertsteuer an. Die genannten Preise sind also Endpreise.</p>

<h2>Was im Set enthalten sein sollte</h2>
<ul>
<li>Solarmodule (Wattpeak beachten)</li>
<li>Wechselrichter mit maximal 800 Watt Ausgangsleistung</li>
<li>Passende Halterung für deine Montageart (Geländer, Wand, aufgeständert)</li>
<li>Anschlusskabel und Stecker</li>
</ul>

<div class="note">Wie schnell sich dein konkretes Set rechnet, hängt vom Preis ab – trag ihn einfach im Balkonkraftwerk-Rechner ins Feld „Anschaffung" ein und vergleiche Amortisation und Ersparnis.</div>

<h2>Wo du sparen kannst – und wo nicht</h2>
<p>Sparen lohnt sich beim Set selbst über Vergleich und kommunale Förderung. Nicht sparen solltest du bei Halterung und Sicherheit: Eine wackelige Geländerhalterung oder ein nicht normgerechter Anschluss kostet am Ende mehr. Achte auf eine zur Montageart passende, geprüfte Halterung.</p>
`,
  },
  {
    slug: "balkonkraftwerk-mieter",
    title: "Balkonkraftwerk als Mieter: Was ist 2026 erlaubt?",
    category: "Recht & Anmeldung",
    description:
      "Seit 2024 gilt Steckersolar als privilegierte Maßnahme: Vermieter und Eigentümergemeinschaft können die Installation nur noch in Ausnahmefällen verweigern. Was das für Mieter bedeutet.",
    date: "2026-06-08",
    readingMinutes: 4,
    keywords: ["balkonkraftwerk mieter", "balkonkraftwerk mietwohnung erlaubt", "balkonkraftwerk vermieter erlaubnis"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["balkonkraftwerk-anmelden", "balkonkraftwerk-foerderung-2026"],
    body: `
<p class="lead">Gute Nachrichten für Mieter: Seit der Gesetzesänderung 2024 haben Mieter und Wohnungseigentümer einen wesentlich stärkeren Anspruch auf ein Balkonkraftwerk. Eine pauschale Ablehnung ist kaum noch möglich.</p>

<h2>Steckersolar ist eine privilegierte Maßnahme</h2>
<p>Der Gesetzgeber hat Balkonkraftwerke in den Katalog der privilegierten baulichen Veränderungen aufgenommen – ähnlich wie Lademöglichkeiten fürs E-Auto oder barrierefreie Umbauten. Das bedeutet: Vermieter beziehungsweise die Eigentümergemeinschaft müssen die Installation grundsätzlich dulden und können sie nur in begründeten Ausnahmefällen ablehnen.</p>

<h2>Was du trotzdem beachten musst</h2>
<ul>
<li><strong>Zustimmung einholen:</strong> Du brauchst weiterhin das Einverständnis zur konkreten Ausführung – über das „Ob" wird aber nicht mehr frei entschieden, nur über das „Wie".</li>
<li><strong>Fachgerechte Montage:</strong> Sicherheit und Optik dürfen eine Rolle spielen. Eine saubere, fachgerechte Befestigung erhöht die Chancen deutlich.</li>
<li><strong>Rückbaubarkeit:</strong> In der Regel muss die Anlage bei Auszug rückstandslos entfernbar sein.</li>
<li><strong>Anmeldung:</strong> Die Registrierung im Marktstammdatenregister gilt für Mieter genauso.</li>
</ul>

<div class="note">Tipp: Stell deinem Vermieter eine kurze, konkrete Anfrage mit Foto, geplanter Halterung und dem Hinweis auf die rückstandslose Montage. Das nimmt die häufigsten Bedenken vorweg.</div>

<h2>Lohnt es sich für Mieter überhaupt?</h2>
<p>Ja – gerade in Mietwohnungen mit hohem Tagverbrauch. Da du beim Auszug die Anlage einfach mitnimmst, bleibt die Investition erhalten. Rechne im Balkonkraftwerk-Rechner durch, wie schnell sie sich an deinem Standort amortisiert.</p>
`,
  },
  {
    slug: "balkonkraftwerk-winter",
    title: "Balkonkraftwerk im Winter: Wie viel Ertrag bringt es noch?",
    category: "Technik & Montage",
    description: "Im Winter erzeugt ein Balkonkraftwerk weniger – aber nicht nichts. Wie viel realistisch zusammenkommt und wie eine senkrechte Montage hilft.",
    date: "2026-01-18",
    readingMinutes: 4,
    keywords: ["balkonkraftwerk winter", "balkonkraftwerk winterertrag", "balkonkraftwerk ertrag winter"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["balkonkraftwerk-ausrichtung", "lohnt-sich-ein-balkonkraftwerk"],
    body: `
<p class="lead">Im Winter liefert ein Balkonkraftwerk deutlich weniger Strom als im Sommer – über das Jahr gesehen ist der Beitrag aber trotzdem relevant.</p>
<h2>Wie viel weniger ist es?</h2>
<p>Die Wintermonate von November bis Februar steuern je nach Standort nur etwa 10 bis 20 Prozent des Jahresertrags bei. Tiefer Sonnenstand, kurze Tage und häufige Bewölkung sind die Gründe. Ein 800-Wp-Set erzeugt im Dezember oft nur 15 bis 30 kWh.</p>
<h2>Senkrechte Montage als Vorteil</h2>
<p>Wer die Module senkrecht am Geländer montiert, fängt den flachen Wintersonnenstand besser ein und verliert weniger durch Schnee, der nicht liegen bleibt. Im Sommer ist diese Montage etwas schwächer, im Winter dafür stärker – ein guter Kompromiss für ganzjährigen Eigenverbrauch.</p>
<div class="note">Da der Eigenverbrauch im Winter durch Licht und Heizungspumpe oft hoch ist, wird der wenige erzeugte Strom fast vollständig selbst genutzt. Rechne deinen Jahreswert im Balkonkraftwerk-Rechner.</div>
`,
  },
  {
    slug: "balkonkraftwerk-reinigen",
    title: "Balkonkraftwerk reinigen und warten: Lohnt sich das?",
    category: "Technik & Montage",
    description: "Balkonkraftwerke sind nahezu wartungsfrei. Wann eine Reinigung den Ertrag spürbar erhöht – und wann sie sich nicht lohnt.",
    date: "2026-03-10",
    readingMinutes: 3,
    keywords: ["balkonkraftwerk reinigen", "solarmodule reinigen", "balkonkraftwerk wartung"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["balkonkraftwerk-ausrichtung", "balkonkraftwerk-winter"],
    body: `
<p class="lead">Die gute Nachricht: Ein Balkonkraftwerk ist praktisch wartungsfrei. Regen erledigt die Reinigung in den meisten Fällen von selbst.</p>
<h2>Wann eine Reinigung sinnvoll ist</h2>
<p>Bei flacher oder waagerechter Montage kann sich Schmutz, Pollen oder Vogelkot sammeln und den Ertrag um einige Prozent senken. Senkrecht montierte Module bleiben meist sauber. Eine Reinigung lohnt sich vor allem bei sichtbarer Verschmutzung und flachem Winkel.</p>
<h2>So reinigst du richtig</h2>
<ul>
<li>Klares Wasser und ein weicher Schwamm oder Lappen genügen.</li>
<li>Keine scharfen Reiniger, keine harten Bürsten – sie zerkratzen das Glas.</li>
<li>Am besten morgens oder abends, wenn die Module nicht heiß sind.</li>
<li>Auf Sicherheit achten: niemals in riskanter Position am Geländer hantieren.</li>
</ul>
<p>Eine jährliche Sichtkontrolle der Halterung und Kabel reicht ansonsten völlig aus.</p>
`,
  },
  {
    slug: "balkonkraftwerk-stecker",
    title: "Schuko oder Wieland? Der richtige Stecker fürs Balkonkraftwerk",
    category: "Technik & Montage",
    description: "Schuko-Stecker sind nach aktueller Norm bis 960 Wp erlaubt, darüber wird ein Energiestecker nötig. Was du zum Anschluss wissen musst.",
    date: "2026-02-22",
    readingMinutes: 4,
    keywords: ["balkonkraftwerk schuko", "balkonkraftwerk wieland stecker", "balkonkraftwerk anschluss"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["balkonkraftwerk-anmelden", "balkonkraftwerk-wieviele-module"],
    body: `
<p class="lead">Beim Anschluss eines Balkonkraftwerks gibt es zwei Wege: den normalen Schuko-Stecker oder eine spezielle Energiesteckvorrichtung (oft „Wieland" genannt). Was zulässig ist, hängt von der Modulleistung ab.</p>
<h2>Schuko-Stecker</h2>
<p>Der Anschluss über eine normale Schuko-Steckdose ist nach aktueller Norm bis zu einer Modulleistung von 960 Wp zulässig – vorausgesetzt, der Wechselrichter erfüllt die Sicherheitsanforderungen (NA-Schutz). Für die allermeisten Sets ist das der einfachste Weg.</p>
<h2>Energiesteckvorrichtung (Wieland)</h2>
<p>Wer mehr Modulleistung (bis 2.000 Wp) installieren möchte, braucht in der Regel eine Energiesteckvorrichtung, die von einer Fachkraft installiert wird. Sie gilt als besonders sicher, ist aber aufwendiger.</p>
<div class="note">Unabhängig vom Stecker: Der Wechselrichter darf maximal 800 Watt einspeisen, und die Anmeldung im Marktstammdatenregister ist Pflicht.</div>
`,
  },
  {
    slug: "balkonkraftwerk-versicherung",
    title: "Balkonkraftwerk versichern: Zahlt die Hausratversicherung?",
    category: "Recht & Anmeldung",
    description: "Viele Hausrat- und Haftpflichtversicherungen decken Balkonkraftwerke inzwischen mit ab. Worauf du beim Versicherungsschutz achten solltest.",
    date: "2026-04-05",
    readingMinutes: 4,
    keywords: ["balkonkraftwerk versicherung", "balkonkraftwerk hausratversicherung", "balkonkraftwerk versichern"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["balkonkraftwerk-mieter", "balkonkraftwerk-anmelden"],
    body: `
<p class="lead">Ein Balkonkraftwerk ist eine überschaubare Investition – trotzdem stellt sich die Frage nach dem Versicherungsschutz bei Sturm, Diebstahl oder Schäden.</p>
<h2>Hausratversicherung</h2>
<p>Viele moderne Hausratversicherungen schließen Balkonkraftwerke inzwischen ein oder bieten den Einschluss gegen geringen Aufpreis an. Gedeckt sind dann typischerweise Schäden durch Sturm, Hagel, Feuer oder Diebstahl. Ein kurzer Anruf bei deinem Versicherer schafft Klarheit.</p>
<h2>Haftpflicht</h2>
<p>Schäden, die deine Anlage bei anderen verursacht – etwa ein herabfallendes Modul – fallen in den Bereich der Privathaftpflicht. Auch hier lohnt die Nachfrage, ob Steckersolar ausdrücklich eingeschlossen ist.</p>
<div class="note">Stand der Angaben: 2026. Versicherungsbedingungen unterscheiden sich stark – prüfe deinen konkreten Vertrag. Dies ist keine Versicherungsberatung.</div>
`,
  },
  {
    slug: "balkonkraftwerk-steuer",
    title: "Ist ein Balkonkraftwerk steuerfrei? Steuern 2026 erklärt",
    category: "Recht & Anmeldung",
    description: "0 Prozent Mehrwertsteuer beim Kauf, und auch sonst bleibt das Balkonkraftwerk steuerlich unkompliziert. Was 2026 gilt.",
    date: "2026-03-28",
    readingMinutes: 3,
    keywords: ["balkonkraftwerk steuer", "balkonkraftwerk steuerfrei", "balkonkraftwerk steuererklärung"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["balkonkraftwerk-foerderung-2026", "lohnt-sich-ein-balkonkraftwerk"],
    body: `
<p class="lead">Beim Thema Steuern können Balkonkraftwerk-Besitzer aufatmen: Der Betrieb ist 2026 steuerlich denkbar einfach.</p>
<h2>0 Prozent Mehrwertsteuer beim Kauf</h2>
<p>Seit 2023 gilt für private Photovoltaik bis 30 kWp ein Nullsteuersatz. Auf Balkonkraftwerk und Speicher fällt also keine Mehrwertsteuer an – der ausgewiesene Preis ist der Endpreis.</p>
<h2>Keine Einkommensteuer auf den Strom</h2>
<p>Kleine Anlagen sind von der Einkommensteuer auf Einnahmen und Entnahmen befreit. Da die meisten Balkonkraftwerke ohnehin keine nennenswerte Einspeisevergütung erhalten, entsteht hier praktisch keine steuerliche Belastung.</p>
<div class="note">Dies ist eine allgemeine Einordnung und keine Steuerberatung. Im Zweifel hilft ein Steuerberater oder die Finanzverwaltung weiter.</div>
`,
  },
  {
    slug: "balkonkraftwerk-600-vs-800-watt",
    title: "600 vs. 800 Watt Balkonkraftwerk: Lohnt sich das Upgrade?",
    category: "Technik & Montage",
    description: "Seit dem Solarpaket I sind 800 Watt erlaubt. Ob sich das Upgrade von 600 auf 800 Watt lohnt und für wen.",
    date: "2026-02-08",
    readingMinutes: 4,
    keywords: ["600 vs 800 watt balkonkraftwerk", "balkonkraftwerk 800 watt upgrade", "balkonkraftwerk wechselrichter 800w"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["balkonkraftwerk-wieviele-module", "lohnt-sich-ein-balkonkraftwerk"],
    body: `
<p class="lead">Mit dem Solarpaket I wurde die zulässige Einspeiseleistung von 600 auf 800 Watt angehoben. Für viele stellt sich die Frage: aufrüsten oder nicht?</p>
<h2>Was die 200 Watt mehr bringen</h2>
<p>Die zusätzlichen 200 Watt wirken vor allem in den ertragsstarken Mittagsstunden und an sonnigen Tagen. Über das Jahr kann das je nach Modulleistung und Eigenverbrauch zu spürbar mehr nutzbarem Strom führen – allerdings nur, wenn du diese Spitzen auch selbst verbrauchst.</p>
<h2>Wann sich das Upgrade lohnt</h2>
<ul>
<li>Du hast bereits genügend Modulleistung (deutlich über 800 Wp), die der alte 600-W-Wechselrichter ausbremst.</li>
<li>Dein Eigenverbrauch ist hoch genug, um die Mittagsspitzen zu nutzen.</li>
<li>Manche Wechselrichter lassen sich per Update freischalten – das ist günstiger als ein Neukauf.</li>
</ul>
<p>Wer ohnehin neu kauft, sollte direkt zu einem 800-W-Gerät greifen.</p>
`,
  },
  {
    slug: "balkonkraftwerk-wieviele-module",
    title: "Wie viele Module darf ein Balkonkraftwerk haben?",
    category: "Recht & Anmeldung",
    description: "Bis 2.000 Wp Modulleistung sind erlaubt, der Wechselrichter speist aber maximal 800 Watt ein. Warum mehr Module trotzdem sinnvoll sein können.",
    date: "2026-02-15",
    readingMinutes: 3,
    keywords: ["balkonkraftwerk wie viele module", "balkonkraftwerk 2000 wp", "balkonkraftwerk modulleistung"],
    relatedCalculators: ["balkonkraftwerk-rechner"],
    relatedPosts: ["balkonkraftwerk-600-vs-800-watt", "balkonkraftwerk-stecker"],
    body: `
<p class="lead">Eine häufige Verwirrung: Wechselrichterleistung und Modulleistung sind zwei verschiedene Dinge. Beim Balkonkraftwerk gelten dafür unterschiedliche Grenzen.</p>
<h2>800 Watt Einspeisung, bis 2.000 Wp Module</h2>
<p>Der Wechselrichter darf maximal 800 Watt ins Hausnetz einspeisen. Die installierte Modulleistung darf aber bis zu 2.000 Wattpeak betragen – bei Anschluss über einen Schuko-Stecker nach aktueller Norm bis 960 Wp.</p>
<h2>Warum mehr Module sinnvoll sind</h2>
<p>Mehr Modulleistung als 800 Wp klingt zunächst unlogisch, ist es aber nicht: Der 800-W-Wechselrichter kappt nur die seltenen Mittagsspitzen. Morgens, abends und bei Bewölkung liefern die größeren Module mehr Leistung – die Anlage ist häufiger ausgelastet und erzeugt über das Jahr deutlich mehr Strom.</p>
<div class="note">Genau diesen Effekt bildet der Balkonkraftwerk-Rechner ab: Stell die Modulleistung höher als 800 Wp und beobachte, wie der Jahresertrag steigt.</div>
`,
  },
  {
    slug: "strom-sparen-haushalt",
    title: "Strom sparen im Haushalt: 10 Tipps, die wirklich wirken",
    category: "Wirtschaftlichkeit",
    description: "Von der Grundlast bis zum Standby: Die wirksamsten Hebel, um deine Stromkosten dauerhaft zu senken – ergänzend zum Balkonkraftwerk.",
    date: "2026-05-02",
    readingMinutes: 5,
    keywords: ["strom sparen haushalt", "stromkosten senken tipps", "stromverbrauch reduzieren"],
    relatedCalculators: ["stromkosten-rechner", "balkonkraftwerk-rechner"],
    relatedPosts: ["balkonkraftwerk-welche-geraete", "dynamische-stromtarife"],
    body: `
<p class="lead">Ein Balkonkraftwerk senkt deine Stromkosten – aber die wirksamste Ersparnis entsteht aus der Kombination mit klugem Verbrauch. Diese Hebel lohnen sich am meisten.</p>
<h2>Die größten Verbraucher zuerst</h2>
<ul>
<li><strong>Alte Geräte tauschen:</strong> Kühl- und Gefriergeräte über zehn Jahre verbrauchen oft das Doppelte moderner Modelle.</li>
<li><strong>Standby eliminieren:</strong> abschaltbare Steckdosenleisten sparen schnell über 100 kWh im Jahr.</li>
<li><strong>Wäsche bei 30 °C:</strong> niedrigere Temperaturen sparen einen Großteil der Waschenergie.</li>
<li><strong>Trockner meiden:</strong> Wäscheleine statt Trockner spart pro Ladung spürbar.</li>
</ul>
<h2>Solarstrom clever nutzen</h2>
<p>Lege große Verbraucher in die Mittagsstunden, wenn dein Balkonkraftwerk am meisten liefert. So erhöhst du den Eigenverbrauch – und genau der spart bares Geld.</p>
<div class="note">Berechne mit dem Stromkosten-Rechner, wie sich ein geringerer Verbrauch oder ein günstigerer Preis auf deine Jahreskosten auswirkt.</div>
`,
  },
  {
    slug: "dynamische-stromtarife",
    title: "Dynamische Stromtarife 2026: Lohnt sich der Wechsel?",
    category: "Wirtschaftlichkeit",
    description: "Dynamische Tarife folgen dem Börsenpreis – mit Chancen und Risiken. Für wen sie sich lohnen und wie sie mit Solarstrom zusammenspielen.",
    date: "2026-05-16",
    readingMinutes: 5,
    keywords: ["dynamische stromtarife", "dynamischer stromtarif lohnt sich", "stromtarif börsenpreis"],
    relatedCalculators: ["stromtarif-vergleich", "stromkosten-rechner"],
    relatedPosts: ["strom-sparen-haushalt", "lohnt-sich-ein-balkonkraftwerk"],
    body: `
<p class="lead">Seit 2025 müssen Energieversorger dynamische Stromtarife anbieten. Sie koppeln deinen Preis an die Strombörse – das kann sparen, erfordert aber Flexibilität.</p>
<h2>So funktionieren sie</h2>
<p>Statt eines festen Arbeitspreises zahlst du den stündlich schwankenden Börsenpreis plus Abgaben und Anbieteraufschlag. In günstigen Stunden – oft nachts oder bei viel Wind und Sonne – ist Strom deutlich billiger, in Spitzenzeiten teurer.</p>
<h2>Für wen sich das lohnt</h2>
<ul>
<li>Du kannst Verbrauch zeitlich verschieben (Wärmepumpe, E-Auto, Waschmaschine).</li>
<li>Du hast ein Smart Meter, das stundengenaue Abrechnung ermöglicht.</li>
<li>Du gehst bewusst mit Preisschwankungen um.</li>
</ul>
<p>Wer wenig flexibel ist, fährt mit einem günstigen Festpreistarif oft entspannter. Vergleiche beide Varianten ehrlich.</p>
<div class="note">Mit dem Stromtarif-Vergleich kannst du deinen aktuellen Tarif einem Angebot gegenüberstellen und die Jahresersparnis abschätzen.</div>
`,
  },
  {
    slug: "balkonkraftwerk-oder-photovoltaik",
    title: "Balkonkraftwerk oder PV-Anlage? Der ehrliche Vergleich",
    category: "Wirtschaftlichkeit",
    description: "Mini-PV am Balkon oder große Dachanlage? Was sich für wen lohnt – nach Investition, Ertrag, Aufwand und Wohnsituation.",
    date: "2026-05-28",
    readingMinutes: 6,
    keywords: ["balkonkraftwerk oder photovoltaik", "balkonkraftwerk vs pv anlage", "mini pv oder dachanlage"],
    relatedCalculators: ["balkonkraftwerk-rechner", "photovoltaik-rechner"],
    relatedPosts: ["lohnt-sich-ein-balkonkraftwerk", "balkonkraftwerk-mit-speicher"],
    body: `
<p class="lead">Beide erzeugen Solarstrom – aber sie spielen in unterschiedlichen Ligen. Die Wahl hängt vor allem von deiner Wohnsituation und deinem Budget ab.</p>
<h2>Balkonkraftwerk</h2>
<p>Günstig (ab rund 300 Euro), schnell installiert, ideal für Mieter und Wohnungen. Es deckt einen Teil der Grundlast und amortisiert sich oft in drei bis fünf Jahren. Die Leistung ist mit 800 Watt aber begrenzt.</p>
<h2>Photovoltaik-Dachanlage</h2>
<p>Höhere Investition (oft 10.000 Euro und mehr), dafür um ein Vielfaches mehr Ertrag und zusätzlich Einspeisevergütung. Sinnvoll für Eigenheimbesitzer mit geeignetem Dach, besonders in Kombination mit Wärmepumpe oder E-Auto.</p>
<h2>Die Entscheidung</h2>
<ul>
<li><strong>Mietwohnung oder kleines Budget?</strong> Balkonkraftwerk.</li>
<li><strong>Eigenes Dach und hoher Verbrauch?</strong> Dachanlage – oft die wirtschaftlichere Lösung über 20 Jahre.</li>
<li><strong>Unsicher?</strong> Mit dem Balkonkraftwerk starten und später aufs Dach erweitern.</li>
</ul>
<div class="note">Rechne beide Varianten durch: den Balkon im Balkonkraftwerk-Rechner, das Dach im Photovoltaik-Rechner.</div>
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
