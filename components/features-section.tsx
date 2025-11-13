import { DollarSign, Fuel } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "2-Minute Setup",
      description: "Run npx create-zendfi-app and get a production-ready payment system with checkout, webhooks, and dashboard. We timed it.",
      highlight: "2 min"
    },
    {
      icon: (<DollarSign className="h-6 w-6 text-accent"/>),
      title: "0.6% All-Inclusive",
      description: "Save up to 80% vs traditional processors. Zero hidden fees. Zero chargebacks. Zero surprises.",
      highlight: "Save 80%"
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Enterprise Features",
      description: "Subscriptions, escrows, installments, invoices, split payments—features Stripe charges extra for. All built-in.",
      highlight: "6+ Features"
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Non-Custodial Security",
      description: "MPC wallets secured by Face ID/Touch ID. You own your keys, always. We never hold your funds.",
      highlight: "Your Keys"
    },
    {
      icon: (<Fuel className="h-6 w-6 text-accent"/>),
      title: "Gasless Payments",
      description: "Your users just want to pay. They don't care about gas fees or native tokens. Neither should you. We handle it!",
      highlight: "Gas fees on us."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Stripe-Level DX",
      description: "TypeScript-first with full type safety. Webhook handlers for Next.js and Express. Test mode free forever. Built by devs, for devs.",
      highlight: "Dev First"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Everything Stripe Has.
            <span className="block text-accent">Plus Features They Don't.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Stripe-level developer experience with crypto-level economics.
            <span className="font-semibold text-foreground"> No compromises.</span>
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card - Minimal border, no background */}
              <div className="relative p-8 h-full transition-all duration-300 group-hover:-translate-y-1">

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 hidden lg:block">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Compare us to Stripe, Coinbase, or any payment processor
          </div>
        </div>
      </div>
    </section>
  )
}