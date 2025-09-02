export function PartnersSection() {
  const partners = [
    { name: "TechFlow", logo: "TF" },
    { name: "GlobalPay", logo: "GP" },
    { name: "FinanceHub", logo: "FH" },
    { name: "PayStream", logo: "PS" },
    { name: "MoneyBridge", logo: "MB" },
    { name: "SwiftTrans", logo: "ST" },
    { name: "CryptoLink", logo: "CL" },
    { name: "PayForward", logo: "PF" },
  ]

  const advisors = [
    { name: "Deutsche Bank", logo: "DB" },
    { name: "Goldman Sachs", logo: "GS" },
    { name: "JPMorgan", logo: "JP" },
    { name: "Morgan Stanley", logo: "MS" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-8">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{partner.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-8">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Advisors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-2xl mx-auto">
            {advisors.map((advisor, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="h-12 w-20 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{advisor.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
