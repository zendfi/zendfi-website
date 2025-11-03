"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScheduleDemoButton } from "./schedule-demo"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8 mb-10 sm:mb-16"
          >
            <h1 className="text-6xl bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-tight text-balance">
              <span className=" block">Crypto Payments</span>
              <span className="text-accent block">Without Limits</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light px-2">
              Accept USDC, USDT, or SOL and settle in seconds. No intermediaries. No fees. Just pure velocity on the blockchain.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-24"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <ScheduleDemoButton />
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/docs">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border transition-all duration-300 hover:text-black w-full sm:w-auto"
                >
                  View Docs
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-row justify-center sm:justify-between items-center gap-8 sm:gap-6 pt-8 border-t border-border text-center sm:text-left"
          >
            {[
              { label: "Settlement time", value: "2.5s" },
              { label: "Setup fees", value: "$0" },
              { label: "Uptime SLA", value: "99.9%" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
