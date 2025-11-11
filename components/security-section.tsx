"use client"
import PixelBlast from "./ui-pro/pixel-blast"
import Image from "next/image"

export function SecuritySection() {
  return (
    <section className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full py-24 md:py-32 px-6 lg:px-16 overflow-hidden bg-background">
      {/* Left content */}
      <div className="relative z-10 text-center lg:text-left max-w-2xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent leading-tight">
          Your security, our foundation
        </h2>
        <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
          Built with advanced protection, real-time monitoring, and continuous compliance.
          Every transaction stays private, secure, and reliable—always.
        </p>
      </div>

      {/* Right visual area */}
      <div className="relative w-full mt-12 lg:mt-0">
        {/* Strong PixelBlast background */}
        <div className="absolute -inset-10 lg:-inset-20 z-0">
          <PixelBlast
            variant="circle"
            pixelSize={5}
            color="#B19EEF"
            patternScale={3.2}
            patternDensity={1.3}
            pixelSizeJitter={0.6}
            enableRipples
            rippleSpeed={0.45}
            rippleThickness={0.2}
            rippleIntensityScale={1.4}
            liquid
            liquidStrength={0.25}
            liquidRadius={1.3}
            liquidWobbleSpeed={4.5}
            speed={0.7}
            edgeFade={0.15}
            transparent
          />
        </div>

        {/* Security Illustration */}
        <div className="relative z-10 max-w-sm">
          <Image
            src="/images/global-security.png"
            alt="Security illustration"
            width={300}
            height={300}
            className="object-contain w-full h-auto mx-auto transition-transform duration-700 ease-out hover:scale-105"
            quality={90}
          />

          {/* Floating badges */}
          <div className="absolute top-4 left-4 bg-white/80 border rounded-xl shadow-lg p-3 flex items-center space-x-2">
            <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="h-3.5 w-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground">Trusted Worldwide</span>
          </div>

          <div className="absolute bottom-4 right-4 bg-white/80 border rounded-xl shadow-lg p-3 flex items-center space-x-2">
            <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground">Continuous Protection</span>
          </div>
        </div>
      </div>
    </section>
  )
}
