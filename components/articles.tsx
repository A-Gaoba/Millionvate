"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "./i18n-provider"
import { M, MotionSection, fadeInUp, staggerChildren } from "./motion"
import articlesEn from "@/data/articles.en.json"
import articlesAr from "@/data/articles.ar.json"

export default function Articles() {
  const { t, lang } = useI18n()

  const articleData = (lang === "ar" ? articlesAr : articlesEn) as any[]

  return (
    <MotionSection id="articles" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div className="text-start">
            <M.h2 variants={fadeInUp} className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {t("articles.heading")}
            </M.h2>
            <M.p variants={fadeInUp} className="mt-2 text-neutral-700">
              {t("articles.sub")}
            </M.p>
          </div>
          <M.div variants={fadeInUp}>
            <Link
              href="#newsletter"
              className="hidden text-sm font-semibold text-neutral-900 underline-offset-4 hover:text-[#FFD700] hover:underline sm:inline"
            >
              {t("articles.subscribeLink")}
            </Link>
          </M.div>
        </div>

        <M.div variants={staggerChildren} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articleData.slice(0, 6).map((article) => (
            <M.div key={article.slug} variants={fadeInUp}>
              <Card className="group overflow-hidden border-black/10 transition will-change-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/20 hover:glow-gold">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700">{article.description}</p>
                  <div className="mt-4">
                    <Link
                      href={`/post/${article.slug}`}
                      className="text-sm font-semibold text-neutral-900 hover:text-[#FFD700]"
                    >
                      {t("articles.readMore")} {t("articles.arrow")}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </M.div>
          ))}
        </M.div>
      </div>
    </MotionSection>
  )
}
