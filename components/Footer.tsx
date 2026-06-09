import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";
import { calculators, homeCalculator } from "@/content/calculators";
import { posts } from "@/content/posts";

export default function Footer() {
  const home = homeCalculator();
  const hrefFor = (slug: string) => (slug === home.slug ? "/" : `/rechner/${slug}`);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__cols">
          <div>
            <span className="site-footer__brand">
              <Icon name="sun" size={22} className="brand__sun" />
              {site.name}
            </span>
            <p className="site-footer__tag">
              Ehrliche Rechner und Ratgeber rund ums Balkonkraftwerk – mit aktuellen Daten für 2026.
            </p>
          </div>

          <div>
            <h4>Rechner</h4>
            <ul>
              {calculators.map((c) => (
                <li key={c.slug}>
                  <Link href={hrefFor(c.slug)}>{c.shortLabel}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Ratgeber</h4>
            <ul>
              {posts.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link href={`/ratgeber/${p.slug}`}>{p.title.split(":")[0].split("?")[0]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Rechtliches</h4>
            <ul>
              <li><Link href="/ratgeber">Alle Artikel</Link></li>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} {site.name}. Alle Angaben ohne Gewähr.</span>
          <span>Keine Steuer-, Rechts- oder Energieberatung.</span>
        </div>
      </div>
    </footer>
  );
}
