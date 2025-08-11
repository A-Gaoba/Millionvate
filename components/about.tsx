"use client"

import Image from "next/image"
import { useI18n } from "./i18n-provider"
import { M, MotionSection, fadeInUp } from "./motion"

export default function About() {
  const { t } = useI18n()
  return (
    <MotionSection id="about" className="section-padding bg-white">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        <div className="text-start">
          <M.div
            variants={fadeInUp}
            className="inline-block rounded-full border border-black/10 bg-[#FFF7CC] px-3 py-1 text-xs font-medium text-black"
          >
            {t("about.badge")}
          </M.div>
          <M.h2 variants={fadeInUp} className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {t("about.heading")}
          </M.h2>
          <M.p variants={fadeInUp} className="mt-4 text-neutral-700">
            {t("about.body")}
          </M.p>
          <M.ul variants={fadeInUp} className="mt-6 grid gap-3 text-sm text-neutral-700">
            {(t("about.bullets") as string[]).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#FFD700]" />
                {item}
              </li>
            ))}
          </M.ul>
        </div>
        <M.div
          variants={fadeInUp}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 shadow-xl"
        >
          <Image
            src="/images/about.png"
            alt="Person climbing golden steps towards goals"
            fill
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
        </M.div>
      </div>
    </MotionSection>
  )
}
