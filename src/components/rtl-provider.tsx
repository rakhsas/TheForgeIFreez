"use client"

import { useLanguage } from "@/contexts/language-context"
import type { ReactNode } from "react"

export function RtlProvider({ children }: { children: ReactNode }) {
  const { isRtl } = useLanguage()

  return (
    <div className={isRtl ? "rtl" : "ltr"} style={{ direction: isRtl ? "rtl" : "ltr" }}>
      {children}
    </div>
  )
}
