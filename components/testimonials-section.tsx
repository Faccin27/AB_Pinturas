"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "Lisboa",
    rating: 5,
    text: "Contratei a AB Pinturas para pintar meu apartamento e fiquei extremamente satisfeita com o resultado. Profissionais pontuais e trabalho de qualidade!",
    initials: "MS",
  },
  {
    id: 2,
    name: "João Pereira",
    location: "Porto",
    rating: 5,
    text: "Excelente serviço de montagem de móveis. Rápidos, eficientes e cuidadosos. Recomendo a todos!",
    initials: "JP",
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "Braga",
    rating: 4,
    text: "Contratei para pequenos reparos em casa e fiquei muito satisfeita. Preço justo e trabalho bem feito.",
    initials: "AC",
  },
  {
    id: 4,
    name: "Carlos Santos",
    location: "Coimbra",
    rating: 5,
    text: "Pintaram minha loja comercial e o resultado superou minhas expectativas. Profissionais sérios e comprometidos.",
    initials: "CS",
  },
]

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const maxStartIndex = testimonials.length - visibleCount

  // Handle responsive behavior with useEffect
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
  }

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">O que nossos clientes dizem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior recompensa. Confira alguns depoimentos.
          </p>
        </div>

        <div className="relative px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-6"
              style={{
                transform: `translateX(-${startIndex * (window.innerWidth < 768 ? 105 : 100 / visibleCount)}%)`
              }}
                          >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]">
                  <Card className="h-full shadow-md">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 -left-2 md:-left-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:pointer-events-none z-10"
            onClick={prevSlide}
            disabled={startIndex === 0}
            aria-label="Depoimentos anteriores"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            className="absolute top-1/2 -right-2 md:-right-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:pointer-events-none z-10"
            onClick={nextSlide}
            disabled={startIndex >= maxStartIndex}
            aria-label="Próximos depoimentos"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

