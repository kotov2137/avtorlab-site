import type { MetadataRoute } from "next";

// Generates /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://avtorlab.com.ua").replace(/\/$/, "");
  const now = new Date();

  // Single-page marketing site (anchors/sections are not separate URLs)
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
