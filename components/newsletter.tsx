"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useI18n } from "./i18n-provider"
import { M, MotionSection, fadeInUp, staggerChildren } from "./motion"

export default function Newsletter() {
  const { t } = useI18n()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <MotionSection id="newsletter" className="section-padding bg-gray-900">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <M.h2 variants={fadeInUp} className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t("newsletter.heading")}
        </M.h2>
        <M.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl text-gray-300 text-lg leading-relaxed">
          {t("newsletter.sub")}
        </M.p>

        <M.form
          variants={staggerChildren}
          onSubmit={onSubmit}
          className="mx-auto mt-10 grid gap-6 rounded-3xl border border-gray-600 bg-gray-800/50 p-6 text-start shadow-2xl backdrop-blur sm:grid-cols-2 sm:p-8"
        >
          <M.div variants={fadeInUp}>
            <Label htmlFor="name" className="text-gray-200 font-medium">{t("newsletter.name")}</Label>
            <Input
              id="name"
              name="name"
              placeholder={t("newsletter.placeholderName")}
              required
              className="mt-3 gold-input bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]/25"
            />
          </M.div>
          <M.div variants={fadeInUp}>
            <Label htmlFor="email" className="text-gray-200 font-medium">{t("newsletter.email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("newsletter.placeholderEmail")}
              required
              className="mt-3 gold-input bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]/25"
            />
          </M.div>
          <M.div variants={fadeInUp} className="sm:col-span-2 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              type="submit"
              disabled={submitting || submitted}
              className="btn-gold shadow-gold-3d w-full sm:w-auto px-8 py-3 text-base"
            >
              <span className="relative inline-flex items-center">
                <span className="btn-shimmer" />
                {submitted
                  ? t("newsletter.btnDone")
                  : submitting
                    ? t("newsletter.btnPending")
                    : t("newsletter.btnIdle")}
              </span>
            </Button>
            <p className="text-sm text-gray-400 leading-relaxed">{t("newsletter.disclaimer")}</p>
          </M.div>
        </M.form>

        {submitted && (
          <M.p variants={fadeInUp} className="mt-6 text-base font-medium text-green-400">
            {t("newsletter.thanks")}
          </M.p>
        )}
      </div>
    </MotionSection>
  )
}
