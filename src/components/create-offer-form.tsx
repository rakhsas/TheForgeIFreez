"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon, MapPin, Package, Euro, Thermometer, Weight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface CreateOfferFormProps {
  onSubmit: (data: any) => void
}

export function CreateOfferForm({ onSubmit }: CreateOfferFormProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [departure, setDeparture] = useState("")
  const [arrival, setArrival] = useState("")
  const [productType, setProductType] = useState("")
  const [temperature, setTemperature] = useState("")
  const [availableKg, setAvailableKg] = useState("")
  const [pricePerKg, setPricePerKg] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !departure || !arrival || !productType || !temperature || !availableKg || !pricePerKg) {
      alert("Veuillez remplir tous les champs")
      return
    }

    onSubmit({
      date: format(date, "PPP", { locale: fr }),
      departure,
      arrival,
      productType,
      temperature,
      availableKg: Number.parseInt(availableKg),
      pricePerKg: Number.parseFloat(pricePerKg),
    })

    // Reset form
    setDate(undefined)
    setDeparture("")
    setArrival("")
    setProductType("")
    setTemperature("")
    setAvailableKg("")
    setPricePerKg("")
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-[#234E70]">Créer une offre de transport</CardTitle>
        <CardDescription>Proposez votre espace disponible pour transporter des produits sensibles</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="departure">Ville de départ</Label>
              <div className="relative">
                <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  id="departure"
                  placeholder="Ex: Paris"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="pl-8"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="arrival">Ville d'arrivée</Label>
              <div className="relative">
                <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  id="arrival"
                  placeholder="Ex: Lyon"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  className="pl-8"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date">Date de départ</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: fr }) : "Sélectionner une date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={fr} />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="product-type">Type de produit</Label>
              <div className="relative">
                <Package className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Select value={productType} onValueChange={setProductType} required>
                  <SelectTrigger id="product-type" className="pl-8">
                    <SelectValue placeholder="Sélectionner un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fruits et légumes">Fruits et légumes</SelectItem>
                    <SelectItem value="Poissons et fruits de mer">Poissons et fruits de mer</SelectItem>
                    <SelectItem value="Produits laitiers">Produits laitiers</SelectItem>
                    <SelectItem value="Viandes">Viandes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="temperature">Température (°C)</Label>
              <div className="relative">
                <Thermometer className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Select value={temperature} onValueChange={setTemperature} required>
                  <SelectTrigger id="temperature" className="pl-8">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0°C à 2°C">0°C à 2°C</SelectItem>
                    <SelectItem value="2°C à 4°C">2°C à 4°C</SelectItem>
                    <SelectItem value="4°C à 8°C">4°C à 8°C</SelectItem>
                    <SelectItem value="8°C à 12°C">8°C à 12°C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="available-kg">Kg disponibles</Label>
              <div className="relative">
                <Weight className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  id="available-kg"
                  type="number"
                  placeholder="Ex: 100"
                  min="1"
                  value={availableKg}
                  onChange={(e) => setAvailableKg(e.target.value)}
                  className="pl-8"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price-per-kg">Prix par kg (MAD)</Label>
              <div className="relative">
                <Euro className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  id="price-per-kg"
                  type="number"
                  placeholder="Ex: 2.50"
                  min="0.1"
                  step="0.1"
                  value={pricePerKg}
                  onChange={(e) => setPricePerKg(e.target.value)}
                  className="pl-8"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full bg-[#6BBF59] hover:bg-[#6BBF59]/90">
          Créer l'offre de transport
        </Button>
      </CardFooter>
    </Card>
  )
}
