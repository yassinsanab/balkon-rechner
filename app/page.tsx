import Link from "next/link";
import Rechner from "@/components/Rechner";
import Faq, { faqItems } from "@/components/Faq";
import Icon from "@/components/Icon";
import HeroArt from "@/components/HeroArt";
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

      <section className="container hero-split">
        <div className="hero-split__copy">
          <span className="eyebrow"><Icon name="sun" size={15} /> Balkonkraftwerk-Rechner 2026</span>
          <h1>Lohnt sich dein <em>Balkonkraftwerk?</em></h1>
          <p className="hero__sub">
            Berechne Ertrag, jährliche Ersparnis und Amortisation – mit regionalen Ertragsdaten und den
            aktuellen Regeln für 2026. Ehrlich gerechnet, ohne Einspeise-Mythen.
          </p>
          <div className="hero-split__cta">
            <Link href="#rechner" className="btn">Jetzt berechnen <Icon name="arrow" size={16} /></Link>
            <Link href="/ratgeber" className="btn btn--ghost">Zum Ratgeber</Link>
          </div>
          <div className="trust">
            <span className="trust__item"><Icon name="check" size={18} /> Regeln 2026</span>
            <span className="trust__item"><Icon name="check" size={18} /> Regional</span>
            <span className="trust__item"><Icon name="check" size={18} /> Kostenlos</span>
          </div>
        </div>
        <HeroArt className="hero-art" />
      </section>

      <section className="container section--tight">
        <Rechner />
      </section>

      <section className="section--alt section">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="stat__num">1,2 Mio+</div>
              <div className="stat__label">angemeldete Balkonkraftwerke in Deutschland</div>
            </div>
            <div className="stat">
              <div className="stat__num">800 W</div>
              <div className="stat__label">maximale Einspeiseleistung seit dem Solarpaket I</div>
            </div>
            <div className="stat">
              <div className="stat__num">~37 ct</div>
              <div className="stat__label">durchschnittlicher Strompreis pro kWh (2026)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">In 3 Schritten</span>
          <h2>So nutzt du den Rechner</h2>
          <p>Vom ersten Wert bis zur Entscheidung – in unter einer Minute.</p>
        </div>
        <div className="steps">
          <div className="card step">
            <div className="step__n">1</div>
            <h3>Anlage eingeben</h3>
            <p>Modulleistung, Bundesland, Ausrichtung und Montageart wählen – die Standardwerte passen für die meisten Balkone.</p>
          </div>
          <div className="card step">
            <div className="step__n">2</div>
            <h3>Strompreis anpassen</h3>
            <p>Trag deinen eigenen Strompreis und die Anschaffungskosten ein. Optional einen Speicher dazuschalten.</p>
          </div>
          <div className="card step">
            <div className="step__n">3</div>
            <h3>Ergebnis ablesen</h3>
            <p>Du siehst sofort Ertrag, jährliche Ersparnis und nach wie vielen Jahren sich die Anlage amortisiert.</p>
          </div>
        </div>
      </section>

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
              <span className="calc-card__go">Rechner öffnen <Icon name="arrow" size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section className="container section">
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
            du mit der <Link href="/ratgeber/balkonkraftwerk-ausrichtung">optimalen Ausrichtung</Link>{" "}
            mehr Ertrag holst.
          </p>
        </div>
      </section>

      <section className="section--alt section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Häufige Fragen</h2>
            <p>Die wichtigsten Antworten rund um Ertrag, Anmeldung und Wirtschaftlichkeit.</p>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

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
              <div className="post-card__meta">{formatDate(p.date)} · {p.readingMinutes} Min.</div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/ratgeber" className="btn btn--ghost">Alle Artikel ansehen</Link>
        </div>
      </section>
    </>
  );
}
