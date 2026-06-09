import Link from "next/link";
import Rechner from "@/components/Rechner";
import Faq, { faqItems } from "@/components/Faq";
import Icon from "@/components/Icon";
import { posts, formatDate } from "@/content/posts";
import { subCalculators } from "@/content/calculators";
import { site } from "@/lib/site";

export default function HomePage() {
  const others = subCalculators();
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section className="container hero">
        <span className="eyebrow">
          <Icon name="sun" size={15} /> Balkonkraftwerk-Rechner 2026
        </span>
        <h1>
          Lohnt sich dein <em>Balkonkraftwerk?</em>
        </h1>
        <p className="hero__sub">
          Berechne Ertrag, jährliche Ersparnis und Amortisation – mit regionalen Ertragsdaten und den
          aktuellen Regeln für 2026. Ehrlich gerechnet, ohne Einspeise-Mythen.
        </p>
        <div className="trust">
          <span className="trust__item"><Icon name="check" size={17} /> Aktuelle Regeln 2026</span>
          <span className="trust__item"><Icon name="check" size={17} /> Regionale Ertragsdaten</span>
          <span className="trust__item"><Icon name="check" size={17} /> Realistischer Eigenverbrauch</span>
        </div>
      </section>

      {/* Stats bar */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-bar__inner">
            {[
              { num: "800 W", cls: "stat-item__num--accent", label: "Max. Wechselrichterleistung" },
              { num: "37 ct", cls: "", label: "Strompreis ∅ 2026" },
              { num: "0 %", cls: "stat-item__num--solar", label: "MwSt. auf PV-Anlagen" },
              { num: "3–7 J.", cls: "stat-item__num--green", label: "Typische Amortisation" },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <span className={`stat-item__num ${s.cls}`}>{s.num}</span>
                <span className="stat-item__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator */}
      <section className="container section--tight" style={{ paddingTop: 40 }}>
        <Rechner />
      </section>

      {/* Weitere Rechner */}
      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">Weitere Rechner</span>
          <h2>Alle Energie-Rechner</h2>
          <p>Von Stromkosten bis Speicher – die passenden Tools rund um deinen Solarstrom.</p>
        </div>
        <div className="calc-grid">
          {others.map((c) => (
            <Link key={c.slug} href={`/rechner/${c.slug}`} className="card calc-card">
              <span className="calc-card__icon"><Icon name={c.icon} size={24} /></span>
              <h3>{c.shortLabel}</h3>
              <p>{c.description}</p>
              <span className="calc-card__go">Rechner öffnen <Icon name="arrow" size={15} /></span>
            </Link>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* Erklärung */}
      <section className="container section" style={{ background: "var(--bg-white)" }}>
        <div className="prose">
          <h2>So funktioniert die Berechnung</h2>
          <p>
            Der Wert eines Balkonkraftwerks steckt fast vollständig im selbst genutzten Strom. Eine
            eingespeiste Kilowattstunde bringt aktuell nur rund 7,8 Cent, während eine selbst genutzte
            Kilowattstunde dir den vollen Strompreis von etwa 37 Cent spart. Deshalb rechnet dieser
            Rechner die Einspeisevergütung bewusst <strong>nicht</strong> in die Ersparnis ein – das
            wäre unrealistisch.
          </p>
          <p>
            Die Ersparnis ergibt sich aus drei Größen: wie viel Strom deine Anlage je nach Bundesland,
            Ausrichtung und Montage erzeugt, wie viel davon du selbst nutzt (ohne Speicher etwa 35
            Prozent, mit Speicher 60 bis 70 Prozent) und wie hoch dein Strompreis ist.
          </p>
          <h3>Die wichtigsten Regeln 2026</h3>
          <ul>
            <li>Wechselrichter speist maximal 800 Watt ins Hausnetz ein.</li>
            <li>Modulleistung bis 2.000 Wp – mit Schuko-Stecker nach aktueller Norm bis 960 Wp.</li>
            <li>Anmeldung nur noch im Marktstammdatenregister, nicht mehr beim Netzbetreiber.</li>
            <li>0 Prozent Mehrwertsteuer auf Anlage und Speicher.</li>
          </ul>
          <p>
            Tiefer einsteigen? Lies, ob sich ein{" "}
            <Link href="/ratgeber/lohnt-sich-ein-balkonkraftwerk">Balkonkraftwerk wirklich lohnt</Link>,
            wie du es <Link href="/ratgeber/balkonkraftwerk-anmelden">richtig anmeldest</Link> oder wie
            du mit der{" "}
            <Link href="/ratgeber/balkonkraftwerk-ausrichtung">optimalen Ausrichtung</Link> mehr Ertrag
            holst.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* FAQ */}
      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Häufige Fragen</h2>
          <p>Die wichtigsten Antworten rund um Ertrag, Anmeldung und Wirtschaftlichkeit.</p>
        </div>
        <Faq items={faqItems} />
      </section>

      <hr className="divider" />

      {/* Ratgeber Teaser */}
      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">Ratgeber</span>
          <h2>Wissen, das sich auszahlt</h2>
          <p>Hintergründe und Anleitungen, damit sich dein Balkonkraftwerk wirklich lohnt.</p>
        </div>
        <div className="post-grid">
          {latest.map((p) => (
            <Link href={`/ratgeber/${p.slug}`} key={p.slug} className="card post-card">
              <div className="post-card__cat">{p.category}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="post-card__meta">
                <span>{formatDate(p.date)}</span>
                <span className="post-card__dot" />
                <span>{p.readingMinutes} Min.</span>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Link href="/ratgeber" className="btn btn--ghost">Alle Artikel ansehen</Link>
        </div>
      </section>
    </>
  );
}
