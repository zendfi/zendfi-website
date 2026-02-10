"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Check, Minus, ArrowRight, Zap, Shield, CreditCard, HelpCircle } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects just getting started.",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    priceSuffix: "/month",
    features: [
      "0.6% transaction fee",
      "$10 one-time setup fee for live payments",
      "Standard payout speed (24h)",
      "Hosted checkout pages",
      "Email support",
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    popular: false,
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For growing businesses needing better rates and faster settlements.",
    monthlyPrice: "$10",
    yearlyPrice: "$8",
    priceSuffix: "/month",
    features: [
      "0.6% transaction fee",
      "$10 one-time setup fee for live payments",
      "Instant settlements (<400ms)",
      "Multi-currency support (USD, NGN)",
      "Advanced API access",
      "Priority 24/7 support",
      "Custom branding",
    ],
    buttonText: "Start Free Trial",
    buttonLink: "/signup",
    popular: true,
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large scale organizations and platforms.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    priceSuffix: "",
    features: [
      "Custom transaction fee",
      "Custome setup fee for live payments",
      "Volume-based discounts",
      "Dedicated account manager",
      "Custom integration support",
      "SLA & contract guarantees",
      "On-premise deployment options",
    ],
    buttonText: "Contact Sales",
    buttonLink: "mailto:sales@zendfi.tech",
    popular: false,
    highlighted: false,
  },
]

const comparisonRows = [
  { feature: "Transaction Fee", starter: "0.6%", pro: "0.6%", enterprise: "Custom", proHighlight: true },
  { feature: "One-Time Setup Fee", starter: "$10", pro: "$10", enterprise: "Custom", proHighlight: false },
  { feature: "Payout Speed", starter: "24 Hours", pro: "Instant (<400ms)", enterprise: "Instant", proHighlight: true },
  { feature: "Multi-Currency Support", starter: "SOL only", pro: "SOL, USDC, NGN", enterprise: "All supported + Custom", proHighlight: false },
  { feature: "API Rate Limits", starter: "100 req/min", pro: "1,000 req/min", enterprise: "Unlimited", proHighlight: false },
  { feature: "Webhooks", starter: true, pro: true, enterprise: true, proHighlight: false },
  { feature: "Advanced Fraud Detection", starter: false, pro: true, enterprise: true, proHighlight: false },
  { feature: "Team Members", starter: "1", pro: "Up to 10", enterprise: "Unlimited", proHighlight: false },
]

const faqs = [
  {
    icon: CreditCard,
    question: "How does on-ramping work?",
    answer:
      "We partner with local liquidity providers to allow your customers to pay in their local currency (like NGN) while you receive stablecoins or SOL. The conversion happens instantly at the point of sale.",
  },
  {
    icon: Zap,
    question: "What about off-ramping to my bank account?",
    answer:
      "For supported regions, you can link a bank account and schedule automatic withdrawals. We convert your crypto balance to fiat and settle it via local payment rails (e.g., NIBSS in Nigeria) usually within minutes.",
  },
  {
    icon: HelpCircle,
    question: "Do I pay Solana network fees?",
    answer:
      "On our Pro and Enterprise plans, we subsidize network fees (gas) for your customers, ensuring a truly gasless payment experience. On the Starter plan, standard Solana network fees apply, which are typically less than $0.001.",
  },
  {
    icon: Shield,
    question: "Is the platform custodial?",
    answer:
      "Zendfi is non-custodial by default. We provide MPC (Multi-Party Computation) wallet infrastructure where you hold one key share and we hold another. You always retain full ownership of your funds.",
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="relative bg-background text-foreground">
      <Header />

      {/* Hero */}
      <div className="relative pt-36 pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none opacity-30 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Scalable Pricing for{" "}
            <span className="text-accent">Global Growth.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Simple, transparent pricing that scales with your transaction volume. No hidden fees, no monthly minimums for starters.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center p-1 bg-muted/50 rounded-full mt-4 border border-border">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                billing === "monthly"
                  ? "bg-background text-accent shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                billing === "yearly"
                  ? "bg-background text-accent shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-20 -mt-16 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "bg-[#1e1529] dark:bg-[#251a33] border border-accent shadow-[0_0_100px_-20px_hsl(var(--accent)/0.3)] md:-translate-y-4"
                  : "bg-background/80 dark:bg-background/40 backdrop-blur-xl border border-border hover:border-accent/50 shadow-xl group"
              }`}
            >
              {/* Top accent line for non-highlighted cards */}
              {!plan.highlighted && (
                <div className="absolute top-0 left-0 w-full h-1 bg-border group-hover:bg-accent transition-colors" />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-gray-300" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                  {billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className={`${plan.highlighted ? "text-gray-400" : "text-muted-foreground"}`}>
                  {plan.priceSuffix}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-start gap-3 text-sm ${plan.highlighted ? "text-gray-200" : "text-muted-foreground"}`}>
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-accent" : "text-green-500"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={plan.buttonLink} className="w-full">
                <Button
                  size="lg"
                  className={`w-full font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-accent hover:bg-accent/80 text-white shadow-lg shadow-accent/25"
                      : "bg-transparent border border-border hover:border-accent hover:text-accent text-foreground"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-20 bg-muted/30 dark:bg-muted/10 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Detailed Comparison</h2>
            <p className="text-muted-foreground">See exactly what&apos;s included in each plan.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider w-1/3">
                    Features
                  </th>
                  <th className="py-4 px-6 text-lg font-bold text-foreground w-1/5 text-center">Starter</th>
                  <th className="py-4 px-6 text-lg font-bold text-accent w-1/5 text-center">Pro</th>
                  <th className="py-4 px-6 text-lg font-bold text-foreground w-1/5 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors">
                    <td className="py-5 px-6 font-medium text-foreground">{row.feature}</td>
                    {(["starter", "pro", "enterprise"] as const).map((tier) => {
                      const value = row[tier]
                      const isPro = tier === "pro"
                      return (
                        <td key={tier} className={`py-5 px-6 text-center ${isPro && row.proHighlight ? "text-accent font-semibold" : "text-muted-foreground"}`}>
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                            )
                          ) : (
                            value
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about payments on Solana.</p>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {faqs.map((faq, i) => {
              const FaqIcon = faq.icon
              return (
                <div
                  key={i}
                  className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6 sm:p-8 border border-border/50"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <FaqIcon className="w-5 h-5 text-accent flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative bg-accent/20 dark:bg-transparent p-12 md:p-16 text-center overflow-hidden">
          <div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-700 mb-6 tracking-tight">
                Ready to Scale?
              </h2>
              <p className="text-lg md:text-xl text-slate-700/80 mb-10 max-w-2xl mx-auto">
                Start accepting crypto payments globally with the infrastructure built for growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://dashboard.zendfi.tech/login">
                  <Button
                    size="lg"
                    className="h-14 px-10 bg-transparent border text-accent border-accent text-lg font-bold hover:bg-transparent"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="mailto:sales@zendfi.tech">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-10 border-white/20 bg-accent/80 hover:bg-accent/60 text-white text-lg font-bold backdrop-blur-sm"
                  >
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
      </div>

      <Footer />
    </section>
  )
}