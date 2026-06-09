import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { getPost, allSlugs, formatDate } from "@/content/posts";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `/ratgeber/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  };
}

function catPillClass(cat: string): string {
  const map: Record<string, string> = {
    "Wirtschaftlichkeit": "cat-pill--green",
    "Recht & Anmeldung": "cat-pill--solar",
    "Technik & Montage": "cat-pill--accent",
    "Förderung": "cat-pill--purple",
  };
  return map[cat] ?? "cat-pill--accent";
}

export default function PostPage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "de-DE",
    articleSection: post.category,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/ratgeber/${post.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <div className="container" style={{ paddingTop: 36 }}>
        <Breadcrumbs
          items={[
            { name: "Start", href: "/" },
            { name: "Ratgeber", href: "/ratgeber" },
            { name: post.title, href: `/ratgeber/${post.slug}` },
          ]}
        />
      </div>

      <article className="container container--narrow section--tight" style={{ paddingBottom: 0 }}>
        <div className="article-header">
          <span className={`cat-pill ${catPillClass(post.category)}`}>{post.category}</span>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <span>Aktualisiert {formatDate(post.updated ?? post.date)}</span>
            <span className="article-meta__sep">·</span>
            <span>{post.readingMinutes} Min. Lesezeit</span>
          </div>
        </div>

        <div className="prose">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />

          <div className="note" style={{ marginTop: 40 }}>
            Rechne deinen eigenen Fall durch:{" "}
            <Link href="/">zum Balkonkraftwerk-Rechner</Link>.
          </div>
        </div>
      </article>

      <section className="container container--narrow section" style={{ paddingTop: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em" }}>
          Passend dazu
        </h2>
        <RelatedLinks calculators={post.relatedCalculators} posts={post.relatedPosts} />
      </section>
    </>
  );
}
