  "use client"

  import { motion } from "framer-motion"
  import { Button } from "@/components/ui/button"
  import { ArrowRight, Zap, Shield, Layers, } from "lucide-react"
  import { ScheduleDemoButton } from "./schedule-demo"
  import Link from "next/link"

  export function HeroSection() {
    // Removed mouse-following dot and related state/effects
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // useEffect(() => {
    //   const handleMouseMove = (e: MouseEvent) => {
    //     setMousePosition({ x: e.clientX, y: e.clientY })
    //   }

    //   window.addEventListener("mousemove", handleMouseMove)
    //   return () => window.removeEventListener("mousemove", handleMouseMove)
    // }, [])

    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />

        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center space-y-8 mb-12"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-tight">
                <span className="text-slate-900">Crypto Payments</span>
                <br className="hidden sm:block" />
                <span className="text-accent">Without Limits</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance font-light">
                Accept USDC, USDT or SOL and settle in seconds. No intermediaries. No fees. Just pure velocity on the blockchain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <ScheduleDemoButton />
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/docs">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border max-w-60 transition-all duration-300 hover:text-black bg-transparent cursor-pointer w-full sm:w-auto"
                  >
                    View Docs
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex w-full justify-between gap-6 pt-8 border-t border-border"
              >
                <div>
                  <div className="text-2xl font-bold text-primary">2.5s</div>
                  <p className="text-sm text-muted-foreground">Settlement time</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">$0</div>
                  <p className="text-sm text-muted-foreground">Setup fees</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <p className="text-sm text-muted-foreground">Uptime SLA</p>
                </div>
              </motion.div>
          </div>
        </div>
      </section>
    )
  }
