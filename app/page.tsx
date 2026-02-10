import { AipSection } from "@/components/aip-section"
import { DevSection } from "@/components/dev-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { UseCasesSlider } from "@/components/use-cases-slider"
import { Suspense, lazy } from "react"

const TestimonialSection = lazy(() =>
  import("@/components/testimonial-section").then((m) => ({ default: m.TestimonialSection })),
)
const FeaturesSection = lazy(() =>
  import("@/components/features-section").then((m) => ({ default: m.FeaturesSection })),
)
const StatisticsSection = lazy(() =>
  import("@/components/statistics-section").then((m) => ({ default: m.StatisticsSection })),
)
const NetworkSection = lazy(() => import("@/components/network-section").then((m) => ({ default: m.NetworkSection })))
const SecuritySection = lazy(() => import("@/components/security-section").then((m) => ({ default: m.SecuritySection })))
const PartnersSection = lazy(() => import("@/components/partners-section").then((m) => ({ default: m.PartnersSection })))
const CTASection = lazy(() => import("@/components/cta-section").then((m) => ({ default: m.CTASection })))
const Footer = lazy(() => import("@/components/footer").then((m) => ({ default: m.Footer })))

function SectionSkeleton() {
  return <div className="h-96 bg-muted/20 animate-pulse rounded-lg mx-4 my-8" />
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ZendFi",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Cross-platform",
    "url": "https://zendfi.tech",
    "logo": "https://zendfi.tech/images/logo.png",
    "description": "The crypto payment SDK developers actually want to use. Accept USDC, USDT, and SOL payments in seven lines of code with Stripe-level DX and 0.6% all-inclusive fees.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "49",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "Developer Plan",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free forever - Unlimited test payments with full API access"
        },
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "price": "0",
          "priceCurrency": "USD",
          "description": "0.6% per transaction - Up to $10K/month"
        },
        {
          "@type": "Offer",
          "name": "Growth Plan",
          "price": "49",
          "priceCurrency": "USD",
          "description": "$49/mo + 0.6% per transaction - $10K-$100K/month"
        },
        {
          "@type": "Offer",
          "name": "Enterprise Plan",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Custom pricing - $100K+/month with volume discounts"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1"
    },
    "featureList": [
      "Payment Links & Invoices",
      "Recurring Subscriptions",
      "Escrow & Split Payments",
      "Buy Now Pay Later (BNPL)",
      "Hosted Checkout Pages",
      "20+ Webhook Events",
      "TypeScript/Python/Rust SDKs",
      "Non-custodial Wallets",
      "99.9% Uptime SLA",
      "< 400ms Settlement Time"
    ],
    "applicationSubCategory": "Payment Processing SDK",
    "softwareVersion": "1.0",
    "permissions": "API access for crypto payment processing",
    "screenshot": "https://zendfi.tech/images/dashboard-preview.png",
    "author": {
      "@type": "Organization",
      "name": "ZendFi"
    },
    "provider": {
      "@type": "Organization",
      "name": "ZendFi",
      "url": "https://zendfi.tech",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Developer Support",
        "email": "support@zendfi.tech",
        "availableLanguage": ["English"]
      }
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <div className="relative">
        <section className="manifesto-section zendfi-grid-pattern">
          <HeroSection />
        </section>
        <section className="manifesto-section">
          <Suspense fallback={<SectionSkeleton />}>
            <DevSection />
          </Suspense>
        </section>
        <section className="manifesto-section">
          <UseCasesSlider />
        </section>
        <section className="manifesto-section">
          <Suspense fallback={<SectionSkeleton />}>
            <FeaturesSection />
          </Suspense>
        </section>
        <section className="manifesto-section">
          <Suspense fallback={<SectionSkeleton />}>
            <NetworkSection />
          </Suspense>
        </section>
        <section className="manifesto-section">
          <Suspense fallback={<SectionSkeleton />}>
            <SecuritySection />
          </Suspense>
        </section>
        <section className="manifesto-section">
          <Suspense fallback={<SectionSkeleton />}>
            <CTASection />
          </Suspense>
        </section>
        <Suspense fallback={<SectionSkeleton />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  )
}
