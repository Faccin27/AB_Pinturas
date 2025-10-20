import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renobric - Remodelações e Pinturas em Geral no Porto, Portugal",
  description:
    "A Renobric é especialista em remodelações, pinturas e serviços gerais no Porto. Oferecemos soluções completas para residências, escritórios e espaços comerciais, com qualidade e confiança.",
  keywords: [
    "remodelações Porto",
    "pintura em Porto",
    "pintor profissional",
    "serviços de remodelação",
    "pintura de interiores",
    "pintura residencial",
    "pintura comercial",
    "reformas em Porto",
    "serviços gerais Porto",
    "pintores no Porto"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Renobric - Remodelações e Pinturas em Geral no Porto",
    description:
      "Serviços profissionais de remodelação, pintura e manutenção no Porto. Soluções completas para casas, empresas e condomínios.",
    url: "https://renobric.pt/",
    siteName: "Renobric",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Renobric",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renobric - Remodelações e Pinturas no Porto",
    description:
      "A Renobric oferece serviços de pintura, remodelações e manutenção em todo o Porto. Qualidade, confiança e excelência em cada projeto.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://renobric.pt/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.className}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VS21Q1E78P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VS21Q1E78P');
          `}
        </Script>
      </body>
    </html>
  );
}
