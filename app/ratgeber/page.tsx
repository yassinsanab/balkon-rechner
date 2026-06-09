import type { Metadata } from "next";
import Link from "next/link";
import { posts, formatDate } from "@/content/posts";

export const metadata: Metadata = {
  title: "Ratgeber – Balkonkraftwerk Wissen & Anleitungen",
  description:
    "Anleitungen und Hintergründe rund ums Balkonkraftwerk: Wirtschaftlichkeit, Anmeldung, Speicher und Förderung – verständlich und auf dem Stand 2026.",
  alternates: { canonical: "/ratgeber" },
};

export default function RatgeberIndex() {
  return (
    <>
      <section className="container hero">
        <p className="eyebrow">Ratgeber</p>
        <h1>Balkonkraftwerk-Wissen</h1>
        <p>
          Verständliche Anleitungen und ehrliche Einordnungen – damit sich deine Mini-PV-Anlage
          wirklich rechnet.
        </p>
      </section>

      <section className="container section--tight">
        <div className="post-grid">
          {posts.map((p) => (
            <Link href={`/ratgeber/${p.slug}`} key={p.slug} className="card post-card">
              <div className="post-card__meta">
                {formatDate(p.date)} · {p.readingMinutes} Min. Lesezeit
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
