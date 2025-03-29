import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="AB Pinturas e Serviços"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <span className="font-bold text-xl">AB Pinturas</span>
            </Link>
            <p className="text-white/80 mb-4">
              Serviços de qualidade em pintura residencial, comercial e montagem
              de móveis.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://faccindev.pro"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://faccindev.pro"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://faccindev.pro"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Pintura Residencial
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Pintura Comercial
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Montagem de Móveis
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Desmontagem de Móveis
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Pequenos Reparos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#início"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#serviços"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#galeria"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/80" />
                <a href="tel:+5549999215720">
                  <span>935 986 208</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/80" />
                <a href="mailto:gfaccin27@gmail.com">
                  <span>contato@abpinturas.pt</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} AB Pinturas e Serviços. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
