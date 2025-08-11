"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useI18n } from "./i18n-provider"
import { M } from "./motion"

export default function Navbar() {
  const { t, setLang, lang, dir } = useI18n()

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#articles", label: t("nav.articles") },
    { href: "#videos", label: t("nav.videos") },
    { href: "#newsletter", label: t("nav.newsletter") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#home" className="flex items-baseline gap-2">
          <M.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-xl tracking-tight"
          >
            Millionvate
          </M.span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-neutral-800 transition-colors hover:text-[#FFD700]"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#E6C200] via-[#FFD700] to-[#E6C200] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Button asChild className="btn-gold shadow-gold-3d">
            <Link href="#newsletter">{t("nav.cta")}</Link>
          </Button>

          <div className="ms-2 flex items-center">
            <div className="lang-switcher group inline-flex overflow-hidden rounded-full border border-black/10 bg-white/60 p-1 backdrop-blur">
              <button
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "en"
                    ? "rounded-full bg-[#FFD700] text-black shadow-gold-inset"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                aria-pressed={lang === "ar"}
                className={`px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "ar"
                    ? "rounded-full bg-[#FFD700] text-black shadow-gold-inset"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                AR
              </button>
            </div>
          </div>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="glass border-black/10 bg-white/40 hover:text-[#FFD700]"
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={dir === "rtl" ? "left" : "right"} className="w-80">
              <SheetHeader>
                <SheetTitle className="text-left">Millionvate</SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-[#FFD700]"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 btn-gold shadow-gold-3d">
                  <Link href="#newsletter">{t("nav.cta")}</Link>
                </Button>
                <div className="mt-2 inline-flex overflow-hidden rounded-full border border-black/10 bg-white/60 p-1 backdrop-blur">
                  <button
                    onClick={() => setLang("en")}
                    aria-pressed={lang === "en"}
                    className={`px-3 py-1.5 text-xs font-semibold transition ${
                      lang === "en"
                        ? "rounded-full bg-[#FFD700] text-black shadow-gold-inset"
                        : "text-neutral-700 hover:text-black"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang("ar")}
                    aria-pressed={lang === "ar"}
                    className={`px-3 py-1.5 text-xs font-semibold transition ${
                      lang === "ar"
                        ? "rounded-full bg-[#FFD700] text-black shadow-gold-inset"
                        : "text-neutral-700 hover:text-black"
                    }`}
                  >
                    AR
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
