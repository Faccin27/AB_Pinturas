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
    // Only run this effect on the client
    if (typeof window === "undefined" || !mapRef.current) return

    // Add Leaflet CSS
    const linkElement = document.createElement("link")
    linkElement.rel = "stylesheet"
    linkElement.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    linkElement.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    linkElement.crossOrigin = ""
    document.head.appendChild(linkElement)

    // Add Leaflet JS
    const scriptElement = document.createElement("script")
    scriptElement.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    scriptElement.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    scriptElement.crossOrigin = ""

    // Initialize map after script is loaded
    let mapInstance: any = null

    scriptElement.onload = () => {
      // Access Leaflet through the window object
      const L = (window as any).L

      // Initialize map
      mapInstance = L.map(mapRef.current).setView([latitude, longitude], 15)

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance)

      // Add marker
      const marker = L.marker([latitude, longitude]).addTo(mapInstance)
      marker.bindPopup(address).openPopup()
    }

    document.head.appendChild(scriptElement)

    // Cleanup function
    return () => {
      if (mapInstance) {
        mapInstance.remove()
      }
      // Remove the added elements
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement)
      }
      if (document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement)
      }
    }
  }, [latitude, longitude, address])

  return <div ref={mapRef} className="w-full h-full" />
}