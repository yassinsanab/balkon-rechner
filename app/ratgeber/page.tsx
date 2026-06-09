import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts, categories, formatDate } from "@/content/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ratgeber – Balkonkraftwerk Wissen & Anleitungen",
  description:
    "Anleitungen und Hintergründe rund ums Balkonkraftwerk: Wirtschaftlichkeit, Anmeldung, Technik, Speicher und Förderung – verständlich und auf dem Stand 2026.",
  alternates: { canonical: "/ratgeber" },
};

function catPillClass(cat: string): string {
  const map: Record<string, string> = {
    "Wirtschaftlichkeit": "cat-pill--green",
    "Recht & Anmeldung": "cat-pill--solar",
    "Technik & Montage": "cat-pill--accent",
    "Förderung": "cat-pill--purple",
  };
  return map[cat] ?? "cat-pill--accent";
}

export default function RatgeberIndex() {
  const grouped = categories
    .map((cat) => ({ name: cat, items: posts.filter((p) => p.category === cat) }))
    .filter((g) => g.items.length > 0);

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ratgeber – Balkonkraftwerk Wissen & Anleitungen",
    url: `${site.url}/ratgeber`,
    description: "Anleitungen und Hintergründe rund ums Balkonkraftwerk für 2026.",
    hasPart: posts.map((p) => ({
      "@type": "Article",
      headline: p.title,
      url: `${site.url}/ratgeber/${p.slug}`,
      datePublished: p.date,
      dateModified: p.updated ?? p.date,
      articleSection: p.category,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />

      <section className="container hero" style={{ paddingBottom: 0 }}>
        <span className="eyebrow"><Icon name="document" size={15} /> Ratgeber</span>
        <h1>Balkonkraftwerk-Wissen</h1>
        <p className="hero__sub">
          Verständliche Anleitungen und ehrliche Einordnungen – damit sich deine Mini-PV-Anlage
          wirklich rechnet.
        </p>
      </section>

      <section className="container section">
        <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Ratgeber", href: "/ratgeber" }]} />

        {grouped.map((group) => (
          <div key={group.name} className="cat-group">
            <div className="cat-group__head">
              <span className={`cat-pill ${catPillClass(group.name)}`}>{group.name}</span>
              <span className="cat-group__name">{group.name}</span>
              <span className="cat-group__count">
                {group.items.length} {group.items.length === 1 ? "Artikel" : "Artikel"}
              </span>
            </div>
            <div className="post-grid">
              {group.items.map((p) => (
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
          </div>
        ))}
      </section>
    </>
  );
}
