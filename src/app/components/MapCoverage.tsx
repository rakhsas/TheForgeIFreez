"use client";
import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { translations } from "@/translations"
import { useLanguage } from "@/contexts/language-context";

export default function MapCoverage() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    // Fix Leaflet already initialized error
    const existingMap = document.querySelector(".leaflet-container");
    if (existingMap && (existingMap as any)._leaflet_id) {
      (existingMap as any)._leaflet_id = null;
    }
  }, []);

  const truckLocations = [
    { city: t.cities.agadir, position: [30.4278, -9.5981], type: "fruits", company: "FreshAgri" },
    { city: t.cities.casablanca, position: [33.5731, -7.5898], type: "fish", company: "OceanCatch" },
    { city: t.cities.safi, position: [32.2994, -9.2372], type: "fish", company: "SeaKing" },
    { city: t.cities.tanger, position: [35.7595, -5.8339], type: "fruits", company: "NorthFruits" },
  ];
  const uniqueCityMarkers = Object.values(
    truckLocations.reduce((acc, truck) => {
      if (!acc[truck.city]) {
        acc[truck.city] = {
          city: truck.city,
          position: [truck.position[0], truck.position[1]],
          companies: new Set<string>(),
        };
      }
      acc[truck.city].companies.add(truck.company);
      return acc;
    }, {} as Record<string, { city: string; position: [number, number]; companies: Set<string> }>)
  );
  const groupedCities = truckLocations.reduce((acc, truck) => {
    if (!acc[truck.city]) acc[truck.city] = [];
    acc[truck.city].push(truck);
    return acc;
  }, {} as Record<string, typeof truckLocations>);

  function FlyToCity({ position }: { position: [number, number] }) {
    const map = useMap();
    useEffect(() => {
      map.flyTo(position, 10);
    }, [position]);
    return null;
  }

  const cityTrucks = selectedCity ? groupedCities[selectedCity] : [];

  return (
    <div className="w-full h-[700px] flex flex-col gap-2 rounded-xl overflow-hidden shadow-lg mb-8 z-0">
      <div className="mapcontainer h-[90%] w-full relative z-0">
        <MapContainer
          center={[32.5, -6.5]}
          zoom={6}
          scrollWheelZoom={true}
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {uniqueCityMarkers.map(({ city, position, companies }, i) => (
          <Marker
            key={i}
            position={position}
            icon={new L.Icon({
              iconUrl: "/images/marker-icon.png", // Remplace par ton icône
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -30],
            })}
          >
            <Popup>
              <strong className="text-left rtl:text-right">{city}</strong>
              <br />
              🚚 <span className="text-sm text-left rtl:text-right">{t.cities.companies}:</span>
              <ul className="list-disc pl-4 rtl:pr-4 text-left rtl:text-right">
                {[...companies].map((company, idx) => (
                  <li key={idx}>{company}</li>
                ))}
              </ul>
            </Popup>
          </Marker>
        ))}

          {selectedCity && (
            <FlyToCity position={cityTrucks[0].position as [number, number]} />
          )}
        </MapContainer>
      </div>

      <div className="flex flex-wrap gap-3 justify-center px-4 py-3">
        {Object.entries(groupedCities).map(([city]) => (
          <Badge
            key={city}
            onClick={() => setSelectedCity(city)}
            className="bg-white text-[#234E70] cursor-pointer flex items-center gap-2 px-4 py-2 border shadow hover:shadow-md"
          >
            <MapPin className="h-4 w-4 text-[#6BBF59]" />
            {city}
          </Badge>
        ))}
      </div>
    </div>
  );
}
