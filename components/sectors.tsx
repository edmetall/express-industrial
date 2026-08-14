"use client"

import { Factory, Building2, Truck, Hammer, FlaskConical, Utensils } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const icons = [Factory, Building2, Truck, Hammer, FlaskConical, Utensils]

export function Sectors() {
  const { t } = useLanguage()

  return (
    <section id="sectores" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {t.sectors.eyebrow}
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t.sectors.title}
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {t.sectors.items.map((label, i) => {
          const Icon = icons[i]
          return (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card px-4 py-6 text-center transition-colors hover:border-primary/40"
            >
              <Icon className="h-7 w-7 text-primary" />
              <span className="text-sm font-medium leading-snug text-foreground">{label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
