"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-primary shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="AB Pinturas e Serviços"
            width={60}
            height={60}
            className="h-12 w-auto"
          />
          <span
            className={cn("font-bold text-xl transition-colors text-white")}
          >
            AB Pinturas
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {["Início", "Serviços", "Galeria", "Sobre", "Contato"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className={cn(
                "font-medium  hover:text-white/80 hover:font-bold text-white transition-all duration-200"
              )}
            >
              {item}
            </Link>
          ))}
          <Button
            size="sm"
            className="gap-2 hover:text-white/80 hover:font-bold text-white transition-all duration-200"
          >
            <Phone className="h-4 w-4 " />
            935 986 208
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            isScrolled
              ? "text-white hover:bg-primary-foreground/10"
              : "text-primary hover:bg-primary/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {["Início", "Serviços", "Galeria", "Sobre", "Contato"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    className="text-white font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
              <Button size="sm" className="gap-2 w-full">
                <Phone className="h-4 w-4" />
                935 986 208
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
