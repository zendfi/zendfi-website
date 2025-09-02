import { TrendingUp, ArrowRight } from "lucide-react"

export function StatisticsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-8">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>

            <h2 className="font-heading text-4xl font-bold text-slate-900 mb-6 text-balance">
              Built on proven technology, designed for the future
            </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
              Zendfi leverages cutting-edge blockchain infrastructure and regulatory-compliant digital assets
              to revolutionize cross-border payments. Our network enables financial institutions to process
              transactions faster, cheaper, and more securely than traditional methods.
            </p>

            <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
              <span className="font-medium">Learn more about our technology</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">How Zendfi Works</h3>

                <p className="text-slate-600 mb-6">
                  Discover the seamless process behind our payment network - from initiation to settlement.
                </p>

                <div className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-500 rounded-lg">
                  <span className="text-sm font-medium">Process flow coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
