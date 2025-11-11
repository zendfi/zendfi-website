"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ShoppingCart, Repeat, Shield, CreditCard, FileText, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Accept crypto for digital products with instant settlements and zero chargebacks.",
    example: "Selling courses, software, templates, digital downloads",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
    code: `const payment = await zendfi.createPayment({
  amount: 99.00,
  currency: 'USD',
  token: 'USDC',
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
    code: `const plan = await zendfi.createSubscriptionPlan({
  name: 'Premium Monthly',
  amount: 29.99,
  currency: 'USD',
  interval: 'monthly'
});`
  },
  {
    icon: Shield,
    title: "Marketplaces",
    description: "Escrow payments with buyer/seller protection and configurable release conditions.",
    example: "Freelance platforms, NFT marketplaces, peer-to-peer trading",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500",
    code: `const escrow = await zendfi.createEscrow({
  buyer_wallet: '7xKBN...pT2',
  seller_wallet: '8yLMQ...qW3',
  amount: 500.00,
  release_conditions: { type: 'manual_approval' }
});`
  },
  {
    icon: CreditCard,
    title: "Buy Now, Pay Later",
    description: "Built-in installment plans for high-ticket items without third-party services.",
    example: "Split payments over 3, 6, or 12 months",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
    code: `const plan = await zendfi.createInstallmentPlan({
  customer_email: 'customer@example.com',
  total_amount: 1200.00,
  installment_count: 6,
  payment_frequency_days: 30
});`
  },
  {
    icon: FileText,
    title: "Invoice Billing",
    description: "Professional invoices with crypto payment options and automatic reminders.",
    example: "Agency work, consulting, B2B services, contract work",
    gradient: "from-indigo-500/10 to-violet-500/10",
    iconColor: "text-indigo-500",
    code: `const invoice = await zendfi.createInvoice({
  customer_email: 'client@company.com',
  due_date: '2025-12-31',
  items: [{ description: 'Web Design', unit_price: 5000.00 }]
});`
  },
  {
    icon: Gamepad2,
    title: "Gaming & Apps",
    description: "In-app purchases with instant confirmation and global reach.",
    example: "Game credits, premium features, virtual goods, consumables",
    gradient: "from-rose-500/10 to-red-500/10",
    iconColor: "text-rose-500",
    code: `const payment = await zendfi.createPayment({
  amount: 4.99,
  currency: 'USD',
  token: 'USDC',
  metadata: { itemId: 'gold_pack_1000' }
});`
  },
]

export function UseCasesSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const isMobile = useIsMobile()
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false,
      dragFree: false,
      duration: 25,
      containScroll: 'trimSnaps'
    },
    [Autoplay({ 
      delay: 5000, 
      stopOnInteraction: true, 
      stopOnMouseEnter: true,
      stopOnFocusIn: true
    })]
  )

  const scrollTo = useCallback((index: number) => {
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
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Built for Every
            <span className="block text-accent">Use Case</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            From e-commerce to enterprise, ZendFi powers payments for businesses of all sizes.
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden sm:mx-0" ref={emblaRef}>
            <div className="flex will-change-transform">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pl-2 pr-2 mx-auto">
                    <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-16 min-h-[500px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px] bg-background/95 border border-border/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start md:items-center h-full">
                        {/* Left Side - Info */}
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                          {/* Icon */}
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-background/80 flex items-center justify-center ${useCase.iconColor} border border-border/30 transition-transform duration-200`}>
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                            {useCase.title}
                          </h3>

                          {/* Description */}
                          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {useCase.description}
                          </p>

                          {/* Example */}
                          <div className="pt-4 sm:pt-6 border-t border-border/30">
                            <p className="text-xs sm:text-sm font-semibold text-accent mb-2 sm:mb-3">USE CASES:</p>
                            <p className="text-sm sm:text-base text-muted-foreground italic">
                              {useCase.example}
                            </p>
                          </div>
                        </div>

                        {/* Right Side - Code Example */}
                        <div className="relative h-full flex items-center">
                          <div className="bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden border border-accent/20 w-full shadow-lg">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border-b border-gray-700">
                              <div className="flex gap-1.5 sm:gap-2">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                              </div>
                              <span className="text-gray-400 text-[10px] sm:text-xs">example.ts</span>
                            </div>

                            {/* Code */}
                            <div className="p-3 sm:p-4 md:p-6 overflow-x-auto">
                              <pre className="text-xs sm:text-sm leading-relaxed">
                                <code className="text-gray-300 font-mono whitespace-pre">
                                  {useCase.code}
                                </code>
                              </pre>
                            </div>
                          </div>

                          {/* Floating Badge */}
                          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-accent text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
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
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ease-out ${
                  index === selectedIndex 
                    ? "bg-accent w-8" 
                    : "bg-border hover:bg-accent/50 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Use Case Labels */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 mt-6 sm:mt-8">
            {useCases.map((useCase, index) => {
              const UseCaseIcon = useCase.icon
              return (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 ease-out ${
                    index === selectedIndex
                      ? "bg-accent/10 border-2 border-accent scale-105"
                      : "bg-background/50 border border-border hover:border-accent/50 hover:scale-105"
                  }`}
                >
                  <UseCaseIcon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${index === selectedIndex ? useCase.iconColor : "text-muted-foreground"}`} />
                  <span className={`text-[10px] sm:text-xs font-medium text-center leading-tight transition-colors duration-200 ${
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
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4">
            <p className="text-base sm:text-lg text-muted-foreground">
              Ready to build your use case?
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 sm:px-8 text-sm sm:text-base transition-all duration-200">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}