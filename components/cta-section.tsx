"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="w-full">
      {/* CTA Section */}
      <section

      >
        <div className="relativ bg-accent/20 p-12 md:p-16 text-center overflow-hidden">


          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6">
              Ready to Build with ZendFi?
            </h2>
            <p className="text-xl text-slate-700/90 mb-8">
              Get started in minutes with our SDK. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/signup"}>
                <Button size="lg" className="bg-transparent border border-accent text-accent hover:bg-transparent/90 group">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-accent">
                <Link href={"mailto:sales@zendfi.tech"}>
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
