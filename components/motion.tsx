"use client"

import type { Variants } from "framer-motion"
import { motion } from "framer-motion"
import type React from "react"

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerChildren: Variants = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

export function MotionSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren}
    >
      {children}
    </motion.section>
  )
}

export const M = motion
