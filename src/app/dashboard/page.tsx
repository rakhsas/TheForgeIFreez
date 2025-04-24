"use client"

import { useState } from "react"
import { Filters } from "@/components/filters"
import { TransportOfferCard } from "@/components/transport-offer-card"
import { mockOffers } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const [offers, setOffers] = useState(mockOffers)
  const [filteredOffers, setFilteredOffers] = useState(mockOffers)
  const [reservedOffers, setReservedOffers] = useState<string[]>([])
  const { toast } = useToast()

  const handleFilter = (filters: any) => {
    let filtered = [...offers]

    if (filters.date) {
      filtered = filtered.filter((offer) =>
        offer.date.includes(
          filters.date.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }),
        ),
      )
    }

    if (filters.departure) {
      filtered = filtered.filter((offer) => offer.departure.toLowerCase().includes(filters.departure.toLowerCase()))
    }

    if (filters.arrival) {
      filtered = filtered.filter((offer) => offer.arrival.toLowerCase().includes(filters.arrival.toLowerCase()))
    }

    if (filters.productType) {
      filtered = filtered.filter((offer) => offer.productType === filters.productType)
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (offer) => offer.pricePerKg >= filters.priceRange[0] && offer.pricePerKg <= filters.priceRange[1],
      )
    }

    setFilteredOffers(filtered)
  }

  const handleReserve = (id: string) => {
    setReservedOffers([...reservedOffers, id])
    toast({
      title: "Réservation confirmée",
      description: "Votre réservation a été enregistrée avec succès.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#234E70]">Offres de transport disponibles</h1>
          <p className="text-gray-500">Trouvez le transport idéal pour vos produits sensibles</p>
        </div>
      </div>

      <Filters onFilter={handleFilter} />

      <div className="grid grid-cols-1 gap-4">
        {filteredOffers.length > 0 ? (
          filteredOffers.map((offer) => (
            <TransportOfferCard
              key={offer.id}
              {...offer}
              isReserved={reservedOffers.includes(offer.id)}
              onReserve={() => handleReserve(offer.id)}
            />
          ))
        ) : (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-lg font-medium text-gray-900">Aucune offre disponible</h3>
            <p className="mt-1 text-gray-500">
              Aucune offre ne correspond à vos critères de recherche. Essayez de modifier vos filtres.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
