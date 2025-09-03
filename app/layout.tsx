import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

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
    default: "Zendfi - Fast US/UK to Nigeria Money Transfers",
    template: "%s | Zendfi"
  },
  description: "Send money from the US/UK to Nigeria in under 15 minutes at transparent rates. Fast, secure, and affordable international transfers for individuals and businesses.",
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
    title: "Zendfi - Fast US/UK to Nigeria Money Transfers",
    description: "Send money from the US/UK to Nigeria in under 15 minutes at transparent rates. Fast, secure, and affordable international transfers.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Zendfi - International Money Transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zendfi - Fast US/UK to Nigeria Money Transfers",
    description: "Send money from the US/UK to Nigeria in under 15 minutes at transparent rates. Fast, secure, and affordable international transfers.",
    images: ["/images/logo.png"],
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
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
