import { source } from '@/app/source';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { notFound, redirect } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string; slug?: string[] }>;
}

export async function generateStaticParams() {
  return source.generateParams('slug', 'locale');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = source.getPage(slug, locale);
  if (!page) return {};

  const baseUrl = 'https://ginject.dev';
  const slugPath = slug ? `/${slug.join('/')}` : '';
  const enUrl = `${baseUrl}/docs${slugPath}`;
  const viUrl = `${baseUrl}/vi/docs${slugPath}`;
  const canonicalUrl = locale === 'en' ? enUrl : viUrl;

  return {
    title: `${page.data.title} | Ginject`,
    description: page.data.description || `Learn about ${page.data.title} in Ginject documentation`,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        vi: viUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: `${page.data.title} | Ginject Documentation`,
      description: page.data.description || `Learn about ${page.data.title} in Ginject`,
      type: 'article',
      url: canonicalUrl,
      locale: locale === 'en' ? 'en_US' : 'vi_VN',
      alternateLocale: locale === 'en' ? 'vi_VN' : 'en_US',
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!slug || slug.length === 0) {
    redirect(`/${locale}/docs/getting-started`);
  }
  const page = source.getPage(slug, locale);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}
