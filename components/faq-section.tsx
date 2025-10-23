"use client"

import { useState } from "react"
import { ChevronDown, Mail } from "lucide-react";
import Link from "next/link"

const faqs = [
  {
    question: "What is ZendFi?",
    answer:
      "ZendFi is a next-generation fintech platform built on blockchain and banking infrastructure, enabling fast, low-cost international money transfers. It bridges traditional finance and crypto to make global payments seamless and borderless.",
  },
  {
    question: "Who is ZendFi for?",
    answer:
      "ZendFi is designed for individuals, freelancers, and businesses that need reliable, instant cross-border payments especially between Africa and the rest of the world.",
  },
  {
    question: "How does ZendFi work?",
    answer:
      "ZendFi uses secure digital payment rails to move money through cryptocurrency across borders in minutes. We handle the conversion in SOL, USDC and USDT based on your preference.",
  },
  {
    question: "What makes ZendFi different?",
    answer:
      "ZendFi combines speed, simplicity, and scalability. Unlike traditional remittance services, ZendFi's infrastructure is built for real-time settlements, lower fees, and a developer-friendly system for easy integration all powered by the Solana blockchain.",
  },
  {
    question: "Is ZendFi safe?",
    answer:
      "Absolutely. ZendFi operates with strict compliance and security standards, partnering with trusted global payment providers and regulated institutions to ensure every transaction is secure.",
  },
  {
    question: "What does ZendFi cost?",
    answer:
      "ZendFi keeps fees transparent and affordable - no hidden charges, just straightforward pricing designed to save you money on every transaction.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background to-accent/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground my-6 leading-tight">
            Got Questions?
            <span className="block text-accent">We've Got Answers</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about ZendFi's payment infrastructure and how it can transform your business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left transition-all duration-200 ease-out"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-all duration-200 ease-out flex-shrink-0 ${
                    openIndex === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-250 ease-out overflow-hidden ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 pr-8 transform transition-transform duration-150 ease-out">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      

        {/* Contact Support Section */}
        <div
          className="mt-16 text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of ZendFi's payment infrastructure.
            </p>

            <Link href={"mailto:help@zendfi.tech"}>
              <div
               
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium hover:bg-accent/20 transition-colors duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>support@zendfi.tech</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
