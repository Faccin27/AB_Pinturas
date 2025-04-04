"use client"

import { useEffect, useRef } from "react"

interface MapComponentProps {
  latitude: number
  longitude: number
  address: string
}

export default function MapComponent({ latitude, longitude, address }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    const linkElement = document.createElement("link")
    linkElement.rel = "stylesheet"
    linkElement.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    linkElement.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    linkElement.crossOrigin = ""
    document.head.appendChild(linkElement)

    const scriptElement = document.createElement("script")
    scriptElement.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    scriptElement.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    scriptElement.crossOrigin = ""

    let mapInstance: any = null

    scriptElement.onload = () => {
      const L = (window as any).L

      mapInstance = L.map(mapRef.current).setView([latitude, longitude], 13) // 👈 use zoom 13

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance)

      const marker = L.marker([latitude, longitude]).addTo(mapInstance)
      marker.bindPopup(address).openPopup()

      const circle = L.circle([latitude, longitude], {
        color: "#009DBF",
        fillColor: "#009DBF",
        fillOpacity: 0.2,
        radius: 1500,
      }).addTo(mapInstance)
    }

    document.head.appendChild(scriptElement)

    return () => {
      if (mapInstance) {
        mapInstance.remove()
      }
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement)
      }
      if (document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement)
      }
    }
  }, [latitude, longitude, address])

  return <div ref={mapRef} className="w-full h-full min-h-[400px]" />
}
