"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Paintbrush, Hammer, Wrench, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: 1,
    title: "Pintura Residencial",
    description: "Transformamos sua casa com cores que combinam com seu estilo e personalidade.",
    icon: Paintbrush,
    image: "/images/services.png",
  },
  {
    id: 2,
    title: "Montagem e Desmontagem de Móveis",
    description: "Comprou um móvel novo ou vai se mudar? Fazemos a montagem e desmontagem com total cuidado.",
    icon: Wrench,
    image: "/images/furniture.png",
  },
  {
    id: 3,
    title: "Pequenos Reparos",
    description: "Resolvemos pequenos problemas antes que se tornem grandes dores de cabeça.",
    icon: Hammer,
    image: "/images/quote.png",
  },
  {
    id: 4,
    title: "Pintura Comercial",
    description: "Dê uma nova cara ao seu negócio com nossa pintura profissional para ambientes comerciais.",
    icon: Home,
    image: "/images/services.png",
  },
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  return (
    <section id="serviços" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Conheça nossos serviços</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para pintura e manutenção do seu imóvel, com qualidade e capricho em cada
            detalhe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="carousel rounded-2xl overflow-hidden shadow-xl">
            <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {services.map((service) => (
                <div key={service.id} className="carousel-item">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                </div>
              ))}
            </div>

            <button className="carousel-control carousel-control-prev" onClick={prevSlide} aria-label="Anterior">
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button className="carousel-control carousel-control-next" onClick={nextSlide} aria-label="Próximo">
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="carousel-indicators">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">{services[activeIndex].title}</h3>
            <p className="text-muted-foreground mb-6">{services[activeIndex].description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`service-card cursor-pointer ${activeIndex === service.id - 1 ? "border-primary" : ""}`}
                  onClick={() => setActiveIndex(service.id - 1)}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full flex-shrink-0 ${
                        activeIndex === service.id - 1 ? "bg-primary text-white" : "bg-muted"
                      }`}
                    >
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-sm sm:text-base line-clamp-2">{service.title}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" className="w-full sm:w-auto">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

