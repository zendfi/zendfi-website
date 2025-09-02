import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Zendfi Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
