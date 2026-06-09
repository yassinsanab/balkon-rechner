import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <section className="container section">
      <div className="prose">
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Impressum</h1>
        <p className="note">
          Platzhalter – vor dem Launch durch deine echten Angaben ersetzen (§ 5 DDG / § 18 MStV).
        </p>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {site.operator.name}
          <br />
          {site.operator.street}
          <br />
          {site.operator.city}
        </p>

        <h2>Kontakt</h2>
        <p>E-Mail: {site.operator.email}</p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte – insbesondere der Rechenergebnisse – kann
          jedoch keine Gewähr übernommen werden. Die Ergebnisse des Rechners sind unverbindliche
          Schätzungen und stellen keine Steuer-, Rechts- oder Energieberatung dar.
        </p>

        <h2>Affiliate-Hinweis</h2>
        <p>
          Diese Seite kann Affiliate-Links enthalten. Bei einem Kauf über solche Links erhalten wir
          ggf. eine Provision. Für dich entstehen dadurch keine Mehrkosten.
        </p>
      </div>
    </section>
  );
}
