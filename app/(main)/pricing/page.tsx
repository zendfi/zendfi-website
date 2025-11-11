"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Developer",
    highlight: "Free Forever",
    price: "$0",
    description: "Test mode - Build & experiment",
    limit: "Unlimited test payments",
    features: [
      "Full API access",
      "SDK, CLI & Templates",
      "3 production payment links",
      "Community support",
      "Solana devnet (free)",
    ],
    buttonText: "Start Building",
    buttonLink: "/signup",
    popular: false,
  },
  {
    name: "Starter",
    highlight: "For indie hackers & startups",
    price: "$0/mo",
    description: "+ 0.6% per transaction",
    limit: "Up to $10K/month",
    features: [
      "Everything in Developer",
      "Unlimited production payments",
      "Webhooks (20+ events)",
      "Basic analytics",
      "Email support",
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    popular: false,
  },
  {
    name: "Growth",
    highlight: "Most Popular",
    price: "$49/mo",
    description: "+ 0.6% per transaction",
    limit: "$10K-$100K/month",
    features: [
      "Everything in Starter",
      "Lower fees (0.5% vs 0.6%)",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "Multi-merchant support",
    ],
    buttonText: "Contact Sales",
    buttonLink: "mailto:sales@zendfi.tech",
    popular: true,
  },
  {
    name: "Enterprise",
    highlight: "For serious scale",
    price: "Custom",
    description: "Volume-based pricing",
    limit: "$100K+/month",
    features: [
      "Everything in Growth",
      "Custom pricing (0.3-0.4%)",
      "Dedicated account manager",
      "99.9% uptime SLA",
      "Custom integrations",
      "Volume discounts",
      "Batch payouts",
    ],
    buttonText: "Contact Sales",
    buttonLink: "mailto:sales@zendfi.tech",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="relative bg-background text-foreground">
        <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center  py-24">
        <div className="max-w-3xl mx-auto space-y-8 mb-12 mt-15">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Start Free. Scale Smart.
          </h2>
          <p className="text-muted-foreground text-lg">
            No credit card required. No setup fees. No hidden charges. Just transparent pricing that grows with you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.popular 
                  ? "bg-accent/5 border-2 border-accent scale-105" 
                  : "border border-border/30 hover:border-accent/40 hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-accent">{plan.name}</CardTitle>
                <p className="text-xs text-muted-foreground">{plan.highlight}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  <p className="text-xs font-medium mt-2 text-foreground/70">{plan.limit}</p>
                </div>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.buttonLink}>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    className={`w-full ${
                      plan.popular
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "hover:text-accent"
                    } transition-all duration-300`}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">Chat with our team or view documentation to learn more.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent text-primary-foreground hover:bg-accent/90 transition-all">
            <Link href={"mailto:support@zendfi.tech"}>
              Contact Support
            </Link>
            </Button>
            <Button variant="outline" className="hover:text-accent transition-all">
                <Link href={"/docs"}>
              View Docs
                </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default Pricing