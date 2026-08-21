'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Nav() {
  const t = useTranslations('nav');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-fd-border/40 bg-fd-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and branding */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-bold text-white text-sm group-hover:shadow-lg group-hover:scale-110 transition-all">
              G
            </div>
            <span className="font-bold text-lg text-fd-foreground hidden sm:inline">Ginject</span>
          </Link>

          {/* Center nav items */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/docs/getting-started/architecture"
              className="text-sm font-medium text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              Architecture
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              Documentation
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dangduoc08/ginject"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-fd-muted transition-colors group"
              title="GitHub Repository"
            >
              <Github className="h-5 w-5 text-fd-muted-foreground group-hover:text-fd-foreground transition-colors" />
            </a>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="hidden sm:inline-flex gap-2"
            >
              <Link href="/docs/getting-started/quick-start">
                {t('cta')}
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
