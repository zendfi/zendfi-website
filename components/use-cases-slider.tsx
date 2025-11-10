
"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ShoppingCart, Repeat, Shield, CreditCard, FileText, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Accept crypto for digital products with instant settlements and zero chargebacks.",
    example: "Selling courses, software, templates, digital downloads",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
    code: `const payment = await zendfi.payments.create({
  amount: 99_00, // $99
  currency: 'USDC',
  description: 'Premium Course'
});`
  },
  {
    icon: Repeat,
    title: "SaaS Platforms",
    description: "Recurring billing in USDC with lower fees than traditional subscription processors.",
    example: "Monthly/annual plans, metered billing, usage-based pricing",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
    code: `const subscription = await zendfi.subscriptions.create({
  amount: 29_99,
  interval: 'monthly',
  customer: 'cus_abc123'
});`
  },
  {
    icon: Shield,
    title: "Marketplaces",
    description: "Escrow payments with buyer/seller protection and configurable release conditions.",
    example: "Freelance platforms, NFT marketplaces, peer-to-peer trading",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500",
    code: `const escrow = await zendfi.escrows.create({
  amount: 500_00,
  seller: 'seller_xyz',
  releaseCondition: 'ManualApproval'
});`
  },
  {
    icon: CreditCard,
    title: "Buy Now, Pay Later",
    description: "Built-in installment plans for high-ticket items without third-party services.",
    example: "Split payments over 3, 6, or 12 months",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
    code: `const installment = await zendfi.installments.create({
  totalAmount: 1200_00,
  numberOfPayments: 6,
  frequency: 'monthly'
});`
  },
  {
    icon: FileText,
    title: "Invoice Billing",
    description: "Professional invoices with crypto payment options and automatic reminders.",
    example: "Agency work, consulting, B2B services, contract work",
    gradient: "from-indigo-500/10 to-violet-500/10",
    iconColor: "text-indigo-500",
    code: `const invoice = await zendfi.invoices.create({
  amount: 5000_00,
  dueDate: '2025-12-31',
  items: [{ name: 'Web Design', price: 5000_00 }]
});`
  },
  {
    icon: Gamepad2,
    title: "Gaming & Apps",
    description: "In-app purchases with instant confirmation and global reach.",
    example: "Game credits, premium features, virtual goods, consumables",
    gradient: "from-rose-500/10 to-red-500/10",
    iconColor: "text-rose-500",
    code: `const payment = await zendfi.payments.create({
  amount: 4_99,
  currency: 'USDC',
  metadata: { itemId: 'gold_pack_1000' }
});`
  },
]

export function UseCasesSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Built for Every
            <span className="block text-accent">Use Case</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From e-commerce to enterprise, ZendFi powers payments for businesses of all sizes.
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                    <div className="relative backdrop-blur-sm rounded-3xl p-10 md:p-16 min-h-[500px] md:min-h-[600px]">
                      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Left Side - Info */}
                        <div className="space-y-6 md:space-y-8">
                          {/* Icon */}
                          <div className={`w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center ${useCase.iconColor}`}>
                            <Icon className="w-8 h-8" />
                          </div>

                          {/* Title */}
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                            {useCase.title}
                          </h3>

                          {/* Description */}
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {useCase.description}
                          </p>

                          {/* Example */}
                          <div className="pt-6 border-t border-border/30">
                            <p className="text-sm font-semibold text-accent mb-3">USE CASES:</p>
                            <p className="text-base text-muted-foreground italic">
                              {useCase.example}
                            </p>
                          </div>
                        </div>

                        {/* Right Side - Code Example */}
                        <div className="relative h-full flex items-center">
                          <div className="bg-gray-900 rounded-xl overflow-hidden border border-accent/20 w-full">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                              <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                              </div>
                              <span className="text-gray-400 text-xs">example.ts</span>
                            </div>

                            {/* Code */}
                            <div className="p-6">
                              <pre className="text-sm leading-relaxed">
                                <code className="text-gray-300 font-mono">
                                  {useCase.code}
                                </code>
                              </pre>
                            </div>
                          </div>

                          {/* Floating Badge */}
                          <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                            {index + 1} of {useCases.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "bg-accent w-8" 
                    : "bg-border hover:bg-accent/50 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Use Case Labels */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
            {useCases.map((useCase, index) => {
              const UseCaseIcon = useCase.icon
              return (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-accent/10 border-2 border-accent"
                      : "bg-background/50 border border-border hover:border-accent/50"
                  }`}
                >
                  <UseCaseIcon className={`w-5 h-5 ${index === selectedIndex ? useCase.iconColor : "text-muted-foreground"}`} />
                  <span className={`text-xs font-medium text-center ${
                    index === selectedIndex ? "text-accent" : "text-muted-foreground"
                  }`}>
                    {useCase.title.split(" ")[0]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-lg text-muted-foreground">
              Ready to build your use case?
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}