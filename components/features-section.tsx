export function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "83% Lower Fees",
      description: "Cut costs from 2.9% to 0.5% with zero chargebacks. Keep more revenue with final transactions.",
      highlight: "83%"
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Settlement",
      description: "Funds hit your wallet in 400ms. No more waiting days for settlements or dealing with rolling reserves.",
      highlight: "400ms"
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "10-Minute Setup",
      description: "Simple REST API integration. Get production-ready Solana payments running in minutes, not weeks.",
      highlight: "10 min"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Enterprise Solana Payments
            <span className="block text-accent">Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The payment infrastructure that eliminates the need for a payment team.
            <span className="font-semibold text-foreground"> Accept crypto payments in minutes, not months.</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/5 group-hover:-translate-y-1">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    {feature.icon}
                  </div>

                  {/* Title with highlight */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                
                </div>
 </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Ready to get started? Integration takes just 10 minutes
          </div>
        </div>
      </div>
    </section>
  )
}