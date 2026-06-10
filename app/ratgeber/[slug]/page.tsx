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
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/ratgeber/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <article className="container section">
        <div className="prose">
          <Breadcrumbs
            items={[
              { name: "Start", href: "/" },
              { name: "Ratgeber", href: "/ratgeber" },
              { name: post.title, href: `/ratgeber/${post.slug}` },
            ]}
          />

          <div className="post-card__cat" style={{ marginBottom: 14 }}>{post.category}</div>
          <h1 style={{ fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 700, margin: "0 0 14px" }}>
            {post.title}
          </h1>
          <div className="post-card__meta" style={{ marginBottom: 30 }}>
            Aktualisiert am {formatDate(post.updated ?? post.date)} · {post.readingMinutes} Min. Lesezeit
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.body }} />

          <div className="note" style={{ marginTop: 36 }}>
            Rechne deinen eigenen Fall durch:{" "}
            <Link href="/">zum Balkonkraftwerk-Rechner</Link>.
          </div>
        </div>

        <div className="container--narrow" style={{ padding: 0, marginTop: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18 }}>Passend dazu</h2>
          <RelatedLinks calculators={post.relatedCalculators} posts={post.relatedPosts} />
        </div>
      </article>
    </>
  );
}
