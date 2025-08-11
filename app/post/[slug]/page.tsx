"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useI18n } from "@/components/i18n-provider"
import { M, MotionSection, fadeInUp, staggerChildren } from "@/components/motion"
import articlesEn from "@/data/articles.en.json"
import articlesAr from "@/data/articles.ar.json"

// Helper function to convert YouTube URLs to embed format
function convertToEmbedUrl(url: string): string {
  if (url.includes('youtube.com/embed/')) {
    return url; // Already in embed format
  }

  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return url; // Return as is if it's already in embed format
}

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, lang } = useI18n()

  const articleData = (lang === "ar" ? articlesAr : articlesEn) as any[]
  const article = articleData.find((a) => a.slug === slug)

  if (!article) {
    return (
      <main className="container mx-auto px-6 py-20">
        <p className="text-center text-lg text-gray-300">Post not found.</p>
        <div className="mt-6 text-center">
          <Link href="/" className="underline hover:text-[#FFD700] text-gray-300">
            Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-gray-900 min-h-screen">
      <MotionSection className="border-b border-gray-700 bg-gray-900">
        <div className="container mx-auto grid gap-12 px-6 py-16 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div>
            <M.nav variants={fadeInUp} className="mb-6">
              <Link
                href="/#articles"
                className="text-sm text-gray-400 underline-offset-4 hover:text-[#FFD700] hover:underline transition-colors"
              >
                {t("post.back")}
              </Link>
            </M.nav>
            <M.h1 variants={fadeInUp} className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="gold-gradient-text">{article.title}</span>
            </M.h1>
            <M.div variants={fadeInUp} className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
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

            {/* Display video if available, otherwise show image */}
            {article.video ? (
              <M.div
                variants={fadeInUp}
                className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-600 shadow-2xl bg-gray-800"
              >
                <iframe
                  className="h-full w-full"
                  src={convertToEmbedUrl(article.video)}
                  title={article.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </M.div>
            ) : (
              <M.div
                variants={fadeInUp}
                className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-600 shadow-2xl bg-gray-800"
              >
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </M.div>
            )}

            <M.article variants={staggerChildren} className="prose prose-neutral max-w-none text-start sm:prose-lg lg:prose-xl mt-12">
              <div className="space-y-8">
                {article.content.map((p: string, i: number) => (
                  <M.p key={i} variants={fadeInUp} className="text-gray-300 leading-relaxed text-lg">
                    {p}
                  </M.p>
                ))}
              </div>
            </M.article>
          </div>

          <aside className="lg:border-s lg:border-gray-700 lg:ps-8">
            <div className="rounded-2xl border border-gray-700 p-6 shadow-xl bg-gray-800">
              <h3 className="font-heading text-xl font-semibold text-white mb-4">Related Articles</h3>
              <ul className="space-y-4">
                {articleData
                  .filter((a) => a.slug !== article.slug)
                  .slice(0, 3)
                  .map((rel) => (
                    <li key={rel.slug}>
                      <Link
                        href={`/post/${rel.slug}`}
                        className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200 block py-2 px-3 rounded-lg hover:bg-gray-700"
                      >
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
