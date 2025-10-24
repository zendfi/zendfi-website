import Image from "next/image"

export function SecuritySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Your security, our foundation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ZendFi is built with bank-grade protection, real-time monitoring, and continuous compliance checks.
                So every transaction remains private, secure, and reliable around the clock.
              </p>
            </div>

            <div className="space-y-6">
              {/* 1 */}
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent">
                  1
                </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Enterprise-grade protection
                  </h3>
                  <p className="text-muted-foreground">
                    We apply the same security standards used by leading financial institutions to safeguard every piece of data.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent">
                  2
                </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Always compliant
                  </h3>
                  <p className="text-muted-foreground">
                    ZendFi follows strict data privacy and international compliance frameworks to protect user trust across borders.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent">
                  3
                </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Reliable by design
                  </h3>
                  <p className="text-muted-foreground">
                    With global infrastructure and constant monitoring, ZendFi ensures your transfers never stop even when the unexpected happens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative w-full h-[600px] flex items-center justify-center p-3">
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/images/global-security.png"
                  alt="Secure payments network illustration"
                  width={1000}
                  height={1000}
                  className="object-contain hover:scale-105 transition-transform duration-700 ease-out"
                  quality={85}
                />

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-900">Trusted Worldwide</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-900">Continuous Protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
