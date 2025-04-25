"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Calendar, Weight, Thermometer } from "lucide-react"

interface TransportOfferCardProps {
  id: string
  departure: string
  arrival: string
  date: string
  productType: string
  availableKg: number
  pricePerKg: number
  temperature: string
  driverName: string
  driverAvatar?: string
  isReserved?: boolean
  onReserve?: () => void
  onCancel?: () => void
}

export function TransportOfferCard({
  id,
  departure,
  arrival,
  date,
  productType,
  availableKg,
  pricePerKg,
  temperature,
  driverName,
  driverAvatar,
  isReserved = false,
  onReserve,
  onCancel,
}: TransportOfferCardProps) {
  // Fonction pour déterminer la couleur du badge en fonction du type de produit
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Fruits et légumes":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Poissons et fruits de mer":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "Produits laitiers":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "Viandes":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={driverAvatar || "/placeholder.svg?height=40&width=40"} alt={driverName} />
                <AvatarFallback>{driverName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{driverName}</p>
                <p className="text-sm text-gray-500">Transporteur</p>
              </div>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#6BBF59]" />
                <span className="font-medium">{departure}</span>
                <span className="text-gray-500 mx-2">→</span>
                <span className="font-medium">{arrival}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Thermometer className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{temperature}</span>
                </div>
              </div>
            </div>

            <Badge className={`w-fit ${getBadgeColor(productType)}`}>{productType}</Badge>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="text-2xl font-bold text-[#234E70]">
              {pricePerKg} MAD<span className="text-sm font-normal">/kg</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Weight className="h-4 w-4" />
              <span>{availableKg} kg disponibles</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-4">
        {isReserved ? (
          <Button variant="destructive" onClick={onCancel} className="w-full">
            Annuler ma réservation
          </Button>
        ) : (
          <Button onClick={onReserve} className="w-full bg-[#6BBF59] hover:bg-[#6BBF59]/90">
            Réserver
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
