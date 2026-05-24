import type { MetadataRoute } from 'next';
import { source } from './source';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();
  const baseUrl = 'https://ginject.dev';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/docs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...pages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
