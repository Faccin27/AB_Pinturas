"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Normalmente, você teria imagens reais aqui
const galleryImages = [
  { id: 1, src: "/images/furniture.png", alt: "Montagem de móveis", category: "Móveis" },
  { id: 2, src: "/images/services.png", alt: "Pintura residencial", category: "Pintura" },
  { id: 3, src: "/images/quote.png", alt: "Serviços gerais", category: "Serviços" },
  { id: 4, src: "/images/hero.png", alt: "Pintura comercial", category: "Pintura" },
  { id: 5, src: "/images/furniture.png", alt: "Montagem de móveis 2", category: "Móveis" },
  { id: 6, src: "/images/services.png", alt: "Pintura residencial 2", category: "Pintura" },
]

const categories = ["Todos", "Pintura", "Móveis", "Serviços"]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [currentImage, setCurrentImage] = useState<number | null>(null)

  const filteredImages =
    activeCategory === "Todos" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (imageId: number) => {
    setCurrentImage(imageId)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setCurrentImage(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (currentImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === currentImage)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setCurrentImage(filteredImages[nextIndex].id)
  }

  const prevImage = () => {
    if (currentImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === currentImage)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentImage(filteredImages[prevIndex].id)
  }

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Galeria de Trabalhos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados com qualidade e dedicação.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => openLightbox(image.id)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {currentImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
            <div
              className="relative max-w-4xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages.find((img) => img.id === currentImage) && (
                <Image
                  src={filteredImages.find((img) => img.id === currentImage)!.src || "/placeholder.svg"}
                  alt={filteredImages.find((img) => img.id === currentImage)!.alt}
                  width={1200}
                  height={800}
                  className="max-h-[80vh] w-auto object-contain"
                />
              )}

              <button
                className="absolute left-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                onClick={prevImage}
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                className="absolute right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                onClick={nextImage}
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                onClick={closeLightbox}
                aria-label="Fechar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

