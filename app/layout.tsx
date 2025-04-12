import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AB Pinturas e Serviços - Pintura Residencial e Comercial em Porto",
  description:
    "AB Pinturas oferece serviços de pintura residencial e comercial em Porto, Portugal. Também realizamos montagem e desmontagem de móveis, pequenos reparos e muito mais.",
  keywords: [
    "pintura em Porto",
    "pintor residencial",
    "pintor comercial",
    "pintura de imóveis",
    "serviços em Portugal",
    "pintura em apartamentos",
    "montagem de móveis Porto",
    "reparos residenciais",
    "pintores profissionais"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "AB Pinturas e Serviços - Pintura em Porto e Região",
    description:
      "Serviços profissionais de pintura residencial e comercial em Porto, incluindo montagem de móveis e reparos.",
    url: "https://abpinturas.com.br/",
    siteName: "AB Pinturas",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo AB Pinturas",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Pinturas e Serviços - Porto",
    description:
      "Profissionais em pintura residencial e comercial em Porto. Qualidade e agilidade em cada serviço.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://abpinturas.com.br"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
