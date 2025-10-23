import { Card } from "@/components/ui/card"

export default function GettingStarted() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">Getting Started</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Integrate ZendFi in 10-15 minutes and process your first transaction.
        </p>
      </div>

      {/* Create Developer Account */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">1. Create a Developer Account</h2>
        <Card className="p-4 md:p-6 bg-card border border-border">
          <p className="text-foreground mb-4 text-sm md:text-base">
            Sign up for a ZendFi developer account to get started:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-foreground text-sm md:text-base">
            <li>
              Visit{" "}
              <code className="bg-secondary px-2 py-1 rounded text-xs md:text-sm break-all">
                https://dashboard.zendfi.com/signup
              </code>
            </li>
            <li>Enter your email and create a password</li>
            <li>Verify your email address</li>
            <li>Complete your profile information</li>
            <li>Access your API keys from the dashboard</li>
          </ol>
        </Card>
      </section>

      {/* Authentication */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">2. Authentication</h2>
        <Card className="p-4 md:p-6 bg-card border border-border">
          <p className="text-foreground mb-4 text-sm md:text-base">
            All API requests require authentication using your API key. Include it in the Authorization header:
          </p>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <pre>{`Authorization: Bearer YOUR_API_KEY`}</pre>
          </div>
        </Card>
      </section>

      {/* Environments */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">3. Environments</h2>
        <Card className="p-4 md:p-6 bg-card border border-border">
          <p className="text-foreground mb-4 text-sm md:text-base">
            ZendFi provides two environments for development and production:
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-foreground text-sm md:text-base">Sandbox</h4>
              <p className="text-muted-foreground text-xs md:text-sm">
                <code className="bg-secondary px-2 py-1 rounded break-all">https://sandbox-api.zendfi.com/v1</code>
              </p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">Use for testing without real transactions</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm md:text-base">Production</h4>
              <p className="text-muted-foreground text-xs md:text-sm">
                <code className="bg-secondary px-2 py-1 rounded break-all">https://api.zendfi.com/v1</code>
              </p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">Use for live transactions</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Sample Transaction */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">4. Your First Transaction</h2>
        <Card className="p-4 md:p-6 bg-card border border-border">
          <p className="text-foreground mb-4 text-sm md:text-base">Make your first transfer using cURL:</p>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <pre>{`curl -X POST https://sandbox-api.zendfi.com/v1/transfer \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 100,
    "currency": "USD",
    "recipient": "NG_BANK_ACCOUNT",
    "description": "Test transfer"
  }'`}</pre>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm mt-4">
            Replace <code className="bg-secondary px-2 py-1 rounded">YOUR_API_KEY</code> with your actual API key.
          </p>
        </Card>
      </section>

      {/* Webhook Setup */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">5. Webhook Setup</h2>
        <Card className="p-4 md:p-6 bg-card border border-border">
          <p className="text-foreground mb-4 text-sm md:text-base">
            Configure webhooks to receive real-time payment status updates:
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-foreground text-sm md:text-base">Webhook Events</h4>
              <ul className="list-disc list-inside text-muted-foreground text-xs md:text-sm space-y-1 mt-2">
                <li>
                  <code className="bg-secondary px-2 py-1 rounded">transfer.completed</code> - Transfer successful
                </li>
                <li>
                  <code className="bg-secondary px-2 py-1 rounded">transfer.failed</code> - Transfer failed
                </li>
                <li>
                  <code className="bg-secondary px-2 py-1 rounded">transfer.pending</code> - Transfer pending
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-foreground text-sm md:text-base">Example Webhook Payload</h4>
              <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mt-2">
                <pre>{`{
  "event": "transfer.completed",
  "transfer_id": "txn_123456",
  "amount": 100,
  "currency": "USD",
  "status": "completed",
  "timestamp": "2024-01-15T10:30:00Z"
}`}</pre>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6 md:mt-8">
        <p className="text-foreground font-semibold text-sm md:text-base">Next Steps</p>
        <p className="text-muted-foreground text-xs md:text-sm mt-2">
          Check out the{" "}
          <a href="/docs/api" className="text-primary hover:underline">
            API Reference
          </a>{" "}
          for detailed endpoint documentation or explore our{" "}
          <a href="/docs/sdks" className="text-primary hover:underline">
            SDKs & Libraries
          </a>{" "}
          for language-specific implementations.
        </p>
      </div>
    </div>
  )
}
