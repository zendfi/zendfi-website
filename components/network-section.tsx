import { Card, CardContent } from "@/components/ui/card"

export function NetworkSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <div className="space-y-4">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Money moves at the speed of the internet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Access our global network to send money to Nigeria in minutes, not days. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ZendFi delivers in under 15 minutes using instant payment rails and automated stablecoin conversion.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">Transparent Pricing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Starting at 1.5% total, no hidden fees, no surprise deductions. Up to 75% cheaper than traditional remittance services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">AI-Powered Intelligence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our smart routing automatically selects the fastest, cheapest path for each transfer while handling exceptions, compliance, and optimization behind the scenes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">Regulatory Compliant</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fully compliant with US GENIUS Act and Nigeria's ISA 2025 regulations. All transfers are monitored, secure, and auditable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
