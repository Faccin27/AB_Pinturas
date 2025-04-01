"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    src: "/images/p1.png",
    alt: "Montagem de móveis",
    title: "Montagem de Móveis",
    description: "Serviços especializados de montagem para todos os tipos de móveis",
  },
  {
    id: 2,
    src: "/images/p2.png",
    alt: "Pintura residencial",
    title: "Pintura Residencial",
    description: "Acabamento de qualidade para sua casa",
  },
  {
    id: 3,
    src: "/images/p3.png",
    alt: "Serviços gerais",
    title: "Serviços Gerais",
    description: "Soluções completas para sua residência ou comércio",
  },
  {
    id: 4,
    src: "/images/p4.png",
    alt: "Pintura comercial",
    title: "Pintura Comercial",
    description: "Soluções profissionais para ambientes comerciais",
  },
  {
    id: 5,
    src: "/images/pintura.png",
    alt: "Acabamentos especiais",
    title: "Acabamentos Especiais",
    description: "Técnicas avançadas para acabamentos diferenciados",
  },
  {
    id: 6,
    src: "/images/furniture.png",
    alt: "Desmontagem de móveis",
    title: "Desmontagem de Móveis",
    description: "Serviço cuidadoso para mudanças e reformas",
  },
]

export function CarouselGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const maxIndex = Math.max(0, galleryItems.length - 3)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsAnimating(false)
    }

    const carousel = carouselRef.current
    carousel?.addEventListener("transitionend", handleTransitionEnd)

    return () => {
      carousel?.removeEventListener("transitionend", handleTransitionEnd)
    }
  }, [])

  const visibleItems = galleryItems.slice(currentIndex, currentIndex + 3)
  const progressPercentage = (currentIndex / maxIndex) * 100

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Galeria de Trabalhos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados com qualidade e dedicação.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-0">
          {/* Progress bar */}
          <div className="hidden md:flex items-center justify-between mb-8 px-12">
            <div className="w-full h-1 bg-gray-200 relative">
              <div
                className="absolute h-1 bg-primary transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
              {[...Array(Math.min(galleryItems.length, 4))].map((_, i) => {
                const position = i === 0 ? 0 : i === 3 ? 100 : (i / 3) * 100
                return (
                  <div
                    key={i}
                    className={`absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 transition-colors duration-300 ${
                      currentIndex >= ((i * maxIndex) / 3) ? "bg-primary" : "bg-white border-2 border-gray-200"
                    }`}
                    style={{ left: `${position}%` }}
                  ></div>
                )
              })}
            </div>
          </div>

          {/* Carousel container */}
          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {galleryItems.map((item) => (
                <div key={item.id} className="w-full min-w-[100%] md:min-w-[33.333%] px-2 md:px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0 || isAnimating}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md z-10 transition-opacity ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : " bg-primary hover:bg-white"
              }`}
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex || isAnimating}
              className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-md z-10 transition-opacity ${
                currentIndex >= maxIndex
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-primary hover:bg-white text-black"
              }`}
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile indicators */}
          <div className="flex justify-center mt-6 md:hidden">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                  currentIndex === i ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

