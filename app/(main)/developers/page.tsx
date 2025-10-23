"use client"
import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Globe, Lock, Code2, Webhook } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"

export default function DevelopersPage() {
  const steps = [
    {
      number: "1",
      title: "Create a Developer Account",
      description: "Sign up for a ZendFi developer account and access your dashboard",
      icon: Lock,
    },
    {
      number: "2",
      title: "Generate Your API Key",
      description: "Get your unique API key from the dashboard settings",
      icon: Code2,
    },
    {
      number: "3",
      title: "Initialize a Transaction",
      description: "Use our SDKs or REST API to create your first transaction",
      icon: Zap,
    },
    {
      number: "4",
      title: "Send Funds",
      description: "Process payments globally with our secure infrastructure",
      icon: Globe,
    },
    {
      number: "5",
      title: "Receive Webhooks",
      description: "Get real-time updates on transaction status via webhooks",
      icon: Webhook,
    },
  ]

  const useCases = [
    {
      title: "Cross-Border Payroll",
      description: "Pay employees and contractors worldwide in their local currency with minimal fees",
    },
    {
      title: "Merchant Checkout",
      description: "Accept crypto-backed payments in your e-commerce platform seamlessly",
    },
    {
      title: "P2P Transfers",
      description: "Enable peer-to-peer payments with instant settlement and low costs",
    },
    {
      title: "Subscription Billing",
      description: "Automate recurring payments for SaaS and subscription services",
    },
    {
      title: "Marketplace Payouts",
      description: "Distribute earnings to sellers and creators instantly",
    },
    {
      title: "Remittances",
      description: "Send money home with competitive rates and fast delivery",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Text Section */}
        <motion.div
          className="text-center lg:text-left max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Build Global Payment Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
            ZendFi provides APIs and SDKs that let you send and receive crypto-backed fiat payments globally in under{" "}
            <span className="text-accent font-medium">15 minutes</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/docs">
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white transition-all">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/docs/api">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-accent/30 text-accent hover:text-accent/90 transition-all"
              >
                View API Docs
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/api.png"
            alt="ZendFi API Illustration"
            width={500}
            height={500}
            className="w-[300px] md:w-[400px] lg:w-[500px] h-auto"
          />
        </motion.div>
      </section>

      {/* What is ZendFi */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">What is ZendFi?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-background border border-border">
              <Image src={"/images/api-image1.png"} alt="api-image1.png" width={50} height={50} />
              <h3 className="font-semibold text-foreground mb-3 text-lg">Fast Integration</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Get up and running in minutes with our comprehensive SDKs and REST APIs
              </p>
            </Card>
            <Card className="p-6 bg-background border border-border">
              <Image src={"/images/api-image2.png"} alt="api-image2.png" width={50} height={50} />
              <h3 className="font-semibold text-foreground mb-3 text-lg">Global Coverage</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Send and receive payments in 150+ countries with competitive exchange rates
              </p>
            </Card>
            <Card className="p-6 bg-background border border-border">
              <Image src={"/images/api-image3.png"} alt="api-image3.png" width={50} height={50} />
              <h3 className="font-semibold text-foreground mb-3 text-lg">Secure & Reliable</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Enterprise-grade security with 99.9% uptime SLA and instant settlement
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 md:mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <Card className="p-6 bg-card border border-border h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-accent/60" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{step.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">{step.description}</p>
                    </div>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-accent/20 transform -translate-y-1/2" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 md:mb-16 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="p-6 bg-background border border-border hover:border-accent/30 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-3 text-lg">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-center mb-8 text-sm md:text-base">
              Choose your next step and start building with ZendFi today
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/docs" className="w-full">
                <Button className="w-full bg-accent/60 hover:bg-accent/70 text-white">Documentation</Button>
              </Link>
              <Link href="/docs/sdks" className="w-full">
                <Button className="w-full bg-accent/60 hover:bg-accent/70 text-white">SDKs & Libraries</Button>
              </Link>
              <Link href={"/signup"}>
                <Button className="w-full bg-accent/60 hover:bg-accent/70 text-white">Get API Key</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
