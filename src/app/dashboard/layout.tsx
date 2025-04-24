import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative">
      <Sidebar />
      <div className="lg:pl-64 h-full">
        <main className="h-full overflow-y-auto p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
