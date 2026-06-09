import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container hero">
      <p className="eyebrow">404</p>
      <h1>Seite nicht gefunden</h1>
      <p>Diese Seite existiert nicht oder wurde verschoben.</p>
      <p style={{ marginTop: 24 }}>
        <Link href="/" className="btn">
          Zur Startseite
        </Link>
      </p>
    </section>
  );
}
