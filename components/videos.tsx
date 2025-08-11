"use client"

import { useI18n } from "./i18n-provider"
import { M, MotionSection, fadeInUp, staggerChildren } from "./motion"

export default function VideosSection() {
  const { t } = useI18n()
  return (
    <MotionSection id="videos" className="relative overflow-hidden bg-gray-900 py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="hero-gold-gradient h-full w-full" />
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="text-start">
            <M.div
              variants={fadeInUp}
              className="inline-block rounded-full border border-gray-600 bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-200 shadow-lg"
            >
              {t("videos.badge")}
            </M.div>
            <M.h2
              variants={fadeInUp}
              className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {t("videos.heading")}
            </M.h2>
            <M.p variants={fadeInUp} className="mt-3 max-w-2xl text-gray-300 text-lg leading-relaxed">
              {t("videos.sub")}
            </M.p>
          </div>
        </div>

        <M.div variants={staggerChildren} className="mt-12 grid gap-8 lg:grid-cols-3">
          {["2Vv-BfVoq4g", "kXYiU_JCYtU", "IcrbM1l_BoI"].map((id) => (
            <M.div
              key={id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl border border-gray-600 bg-gray-800/50 shadow-2xl hover:glow-gold hover:border-gray-500 transition-all duration-300 hover:-translate-y-1"
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
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </M.div>
          ))}
        </M.div>
      </div>
    </MotionSection>
  )
}
