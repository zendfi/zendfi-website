import Link from "next/link"
import { ArrowRight, Bolt, Globe, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "0xTnxl",
    role: "Software Engineer",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF3FObFASbnvp37aF4Z4MWYHNCreXC5FXylPUmkiiClQIZA8F11KfDJM1H61BFPsBKSiCWaCfeCKUOy_lbRi8PPUZRk9n7t0BiifYByp7mt9w4NZV6-RhP6wM9JBg_8Qdeizb7IghNVzAsq3FZ7BDBps4reufQR4LHfvz5yHyyn_RjnRbx82GFAQo_gRWNss1l50PKWCGDaVm2lkUKRogJp88hx0XIwbGp61zEczmKHYbD0xJlNvenTT_zepDbUa_FdljQLo4e9oE",
    tone: "text-[hsl(var(--color-accent))]",
  },
  {
    name: "Deedaro",
    role: "Software Engineer",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Epn7DJSYZaj86LY8_Qrg6K6yJGGTPmkeTjiC1QgzlNUqy9z54gyHiyEXO0gRoaESuCdQ0CV3uLpgx_r8a-TBJoiaAIHk5sZUgTUbB4xDVIEBBcg0XvQJ8j8hdteF5VO9_3tsREatVXN51cTvjMvuhuN8RoVZ9Pp3D6P1q3-shDQ41NmLWAXYz_y3o3bjb196IzdsA3fl6YCcPLGXJQyQpClJ1yQYmML5Mr5g_MNtzdYfVerRmGN5YSmN64dfzAXfXcDcSsh5vwg",
    tone: "text-[hsl(var(--color-accent))]",
  },
  // {
  //   name: "Venture Cap",
  //   role: "Lead Investor",
  //   src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuGdokGg24CHCDTb73gXOIfF0fxvDvNFUhdvXWmTAxGq5RuMj2LAlpyAYM8N4B09B9k--FQZmAF6vQlrhOlNY57kmmaI3WJEJUQB8B0QENuLvldnBB7fH5_y3USol_K8HCHKC-iNEszkxARvBD4-iNfYd6fsYK0h9tjJVFlChnKTNMUhBXdSBwNih3-QgDvK_DzpIf95_81iGf1xFysR9SpZT-g-_bAJriBEdb1zKxHiVFRi6cplPv4c4sNm3X6h8GtPoMM-nO63k",
  //   tone: "text-muted-foreground",
  // },
  {
    name: "BridgeMark",
    role: "Strategic Partner",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL-qNBzAiWq2GoJwaT8ABUcqNeCb9BCxo3oNM2KS89NcmCvHd0L1wexXzOGdu8uvj5G6x8ocjqolpXx2-cVrBO60g6nckIujo0Bat69JVNwKVE8ElIUAxrHoEejheAsKCUAKavxg1D6_Fwu82-7M66icq-BwtsJ1tvEcPjSrWotmZr-TeTfiQvlBjSzBV6xJiUBGNX92zb8bINpPI8sfAmj9tIknqvIhgfC_0quqV-KsheeHD2KG0ab4CYvPGlK1zFImulhhyUN9E",
    tone: "text-muted-foreground",
  },
]

export default function WhatIsZendFiPage() {
  return (
    <main>
      <Header />
      <main className="w-full pt-20">
          <div className="absolute inset-0 bg-[size:40px_40px] zendfi-grid-pattern opacity-[0.45] pointer-events-none" />
        {/* HERO */}
        <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center px-4 py-20 bg-background">
          <div className="absolute inset-0 bg-[size:40px_40px] zendfi-grid-pattern opacity-[0.45] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-10">
            <div className="inline-flex rounded-xl items-center gap-3 px-4 py-2 bg-card/80 border border-foreground text-xs font-bold text-foreground uppercase tracking-widest">
              <span className="w-2 h-2 bg-accent" />
              Our Manifesto
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.9] tracking-tighter">
              Redefining <br />
              <span className="text-accent block mt-2">Global Commerce.</span>
            </h1>

            <p className="text-foreground/90 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto mt-2">
              We are building the financial rails for a borderless world where money moves as freely as information. No intermediaries. No delays. Just pure, agentic commerce.
            </p>

            <div className="mt-6 w-full sm:w-auto rounded-2xl border-2 border-foreground bg-background p-1 zendfi-hard-shadow hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200">
              <Link href="/docs" className="group w-full sm:w-auto h-14 px-10 text-foreground text-lg font-bold flex items-center justify-center gap-3">
                Read the Whitepaper
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* BORDERLESS WORLD */}
        <section className="w-full py-24 bg-[#f4f4f5] dark:bg-[#110a18] border-y border-foreground/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-none">
                  A world without
                  <br />
                  <span className="text-accent">financial borders.</span>
                </h2>

                <div className="space-y-6 text-lg text-foreground/80 font-normal leading-relaxed">
                  <p>
                    Traditional banking rails were built for a physical world. They are slow, expensive, and fragmented by geography. In an era of AI agents and global digital communities, we need infrastructure that can keep up.
                  </p>
                  <p>
                    ZendFi leverages the speed and efficiency of Solana to create a unified payment layer. We empower businesses to accept payments from anyone, anywhere, instantly—bridging the gap between fiat (Naira) and crypto.
                  </p>

                  <div className="p-6 bg-background border-l-4 border-accent">
                    <p className="font-bold text-foreground text-xl">
                      This isn&apos;t just about payments. It&apos;s about enabling a new economy of autonomous agents and truly global marketplaces.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl bg-background p-0 border border-foreground/10">
                  <div className="flex flex-col">
                    <div className="group flex items-start gap-6 p-8 border-b border-foreground/10 hover:bg-foreground/[0.03] transition-colors">
                      <div className="w-16 h-16 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0">
                        <Globe className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          Global Access
                        </h3>
                        <p className="text-foreground/70 font-medium">
                          Breaking down the walls of localized banking systems to create a truly inclusive financial ecosystem.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-6 p-8 border-b border-foreground/10 hover:bg-foreground/[0.03] transition-colors">
                      <div className="w-16 h-16 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0">
                        <Rocket className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          Advanced Options
                        </h3>
                        <p className="text-foreground/70 font-medium">
                          Providing the flexible payment options for businesses to accept a wide range of payment types, from one-time purchases to subscriptions to programmable money for AI agents.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-6 p-8 hover:bg-foreground/[0.03] transition-colors">
                      <div className="w-16 h-16 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0">
                        <Bolt className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          Instant Settlement
                        </h3>
                        <p className="text-foreground/70 font-medium">
                          Moving from T+2 days to T+400ms. Cash flow that moves as fast as your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLANA */}
        <section className="w-full py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-foreground pb-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">
                  Why We Build on <span className="text-accent">Solana</span>
                </h2>
              </div>
              <p className="text-lg md:text-xl text-foreground/70 font-medium max-w-md md:text-right">
                Matching the speed and scale of traditional financial markets.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border border-foreground flat-card">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-bold text-foreground uppercase tracking-wider border-b-2 border-[hsl(var(--color-accent))] pb-1">
                    Throughput
                  </div>
                  <Zap className="w-10 h-10 text-foreground" />
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl font-black text-foreground">65k</span>
                  <span className="text-xl font-bold text-foreground/50">TPS</span>
                </div>
                <div className="w-full h-4 bg-foreground/10 mb-6 border border-foreground/20">
                  <div className="h-full bg-foreground w-full" />
                </div>
                <p className="text-base font-medium text-foreground/70">Vs. Visa&apos;s ~24,000 TPS. Solana handles global scale effortlessly.</p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-foreground flat-card">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-bold text-foreground uppercase tracking-wider border-b-2 border-[hsl(var(--color-accent))] pb-1">
                    Cost Per Txn
                  </div>
                  <ShieldCheck className="w-10 h-10 text-foreground" />
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl sm:text-6xl font-black text-foreground">&lt;$0.001</span>
                </div>
                <div className="w-full h-4 bg-foreground/10 mb-6 border border-foreground/20">
                  <div className="h-full bg-foreground w-[5%]" />
                </div>
                <p className="text-base font-medium text-foreground/70">Vs. Stripe&apos;s 2.9% + 30¢. Micro-payments are finally viable.</p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-foreground flat-card">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-bold text-foreground uppercase tracking-wider border-b-2 border-[hsl(var(--color-accent))] pb-1">
                    Energy Impact
                  </div>
                  <Sparkles className="w-10 h-10 text-foreground" />
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl font-black text-foreground">0.0%</span>
                  <span className="text-xl font-bold text-foreground/50">Net Carbon</span>
                </div>
                <div className="w-full h-4 bg-foreground/10 mb-6 border border-foreground/20">
                  <div className="h-full bg-foreground w-full" />
                </div>
                <p className="text-base font-medium text-foreground/70">A single transaction uses less energy than two Google searches.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VISIONARIES */}
        <section className="w-full py-24 bg-[#f4f4f5] dark:bg-[#110a18] border-y border-foreground/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tighter">Backed by Visionaries</h2>
                <p className="text-lg md:text-xl text-foreground/70 max-w-xl font-medium">
                  We are a team of engineers, economists, and designers supported by the best investors in Web3 and Fintech.
                </p>
              </div>

              <Link
                href="/careers"
                className="px-6 py-3 bg-background rounded-lg border border-foreground text-foreground font-bold flex items-center gap-2 hover:bg-foreground hover:text-background transition-colors zendfi-hard-shadow hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                View Open Roles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="bg-background border border-foreground/10 flex flex-col items-center justify-center p-6 md:p-8 text-center hover:border-foreground transition-colors group cursor-pointer"
                >
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-foreground/5 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all border border-transparent group-hover:border-foreground">
                    {/* Using <img> to avoid remote Image config issues */}
                    <img alt={m.name} className="w-full h-full object-cover" src={m.src} />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground">{m.name}</h4>
                  <p className={`text-xs md:text-sm font-bold uppercase tracking-wide mt-1 ${m.tone}`}>{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="">
          <div className="relativ bg-accent/20 dark:bg-transparent p-12 md:p-16 text-center overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl dark:text-white font-bold text-slate-700 mb-6">
                Ready to Build with ZendFi?
              </h2>
              <p className="text-xl text-slate-700/90 dark:text-white/80 mb-8">
                Get started in minutes with our SDK. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/signup"}>
                  <Button size="lg" className="px-6 py-3 bg-accent rounded-lg hover:bg-accent border border-foreground text-white font-bold flex items-center gap-2 hover:text-background transition-colors zendfi-hard-shadow hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-6 py-3 bg-background rounded-lg border border-foreground text-foreground font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-colors zendfi-hard-shadow hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                  <Link href={"mailto:sales@zendfi.tech"}>
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  )
}
