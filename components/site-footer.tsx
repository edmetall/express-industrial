"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-[#0b1220] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-primary font-display text-lg font-extrabold text-primary-foreground">
                E
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">
                EXPRESS<span className="ml-1 text-primary">INDUSTRIAL</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {t.footer.tagline}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/70">
              <a href="tel:+528000000000" className="flex items-center gap-2.5 hover:text-white">
                <Phone className="h-4 w-4 text-primary" /> 800 000 0000
              </a>
              <a href="mailto:ventas@expressindustrial.com" className="flex items-center gap-2.5 hover:text-white">
                <Mail className="h-4 w-4 text-primary" /> ventas@expressindustrial.com
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary" /> {t.footer.location}
              </span>
            </div>
          </div>

          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Express Industrial. {t.footer.rights}
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
