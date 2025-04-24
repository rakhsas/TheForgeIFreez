"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Truck, ShoppingBag, PlusCircle, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const routes = [
  {
    label: "Offres disponibles",
    icon: Truck,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Créer une offre",
    icon: PlusCircle,
    href: "/dashboard/create",
    color: "text-green-500",
  },
  {
    label: "Mes réservations",
    icon: ShoppingBag,
    href: "/dashboard/reservations",
    color: "text-orange-500",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Navigation */}
      <div className="flex items-center justify-between p-4 lg:hidden border-b">
        <div className="flex items-center">
          <Truck className="h-6 w-6 text-[#6BBF59] mr-2" />
          <span className="font-bold text-xl text-[#234E70]">FreshRoute</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white pt-16">
          <div className="flex flex-col space-y-2 p-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-[#6BBF59]",
                  pathname === route.href ? "bg-gray-100 text-[#6BBF59]" : "text-gray-500",
                )}
              >
                <route.icon className={cn("h-5 w-5", route.color)} />
                {route.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:text-red-500 mt-auto"
            >
              <LogOut className="h-5 w-5 text-red-500" />
              Déconnexion
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex h-full w-64 flex-col fixed inset-y-0">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-[#6BBF59]" />
            <span className="font-bold text-xl text-[#234E70]">FreshRoute</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#6BBF59]",
                  pathname === route.href ? "bg-gray-100 text-[#6BBF59]" : "text-gray-500",
                )}
              >
                <route.icon className={cn("h-5 w-5", route.color)} />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto border-t p-4">
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:text-red-500"
          >
            <LogOut className="h-5 w-5 text-red-500" />
            Déconnexion
          </Link>
        </div>
      </div>
    </>
  )
}
