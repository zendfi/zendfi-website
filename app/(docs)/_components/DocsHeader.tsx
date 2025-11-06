"use client"

import { Headset, Menu, Book, Code, Zap, Shield, Wallet, Terminal, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { DocsSearch } from "@/app/(docs)/_components/docs-search"
import { docData } from "@/lib/doc-json"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"

export const DocsHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const navigationSections = [
    {
      title: "Getting Started",
      id: "getting-started",
      items: [
        { label: "Getting Started", href: "/docs", icon: Book },
      ]
    },
    {
      title: "API & Integration",
      id: "api-integration",
      items: [
        { label: "Create Payment", href: "/docs/api", icon: Code },
        { label: "Payment Links", href: "/docs/payment-links", icon: Zap },
        { label: "Webhooks", href: "/docs/webhooks", icon: Zap },
      ]
    },
    {
      title: "Features",
      id: "features",
      items: [
        { label: "Wallet Management", href: "/docs/wallet-management", icon: Wallet },
        { label: "Advanced Features", href: "/docs/advanced", icon: Shield },
      ]
    },
    {
      title: "Developer Tools",
      id: "developer-tools",
      items: [
        { label: "SDKs & Libraries", href: "/docs/sdks", icon: Package },
        { label: "CLI", href: "/docs/cli", icon: Terminal },
      ]
    }
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

          {/* Desktop: Search + API Key Button */}
          <div className="hidden md:flex items-center justify-between gap-3 ">
            <DocsSearch docsData={docData as any} />
            <Link href="/signup">
              <Button
                variant="outline"
                size="lg"
                className="border-border transition-all duration-300 text-white bg-accent cursor-pointer"
              >
                Get API Key
              </Button>
            </Link>
          </div>

          {/* Mobile: Search + Menu Trigger */}
          {isMobile && (
            <div className="flex md:hidden items-center gap-2">
              <DocsSearch docsData={docData as any} />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Toggle menu"
                    className="border rounded bg-gray-100"
                  >
                    <Menu className="w-6 h-6 text-foreground" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="left" className="w-64 p-0 flex flex-col">
                  <SheetHeader className="p-6 pb-4 text-left border-b border-slate-200/50">
                    <SheetTitle className="text-sm font-semibold">Documentation</SheetTitle>
                    <SheetDescription className="sr-only">
                      Navigate through documentation sections
                    </SheetDescription>
                  </SheetHeader>

                  <nav className="flex-1 overflow-y-auto px-4 py-4">
                    <div className="space-y-6">
                      {navigationSections.map((section) => (
                        <div key={section.id}>
                          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
                            {section.title}
                          </h3>
                          <div className="space-y-1">
                            {section.items.map((item) => {
                              const isActive = pathname === item.href
                              const Icon = item.icon
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`
                                flex items-center gap-2 px-3 py-2 text-sm rounded-lg
                                transition-colors
                                ${isActive
                                      ? "bg-accent text-accent-foreground font-medium"
                                      : "text-foreground hover:bg-secondary"
                                    }
                              `}
                                >
                                  {Icon && (
                                    <Icon className={`w-4 h-4 ${isActive ? "text-accent-foreground" : "text-muted-foreground"}`} />
                                  )}
                                  <span>{item.label}</span>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </nav>

                  <div className="p-4 border-t border-slate-200/50 mt-auto">
                    <Link
                      href="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        variant="outline"
                        className="w-full text-white bg-accent hover:bg-accent/90"
                      >
                        Get API Key
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}