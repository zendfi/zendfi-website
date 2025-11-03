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
      title: "Initialize Transaction",
      description: "Use our SDKs or REST API to create your first payment transaction",
      icon: Zap,
      gradient: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500"
    },
    {
      number: "04",
      title: "Process Payment",
      description: "Send and receive funds globally with our secure infrastructure",
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
      title: "Fast Integration",
      description: "Get up and running in minutes with our comprehensive SDKs, REST APIs, and detailed documentation",
      gradient: "from-violet-500/10 to-purple-500/10"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Send and receive payments in 150+ countries with competitive exchange rates and instant settlement",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime SLA, compliance, and instant transaction finality",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
  ]

  const useCases = [
    {
      title: "Cross-Border Payroll",
      description: "Pay employees and contractors worldwide in their local currency with minimal fees",
      icon: Globe,
      color: "text-violet-500"
    },
    {
      title: "Merchant Checkout",
      description: "Accept crypto-backed payments in your e-commerce platform seamlessly",
      icon: Zap,
      color: "text-blue-500"
    },
    {
      title: "P2P Transfers",
      description: "Enable peer-to-peer payments with instant settlement and low costs",
      icon: ArrowRight,
      color: "text-green-500"
    },
    {
      title: "Subscription Billing",
      description: "Automate recurring payments for SaaS and subscription services",
      icon: Clock,
      color: "text-amber-500"
    },
    {
      title: "Marketplace Payouts",
      description: "Distribute earnings to sellers and creators instantly",
      icon: Layers,
      color: "text-pink-500"
    },
    {
      title: "Remittances",
      description: "Send money home with competitive rates and fast delivery",
      icon: ArrowRight,
      color: "text-purple-500"
    },
  ]

  const codeSnippet = `import { ZendFi } from '@zendfi/sdk';

const zendfi = new ZendFi({
  apiKey: 'your_api_key'
});

// Create a payment
const payment = await zendfi.payments.create({
  amount: 100,
  currency: 'USD',
  recipient: 'wallet_address'
});

console.log(payment.status);`

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Build Global
              </span>
              <br />
              <span className="bg-accent bg-clip-text text-transparent">
                Payment Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              ZendFi provides powerful APIs and SDKs that let you send and receive crypto-backed fiat payments globally in under{" "}
              <span className="text-accent font-semibold">15 minutes</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              <Link href="/docs" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 w-full sm:w-auto group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/docs/api" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 text-accent hover:text-accent w-full sm:w-auto"
                >
                  View API Docs
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 mt-10 sm:mt-12 pt-8 border-t border-border/50 text-center sm:text-left">
              {[
                { value: "<15min", label: "Integration" },
                { value: "150+", label: "Countries" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">
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
            className="relative mt-12 lg:mt-0"
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
              <pre className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed overflow-x-auto max-h-[400px] md:max-h-[500px]">
                <code>{codeSnippet}</code>
              </pre>

              {/* Copy Button */}
              <button className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group">
                <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </button>

              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl opacity-20 blur-xl -z-10" />
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
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`p-8 h-full  border border-border/50 hover:border-border transition-all`}>
                    <div className="w-14 h-14 rounded-2xl bg-accent/70 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
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
                  <Card className="p-6 h-full bg-background border border-border/50 hover:border-violet-500/30 hover:shadow-lg transition-all group">
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