"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShieldCheck, Cpu, KeyRound, Sparkles, Workflow, Target, Lock, Zap, Network } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function AipSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const phoneImg = theme === "dark" ? "/images/aip_dark.png" : "/images/aip_light.png"

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on hero
      gsap.to(heroRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })


      // Steps reveal with rotation
      gsap.from(".step-item", {
        opacity: 0,
        x: -60,
        rotation: -5,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".steps-container",
          start: "top 70%",
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const trilemmaItems = [
    {
      icon: Zap,
      title: "Autonomy",
      text: "Agents execute transactions independently with zero manual intervention required.",
      gradient: "from-accent to-accent",
    },
    {
      icon: Lock,
      title: "Security",
      text: "Military-grade encryption with granular spending controls and real-time audit logs.",
      gradient: "from-accent to-accent",
    },
    {
      icon: Network,
      title: "Non-Custody",
      text: "Threshold cryptography across 100+ nodes ensures no single point of failure.",
      gradient: "from-accent to-accent",
    },
  ]

  const steps = [
    {
      icon: Target,
      title: "Keypair Generation",
      text: "Create your cryptographic identity on-device with military-grade entropy.",
      color: "bg-gradient-to-br from-accent to-accent",
    },
    {
      icon: Sparkles,
      title: "Shard Distribution",
      text: "Private key fragments encrypted and distributed across decentralized network.",
      color: "bg-gradient-to-br from-accent to-accent",
    },
    {
      icon: Workflow,
      title: "Policy Definition",
      text: "Set spending limits, time windows, merchant whitelist, and emergency controls.",
      color: "bg-gradient-to-br from-accent to-accent",
    },
    {
      icon: Cpu,
      title: "Autonomous Signing",
      text: "Shards recombine in secure enclaves, sign transaction, then instantly self-destruct.",
      color: "bg-gradient-to-br from-accent to-accent",
    },
  ]

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
    
      {/* Hero Section */}
      <div ref={heroRef} className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center relative"
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <span className="text-sm font-medium text-accent">Introducing AIP-1 Protocol</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6">
            <span className="dark:text-white text-gray-900 bg-gradient-to-r">
              The Future of
            </span>
            <br />
            <span className="text-foreground dark:text-white">Agent Payments</span>
          </h1>

          <p className="text-xl text-muted-foreground dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
          AIP-1 allows you build the agents that can spend autonomously, your users stay in control, and non one, not even us can access their keys. Threshold cryptography makes this possible!
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trilemma Cards with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch mb-40">
          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="trilemma-grid space-y-6 flex flex-col"
          >
            {trilemmaItems.map((item, i) => (
              <motion.div
                key={i}
                className="trilemma-card group relative overflow-hidden rounded-3xl p-8 bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5`} />
                </div>

                <div className="relative flex items-start gap-5">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-white/70 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center items-center h-full self-stretch"
          >
            <div className="relative w-full max-w-[500px] h-full">
              <Image
                src={phoneImg}
                alt="AIP-1 Demo"
                fill
                className="object-contain drop-shadow-2xl filter hue-rotate-[20deg] dark:hue-rotate-[23deg] brightness-110"
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </motion.div>
        </div>

        {/* How It Works - Horizontal Timeline */}
        <div className="steps-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground dark:text-white/70 max-w-2xl mx-auto">
              Four steps to cryptographic perfection. Your agent signs, you stay sovereign.
            </p>
          </motion.div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="step-item relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-full p-8 rounded-3xl bg-card border border-border overflow-hidden hover:border-accent/50 transition-all duration-500">
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl font-black text-accent">{i + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70 leading-relaxed">
                    {step.text}
                  </p>

                  {/* Hover gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 ${step.color} opacity-5`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}