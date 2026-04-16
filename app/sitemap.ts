import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/ru`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/pl`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
}
