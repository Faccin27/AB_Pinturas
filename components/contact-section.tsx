"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Mantém a mensagem de sucesso por 3 segundos antes de resetar
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Falha no envio...", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Solicite um orçamento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco para solicitar um orçamento sem compromisso
            ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-primary/5 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <a href="tel:351935986208">
                      <p className="text-muted-foreground hover:text-primary hover:font-bold transition-all duration-200">
                        935 986 208
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:gfaccin27@gmail.com">
                      <p className="text-muted-foreground hover:text-primary hover:font-bold transition-all duration-200">
                        contato@abpinturas.pt
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">
                      Atendemos em toda a região de porto e arredores
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <h4 className="font-medium mb-2">Horário de Atendimento</h4>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sexta: 8h às 18h
                </p>
                <p className="text-sm text-muted-foreground">
                  Sábado: 8h às 12h
                </p>
                <Button type="submit" className="w-full mt-2" size="lg">
                  <a href="tel:+351935986208" className="flex">
                    <Phone className="h-5 w-5 text-white mr-2" />
                    Chamar no whatsapp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    id="name"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    id="phone"
                    placeholder="Seu telefone"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Serviço de Interesse</Label>
                <select
                  name="subject"
                  id="service"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-select flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="pintura-residencial">
                    Pintura Residencial
                  </option>
                  <option value="pintura-comercial">Pintura Comercial</option>
                  <option value="montagem-moveis">Montagem de Móveis</option>
                  <option value="desmontagem-moveis">
                    Desmontagem de Móveis
                  </option>
                  <option value="pequenos-reparos">Pequenos Reparos</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva o serviço que precisa..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting
                  ? "Enviando..."
                  : isSubmitted
                  ? "Enviado com Sucesso!"
                  : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
