import Link from "next/link";
import Icon from "@/components/Icon";
import { getCalculator, homeCalculator } from "@/content/calculators";
import { getPost } from "@/content/posts";

export default function RelatedLinks({
  calculators = [],
  posts = [],
}: {
  calculators?: string[];
  posts?: string[];
}) {
  const calcLinks = calculators
    .map((slug) => getCalculator(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const postLinks = posts
    .map((slug) => getPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (calcLinks.length === 0 && postLinks.length === 0) return null;

  const home = homeCalculator();
  const hrefFor = (slug: string) => (slug === home.slug ? "/" : `/rechner/${slug}`);

  return (
    <div className="related">
      {calcLinks.map((c) => (
        <Link key={c.slug} href={hrefFor(c.slug)} className="related__link">
          <Icon name={c.icon} size={22} />
          <span>
            {c.shortLabel}
            <small>Rechner</small>
          </span>
        </Link>
      ))}
      {postLinks.map((p) => (
        <Link key={p.slug} href={`/ratgeber/${p.slug}`} className="related__link">
          <Icon name="document" size={22} />
          <span>
            {p.title}
            <small>Ratgeber · {p.category}</small>
          </span>
        </Link>
      ))}
    </div>
  );
}
