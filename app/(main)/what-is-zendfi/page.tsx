"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TestimonialSection } from "@/components/testimonial-section";

export default function AboutPage() {
    const reasons = [
        {
            number: "1",
            title: "Faster Than Banks",
            desc: "Traditional transfers take days — ZendFi settles cross-border payments in minutes using secure blockchain infrastructure.",
            img: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">

                <circle cx="100" cy="100" r="95" fill="oklch(0.85 0.05 280)" opacity="0.4" />
                <circle cx="100" cy="100" r="75" fill="oklch(0.75 0.08 280)" opacity="0.6" />


                <circle cx="100" cy="100" r="6" fill="#7173d7" />

                <g transform="rotate(60 100 100)">
                    <rect x="97" y="40" width="6" height="40" rx="3" fill="#7173d7" />
                    <circle cx="100" cy="40" r="3" fill="#7173d7" />
                </g>

                <g transform="rotate(300 100 100)">
                    <rect x="98.5" y="25" width="3" height="55" rx="1.5" fill="#7173d7" />
                    <circle cx="100" cy="25" r="2" fill="#7173d7" />
                </g>


                <g transform="rotate(0 100 100)">
                    <line x1="100" y1="100" x2="100" y2="25" stroke="#A8AAF0" stroke-width="1" stroke-linecap="round" />
                    <circle cx="100" cy="170" r="3" fill="#A8AAF0" />
                </g>

                {/* <circle cx="150" cy="130" r="12" fill="oklch(0.8 0.1 280)" stroke="#7173d7" stroke-width="1.5" /> */}
                <g stroke="#7173d7" stroke-width="1.5" stroke-linecap="round">
                    <line x1="150" y1="130" x2="150" y2="120" />
                    <line x1="150" y1="130" x2="156" y2="130" />
                    <text x="150" y="135" text-anchor="middle" font-size="8" fill="#7173d7" font-family="sans-serif">SEC</text>
                </g>
            </svg>
        },
        {
            number: "2",
            title: "Built for Global Builders",
            desc: "Designed for businesses and developers building across borders, especially in emerging markets like Africa.",
            img: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" fill="oklch(0.6 0.15 280)" opacity="0.15" />
                <circle cx="100" cy="100" r="60" fill="oklch(0.6 0.15 280)" opacity="0.3" stroke="oklch(0.6 0.15 280)" strokeWidth="3" />
                <ellipse cx="100" cy="100" rx="60" ry="20" stroke="oklch(0.7 0.12 280)" strokeWidth="2" fill="none" />
                <ellipse cx="100" cy="100" rx="60" ry="40" stroke="oklch(0.7 0.12 280)" strokeWidth="2" fill="none" />
                <ellipse cx="100" cy="100" rx="20" ry="60" stroke="oklch(0.7 0.12 280)" strokeWidth="2" fill="none" />
                <ellipse cx="100" cy="100" rx="40" ry="60" stroke="oklch(0.7 0.12 280)" strokeWidth="2" fill="none" />
                <circle cx="80" cy="70" r="5" fill="oklch(0.6 0.15 280)" />
                <circle cx="130" cy="90" r="5" fill="oklch(0.6 0.15 280)" />
                <circle cx="90" cy="130" r="5" fill="oklch(0.6 0.15 280)" />
                <circle cx="120" cy="120" r="5" fill="oklch(0.6 0.15 280)" />
                <line x1="80" y1="70" x2="130" y2="90" stroke="oklch(0.65 0.13 280)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="90" y1="130" x2="120" y2="120" stroke="oklch(0.65 0.13 280)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>,
        },
        {
            number: "3",
            title: "Lower Fees, Greater Access",
            desc: "By removing middlemen, ZendFi cuts transfer costs up to 75%, making international payments affordable for everyone.",
            img: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" fill="oklch(0.6 0.15 280)" opacity="0.15" />
                <circle cx="100" cy="100" r="50" fill="oklch(0.6 0.15 280)" opacity="0.3" stroke="oklch(0.6 0.15 280)" strokeWidth="3" />

                {/* Dollar sign - cleaner design */}
                <line x1="100" y1="75" x2="100" y2="125" stroke="oklch(0.6 0.15 280)" strokeWidth="3" strokeLinecap="round" />
                <path d="M110 80 Q110 75 105 75 L95 75 Q85 75 85 85 Q85 95 95 95 L105 95 Q115 95 115 105 Q115 115 105 115 L95 115 Q90 115 90 120" stroke="oklch(0.6 0.15 280)" strokeWidth="4" strokeLinecap="round" fill="none" />

                {/* Down arrow */}
                <path d="M140 60 L140 100 M130 90 L140 100 L150 90" stroke="oklch(0.65 0.2 160)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                {/* Sparkles */}
                <path d="M60 60 L65 65 L60 70 L55 65 Z" fill="oklch(0.7 0.12 280)" />
                <path d="M140 130 L145 135 L140 140 L135 135 Z" fill="oklch(0.7 0.12 280)" />
                <path d="M70 140 L73 143 L70 146 L67 143 Z" fill="oklch(0.65 0.13 280)" />
            </svg>,
        },
        {
            number: "4",
            title: "Reliable & Compliant",
            desc: "We partner with regulated financial providers to ensure every transaction is compliant, secure, and fully transparent.",
            img: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" fill="oklch(0.6 0.15 280)" opacity="0.15" />
                <path d="M100 50 L140 70 L140 100 Q140 130 100 150 Q60 130 60 100 L60 70 Z" fill="oklch(0.6 0.15 280)" opacity="0.3" stroke="oklch(0.6 0.15 280)" strokeWidth="3" />
                <path d="M80 100 L95 115 L120 80" stroke="oklch(0.6 0.15 280)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <rect x="130" y="50" width="20" height="25" rx="3" fill="oklch(0.8 0.08 280)" stroke="oklch(0.6 0.15 280)" strokeWidth="2" />
                <path d="M135 50 L135 45 Q135 40 140 40 Q145 40 145 45 L145 50" stroke="oklch(0.6 0.15 280)" strokeWidth="2" fill="none" />
                <circle cx="140" cy="60" r="2" fill="oklch(0.6 0.15 280)" />
                <path d="M50 120 Q60 115 70 120" stroke="oklch(0.7 0.12 280)" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M130 130 Q140 125 150 130" stroke="oklch(0.7 0.12 280)" strokeWidth="2" fill="none" opacity="0.6" />
            </svg>
            ,
        },
        {
            number: "5",
            title: "Developer-First",
            desc: "Our easy-to-use APIs and SDKs allow you to integrate payment solutions into your apps in minutes, not weeks.",
            img: <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" fill="oklch(0.6 0.15 280)" opacity="0.15" />
                <rect x="50" y="60" width="100" height="80" rx="8" fill="oklch(0.6 0.15 280)" opacity="0.3" stroke="oklch(0.6 0.15 280)" strokeWidth="3" />
                <circle cx="60" cy="72" r="3" fill="oklch(0.6 0.15 280)" />
                <circle cx="70" cy="72" r="3" fill="oklch(0.6 0.15 280)" />
                <circle cx="80" cy="72" r="3" fill="oklch(0.6 0.15 280)" />
                <path d="M70 90 L65 100 L70 110" stroke="oklch(0.6 0.15 280)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M130 90 L135 100 L130 110" stroke="oklch(0.6 0.15 280)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="80" y1="95" x2="115" y2="95" stroke="oklch(0.7 0.12 280)" strokeWidth="3" strokeLinecap="round" />
                <line x1="80" y1="105" x2="120" y2="105" stroke="oklch(0.7 0.12 280)" strokeWidth="3" strokeLinecap="round" />
                <rect x="90" y="115" width="10" height="3" fill="oklch(0.6 0.15 280)" />
                <circle cx="160" cy="90" r="6" fill="oklch(0.65 0.13 280)" />
                <circle cx="160" cy="110" r="6" fill="oklch(0.65 0.13 280)" />
                <line x1="150" y1="95" x2="160" y2="90" stroke="oklch(0.7 0.12 280)" strokeWidth="2" />
                <line x1="150" y1="105" x2="160" y2="110" stroke="oklch(0.7 0.12 280)" strokeWidth="2" />
            </svg>,
        },
    ];

    return (
        <>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
                <Header />
                <div className="relative max-w-7xl mx-auto">
                    <motion.section
                        className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Powering the Future of Global Payments
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            ZendFi bridges traditional finance and blockchain technology to make
                            payments instant, affordable, and borderless for everyone.
                        </p>
                        <Link href="/pricing">
                            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                                See Pricing
                            </Button>
                        </Link>
                    </motion.section>
                </div>

                {/* Story Section */}
                <motion.section
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-foreground">
                            Our Story
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            ZendFi started with a simple question; why should sending money
                            across borders be slow and expensive? After watching individuals and
                            businesses wait days for funds to clear, we built a system that
                            works at the speed of modern life.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            By combining regulated banking infrastructure with blockchain
                            technology, ZendFi makes global payments instant, secure, and
                            inclusive for builders, creators, and businesses worldwide.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/images/story.png"
                            alt="ZendFi Story"
                            width={480}
                            height={400}
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                </motion.section>

                {/* Why Choose ZendFi */}
                <motion.section
                    className="space-y-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-foreground">
                            Why Choose ZendFi
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            We designed ZendFi to give businesses and developers a faster, more
                            intelligent way to move money globally — without friction.
                        </p>
                    </div>

                    {reasons.map((r, i) => (
                        <div
                            key={r.title}
                            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"
                                }`}
                        >
                            <motion.div
                                className="space-y-3"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="rounded-full bg-accent/10 w-5 h-5 p-4 flex items-center justify-center">
                                    <span className="text-accent font-bold">{r.number}</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground">
                                    {r.title}
                                </h3>
                                <p className="text-muted-foreground">{r.desc}</p>
                            </motion.div>

                            <motion.div
                                className="flex justify-center"
                                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {r.img}
                            </motion.div>
                        </div>
                    ))}
                </motion.section>

                {/* Mission & Vision */}
                <motion.section
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                </motion.section>
            </main>
            <TestimonialSection />
            <Footer />
        </>
    );
}
