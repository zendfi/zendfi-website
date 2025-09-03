import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-balance">Explore Zendfi</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              International money transfers reimagined for speed, savings, and simplicity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/waitlist">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  Join The Waitlist
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-border bg-transparent">
                Watch Demo
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/logo.png"
                    alt="Zendfi Logo"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>
                <div className="text-sm text-muted-foreground"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-accent/30 rounded-full"></div>
                  <div className="h-2 bg-accent/20 rounded-full w-3/4"></div>
                  <div className="h-2 bg-accent/10 rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
