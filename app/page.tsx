import Link from "next/link";
import Rechner from "@/components/Rechner";
import Faq, { faqItems } from "@/components/Faq";
import { posts, formatDate } from "@/content/posts";
import { site } from "@/lib/site";

export default function HomePage() {
  const latest = posts.slice(0, 3);

  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Balkonkraftwerk-Rechner",
    url: site.url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    inLanguage: "de-DE",
    description: site.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <section className="container hero">
        <p className="eyebrow">Balkonkraftwerk-Rechner 2026</p>
        <h1>Lohnt sich dein Balkonkraftwerk?</h1>
        <p>
          Berechne Ertrag, jährliche Ersparnis und Amortisation – mit regionalen Ertragsdaten und
          den aktuellen Regeln für 2026. Ehrlich gerechnet, ohne Einspeise-Mythen.
        </p>
      </section>

      <section className="container section--tight">
        <Rechner />
      </section>

      <section className="container section">
        <div className="prose">
          <h2>So funktioniert die Berechnung</h2>
          <p>
            Der Wert eines Balkonkraftwerks steckt fast vollständig im selbst genutzten Strom. Eine
            eingespeiste Kilowattstunde bringt aktuell nur rund 7,8 Cent, während eine selbst
            genutzte Kilowattstunde dir den vollen Strompreis von etwa 37 Cent spart. Deshalb rechnet
            dieser Rechner die Einspeisevergütung bewusst <strong>nicht</strong> in die Ersparnis ein
            – das wäre unrealistisch.
          </p>
          <p>
            Die Ersparnis ergibt sich aus drei Größen: wie viel Strom deine Anlage je nach Bundesland,
            Ausrichtung und Montage erzeugt, wie viel davon du selbst nutzt (ohne Speicher etwa 35
            Prozent, mit Speicher 60 bis 70 Prozent) und wie hoch dein Strompreis ist. Genau diese
            Werte stellst du oben selbst ein.
          </p>
          <h3>Die wichtigsten Regeln 2026</h3>
          <ul>
            <li>Wechselrichter speist maximal 800 Watt ins Hausnetz ein.</li>
            <li>Modulleistung bis 2.000 Wp – mit Schuko-Stecker nach aktueller Norm bis 960 Wp.</li>
            <li>Anmeldung nur noch im Marktstammdatenregister, nicht mehr beim Netzbetreiber.</li>
            <li>0 Prozent Mehrwertsteuer auf Anlage und Speicher.</li>
          </ul>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Häufige Fragen</h2>
          <p>Die wichtigsten Antworten rund um Ertrag, Anmeldung und Wirtschaftlichkeit.</p>
        </div>
        <Faq />
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Ratgeber</h2>
          <p>Hintergründe und Anleitungen, damit sich dein Balkonkraftwerk wirklich lohnt.</p>
        </div>
        <div className="post-grid">
          {latest.map((p) => (
            <Link href={`/ratgeber/${p.slug}`} key={p.slug} className="card post-card">
              <div className="post-card__meta">
                {formatDate(p.date)} · {p.readingMinutes} Min.
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span className="post-card__more">Weiterlesen →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
