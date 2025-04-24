"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Truck } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simuler un délai d'authentification
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="bg-[#6BBF59] p-3 rounded-full">
              <Truck className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center font-bold text-[#234E70]">FreshRoute</CardTitle>
          <CardDescription className="text-center">
            Connectez-vous à votre compte pour accéder au dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="exemple@email.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                <a href="#" className="text-sm text-[#6BBF59] hover:underline">
                  Mot de passe oublié?
                </a>
              </div>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full bg-[#6BBF59] hover:bg-[#6BBF59]/90" disabled={loading}>
              {loading ? "Connexion en cours..." : "Se connecter"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Vous n&apos;avez pas de compte?{" "}
            <a href="#" className="text-[#6BBF59] hover:underline">
              S&apos;inscrire
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
