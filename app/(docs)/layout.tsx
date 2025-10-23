"use client"

import React from "react"
import Link from "next/link"
import { DocsHeader } from "./_components/DocsHeader"

function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks = [
    { href: "/docs", label: "Getting Started" },
    { href: "/docs/api", label: "API Reference" },
    { href: "/docs/sdks", label: "SDKs & Libraries" },
  ]

  return (
    <div className="min-h-screen bg-background">
    <DocsHeader />
      <div className="pt-16 flex">
        {/* Sidebar - fixed on desktop */}
        <aside className="hidden md:block w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] border-r border-border bg-white overflow-y-auto">
          <nav className="p-6">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </aside>

        <main className="w-full md:ml-64 p-4 md:p-8 max-w-4xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DocsLayout;