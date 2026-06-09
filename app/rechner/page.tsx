import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Breadcrumbs from "@/components/Breadcrumbs";
import { calculators, homeCalculator } from "@/content/calculators";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alle Rechner – Balkonkraftwerk, Stromkosten & Speicher",
  description:
    "Alle kostenlosen Energie-Rechner im Überblick: Balkonkraftwerk-Ertrag, Stromkosten und Speicher-Wirtschaftlichkeit – mit aktuellen Daten für 2026.",
  alternates: { canonical: "/rechner" },
};

export default function RechnerIndex() {
  const home = homeCalculator();
  const hrefFor = (slug: string) => (slug === home.slug ? "/" : `/rechner/${slug}`);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Alle Energie-Rechner",
    url: `${site.url}/rechner`,
    numberOfItems: calculators.length,
    itemListElement: calculators.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${site.url}${hrefFor(c.slug)}`,
      description: c.description,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <section className="container hero" style={{ paddingBottom: 0 }}>
        <span className="eyebrow"><Icon name="calculator" size={15} /> Rechner</span>
        <h1>Alle Energie-Rechner</h1>
        <p className="hero__sub">
          Kostenlose Tools rund um Solarstrom und Stromkosten – ehrlich gerechnet, mit aktuellen Daten
          für 2026.
        </p>
      </section>

      <section className="container section">
        <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Rechner", href: "/rechner" }]} />
        <div className="calc-grid">
          {calculators.map((c) => (
            <Link key={c.slug} href={hrefFor(c.slug)} className="card calc-card">
              <span className="calc-card__icon"><Icon name={c.icon} size={24} /></span>
              <h3>{c.shortLabel}</h3>
              <p>{c.description}</p>
              <span className="calc-card__go">Rechner öffnen <Icon name="arrow" size={15} /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
