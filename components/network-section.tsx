"use client"

import { motion } from "framer-motion"
import { Code, Globe, Shield, Zap, Wallet, Webhook } from "lucide-react"

export function NetworkSection() {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-accent" />,
      title: "Developer-First API",
      desc: `Accept crypto payments in just a few lines of code with our simple, production-ready API.`,
    },
    {
      icon: <Wallet className="h-6 w-6 text-accent" />,
      title: "Hosted Checkout Pages",
      desc: `Simple, mobile-optimized payment pages with QR codes and wallet connection (Phantom, Solflare, Backpack).`
    },
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "Instant Settlements",
      desc: `Funds hit your wallet in seconds — no holds, no rolling reserves. Optional USDC→SOL conversion.`
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Enterprise-Grade Security",
      desc: `MPC (non-custodial walltet), Biometrics, and military-grade encryption.`
    },
    {
      icon: <Globe className="h-6 w-6 text-accent" />,
      title: "Advanced Payment Types",
      desc: `Payment links, invoices, subscriptions, split payments, escrow, and installment options all in one platform.`
    },
    {
      icon: <Webhook className="h-6 w-6 text-accent" />,
      title: "Reliable Webhooks",
      desc: `5 retry attempts, exponential backoff, dead-letter queue, and HMAC verification ensure every event is delivered.`
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Accept Payments
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Built for developers who want Stripe-level infrastructure with crypto's advantages.
          </p>
        </div>

        {/* Stripe-Style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="space-y-4 p-8">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}