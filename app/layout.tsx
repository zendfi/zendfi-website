import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"  
import { QueryProvider } from "@/providers/query-provider"
import { SmoothScroll } from "@/components/smooth-scroll"
import CodeEnhancerWrapper from '@/components/code-enhancer-wrapper'

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
    default: "ZendFi | Seven lines of code. Boom. Payments live.",
    template: "%s | ZendFi"
  },
  description: "Complete crypto payment infrastructure with payments, subscriptions, escrows, installments, and invoices. Accept USDC, SOL, and USDT with MPC wallets or your own. Built for developers, trusted by businesses.",
  keywords: [
    "crypto payments API",
    "USDC payments",
    "Solana payments",
    "crypto subscriptions",
    "escrow payments",
    "crypto invoicing",
    "installment payments",
    "payment API",
    "MPC wallet",
    "passkey authentication",
    "cryptocurrency infrastructure",
    "blockchain payments",
    "web3 payments",
    "developer API",
    "payment gateway",
    "ZendFi"
  ],
  authors: [{ name: "ZendFi" }],
  creator: "ZendFi",
  publisher: "ZendFi",
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
    siteName: "ZendFi",
    title: "ZendFi | Seven lines of code. Boom. Payments live.",
    description: "Accept crypto payments with subscriptions, escrows, installments, and invoices. MPC wallets with passkey security. USDC, SOL, USDT. Developer-first API.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "ZendFi | Seven lines of code. Boom. Payments live.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZendFi | Seven lines of code. Boom. Payments live.",
    description: "Accept crypto payments with subscriptions, escrows, installments, and invoices. MPC wallets with passkey security. USDC, SOL, USDT. Developer-first API.",
    images: ["/preview.png"],
    creator: "@ZendfiHQ",
  },
  verification: {
    google: "your-google-verification-code",
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
        {/* Prism.js syntax highlighting */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-jsx.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-tsx.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" />
      </head>
      <body className={`font-sans ${jakartaSans.variable} ${jakartaSansBold.variable}`}>
        <SmoothScroll />
        <QueryProvider>
          <CodeEnhancerWrapper />
          <Suspense fallback={null}>{children}</Suspense>
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  )
}
