'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const differentiators = [
  {
    title: 'One Architecture for All Transports',
    description:
      'HTTP, WebSocket, and future protocols all share the same middleware, guards, and interceptors. Build once, deploy everywhere.',
    features: ['Shared pipeline stages', 'Code reuse', 'Consistent patterns'],
  },
  {
    title: 'Zero Configuration',
    description:
      'No annotations. No code generation. Just Go. Method names become routes, types are injected automatically via reflection.',
    features: ['Convention over config', 'Idiomatic Go', 'Type-safe DI'],
  },
  {
    title: 'Production-Grade Defaults',
    description:
      'Context propagation, goroutine safety, execution-scoped timeouts, and comprehensive error handling built in.',
    features: ['Goroutine-safe', 'Context propagation', 'Built-in validation'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Differentiators() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm font-semibold text-blue-400 mb-4">
            Why Ginject
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-fd-foreground mb-4">
            Built Different
          </h2>
          <p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto">
            A framework designed for how developers actually build applications.
          </p>
        </motion.div>

        {/* 3-column layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {differentiators.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="h-full rounded-2xl border border-fd-border bg-fd-card/50 backdrop-blur-sm p-8 hover:bg-fd-card hover:border-blue-500/40 transition-all duration-300">
                {/* Number */}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold mb-6">
                  {idx + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-fd-foreground mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-fd-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-fd-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-fd-muted-foreground mb-4">
            Ready to build something great?
          </p>
          <a
            href="/docs/getting-started/architecture"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
          >
            Learn the Architecture
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
