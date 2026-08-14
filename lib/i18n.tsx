"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Language = "es" | "en"

type Dict = typeof translations.es

export const translations = {
  es: {
    langLabel: "ES",
    nav: {
      products: "Productos",
      sectors: "Sectores",
      why: "Por qué nosotros",
      logistics: "Logística",
      quote: "Cotizar ahora",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      home: "Express Industrial inicio",
      switchTo: "Cambiar a inglés",
    },
    hero: {
      badge: "Distribución industrial B2B",
      title: "Insumos industriales que llegan cuando tu operación los necesita",
      subtitle:
        "Surtimos herramientas, fijaciones, equipo de seguridad y refacciones para plantas, mantenimiento y construcción. Un solo proveedor, miles de productos, entregas sin retrasos.",
      cta: "Solicitar cotización",
      catalog: "Ver catálogo",
      badge1: "Entrega en 24-48 h",
      badge2: "Cobertura nacional",
      badge3: "Stock garantizado",
      imgAlt: "Interior de almacén de insumos industriales de Express Industrial",
    },
    categories: {
      eyebrow: "Catálogo",
      title: "Todo lo que tu planta necesita, en un solo lugar",
      subtitle:
        "Más de 20,000 productos organizados por categoría para que encuentres y recibas rápido lo que buscas.",
      items: [
        { title: "Herramientas", desc: "Manuales, eléctricas y neumáticas de marcas líderes." },
        { title: "Fijaciones", desc: "Tornillería, tuercas, anclas y sujetadores especializados." },
        { title: "Seguridad industrial", desc: "EPP, señalización y protección para tu personal." },
        { title: "Refacciones", desc: "Rodamientos, bandas, sellos y componentes mecánicos." },
        { title: "Material eléctrico", desc: "Cableado, conectores, tableros y automatización." },
        { title: "Neumática e hidráulica", desc: "Mangueras, conexiones, válvulas y actuadores." },
        { title: "Químicos y limpieza", desc: "Lubricantes, adhesivos, solventes y consumibles." },
        { title: "Abastecimiento MRO", desc: "Suministro recurrente para mantenimiento y operación." },
      ],
    },
    advantages: {
      eyebrow: "Por qué Express",
      title: "Un proveedor que responde a la velocidad de tu operación",
      stats: [
        { value: "20K+", label: "Productos en catálogo" },
        { value: "24-48h", label: "Tiempo de entrega" },
        { value: "98%", label: "Pedidos completos" },
        { value: "500+", label: "Empresas atendidas" },
      ],
      items: [
        { title: "Entregas express", desc: "Logística optimizada para que tu operación nunca se detenga por falta de insumos." },
        { title: "Inventario disponible", desc: "Stock real y actualizado. Lo que ves cotizado es lo que recibes, sin sorpresas." },
        { title: "Asesoría técnica", desc: "Un ejecutivo dedicado que entiende tu industria y te ayuda a elegir el producto correcto." },
        { title: "Marcas certificadas", desc: "Trabajamos solo con proveedores que cumplen las normas de calidad y seguridad." },
      ],
    },
    sectors: {
      eyebrow: "Sectores",
      title: "Abastecemos a las industrias que mueven al país",
      items: ["Manufactura", "Construcción", "Transporte y flotillas", "Metalmecánica", "Industria química", "Alimentos y bebidas"],
    },
    logistics: {
      eyebrow: "Cómo trabajamos",
      title: "De la cotización a tu planta, sin fricción",
      subtitle:
        "Un proceso pensado para minimizar tiempos muertos y mantener tu operación siempre abastecida.",
      steps: [
        { title: "Cotiza en minutos", desc: "Envía tu lista de requerimientos y recibe una propuesta clara con disponibilidad." },
        { title: "Confirmamos stock", desc: "Validamos inventario real y agendamos la entrega según tu urgencia." },
        { title: "Preparamos tu pedido", desc: "Surtido, verificado y embalado para llegar completo y en buen estado." },
        { title: "Entrega puntual", desc: "Envío rastreable a tu planta con cobertura nacional en 24-48 horas." },
      ],
      points: [
        "Rastreo de pedidos en tiempo real",
        "Facturación electrónica inmediata",
        "Crédito empresarial disponible",
        "Reabastecimiento programado",
      ],
      imgAlt: "Flotilla de camiones de reparto de Express Industrial en un andén logístico",
    },
    cta: {
      title: "¿Listo para dejar de perder tiempo buscando proveedores?",
      subtitle:
        "Cuéntanos qué insumos necesitas y recibe una cotización con disponibilidad y tiempos de entrega el mismo día.",
      quote: "Solicitar cotización",
      call: "Llamar: 800 000 0000",
    },
    footer: {
      tagline:
        "Distribución de insumos industriales con entregas rápidas y confiables para mantener tu operación en marcha.",
      location: "Parque Industrial, México",
      columns: [
        { title: "Productos", links: ["Herramientas", "Fijaciones", "Seguridad industrial", "Material eléctrico"] },
        { title: "Empresa", links: ["Nosotros", "Sectores", "Trabaja con nosotros", "Blog"] },
        { title: "Soporte", links: ["Cotizaciones", "Envíos y entregas", "Facturación", "Contacto"] },
      ],
      rights: "Todos los derechos reservados.",
      privacy: "Aviso de privacidad",
      terms: "Términos",
    },
  },
  en: {
    langLabel: "EN",
    nav: {
      products: "Products",
      sectors: "Sectors",
      why: "Why us",
      logistics: "Logistics",
      quote: "Get a quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      home: "Express Industrial home",
      switchTo: "Switch to Spanish",
    },
    hero: {
      badge: "B2B industrial distribution",
      title: "Industrial supplies that arrive when your operation needs them",
      subtitle:
        "We supply tools, fasteners, safety equipment and spare parts for plants, maintenance and construction. One supplier, thousands of products, deliveries without delays.",
      cta: "Request a quote",
      catalog: "View catalog",
      badge1: "Delivery in 24-48 h",
      badge2: "Nationwide coverage",
      badge3: "Guaranteed stock",
      imgAlt: "Interior of Express Industrial's industrial supplies warehouse",
    },
    categories: {
      eyebrow: "Catalog",
      title: "Everything your plant needs, in one place",
      subtitle:
        "Over 20,000 products organized by category so you can find and receive what you need, fast.",
      items: [
        { title: "Tools", desc: "Hand, power and pneumatic tools from leading brands." },
        { title: "Fasteners", desc: "Screws, nuts, anchors and specialized fasteners." },
        { title: "Industrial safety", desc: "PPE, signage and protection for your team." },
        { title: "Spare parts", desc: "Bearings, belts, seals and mechanical components." },
        { title: "Electrical supplies", desc: "Wiring, connectors, panels and automation." },
        { title: "Pneumatics & hydraulics", desc: "Hoses, fittings, valves and actuators." },
        { title: "Chemicals & cleaning", desc: "Lubricants, adhesives, solvents and consumables." },
        { title: "MRO supply", desc: "Recurring supply for maintenance and operations." },
      ],
    },
    advantages: {
      eyebrow: "Why Express",
      title: "A supplier that keeps pace with your operation",
      stats: [
        { value: "20K+", label: "Products in catalog" },
        { value: "24-48h", label: "Delivery time" },
        { value: "98%", label: "Complete orders" },
        { value: "500+", label: "Companies served" },
      ],
      items: [
        { title: "Express deliveries", desc: "Optimized logistics so your operation never stops for lack of supplies." },
        { title: "Available inventory", desc: "Real, up-to-date stock. What you see quoted is what you receive, no surprises." },
        { title: "Technical advice", desc: "A dedicated rep who understands your industry and helps you choose the right product." },
        { title: "Certified brands", desc: "We work only with suppliers that meet quality and safety standards." },
      ],
    },
    sectors: {
      eyebrow: "Sectors",
      title: "We supply the industries that move the country",
      items: ["Manufacturing", "Construction", "Transport & fleets", "Metalworking", "Chemical industry", "Food & beverage"],
    },
    logistics: {
      eyebrow: "How we work",
      title: "From quote to your plant, without friction",
      subtitle:
        "A process designed to minimize downtime and keep your operation always supplied.",
      steps: [
        { title: "Quote in minutes", desc: "Send your list of requirements and get a clear proposal with availability." },
        { title: "We confirm stock", desc: "We validate real inventory and schedule delivery based on your urgency." },
        { title: "We prepare your order", desc: "Picked, verified and packed to arrive complete and in good condition." },
        { title: "On-time delivery", desc: "Trackable shipping to your plant with nationwide coverage in 24-48 hours." },
      ],
      points: [
        "Real-time order tracking",
        "Instant electronic invoicing",
        "Business credit available",
        "Scheduled replenishment",
      ],
      imgAlt: "Express Industrial delivery truck fleet at a logistics dock",
    },
    cta: {
      title: "Ready to stop wasting time searching for suppliers?",
      subtitle:
        "Tell us which supplies you need and get a quote with availability and delivery times the same day.",
      quote: "Request a quote",
      call: "Call: 800 000 0000",
    },
    footer: {
      tagline:
        "Distribution of industrial supplies with fast, reliable deliveries to keep your operation running.",
      location: "Industrial Park, Mexico",
      columns: [
        { title: "Products", links: ["Tools", "Fasteners", "Industrial safety", "Electrical supplies"] },
        { title: "Company", links: ["About us", "Sectors", "Careers", "Blog"] },
        { title: "Support", links: ["Quotes", "Shipping & delivery", "Invoicing", "Contact"] },
      ],
      rights: "All rights reserved.",
      privacy: "Privacy notice",
      terms: "Terms",
    },
  },
} satisfies Record<Language, unknown> as Record<Language, Dict>

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  toggle: () => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("ei-lang") : null
    if (stored === "es" || stored === "en") setLang(stored)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem("ei-lang", lang)
    if (typeof document !== "undefined") document.documentElement.lang = lang
  }, [lang])

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggle: () => setLang((prev) => (prev === "es" ? "en" : "es")),
    t: translations[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
