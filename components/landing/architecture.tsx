'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pipeline = [
  { label: 'Request', color: 'bg-slate-500/20 border-slate-500/40 text-slate-300' },
  { label: 'Middleware', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' },
  { label: 'Guards', color: 'bg-violet-500/20 border-violet-500/40 text-violet-300' },
  { label: 'Interceptors', color: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300' },
  { label: 'Handler', color: 'bg-green-500/20 border-green-500/40 text-green-300' },
  { label: 'Aggregation', color: 'bg-orange-500/20 border-orange-500/40 text-orange-300' },
  { label: 'Response', color: 'bg-slate-500/20 border-slate-500/40 text-slate-300' },
];

export function Architecture() {
  return (
    <section className="py-24 px-4 bg-fd-card/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
            Request Pipeline
          </h2>
          <p className="mt-4 text-lg text-fd-muted-foreground max-w-2xl mx-auto">
            Every request flows through a deterministic, composable pipeline. Each layer can
            short-circuit, transform, or enrich the response.
          </p>
        </motion.div>

        {/* Pipeline diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {pipeline.map((step, idx) => (
            <div key={step.label} className="flex items-center gap-2">
              <div
                className={`rounded-lg border px-4 py-2.5 text-sm font-medium whitespace-nowrap ${step.color}`}
              >
                {step.label}
              </div>
              {idx < pipeline.length - 1 && (
                <ArrowRight className="h-4 w-4 text-fd-muted-foreground flex-shrink-0" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Sub-pipeline details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="rounded-xl border border-fd-border bg-fd-card p-6">
            <h3 className="font-semibold text-fd-foreground mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Middleware Scope
            </h3>
            <ul className="space-y-1 text-sm text-fd-muted-foreground">
              <li>Global middlewares (app-level)</li>
              <li>Module middlewares (module-level)</li>
              <li>Built-in: CORS, Helmet, RequestLogger, CSRF</li>
            </ul>
          </div>
          <div className="rounded-xl border border-fd-border bg-fd-card p-6">
            <h3 className="font-semibold text-fd-foreground mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Handler Injection
            </h3>
            <ul className="space-y-1 text-sm text-fd-muted-foreground">
              <li>
                <code className="text-xs font-mono">*ctx.ExecutionContext</code>
              </li>
              <li>
                <code className="text-xs font-mono">ctx.Body, ctx.Query, ctx.Param</code>
              </li>
              <li>
                <code className="text-xs font-mono">ctx.Header, ctx.Form, ctx.File</code>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-fd-border bg-fd-card p-6">
            <h3 className="font-semibold text-fd-foreground mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Aggregation Operators
            </h3>
            <ul className="space-y-1 text-sm text-fd-muted-foreground">
              <li>Transform — map response shape</li>
              <li>Tap — side-effects without mutation</li>
              <li>Timeout — per-route SLA enforcement</li>
              <li>Error — typed exception handling</li>
            </ul>
          </div>
        </motion.div>

        {/* Context tree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-xl border border-fd-border bg-fd-card overflow-hidden"
        >
          <div className="flex items-center gap-1.5 border-b border-fd-border px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-fd-muted-foreground font-mono">
              Context Hierarchy
            </span>
          </div>
          <pre className="overflow-x-auto p-6 text-sm leading-7 font-mono text-fd-muted-foreground">
            {`context.Background()
  ├── HTTP: r.Context()                  (client disconnect → cancels all descendants)
  │         └── exec  (30s request SLA)
  │                 └── child (10s downstream SLA)
  │                         └── GoSafe goroutine
  │
  └── WS:  context.Background()
              └── ws.exec  (connection lifetime)
                      └── msgExec  (5s per-message SLA)
                              └── GoSafe goroutine`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
