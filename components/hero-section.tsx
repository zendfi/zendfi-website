"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Powered by Solana</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent leading-tight text-balance">
                Payments
                <span className="block text-accent bg-clip-text bg-gradient-to-r from-primary to-accent">
                without borders
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Accept crypto payments instantly with zero intermediaries. Built for developers, designed for scale.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-accent max-w-60 text-primary-foreground hover:bg-accent/90 hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto"
                >
                  Schedule a Demo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>

              <Link href="/docs">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border max-w-60 transition-all duration-300 hover:text-black bg-transparent cursor-pointer w-full sm:w-auto"
                >
                  View Docs
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              <div>
                <div className="text-2xl font-bold text-primary">2.5s</div>
                <p className="text-sm text-muted-foreground">Settlement time</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">$0</div>
                <p className="text-sm text-muted-foreground">Setup fees</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image with subtle floating effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center w-[600px] h-[600px]"
          >
              <Image src="/images/sol3.png" alt="solana1" fill priority />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
