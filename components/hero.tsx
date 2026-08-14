"use client"

import { ArrowRight, Truck, ShieldCheck, Clock } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n"

export function Hero() {
  const { t } = useLanguage()

  const badges = [
    { icon: Clock, label: t.hero.badge1 },
    { icon: Truck, label: t.hero.badge2 },
    { icon: ShieldCheck, label: t.hero.badge3 },
  ]

  return (
    <section className="relative overflow-hidden bg-[#0b1220] text-white">
      <div className="absolute inset-0">
        <img
          src="./images/hero-warehouse.png"
          alt={t.hero.imgAlt}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/85 to-[#0b1220]/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cotizar"
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-7 text-base")}
            >
              {t.hero.cta}
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href="#categorias"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 border-white/25 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white",
              )}
            >
              {t.hero.catalog}
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2.5 text-sm font-medium text-white/85">
              <b.icon className="h-5 w-5 text-primary" />
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
