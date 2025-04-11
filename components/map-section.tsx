"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      Carregando mapa...
    </div>
  ),
});

export function MapSection() {
  const latitude = 41.1579;
  const longitude = -8.6291;
  const address = "Porto, Portugal";

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

  return (
    <section id="localização" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossa Localização
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visite nossa loja física e conheça nossos serviços de perto. Estamos
            localizados em:
          </p>
          <p className="font-medium text-lg mt-2 flex items-center justify-center gap-2">
            <MapPin className="text-primary h-5 w-5" />
            {address}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mapa  */}
          <div className="md:col-span-2">
            <div className="h-[500px] w-full rounded-xl shadow-lg overflow-hidden border border-border">
              <MapComponent
                latitude={latitude}
                longitude={longitude}
                address={address}
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Horário de Funcionamento
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-medium">8h às 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium">8h às 12h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium">Fechado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-4">Contato</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">Telefone:</span>
                    <span className="font-medium">935 986 208</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">Email:</span>
                    <span className="font-medium">Abpinturasportugal@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  onClick={openGoogleMaps}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <MapPin className="h-5 w-5" />
                  Ver no google maps
                </Button>
                <Button
                  onClick={getDirections}
                  className="w-full justify-start gap-2"
                >
                  <Navigation className="h-5 w-5" />
                  Como chegar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
