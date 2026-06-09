import Link from "next/link";
import { site } from "@/lib/site";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <nav className="crumb" aria-label="Brotkrümel">
        {items.map((c, i) => (
          <span key={c.href} style={{ display: "inline-flex", gap: 8 }}>
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < items.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span>{c.name}</span>}
          </span>
        ))}
      </nav>
    </>
  );
}
