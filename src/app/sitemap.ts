import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.dovindustries.com", changeFrequency: "monthly", priority: 1 }];
}
