"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { en } from "@/data/en"
import { ar } from "@/data/ar"

type Lang = "en" | "ar"
type Dir = "ltr" | "rtl"

type Dict = Record<string, any>

const translations: Record<Lang, Dict> = {
  en,
  ar,
}

function getByPath(obj: Dict, path: string) {
  return path.split(".").reduce((acc: any, key) => (acc ? acc[key] : undefined), obj)
}

type I18nContextType = {
  lang: Lang
  dir: Dir
  t: (key: string) => string
  setLang: (lang: Lang) => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  const dir: Dir = lang === "ar" ? "rtl" : "ltr"

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== "undefined") {
      localStorage.setItem("millionvate_lang", l)
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    const saved = localStorage.getItem("millionvate_lang") as Lang | null
    if (saved && (saved === "en" || saved === "ar")) {
      setLangState(saved)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
      document.documentElement.dir = dir
      // Toggle Arabic font override
      if (dir === "rtl") {
        document.body.classList.add("font-ar")
      } else {
        document.body.classList.remove("font-ar")
      }
    }
  }, [lang, dir])

  const value = useMemo<I18nContextType>(
    () => ({
      lang,
      dir,
      t: (key: string) => getByPath(translations[lang], key) ?? key,
      setLang,
    }),
    [lang, dir],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
