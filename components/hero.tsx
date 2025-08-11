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
    <section id="home" className="relative isolate overflow-hidden">
      <div ref={ref} className="relative">
        <M.div style={{ y }} className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.png"
            alt="Luxury black and gold abstract background"
            fill
            priority
            className="object-cover"
          />
        </M.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="hero-gold-gradient h-full w-full opacity-60" />
        </div>

        <div className="container mx-auto flex min-h-[92dvh] items-center justify-center px-4 py-24">
          <div className="glass max-w-4xl rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-xl sm:p-10">
            <M.h1
              className="text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="gold-gradient-text">{t("hero.title")}</span>
            </M.h1>
            <M.p
              className="mx-auto mt-6 max-w-2xl text-pretty text-base text-neutral-200 sm:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {t("hero.subtitle")}
            </M.p>
            <M.div
              className="mt-8 flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="#newsletter" className="btn-gold shadow-gold-3d">
                {t("hero.primary")}
              </Link>
              <Link
                href="#articles"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
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
