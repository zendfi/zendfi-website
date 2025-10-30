import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Platform Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">PLATFORM</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Zendfi for Businesses
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Zendfi for Individuals
                </a>
              </li>
            </ul>
          </div>

          {/* Use Cases Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">USE CASES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Cross-border Payments
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Remittances
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Treasury Management
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Merchants
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Social Commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  SMEs
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  About Zendfi
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Meet the Team
                </a>
              </li>
            </ul>
          </div>

          {/* Insights Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">INSIGHTS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Executive Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Legal & Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Your Privacy Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">NEWSLETTER</h3>
            <div className="flex flex-col gap-3 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-accent text-xs"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs">SUBSCRIBE</Button>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Get Zendfi updates and insights delivered to your inbox.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo.png"
                  alt="Zendfi Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
                />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="https://x.com/zendfi_" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}