"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
    CreditCard,
    Share2,
    Layers,
    CheckCircle2,
    ArrowRight,
    Zap,
    Clock,
    Shield,
    Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScheduleDemoButton } from "@/components/schedule-demo"

export default function SolutionsPage() {
    return (
        <>
            <Header />

            <main className="relative overflow-hidden lg:overflow-visible flex-1">
                {/* HERO SECTION */}
                <section className="relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-violet-500/20 mb-8"
                            >
                                <Sparkles className="w-4 h-4 text-violet-500" />
                                <span className="text-sm font-medium text-accent dark:text-violet-400">
                                    Complete Payment Infrastructure
                                </span>
                            </motion.div>

                            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-tight text-balance mb-6">
                                <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                                    Everything You Need
                                </span>
                                <br />
                                <span className="bg-accent bg-clip-text text-transparent">
                                    for Web3 Payments
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                                Accept, manage, and automate crypto payments with enterprise-grade
                                infrastructure built for modern businesses.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
                            >
                                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                    <Link href="/signup">
                                        <Button 
                                            size="lg" 
                                            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg w-full sm:w-auto"
                                        >
                                            Get Started Free
                                        </Button>
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                    <Link href="/docs">
                                        <Button 
                                            size="lg" 
                                            variant="outline" 
                                            className="border-2 border-accent text-accent hover:text-accent px-8 py-6 text-lg transition-all duration-300 w-full sm:w-auto"
                                        >
                                            View Live Demo
                                        </Button>
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Key Metrics */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-2 gap-8 mt-20 pt-12 border-t border-border/50"
                            >
                                {[
                                    { icon: Shield, value: "99.9%", label: "Uptime" },
                                    { icon: Clock, value: "<400ms", label: "Settlement" }
                                ].map((metric, i) => (
                                    <div key={i} className="text-center">
                                        <metric.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                                        <div className="text-xl md:text-3xl font-bold text-foreground mb-1">
                                            {metric.value}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ADVANCED PAYMENT TYPES */}
                <section id="payment-types" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="grid lg:grid-cols-[400px_1fr] gap-12 items-start"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Sticky Icon Card */}
                            <motion.div className="lg:sticky lg:top-32 lg:self-start">
                                <div className="p-12 rounded-3xl bg-accent/5">
                                    <div className="w-20 h-20 rounded-2xl bg-accent/80 flex items-center justify-center mb-6">
                                        <CreditCard className="text-white w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Flexible Payment Options</h3>
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="mb-12"
                                >
                                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                        Advanced Payment Types
                                    </h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        Accept crypto payments in the most flexible ways possible. From simple
                                        links to advanced recurring billing and escrow systems.
                                    </p>
                                </motion.div>

                                <div className="grid gap-4">
                                    {[
                                        {
                                            id: "payouts",
                                            title: "Payment Links",
                                            desc: "Create and share payment links that accept crypto from any wallet — perfect for freelancers, merchants, and creators.",
                                            gradient: "from-blue-500/10 to-cyan-500/10",
                                            border: "border-blue-500/20"
                                        },
                                        {
                                            title: "Invoices",
                                            desc: "Send professional invoices with custom amounts, due dates, and automatic payment tracking.",
                                            gradient: "from-violet-500/10 to-purple-500/10",
                                            border: "border-violet-500/20"
                                        },
                                        {
                                            id: "subscriptions",
                                            title: "Subscriptions",
                                            desc: "Set up recurring billing cycles (monthly, quarterly, or yearly) with automatic renewals and notifications.",
                                            gradient: "from-pink-500/10 to-rose-500/10",
                                            border: "border-pink-500/20"
                                        },
                                        {
                                            id: "installment",
                                            title: "Split Payments",
                                            desc: "Automatically share revenue across multiple wallets — ideal for teams, DAOs, or partnerships.",
                                            gradient: "from-green-500/10 to-emerald-500/10",
                                            border: "border-green-500/20"
                                        },
                                        {
                                            title: "Escrow",
                                            desc: "Protect both buyers and sellers with smart escrow contracts that release funds only when agreed conditions are met.",
                                            gradient: "from-amber-500/10 to-orange-500/10",
                                            border: "border-amber-500/20",
                                            badge: "Coming Soon"
                                        },
                                        {
                                            title: "Installments",
                                            desc: "Offer buy-now-pay-later plans to your customers and receive the full amount upfront while ZendFi handles the rest.",
                                            gradient: "from-indigo-500/10 to-blue-500/10",
                                            border: "border-indigo-500/20"
                                        }
                                    ].map((feature, i) => (
                                        <FeatureCard key={i} {...feature} index={i} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* HOSTED CHECKOUT PAGES */}
                <section id="checkout" className="py-20 md:py-28 bg-background relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="grid lg:grid-cols-[1fr_400px] gap-12 items-start"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Content */}
                            <div className="order-2 lg:order-1">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="mb-12"
                                >
                                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                        Hosted Checkout Pages
                                    </h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        Beautiful, secure, and mobile-optimized checkout pages out of the box.
                                        No design or development needed.
                                    </p>
                                </motion.div>

                                <div className="grid gap-4">
                                    {[
                                        {
                                            title: "Mobile-Optimized Pages",
                                            desc: "Every checkout adapts beautifully to all screens — fast, frictionless, and trustworthy.",
                                            gradient: "from-violet-500/10 to-purple-500/10",
                                            border: "border-violet-500/20"
                                        },
                                        {
                                            title: "QR Code Payments",
                                            desc: "Customers can instantly scan QR codes to pay via their preferred mobile wallets.",
                                            gradient: "from-blue-500/10 to-cyan-500/10",
                                            border: "border-blue-500/20"
                                        },
                                        {
                                            title: "Wallet Integration",
                                            desc: "Seamless connection to top wallets like Phantom, Solflare, and Backpack.",
                                            gradient: "from-green-500/10 to-emerald-500/10",
                                            border: "border-green-500/20"
                                        },
                                        {
                                            title: "Pay-What-You-Want",
                                            desc: "Allow customers to choose how much they want to pay — great for donations and community support.",
                                            gradient: "from-pink-500/10 to-rose-500/10",
                                            border: "border-pink-500/20"
                                        },
                                        {
                                            title: "Custom Branding",
                                            desc: "Add your logo, brand colors, and styles for a fully white-labeled experience.",
                                            gradient: "from-amber-500/10 to-orange-500/10",
                                            border: "border-amber-500/20",
                                            badge: "Coming Soon"
                                        }
                                    ].map((feature, i) => (
                                        <FeatureCard key={i} {...feature} index={i} />
                                    ))}
                                </div>
                            </div>

                            {/* Sticky Icon Card */}
                            <motion.div
                                className="lg:sticky lg:top-32 lg:self-start order-1 lg:order-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >

                                <div className="p-12 rounded-3xl bg-accent/5">
                                    <div className="w-20 h-20 rounded-2xl bg-accent/80 flex items-center justify-center mb-6">
                                        <Share2 className="text-white w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        Seamless Checkout Experience
                                    </h3>
                                </div>

                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* INSTANT SETTLEMENTS */}
                <section className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="grid lg:grid-cols-[400px_1fr] gap-12 items-start"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Sticky Icon Card */}
                            <motion.div
                                className="lg:sticky lg:top-32 lg:self-start"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative p-12 rounded-3xl bg-accent/5">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-2xl bg-accent/80 flex items-center justify-center mb-6">
                                            <Layers className="text-white w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">
                                            Lightning-Fast Settlements
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="mb-12"
                                >
                                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                        Instant Settlements
                                    </h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        Get your funds in seconds, not days. Eliminate traditional delays with
                                        real-time crypto settlements and zero holds.
                                    </p>
                                </motion.div>

                                <div className="grid gap-4">
                                    {[
                                        {
                                            title: "Lightning-Fast Payouts",
                                            desc: "Funds hit your wallet within seconds of payment confirmation — no bank queues or third-party approvals.",
                                            gradient: "from-green-500/10 to-emerald-500/10",
                                            border: "border-green-500/20"
                                        },
                                        {
                                            title: "Real-Time Balance Visibility",
                                            desc: "Track every transaction and settlement as it happens with full transparency.",
                                            gradient: "from-blue-500/10 to-cyan-500/10",
                                            border: "border-blue-500/20"
                                        },
                                        {
                                            title: "No Settlement Holds",
                                            desc: "Unlike traditional processors, ZendFi doesn't freeze or hold your revenue.",
                                            gradient: "from-violet-500/10 to-purple-500/10",
                                            border: "border-violet-500/20"
                                        },
                                        {
                                            title: "Automatic Conversion",
                                            desc: "Optionally auto-convert USDC to SOL instantly, keeping your treasury balanced.",
                                            gradient: "from-amber-500/10 to-orange-500/10",
                                            border: "border-amber-500/20"
                                        }
                                    ].map((feature, i) => (
                                        <FeatureCard key={i} {...feature} index={i} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="">
                    <div className="">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative  bg-accent/20 p-12 md:p-16 text-center overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

                                <div className="relative z-10 max-w-3xl mx-auto">
                                    <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6">
                                        Build with ZendFi Today
                                    </h2>
                                    <p className="text-xl text-slate-700/90 mb-10 leading-relaxed">
                                        Start accepting crypto, automate billing, and settle instantly — all in one place.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href={"/signup"}>
                                            <Button size="lg" className="bg-transparent border border-accent text-accent hover:bg-transparent/90 group">
                                                Get Started Free
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                        <ScheduleDemoButton />
                                    </div>

                                    {/* Trust Indicators */}
                                    <div className="mt-12 flex items-center justify-center gap-8 text-slate-700 text-sm">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span>No credit card required</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span>Setup in 5 minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

function FeatureCard({
    title,
    desc,
    index,
    badge
}: {
    title: string
    desc: string
    index: number
    badge?: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="group"
        >
            <div className="relative p-6 rounded-2xl transition-all duration-300">
                <div className="relative flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{title}</h3>
                            {badge && (
                                <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
                                    {badge}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-600 leading-relaxed">{desc}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
