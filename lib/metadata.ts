import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Ginject',
  tagline: 'Go Dependency Injection Framework',
  description:
    'Ginject is a NestJS-inspired dependency injection web framework for Go. Build modular, scalable Go applications with multi-pipeline architecture, execution-safe context propagation, and zero goroutine leaks.',
  url: 'https://ginject.dev',
  ogImage: 'https://ginject.dev/og.png',
  links: { 
    github: 'https://github.com/dangduoc08/ginject',
    docs: 'https://ginject.dev/docs',
  },
};

export const pageTitles: Record<string, Record<string, string>> = {
  home: {
    en: 'Ginject - Go Dependency Injection Framework | NestJS for Go',
    vi: 'Ginject - Framework Dependency Injection cho Go | NestJS cho Go',
  },
  docs: {
    en: 'Documentation - Ginject Go Framework',
    vi: 'Tài liệu - Framework Ginject Go',
  },
  'getting-started': {
    en: 'Getting Started - Ginject Go Dependency Injection Framework',
    vi: 'Bắt đầu - Framework Ginject Go',
  },
  architecture: {
    en: 'Architecture - Multi Pipelines, One Stage | Ginject',
    vi: 'Kiến trúc - Multi Pipelines One Stage | Ginject',
  },
  transports: {
    en: 'Transports - HTTP & WebSocket | Ginject Go Framework',
    vi: 'Transports - HTTP & WebSocket | Framework Ginject',
  },
  stages: {
    en: 'Pipeline Stages - Middleware, Guards, Interceptors | Ginject',
    vi: 'Các Bước Pipeline - Middleware, Guards, Interceptors | Ginject',
  },
  modules: {
    en: 'Modules & Providers - Dependency Injection | Ginject Go',
    vi: 'Modules & Providers - Dependency Injection | Ginject Go',
  },
};

export const pageDescriptions: Record<string, Record<string, string>> = {
  home: {
    en: 'Ginject is a modular Go framework with dependency injection, multi-transport support (HTTP, WebSocket), and production-ready architecture. NestJS-inspired DI pattern for Go developers.',
    vi: 'Ginject là framework Go modular với dependency injection, hỗ trợ nhiều transport (HTTP, WebSocket), và kiến trúc sẵn sàng cho production. Mô hình DI lấy cảm hứng từ NestJS cho các developer Go.',
  },
  docs: {
    en: 'Complete documentation for Ginject Go framework. Learn dependency injection, modules, controllers, providers, middleware, guards, interceptors, and more.',
    vi: 'Tài liệu đầy đủ về framework Ginject Go. Học dependency injection, modules, controllers, providers, middleware, guards, interceptors, và hơn nữa.',
  },
  'getting-started': {
    en: 'Get started with Ginject. Learn core concepts including multi-pipelines architecture, HTTP and WebSocket support, dependency injection, and modular application design.',
    vi: 'Bắt đầu với Ginject. Học các khái niệm cốt lõi bao gồm kiến trúc multi-pipelines, hỗ trợ HTTP và WebSocket, dependency injection, và thiết kế ứng dụng modular.',
  },
  architecture: {
    en: 'Understand Ginject\'s core architecture: Multi Pipelines, One Stage. Learn how HTTP and WebSocket share the same processing pipeline for maximum code reuse and consistency.',
    vi: 'Hiểu kiến trúc cốt lõi của Ginject: Multi Pipelines, One Stage. Học cách HTTP và WebSocket chia sẻ cùng một pipeline xử lý để tái sử dụng code tối đa và tính nhất quán.',
  },
  transports: {
    en: 'Explore Ginject\'s transport support: HTTP REST APIs and WebSocket real-time communication. Learn the lifecycle and integration of each transport with the unified pipeline model.',
    vi: 'Khám phá hỗ trợ transport của Ginject: HTTP REST APIs và WebSocket giao tiếp real-time. Học vòng đời và tích hợp của mỗi transport với mô hình pipeline thống nhất.',
  },
  stages: {
    en: 'Learn about Ginject\'s request pipeline stages: Middleware, Guards, Interceptors, Handlers, and Exception Filters. Master each stage\'s responsibility and execution order.',
    vi: 'Tìm hiểu các bước của pipeline request Ginject: Middleware, Guards, Interceptors, Handlers, và Exception Filters. Nắm vững trách nhiệm và thứ tự thực thi của mỗi bước.',
  },
  modules: {
    en: 'Master Ginject\'s module system and dependency injection. Learn how to compose applications with modules, providers, controllers, and dynamic module factories.',
    vi: 'Thành thạo hệ thống module và dependency injection của Ginject. Học cách soạn thảo các ứng dụng với modules, providers, controllers, và các factory module động.',
  },
};

export function createMetadata(
  override: Metadata,
  options?: {
    locale?: string;
    pageKey?: string;
    canonical?: string;
    alternates?: { en: string; vi: string };
  }
): Metadata {
  const locale = (options?.locale || 'en') as 'en' | 'vi';
  const pageKey = options?.pageKey || 'home';

  const title = pageTitles[pageKey]?.[locale] || siteConfig.name;
  const description = pageDescriptions[pageKey]?.[locale] || siteConfig.description;

  const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: override.title || title,
    description: override.description || description,
    alternates: {
      canonical: options?.canonical || `${siteConfig.url}/${locale}${pageKey === 'home' ? '' : `/${pageKey}`}`,
      languages: options?.alternates || {
        en: `${siteConfig.url}/en${pageKey === 'home' ? '' : `/${pageKey}`}`,
        vi: `${siteConfig.url}/vi${pageKey === 'home' ? '' : `/${pageKey}`}`,
        'x-default': `${siteConfig.url}/en${pageKey === 'home' ? '' : `/${pageKey}`}`,
      },
    },
    openGraph: {
      title: override.openGraph?.title || title,
      description: override.openGraph?.description || description,
      type: 'website',
      siteName: siteConfig.name,
      url: options?.canonical || `${siteConfig.url}/${locale}${pageKey === 'home' ? '' : `/${pageKey}`}`,
      locale: locale === 'en' ? 'en_US' : 'vi_VN',
      alternateLocale: locale === 'en' ? 'vi_VN' : 'en_US',
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@dangduoc08',
      images: [siteConfig.ogImage],
      title: override.twitter?.title || title,
      description: override.twitter?.description || description,
      ...override.twitter,
    },
  };

  return metadata;
}

export function createSoftwareApplicationSchema(locale: string = 'en') {
  const isVietnam = locale === 'vi';
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Ginject',
    description: isVietnam 
      ? 'Framework Go với dependency injection lấy cảm hứng từ NestJS. Hỗ trợ HTTP và WebSocket với kiến trúc modular.'
      : 'Go framework with NestJS-inspired dependency injection. HTTP and WebSocket support with modular architecture.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    inLanguage: isVietnam ? 'vi' : 'en',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '100',
    },
    url: siteConfig.url,
    image: siteConfig.ogImage,
    author: {
      '@type': 'Organization',
      name: 'Ginject',
      url: siteConfig.url,
    },
    datePublished: '2024-01-01',
    softwareVersion: '1.0',
    downloadUrl: siteConfig.links.github,
    codeRepository: siteConfig.links.github,
  };
}
