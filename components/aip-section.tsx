"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShieldCheck, Cpu, KeyRound, Sparkles, Workflow, Target } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function AipSection() {
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Reveal cards
      gsap.from(".aip-step", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      })

      // Scroll-synced growing line
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      icon: Target,
      title: "User Generates Keypair",
      text: "On-device. Never leaves their possession — true user control.",
    },
    {
      icon: Sparkles,
      title: "Threshold Encryption",
      text: "The private key is split into encrypted shards across 100+ Lit nodes.",
    },
    {
      icon: Workflow,
      title: "Intent-Based Authorization",
      text: "You define spending limits, time windows, and merchant types.",
    },
    {
      icon: Cpu,
      title: "Autonomous Execution",
      text: "Agent proves conditions → shards release → tx signed → key destroyed.",
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20 lg:mb-28"
        >
          <div className="aip-title">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground dark:text-white mb-6">
              AIP-1: Autonomous, <br />Secure, Non-Custodial.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground dark:text-white/85 leading-relaxed">
              AIP-1 delivers the first payment flow where agents spend autonomously, users stay in control,
              and no one — not even us can access their keys. Threshold cryptography makes it possible.
            </p>
          </div>
        </motion.div>
        {/* TRILEMMA GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {[
            {
              icon: Cpu,
              title: "Autonomy",
              text: "Agents sign and execute payments without needing the user every time.",
            },
            {
              icon: ShieldCheck,
              title: "Security",
              text: "You define spending limits, revocation rules, and full audit trails.",
            },
            {
              icon: KeyRound,
              title: "Non-Custody",
              text: "No single party holds the key — not you, not us. Distributed by design.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="aip-card group p-8 lg:p-10 rounded-2xl bg-white/10 dark:bg-transparent border border-accent hover:bg-white/15 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="flex items-start gap-4">
                <item.icon className="h-10 w-10 lg:h-12 lg:w-12 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold dark:text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground dark:text-white/75 text-sm lg:text-base leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            How AIP-1 Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A distributed cryptographic pipeline that lets agents sign without ever revealing a key.
          </p>
        </div>
        <div
          ref={lineRef}
          className="
    absolute
    left-[3.5rem]   /* PERFECT CENTER for the 56px step icon */
    top-[200px]
    w-[3px]
    bg-accent/50
    dark:bg-accent/40
    rounded-full
    origin-top
  "
          style={{ height: "0%" }}
        />


        {/* STEPS */}
        <div className="flex flex-col gap-16">

          {steps.map((step, i) => (
            <div key={i} className="relative flex items-start gap-6 aip-step">

              {/* Step node */}
              <div
                className="
                  h-14 w-14 rounded-full flex items-center justify-center
                  bg-accent/10 dark:bg-accent/20 
                  border border-accent/40 
                  backdrop-blur-md 
                  shrink-0
                "
              >
                <step.icon className="h-7 w-7 text-accent" />
              </div>

              {/* Text */}
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm w-full">
                <h3 className="text-lg font-semibold text-foreground">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
