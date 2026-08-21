'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code2 } from 'lucide-react';

const tabs = [
  { id: 'controller', label: 'Controller', description: 'HTTP routes with injection' },
  { id: 'provider', label: 'Service', description: 'Business logic as providers' },
  { id: 'module', label: 'Module', description: 'Composition and setup' },
];

const code: Record<string, string> = {
  controller: `// Automatic routing from method names
type UserController struct {
    common.REST
    UserService UserService  // Auto-injected
}

func (c UserController) NewController() core.Controller {
    c.BindGuard(AuthGuard{}, c.CREATE, c.DELETE)
    return c
}

// GET /users/:id — Automatic route from method name
func (c UserController) READ_BY_ID(
    param ginject.Param,
) User {
    return c.UserService.FindOne(param.Get("id"))
}

// POST /users
func (c UserController) CREATE(body ginject.Body) User {
    var user User
    body.Bind(&user)
    return c.UserService.Create(&user)
}`,

  provider: `// Services are just structs with NewProvider()
type UserService struct {
    DB    *sql.DB
    Cache cache.CacheService
}

func (s UserService) NewProvider() core.Provider {
    return s
}

func (s *UserService) FindOne(id string) User {
    if cached, ok := s.Cache.Get(id); ok {
        return cached.(User)
    }

    user := s.DB.QueryRow(
        "SELECT * FROM users WHERE id = ?", id,
    ).Scan(...)

    s.Cache.Set(id, user, 5*time.Minute)
    return user
}

func (s *UserService) Create(user *User) User {
    // Business logic here
    return user
}`,

  module: `// Compose your application with modules
var AppModule = func() *core.Module {
    return core.ModuleBuilder().
        Imports(
            ConfigModule,     // global .env
            CacheModule,      // in-memory cache
            DatabaseModule,   // database client
            UserModule,       // user feature
        ).
        Build()
}

// Feature modules group related components
var UserModule = func() *core.Module {
    return core.ModuleBuilder().
        Controllers(UserController{}).
        Providers(UserService{}).
        Build()
}

// Bootstrap your app
func main() {
    app := core.New()
    app.BindGlobalGuards(RateLimiter{})
    app.Create(AppModule)
    app.Listen(3000)
}`,
};

function highlight(code: string) {
  return code
    .replace(
      /\b(func|type|struct|return|var|if|for|defer|make|chan|go|import|package)\b/g,
      '<span class="text-violet-400">$1</span>',
    )
    .replace(
      /\b(string|bool|int|int64|error|any|User|UserService|UserController)\b/g,
      '<span class="text-blue-300">$1</span>',
    )
    .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
    .replace(/\/\/.*/g, '<span class="text-fd-muted-foreground text-opacity-60">$&</span>')
    .replace(
      /\b(NewController|NewProvider|FindOne|Create|BindGuard|BindGlobalGuards)\b/g,
      '<span class="text-yellow-400">$1</span>',
    );
}

export function CodePreview() {
  const [activeTab, setActiveTab] = useState('controller');

  const currentTab = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="h-6 w-6 text-blue-500" />
              <span className="text-sm font-semibold text-blue-500 uppercase tracking-wide">Code Example</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-fd-foreground mb-4">
              Convention Over Configuration
            </h2>

            <p className="text-lg text-fd-muted-foreground mb-8 leading-relaxed">
              No annotations. No code generation. Just Go. Method names become routes, types become dependencies—the framework stays out of your way.
            </p>

            {/* Feature list */}
            <ul className="space-y-3">
              {['Reflection-based DI', 'Type-safe injection', 'Zero configuration'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-fd-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Code window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-fd-border bg-fd-card shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="border-b border-fd-border bg-fd-muted/40 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-fd-border px-4 pt-3 flex gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'pb-3 px-1 border-b-2 text-sm font-medium transition-colors whitespace-nowrap',
                      activeTab === tab.id
                        ? 'border-blue-500 text-fd-foreground'
                        : 'border-transparent text-fd-muted-foreground hover:text-fd-foreground',
                    )}
                    title={tab.description}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Code */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-x-auto p-6 text-sm leading-6 font-mono text-fd-muted-foreground max-h-[450px]"
                    dangerouslySetInnerHTML={{ __html: highlight(code[activeTab]) }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
