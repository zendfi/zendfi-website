"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Personal",
    highlight: "Best for individuals & freelancers",
    price: "1.5%",
    description: "per transfer",
    limit: "Up to $25,000/month",
    features: [
      "Instant USD/GBP → NGN transfers",
      "Live rate preview",
      "Local bank delivery",
      "No hidden charges",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Business",
    highlight: "For SMEs & startups",
    price: "1.2%",
    description: "per transfer",
    limit: "Custom monthly limit",
    features: [
      "Bulk payments",
      "API integration",
      "Multi-user dashboard",
      "Priority support",
    ],
    buttonText: "Contact Sales",
  },
  {
    name: "Enterprise",
    highlight: "For large organizations",
    price: "Custom",
    description: "Tailored pricing",
    limit: "Unlimited transfers",
    features: [
      "Dedicated account manager",
      "Treasury & reconciliation tools",
      "Advanced analytics",
      "Compliance & KYC support",
    ],
    buttonText: "Book a Demo",
  },
]

export function Pricing() {
  return (
    <section className="relative bg-background text-foreground">
        <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-5 py-24">
        <div className="max-w-3xl mx-auto space-y-8 mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees. No delays. Just fast, affordable transfers built for global businesses.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border border-border/40 rounded-2xl hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 ${
                plan.name === "Business" ? "bg-accent/5 border-accent/30" : "bg-card"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-accent">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.highlight}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-5xl font-bold text-primary">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <p className="text-sm font-medium mt-1 text-foreground/70">{plan.limit}</p>
                </div>

                <Button
                  variant={plan.name === "Business" ? "default" : "outline"}
                  size="lg"
                  className={`w-full mt-6 ${
                    plan.name === "Business"
                      ? "bg-accent text-primary-foreground hover:bg-accent/90"
                      : "hover:text-accent"
                  } transition-all duration-300`}
                >
                  {plan.buttonText}
                </Button>
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