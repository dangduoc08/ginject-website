import { createI18nMiddleware } from 'fumadocs-core/i18n';
import { i18n } from '@/lib/i18n';
import type { NextRequest, NextFetchEvent } from 'next/server';

const i18nMiddleware = createI18nMiddleware(i18n);

export function middleware(request: NextRequest, event: NextFetchEvent) {
  return i18nMiddleware(request, event);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
