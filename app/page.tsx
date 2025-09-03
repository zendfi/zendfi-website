import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
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
const FAQSection = lazy(() => import("@/components/faq-section").then((m) => ({ default: m.FAQSection })))
const CTASection = lazy(() => import("@/components/cta-section").then((m) => ({ default: m.CTASection })))
const Footer = lazy(() => import("@/components/footer").then((m) => ({ default: m.Footer })))

function SectionSkeleton() {
  return <div className="h-96 bg-muted/20 animate-pulse rounded-lg mx-4 my-8" />
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Zendfi",
    "url": "https://zendfi.tech",
    "logo": "https://zendfi.tech/images/logo.png",
    "description": "Fast, secure money transfers from the US/UK to Nigeria in under 15 minutes at transparent rates.",
    "serviceType": "Money Transfer Service",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country", 
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Nigeria"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Money Transfer Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International Money Transfer",
            "description": "Fast transfers from US/UK to Nigeria"
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <div className="pt-16">
        <HeroSection />
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <StatisticsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <NetworkSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <SecuritySection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <PartnersSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CTASection />
        </Suspense>
      </div>
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </main>
  )
}
