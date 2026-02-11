"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface DocsHeaderProps {
  onChatToggle?: () => void
}

export function DocsHeader({ onChatToggle }: DocsHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Zendfi Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-sm text-slate-500 font-medium">/ Docs</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Dashboard
            </Link>
            <Link href="/signup" className="px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg transition-all">
              Get API Key
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}