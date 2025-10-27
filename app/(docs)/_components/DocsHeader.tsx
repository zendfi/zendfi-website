"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export const DocsHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/docs", label: "Getting Started" },
    { href: "/docs/api", label: "API Reference" },
    { href: "/docs/payment-links", label: "Payment Links" },
    { href: "/docs/webhooks", label: "Webhooks" },
    { href: "/docs/wallet-management", label: "Wallet Management" },
    { href: "/docs/advanced", label: "Advanced Features" },
    { href: "/docs/sdks", label: "SDKs & Libraries" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Zendfi Logo"
              width={120}
              height={32}
              className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
              priority
            />
          </Link>

          {/* <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav> */}

          <div className="hidden md:block">
            <Link
              href="https://api.zendfi.tech/dashboard"
              className="px-4 py-2 text-sm font-semibold text-white bg-accent/80 rounded-lg hover:opacity-90 transition-all"
            >
              Get API Key
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed top-16 left-0 z-50 h-[calc(100vh-64px)] w-64 bg-card border-r border-border p-6 overflow-y-auto transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Documentation</h3>
            <div className="space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/50">
            <Link
              href="api.zendfi.tech/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-4 py-2 text-sm font-semibold border-1 border-accent rounded-lg hover:opacity-90 transition-all"
            >
              Get API Key
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  )
}
