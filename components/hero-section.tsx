import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="início"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-primary"
    >
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Serviço de qualidade e com agilidade!
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Transformamos ambientes com pintura profissional e serviços de
            qualidade para residências e comércios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/10"
            >
              <a href="#serviços">Nossos Serviços</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-primary border-white hover:bg-white/10"
            >
              <a href="#contato" className="flex">
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Orçamento
              </a>
            </Button>
          </div>
          <div className="pt-4">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                "Pintura em Geral",
                "Pequenos Reparos",
                "Montagem de móveis",
                "Desmontagem de móveis",
                "Pinturas de móveis",
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative z-10 flex justify-center">
          <Image
            src="/images/flyer.png"
            alt="AB Pinturas e Serviços"
            width={500}
            height={500}
            className="max-w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
