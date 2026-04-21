import type { MetadataRoute } from "next";

const SITE_URL = "https://elevation100.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/partners`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
