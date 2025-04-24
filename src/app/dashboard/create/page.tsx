"use client"

import { CreateOfferForm } from "@/components/create-offer-form"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function CreateOfferPage() {
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = (data: any) => {
    console.log("Nouvelle offre créée:", data)

    toast({
      variant: 'default',
      title: "Offre créée avec succès",
      description: "Votre offre de transport a été publiée.",
    })

    // Rediriger vers la page des offres
    router.push("/dashboard")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#234E70]">Créer une offre de transport</h1>
        <p className="text-gray-500">Proposez votre espace disponible aux producteurs locaux</p>
      </div>

      <CreateOfferForm onSubmit={handleSubmit} />
    </div>
  )
}
