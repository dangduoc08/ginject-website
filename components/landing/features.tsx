'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Zap,
  Lock,
  Network,
  RotateCcw,
  Layers,
  Shield,
} from 'lucide-react';

const iconComponents = [
  { Icon: Zap, label: 'Dependency Injection', color: 'text-yellow-500' },
  { Icon: Shield, label: 'Execution Safety', color: 'text-green-500' },
  { Icon: Network, label: 'Multi-Transport', color: 'text-cyan-500' },
  { Icon: Lock, label: 'Type-Safe', color: 'text-violet-500' },
  { Icon: Layers, label: 'Middleware Stack', color: 'text-orange-500' },
  { Icon: RotateCcw, label: 'Composable', color: 'text-pink-500' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  const t = useTranslations('features');

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-transparent via-fd-card/30 to-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-fd-foreground mb-4">
            Purpose-Built for Production
          </h2>
          <p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto">
            Everything you need to build scalable, maintainable web applications in Go.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {iconComponents.map(({ Icon, label, color }, idx) => (
            <motion.div key={label} variants={cardVariants}>
              <div className="group relative h-full rounded-2xl border border-fd-border bg-fd-card/50 backdrop-blur-sm p-8 hover:border-fd-ring hover:bg-fd-card transition-all duration-300">
                {/* Background accent */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon container */}
                <div className="relative mb-6">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-fd-card to-fd-muted p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${color}`} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-semibold text-fd-foreground mb-3">
                  {label}
                </h3>
                <p className="relative text-sm leading-relaxed text-fd-muted-foreground">
                  {t(`${['di', 'exec', 'ws', 'goroutine', 'middleware', 'cache'][idx]}.desc`)}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
