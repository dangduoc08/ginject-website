'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Shield, Zap, Lock, AlertCircle } from 'lucide-react';

const stages = [
  { label: 'Middleware', icon: '📝', description: 'Request enrichment', color: 'from-blue-500 to-blue-600' },
  { label: 'Guard', icon: '🔐', description: 'Authorization', color: 'from-green-500 to-green-600' },
  { label: 'Interceptor', icon: '🔄', description: 'Pre-processing', color: 'from-purple-500 to-purple-600' },
  { label: 'Handler', icon: '⚙️', description: 'Business logic', color: 'from-orange-500 to-orange-600' },
  { label: 'Interceptor', icon: '🔄', description: 'Post-processing', color: 'from-purple-500 to-purple-600' },
  { label: 'Exception Filter', icon: '🛡️', description: 'Error handling', color: 'from-red-500 to-red-600' },
];

const benefits = [
  { title: 'Clean & Intuitive', desc: 'Simple, linear flow. Easy to understand.' },
  { title: 'Unified Architecture', desc: 'Same stages across all transports.' },
  { title: 'Secure by Default', desc: 'Guards at every level for protection.' },
  { title: 'Interceptor Power', desc: 'Pre & post processing for any logic.' },
  { title: 'Centralized Errors', desc: 'Consistent error handling everywhere.' },
  { title: 'Type Safe', desc: 'Built with Go. Compiler enforced.' },
];

export function Architecture() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-transparent via-fd-background/50 to-transparent overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold tracking-tight text-fd-foreground mb-2">
            Ginject Request Lifecycle
          </h2>
          <p className="text-xl text-fd-muted-foreground">
            A unified, intuitive, and predictable lifecycle for HTTP & WebSocket
          </p>
        </motion.div>

        {/* Two-column lifecycle diagram */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* HTTP Lifecycle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-0"
          >
            {/* HTTP Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-blue-500/30">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-500/40">
                <span className="text-lg">🌐</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-400">HTTP REQUEST LIFECYCLE</h3>
                <p className="text-xs text-fd-muted-foreground">Stateless</p>
              </div>
            </div>

            {/* HTTP Flow */}
            <div className="space-y-3">
              {/* Start */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-20">
                  <div className="h-16 w-full rounded-lg border-2 border-blue-500/40 bg-blue-500/10 flex items-center justify-center text-sm font-semibold text-blue-300">
                    HTTP<br/>Request
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-fd-muted-foreground flex-shrink-0" />
              </div>

              {/* Stages */}
              {stages.slice(0, 5).map((stage, idx) => (
                <div key={`http-${idx}`}>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className={`h-12 rounded-lg border-2 border-${stage.color.split('-')[1]}-500/40 bg-gradient-to-br ${stage.color} bg-opacity-10 flex items-center justify-center text-xs font-bold text-white`}>
                        {stage.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className={`px-4 py-2 rounded-lg border border-${stage.color.split('-')[1]}-500/30 bg-${stage.color.split('-')[1]}-500/10`}>
                        <div className={`text-sm font-bold text-${stage.color.split('-')[1]}-300`}>
                          {idx === 3 ? 'MAIN HANDLER' : `${stage.label.toUpperCase()}`}
                        </div>
                        <div className="text-xs text-fd-muted-foreground mt-0.5">
                          {stage.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  {idx < 4 && <div className="flex gap-3 ml-10 mb-1"><ArrowDown className="h-4 w-4 text-fd-muted-foreground/50" /></div>}
                </div>
              ))}

              {/* Error path */}
              <div className="mt-6 pt-4 border-t border-red-500/30">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-grow">
                    <div className="px-4 py-2 rounded-lg border border-red-500/40 bg-red-500/10">
                      <div className="text-sm font-bold text-red-400">EXCEPTION FILTER</div>
                      <div className="text-xs text-fd-muted-foreground mt-0.5">Handle Error</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success response */}
              <div className="mt-6 pt-4 border-t border-green-500/30">
                <div className="flex items-center gap-3">
                  <div className="h-16 w-full rounded-lg border-2 border-green-500/40 bg-green-500/10 flex items-center justify-center text-sm font-semibold text-green-300">
                    ✓ RESPONSE Success
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WebSocket Lifecycle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-0"
          >
            {/* WS Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-purple-500/30">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500/20 border border-purple-500/40">
                <span className="text-lg">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-400">WEBSOCKET MESSAGE LIFECYCLE</h3>
                <p className="text-xs text-fd-muted-foreground">Stateful</p>
              </div>
            </div>

            {/* WS Flow */}
            <div className="space-y-3">
              {/* Handshake phase */}
              <div className="pb-6 border-b border-purple-500/20">
                <div className="text-xs font-bold text-purple-400 mb-3">1. HANDSHAKE (Connection Establishment)</div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-20">
                    <div className="h-16 w-full rounded-lg border-2 border-purple-500/40 bg-purple-500/10 flex items-center justify-center text-sm font-semibold text-purple-300">
                      Client<br/>Handshake
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-fd-muted-foreground flex-shrink-0" />
                </div>

                {/* Handshake stages */}
                {[
                  { label: 'GLOBAL MIDDLEWARE', desc: 'Handshake', color: 'blue' },
                  { label: 'MODULE MIDDLEWARE', desc: 'Handshake', color: 'blue' },
                ].map((stage, idx) => (
                  <div key={`handshake-${idx}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-grow">
                        <div className={`px-4 py-2 rounded-lg border border-${stage.color}-500/30 bg-${stage.color}-500/10`}>
                          <div className={`text-xs font-bold text-${stage.color}-300`}>
                            {stage.label}
                          </div>
                          <div className="text-xs text-fd-muted-foreground mt-0.5">{stage.desc}</div>
                        </div>
                      </div>
                    </div>
                    {idx < 1 && <div className="flex gap-3 ml-4 mb-2"><ArrowDown className="h-4 w-4 text-fd-muted-foreground/50" /></div>}
                  </div>
                ))}

                <div className="mt-4 pt-4 border-t border-green-500/30">
                  <div className="h-12 rounded-lg border-2 border-green-500/40 bg-green-500/10 flex items-center justify-center text-xs font-bold text-green-300">
                    ✓ CONNECTION ESTABLISHED
                  </div>
                </div>
              </div>

              {/* Message pipeline phase */}
              <div className="pt-4">
                <div className="text-xs font-bold text-purple-400 mb-3">2. MESSAGE PIPELINE (Per Message)</div>

                {stages.slice(1, 5).map((stage, idx) => (
                  <div key={`ws-${idx}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-grow">
                        <div className={`px-4 py-2 rounded-lg border border-${stage.color.split('-')[1]}-500/30 bg-gradient-to-r ${stage.color} bg-opacity-10`}>
                          <div className={`text-xs font-bold text-${stage.color.split('-')[1]}-300`}>
                            {idx === 2 ? 'MAIN HANDLER' : `${stage.label.toUpperCase()}`}
                          </div>
                          <div className="text-xs text-fd-muted-foreground mt-0.5">{stage.description}</div>
                        </div>
                      </div>
                    </div>
                    {idx < 3 && <div className="flex gap-3 ml-4 mb-1"><ArrowDown className="h-4 w-4 text-fd-muted-foreground/50" /></div>}
                  </div>
                ))}

                {/* Error path */}
                <div className="mt-6 pt-4 border-t border-red-500/30">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-grow space-y-2">
                      <div className="px-4 py-2 rounded-lg border border-red-500/40 bg-red-500/10">
                        <div className="text-xs font-bold text-red-400">MODULE EXCEPTION FILTER</div>
                        <div className="text-xs text-fd-muted-foreground mt-0.5">Error Handler</div>
                      </div>
                      <div className="px-4 py-2 rounded-lg border border-red-500/40 bg-red-500/10">
                        <div className="text-xs font-bold text-red-400">GLOBAL EXCEPTION FILTER</div>
                        <div className="text-xs text-fd-muted-foreground mt-0.5">Error Handler</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success response */}
                <div className="mt-6 pt-4 border-t border-cyan-500/30">
                  <div className="px-4 py-2 rounded-lg border border-cyan-500/40 bg-cyan-500/10">
                    <div className="text-xs font-bold text-cyan-300">ACK / EVENT Send Message</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 border-t border-fd-border"
        >
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center">
              <h4 className="text-sm font-bold text-fd-foreground mb-1">{benefit.title}</h4>
              <p className="text-xs text-fd-muted-foreground leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
