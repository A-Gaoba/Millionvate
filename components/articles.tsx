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
    <MotionSection id="articles" className="section-padding bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div className="text-start">
            <M.h2 variants={fadeInUp} className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("articles.heading")}
            </M.h2>
            <M.p variants={fadeInUp} className="mt-3 text-gray-300 text-lg">
              {t("articles.sub")}
            </M.p>
          </div>
          <M.div variants={fadeInUp}>
            <Link
              href="#newsletter"
              className="hidden text-sm font-semibold text-gray-300 underline-offset-4 hover:text-[#FFD700] hover:underline sm:inline transition-colors"
            >
              {t("articles.subscribeLink")}
            </Link>
          </M.div>
        </div>

        <M.div variants={staggerChildren} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articleData.slice(0, 6).map((article) => (
            <M.div key={article.slug} variants={fadeInUp}>
              <Card className="group overflow-hidden border-gray-700 bg-gray-800 transition-all duration-300 will-change-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFD700]/20 hover:glow-gold hover:border-gray-600">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-white group-hover:text-[#FFD700] transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-300 leading-relaxed">{article.description}</p>
                  <div className="mt-6">
                    <Link
                      href={`/post/${article.slug}`}
                      className="text-sm font-semibold text-gray-300 hover:text-[#FFD700] transition-colors duration-200 inline-flex items-center gap-1"
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
