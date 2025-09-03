import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Everyone deserves access to a seamless experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Built for individuals, businesses, and Nigerian SMEs who need reliable transfers.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-lg font-semibold text-foreground">For Businesses</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pay remote teams, suppliers, and partners in Nigeria with automated payroll, real-time tracking, and built-in compliance, all at 75% less cost than traditional banking.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-lg font-semibold text-foreground">For Individuals</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Support family in Nigeria with transfers that arrive in minutes, not hours. Send from any US bank account with transparent pricing and real-time updates.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-lg font-semibold text-foreground">For Nigerian SMEs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Receive payments from US customers in minutes instead of weeks. Generate payment links, track invoices, and convert to Naira automatically.
                </p>
              </div>
            </CardContent>
          </Card>


        </div>
      </div>
    </section>
  )
}
