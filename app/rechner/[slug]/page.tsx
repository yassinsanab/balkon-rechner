import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import RelatedLinks from "@/components/RelatedLinks";
import Icon from "@/components/Icon";
import StromkostenRechner from "@/components/StromkostenRechner";
import SpeicherRechner from "@/components/SpeicherRechner";
import WallboxRechner from "@/components/WallboxRechner";
import PhotovoltaikRechner from "@/components/PhotovoltaikRechner";
import StromtarifVergleich from "@/components/StromtarifVergleich";
import { getCalculator, subCalculators } from "@/content/calculators";
import { site } from "@/lib/site";

type Params = { slug: string };

// Wire each sub-calculator slug to its interactive component.
const COMPONENTS: Record<string, React.ComponentType> = {
  "stromkosten-rechner": StromkostenRechner,
  "speicher-rechner": SpeicherRechner,
  "wallbox-rechner": WallboxRechner,
  "photovoltaik-rechner": PhotovoltaikRechner,
  "stromtarif-vergleich": StromtarifVergleich,
};

export function generateStaticParams(): Params[] {
  return subCalculators().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const c = getCalculator(params.slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    alternates: { canonical: `/rechner/${c.slug}` },
    openGraph: { type: "website", title: c.title, description: c.description, url: `/rechner/${c.slug}` },
  };
}

export default function CalculatorPage({ params }: { params: Params }) {
  const c = getCalculator(params.slug);
  if (!c || c.isHome) notFound();
  const Tool = COMPONENTS[c.slug];
  if (!Tool) notFound();

  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: c.h1,
    url: `${site.url}/rechner/${c.slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    inLanguage: "de-DE",
    description: c.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  };
  const faqLd =
    c.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: c.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      <section className="container hero" style={{ paddingBottom: 0 }}>
        <span className="eyebrow"><Icon name={c.icon} size={15} /> Rechner</span>
        <h1>{c.h1}</h1>
        <p className="hero__sub">{c.intro}</p>
      </section>

      <section className="container section--tight" style={{ paddingTop: 28 }}>
        <Breadcrumbs
          items={[
            { name: "Start", href: "/" },
            { name: "Rechner", href: "/rechner" },
            { name: c.shortLabel, href: `/rechner/${c.slug}` },
          ]}
        />
        <Tool />
      </section>

      {c.content.length > 0 && (
        <section className="container section">
          <div className="prose">
            {c.content.map((block, i) => (
              <div key={i}>
                <h2>{block.h2}</h2>
                {"p" in block
                  ? block.p.map((para, j) => <p key={j}>{para}</p>)
                  : (
                    <ul>
                      {block.ul.map((li, j) => (
                        <li key={j}>{li}</li>
                      ))}
                    </ul>
                  )}
              </div>
            ))}
          </div>
        </section>
      )}

      {c.faq.length > 0 && (
        <section className="container section">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Häufige Fragen</h2>
          </div>
          <Faq items={c.faq} />
        </section>
      )}

      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">Weiterrechnen</span>
          <h2>Das könnte dich auch interessieren</h2>
        </div>
        <div className="container--narrow" style={{ padding: 0 }}>
          <RelatedLinks calculators={c.relatedCalculators} posts={c.relatedPosts} />
        </div>
      </section>
    </>
  );
}
