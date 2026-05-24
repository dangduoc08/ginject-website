import type { Metadata } from 'next';
import { Nav } from '@/components/landing/nav';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { Architecture } from '@/components/landing/architecture';
import { CodePreview } from '@/components/landing/code-preview';
import { Footer } from '@/components/landing/footer';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Ginject — NestJS-inspired DI framework for Go',
  description:
    'A production-ready dependency injection web framework for Go. Module-based architecture, execution-safe context propagation, zero goroutine leaks.',
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-fd-background text-fd-foreground">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <CodePreview />
      </main>
      <Footer />
    </div>
  );
}
