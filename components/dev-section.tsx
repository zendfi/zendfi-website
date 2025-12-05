"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function DevSection() {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'sdk'>('dashboard');
    
    return (
        <section className="py-12 md:py-20 px-4 md:px-12 dark:bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Top Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                    {/* Developer Toolkit Card */}
                    <div className="p-8 md:p-12 rounded-2xl border-2 border-accent bg-white dark:bg-transparent">
                        <div className="text-xs md:text-sm font-semibold text-accent mb-3 tracking-wide">APIS AND SDKS</div>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4"> Integrate in Minutes</h2>
                        <p className="text-base md:text-lg text-gray-600 dark:text-slate-400 mb-6 md:mb-8">
                        Our simple REST API and SDKs let you integrate global crypto payments in minutes, not months, without needing a blockchain team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Link href={"/docs"} className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                                    Read docs
                                </button>
                            </Link>
                            <Link href={"/docs/api"} className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:border-accent/80 transition-colors">
                                    Learn more
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Dashboard Card */}
                    <div className="bg-white dark:bg-transparent p-8 md:p-12 rounded-2xl border-2 border-accent">
                        <div className="text-xs md:text-sm font-semibold text-accent mb-3 tracking-wide">INSTANT CASH FLOW</div>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">Dashboard</h2>
                        <p className="text-base md:text-lg text-gray-600 dark:text-slate-400 mb-6 md:mb-8">
                        Manage your entire global revenue stream through a single, secure merchant dashboard.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Link href={"/signup"}>
                            <button className="w-full sm:w-auto px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                                Get Started
                            </button>
                            </Link>
                            <Link href={"/what-is-zendfi"}>
                            <button className="w-full sm:w-auto px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:border-accent/80 transition-colors">
                                Learn more
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tabbed Interface Section */}
                {/* <div className="bg-white rounded-2xl border-2 border-accent overflow-hidden">
                   
                    <div className="border-b-2 border-accent flex flex-col sm:flex-row">
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={`flex-1 px-4 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold transition-colors ${
                                activeTab === 'dashboard'
                                    ? 'bg-accent/10 text-accent border-b-4 border-accent'
                                    : 'text-gray-600 hover:text-accent hover:bg-accent/5'
                            }`}
                        >
                            Dashboard Interface
                        </button>
                        <button
                            onClick={() => setActiveTab('sdk')}
                            className={`flex-1 px-4 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold transition-colors ${
                                activeTab === 'sdk'
                                    ? 'bg-accent/10 text-accent border-b-4 border-accent'
                                    : 'text-gray-600 hover:text-accent hover:bg-accent/5'
                            }`}
                        >
                            Developer SDK
                        </button>
                    </div>

                    <div className="p-4 md:p-8">
                        {activeTab === 'dashboard' ? (
                            <div className="w-full">
                                <Image 
                                    src={"/images/dashboard2.png"} 
                                    alt="Dashboard image" 
                                    width={1400} 
                                    height={1000} 
                                    className="rounded-lg w-full h-auto"
                                />
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 md:mb-8">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Python SDK Integration</h3>
                                        <p className="text-sm md:text-base text-gray-600">Simple, powerful API for seamless payment integration</p>
                                    </div>
                                    <div className="flex gap-2 overflow-x-auto pb-2">
                                        <button className="px-3 md:px-4 py-2 bg-accent/10 text-accent rounded-lg text-xs md:text-sm font-medium hover:bg-accent/20 transition-colors whitespace-nowrap">
                                            Python
                                        </button>
                                        <button className="px-3 md:px-4 py-2 text-gray-600 rounded-lg text-xs md:text-sm font-medium hover:bg-accent/5 transition-colors whitespace-nowrap">
                                            Node.js
                                        </button>
                                        <button className="px-3 md:px-4 py-2 text-gray-600 rounded-lg text-xs md:text-sm font-medium hover:bg-accent/5 transition-colors whitespace-nowrap">
                                            PHP
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-accent">
                                    <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-gray-800 border-b border-gray-700">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="flex gap-1.5 md:gap-2">
                                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <span className="text-gray-400 text-xs md:text-sm">transfer.py</span>
                                        </div>
                                      
                                    </div>
                                    <div className="p-4 md:p-6 overflow-x-auto">
                                        <pre className="text-xs md:text-sm leading-relaxed">
                                            <code>
                                                <span className="text-accent">from</span> <span className="text-white">zendfi</span> <span className="text-accent">import</span> <span className="text-white">ZendFi</span>
                                                {'\n\n'}
                                                <span className="text-white">zendfi</span> <span className="text-accent">=</span> <span className="text-yellow-300">ZendFi</span><span className="text-white">(</span><span className="text-green-400">"YOUR_API_KEY"</span><span className="text-white">)</span>
                                                {'\n\n'}
                                                <span className="text-gray-500"># Create a transfer</span>
                                                {'\n'}
                                                <span className="text-white">transfer</span> <span className="text-accent">=</span> <span className="text-white">zendfi</span><span className="text-accent">.</span><span className="text-yellow-300">transfer</span><span className="text-white">(</span>
                                                {'\n'}
                                                <span className="text-white">    amount</span><span className="text-accent">=</span><span className="text-blue-400">500</span><span className="text-white">,</span>
                                                {'\n'}
                                                <span className="text-white">    from_currency</span><span className="text-accent">=</span><span className="text-green-400">"USD"</span><span className="text-white">,</span>
                                                {'\n'}
                                                <span className="text-white">    to_currency</span><span className="text-accent">=</span><span className="text-green-400">"NGN"</span><span className="text-white">,</span>
                                                {'\n'}
                                                <span className="text-white">    recipient</span><span className="text-accent">=</span><span className="text-green-400">"0123456789"</span><span className="text-white">,</span>
                                                {'\n'}
                                                <span className="text-white">    description</span><span className="text-accent">=</span><span className="text-green-400">"Payment"</span>
                                                {'\n'}
                                                <span className="text-white">)</span>
                                                {'\n\n'}
                                                <span className="text-accent">print</span><span className="text-white">(transfer</span><span className="text-accent">.</span><span className="text-white">status)</span>
                                                {'\n'}
                                                <span className="text-accent">print</span><span className="text-white">(transfer</span><span className="text-accent">.</span><span className="text-white">id)</span>
                                            </code>
                                        </pre>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                    <div className="bg-accent/5 p-5 md:p-6 rounded-lg border-2 border-accent">
                                        <div className="text-2xl md:text-3xl mb-2">⚡</div>
                                        <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Lightning Fast</h4>
                                        <p className="text-xs md:text-sm text-gray-600">Process payments in milliseconds with our optimized infrastructure</p>
                                    </div>
                                    <div className="bg-accent/5 p-5 md:p-6 rounded-lg border-2 border-accent">
                                        <div className="text-2xl md:text-3xl mb-2">🔒</div>
                                        <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Secure by Default</h4>
                                        <p className="text-xs md:text-sm text-gray-600">Bank-grade encryption and compliance with global standards</p>
                                    </div>
                                    <div className="bg-accent/5 p-5 md:p-6 rounded-lg border-2 border-accent sm:col-span-2 lg:col-span-1">
                                        <div className="text-2xl md:text-3xl mb-2">🌍</div>
                                        <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Global Coverage</h4>
                                        <p className="text-xs md:text-sm text-gray-600">Support for 180+ countries and 135+ currencies</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div> */}
            </div>
        </section>
    );
}