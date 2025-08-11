"use client"

import Image from "next/image"
import { useI18n } from "./i18n-provider"
import { M, MotionSection, fadeInUp } from "./motion"

export default function About() {
  const { t } = useI18n()
  return (
    <MotionSection id="about" className="section-padding bg-gray-900">
      <div className="container mx-auto grid items-center gap-16 px-6 md:grid-cols-2">
        <div className="text-start">
          <M.div
            variants={fadeInUp}
            className="inline-block rounded-full border border-gray-600 bg-[#FFF7CC] px-4 py-2 text-sm font-medium text-black shadow-lg"
          >
            {t("about.badge")}
          </M.div>
          <M.h2 variants={fadeInUp} className="mt-6 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("about.heading")}
          </M.h2>
          <M.p variants={fadeInUp} className="mt-6 text-gray-300 text-lg leading-relaxed">
            {t("about.body")}
          </M.p>
          <M.ul variants={fadeInUp} className="mt-8 grid gap-4 text-base text-gray-300">
            {(t("about.bullets") as string[]).map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-2 h-3 w-3 rounded-full bg-[#FFD700] shadow-lg" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </M.ul>
        </div>
        <M.div
          variants={fadeInUp}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gray-600 shadow-2xl bg-gray-800"
        >
          <Image
            src="/images/about.png"
            alt="Person climbing golden steps towards goals"
            fill
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-gray-500/20" />
        </M.div>
      </div>
    </MotionSection>
  )
}
