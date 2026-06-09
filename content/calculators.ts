import type { IconName } from "@/components/Icon";

// The calculator registry. This is the backbone of the site's SEO architecture:
// each entry powers a calculator detail page (/rechner/[slug]), the directory,
// the sitemap, the homepage grid, and the internal-linking graph.
//
// The interactive React component for each calculator is wired up by `slug` in
// app/rechner/[slug]/page.tsx (and the Balkonkraftwerk one lives on the homepage).

export type ContentBlock =
  | { h2: string; p: string[] }
  | { h2: string; ul: string[] };

export type Calculator = {
  slug: string;
  // true = the primary money page, rendered on the homepage (not at /rechner/[slug])
  isHome?: boolean;
  title: string; // <title> / card title
  h1: string;
  shortLabel: string; // for nav / footer
  description: string; // meta description + card text
  keywords: string[];
  icon: IconName;
  // Surrounding SEO content (the "Ratgeber" layer around the tool)
  intro: string;
  content: ContentBlock[];
  faq: { q: string; a: string }[];
  // Internal linking (pillar-cluster). Slugs of related calculators + post slugs.
  relatedCalculators: string[];
  relatedPosts: string[];
};

export const calculators: Calculator[] = [
  {
    slug: "balkonkraftwerk-rechner",
    isHome: true,
    title: "Balkonkraftwerk-Rechner 2026 – Ertrag, Ersparnis & Amortisation",
    h1: "Lohnt sich dein Balkonkraftwerk?",
    shortLabel: "Balkonkraftwerk-Rechner",
    description:
      "Berechne Ertrag, jährliche Stromersparnis und Amortisation deiner Mini-PV-Anlage – mit regionalen Ertragsdaten und den aktuellen Regeln für 2026.",
    keywords: ["balkonkraftwerk rechner", "balkonkraftwerk ertrag", "balkonkraftwerk ersparnis"],
    icon: "sun",
    intro:
      "Der Balkonkraftwerk-Rechner zeigt dir in Sekunden, ob sich eine Mini-PV-Anlage für dich lohnt – mit ehrlicher Methodik und regionalen Ertragsdaten.",
    content: [],
    faq: [],
    relatedCalculators: ["stromkosten-rechner", "speicher-rechner"],
    relatedPosts: ["lohnt-sich-ein-balkonkraftwerk", "balkonkraftwerk-anmelden"],
  },
  {
    slug: "stromkosten-rechner",
    title: "Stromkosten-Rechner 2026 – Stromkosten pro Monat & Jahr berechnen",
    h1: "Stromkosten berechnen",
    shortLabel: "Stromkosten-Rechner",
    description:
      "Berechne deine Stromkosten pro Monat und Jahr aus Verbrauch und Strompreis – inklusive Gerätekosten und wie viel ein Balkonkraftwerk davon abdeckt.",
    keywords: ["stromkosten berechnen", "stromkosten rechner", "stromverbrauch kosten"],
    icon: "bolt",
    intro:
      "Mit dem Stromkosten-Rechner ermittelst du aus deinem Jahresverbrauch und Strompreis die monatlichen und jährlichen Kosten – und siehst, wie viel ein Balkonkraftwerk davon einspart.",
    content: [
      {
        h2: "Wie werden Stromkosten berechnet?",
        p: [
          "Die Formel ist einfach: Jahresverbrauch in Kilowattstunden (kWh) multipliziert mit dem Strompreis pro kWh ergibt die jährlichen Stromkosten. Geteilt durch zwölf erhältst du die monatlichen Kosten.",
          "Der durchschnittliche Haushaltsstrompreis liegt 2026 bei rund 37 Cent pro kWh. Ein Single-Haushalt verbraucht etwa 1.500 bis 2.000 kWh im Jahr, ein Vier-Personen-Haushalt 3.500 bis 4.500 kWh.",
        ],
      },
      {
        h2: "So senkst du deine Stromkosten",
        ul: [
          "Stromtarif vergleichen und wechseln – oft 5 bis 10 Cent pro kWh Unterschied.",
          "Große Verbraucher wie Kühlschrank oder Trockner gegen effiziente Geräte tauschen.",
          "Ein Balkonkraftwerk deckt einen Teil der Grundlast direkt mit eigenem Solarstrom.",
          "Standby-Verbrauch reduzieren – er macht oft mehr als 100 kWh im Jahr aus.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie viel Strom verbraucht ein durchschnittlicher Haushalt?",
        a: "Ein Single-Haushalt verbraucht rund 1.500 bis 2.000 kWh pro Jahr, ein Zwei-Personen-Haushalt etwa 2.500 bis 3.000 kWh und ein Vier-Personen-Haushalt 3.500 bis 4.500 kWh. Wärmepumpe oder E-Auto erhöhen den Verbrauch deutlich.",
      },
      {
        q: "Wie viel kostet eine Kilowattstunde Strom 2026?",
        a: "Der durchschnittliche Haushaltsstrompreis liegt 2026 bei rund 37 Cent pro kWh. In günstigen Neukundentarifen sind 25 bis 28 Cent möglich, in der Grundversorgung teils über 40 Cent.",
      },
      {
        q: "Wie viel Stromkosten spart ein Balkonkraftwerk?",
        a: "Ein 800-Wp-Balkonkraftwerk spart je nach Eigenverbrauch und Strompreis typischerweise 90 bis 150 Euro pro Jahr. Den genauen Wert berechnest du im Balkonkraftwerk-Rechner.",
      },
    ],
    relatedCalculators: ["balkonkraftwerk-rechner", "speicher-rechner"],
    relatedPosts: ["lohnt-sich-ein-balkonkraftwerk"],
  },
  {
    slug: "speicher-rechner",
    title: "Balkonkraftwerk Speicher-Rechner – Lohnt sich ein Stromspeicher?",
    h1: "Lohnt sich ein Speicher fürs Balkonkraftwerk?",
    shortLabel: "Speicher-Rechner",
    description:
      "Berechne, ob sich ein Stromspeicher für dein Balkonkraftwerk rechnet: zusätzlicher Eigenverbrauch, jährliche Mehr-Ersparnis und Amortisation des Speichers.",
    keywords: ["balkonkraftwerk speicher rechner", "balkonkraftwerk speicher lohnt sich", "mini pv speicher"],
    icon: "battery",
    intro:
      "Ein Speicher hebt den Eigenverbrauch deines Balkonkraftwerks von rund 35 auf 60 bis 70 Prozent. Dieser Rechner zeigt, ob die Mehr-Ersparnis die Speicherkosten trägt.",
    content: [
      {
        h2: "Wie wirkt ein Speicher auf die Ersparnis?",
        p: [
          "Ohne Speicher nutzt du nur etwa 35 Prozent deines Solarstroms selbst – der Rest fließt unvergütet ins Netz. Ein Speicher verschiebt die Mittagsüberschüsse in den Abend und hebt den Eigenverbrauch auf 60 bis 70 Prozent.",
          "Da nur selbst genutzter Strom Geld spart, steigt die jährliche Ersparnis. Die Frage ist, ob diese Mehr-Ersparnis die Anschaffungskosten des Speichers in vertretbarer Zeit wieder einspielt.",
        ],
      },
      {
        h2: "Wann sich ein Speicher lohnt",
        ul: [
          "Du bist tagsüber wenig zu Hause und würdest sonst viel einspeisen.",
          "Dein Strompreis ist hoch.",
          "Die Speichergröße passt zur täglichen Überschussmenge – zu groß lohnt selten.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie groß sollte der Speicher für ein Balkonkraftwerk sein?",
        a: "Der Speicher sollte zur täglichen Überschussmenge passen. Bei einem 800-Wp-Set sind im Sommer oft 3 bis 4 kWh Überschuss realistisch, weshalb ein Speicher mit rund 2 kWh nutzbarer Kapazität meist sinnvoll ist. Im Winter bleibt jeder Speicher häufig leer.",
      },
      {
        q: "Verlängert ein Speicher die Amortisationszeit?",
        a: "Ja, zunächst. Der Speicher kostet mehrere hundert Euro extra und erhöht die Investition. Ob sich das lohnt, hängt vom zusätzlichen Eigenverbrauch und deinem Strompreis ab – genau das berechnet dieser Rechner.",
      },
    ],
    relatedCalculators: ["balkonkraftwerk-rechner", "stromkosten-rechner"],
    relatedPosts: ["balkonkraftwerk-mit-speicher", "lohnt-sich-ein-balkonkraftwerk"],
  },
];

export function getCalculator(slug: string): Calculator | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function homeCalculator(): Calculator {
  return calculators.find((c) => c.isHome) ?? calculators[0];
}

export function subCalculators(): Calculator[] {
  return calculators.filter((c) => !c.isHome);
}
