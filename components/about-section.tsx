import Image from "next/image"
import { Check } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Sobre a AB Pinturas e Serviços</h2>
            <p className="text-muted-foreground mb-6">
              Somos uma empresa especializada em serviços de pintura residencial e comercial, com foco na qualidade e
              satisfação dos nossos clientes. Nossa equipe é formada por profissionais experientes e comprometidos com a
              excelência em cada projeto.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Qualidade</h3>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Qualidade Garantida</h3>
                  <p className="text-muted-foreground">
                    Trabalhamos com materiais de primeira linha e técnicas modernas para garantir um acabamento
                    perfeito.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Profissionais Experientes</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe é formada por profissionais com anos de experiência no mercado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Compromisso com Prazos</h3>
                  <p className="text-muted-foreground">
                    Respeitamos os prazos estabelecidos e entregamos o serviço conforme combinado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/logo.png"
                alt="AB Pinturas e Serviços"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

