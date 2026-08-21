import { RootProvider } from 'fumadocs-ui/provider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { ReactNode } from 'react';
import { createSoftwareApplicationSchema } from '@/lib/metadata';
import type { Metadata } from 'next';

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    alternates: {
      languages: {
        en: 'https://ginject.dev/en',
        vi: 'https://ginject.dev/vi',
        'x-default': 'https://ginject.dev/en',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  
  const structuredData = createSoftwareApplicationSchema(locale);
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <RootProvider>{children}</RootProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </NextIntlClientProvider>
  );
}
