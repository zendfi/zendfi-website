import { Card } from "@/components/ui/card"
import { DollarSign, Zap, Users, Shield, RefreshCw, TestTube, ArrowRight, CheckCircle2, Clock, XCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function APIReference() {
  return (
    <div className="space-y-6 md:space-y-8 max-w-5xl">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
          Payments API - Accept Crypto Like a Boss!
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Welcome to the Payments API! This is where the magic happens. Accept one-time crypto payments with a simple API call - perfect for e-commerce checkouts, invoices, donations, tips, and anything else you can dream up. Let's make you a payment pro!
        </p>
      </div>

      {/* Table of Contents */}
      <Card className="p-6 bg-primary/5">
        <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#create-payment" className="hover:text-primary transition-colors">Create a Payment</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#get-payment-details" className="hover:text-primary transition-colors">Get Payment Details</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#get-payment-status" className="hover:text-primary transition-colors">Get Payment Status</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#pay-what-you-want" className="hover:text-primary transition-colors">Pay-What-You-Want Payments</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#payment-splits" className="hover:text-primary transition-colors">Payment Splits</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#idempotency" className="hover:text-primary transition-colors">Idempotency</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#testing" className="hover:text-primary transition-colors">Testing</a>
          </li>
        </ul>
      </Card>

      {/* Create a Payment */}
      <div id="create-payment" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          Create a Payment
        </h2>
        <p className="text-muted-foreground">
          Create a one-time payment request in seconds! You'll get back a QR code and payment URL that you can show to your customer. They scan/connect, approve, done!
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-2">Endpoint</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>POST /api/v1/payments</code>
          </pre>

          <h3 className="text-lg font-bold mb-2">Authentication</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>

          <h3 className="text-lg font-bold mb-3">Headers</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Header</th>
                  <th className="text-left p-2 font-semibold">Required</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>Authorization</code></td>
                  <td className="p-2"><strong>Yes</strong></td>
                  <td className="p-2">Bearer token with your API key</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>Content-Type</code></td>
                  <td className="p-2"><strong>Yes</strong></td>
                  <td className="p-2">Must be <code>application/json</code></td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>Idempotency-Key</code></td>
                  <td className="p-2">No</td>
                  <td className="p-2">Unique key to prevent duplicate payments</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mb-3">Request Body - Basic Parameters</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Parameter</th>
                  <th className="text-left p-2 font-semibold">Type</th>
                  <th className="text-left p-2 font-semibold">Required</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>amount</code></td>
                  <td className="p-2">number</td>
                  <td className="p-2"><strong>Yes</strong></td>
                  <td className="p-2">Payment amount in USD (0.01 - 10,000.00)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>currency</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2"><strong>Yes</strong></td>
                  <td className="p-2">Currency code. Only <code>"USD"</code> supported</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>token</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Token for payment: <code>"USDC"</code> (default), <code>"SOL"</code>, or <code>"USDT"</code></td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>description</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Payment description (max 500 characters)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>metadata</code></td>
                  <td className="p-2">object</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Custom key-value pairs for your reference</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>webhook_url</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Override merchant's default webhook URL for this payment</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>settlement_preference_override</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Override settlement: <code>"auto_usdc"</code> or <code>"direct_token"</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mb-3">Pay-What-You-Want Parameters</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Parameter</th>
                  <th className="text-left p-2 font-semibold">Type</th>
                  <th className="text-left p-2 font-semibold">Required</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>allow_custom_amount</code></td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Enable customer to choose amount (default: <code>false</code>)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>minimum_amount</code></td>
                  <td className="p-2">number</td>
                  <td className="p-2">Conditional</td>
                  <td className="p-2"><strong>Required</strong> if <code>allow_custom_amount</code> is <code>true</code></td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>maximum_amount</code></td>
                  <td className="p-2">number</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Optional ceiling for custom amounts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>suggested_amount</code></td>
                  <td className="p-2">number</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Suggested amount shown to customer</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mb-3">Payment Splits Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Parameter</th>
                  <th className="text-left p-2 font-semibold">Type</th>
                  <th className="text-left p-2 font-semibold">Required</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>split_recipient</code></td>
                  <td className="p-2">array</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Array of recipients for split payments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Example 1: Simple USDC Payment */}
        <Card className="p-6 border-primary/50">
          <h3 className="text-lg font-bold mb-3">Example 1: Simple USDC Payment (The Classic!)</h3>
          <p className="text-muted-foreground mb-4">
            Let's create a basic payment - this is probably what you'll use 90% of the time. Super straightforward!
          </p>

          <h4 className="font-semibold mb-2">Request:</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Authorization: Bearer zendfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 99.99,
    "currency": "USD",
    "description": "Premium Plan - Annual Subscription",
    "token": "USDC",
    "metadata": {
      "customer_id": "cus_12345",
      "plan": "premium_annual",
      "seats": 5
    }
  }'`}</code>
          </pre>

          <h4 className="font-semibold mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "amount": 99.99,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:6qWDyySDsrWbUqXCzwaxVYc47xTaZVUEdeC9apdo6Ewa?amount=99990000&spl-token=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&reference=550e8400-e29b-41d4-a716-446655440000&label=Zendfi%20Payment%20(USDC)&message=Payment%20550e8400-e29b-41d4-a716-446655440000",
  "payment_url": "https://api.zendfi.tech/pay/550e8400-e29b-41d4-a716-446655440000",
  "expires_at": "2025-10-26T12:30:00.000Z",
  "settlement_info": null
}`}</code>
          </pre>
        </Card>

        {/* Example 2: SOL Payment */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Example 2: SOL Payment (For the SOL Lovers! ☀️)</h3>
          <p className="text-muted-foreground mb-4">
            Want to accept Solana's native token? No problem! Same API, different token.
          </p>

          <h4 className="font-semibold mb-2">Request:</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Authorization: Bearer zendfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 50.00,
    "currency": "USD",
    "description": "Coffee Subscription Box",
    "token": "SOL"
  }'`}</code>
          </pre>

          <h4 className="font-semibold mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "id": "payment_sol123",
  "amount": 50.00,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:6qWDyySDsrWbUqXCzwaxVYc47xTaZVUEdeC9apdo6Ewa?amount=50000000000&reference=payment_sol123&label=Zendfi%20Payment%20(SOL)&message=Payment%20payment_sol123",
  "payment_url": "https://api.zendfi.tech/pay/payment_sol123",
  "expires_at": "2025-10-26T12:30:00.000Z",
  "settlement_info": null
}`}</code>
          </pre>
        </Card>

        {/* Example 3: Pay-What-You-Want */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Example 3: Pay-What-You-Want (Perfect for Donations!)</h3>
          <p className="text-muted-foreground mb-4">
            Let your customers choose how much to pay! Great for donations, tips, or flexible pricing. Power to the people!
          </p>

          <h4 className="font-semibold mb-2">Request:</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Authorization: Bearer zendfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 10.00,
    "currency": "USD",
    "description": "Support our open-source project",
    "allow_custom_amount": true,
    "minimum_amount": 1.00,
    "maximum_amount": 1000.00,
    "suggested_amount": 10.00,
    "metadata": {
      "campaign": "winter_2025",
      "source": "homepage"
    }
  }'`}</code>
          </pre>

          <h4 className="font-semibold mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "id": "payment_pwyw123",
  "amount": 10.00,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:...",
  "payment_url": "https://api.zendfi.tech/pay/payment_pwyw123",
  "expires_at": "2025-10-26T12:30:00.000Z",
  "settlement_info": null
}`}</code>
          </pre>

          <p className="text-sm text-muted-foreground">
            <strong>Customer experience:</strong> The payment page shows a slider or input allowing amounts from $1.00 to $1,000.00, with $10.00 pre-selected. They pick what feels right!
          </p>
        </Card>

        {/* Example 4: Custom Webhook */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Example 4: Payment with Custom Webhook (Route Notifications Your Way!)</h3>
          <p className="text-muted-foreground mb-4">
            Need this payment's notifications to go somewhere specific? Override the webhook URL per payment!
          </p>

          <h4 className="font-semibold mb-2">Request:</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Authorization: Bearer zendfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 29.99,
    "currency": "USD",
    "description": "Event Ticket - VIP Pass",
    "webhook_url": "https://mytickets.com/webhooks/payment-confirmed",
    "metadata": {
      "event_id": "evt_20251231",
      "ticket_type": "vip",
      "email": "customer@example.com"
    }
  }'`}</code>
          </pre>

          <h4 className="font-semibold mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "id": "payment_evt123",
  "amount": 29.99,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:...",
  "payment_url": "https://api.zendfi.tech/pay/payment_evt123",
  "expires_at": "2025-10-26T12:30:00.000Z",
  "settlement_info": null
}`}</code>
          </pre>

          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This payment's confirmation will be sent to <code className="bg-gray-300 px-1">https://mytickets.com/webhooks/payment-confirmed</code> instead of your default webhook URL.
          </p>
        </Card>

        {/* Response Fields */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Response Fields</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Field</th>
                  <th className="text-left p-2 font-semibold">Type</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>id</code></td>
                  <td className="p-2">string (UUID)</td>
                  <td className="p-2">Unique payment identifier</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>amount</code></td>
                  <td className="p-2">number</td>
                  <td className="p-2">Payment amount in USD</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>currency</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Currency code (<code>USD</code>)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>status</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Payment status</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>qr_code</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Solana Pay QR code URI</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment_url</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Hosted payment page URL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>expires_at</code></td>
                  <td className="p-2">string (ISO 8601)</td>
                  <td className="p-2">Payment expiration timestamp (15 minutes)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>settlement_info</code></td>
                  <td className="p-2">object|null</td>
                  <td className="p-2">Settlement details (if applicable)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>split_ids</code></td>
                  <td className="p-2">array|null</td>
                  <td className="p-2">Array of split payment IDs (if splits enabled)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Error Responses */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Error Responses</h3>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">400 Bad Request - Invalid Amount</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": {
    "message": "Invalid payment amount: Amount must be between $0.01 and $10,000.00",
    "field": "amount",
    "value": 0
  }
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">400 Bad Request - Invalid Currency</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": {
    "message": "Only USD currency is supported",
    "field": "currency",
    "supported_values": ["USD"]
  }
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">400 Bad Request - Invalid Token</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": {
    "message": "Unsupported token. Supported tokens: USDC, SOL, USDT",
    "field": "token",
    "value": "BTC"
  }
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">400 Bad Request - Invalid PWYW Config</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": {
    "message": "Invalid pay-what-you-want configuration: minimum_amount is required when allow_custom_amount is true",
    "field": "pwyw_config"
  }
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">400 Bad Request - Invalid Description</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": {
    "message": "Invalid description: Description cannot exceed 500 characters",
    "field": "description"
  }
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">401 Unauthorized</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": "unauthorized",
  "message": "Invalid or missing API key"
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">429 Too Many Requests - Limits Exceeded</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": {
    "message": "Payment limits exceeded",
    "details": "You have exceeded your daily volume, payment amount, or rate limits",
    "contact": "Contact support to increase your limits"
  }
}`}</code>
            </pre>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold mb-2">Default Limits:</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Max single payment: $10,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Daily volume: $50,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hourly requests: 100</span>
                </li>
              </ul>
              <p className="mt-2">Contact support@zendfi.tech to increase your limits.</p>
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">500 Internal Server Error</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": {
    "message": "Failed to create payment"
  }
}`}</code>
            </pre>
          </Card>
        </div>
      </div>

      {/* Get Payment Details */}
      <div id="get-payment-details" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-primary" />
          Get Payment Details
        </h2>
        <p className="text-muted-foreground">
          Retrieve full details for a specific payment, including transaction signature, customer wallet, and settlement info.
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-2">Endpoint</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>GET /api/v1/payments/:id</code>
          </pre>

          <h3 className="text-lg font-bold mb-2">Authentication</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>

          <h3 className="text-lg font-bold mb-3">Path Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Parameter</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>id</code></td>
                  <td className="p-2">Payment ID (UUID)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Example Request</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X GET https://api.zendfi.tech/api/v1/payments/550e8400-e29b-41d4-a716-446655440000 \\
  -H "Authorization: Bearer zendfi_live_abc123..."`}</code>
          </pre>

          <h3 className="text-lg font-bold mb-3">Response: 200 OK</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "merchant_id": "merchant_abc123",
  "amount": 99.99,
  "currency": "USD",
  "status": "Confirmed",
  "token": "USDC",
  "description": "Premium Plan - Annual Subscription",
  "transaction_signature": "5j7s6JP28XvC1jQeU3hpkKHqRVEkBpDLrEr3cKXXJPaG7W2yQSp6YJ7s6JP28XvC1",
  "customer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "metadata": {
    "customer_id": "cus_12345",
    "plan": "premium_annual",
    "seats": 5
  },
  "qr_code": "solana:...",
  "payment_url": "https://api.zendfi.tech/pay/550e8400-e29b-41d4-a716-446655440000",
  "created_at": "2025-10-26T12:15:00.000Z",
  "confirmed_at": "2025-10-26T12:17:30.000Z",
  "expires_at": "2025-10-26T12:30:00.000Z",
  "settlement_status": "completed",
  "settlement_signature": "3k8n5TY89VvD2kRfV4iqmLKtSWFjDnMoRcWr4dJYKPcH8N3qZTp7ZK8n5TY89VvD2"
}`}</code>
          </pre>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-bold mb-2">Error Response - 404 Not Found</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "error": "payment_not_found",
  "message": "No payment found with ID: 550e8400-e29b-41d4-a716-446655440000"
}`}</code>
          </pre>
        </Card>
      </div>

      {/* Get Payment Status */}
      <div id="get-payment-status" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          Get Payment Status
        </h2>
        <p className="text-muted-foreground">
          Quick status check! Use this when you just need to know "has this payment been confirmed yet?" Perfect for polling or manual checks. 🔍
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-2">Endpoint</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>GET /api/v1/payments/:id/status</code>
          </pre>

          <h3 className="text-lg font-bold mb-2">Authentication</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>

          <h3 className="text-lg font-bold mb-3">Path Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Parameter</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>id</code></td>
                  <td className="p-2">Payment ID (UUID)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Example Request</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X GET https://api.zendfi.tech/api/v1/payments/550e8400-e29b-41d4-a716-446655440000/status \\
  -H "Authorization: Bearer zendfi_live_abc123..."`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Response: 200 OK - Pending</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "Pending",
  "amount": 99.99,
  "currency": "USD",
  "transaction_signature": null,
  "confirmed_at": null,
  "settlement_status": "not_started"
}`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Response: 200 OK - Confirmed</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "Confirmed",
  "amount": 99.99,
  "currency": "USD",
  "transaction_signature": "5j7s6JP28XvC1jQeU3hpkKHqRVEkBpDLrEr3cKXXJPaG7W2yQSp6YJ7s6JP28XvC1",
  "confirmed_at": "2025-10-26T12:17:30.000Z",
  "settlement_status": "processing",
  "customer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
}`}</code>
          </pre>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h3 className="text-lg font-bold mb-3">Payment Statuses</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Pending</p>
                  <p className="text-xs text-muted-foreground">Waiting for customer payment. Customer should complete payment within 15 minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Confirmed</p>
                  <p className="text-xs text-muted-foreground">Payment received and verified! Settlement is processing or completed</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Failed</p>
                  <p className="text-xs text-muted-foreground">Transaction failed. Create a new payment if needed</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Expired</p>
                  <p className="text-xs text-muted-foreground">Payment window expired. Create a new payment</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="text-lg font-bold mb-3">Settlement Statuses</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <div>
                  <p className="font-semibold">not_started</p>
                  <p className="text-xs text-muted-foreground">Payment not yet confirmed</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <div>
                  <p className="font-semibold">processing</p>
                  <p className="text-xs text-muted-foreground">Settlement in progress</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <div>
                  <p className="font-semibold">completed</p>
                  <p className="text-xs text-muted-foreground">Funds in your wallet!</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <div>
                  <p className="font-semibold">failed</p>
                  <p className="text-xs text-muted-foreground">Settlement failed (rare - contact support immediately)</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Pay-What-You-Want */}
      <div id="pay-what-you-want" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          Pay-What-You-Want Payments (Flexible Pricing FTW!)
        </h2>
        <p className="text-muted-foreground">
          Perfect for donations, tips, flexible pricing, or "pay what feels right" models. Give your customers the power to choose!
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">How It Works</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>You set minimum (required) and maximum (optional) amounts</li>
            <li>Customer chooses an amount within that range</li>
            <li>You can suggest a default amount</li>
            <li>Customer pays their chosen amount</li>
          </ol>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Configuration</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "amount": 10.00,
  "currency": "USD",
  "allow_custom_amount": true,
  "minimum_amount": 1.00,
  "maximum_amount": 1000.00,
  "suggested_amount": 10.00
}`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Validation Rules</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-gray-300 px-1">minimum_amount</code> is <strong>required</strong> when <code className="bg-gray-300 px-1">allow_custom_amount</code> is <code className="bg-gray-300 px-1">true</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-gray-300 px-1">maximum_amount</code> must be greater than <code className="bg-gray-300 px-1">minimum_amount</code> (if provided)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-gray-300 px-1">suggested_amount</code> must be between <code className="bg-gray-300 px-1">minimum_amount</code> and <code className="bg-gray-300 px-1">maximum_amount</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-gray-300 px-1">amount</code> field is ignored for display (but used as fallback)</span>
            </li>
          </ul>
        </Card>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Use Cases</h3>

          <Card className="p-6">
            <h4 className="font-semibold mb-2">Donations (Support a Cause! ❤️):</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "allow_custom_amount": true,
  "minimum_amount": 5.00,
  "suggested_amount": 25.00,
  "description": "Support our mission"
}`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-2">Tips for Service (Show Some Love! 💝):</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "allow_custom_amount": true,
  "minimum_amount": 0.50,
  "maximum_amount": 100.00,
  "suggested_amount": 5.00,
  "description": "Tip your driver"
}`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-2">Flexible Pricing (You Decide the Value! 💎):</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "allow_custom_amount": true,
  "minimum_amount": 10.00,
  "maximum_amount": 50.00,
  "suggested_amount": 29.00,
  "description": "Pay what you think it's worth"
}`}</code>
            </pre>
          </Card>
        </div>
      </div>

      {/* Payment Splits */}
      <div id="payment-splits" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Payment Splits (Share the Wealth!)
        </h2>
        <p className="text-muted-foreground">
          Automatically split incoming payments between multiple recipients - perfect for marketplaces, revenue sharing, and team payments!
        </p>

        <Card className="p-6 bg-primary/5">
          <h3 className="text-lg font-bold mb-3">Perfect for:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Marketplace commissions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Revenue sharing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Affiliate payments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Multi-party invoices</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Want the full scoop? Check out Payment Splits Documentation for all the details!
          </p>
        </Card>

        <Card className="p-6 border-primary/50">
          <h3 className="text-lg font-bold mb-3">Quick Example (See It in Action!)</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "amount": 100.00,
  "currency": "USD",
  "description": "Marketplace Sale",
  "split_recipients": [
    {
      "wallet_address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
      "percentage": 80.0,
      "description": "Seller - 80%"
    },
    {
      "wallet_address": "9yJKg3DX98h87TYKSDqcE6jCkhgTrB94UZSmKptgBsV",
      "percentage": 15.0,
      "description": "Platform Fee - 15%"
    },
    {
      "wallet_address": "4mNKh5FY21i98UZLTErdG8kDjhsWsC05VATnLquiBwX",
      "percentage": 5.0,
      "description": "Referral - 5%"
    }
  ]
}`}</code>
          </pre>

          <div className="bg-primary/10 p-4 rounded-md">
            <p className="font-semibold mb-2">Result:</p>
            <p className="text-sm text-muted-foreground mb-3">When customer pays $100, funds are automatically distributed:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>$80.00 → Seller</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>$15.00 → Platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>$5.00 → Referral partner</span>
              </li>
            </ul>
            <p className="text-sm font-semibold mt-3">Everyone gets paid automatically! No manual transfers needed. How cool is that? 🎉</p>
          </div>
        </Card>
      </div>

      {/* Idempotency */}
      <div id="idempotency" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Idempotency (Prevent Duplicate Payments Like a Pro!)
        </h2>
        <p className="text-muted-foreground">
          Ever had a customer double-click the "Pay" button? Network timeout? Idempotency keys save the day by preventing duplicate payments!
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">How It Works</h3>
          <p className="text-muted-foreground mb-4">
            Include an <code className="bg-gray-300 px-1">Idempotency-Key</code> header with a unique value. If you retry the same request with the same key, you'll get the original response instead of creating a duplicate payment. Magic! ✨
          </p>
          <p className="text-muted-foreground">
            It's like a safety net for your payments - try the same request twice, only pay once!
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Usage</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Authorization: Bearer zendfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: checkout_session_abc123_attempt1" \\
  -d '{
    "amount": 49.99,
    "currency": "USD",
    "description": "Product Purchase"
  }'`}</code>
          </pre>
        </Card>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Best Practices</h3>

          <Card className="p-6">
            <h4 className="font-semibold mb-2">Generate Unique Keys:</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`// Node.js example
const idempotencyKey = \`checkout_\${sessionId}_\${Date.now()}_\${Math.random()}\`;`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-2">Retry with Same Key:</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`// Retry logic
let attempts = 0;
const maxAttempts = 3;
const idempotencyKey = generateUniqueKey();

while (attempts < maxAttempts) {
  try {
    const response = await createPayment(data, idempotencyKey);
    return response;
  } catch (error) {
    if (error.status === 500 || error.status === 429) {
      attempts++;
      await sleep(1000 * attempts); // Exponential backoff
    } else {
      throw error; // Don't retry client errors (4xx)
    }
  }
}`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-3">Key Requirements:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Must be unique per request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Maximum 255 characters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Valid for 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Recommended format: <code className="bg-gray-300 px-1">{`prefix_timestamp_{unique_id}_attempt#{attempt}`}</code></span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Testing */}
      <div id="testing" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <TestTube className="w-6 h-6 text-primary" />
          Testing (Try Before You Fly!)
        </h2>
        <p className="text-muted-foreground">
          Always test your integration before going live! We make it super easy.
        </p>

        <Card className="p-6 border-primary/50">
          <h3 className="text-lg font-bold mb-3">Test on Devnet (Your Playground!)</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Set <code className="bg-gray-300 px-1">SOLANA_NETWORK=devnet</code> in your <code className="bg-gray-300 px-1">.env</code></li>
            <li>Use devnet USDC mint: <code className="bg-gray-300 px-1 text-xs">4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU</code></li>
            <li>Get free devnet SOL/USDC from Solana Faucet - it's like Monopoly money, but fun!</li>
          </ol>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Test Wallet Addresses (Ready to Use!)</h3>
          <p className="text-sm text-muted-foreground mb-3">Use these test wallets for devnet testing - they're all yours!</p>
          <div className="space-y-2">
            <div className="bg-gray-300 p-3 rounded-md">
              <p className="text-xs font-semibold mb-1">Customer Wallet:</p>
              <code className="text-xs break-all">7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU</code>
            </div>
            <div className="bg-gray-300 p-3 rounded-md">
              <p className="text-xs font-semibold mb-1">Merchant Wallet:</p>
              <code className="text-xs break-all">9yJKg3DX98h87TYKSDqcE6jCkhgTrB94UZSmKptgBsV</code>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Common Testing Scenarios</h3>

          <Card className="p-6">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Scenario 1: Successful Payment
            </h4>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
              <li>Create payment</li>
              <li>Copy QR code or payment URL</li>
              <li>Pay with devnet wallet</li>
              <li>Check status → should show <code className="bg-gray-300 px-1">Confirmed</code> (usually within 60 seconds!)</li>
            </ol>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              Scenario 2: Expired Payment
            </h4>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
              <li>Create payment</li>
              <li>Wait 16+ minutes (grab a coffee! ☕)</li>
              <li>Check status → should show <code className="bg-gray-300 px-1">Expired</code></li>
            </ol>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-blue-500" />
              Scenario 3: Idempotency Magic
            </h4>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
              <li>Create payment with <code className="bg-gray-300 px-1">Idempotency-Key: test_123</code></li>
              <li>Retry with same key</li>
              <li>Should receive identical response (no duplicate payment - nice!)</li>
            </ol>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Next Steps (Keep Going!)</h2>
        <p className="text-muted-foreground mb-6">You're crushing it! Here's what to explore next:</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Payment Links</p>
              <p className="text-sm text-muted-foreground">Create reusable payment pages - Share one link everywhere!</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Webhooks</p>
              <p className="text-sm text-muted-foreground">Handle payment events in real-time - Never miss a payment!</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Wallet Management</p>
              <p className="text-sm text-muted-foreground">Export keys, withdraw funds - Full control of your money!</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Advanced Features</p>
              <p className="text-sm text-muted-foreground">Subscriptions, escrows, installments - Level up your game!</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Need Help */}
      <Card className="p-6 text-center bg-gradient-to-r from-primary/10 to-primary/5">
        <h2 className="text-xl font-bold mb-3">Need Help? We're Here for You!</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span> <Link href="mailto:support@zendfi.tech" className="hover:underline hover:text-accent cursor-pointer">support@zendfi.tech</Link> - Real humans who actually reply!</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Discord Community - Join fellow builders!</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Video Tutorials - See it in action!</span>
          </div>
        </div>
        <p className="mt-4 font-semibold text-primary">Happy building! You're doing amazing!</p>
      </Card>
    </div>
  )
}