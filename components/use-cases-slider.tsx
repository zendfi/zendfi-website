"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { ShoppingCart, Repeat, Shield, CreditCard, Gamepad2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const useCases = [
  {
    icon: ShoppingCart,
    tab: "E-commerce",
    title: "E-commerce Payments",
    description:
      "Accept crypto for digital and physical products with instant settlements and zero chargebacks. Seamless checkout for your customers.",
    iconBg: "bg-purple-100 dark:bg-purple-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    code: `const payment = await zendfi.createPayment({
  customer_email: 'customer@example.com',
  amount: 99.00,
  currency: 'USD',
  token: 'USDC',
  description: 'Premium Course'
});

// Payment created successfully: pay_987654321`,
  },
  {
    icon: Repeat,
    tab: "SaaS",
    title: "SaaS Subscriptions",
    description:
      "Recurring billing in USDC with lower fees than traditional subscription processors. Manage monthly and annual plans effortlessly.",
    iconBg: "bg-blue-100 dark:bg-blue-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    code: `const plan = await zendfi.createSubscriptionPlan({
  name: 'Premium Monthly',
  amount: 29.99,
  currency: 'USD',
  interval: 'monthly',
  trial_days: 14
});

// Subscription active: sub_112233445`,
  },
  {
    icon: Shield,
    tab: "Marketplaces",
    title: "Marketplace Escrow",
    description:
      "Escrow payments with buyer/seller protection and configurable release conditions. Perfect for freelance platforms and peer-to-peer trading.",
    iconBg: "bg-green-100 dark:bg-green-500/20",
    iconColor: "text-green-600 dark:text-green-400",
    code: `const escrow = await zendfi.createEscrow({
  buyer_wallet: '7xKBN...pT2',
  seller_wallet: '8yLMQ...qW3',
  amount: 500.00,
  release_conditions: { type: 'manual_approval' }
});

// Escrow funded: esc_556677889`,
  },
  {
    icon: CreditCard,
    tab: "Buy Now Pay Later",
    title: "Buy Now, Pay Later",
    description:
      "Built-in installment plans for high-ticket items without third-party services. Split payments over 2, 6, or 12 months with automated scheduling and collection.",
    iconBg: "bg-amber-100 dark:bg-amber-500/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    code: `const plan = await zendfi.createInstallmentPlan({
  customer_email: 'customer@example.com',
  total_amount: 1200.00,
  installment_count: 4,
  payment_frequency_days: 30
});

// Plan created successfully: pln_123456789`,
  },
  {
    icon: Gamepad2,
    tab: "Gaming",
    title: "Gaming & In-App",
    description:
      "In-app purchases with instant confirmation and global reach. Power game credits, premium features, and virtual goods with crypto payments.",
    iconBg: "bg-rose-100 dark:bg-rose-500/20",
    iconColor: "text-rose-600 dark:text-rose-400",
    code: `const payment = await zendfi.createPayment({
  amount: 4.99,
  currency: 'USD',
  token: 'USDC',
  metadata: { itemId: 'gold_pack_1000', userId: 'usr_42' }
});

// Purchase confirmed: pay_998877665`,
  },
]

export function UseCasesSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const tickRef = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Sliding tab indicator refs
  const tabContainerRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  const total = useCases.length

  // Measure the active tab and position the sliding indicator
  const updateIndicator = useCallback(() => {
    const activeTab = tabRefs.current[activeIndex]
    const container = tabContainerRef.current
    if (!activeTab || !container) return

    const containerRect = container.getBoundingClientRect()
    const tabRect = activeTab.getBoundingClientRect()

    setIndicatorStyle({
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
    })
  }, [activeIndex])

  useLayoutEffect(() => {
    updateIndicator()
  }, [updateIndicator])

  useEffect(() => {
    window.addEventListener("resize", updateIndicator)
    return () => window.removeEventListener("resize", updateIndicator)
  }, [updateIndicator])

  // Transition to a new slide with direction
  const transitionTo = useCallback(
    (newIndex: number) => {
      if (newIndex === activeIndex || isAnimating) return
      setDirection(newIndex > activeIndex ? "right" : "left")
      setPrevIndex(activeIndex)
      setIsAnimating(true)
      setActiveIndex(newIndex)
      // Animation duration matches CSS (600ms)
      setTimeout(() => setIsAnimating(false), 600)
    },
    [activeIndex, isAnimating]
  )

  // Infinite carousel: auto-advance using modular arithmetic
  const advance = useCallback(() => {
    tickRef.current += 1
    const next = tickRef.current % total
    transitionTo(next)
  }, [total, transitionTo])

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(advance, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [advance, isPaused])

  const goTo = useCallback(
    (index: number) => {
      tickRef.current = index
      transitionTo(index % total)
    },
    [total, transitionTo]
  )

  const current = useCases[activeIndex]
  const prev = useCases[prevIndex]

  // Syntax-highlight the code block (simple keyword coloring)
  const highlightCode = (raw: string) => {
    const lines = raw.split("\n")
    return lines.map((line, i) => {
      if (line.trim().startsWith("//")) {
        return (
          <span key={i} className="text-purple-400">
            {line}
            {"\n"}
          </span>
        )
      }
      const highlighted = line
        .replace(
          /\b(const|await|let|var|return|new|function)\b/g,
          '<kw>$1</kw>'
        )
        .replace(
          /('[^']*')/g,
          '<str>$1</str>'
        )
        .replace(
          /(\d+\.?\d*)/g,
          '<num>$1</num>'
        )

      return (
        <span key={i}>
          {highlighted.split(/(<kw>.*?<\/kw>|<str>.*?<\/str>|<num>.*?<\/num>)/g).map((part, j) => {
            if (part.startsWith("<kw>"))
              return (
                <span key={j} className="text-purple-400">
                  {part.replace(/<\/?kw>/g, "")}
                </span>
              )
            if (part.startsWith("<str>"))
              return (
                <span key={j} className="text-green-400">
                  {part.replace(/<\/?str>/g, "")}
                </span>
              )
            if (part.startsWith("<num>"))
              return (
                <span key={j} className="text-amber-400">
                  {part.replace(/<\/?num>/g, "")}
                </span>
              )
            return <span key={j}>{part}</span>
          })}
          {"\n"}
        </span>
      )
    })
  }

  const renderSlide = (useCase: typeof useCases[0]) => {
    const SlideIcon = useCase.icon
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left Side – Info */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center space-y-5 sm:space-y-6">
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${useCase.iconBg}`}
          >
            <SlideIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${useCase.iconColor}`} />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-foreground leading-tight">
            {useCase.title}
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {useCase.description}
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-2.5 transition-all duration-200 group w-fit"
          >
            See Case Study
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Right Side – Code Terminal */}
        <div className="flex items-center p-4 sm:p-6 md:p-8 lg:p-10 no-scrollbar">
          <div className="bg-[#1e1e2e] rounded-xl overflow-hidden w-full shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-gray-500 text-xs font-medium">terminal</span>
            </div>
            <div className="px-4 sm:px-5 pb-5 pt-1 overflow-x-auto scrollbar-none">
              <pre className="text-[13px] sm:text-sm leading-[1.7] font-mono text-gray-300">
                <code>{highlightCode(useCase.code)}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Slide animation CSS
  const enterClass =
    direction === "right"
      ? "animate-slideInRight"
      : "animate-slideInLeft"
  const exitClass =
    direction === "right"
      ? "animate-slideOutLeft"
      : "animate-slideOutRight"

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background to-secondary/5">
      {/* Slide animation keyframes + scrollbar hiding */}
      <style jsx>{`
        /* Hide scrollbar on code blocks */
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutRight {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-slideOutLeft {
          animation: slideOutLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-slideOutRight {
          animation: slideOutRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-7xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 sm:mb-5 leading-[1.1] tracking-tight">
            Built for Every{" "}
            <span className="text-accent">Use Case</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
            From e-commerce to enterprise, ZendFi powers payments for businesses of all sizes.
          </p>
        </div>

        {/* Tab Navigation with sliding indicator - Improved Mobile Responsiveness */}
        <div className="flex justify-center mb-10 sm:mb-12 px-2">
          <div className="w-full max-w-full overflow-x-auto pb-2 -mb-2 scrollbar-thin">
            <div
              ref={tabContainerRef}
              className="relative inline-flex items-center rounded-xl sm:rounded-2xl border border-border bg-background py-1.5 sm:py-2 px-1 shadow-sm min-w-max mx-auto"
            >
              {/* Sliding pill indicator */}
              <div
                className="absolute top-1 bottom-1 rounded-xl sm:rounded-2xl border border-border bg-muted/60 shadow-sm z-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />

              {useCases.map((uc, index) => (
                <button
                  key={index}
                  ref={(el) => { tabRefs.current[index] = el }}
                  onClick={() => goTo(index)}
                  className={`relative z-10 rounded-lg sm:rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    index === activeIndex
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {uc.tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Card with slide transitions */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-background border border-border/60 shadow-lg overflow-hidden relative">
            {/* Exiting slide */}
            {isAnimating && (
              <div className={`absolute inset-0 ${exitClass}`}>
                {renderSlide(prev)}
              </div>
            )}

            {/* Active slide */}
            <div
              key={activeIndex}
              className={isAnimating ? enterClass : ""}
            >
              {renderSlide(current)}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4">
            Ready to build your use case?
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-200"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  )
}