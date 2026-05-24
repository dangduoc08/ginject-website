import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Ginject',
  description:
    'A NestJS-inspired dependency-injection web framework for Go. Module-based architecture, execution-safe context propagation, zero goroutine leaks.',
  url: 'https://ginject.dev',
  ogImage: 'https://ginject.dev/og.png',
  links: { github: 'https://github.com/dangduoc08/ginject' },
};

export function createMetadata(override: Metadata): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    ...override,
    openGraph: {
      siteName: siteConfig.name,
      url: siteConfig.url,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@dangduoc08',
      images: [siteConfig.ogImage],
      ...override.twitter,
    },
  };
}
