"use client"

import { CreditCard, Wallet, Globe, PiggyBank, Coins } from "lucide-react"

const partners = [
  { name: "PayStack", icon: CreditCard },
  { name: "Flutterwave", icon: Wallet },
  { name: "Solana", icon: Globe },
  { name: "PiggyVest", icon: PiggyBank },
  { name: "Cowrywise", icon: Coins },
]

export function PartnersSection() {
  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground/60 mb-6 sm:mb-8">
          Trusted by top Web3 and Fintech leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {partners.map((partner) => {
            const Icon = partner.icon
            return (
              <div
                key={partner.name}
                className="flex items-center gap-2 text-muted-foreground/50 select-none"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                <span className="text-sm sm:text-base font-semibold tracking-tight">
                  {partner.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
