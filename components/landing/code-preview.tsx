'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'controller', label: 'Controller' },
  { id: 'provider', label: 'Provider' },
  { id: 'module', label: 'Module' },
];

const code: Record<string, string> = {
  controller: `// user.controller.go
type UserController struct {
    common.REST
    UserService
}

func (c UserController) NewController() common.Controller {
    c.Prefix("users")

    // Bind middleware to specific handlers
    c.BindMiddleware(LogRequests, c.READ, c.READ_BY_ID)

    // Bind guard globally on this controller
    c.BindGuard(AuthGuard)

    return c
}

// GET /users
func (c *UserController) READ(
    exec *ctx.ExecutionContext,
    query ctx.Query,
) []User {
    return c.UserService.FindAll(exec)
}

// GET /users/:id
func (c *UserController) READ_BY_ID(
    exec *ctx.ExecutionContext,
    param ctx.Param,
) User {
    id := param.Get("id")
    return c.UserService.FindOne(exec, id)
}

// POST /users
func (c *UserController) CREATE(
    exec *ctx.ExecutionContext,
    body ctx.Body,
) User {
    var dto CreateUserDTO
    body.Bind(&dto)
    return c.UserService.Create(exec, dto)
}

// DELETE /users/:id
func (c *UserController) DELETE_BY_ID(
    exec *ctx.ExecutionContext,
    param ctx.Param,
) bool {
    id := param.Get("id")
    return c.UserService.Delete(exec, id)
}`,

  provider: `// user.service.go
type UserService struct {
    DB        *database.Client
    CacheService cache.CacheService
}

func (s UserService) NewProvider() core.Provider {
    return s
}

func (s *UserService) FindAll(exec *ctx.ExecutionContext) []User {
    // Try cache first
    if cached, ok := s.CacheService.Get(exec, "users:all"); ok {
        return cached.([]User)
    }

    // Query with SLA-scoped context
    child, cancel := ctx.WithTimeout(exec, 10*time.Second)
    defer cancel()

    users := s.DB.QueryUsers(child)

    // Cache for 5 minutes
    s.CacheService.Set(exec, "users:all", users, 5*time.Minute)
    return users
}

func (s *UserService) FindOne(
    exec *ctx.ExecutionContext,
    id string,
) User {
    cacheKey := "users:" + id
    if cached, ok := s.CacheService.Get(exec, cacheKey); ok {
        return cached.(User)
    }

    // Use GoSafe to avoid goroutine leaks
    errCh := make(chan error, 1)
    ctx.GoSafe(exec, func() {
        if err := s.prefetchRelated(exec, id); err != nil {
            errCh <- err
        }
    }, func(err error) { errCh <- err })

    return s.DB.QueryUser(exec, id)
}`,

  module: `// app.module.go
var AppModule = func() *core.Module {
    return core.ModuleBuilder().
        Imports(
            ConfigModule,     // global .env loader
            CacheModule,      // in-memory LFU cache
            DatabaseModule,   // your DB module
            UserModule,       // feature module
        ).
        Build()
}

// user.module.go
var UserModule = func() *core.Module {
    return core.ModuleBuilder().
        Controllers(UserController{}).
        Providers(UserService{}).
        Build()
}

// main.go
func main() {
    app := core.New()
    app.Create(AppModule)

    // Global middleware
    app.UseMiddleware(
        middleware.CORS(middleware.CORSOptions{
            AllowedOrigins: []string{"*"},
        }),
        middleware.Helmet(),
        middleware.RequestLogger(),
    )

    // Global throttle: 100 req/s per IP
    app.UseGuard(guard.NewThrottler(
        guard.FixedWindow,
        guard.ThrottlerOptions{Limit: 100, TTL: time.Second},
    ))

    app.Logger.Fatal("App", "error", app.Listen(3000))
}`,
};

function highlight(code: string) {
  // Simple keyword highlighting for Go code
  return code
    .replace(
      /\b(func|type|struct|return|var|if|for|defer|make|chan|go)\b/g,
      '<span class="text-violet-400">$1</span>',
    )
    .replace(
      /\b(string|bool|int|int64|error|any)\b/g,
      '<span class="text-blue-300">$1</span>',
    )
    .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
    .replace(/\/\/.*/g, '<span class="text-fd-muted-foreground">$&</span>')
    .replace(
      /\b(UserController|UserService|UserModule|AppModule|ConfigModule|CacheModule|DatabaseModule|CreateUserDTO|User)\b/g,
      '<span class="text-blue-400">$1</span>',
    );
}

export function CodePreview() {
  const [activeTab, setActiveTab] = useState('controller');

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
            Familiar patterns, idiomatic Go
          </h2>
          <p className="mt-4 text-lg text-fd-muted-foreground">
            Method names become routes. Types become injected dependencies. No annotations, no
            code generation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-fd-border bg-fd-card shadow-2xl overflow-hidden"
        >
          {/* Tab bar */}
          <div className="flex items-center gap-1.5 border-b border-fd-border px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
            <div className="ml-4 flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'rounded-md px-3 py-1 text-xs font-medium transition-colors',
                    activeTab === tab.id
                      ? 'bg-fd-muted text-fd-foreground'
                      : 'text-fd-muted-foreground hover:text-fd-foreground',
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code area */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="overflow-x-auto p-6 text-xs leading-6 font-mono max-h-[400px]"
                dangerouslySetInnerHTML={{ __html: highlight(code[activeTab]) }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
