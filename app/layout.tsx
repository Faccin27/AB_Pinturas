import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AB Pinturas e Serviços - Pintura Residencial e Comercial",
  description:
    "Serviços de pintura residencial e comercial, montagem e desmontagem de móveis, pequenos reparos e mais.",
  openGraph: {
    title: "AB Pinturas e Serviços - Pintura Residencial e Comercial",
    description:
      "Serviços de pintura residencial e comercial, montagem e desmontagem de móveis, pequenos reparos e mais.",
    url: "https://ab-pinturas-3oua.vercel.app/",
    siteName: "AB-pinturas",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo ab-pinturas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Pinturas e Serviços",
    description:
      "Serviços de pintura residencial e comercial, montagem e desmontagem de móveis, pequenos reparos e mais.",
    images: ["/images/logo.png"],
  },
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
