import type { MetadataRoute } from 'next';
import { source } from './source';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();
  const baseUrl = 'https://ginject.dev';
  const locales = ['en', 'vi'];

  const sitemap: MetadataRoute.Sitemap = [];

  // Homepage for both locales
  locales.forEach((locale) => {
    sitemap.push({
      url: locale === 'en' ? baseUrl : `${baseUrl}/vi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          vi: `${baseUrl}/vi`,
        },
      },
    });
  });

  // Documentation pages for both locales
  locales.forEach((locale) => {
    sitemap.push({
      url: locale === 'en' ? `${baseUrl}/docs` : `${baseUrl}/vi/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          en: `${baseUrl}/docs`,
          vi: `${baseUrl}/vi/docs`,
        },
      },
    });

    // All documentation pages
    pages.forEach((page) => {
      const url = `${baseUrl}${locale === 'en' ? '' : `/${locale}`}${page.url}`;
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}${page.url}`,
            vi: `${baseUrl}/vi${page.url}`,
          },
        },
      });
    });
  });

  return sitemap;
}
