import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Providers from "@/components/providers"
import { Poppins, Montserrat, Cairo, Tajawal } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
})
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Millionvate — Inspiring Your Millionaire Mindset",
  description: "Millionvate focuses on inspiring a millionaire mindset, personal growth, and financial success.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: '/icon.svg',
    shortcut: '/favicon.svg'
  },
  generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={[
          poppins.variable,
          montserrat.variable,
          cairo.variable,
          tajawal.variable,
          "antialiased bg-gray-900 text-white selection:bg-[#FFD700] selection:text-black",
        ].join(" ")}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
