import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Articles from "@/components/articles"
import VideosSection from "@/components/videos"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col bg-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Articles />
        <VideosSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
