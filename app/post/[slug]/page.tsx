"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useI18n } from "@/components/i18n-provider"
import { M, MotionSection, fadeInUp, staggerChildren } from "@/components/motion"
import articlesEn from "@/data/articles.en.json"
import articlesAr from "@/data/articles.ar.json"

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, lang } = useI18n()

  const articleData = (lang === "ar" ? articlesAr : articlesEn) as any[]
  const article = articleData.find((a) => a.slug === slug)

  if (!article) {
    return (
      <main className="container mx-auto px-4 py-16">
        <p className="text-center text-lg">Post not found.</p>
        <div className="mt-4 text-center">
          <Link href="/" className="underline hover:text-[#FFD700]">
            Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white">
      <MotionSection className="border-b border-black/10 bg-white">
        <div className="container mx-auto grid gap-10 px-4 py-10 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div>
            <M.nav variants={fadeInUp} className="mb-4">
              <Link
                href="/#articles"
                className="text-sm text-neutral-700 underline-offset-4 hover:text-[#FFD700] hover:underline"
              >
                {t("post.back")}
              </Link>
            </M.nav>
            <M.h1 variants={fadeInUp} className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="gold-gradient-text">{article.title}</span>
            </M.h1>
            <M.div variants={fadeInUp} className="mt-3 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <span>
                {t("post.published")}: {new Date(article.date).toLocaleDateString(lang === "ar" ? "ar" : "en-US")}
              </span>
              <span>•</span>
              <span>
                {article.minutes} {t("post.readingTime")}
              </span>
              <span>•</span>
              <span>{article.author}</span>
            </M.div>
            <M.div
              variants={fadeInUp}
              className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-black/10 shadow-lg"
            >
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </M.div>

            {article.slug === "from-employee-to-millionaire" && (
              <M.div
                variants={fadeInUp}
                className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-black/10 shadow-lg"
              >
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/O8WIdjRk10o?si=EE5NCBe6h-Nx4ZKV"
                  title="From 9–5 Employee to Millionaire: The 10 Steps That Changed My Life"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </M.div>
            )}
            <M.article variants={staggerChildren} className="prose prose-neutral max-w-none text-start sm:prose-lg">
              <div className="mt-8 space-y-6">
                {article.content.map((p: string, i: number) => (
                  <M.p key={i} variants={fadeInUp} className="text-neutral-800">
                    {p}
                  </M.p>
                ))}
              </div>
            </M.article>
          </div>

          <aside className="lg:border-s lg:border-black/10 lg:ps-8">
            <div className="rounded-2xl border border-black/10 p-4 shadow-sm">
              <h3 className="font-heading text-lg font-semibold">Related</h3>
              <ul className="mt-3 space-y-3">
                {articleData
                  .filter((a) => a.slug !== article.slug)
                  .slice(0, 3)
                  .map((rel) => (
                    <li key={rel.slug}>
                      <Link href={`/post/${rel.slug}`} className="hover:text-[#FFD700]">
                        {rel.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </MotionSection>
    </main>
  )
}
