import { Button } from "@/components/ui/button";
import { Phone, Paintbrush, Wrench, Package, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="início"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          {/* Main heading and description */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Serviço de qualidade e com agilidade!
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Especialistas em remodelações, pinturas e montagens de móveis.
              Soluções completas para renovar o seu lar ou negócio.{" "}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#serviços">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 border-white"
              >
                Nossos Serviços
              </Button>
            </a>
            <a href="#contato">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 border-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
            </a>
          </div>

          {/* Services grid with icons */}
          <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: Paintbrush,
                  title: "Pintura em Geral",
                  desc: "Residencial e comercial",
                },
                {
                  icon: Wrench,
                  title: "Pequenos Reparos",
                  desc: "Manutenção geral",
                },
                {
                  icon: Package,
                  title: "Montagem de Móveis",
                  desc: "Montagem e desmontagem",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <service.icon className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-80">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional services list */}
          {/* <div className="pt-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto shadow-lg hover:-translate-y-2 transition-all duration-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Outros Serviços Disponíveis
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Desmontagem de móveis", "Pinturas de móveis", "Textura e grafiato", "Consultoria em cores"].map(
                  (service, index) => (
                    <div key={index} className="flex items-center gap-2 justify-center sm:justify-start">
                      <span className="h-2 w-2 rounded-full bg-white" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
