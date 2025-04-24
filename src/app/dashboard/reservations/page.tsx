"use client"

import { useState } from "react"
import { TransportOfferCard } from "@/components/transport-offer-card"
import { mockOffers } from "@/lib/mock-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function ReservationsPage() {
  // Dans une application réelle, ces données viendraient d'une API
  const [reservedOffers] = useState(mockOffers.slice(0, 3))
  const { toast } = useToast()

  const handleCancelReservation = (id: string) => {
    toast({
      title: "Réservation annulée",
      description: "Votre réservation a été annulée avec succès.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#234E70]">Mes réservations</h1>
        <p className="text-gray-500">Gérez vos réservations de transport</p>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Réservations actives</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {reservedOffers.length > 0 ? (
              reservedOffers.map((offer) => (
                <TransportOfferCard
                  key={offer.id}
                  {...offer}
                  isReserved={true}
                  onCancel={() => handleCancelReservation(offer.id)}
                />
              ))
            ) : (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-lg font-medium text-gray-900">Aucune réservation active</h3>
                <p className="mt-1 text-gray-500">Vous n'avez pas de réservations actives pour le moment.</p>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-lg font-medium text-gray-900">Historique vide</h3>
            <p className="mt-1 text-gray-500">Votre historique de réservations est vide.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
