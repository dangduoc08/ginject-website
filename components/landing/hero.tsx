'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, Github, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top gradient blob */}
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-600/20 blur-3xl" />
        {/* Left accent */}
        <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        {/* Right accent */}
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-3xl" />
        {/* Bottom grid effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fd-background/50" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Badge variant="outline" className="gap-2 border-fd-border px-4 py-2 text-sm font-medium">
              <Zap className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
              Structured. Scalable. Idiomatic.
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-fd-foreground mb-4">
              Build Go APIs with
              <span className="block bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent mt-2">
                Architectural Clarity
              </span>
            </h1>
          </motion.div>

          {/* Subheading with architecture concept */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <p className="text-xl sm:text-2xl text-fd-muted-foreground leading-relaxed mb-4">
              A NestJS-inspired dependency injection framework for Go. Build modular, testable applications with a unified architecture for HTTP and WebSocket.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <span className="text-sm font-semibold text-blue-400">Multi Pipelines, One Stage</span>
              <span className="text-xs text-fd-muted-foreground">— Reuse everything</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button asChild size="lg" className="gap-2 px-8 h-12 text-base font-semibold">
              <Link href="/docs/getting-started/architecture">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 px-8 h-12 text-base font-semibold">
              <a
                href="https://github.com/dangduoc08/ginject"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* Version info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-sm text-fd-muted-foreground mb-16"
          >
            MIT License — Open source and ready for production
          </motion.p>

          {/* Code snippet showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto max-w-3xl"
          >
            <div className="rounded-2xl border border-fd-border bg-fd-card shadow-2xl overflow-hidden backdrop-blur-sm bg-fd-card/80">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3 bg-fd-muted/30">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <span className="ml-auto text-xs text-fd-muted-foreground font-mono">user_controller.go</span>
              </div>

              {/* Code content */}
              <pre className="overflow-x-auto p-6 text-sm leading-7 font-mono text-fd-muted-foreground">
                <code>
                  <span className="text-blue-300">type</span>
                  {' UserController struct {\n  '}
                  <span className="text-fd-muted-foreground">common</span>
                  <span className="text-blue-300">.</span>
                  <span className="text-green-400">REST</span>
                  {'\n  '}
                  <span className="text-blue-400">UserService</span>
                  {' // Injected\n'}
                  {'}\n\n'}
                  <span className="text-blue-300">func</span>
                  {' (c '}
                  <span className="text-blue-400">UserController</span>
                  {') '}
                  <span className="text-yellow-400">READ_BY_ID</span>
                  {'(param '}
                  <span className="text-blue-400">ginject.Param</span>
                  {') '}
                  <span className="text-blue-400">User</span>
                  {' {\n  '}
                  <span className="text-fd-muted-foreground">// GET /users/:id</span>
                  {'\n  '}
                  <span className="text-blue-300">return</span>
                  {' c.UserService.'}
                  <span className="text-yellow-400">FindOne</span>
                  {'(param.'}
                  <span className="text-yellow-400">Get</span>
                  {`("id"))\n}`}
                </code>
              </pre>
            </div>

            {/* Code snippet caption */}
            <p className="text-center text-sm text-fd-muted-foreground mt-4">
              Method naming → routes. Type → injected dependencies. No tags. No code generation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
