import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./rtl.css"
import { LanguageProvider } from "@/contexts/language-context"
import { RtlProvider } from "@/components/rtl-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FreshRoute - Livraison mutualisée pour producteurs locaux",
  description: "Optimisez vos envois avec des véhicules adaptés à chaque produit, sans sacrifier votre marge",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={inter.className}>
        <LanguageProvider>
          <RtlProvider>{children}</RtlProvider>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
