"use client"

import { Check, X, Minus } from "lucide-react"

const comparisonData = [
  {
    category: "Pricing & Fees",
    items: [
      { feature: "Transaction Fee", zendfi: "0.6%", stripe: "2.9% + $0.30", coinbase: "1% + network fees" },
      { feature: "Monthly Fee", zendfi: "$0", stripe: "$0", coinbase: "$0" },
      { feature: "Setup Fee", zendfi: "$0", stripe: "$0", coinbase: "$0" },
      { feature: "Chargeback Fee", zendfi: "None (impossible)", stripe: "$15 per dispute", coinbase: "None" },
    ]
  },
  {
    category: "Developer Experience",
    items: [
      { feature: "Setup Time", zendfi: "2 minutes", stripe: "~1 hour", coinbase: "~2 hours" },
      { feature: "TypeScript SDK", zendfi: true, stripe: true, coinbase: false },
      { feature: "CLI Tools", zendfi: true, stripe: false, coinbase: false },
      { feature: "Production Templates", zendfi: "3 (Next.js, Express, SaaS)", stripe: "0", coinbase: "0" },
      { feature: "Test Mode", zendfi: "Free forever", stripe: "Free", coinbase: "Limited" },
    ]
  },
  {
    category: "Features",
    items: [
      { feature: "One-time Payments", zendfi: true, stripe: true, coinbase: true },
      { feature: "Subscriptions", zendfi: true, stripe: true, coinbase: false },
      { feature: "Escrow Payments", zendfi: true, stripe: false, coinbase: false },
      { feature: "Installment Plans (BNPL)", zendfi: true, stripe: "Paid add-on", coinbase: false },
      { feature: "Invoice Generation", zendfi: true, stripe: true, coinbase: false },
      { feature: "Split Payments", zendfi: true, stripe: "Limited", coinbase: false },
      { feature: "Payment Links", zendfi: true, stripe: true, coinbase: true },
    ]
  },
  {
    category: "Performance",
    items: [
      { feature: "Settlement Time", zendfi: "<400ms", stripe: "2-7 days", coinbase: "1-3 days" },
      { feature: "Uptime SLA", zendfi: "99.9%", stripe: "99.99%", coinbase: "99.5%" },
      { feature: "Webhook Events", zendfi: "20+", stripe: "30+", coinbase: "5" },
      { feature: "API Response Time", zendfi: "<100ms", stripe: "<200ms", coinbase: "<500ms" },
    ]
  },
  {
    category: "Security",
    items: [
      { feature: "Custody Model", zendfi: "Non-custodial (MPC)", stripe: "Custodial", coinbase: "Custodial" },
      { feature: "Biometric Auth", zendfi: "Face ID/Touch ID", stripe: "N/A", coinbase: "N/A" },
      { feature: "Key Ownership", zendfi: "You own keys", stripe: "N/A (fiat)", coinbase: "Coinbase holds" },
      { feature: "Encryption", zendfi: "Military-grade", stripe: "Enterprise-grade", coinbase: "Enterprise-grade" },
    ]
  },
]

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-red-500 mx-auto" />
    )
  }
  
  if (value === "N/A" || value.startsWith("Limited") || value.startsWith("Paid")) {
    return (
      <span className="text-muted-foreground text-sm">{value}</span>
    )
  }
  
  return <span className="font-medium">{value}</span>
}

export function ComparisonTable() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            How We Compare
            <span className="block text-accent">to the Competition</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Same features as Stripe. Better economics than everyone. No compromises.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto">
          {comparisonData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-accent/20">
                {category.category}
              </h3>

              {/* Table */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left p-4 font-semibold text-muted-foreground">Feature</th>
                        <th className="text-center p-4 font-bold text-accent bg-accent/5">
                          ZendFi
                          <div className="text-xs font-normal text-muted-foreground mt-1">You</div>
                        </th>
                        <th className="text-center p-4 font-semibold text-foreground">Stripe</th>
                        <th className="text-center p-4 font-semibold text-foreground">Coinbase Commerce</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, itemIndex) => (
                        <tr 
                          key={itemIndex} 
                          className="border-b border-border/30 last:border-0 hover:bg-accent/5 transition-colors"
                        >
                          <td className="p-4 text-foreground">{item.feature}</td>
                          <td className="p-4 text-center bg-accent/5 font-semibold text-accent">
                            <CellValue value={item.zendfi} />
                          </td>
                          <td className="p-4 text-center text-foreground">
                            <CellValue value={item.stripe} />
                          </td>
                          <td className="p-4 text-center text-foreground">
                            <CellValue value={item.coinbase} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4 p-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-background/50 rounded-lg p-4 border border-border/30">
                      <div className="font-semibold text-foreground mb-3">{item.feature}</div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">ZendFi</div>
                          <div className="text-accent font-semibold">
                            <CellValue value={item.zendfi} />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Stripe</div>
                          <div className="text-foreground">
                            <CellValue value={item.stripe} />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Coinbase</div>
                          <div className="text-foreground">
                            <CellValue value={item.coinbase} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to save 80% on payment fees?
          </p>
          <a href="/signup" className="inline-block">
            <button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
              Get Started Free
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
