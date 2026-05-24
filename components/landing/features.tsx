'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Boxes,
  Timer,
  ShieldCheck,
  Wifi,
  Layers,
  Database,
} from 'lucide-react';

const icons = [Boxes, Timer, ShieldCheck, Wifi, Layers, Database];
const featureKeys = ['di', 'exec', 'goroutine', 'ws', 'middleware', 'cache'] as const;

const gradients = [
  'from-blue-500/20 to-blue-600/20 group-hover:from-blue-500/30 group-hover:to-blue-600/30',
  'from-violet-500/20 to-violet-600/20 group-hover:from-violet-500/30 group-hover:to-violet-600/30',
  'from-green-500/20 to-green-600/20 group-hover:from-green-500/30 group-hover:to-green-600/30',
  'from-cyan-500/20 to-cyan-600/20 group-hover:from-cyan-500/30 group-hover:to-cyan-600/30',
  'from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30',
  'from-pink-500/20 to-pink-600/20 group-hover:from-pink-500/30 group-hover:to-pink-600/30',
];

const iconColors = [
  'text-blue-500',
  'text-violet-500',
  'text-green-500',
  'text-cyan-500',
  'text-orange-500',
  'text-pink-500',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  const t = useTranslations('features');

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-fd-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featureKeys.map((key, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div key={key} variants={cardVariants}>
                <div className="group relative rounded-xl border border-fd-border bg-fd-card p-6 hover:border-fd-ring transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${gradients[idx]} transition-all duration-300`}
                  >
                    <Icon className={`h-6 w-6 ${iconColors[idx]}`} />
                  </div>
                  {/* Content */}
                  <h3 className="mb-2 text-base font-semibold text-fd-foreground">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-sm leading-6 text-fd-muted-foreground">
                    {t(`${key}.desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
