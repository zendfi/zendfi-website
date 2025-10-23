"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
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
      desc: `JWT auth, RBAC, Redis rate limiting, AES-256 encryption, and signature replay protection out-of-the-box.`
    },
    {
      icon: <Globe className="h-6 w-6 text-accent" />,
      title: "Advanced Payment Types",
      desc: `Payment links, invoices, subscriptions, split payments, escrow, and installment options — all in one platform.`
    },
    {
      icon: <Webhook className="h-6 w-6 text-accent" />,
      title: "Reliable Webhooks",
      desc: `5 retry attempts, exponential backoff, dead-letter queue, and HMAC verification ensure every event is delivered.`
    },
  ]

  return (
    <section className="py-14 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Built for developers, merchants, and enterprises — ZendFi combines speed, security, and flexibility for seamless crypto payments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-border bg-card/70 backdrop-blur-md transition-all duration-300 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
