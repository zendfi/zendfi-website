"use client"

import React from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { Code, Globe, Shield, Zap, Wallet, Webhook } from "lucide-react"
import Image from "next/image"

type TimelineNodeProps = {
  scrollYProgress: MotionValue<number>
  index: number
  total: number
}

function TimelineNode({ scrollYProgress, index, total }: TimelineNodeProps) {
  const nodeProgress = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0, 1]
  )
  
  const scale = useTransform(nodeProgress, [0, 0.5, 1], [0.8, 1.2, 1])
  const opacity = useTransform(nodeProgress, [0, 0.3, 1], [0.3, 1, 1])

  return (
    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <motion.div
        className="relative"
        style={{ scale, opacity }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-sm" />
        {/* Node circle */}
        <div className="relative w-4 h-4 rounded-full bg-accent border-2 border-background shadow-lg" />
        {/* Inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-background" />
        </div>
      </motion.div>
    </div>
  )
}

export function NetworkSection() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Calculate line height based on scroll progress (percentage string)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const features = [
    {
      icon: <Code className="h-6 w-6 text-accent" />,
      title: "Developer-First API",
      desc: `Accept crypto payments in just a few lines of code with our simple, production-ready API.`,
      image: "/images/developer_api.png",
    },
    {
      icon: <Wallet className="h-6 w-6 text-accent" />,
      title: "Hosted Checkout Pages",
      desc: `Simple, mobile-optimized payment pages with QR codes and wallet connection (Phantom, Solflare, Backpack).`,
      image: "/images/zendfi_checkout.png",
    },
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "Instant Settlements",
      desc: `Funds hit your wallet in seconds — no holds, no rolling reserves. Optional USDC→SOL conversion.`,
      image: "/images/instant_settlements.png",
    },
    // {
    //   icon: <Shield className="h-6 w-6 text-accent" />,
    //   title: "Enterprise-Grade Security",
    //   desc: `MPC (non-custodial wallet), Biometrics, and military-grade encryption.`,
    //   image: "/images/shield-security.png",
    // },
    {
      icon: <Globe className="h-6 w-6 text-accent" />,
      title: "Advanced Payment Types",
      desc: `Payment links, invoices, subscriptions, split payments, escrow, and installment options all in one platform.`,
      image: "/images/advanced2.png",
    },
    {
      icon: <Webhook className="h-6 w-6 text-accent" />,
      title: "Reliable Webhooks",
      desc: `5 retry attempts, exponential backoff, dead-letter queue, and HMAC verification ensure every event is delivered.`,
      image: "/images/reliable_webhooks.png",
    },
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Accept Payments
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Built for developers who want Stripe-level infrastructure with crypto's advantages.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Trunk - Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
            {/* Background line (full height, faint) */}
            <div className="absolute inset-0 bg-border/30" />
            
            {/* Animated progress line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent/40 via-accent/60 to-accent/40 origin-top"
              style={{
                height: lineHeight,
              }}
            />
          </div>

          <div className="space-y-20 relative">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node - Connects to trunk */}
                  <TimelineNode 
                    scrollYProgress={scrollYProgress} 
                    index={index} 
                    total={features.length} 
                  />

                  {/* Image */}
                  <div className="w-full lg:w-1/2 order-1 relative z-0 rounded-2xl">
                    <div 
                      className="relative w-full aspect-[4/3] max-w-md mx-auto rounded-2xl select-none"
                      onDragStart={(e) => e.preventDefault()}
                      onContextMenu={(e) => e.preventDefault()}
                      style={{ 
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        WebkitUserDrag: 'none',
                        KhtmlUserDrag: 'none',
                        MozUserDrag: 'none',
                        OUserDrag: 'none',
                      } as React.CSSProperties}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="rounded-2xl object-contain pointer-events-none"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        priority={index === 0}
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`w-full lg:w-1/2 order-2 space-y-4 text-center relative z-0 ${
                    isEven ? "lg:text-left" : "lg:text-right"
                  }`}>
                    <div className={`flex items-center gap-3 ${
                      isEven ? "justify-center lg:justify-start" : "justify-center lg:justify-end"
                    }`}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        Feature {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}