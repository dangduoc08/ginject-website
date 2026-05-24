'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-600/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-6 gap-1.5 border-fd-border px-3 py-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-current text-yellow-500" />
            {t('badge')}
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight text-fd-foreground sm:text-6xl lg:text-7xl"
        >
          Build Go APIs with
          <span className="block bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
            Architecture that Scales
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-fd-muted-foreground sm:text-xl max-w-2xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="gap-2 px-8">
            <Link href="/docs">
              {t('cta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 px-8">
            <a
              href="https://github.com/dangduoc08/ginject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              {t('secondary')}
            </a>
          </Button>
        </motion.div>

        {/* Version badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-sm text-fd-muted-foreground"
        >
          {t('version')} &mdash; MIT License
        </motion.p>
      </div>

      {/* Inline code snippet teaser */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mx-auto mt-16 w-full max-w-2xl"
      >
        <div className="rounded-xl border border-fd-border bg-fd-card shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-fd-border px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-fd-muted-foreground font-mono">main.go</span>
          </div>
          <pre className="overflow-x-auto p-6 text-sm leading-6 font-mono">
            <code>
              <span className="text-fd-muted-foreground">{'// '}</span>
              <span className="text-fd-muted-foreground">Just name your handlers — routing is automatic</span>
              {'\n'}
              <span className="text-violet-400">func</span>
              {' (c *'}
              <span className="text-blue-400">UserController</span>
              {') '}
              <span className="text-yellow-400">READ</span>
              {'(exec *'}
              <span className="text-blue-400">ctx.ExecutionContext</span>
              {', q '}
              <span className="text-blue-400">ctx.Query</span>
              {') []'}
              <span className="text-blue-400">User</span>
              {' { '}
              <span className="text-fd-muted-foreground">// GET /users</span>
              {'\n'}
              {'  '}
              <span className="text-violet-400">return</span>
              {' c.UserService.'}
              <span className="text-yellow-400">FindAll</span>
              {'(exec)\n}\n'}
              <span className="text-violet-400">func</span>
              {' (c *'}
              <span className="text-blue-400">UserController</span>
              {') '}
              <span className="text-yellow-400">READ_BY_ID</span>
              {'(exec *'}
              <span className="text-blue-400">ctx.ExecutionContext</span>
              {', p '}
              <span className="text-blue-400">ctx.Param</span>
              {') '}
              <span className="text-blue-400">User</span>
              {' { '}
              <span className="text-fd-muted-foreground">// GET /users/:id</span>
              {'\n'}
              {'  '}
              <span className="text-violet-400">return</span>
              {' c.UserService.'}
              <span className="text-yellow-400">FindOne</span>
              {'(exec, p.'}
              <span className="text-yellow-400">Get</span>
              {'('}
              <span className="text-green-400">"id"</span>
              {'))\n}'}
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
