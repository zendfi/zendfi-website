"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function StatisticsSection() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/zendfiworld.png"
              alt="Solana2"
              width={500}
              height={500}
              className="mx-auto"
            />
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold text-accent mb-6 text-balance">
              Built on proven technology, designed for the future
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
            ZendFi provides a ready-to-use Solana payment infrastructure that lets merchants accept crypto payments in minutes. Built on secure banking and blockchain technology, it delivers fast, low-cost transactions for global builders, especially across Africa</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
