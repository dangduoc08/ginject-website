'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, BookOpen, Zap } from 'lucide-react';

export function Nav() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-fd-border bg-fd-background/80 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-white text-sm font-bold">
            G
          </div>
          <span className="text-fd-foreground">Ginject</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/docs"
            className="flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            {t('docs')}
          </Link>
          <a
            href="https://github.com/dangduoc08/ginject"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            {t('github')}
          </a>
        </div>

        {/* CTA */}
        <Button asChild size="sm" className="gap-1.5">
          <Link href="/docs">
            <Zap className="h-3.5 w-3.5" />
            {t('getStarted')}
          </Link>
        </Button>
      </nav>
    </header>
  );
}
