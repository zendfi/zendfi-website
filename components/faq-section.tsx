"use client"

import { useState } from "react"
import { ChevronDown, Mail } from "lucide-react";
import Link from "next/link"

const faqs = [
  {
    question: "What is ZendFi?",
    answer:
      "ZendFi is a fullstack crypto payment infrastructure for developers. We provide APIs for payments, subscriptions, escrows, installments, and invoices on Solana. Accept USDC, SOL, and USDT with MPC wallets (passkey authentication) or your own wallet.",
  },
  {
    question: "Who is ZendFi for?",
    answer:
      "ZendFi is built for developers, SaaS companies, marketplaces, freelancers, and businesses that want to accept crypto payments. Whether you're building a subscription service, marketplace with escrow, or need to send invoices - we've got you covered.",
  },
  {
    question: "Do I need crypto wallets to get started?",
    answer:
      "No! With ZendFi's MPC wallets, customers just use Face ID or Touch ID - no wallet apps, seed phrases, or crypto knowledge needed. We handle everything behind the scenes. Customers/Payers click on a simple 'Pay' button and confirm the transfers in their wallets, we handle the blockchain complexity. It's as easy as Apple Pay, but with crypto.",
  },
  {
    question: "How long does integration take?",
    answer:
      "Most developers integrate ZendFi in under 30 minutes! Simply create a merchant account (2 min), get API keys (instant), make your first payment (5 min). Our SDKs for JavaScript/TypeScript and CLI tools make it even faster. Full documentation with code examples included.",
  },
  {
    question: "How does ZendFi work?",
    answer:
      "Integrate our API in minutes. Create a merchant account, get your API keys, and start accepting payments. We handle wallet generation (MPC with Face ID/Touch ID), payment processing, settlements, and webhooks. We help you setup non-custodial MPC wallets that can be secured using just their fingerprint - no seed phrases needed.",
  },
  {
    question: "What payment types does ZendFi support?",
    answer:
      "ZendFi supports one-time payments, recurring subscriptions (monthly/yearly), escrow transactions for marketplaces, installment plans (buy now pay later), professional invoices with line items, and payment links. All with optional automatic USDC settlement and real-time webhooks.",
  },
  {
    question: "Can I test without real money?",
    answer:
      "Yes! Every merchant account gets test mode API keys (zfi_test_...) and live mode keys (zfi_live_...). Test mode uses Solana devnet - create unlimited test payments without spending real money. Switch to live mode when ready with a single environment variable change.",
  },
  {
    question: "Is ZendFi safe and secure?",
    answer:
      "Absolutely. We use MPC (Multi-Party Computation) wallets with passkey authentication (Face ID/Touch ID), end-to-end encryption, and industry-standard security. All transactions are on-chain and verifiable. We're non-custodial - you always control your funds.",
  },
  {
    question: "What does ZendFi cost?",
    answer:
      "ZendFi is free to integrate - no setup fees or monthly charges. We only charge a small transaction fee when you get paid. Transparent pricing, no hidden costs. Check our documentation for current rates or contact us for enterprise pricing.",
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
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-8">{faq.question}</h3>
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
                  <p className="text-slate-600 dark:text-white/80 leading-relaxed">{faq.answer}</p>
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
              Our developer support team is here to help you integrate ZendFi's payment infrastructure.
            </p>

            <Link href={"mailto:support@zendfi.tech"}>
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
