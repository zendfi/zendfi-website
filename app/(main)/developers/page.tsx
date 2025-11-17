"use client"

import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Zap,
  Globe,
  Lock,
  Code2,
  Webhook,
  Check,
  Copy,
  Terminal,
  BookOpen,
  Layers,
  Clock,
  Shield,
  Sparkles
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export default function DevelopersPage() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up for a ZendFi developer account and access your dashboard instantly",
      icon: Lock,
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-500"
    },
    {
      number: "02",
      title: "Generate API Key",
      description: "Get your unique API credentials from the dashboard in one click",
      icon: Code2,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      number: "03",
      title: "Create Payment",
      description: "Use our SDK or REST API to create crypto payments in just a few lines of code",
      icon: Zap,
      gradient: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500"
    },
    {
      number: "04",
      title: "Accept Payment",
      description: "Users pay via hosted checkout or wallet connect. Funds settle instantly to your wallet",
      icon: Globe,
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    },
    {
      number: "05",
      title: "Monitor Status",
      description: "Get real-time updates on transactions via webhooks and dashboard",
      icon: Webhook,
      gradient: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-500"
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "2-Minute Integration",
      description: "Get up and running in minutes with TypeScript/Python/Rust SDKs, comprehensive docs, and production templates",
      gradient: "from-violet-500/10 to-purple-500/10"
    },
    {
      icon: Globe,
      title: "Everything Built-In",
      description: "Payment links, invoices, subscriptions, escrows, webhooks—all the features you need without extra charges",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Shield,
      title: "Production-Ready",
      description: "Enterprise-grade security with 99.9% uptime SLA, non-custodial wallets, and instant settlements (<400ms)",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
  ]

  const useCases = [
    {
      title: "E-commerce Stores",
      description: "Accept crypto payments for digital products with instant settlements and zero chargebacks",
      icon: Globe,
      color: "text-violet-500"
    },
    {
      title: "SaaS Platforms",
      description: "Set up recurring billing in USDC/USDT with lower fees than traditional processors",
      icon: Zap,
      color: "text-blue-500"
    },
    {
      title: "Marketplaces",
      description: "Enable escrow payments with buyer/seller protection and automatic fund releases",
      icon: ArrowRight,
      color: "text-green-500"
    },
    {
      title: "Payment Links",
      description: "Create shareable payment links for freelancers, creators, and service providers",
      icon: Clock,
      color: "text-amber-500"
    },
    {
      title: "Split Payments",
      description: "Automatically distribute revenue across multiple wallets for teams and DAOs",
      icon: Layers,
      color: "text-pink-500"
    },
    {
      title: "Buy Now Pay Later",
      description: "Offer installment plans while receiving full payment upfront",
      icon: ArrowRight,
      color: "text-purple-500"
    },
  ]

  const codeSnippet = `import { zendfi } from '@zendfi/sdk';

// Create a payment (auto-configured from env)
const payment = await zendfi.createPayment({
  amount: 100,
  currency: 'USD',
  description: 'Premium subscription',
});

console.log(payment.checkout_url);`

  const [copied, setCopied] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 mt-10">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-violet-500/20 mb-5 sm:mb-6"
            >
              <Code2 className="w-4 h-4 text-violet-500" />
              <span className="text-xs sm:text-sm font-medium text-accent dark:text-violet-400">
                Developer Platform
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-balance mb-5 sm:mb-6">
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                Seven lines of code.
              </span>
              <br />
              <span className="bg-accent bg-clip-text text-transparent">
                Payments live.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              The crypto payment SDK developers actually want to use. 0.6% all-inclusive. <span className="text-accent font-bold">Gas Fees on us.</span> No blockchain degree required.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="w-full sm:w-auto">
                <Link href="/signup" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto"
                  >
                    Get Started Free
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="w-full sm:w-auto">
                <Link href="/docs" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-accent text-accent hover:bg-transparent font-semibold px-8 py-6 text-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    View Live Demo
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10 sm:mt-12 pt-8 border-t border-border/30 text-center sm:text-left">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "<400ms", label: "Settlement" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-12 lg:mt-0 min-w-0"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-6 shadow-2xl border border-slate-700/50 overflow-hidden">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-slate-400 font-mono">payment.js</span>
              </div>

              {/* Code */}
                <pre className="relative w-full max-w-full min-w-0 text-xs sm:text-sm text-slate-300 font-mono leading-relaxed overflow-x-auto max-h-[400px] md:max-h-[500px] pr-12 sm:pr-14">
                  <span className="font-mono text-xs">{codeSnippet}</span>
                </pre>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(codeSnippet)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2000)
                    } catch (e) {
                      /* ignore */
                    }
                  }}
                  aria-label="Copy code"
                  className="absolute top-3 right-3 sm:top-6 sm:right-6 p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 transition-colors group z-20 hidden sm:inline-flex"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-200 group-hover:text-white" />
                  )}
                </button>

            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Developers Choose ZendFi
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to build world-class payment experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-8 h-full bg-trnansparent border-none transition-all`}>
                    <div className="w-14 h-14 rounded-2xl bg-accent/70 flex items-center justify-center mb-1">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Step by Step */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Integration in 5 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Go from signup to your first transaction in minutes.
            </p>
          </motion.div>

          {/* Steps Timeline */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 relative">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLast = i === steps.length - 1
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary-foreground font-semibold shadow-sm mb-6 z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl border border-border flex items-center justify-center mb-5">
                    <Icon className={`w-7 h-7 text-accent`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Arrow (Desktop only) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute top-12 right-[-25px] w-8 h-8 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-border"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14m-7-7l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>




      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Built for Every Use Case
            </h2>
            <p className="text-xl text-muted-foreground">
              From startups to enterprises, ZendFi powers diverse payment workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <Card className="p-6 h-full bg-transparent border-none transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0 transition-transform">
                        <Icon className={`w-6 h-6 ${useCase.color}`} />
                      </div>
                      <h3 className="font-semibold text-foreground text-lg pt-2">
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl p-12 md:p-16 overflow-hidden">
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-slate-800 mb-10">
                  Join thousands of developers building the future of payments with ZendFi
                </p>

                <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <Link href="/docs">
                    <Button size="lg" variant="outline" className="w-full border-accent/30 text-accent hover:text-accent">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Documentation
                    </Button>
                  </Link>
                  <Link href="/docs/sdks">
                    <Button size="lg" variant="outline" className="w-full border-accent/30 text-accent hover:text-accent">
                      <Terminal className="w-4 h-4 mr-2" />
                      SDKs
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="lg" variant="outline" className="w-full border-accent/30 text-accent hover:text-accent">
                      <Code2 className="w-4 h-4 mr-2" />
                      Get API Key
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-800 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Free to start</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Live in 15 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}