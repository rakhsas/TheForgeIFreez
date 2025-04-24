"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { rtlLanguages, type Language } from "@/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  isRtl: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")
  const isRtl = rtlLanguages.includes(language)

  useEffect(() => {
    // Mettre à jour la direction du document en fonction de la langue
    document.documentElement.dir = isRtl ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language, isRtl])

  return <LanguageContext.Provider value={{ language, setLanguage, isRtl }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
