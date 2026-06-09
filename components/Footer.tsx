import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          © {new Date().getFullYear()} {site.name}. Alle Angaben ohne Gewähr.
        </div>
        <nav className="site-footer__links" aria-label="Rechtliches">
          <Link href="/ratgeber">Ratgeber</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
