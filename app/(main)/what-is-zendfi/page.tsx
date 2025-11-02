"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TestimonialSection } from "@/components/testimonial-section";
import { ArrowRight, Zap, Globe2, TrendingDown, Shield, Code2, Sparkles } from "lucide-react";

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    const reasons = [
        {
            number: "01",
            title: "Faster Than Banks",
            desc: "Traditional transfers take days — ZendFi settles cross-border payments in minutes using secure blockchain infrastructure.",
            icon: Zap,
            gradient: "from-accent/80/20 to-purple-300/20",
            iconColor: "text-accent/50"
        },
        {
            number: "02",
            title: "Built for Global Builders",
            desc: "Designed for businesses and developers building across borders, especially in emerging markets like Africa.",
            icon: Globe2,
            gradient: "from-blue-200/20 to-cyan-300/20",
            iconColor: "text-blue-500"
        },
        {
            number: "03",
            title: "Lower Fees, Greater Access",
            desc: "By removing middlemen, ZendFi cuts transfer costs up to 75%, making international payments affordable for everyone.",
            icon: TrendingDown,
            gradient: "from-green-200/20 to-emerald-300/20",
            iconColor: "text-green-500"
        },
        {
            number: "04",
            title: "Reliable & Compliant",
            desc: "We partner with regulated financial providers to ensure every transaction is compliant, secure, and fully transparent.",
            icon: Shield,
            gradient: "from-amber-200/20 to-orange-300/20",
            iconColor: "text-amber-500"
        },
        {
            number: "05",
            title: "Developer-First",
            desc: "Our easy-to-use APIs and SDKs allow you to integrate payment solutions into your apps in minutes, not weeks.",
            icon: Code2,
            gradient: "from-pink-200/20 to-rose-300/20",
            iconColor: "text-pink-500"
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

                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <motion.section
                        className="relative text-center max-w-4xl mx-auto pt-24 pb-20 md:pt-32 md:pb-28"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
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
                            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            The Future of
                            <br />
                            <span className="bg-gradient-to-r from-accent/80 to-accent bg-clip-text text-transparent">
                                Global Payments
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Bridging traditional finance and blockchain technology to make
                            payments instant, affordable, and borderless for everyone.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link href="/pricing">
                                <Button size="lg" className="bg-accent text-white group hover:bg-accent">
                                    See Pricing
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href={"/developers"}>
                                <Button size="lg" variant="outline" className="border-2 hover:text-accent">
                                    Learn More
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Stats Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50"
                        >
                            {[
                                { value: "75%", label: "Lower Fees" },
                                { value: "<5min", label: "Settlement Time" },
                                { value: "150+", label: "Countries" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent/70 to-accent/80 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.section>

                    {/* Story Section - Bento Style */}
                    <motion.section
                        className="py-20 md:py-28"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <motion.div
                                className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/50/5 to-purple-500/5 border border-accent/50/10 backdrop-blur-sm"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-accent/50/20 to-purple-500/20 rounded-full blur-2xl" /> */}

                                <div className="relative">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/50/10 text-accent/60 dark:text-accent/40 text-sm font-medium mb-6">
                                        Our Story
                                    </span>

                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                        Building for a
                                        <br />
                                        Borderless World
                                    </h2>

                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            ZendFi started with a simple question: why should sending money
                                            across borders be slow and expensive? After watching individuals and
                                            businesses wait days for funds to clear, we built a system that
                                            works at the speed of modern life.
                                        </p>
                                        <p>
                                            By combining regulated banking infrastructure with blockchain
                                            technology, ZendFi makes global payments instant, secure, and
                                            inclusive for builders, creators, and businesses worldwide.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Why Choose ZendFi */}
                    <section className="py-20 md:py-28">
                        <motion.div
                            className="text-center max-w-3xl mx-auto mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                                Why Choose ZendFi
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                We designed ZendFi to give businesses and developers a faster, more
                                intelligent way to move money globally — without friction.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {reasons.map((reason, i) => (
                                <motion.div
                                    key={reason.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    whileHover={{ scale: 1.01 }}
                                    className="group"
                                >
                                    <div className={`relative p-8 md:p-10 rounded-3xl bg-gradient-to-br ${reason.gradient} border border-border/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-border`}>
                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                        <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-start">
                                            {/* Icon & Number */}
                                            <div className="flex items-center gap-6">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} border border-border/50 flex items-center justify-center`}>
                                                    <reason.icon className={`w-8 h-8 ${reason.iconColor}`} />
                                                </div>
                                                <span className="text-5xl font-bold text-muted-foreground/20">
                                                    {reason.number}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="space-y-3">
                                                <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                                                    {reason.title}
                                                </h3>
                                                <p className="text-lg text-muted-foreground leading-relaxed">
                                                    {reason.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <motion.section
                        className="py-20 md:py-28"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-3xl bg-gradient-to-br from-accent/60 to-accent/60 p-12 md:p-16 text-center overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    Ready to Transform Your Payments?
                                </h2>
                                <p className="text-xl text-white/90 mb-8">
                                    Join thousands of businesses already using ZendFi to power their global transactions.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" className="bg-white text-accent/60 hover:bg-white/90">
                                        Get Started
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                    <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10">
                                        <Link href={"mailto:hello@zendfi.tech"}>
                                            Contact Sales
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </main>

            {/* <TestimonialSection /> */}
            <Footer />
        </>
    );
}