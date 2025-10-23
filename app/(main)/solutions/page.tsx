"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CreditCard, Share2, Layers, CheckCircle2 } from "lucide-react"

export default function SolutionsPage() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-white via-accent/5 to-white">
            <Header />

            <main className="flex-1 mx-auto w-full py-16 md:py-24">
                {/* HERO SECTION */}
                <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-accent/10 to-white">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Everything You Need to Power Web3 Payments
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        ZendFi simplifies how businesses and creators accept, manage, and
                        automate crypto payments all in one fast, secure platform.
                    </p>
                </section>

                {/* ADVANCED PAYMENT TYPES */}
                <section id={"payment-types"} className="py-20 px-6 md:px-16 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-start gap-10">
                            <div className="md:w-1/3 flex items-center justify-center">
                                <div className="p-6 bg-accent/10 rounded-2xl">
                                    <CreditCard className="text-accent/60 w-16 h-16" />
                                </div>
                            </div>
                            <div className="md:w-2/3 mt-10">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                    Advanced Payment Types
                                </h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    Accept crypto payments in the most flexible ways possible.
                                    ZendFi gives your business multiple payment options that adapt
                                    to your workflow from simple links to advanced recurring
                                    billing and escrow systems.
                                </p>

                                <div className="space-y-6">
                                    <Feature
                                        id="payouts"
                                        title="Payment Links"
                                        desc="Create and share payment links that accept crypto from any wallet — perfect for freelancers, merchants, and creators."
                                    />
                                    <Feature
                                        title="Invoices"
                                        desc="Send professional invoices with custom amounts, due dates, and automatic payment tracking."
                                    />
                                    <Feature
                                        id="subscriptions"
                                        title="Subscriptions"
                                        desc="Set up recurring billing cycles (monthly, quarterly, or yearly) with automatic renewals and notifications."
                                    />
                                    <Feature
                                        id="installment"
                                        title="Split Payments"
                                        desc="Automatically share revenue across multiple wallets ideal for teams, DAOs, or partnerships."
                                    />
                                    <Feature
                                        title="Escrow"
                                        desc="Protect both buyers and sellers with smart escrow contracts that release funds only when agreed conditions are met."
                                    />
                                    <Feature
                                        title="Installments"
                                        desc="Offer buy-now-pay-later plans to your customers and receive the full amount upfront while ZendFi handles the rest."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOSTED CHECKOUT PAGES */}
                <section id="checkout" className="py-20 px-6 md:px-16 bg-gradient-to-b from-accent/5 to-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row-reverse items-start gap-10">
                            <div className="md:w-1/3 flex items-center justify-center">
                                <div className="p-6 bg-accent/10 rounded-2xl">
                                    <Share2 className="text-accent/60 w-16 h-16" />
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                    Hosted Checkout Pages
                                </h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    Get beautiful, secure, and mobile-optimized checkout pages out
                                    of the box — no design or development needed. Perfect for fast
                                    payments and smooth customer experiences.
                                </p>

                                <div className="space-y-6">
                                    <Feature
                                        title="Mobile-Optimized Pages"
                                        desc="Every checkout adapts beautifully to all screens — fast, frictionless, and trustworthy."
                                    />
                                    <Feature
                                        title="QR Code Payments"
                                        desc="Customers can instantly scan QR codes to pay via their preferred mobile wallets."
                                    />
                                    <Feature
                                        title="Wallet Integration"
                                        desc="Seamless connection to top wallets like Phantom, Solflare, and Backpack."
                                    />
                                    <Feature
                                        title="Pay-What-You-Want"
                                        desc="Allow customers to choose how much they want to pay great for donations and community support."
                                    />
                                    <Feature
                                        title="Custom Branding (Coming Soon)"
                                        desc="Add your logo, brand colors, and styles for a fully white-labeled experience."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INSTANT SETTLEMENTS */}
                <section className="py-20 px-6 md:px-16 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-start gap-10">
                            <div className="md:w-1/3 flex items-center justify-center">
                                <div className="p-6 bg-accent/10 rounded-2xl">
                                    <Layers className="text-accent/60 w-16 h-16" />
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                    Instant Settlements
                                </h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    Get your funds in seconds not days. ZendFi eliminates
                                    traditional delays, offering real-time crypto settlements with
                                    zero rolling reserves or holds.
                                </p>

                                <div className="space-y-6">
                                    <Feature
                                        title="Lightning-Fast Payouts"
                                        desc="Funds hit your wallet within seconds of payment confirmation — no bank queues or third-party approvals."
                                    />
                                    <Feature
                                        title="Real-Time Balance Visibility"
                                        desc="Track every transaction and settlement as it happens with full transparency."
                                    />
                                    <Feature
                                        title="No Settlement Holds"
                                        desc="Unlike traditional processors, ZendFi doesn’t freeze or hold your revenue."
                                    />
                                    <Feature
                                        title="Automatic Conversion"
                                        desc="Optionally auto-convert USDC to SOL instantly, keeping your treasury balanced."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-b from-accent/10 to-accent/5">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Build with ZendFi Today
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Start accepting crypto, automate billing, and settle instantly
                        all in one place.
                    </p>
                    <a
                        href="/get-started"
                        className="inline-block px-8 py-3 bg-accent/60 text-white rounded-full text-lg font-semibold hover:bg-accent/70 transition-all"
                    >
                        Get Started
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    )
}

/* Small reusable feature component */
function Feature({ title, desc, id }: { title: string; desc: string, id?: string }) {
    return (
        <div id={id} className="flex gap-3 items-start">
            <CheckCircle2 className="text-accent/50 mt-1 flex-shrink-0" />
            <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{desc}</p>
            </div>
        </div>
    )
}
