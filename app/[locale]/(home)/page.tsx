import type { Metadata } from 'next';
import { Nav } from '@/components/landing/nav';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { Differentiators } from '@/components/landing/differentiators';
import { CodePreview } from '@/components/landing/code-preview';
import { Architecture } from '@/components/landing/architecture';
import { Footer } from '@/components/landing/footer';
import { createMetadata } from '@/lib/metadata';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return createMetadata({}, {
    locale,
    pageKey: 'home',
    alternates: {
      en: 'https://ginject.dev/en',
      vi: 'https://ginject.dev/vi',
    },
  });
}

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-fd-background text-fd-foreground">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Differentiators />
        <CodePreview />
        <Architecture />
      </main>
      <Footer />
    </div>
  );
}
