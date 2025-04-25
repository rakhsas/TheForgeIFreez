"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon, MapPin, Package, Euro } from "lucide-react"

export function Filters({ onFilter }: { onFilter: (filters: any) => void }) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [departure, setDeparture] = useState("")
  const [arrival, setArrival] = useState("")
  const [productType, setProductType] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10])

  const handleFilter = () => {
    onFilter({
      date,
      departure,
      arrival,
      productType,
      priceRange,
    })
  }

  const handleReset = () => {
    setDate(undefined)
    setDeparture("")
    setArrival("")
    setProductType("")
    setPriceRange([0, 10])
    onFilter({})
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h2 className="text-lg font-semibold mb-4 text-[#234E70]">Filtrer les offres</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="space-y-2">
          <Label htmlFor="departure">Départ</Label>
          <div className="relative">
            <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              id="departure"
              placeholder="Ville de départ"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="arrival">Arrivée</Label>
          <div className="relative">
            <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              id="arrival"
              placeholder="Ville d'arrivée"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
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
            <Select value={productType} onValueChange={setProductType}>
              <SelectTrigger id="product-type" className="pl-8">
                <SelectValue placeholder="Tous les produits" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les produits</SelectItem>
                <SelectItem value="Fruits et légumes">Fruits et légumes</SelectItem>
                <SelectItem value="Poissons et fruits de mer">Poissons et fruits de mer</SelectItem>
                <SelectItem value="Produits laitiers">Produits laitiers</SelectItem>
                <SelectItem value="Viandes">Viandes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="price-range">Prix au kg (MAD)</Label>
          <span className="text-sm text-gray-500">
            {priceRange[0]}MAD - {priceRange[1]}MAD
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="h-4 w-4 text-gray-400">MAD</span>
          <Slider
            id="price-range"
            defaultValue={[0, 20]}
            max={100}
            step={0.5}
            value={priceRange}
            onValueChange={setPriceRange}
            className="flex-1 mt-1"
          />  
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={handleFilter} className="flex-1 bg-[#6BBF59] hover:bg-[#6BBF59]/90">
          Appliquer les filtres
        </Button>
        <Button onClick={handleReset} variant="outline" className="flex-1">
          Réinitialiser
        </Button>
      </div>
    </div>
  )
}
