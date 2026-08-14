"use client"

import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n"

export function CtaQuote() {
  const { t } = useLanguage()

  return (
    <section id="cotizar" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-primary px-6 py-14 text-primary-foreground sm:px-12 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            {t.cta.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:ventas@expressindustrial.com"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 bg-white px-7 text-base text-primary hover:bg-white/90",
              )}
            >
              {t.cta.quote}
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href="tel:+528000000000"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 border-white/40 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white",
              )}
            >
              {t.cta.call}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
