import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta-sans",
  weight: ["400", "500", "600", "700"],
  preload: true,
  fallback: ["system-ui", "arial"],
})

const jakartaSansBold = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta-sans-bold",
  weight: ["700", "800"],
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zendfi.tech'),
  title: {
    default: "Zendfi - The Future of Global Crypto Payments",
    template: "%s | Zendfi"
  },
  description: "Seamless cross-border payments powered by crypto. Fast, secure, and affordable infrastructure for businesses and individuals to send and receive money globally in minutes.",
  keywords: [
    "money transfer",
    "US to Nigeria",
    "UK to Nigeria", 
    "international transfers",
    "remittance",
    "send money Nigeria",
    "fast transfers",
    "Zendfi",
    "financial services",
    "cross-border payments"
  ],
  authors: [{ name: "Zendfi" }],
  creator: "Zendfi",
  publisher: "Zendfi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zendfi.tech",
    siteName: "Zendfi",
    title: "Zendfi — The Future of Global Crypto Payments",
    description: "Seamless cross-border payments powered by crypto. Fast, secure, and affordable infrastructure for businesses and individuals to send and receive money globally in minutes.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Zendfi - Say hello to frictionless international transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zendfi — The Future of Global Crypto Payments",
    description: "Seamless cross-border payments powered by crypto. Fast, secure, and affordable infrastructure for businesses and individuals to send and receive money globally in minutes.",
    images: ["/preview.png"],
    creator: "@ZendfiHQ",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://zendfi.tech",
  },
  generator: "Next.js",
  other: {
    "theme-color": "#6366f1",
    "color-scheme": "light dark",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans ${jakartaSans.variable} ${jakartaSansBold.variable}`}>
        {/* <Header /> */}
        <Suspense fallback={null}>{children}</Suspense>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  )
}
