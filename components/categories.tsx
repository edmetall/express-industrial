"use client"

import { Wrench, HardHat, Bolt, Cog, Zap, Droplets, PaintBucket, Boxes } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const icons = [Wrench, Bolt, HardHat, Cog, Zap, Droplets, PaintBucket, Boxes]

export function Categories() {
  const { t } = useLanguage()

  return (
    <section id="categorias" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {t.categories.eyebrow}
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t.categories.title}
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {t.categories.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {t.categories.items.map((cat, i) => {
          const Icon = icons[i]
          return (
            <div
              key={cat.title}
              className="group flex flex-col bg-card p-6 transition-colors hover:bg-secondary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
