'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Github, BookOpen, Heart } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-fd-border bg-fd-card/30 py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-white text-xs font-bold">
              G
            </div>
            <span className="font-semibold text-fd-foreground">Ginject</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-fd-muted-foreground">
            <Link
              href="/docs"
              className="flex items-center gap-1.5 hover:text-fd-foreground transition-colors"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Documentation
            </Link>
            <a
              href="https://github.com/dangduoc08/ginject"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-fd-foreground transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>

          {/* License / credit */}
          <div className="flex flex-col items-center md:items-end gap-1 text-xs text-fd-muted-foreground">
            <span>{t('license')}</span>
            <span className="flex items-center gap-1">
              {t('madeWith')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
