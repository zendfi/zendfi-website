"use client"

import { Button } from "@/components/ui/button"
import { Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between gap-12">

        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-foreground">Explore Zendfi</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Cross-border payments reinvented for speed, affordability, and seamless global access.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-4">
            <Link href="/docs">
              <Button size="lg" className="bg-accent text-primary-foreground hover:bg-accent/90">
                Documentation
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="gap-2 hover:text-accent max-w-72">
              <Video className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="relative bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-10 border border-border space-y-8">
            <Image
              src="/images/logo.png"
              alt="Zendfi Logo"
              width={140}
              height={20}
              className="filter hue-rotate-[19deg] brightness-110"
            />
            <p className="text-base text-muted-foreground max-w-sm text-center lg:text-start">
              Accept crypto payments in minutes. It's simple, fast, and global.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
