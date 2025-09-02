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
  title: " Zendfi - Fast US/UK to Nigeria Transfers",
  description: "Send money from the US/UK to Nigeria in under 15 minutes at transparent rates. Fast, affordable transfers for individuals and businesses.",
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
      </head>
      <body className={`font-sans ${jakartaSans.variable} ${jakartaSansBold.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
