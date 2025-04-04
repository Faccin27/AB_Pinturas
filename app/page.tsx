import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CarouselGallery } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MapSection } from '@/components/map-section'
import { CoverageSection } from "@/components/coverage-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CarouselGallery />
      <AboutSection />
      <TestimonialsSection />
      {/* <MapSection /> */}
      <CoverageSection />
      <ContactSection />
      <Footer /> 
    </main>
  )
}

