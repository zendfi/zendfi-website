import { Card } from "@/components/ui/card"
import { Zap, ArrowRight, CheckCircle2, Shield, BookOpen, MessageCircle, FileText } from "lucide-react"

export default function CreateZendFiApp() {
  return (
    <div className="space-y-6 md:space-y-8 max-w-5xl">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
          Create ZendFi App
        </h1>
        <p className="text-lg text-muted-foreground">
          Create a ZendFi-powered crypto payment app in seconds.
        </p>
      </div>

      {/* Usage */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6" />
          Usage
        </h2>
        <div className="space-y-4">
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>npx create-zendfi-app my-store</code>
          </pre>
          <p className="text-muted-foreground">Or with options:</p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>npx create-zendfi-app my-store --template nextjs-ecommerce --env production</code>
          </pre>
        </div>
      </Card>

      {/* Templates */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Templates
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Next.js E-commerce (<code>nextjs-ecommerce</code>)</h3>
            <p className="text-muted-foreground mb-2">Full-featured online store with:</p>
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Product catalog page</li>
              <li>Shopping cart</li>
              <li>Crypto checkout with ZendFi</li>
              <li>Order confirmation</li>
              <li>Webhook handler</li>
              <li>Admin dashboard integration</li>
            </ul>
          </div>
          <div className="pt-4 border-t">
            <h3 className="text-lg font-bold mb-2">Next.js SaaS (<code>nextjs-saas</code>) - Coming Soon</h3>
            <p className="text-muted-foreground mb-2">SaaS application template with:</p>
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>User authentication</li>
              <li>Subscription management</li>
              <li>Usage tracking</li>
              <li>Payment history</li>
              <li>Admin portal</li>
            </ul>
          </div>
          <div className="pt-4 border-t">
            <h3 className="text-lg font-bold mb-2">Express API (<code>express-api</code>) - Coming Soon</h3>
            <p className="text-muted-foreground mb-2">Backend API template with:</p>
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>REST API endpoints</li>
              <li>Payment processing</li>
              <li>Webhook handling</li>
              <li>Database integration</li>
              <li>Authentication middleware</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Options */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Options
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li><code>--template &lt;template&gt;</code> - Choose a template (default: interactive prompt)</li>
          <li><code>--env &lt;environment&gt;</code> - Set environment (development/production)</li>
          <li><code>--skip-install</code> - Skip dependency installation</li>
          <li><code>--skip-git</code> - Skip git initialization</li>
        </ul>
      </Card>

      {/* Quick Start */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ArrowRight className="w-6 h-6" />
          Quick Start
        </h2>
        <ol className="space-y-6 text-sm text-muted-foreground list-decimal list-inside">
          <li>
            <strong>Create your app</strong>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 mt-2 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>npx create-zendfi-app my-store</code>
            </pre>
          </li>
          <li>
            <strong>Navigate to your project</strong>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 mt-2 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>cd my-store</code>
            </pre>
          </li>
          <li>
            <strong>Add your ZendFi credentials</strong>
            <p className="text-muted-foreground mb-2">Update <code>.env</code>:</p>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>ZEND FI_API_KEY=your_api_key_here
ZENDFI_WEBHOOK_SECRET=your_webhook_secret_here</code>
            </pre>
          </li>
          <li>
            <strong>Start development server</strong>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>npm run dev</code>
            </pre>
          </li>
          <li>
            <strong>Open your browser</strong>
            <p className="text-muted-foreground mb-2">Visit <a href="http://localhost:3000" className="hover:text-primary transition-colors">http://localhost:3000</a></p>
          </li>
        </ol>
      </Card>

      {/* Features */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6" />
          Features
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li><strong>Zero Configuration</strong> - Works out of the box with ZendFi SDK</li>
          <li><strong>Production Ready</strong> - HMAC webhook verification included</li>
          <li><strong>Multiple Cryptocurrencies</strong> - Accept BTC, ETH, USDC, and more</li>
          <li><strong>Mobile Responsive</strong> - Beautiful UI on all devices</li>
          <li><strong>Fast Setup</strong> - From zero to accepting payments in 2 minutes</li>
          <li><strong>Admin Dashboard</strong> - Embedded ZendFi dashboard for managing payments</li>
        </ul>
      </Card>

      {/* Documentation */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Documentation
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li><a href="https://zendfi.tech/docs" className="hover:text-primary transition-colors">ZendFi Documentation</a></li>
          <li><a href="https://zendfi.tech/docs/sdk" className="hover:text-primary transition-colors">SDK Reference</a></li>
          <li><a href="https://zendfi.tech/docs/webhooks" className="hover:text-primary transition-colors">Webhook Guide</a></li>
          <li><a href="https://zendfi.tech/docs/api" className="hover:text-primary transition-colors">API Reference</a></li>
        </ul>
      </Card>

      {/* Support */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          Support
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li><a href="https://zendfi.tech/docs" className="hover:text-primary transition-colors">Documentation</a></li>
          <li><a href="https://discord.gg/zendfi" className="hover:text-primary transition-colors">Discord Community</a></li>
          <li><a href="https://github.com/zendfi/zendfi-toolkit/issues" className="hover:text-primary transition-colors">Report Issues</a></li>
          <li><a href="mailto:support@zendfi.tech" className="hover:text-primary transition-colors">Email Support</a></li>
        </ul>
      </Card>

      {/* License */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6" />
          License
        </h2>
        <p className="text-sm text-muted-foreground">MIT © ZendFi</p>
      </Card>

      {/* Footer */}
      <div className="text-center p-6 bg-muted rounded-md">
        <p className="text-muted-foreground">Built with ❤️ by the ZendFi team</p>
      </div>
    </div>
  )
}