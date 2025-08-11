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
    <MotionSection id="newsletter" className="section-padding bg-white">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <M.h2 variants={fadeInUp} className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {t("newsletter.heading")}
        </M.h2>
        <M.p variants={fadeInUp} className="mx-auto mt-3 max-w-xl text-neutral-700">
          {t("newsletter.sub")}
        </M.p>

        <M.form
          variants={staggerChildren}
          onSubmit={onSubmit}
          className="mx-auto mt-8 grid gap-4 rounded-2xl border border-black/10 bg-white/70 p-4 text-start shadow-lg backdrop-blur sm:grid-cols-2 sm:p-6"
        >
          <M.div variants={fadeInUp}>
            <Label htmlFor="name">{t("newsletter.name")}</Label>
            <Input
              id="name"
              name="name"
              placeholder={t("newsletter.placeholderName")}
              required
              className="mt-2 gold-input"
            />
          </M.div>
          <M.div variants={fadeInUp}>
            <Label htmlFor="email">{t("newsletter.email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("newsletter.placeholderEmail")}
              required
              className="mt-2 gold-input"
            />
          </M.div>
          <M.div variants={fadeInUp} className="sm:col-span-2 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              type="submit"
              disabled={submitting || submitted}
              className="btn-gold shadow-gold-3d w-full sm:w-auto"
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
            <p className="text-xs text-neutral-600">{t("newsletter.disclaimer")}</p>
          </M.div>
        </M.form>

        {submitted && (
          <M.p variants={fadeInUp} className="mt-4 text-sm font-medium text-green-700">
            {t("newsletter.thanks")}
          </M.p>
        )}
      </div>
    </MotionSection>
  )
}
