"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Bot, Menu, X, ChevronRight, Book, Code, Zap, Shield, Wallet, Terminal, Package, RefreshCw, Calendar, FileText, Users } from "lucide-react"
import { DocsHeader } from "./_components/DocsHeader"
import { DocsSidebar } from "./_components/Chat-sider"
import { docData } from "@/lib/doc-json"

function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
        { label: "Payments", href: "/docs/api", icon: Code },
        { label: "Payment Splits", href: "/docs/advanced", icon: Users },
        { label: "Subscriptions", href: "/docs/api/subscriptions", icon: RefreshCw },
        { label: "Escrows", href: "/docs/api/escrows", icon: Shield },
        { label: "Installments", href: "/docs/api/installments", icon: Calendar },
        { label: "Invoices", href: "/docs/api/invoices", icon: FileText },
        { label: "Payment Links", href: "/docs/payment-links", icon: Zap },
        { label: "Webhooks", href: "/docs/webhooks", icon: Zap },
      ]
    },
    {
      title: "Features",
      id: "features",
      items: [
        { label: "Wallet Management", href: "/docs/wallet-management", icon: Wallet },
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
    <div className="min-h-screen bg-background">
      <DocsHeader />
      
      {/* Left Sidebar - Fixed position */}
      <aside
        className={`
          fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-border
          overflow-y-auto transition-transform duration-300 z-40
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <nav className="p-4 space-y-6">
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
                      onClick={() => setIsSidebarOpen(false)}
                      className={`
                        flex items-center gap-2 px-3 py-2 text-sm rounded-lg
                        transition-colors group
                        ${
                          isActive
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-foreground hover:bg-secondary"
                        }
                      `}
                    >
                      {Icon && (
                        <Icon className={`w-4 h-4 ${isActive ? "text-accent-foreground" : "text-muted-foreground group-hover:text-foreground"}`} />
                      )}
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content - Fixed margin for header and sidebar */}
      <main className="pt-16 md:ml-64 min-h-screen">
        <div className="max-w-5xl p-4 sm:p-6 lg:p-10 pb-20">
          {children}
        </div>
      </main>

      {/* Chatbot Toggle Button - Fixed bottom right */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 z-50 shadow-lg hover:text-accent"
      >
        <Bot className="w-4 h-4 mr-2" />
        Docs Chat
      </Button>

      {/* Chatbot Sidebar - Slides in from right */}
      <DocsSidebar 
        docData={docData} 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />
    </div>
  )
}

export default DocsLayout