"use client"

import Link from "next/link"
import { Instagram, Youtube, Music2 } from "lucide-react"
import { useI18n } from "./i18n-provider"
import { M, MotionSection, fadeIn } from "./motion"

export default function Footer() {
  const { t } = useI18n()
  return (
    <MotionSection className="bg-gray-900 border-t border-gray-700 py-16 text-[#FFD700]">
      <M.div variants={fadeIn} className="container mx-auto px-6 text-center">
        <div className="mx-auto max-w-xl">
          <p className="font-heading text-3xl font-semibold text-white">Millionvate</p>
          <p className="mt-3 text-base text-gray-300 leading-relaxed">{t("footer.tagline")}</p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6">
          <Link
            aria-label="Instagram"
            href="#"
            className="rounded-full p-3 transition-all duration-200 hover:bg-gray-800 hover:scale-110 hover:shadow-lg"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            aria-label="YouTube"
            href="#"
            className="rounded-full p-3 transition-all duration-200 hover:bg-gray-800 hover:scale-110 hover:shadow-lg"
          >
            <Youtube className="h-6 w-6" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link
            aria-label="TikTok"
            href="#"
            className="rounded-full p-3 transition-all duration-200 hover:bg-gray-800 hover:scale-110 hover:shadow-lg"
          >
            <Music2 className="h-6 w-6" />
            <span className="sr-only">TikTok</span>
          </Link>
        </div>
        <div className="gold-divider mx-auto my-8 w-24" />
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Millionvate. {t("footer.rights")}
        </div>
      </M.div>
    </MotionSection>
  )
}
