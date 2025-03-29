import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AB Pinturas e Serviços - Pintura Residencial e Comercial",
  description:
    "Serviços de pintura residencial e comercial, montagem e desmontagem de móveis, pequenos reparos e mais.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}



import './globals.css'