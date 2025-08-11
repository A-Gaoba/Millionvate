"use client"

import Link from "next/link"
import { Instagram, Youtube, Music2 } from "lucide-react"
import { useI18n } from "./i18n-provider"
import { M, MotionSection, fadeIn } from "./motion"

export default function Footer() {
  const { t } = useI18n()
  return (
    <MotionSection className="bg-black py-12 text-[#FFD700]">
      <M.div variants={fadeIn} className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-xl">
          <p className="font-heading text-2xl font-semibold">Millionvate</p>
          <p className="mt-2 text-sm text-[#f3d64e]">{t("footer.tagline")}</p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link aria-label="Instagram" href="#" className="rounded-full p-2 transition-colors hover:bg-white/10">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link aria-label="YouTube" href="#" className="rounded-full p-2 transition-colors hover:bg-white/10">
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link aria-label="TikTok" href="#" className="rounded-full p-2 transition-colors hover:bg-white/10">
            <Music2 className="h-5 w-5" />
            <span className="sr-only">TikTok</span>
          </Link>
        </div>
        <div className="gold-divider mx-auto my-6 w-20" />
        <div className="text-center text-xs text-[#f3d64e]">
          © {new Date().getFullYear()} Millionvate. {t("footer.rights")}
        </div>
      </M.div>
    </MotionSection>
  )
}
