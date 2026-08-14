"use client"

import { Timer, Warehouse, Headset, BadgeCheck } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const icons = [Timer, Warehouse, Headset, BadgeCheck]

export function Advantages() {
  const { t } = useLanguage()

  return (
    <section id="ventajas" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid grid-cols-2 gap-6 border-b border-border pb-14 sm:gap-10 lg:grid-cols-4">
          {t.advantages.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {t.advantages.eyebrow}
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {t.advantages.title}
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {t.advantages.items.map((a, i) => {
              const Icon = icons[i]
              return (
                <div key={a.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
