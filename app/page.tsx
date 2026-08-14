import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { Advantages } from "@/components/advantages"
import { Sectors } from "@/components/sectors"
import { Logistics } from "@/components/logistics"
import { CtaQuote } from "@/components/cta-quote"
import { SiteFooter } from "@/components/site-footer"
import { LanguageProvider } from "@/lib/i18n"

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Categories />
        <Advantages />
        <Sectors />
        <Logistics />
        <CtaQuote />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
