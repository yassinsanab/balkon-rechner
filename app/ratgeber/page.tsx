import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts, formatDate } from "@/content/posts";

export const metadata: Metadata = {
  title: "Ratgeber – Balkonkraftwerk Wissen & Anleitungen",
  description:
    "Anleitungen und Hintergründe rund ums Balkonkraftwerk: Wirtschaftlichkeit, Anmeldung, Technik, Speicher und Förderung – verständlich und auf dem Stand 2026.",
  alternates: { canonical: "/ratgeber" },
};

export default function RatgeberIndex() {
  return (
    <>
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
        <div className="post-grid">
          {posts.map((p) => (
            <Link href={`/ratgeber/${p.slug}`} key={p.slug} className="card post-card">
              <div className="post-card__cat">{p.category}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="post-card__meta">
                {formatDate(p.date)} · {p.readingMinutes} Min. Lesezeit
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
