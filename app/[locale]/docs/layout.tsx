import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/app/source';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return createMetadata({}, {
    locale,
    pageKey: 'docs',
    canonical: `https://ginject.dev/${locale === 'en' ? '' : locale}/docs`,
    alternates: {
      en: 'https://ginject.dev/docs',
      vi: 'https://ginject.dev/vi/docs',
    },
  });
}

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <DocsLayout
      tree={source.pageTree[locale]}
      nav={{ title: 'Ginject' }}
      sidebar={{ defaultOpenLevel: 1 }}
    >
      {children}
    </DocsLayout>
  );
}
