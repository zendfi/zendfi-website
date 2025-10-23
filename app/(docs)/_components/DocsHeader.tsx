import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const DocsHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/docs", label: "Getting Started" },
        { href: "/docs/api", label: "API Reference" },
        { href: "/docs/sdks", label: "SDKs & Libraries" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-12 p-1">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="Zendfi Logo"
                                width={120}
                                height={32}
                                className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden fixed top-20 right-4 z-40 p-2 rounded-md hover:bg-secondary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
                    </button>

                    {/* Mobile Sidebar Drawer */}
                    {mobileMenuOpen && (
                        <div className="md:hidden fixed inset-0 top-16 z-30 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
                    )}
                    <aside
                        className={`md:hidden fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-card border-r border-border p-6 overflow-y-auto transition-transform duration-300 z-40 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <nav className="space-y-1">
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-foreground mb-3">Documentation</h3>
                                <div className="space-y-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </aside>

                    <div className="pt-4 border-t border-slate-200/50 px-4 space-y-2 flex">
                        <Link href="/signup" className="w-40 block text-center px-4 py-2 text-sm font-semibold text-white bg-accent rounded-lg transition-all">
                            Get API Key
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    )
}