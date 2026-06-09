import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <section className="container section">
      <div className="prose">
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Datenschutzerklärung</h1>
        <p className="note">
          Platzhalter – vor dem Launch durch eine vollständige, auf deine Tools (Analytics, Ads,
          Affiliate) abgestimmte Datenschutzerklärung ersetzen. Ein Generator oder eine
          Rechtsberatung wird empfohlen.
        </p>

        <h2>Verantwortlicher</h2>
        <p>
          {site.operator.name}, {site.operator.street}, {site.operator.city}. Kontakt:{" "}
          {site.operator.email}
        </p>

        <h2>Verarbeitung im Rechner</h2>
        <p>
          Die Eingaben in den Balkonkraftwerk-Rechner werden ausschließlich lokal in deinem Browser
          verarbeitet, um das Ergebnis zu berechnen. Es werden dabei keine Eingabedaten an einen
          Server übertragen oder gespeichert.
        </p>

        <h2>Hosting</h2>
        <p>
          Beim Aufruf der Seite verarbeitet der Hosting-Anbieter technisch notwendige Daten (z. B.
          IP-Adresse, Zeitpunkt des Zugriffs) zur Auslieferung der Seite. Details ergänzen je nach
          gewähltem Anbieter.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Wende dich dafür an die oben genannte
          Kontaktadresse.
        </p>
      </div>
    </section>
  );
}
