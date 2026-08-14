"use client"

import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Logistics() {
  const { t } = useLanguage()

  return (
    <section id="logistica" className="border-y border-border bg-[#0b1220] text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.logistics.eyebrow}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.logistics.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-white/65">
            {t.logistics.subtitle}
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {t.logistics.steps.map((s, i) => (
              <div key={s.title}>
                <span className="font-display text-2xl font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <img
              src="/images/logistics-truck.png"
              alt={t.logistics.imgAlt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.logistics.points.map((p) => (
              <div key={p} className="flex items-center gap-2.5 text-sm font-medium text-white/85">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
