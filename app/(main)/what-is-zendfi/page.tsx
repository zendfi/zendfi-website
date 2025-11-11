"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TestimonialSection } from "@/components/testimonial-section";
import { ArrowRight, Zap, Globe2, TrendingDown, Shield, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    const reasons = [
        {
            number: "01",
            title: "Stripe-Level DX",
            desc: "Clean APIs, comprehensive docs, and SDKs that just work. No blockchain complexity leaking through.",
            icon: Code2,
            gradient: "from-accent/80/20 to-purple-300/20",
            iconColor: "text-accent/50",
            feat: ["7-line integration", "TypeScript/Python/Rust SDKs"],
        },
        {
            number: "02",
            title: "Built for Scale",
            desc: "Production-ready infrastructure with enterprise features: webhooks, batch processing, real-time analytics.",
            icon: Globe2,
            gradient: "from-blue-200/20 to-cyan-300/20",
            iconColor: "text-blue-500",
            feat: ["99.9% Uptime SLA", "20+ Webhook Events"],
        },
        {
            number: "03",
            title: "0.6% All-Inclusive",
            desc: "No setup fees. No monthly minimums. No hidden charges. Just transparent pricing that beats Stripe by 80%.",
            icon: TrendingDown,
            gradient: "from-green-200/20 to-emerald-300/20",
            iconColor: "text-green-500",
            feat: ["0.6% flat rate", "Zero chargebacks"],
        },
        {
            number: "04",
            title: "Non-Custodial Security",
            desc: "Your funds, your keys. We never hold your money. Every payment goes straight to your wallet.",
            icon: Shield,
            gradient: "from-amber-200/20 to-orange-300/20",
            iconColor: "text-amber-500",
            feat: ["Self-custody wallets", "Instant settlements"],
        },
        {
            number: "05",
            title: "Everything You Need",
            desc: "Payment links, invoices, subscriptions, escrows, split payments—features Stripe charges extra for, all built-in.",
            icon: Zap,
            gradient: "from-pink-200/20 to-rose-300/20",
            iconColor: "text-pink-500",
            feat: ["Advanced payment types", "Hosted checkout pages"],
        },
    ];

    return (
        <>
            <Header />

            {/* Hero Section with Parallax */}
            <main className="relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-accent/50/5 via-transparent to-transparent pointer-events-none"
                    style={{ opacity, scale }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <motion.section
                        className="relative text-center max-w-4xl mx-auto pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-accent/50/20 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-accent/50" />
                            <span className="text-sm font-medium text-accent/60 dark:text-accent/40">
                                Powering Global Commerce
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-tight text-balance bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            The Payment SDK
                            <br />
                            <span className="bg-gradient-to-r from-accent/80 to-accent bg-clip-text text-transparent">
                                Developers Actually Want
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Accept crypto payments in seven lines of code. No blockchain degree required. Just ridiculously good developer experience.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
                        >
                            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                <Link href="/signup">
                                    <Button
                                        size="lg"
                                        className="bg-accent hover:bg-accent/90 font-semibold text-white px-8 py-6 text-lg w-full sm:w-auto"
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
                                        className="border-2 border-accent text-accent font-semibold hover:text-accent px-8 py-6 text-lg transition-all duration-300 w-full sm:w-auto"
                                    >
                                        View Live Demo
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Stats Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="grid grid-cols-2 gap-8 mt-20 pt-12 border-t border-border/30"
                        >
                            {[
                                { value: "99.9%", label: "Uptime" },
                                { value: "<400ms", label: "Settlement" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-accent/70 to-accent/80 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.section>

                    <motion.section
                        className="py-20 md:py-28"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                className="relative p-10 md:p-14 rounded-3xl bg-background"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative">
                                    <span className="inline-block px-4 py-1.5 rounded-full border border-accent text-accent text-sm mb-6">
                                        Our Mission
                                    </span>

                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                        Built for Developers,
                                        <br />
                                        By Developers
                                    </h2>

                                    <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                                        <p>
                                            ZendFi started because we were frustrated. Integrating crypto payments
                                            meant wrestling with confusing docs, fragmented tools, and APIs that
                                            assumed you had a PhD in blockchain.
                                        </p>
                                        <p>
                                            We built the SDK we wished existed: clean, simple, powerful. Seven lines
                                            of code to accept payments. Stripe-level DX. Enterprise features included.
                                            No blockchain complexity leaking through.
                                        </p>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-accent rounded-tr-3xl opacity-20" />
                                </div>
                            </motion.div>

                            {/* Visual element */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {/* <Image src={"/images/sol3.png"} alt="illustration" width={300} height={300}/> */}
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Why Choose ZendFi */}
                    <section className="py-20 md:py-28">
                        <motion.div
                            className="text-center max-w-3xl mx-auto mb-20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                                Imagine Stripe...
                                <br />
                                But with crypto superpowers.
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                We give you Stripe's developer experience with crypto's advantages: instant
                                settlements, zero chargebacks, and fees 80% lower.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {reasons.map((reason, i) => (
                                <InteractiveReasonCard key={i} reason={reason} index={i} />
                            ))}
                        </div>
                    </section>


                </div>
                    {/* CTA Section */}
                    <motion.section
                        className=""
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relativ bg-accent/20 p-12 md:p-16 text-center overflow-hidden">
                 

                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6">
                                    Ready to Build with ZendFi?
                                </h2>
                                <p className="text-xl text-slate-700/90 mb-8">
                                    Get started in minutes with our SDK. No credit card required.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href={"/signup"}>
                                        <Button size="lg" className="bg-transparent border border-accent text-accent hover:bg-transparent/90 group">
                                            Get Started
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <Button size="lg" variant="outline" className="border-white/30 text-white bg-accent">
                                        <Link href={"mailto:sales@zendfi.tech"}>
                                            Contact Sales
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.section>
            </main>

            {/* <TestimonialSection /> */}
            <Footer />
        </>
    );
}
function InteractiveReasonCard({ reason, index }: { reason: any; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0.8]);
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.97, 1, 1, 0.99]);
    const y = useTransform(scrollYProgress, [0, 1], [50, -30]);

    return (
        <motion.div
            ref={cardRef}
            style={{ opacity, scale, y }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="group"
        >
            <div className="relative p-8 md:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-1">

                <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
                    {/* Left side */}
                    <div className="flex md:flex-col items-center gap-6">
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="w-20 h-20 rounded-2xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center transition-all duration-300"
                        >
                            <reason.icon className={`w-10 h-10 ${reason.iconColor}`} />
                        </motion.div>

                        <span className="text-6xl font-bold text-gray-200 dark:text-zinc-700 group-hover:text-violet-500/30 transition-colors duration-300">
                            {reason.number}
                        </span>
                    </div>

                    {/* Middle content */}
                    <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300">
                            {reason.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed">
                            {reason.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {reason.feat.map((feature: string, i: number) => (
                                <div
                                    key={i}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
               bg-gray-50 dark:bg-zinc-800 text-sm"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                    <span className="font-medium text-gray-800 dark:text-zinc-300">
                                        {feature}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
