"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in-up animate-delay-100">
              <span className="mr-2"></span>
              Zendfi
              <span className="ml-2 px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-full">BETA</span>
            </div>
            <div className="space-y-4 animate-fade-in-up animate-delay-200">
              <h1 className="font-heading text-6xl lg:text-8xl font-bold text-foreground leading-tight text-balance">
                {"Say hello to "}
                <span className="text-accent">frictionless</span>
                {" international transfers"}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Send money from the US/UK to Nigeria in under 15 minutes at 1.5% — powered by instant banking and stablecoin technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Join The Waitlist
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-border bg-transparent hover:scale-105 transition-all duration-300"
              >
                Watch Demo
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-in-right animate-delay-400">
            <div className="relative w-full h-[650px] flex items-center justify-center">
              <Image
                src="/images/globe-payments.png"
                alt="Global payment network illustration showing Earth with credit cards connected by payment flows"
                width={1000}
                height={1000}
                sizes="(max-width: 768px) 500px, (max-width: 1024px) 650px, 1000px"
                className="object-contain hover:scale-105 transition-transform duration-500"
                priority
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
