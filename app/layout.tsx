import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WebFury - Création de landing pages en 48h à Marseille et Perpignan",
  description: "Agence de création de landing pages professionnelles à Marseille et Perpignan. Site web pro en 48h pour seulement 29,99€/mois. Conversion garantie.",
  keywords: "création site web, landing page, agence web Marseille, agence web Perpignan, site internet professionnel, site web 48h, création site pas cher, site web rapide",
  authors: [{ name: "WebFury", url: "https://webfury.fr" }],
  creator: "WebFury",
  publisher: "WebFury",
  category: "Création de sites web",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://webfury.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://webfury.fr",
    title: "WebFury - Création de landing pages en 48h",
    description: "Agence web à Marseille et Perpignan. Votre landing page professionnelle en 48h pour 29,99€/mois.",
    siteName: "WebFury",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebFury - Création de landing pages en 48h",
    description: "Votre landing page professionnelle en 48h pour 29,99€/mois.",
    creator: "@webfury",
  },
  generator: 'WebFury'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="FR-13" />
        <meta name="geo.placename" content="Marseille" />
        <meta name="geo.position" content="43.296482;5.369780" />
        <meta name="ICBM" content="43.296482, 5.369780" />
        <meta name="geo.region" content="FR-66" />
        <meta name="geo.placename" content="Perpignan" />
        <meta name="geo.position" content="42.688659;2.894833" />
        <meta name="ICBM" content="42.688659, 2.894833" />
        <link rel="icon" href="/icone.png" />
        <link rel="apple-touch-icon" href="/icone.png" />
        <link rel="canonical" href="https://webfury.fr" />
        
        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebDesignAgency",
              "name": "WebFury",
              "url": "https://webfury.fr",
              "logo": "https://webfury.fr/icone.png",
              "description": "Agence de création de landing pages professionnelles à Marseille et Perpignan. Site web pro en 48h pour seulement 29,99€/mois.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Marseille",
                  "addressRegion": "PACA",
                  "addressCountry": "FR"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Perpignan",
                  "addressRegion": "Occitanie",
                  "addressCountry": "FR"
                }
              ],
              "priceRange": "€€",
              "openingHours": "Lundi-Samedi 09:00-18:00",
              "telephone": "+33627521624",
              "email": "contact@webfury.fr",
              "sameAs": [
                "https://twitter.com/webfury",
                "https://discord.gg/JDMkBb9Ar5"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script dangerouslySetInnerHTML={{ 
          __html: `
            // Remove any browser extension attributes that might cause hydration errors
            document.addEventListener('DOMContentLoaded', () => {
              const elementsWithCzAttr = document.querySelectorAll('[cz-shortcut-listen]');
              elementsWithCzAttr.forEach(el => {
                el.removeAttribute('cz-shortcut-listen');
              });
            });
          `
        }} />
      </body>
    </html>
  )
}



