"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const partners = [
  {
    name: "Unit",
    description: "US banking partner",
    logo: "/images/partners/unit.svg", // Placeholder path
    category: "Banking"
  },
  {
    name: "Circle",
    description: "Institutional stablecoin provider",
    logo: "/images/partners/circle.png", // Placeholder path
    category: "Stablecoin"
  },
  {
    name: "Quidax",
    description: "SEC-licensed Nigerian exchange",
    logo: "/images/partners/quidax.png", // Placeholder path
    category: "Exchange"
  },
  {
    name: "Paystack",
    description: "Proven Nigerian payment rails",
    logo: "/images/partners/paystack.png", // Placeholder path
    category: "Payments"
  },
  {
    name: "Modulr",
    description: "UK banking partner",
    logo: "/images/partners/modulr.png", // Placeholder path
    category: "Banking"
  }
]

export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextPartner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
  }

  const prevPartner = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <div className="space-y-4">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Powered by trusted infrastructure providers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Zendfi is built on industry leaders to ensure secure, reliable, and compliant money transfers.
            </p>
          </div>

          {/* Interactive Partner Showcase */}
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border dark:border-slate-800"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Main Partner Display */}
              <div className="text-center space-y-8">
                <div className="relative">
                  {/* Partner Logo */}
                  <div className="w-72 h-36 mx-auto rounded-xl flex items-center justify-center bg-white dark:bg-slate-800 p-6">
                    <Image
                      src={partners[currentIndex].logo}
                      alt={`${partners[currentIndex].name} logo`}
                      width={240}
                      height={120}
                      className="object-contain max-w-full max-h-full"
                      quality={90}
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {partners[currentIndex].category}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {partners[currentIndex].name}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {partners[currentIndex].description}
                  </p>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={prevPartner}
                    className="h-10 w-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  >
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Progress Indicators */}
                  <div className="flex space-x-2">
                    {partners.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-8 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-accent' : 'bg-accent/20'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextPartner}
                    className="h-10 w-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  >
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* All Partners Grid */}
            <div className="mt-12">
              <h3 className="text-center text-lg font-semibold text-foreground mb-8">All Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {partners.map((partner, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`group p-4 rounded-xl border transition-all ${
                      index === currentIndex
                        ? 'border-accent bg-accent/5 shadow-md'
                        : 'border-border bg-white dark:bg-slate-900 dark:border-slate-800 hover:border-accent/50 hover:shadow-sm'
                    }`}
                  >
                    {/* Partner Logo */}
                    <div className="w-full h-16 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center mb-3 p-2">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={80}
                        height={40}
                        className="object-contain max-w-full max-h-full"
                        quality={90}
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {partner.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {partner.category}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
