"use client"

import { useState } from "react"
import { Menu, X, Phone, Globe } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { t, lang, toggle } = useLanguage()

  const navLinks = [
    { label: t.nav.products, href: "#categorias" },
    { label: t.nav.sectors, href: "#sectores" },
    { label: t.nav.why, href: "#ventajas" },
    { label: t.nav.logistics, href: "#logistica" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5" aria-label={t.nav.home}>
          <span className="flex h-9 w-9 items-center justify-center rounded bg-primary font-display text-lg font-extrabold text-primary-foreground">
            E
          </span>
          <span className="font-display text-lg font-extrabold leading-none tracking-tight text-foreground">
            EXPRESS
            <span className="ml-1 text-primary">INDUSTRIAL</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+528000000000"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            800 000 0000
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.switchTo}
            className="flex items-center gap-1.5 rounded border border-border px-2.5 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Globe className="h-4 w-4 text-primary" />
            {lang.toUpperCase()}
          </button>
          <a href="#cotizar" className={buttonVariants()}>
            {t.nav.quote}
          </a>
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.switchTo}
            className="inline-flex h-10 items-center gap-1.5 rounded px-2.5 text-sm font-semibold text-foreground"
          >
            <Globe className="h-4 w-4 text-primary" />
            {lang.toUpperCase()}
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cotizar"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), "mt-2")}
            >
              {t.nav.quote}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
