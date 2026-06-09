import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/ratgeber/${post.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: site.url },
      { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${site.url}/ratgeber` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${site.url}/ratgeber/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <article className="container section">
        <div className="prose">
          <nav className="crumb" aria-label="Brotkrümel">
            <Link href="/">Start</Link> / <Link href="/ratgeber">Ratgeber</Link>
          </nav>

          <h1 style={{ fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 700, margin: "0 0 12px" }}>
            {post.title}
          </h1>
          <div className="post-card__meta" style={{ marginBottom: 28 }}>
            Aktualisiert am {formatDate(post.updated ?? post.date)} · {post.readingMinutes} Min.
            Lesezeit
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.body }} />

          <div className="note" style={{ marginTop: 36 }}>
            Rechne deinen eigenen Fall durch:{" "}
            <Link href="/#rechner">zum Balkonkraftwerk-Rechner →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
