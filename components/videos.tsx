"use client"

import { useI18n } from "./i18n-provider"
import { M, MotionSection, fadeInUp, staggerChildren } from "./motion"

export default function VideosSection() {
  const { t } = useI18n()
  return (
    <MotionSection id="videos" className="relative overflow-hidden bg-black py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="hero-gold-gradient h-full w-full" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="text-start">
            <M.div
              variants={fadeInUp}
              className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white"
            >
              {t("videos.badge")}
            </M.div>
            <M.h2
              variants={fadeInUp}
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {t("videos.heading")}
            </M.h2>
            <M.p variants={fadeInUp} className="mt-2 max-w-2xl text-neutral-300">
              {t("videos.sub")}
            </M.p>
          </div>
        </div>

        <M.div variants={staggerChildren} className="mt-8 grid gap-6 lg:grid-cols-3">
          {["2Vv-BfVoq4g", "kXYiU_JCYtU", "IcrbM1l_BoI"].map((id) => (
            <M.div
              key={id}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl hover:glow-gold"
            >
              <div className="relative aspect-[9/16] lg:aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Millionvate Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </M.div>
          ))}
        </M.div>
      </div>
    </MotionSection>
  )
}
