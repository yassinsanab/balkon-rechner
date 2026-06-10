import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand">
          <Icon name="sun" size={24} className="brand__sun" />
          {site.name}
        </Link>
        <nav className="nav" aria-label="Hauptnavigation">
          <Link href="/rechner">Rechner</Link>
          <Link href="/ratgeber">Ratgeber</Link>
        </nav>
      </div>
    </header>
  );
}
