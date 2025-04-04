"use client";

import { useState, useEffect } from "react";
import { Check, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ADDRCONFIG } from "dns";

const citiesServed = [
  { name: "Porto", isMain: true },
  { name: "Vila Nova de Gaia", isMain: true },
  { name: "Matosinhos", isMain: true },
  { name: "Maia", isMain: true },
  { name: "Gondomar", isMain: false },
  { name: "Valongo", isMain: false },
  { name: "Vila do Conde", isMain: false },
  { name: "Aveiro", isMain: false },
  { name: "Espinho", isMain: false },
  { name: "Santo Tirso", isMain: false },
  { name: "Trofa", isMain: false },
  { name: "Paredes", isMain: false },
];

const openGoogleMaps = () => {
  window.open(
    `https://www.google.com/maps/search/?api=1&query=41.1579,-8.6291`,
    "_blank"
  );
};

export function CoverageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllCities, setShowAllCities] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("coverage-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const displayedCities = showAllCities
    ? citiesServed
    : citiesServed.filter((city) => city.isMain);

  return (
    <section id="atendimento" className="py-20 bg-white overflow-hidden">
      <div id="coverage-section" className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "transition-all duration-1000 transform",
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            )}
          >
            <div className="relative">
              <div className="absolute -left-2 top-0 bottom-0 w-2 bg-primary rounded-full"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 pl-6">
                Nós atendemos toda a região do Porto.
              </h2>
            </div>

            <p className="text-muted-foreground text-lg mb-8">
              Garantimos que nossos serviços de pintura e montagem cheguem até
              você onde quer que esteja. Seja em cidades grandes ou pequenas,
              estamos sempre prontos para oferecer a melhor experiência e
              soluções personalizadas para suas necessidades!
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {displayedCities.map((city) => (
                <div key={city.name} className="flex items-center gap-2">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{city.name}</span>
                </div>
              ))}
            </div>

            {citiesServed.length > displayedCities.length && (
              <Button
                variant="link"
                className="text-primary p-0 h-auto font-medium"
                onClick={() => setShowAllCities(!showAllCities)}
              >
                {showAllCities
                  ? "Mostrar menos cidades"
                  : "Ver todas as cidades atendidas"}
                <ArrowRight
                  className={`ml-2 h-4 w-4 transition-transform ${
                    showAllCities ? "rotate-90" : ""
                  }`}
                />
              </Button>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="tel:+5549999215720">
                <Button size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Solicitar Orçamento
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={openGoogleMaps}
              >
                <MapPin className="h-5 w-5" />
                Ver Nossa Localização
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "relative transition-all duration-500 transform",
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            )}
          >
            <div className="relative mx-auto left-16 max-w-[400px]">
              {/* FRAME FILHO DA PUTA NÃO MECHER NESSA PIROCA */}
              <div className="absolute inset-0 bg-primary/20 rounded-[40px] transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary/30 rounded-[40px] transform -rotate-3"></div>

              <div className="relative bg-white rounded-[30px] overflow-hidden border-8 border-gray-800 shadow-2xl">
                {/* Map image with  region */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10"></div>

                  {/* Custom map with Porto region highligqhted */}
                  <div className="relative h-full w-full bg-[#e8f4f6]">
                    {/* Portugal map outline */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 200 300" className="h-full w-auto">
                        <canvas className="y=0.6856x+471015, m80, marker:target:ease-linear backdrop:marker:visited:before "></canvas>
                        <path
                          d="M80,50 C70,70 60,100 70,130 C80,160 90,180 100,200 C110,220 120,240 110,260 C100,280 80,290 60,280 C40,270 30,250 40,230 C50,210 70,200 80,180 C90,160 80,140 70,120 C60,100 50,80 60,60 C70,40 90,30 110,40 C130,50 140,70 130,90 C120,110 100,120 90,140 C80,160 90,180 100,200 C110,220 130,230 150,220 C170,210 180,190 170,170 C160,150 140,140 130,120 C120,100 130,80 140,60 C150,40 170,30 190,40"
                          fill="none"
                          stroke="#009DBF"
                          strokeWidth="2"
                        />
                        A BOLA NA REGIÃO DO PORTO
                        <circle
                          cx="80"
                          cy="80"
                          r="30"
                          fill="#009DBF"
                          fillOpacity="0.3"
                        />
                        {/* cidade principal */}
                        <circle cx="80" cy="80" r="4" fill="#009DBF" />
                        <text x="85" y="80" fontSize="8" fill="#333">
                          Porto
                        </text>
                        <circle cx="90" cy="90" r="3" fill="#009DBF" />
                        <text x="95" y="90" fontSize="7" fill="#333">
                          Gaia
                        </text>
                        <circle cx="70" cy="70" r="3" fill="#009DBF" />
                        <text
                          x="60"
                          y="70"
                          fontSize="7"
                          fill="#333"
                          textAnchor="end"
                        >
                          Matosinhos
                        </text>
                        <circle cx="85" cy="65" r="3" fill="#009DBF" />
                        <text x="90" y="65" fontSize="7" fill="#333">
                          Maia
                        </text>
                      </svg>
                    </div>

                    {/* Porto region label */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/80 text-white px-4 py-2 rounded-lg shadow-lg">
                      <p className="font-bold text-center">REGIÃO PORTO</p>
                    </div>
                  </div>

                  {/* Elementos decorativos */}
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-70 blur-md"></div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full opacity-70 blur-md"></div>
                </div>
              </div>
            </div>

            {/* Pinsel */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 transform rotate-45">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect
                  x="45"
                  y="10"
                  width="10"
                  height="80"
                  fill="#009DBF"
                  rx="2"
                />
                <rect
                  x="40"
                  y="5"
                  width="20"
                  height="10"
                  fill="#007A99"
                  rx="2"
                />
                <rect
                  x="35"
                  y="0"
                  width="30"
                  height="10"
                  fill="#009DBF"
                  rx="5"
                />
                <rect
                  x="42"
                  y="85"
                  width="16"
                  height="15"
                  fill="#FFCC00"
                  rx="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
