"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "./i18n-provider"
import { M } from "./motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]) // subtle parallax

  return (
    <section id="home" className="relative isolate overflow-hidden bg-gray-900">
      <div ref={ref} className="relative">
        <M.div style={{ y }} className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.png"
            alt="Luxury black and gold abstract background"
            fill
            priority
            className="object-cover opacity-40"
          />
        </M.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="hero-gold-gradient h-full w-full opacity-40" />
        </div>

        <div className="container mx-auto flex min-h-[92dvh] items-center justify-center px-6 py-24">
          <div className="glass max-w-4xl rounded-3xl border border-gray-600/30 bg-gray-800/40 p-8 text-center backdrop-blur-xl shadow-2xl sm:p-12">
            <M.h1
              className="text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="gold-gradient-text">{t("hero.title")}</span>
            </M.h1>
            <M.p
              className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-gray-300 sm:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {t("hero.subtitle")}
            </M.p>
            <M.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="#newsletter" className="btn-gold shadow-gold-3d text-base px-8 py-3">
                {t("hero.primary")}
              </Link>
              <Link
                href="#articles"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-500/30 bg-gray-700/50 px-8 text-base font-semibold text-gray-200 backdrop-blur transition-all duration-200 hover:bg-gray-600/60 hover:border-gray-400/40 hover:text-white"
              >
                {t("hero.secondary")}
              </Link>
            </M.div>
          </div>
        </div>
      </div>
    </section>
  )
}
