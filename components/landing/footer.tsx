'use client';

import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-fd-border bg-fd-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-fd-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs/getting-started/architecture"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started/transports"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  Transports
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started/stages"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  Pipeline Stages
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-fd-foreground mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs/getting-started/quick-start"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  Quick Start
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/core/modules"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  Modules
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/core/controllers"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  Controllers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-fd-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/dangduoc08/ginject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors flex items-center gap-1"
                >
                  GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dangduoc08/ginject/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors flex items-center gap-1"
                >
                  Issues
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dangduoc08/ginject/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors flex items-center gap-1"
                >
                  Discussions
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-fd-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/dangduoc08/ginject/blob/main/LICENSE.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  License (MIT)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dangduoc08/ginject/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  README
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://github.com/dangduoc08/ginject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-fd-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-bold text-white text-xs">
                G
              </div>
              <span className="text-sm font-semibold text-fd-foreground">Ginject</span>
            </div>

            <p className="text-sm text-fd-muted-foreground">
              © {currentYear} Ginject. MIT License. Built for developers.
            </p>

            <a
              href="https://github.com/dangduoc08/ginject"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
