import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/ratgeber`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${site.url}/impressum`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${site.url}/datenschutz`, changeFrequency: "yearly", priority: 0.1 },
  ];

  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/ratgeber/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...postPages];
}
