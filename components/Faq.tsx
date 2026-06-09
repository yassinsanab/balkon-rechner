export type FaqItem = { q: string; a: string };

// Default FAQ for the homepage (Balkonkraftwerk pillar).
export const faqItems: FaqItem[] = [
  {
    q: "Wie viel Strom erzeugt ein Balkonkraftwerk pro Jahr?",
    a: "Ein typisches Set mit 800 Wp Modulleistung erzeugt in Deutschland je nach Standort, Ausrichtung und Montage rund 600 bis 800 kWh pro Jahr. Mit mehr Modulleistung (bis 2.000 Wp) und guter Südausrichtung sind 1.200 bis 1.400 kWh möglich, da der 800-W-Wechselrichter zwar Spitzen kappt, in Schwachlichtphasen aber häufiger ausgelastet ist.",
  },
  {
    q: "Lohnt sich ein Balkonkraftwerk 2026 noch?",
    a: "Ja. Entscheidend ist nicht die Einspeisevergütung, sondern der vermiedene Netzbezug. Bei rund 37 ct/kWh Strompreis und einem realistischen Eigenverbrauch von 30 bis 40 Prozent ohne Speicher amortisiert sich ein Set für 300 bis 800 Euro meist in drei bis fünf Jahren – bei kommunaler Förderung oft schneller.",
  },
  {
    q: "Wie viel Watt darf ein Balkonkraftwerk haben?",
    a: "Der Wechselrichter darf seit dem Solarpaket I maximal 800 Watt ins Hausnetz einspeisen. Die installierte Modulleistung darf bis zu 2.000 Wp betragen, bei Anschluss über einen normalen Schuko-Stecker nach aktueller Norm bis zu 960 Wp.",
  },
  {
    q: "Muss ich mein Balkonkraftwerk anmelden?",
    a: "Ja, aber nur noch an einer Stelle: im Marktstammdatenregister (MaStR) der Bundesnetzagentur, in der Regel innerhalb eines Monats nach Inbetriebnahme. Die früher zusätzlich nötige Anmeldung beim Netzbetreiber ist entfallen.",
  },
  {
    q: "Lohnt sich ein Speicher für das Balkonkraftwerk?",
    a: "Ein Speicher erhöht den Eigenverbrauch von etwa 35 auf 60 bis 70 Prozent und steigert so die Ersparnis. Allerdings kostet er mehrere hundert Euro extra und verlängert dadurch die Amortisationszeit. Ob er sich lohnt, hängt stark vom eigenen Verbrauchsprofil ab – am besten im Speicher-Rechner beide Varianten vergleichen.",
  },
  {
    q: "Gibt es 2026 eine Förderung für Balkonkraftwerke?",
    a: "Eine bundesweite Förderung gibt es nicht, aber 0 Prozent Mehrwertsteuer auf Anlage und Speicher. Einige Bundesländer und viele Kommunen zahlen Zuschüsse zwischen 100 und 500 Euro. Diese Programme ändern sich häufig und sind oft schnell ausgeschöpft – vor dem Kauf bei der eigenen Gemeinde prüfen.",
  },
];

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details className="faq__item" key={i}>
          <summary>{item.q}</summary>
          <div className="faq__answer">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
