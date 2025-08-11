"use client"

import Link from "next/link"
import { M } from "./motion"

export default function Logo() {
  return (
    <Link href="#home" className="flex items-center gap-3 group">
      {/* Icon */}
      <div className="relative w-8 h-8 flex-shrink-0">
        <div className="absolute inset-0 bg-gray-800 rounded-full border-2 border-[#FFD700] shadow-lg group-hover:shadow-[#FFD700]/25 transition-all duration-300 group-hover:scale-110">
          <div className="absolute inset-1 bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-full flex items-center justify-center">
            <span className="text-white font-black text-sm leading-none">M</span>
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 group-hover:scale-125"></div>
      </div>

      {/* Text */}
      <M.span
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading text-xl tracking-tight text-white group-hover:text-[#FFD700] transition-colors duration-300"
      >
        <span className="text-2xl font-black">M</span>illionvate
      </M.span>
    </Link>
  )
}
