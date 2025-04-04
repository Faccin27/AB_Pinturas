"use client";

import { useState, useEffect } from "react";
import { Check, MapPin, Navigation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

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

const handleNavigate = () => {
  window.open(
    `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
    "_blank"
  );
};

const openGoogleMaps = () => {
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
    "_blank"
  );
};

const getDirections = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = `${position.coords.latitude},${position.coords.longitude}`;
        window.open(
          `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${latitude},${longitude}`,
          "_blank"
        );
      },
      () => {
        // Fallback se o usuário não permitir a geolocalização
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
          "_blank"
        );
      }
    );
  } else {
    // Fallback para navegadores que não suportam geolocalização
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
      "_blank"
    );
  }
};

const MapComponent = dynamic(() => import("./map-component-phone"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      Carregando mapa...
    </div>
  ),
});

const latitude = 41.1579;
const longitude = -8.6291;
const address = "Porto, Portugal";

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
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossa Localização
          </h2>

          <p className="font-medium text-lg mt-2 flex items-center gap-2">
            <MapPin className="text-primary h-5 w-5" />
            {address}
          </p>
        </div>

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
              <Button onClick={getDirections} size="lg" className="gap-2">
                <Navigation className="h-5 w-5" />
                Como chegar
              </Button>

              <Button
                onClick={openGoogleMaps}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <MapPin className="h-5 w-5" />
                Ver no google maps
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
            <div className="relative mx-auto  max-w-[400px]">
              {/* FRAME FILHO DA PUTA NÃO MECHER NESSA PIROCA */}
              <div className="absolute inset-0 bg-primary/20 rounded-[40px] transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary/30 rounded-[40px] transform -rotate-3"></div>

              <div className="relative bg-white rounded-[30px] overflow-hidden border-8 border-gray-800 shadow-2xl">
                {/* Map image with  region */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10"></div>

                  {/* Map container with aspect ratio */}
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <MapComponent
                      latitude={latitude}
                      longitude={longitude}
                      address={address}
                    />

                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-70 blur-md"></div>
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full opacity-70 blur-md"></div>
                  </div>
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
