import { Card } from "@/components/ui/card"
import { Zap, Shield, RefreshCw, AlertCircle, TestTube, ArrowRight, CheckCircle2, Clock, XCircle, Mail, Calendar, Gift, ExternalLink } from "lucide-react"

export default function Webhooks() {
  return (
    <div className="space-y-6 md:space-y-8 max-w-5xl">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
          Webhooks - Stay in Sync with Payment Events!
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Welcome to the Webhooks guide! Webhooks are how ZendFi notifies your application when important payment events happen - like when a payment is confirmed, when settlement completes, or when something fails. Think of webhooks as your real-time notification system. Let's make you a webhook expert!
        </p>
      </div>

      {/* Table of Contents */}
      <Card className="p-6 bg-primary/5">
        <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#what-are-webhooks" className="hover:text-primary transition-colors">What Are Webhooks?</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#webhook-events" className="hover:text-primary transition-colors">Webhook Events</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#webhook-security" className="hover:text-primary transition-colors">Webhook Security</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#list-webhook-events" className="hover:text-primary transition-colors">List Webhook Events</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#verify-webhook-signature" className="hover:text-primary transition-colors">Verify Webhook Signature</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#retry-failed-webhooks" className="hover:text-primary transition-colors">Retry Failed Webhooks</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#dead-letter-queue" className="hover:text-primary transition-colors">Dead Letter Queue</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#testing-webhooks" className="hover:text-primary transition-colors">Testing Webhooks</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#best-practices" className="hover:text-primary transition-colors">Best Practices</a>
          </li>
        </ul>
      </Card>

      {/* What Are Webhooks? */}
      <div id="what-are-webhooks" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          What Are Webhooks?
        </h2>
        <p className="text-muted-foreground">
          Webhooks are <strong>HTTP POST requests</strong> that ZendFi sends to your server whenever something important happens with your payments. Instead of constantly polling our API, we'll notify you instantly! ⚡
        </p>
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Why Use Webhooks?</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>Real-time notifications</strong>: Know instantly when payments confirm</li>
            <li><strong>Automatic delivery</strong>: No need to poll our API constantly</li>
            <li><strong>Secure</strong>: HMAC-SHA256 signature verification</li>
            <li><strong>Reliable</strong>: Automatic retry with exponential backoff</li>
            <li><strong>Complete data</strong>: Full payment details in every webhook</li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">How It Works</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>You configure a webhook URL when creating your merchant account</li>
            <li>Customer makes a payment</li>
            <li>ZendFi detects the payment on-chain</li>
            <li>We send an HTTPS POST request to your webhook URL</li>
            <li>Your server processes the webhook and returns 200 OK</li>
            <li>If delivery fails, we automatically retry (up to 5 times)</li>
          </ol>
        </Card>
      </div>

      {/* Webhook Events */}
      <div id="webhook-events" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-primary" />
          Webhook Events
        </h2>
        <p className="text-muted-foreground">
          ZendFi sends webhooks for all important payment lifecycle events!
        </p>
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Available Event Types</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Event Type</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                  <th className="text-left p-2 font-semibold">When It's Triggered</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>PaymentCreated</code></td>
                  <td className="p-2">New payment was created</td>
                  <td className="p-2">Immediately after payment creation via API or payment link</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>PaymentConfirmed</code></td>
                  <td className="p-2">Payment confirmed on-chain</td>
                  <td className="p-2">After Solana transaction is verified (usually 30-60 seconds)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>PaymentFailed</code></td>
                  <td className="p-2">Payment failed verification</td>
                  <td className="p-2">If transaction verification fails or times out</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>PaymentExpired</code></td>
                  <td className="p-2">Payment expired without completion</td>
                  <td className="p-2">After 15-minute expiration window passes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>SettlementCompleted</code></td>
                  <td className="p-2">Funds settled to your wallet</td>
                  <td className="p-2">After auto-conversion or direct token settlement completes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Webhook Payload Structure */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Webhook Payload Structure</h3>
        <p className="text-muted-foreground mb-4">
          Every webhook follows the same JSON structure:
        </p>
        <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
          <code>{`{
  "event": "PaymentConfirmed",
  "payment": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "amount_usd": 99.99,
    "amount_ngn": null,
    "status": "Confirmed",
    "transaction_signature": "5KzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2nnU6NJR4zHYQZ...",
    "customer_wallet": "ABC123...XYZ789",
    "metadata": {
      "order_id": "ORDER-12345",
      "customer_email": "customer@example.com"
    }
  },
  "timestamp": "2025-10-27T10:30:45Z",
  "signature": "t=1730053845,v1=a2f8c9d3e4b5a6c7d8e9f0a1b2c3d4e5..."
}`}</code>
        </pre>

        <Card className="p-6">
          <h4 className="text-lg font-bold mb-3">Payload Fields</h4>
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
                  <td className="p-2"><code>event</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Event type (e.g., "PaymentConfirmed")</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment</code></td>
                  <td className="p-2">object</td>
                  <td className="p-2">Complete payment details</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment.id</code></td>
                  <td className="p-2">UUID</td>
                  <td className="p-2">Unique payment ID</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment.merchant_id</code></td>
                  <td className="p-2">UUID</td>
                  <td className="p-2">Your merchant ID</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment.amount_usd</code></td>
                  <td className="p-2">number</td>
                  <td className="p-2">Payment amount in USD</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment.amount_ngn</code></td>
                  <td className="p-2">number</td>
                  <td className="p-2">Payment amount in NGN (if applicable)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment.status</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Payment status (Pending, Confirmed, Failed, Expired)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment.transaction_signature</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Solana transaction signature (null until confirmed)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment.customer_wallet</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Customer's wallet address (null until paid)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment.metadata</code></td>
                  <td className="p-2">object</td>
                  <td className="p-2">Custom metadata you provided</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>timestamp</code></td>
                  <td className="p-2">datetime</td>
                  <td className="p-2">When the webhook was generated</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>signature</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">HMAC-SHA256 signature for verification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Webhook Event Examples */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold">Webhook Event Examples</h3>

        {/* PaymentCreated */}
        <Card className="p-6 border-primary/50">
          <h4 className="text-lg font-bold mb-3">PaymentCreated Event</h4>
          <p className="text-muted-foreground mb-4">Sent immediately when a payment is created (via API or payment link).</p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`{
  "event": "PaymentCreated",
  "payment": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "amount_usd": 99.99,
    "amount_ngn": null,
    "status": "Pending",
    "transaction_signature": null,
    "customer_wallet": null,
    "metadata": {
      "order_id": "ORDER-12345",
      "product": "Premium Subscription"
    }
  },
  "timestamp": "2025-10-27T10:30:00Z",
  "signature": "t=1730053400,v1=abc123..."
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-3"><strong>What To Do:</strong></p>
          <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li>Update your database: mark order as "awaiting payment"</li>
            <li>Show customer: "Payment pending, please complete transaction"</li>
            <li>Set timeout: track 15-minute expiration</li>
          </ul>
        </Card>

        {/* PaymentConfirmed */}
        <Card className="p-6">
          <h4 className="text-lg font-bold mb-3">PaymentConfirmed Event</h4>
          <p className="text-muted-foreground mb-4">Sent when payment is verified on Solana blockchain (usually 30-60 seconds after customer pays).</p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`{
  "event": "PaymentConfirmed",
  "payment": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "amount_usd": 99.99,
    "amount_ngn": null,
    "status": "Confirmed",
    "transaction_signature": "5KzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2nnU6NJR4zHYQZ3k2PxMhR7vA8sB9cC0dD1eE2fF3gG4hH5iI6jJ7kK8",
    "customer_wallet": "ABC123DEF456GHI789JKL012MNO345PQR678STU901VWX234YZ",
    "metadata": {
      "order_id": "ORDER-12345",
      "product": "Premium Subscription"
    }
  },
  "timestamp": "2025-10-27T10:31:15Z",
  "signature": "t=1730053475,v1=def456..."
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-3"><strong>What To Do:</strong></p>
          <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li>Mark order as paid in your database</li>
            <li>Deliver digital goods/services</li>
            <li>Send confirmation email to customer</li>
            <li>Update inventory if needed</li>
            <li>Display "Payment successful!" message</li>
          </ul>
          <p className="text-sm font-semibold text-primary"><strong>This is your most important webhook!</strong> Most of your business logic happens here.</p>
        </Card>

        {/* PaymentFailed */}
        <Card className="p-6">
          <h4 className="text-lg font-bold mb-3">PaymentFailed Event</h4>
          <p className="text-muted-foreground mb-4">Sent when payment verification fails (invalid transaction, insufficient funds, etc.).</p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`{
  "event": "PaymentFailed",
  "payment": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "amount_usd": 99.99,
    "amount_ngn": null,
    "status": "Failed",
    "transaction_signature": "5KzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2...",
    "customer_wallet": "ABC123DEF456GHI789...",
    "metadata": {
      "order_id": "ORDER-12345",
      "product": "Premium Subscription"
    }
  },
  "timestamp": "2025-10-27T10:32:00Z",
  "signature": "t=1730053520,v1=ghi789..."
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-3"><strong>What To Do:</strong></p>
          <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li>Mark order as failed</li>
            <li>Notify customer payment didn't go through</li>
            <li>Provide option to retry payment</li>
            <li>Log for analytics (conversion funnel)</li>
          </ul>
        </Card>

        {/* PaymentExpired */}
        <Card className="p-6">
          <h4 className="text-lg font-bold mb-3">PaymentExpired Event</h4>
          <p className="text-muted-foreground mb-4">Sent when the 15-minute payment window expires without customer completing payment.</p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`{
  "event": "PaymentExpired",
  "payment": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "amount_usd": 99.99,
    "amount_ngn": null,
    "status": "Expired",
    "transaction_signature": null,
    "customer_wallet": null,
    "metadata": {
      "order_id": "ORDER-12345",
      "product": "Premium Subscription"
    }
  },
  "timestamp": "2025-10-27T10:45:00Z",
  "signature": "t=1730054300,v1=jkl012..."
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-3"><strong>What To Do:</strong></p>
          <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li>Mark order as expired</li>
            <li>Send "Payment timeout" email</li>
            <li>Offer "Try again" button (create new payment)</li>
            <li>Track abandonment rate</li>
          </ul>
        </Card>

        {/* SettlementCompleted */}
        <Card className="p-6">
          <h4 className="text-lg font-bold mb-3">SettlementCompleted Event</h4>
          <p className="text-muted-foreground mb-4">Sent when funds are settled to your wallet (after auto-conversion to USDC if enabled).</p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`{
  "event": "SettlementCompleted",
  "payment": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "amount_usd": 99.99,
    "amount_ngn": null,
    "status": "Confirmed",
    "transaction_signature": "5KzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2...",
    "customer_wallet": "ABC123DEF456GHI789...",
    "metadata": {
      "order_id": "ORDER-12345",
      "product": "Premium Subscription"
    }
  },
  "timestamp": "2025-10-27T10:33:00Z",
  "signature": "t=1730053580,v1=mno345..."
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-3"><strong>What To Do:</strong></p>
          <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li>Update revenue tracking</li>
            <li>Log for accounting/reconciliation</li>
            <li>Update analytics dashboard</li>
            <li>Celebrate your sale!</li>
          </ul>
        </Card>
      </div>

      {/* Webhook Security */}
      <div id="webhook-security" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Webhook Security
        </h2>
        <p className="text-muted-foreground">
          Security is super important! ZendFi uses <strong>HMAC-SHA256</strong> signatures to ensure webhook authenticity.
        </p>
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Signature Format</h3>
          <p className="text-muted-foreground mb-4">
            Every webhook includes a signature in the <code>signature</code> field:
          </p>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
            <code>t=1730053845,v1=a2f8c9d3e4b5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1</code>
          </pre>
          <p className="text-muted-foreground mb-4"><strong>Format:</strong></p>
          <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li><code>t</code>: Unix timestamp when webhook was sent</li>
            <li><code>v1</code>: HMAC-SHA256 hex digest</li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">How Signature Verification Works</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Extract timestamp <code>t</code> from signature</li>
            <li>Construct signed payload: <code>{`"{timestamp}:{webhook_json}"`}</code></li>
            <li>Compute HMAC-SHA256 using your webhook secret</li>
            <li>Compare computed signature with provided <code>v1</code> signature</li>
            <li>Check timestamp is within 5 minutes (replay protection)</li>
          </ol>
        </Card>
        <Card className="p-6 bg-warning/10 border-warning/20">
          <h3 className="text-lg font-bold mb-3">Your Webhook Secret</h3>
          <p className="text-muted-foreground mb-4">
            When you create your merchant account, ZendFi automatically generates a unique webhook secret (starts with <code>whsec_</code>). You can retrieve it from your merchant settings or it will be generated on first webhook.
          </p>
          <p className="text-sm font-semibold text-warning"><strong>Important:</strong></p>
          <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li>Keep it secret! Never commit to Git</li>
            <li>Store in environment variables</li>
            <li>Use it to verify every webhook</li>
          </ul>
        </Card>
      </div>

      {/* Verify Webhook Signature */}
      <div id="verify-webhook-signature" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          Verify Webhook Signature
        </h2>
        <p className="text-muted-foreground">
          Before processing any webhook, <strong>always verify the signature</strong>! This ensures the webhook actually came from ZendFi.
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-2">Endpoint</h3>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto mb-4">
            <code>POST /api/v1/webhooks/verify</code>
          </pre>

          <h3 className="text-lg font-bold mb-2">Authentication</h3>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto mb-4">
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>

          <h3 className="text-lg font-bold mb-3">Request Parameters</h3>
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
                  <td className="p-2"><code>payload</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2"><strong>Yes</strong></td>
                  <td className="p-2">The raw JSON webhook payload</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>signature</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2"><strong>Yes</strong></td>
                  <td className="p-2">The signature from the webhook</td>
                </tr>
              </tbody>
            </table>
          </div>

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
                  <td className="p-2"><code>valid</code></td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">Whether the signature is valid</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>message</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Explanation of result</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>timestamp_age_seconds</code></td>
                  <td className="p-2">integer</td>
                  <td className="p-2">How old the webhook is (null if invalid format)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Example Request</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`curl -X POST https://api.zendfi.tech/api/v1/webhooks/verify \\
  -H "Authorization: Bearer zfi_test_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "payload": "{\\"event\\":\\"PaymentConfirmed\\",\\"payment\\":{\\"id\\":\\"550e8400-e29b-41d4-a716-446655440000\\"}}",
    "signature": "t=1730053845,v1=a2f8c9d3e4b5a6c7d8e9f0a1b2c3d4e5..."
  }'`}</code>
          </pre>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4">
            <h4 className="font-semibold mb-2">Example Response (Valid)</h4>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
              <code>{`{
  "valid": true,
  "message": "Webhook signature is valid",
  "timestamp_age_seconds": 3
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">Example Response (Expired)</h4>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
              <code>{`{
  "valid": false,
  "message": "Webhook signature expired (420 seconds old, max 300)",
  "timestamp_age_seconds": 420
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">Example Response (Invalid)</h4>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
              <code>{`{
  "valid": false,
  "message": "Webhook signature is invalid",
  "timestamp_age_seconds": 5
}`}</code>
            </pre>
          </Card>
        </div>
      </div>

      {/* List Webhook Events */}
      <div id="list-webhook-events" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-primary" />
          List Webhook Events
        </h2>
        <p className="text-muted-foreground">
          Get a history of all webhooks sent to your endpoint.
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-2">Endpoint</h3>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto mb-4">
            <code>GET /api/v1/webhooks</code>
          </pre>

          <h3 className="text-lg font-bold mb-2">Authentication</h3>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto mb-4">
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>

          <p className="text-muted-foreground mb-4">Returns an array of webhook event objects (up to 50 most recent).</p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`[
  {
    "id": "660e8400-e29b-41d4-a716-446655440002",
    "payment_id": "550e8400-e29b-41d4-a716-446655440000",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "event_type": "PaymentConfirmed",
    "payload": {
      "event": "PaymentConfirmed",
      "payment": { ... },
      "timestamp": "2025-10-27T10:31:15Z",
      "signature": "t=1730053475,v1=def456..."
    },
    "webhook_url": "https://yourapp.com/webhooks/zendfi",
    "status": "Delivered",
    "attempts": 1,
    "last_attempt_at": "2025-10-27T10:31:16Z",
    "next_retry_at": null,
    "response_code": 200,
    "response_body": "{\\"success\\":true}",
    "created_at": "2025-10-27T10:31:15Z"
  },
  {
    "id": "770e8400-e29b-41d4-a716-446655440003",
    "payment_id": "550e8400-e29b-41d4-a716-446655440000",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "event_type": "PaymentCreated",
    "payload": { ... },
    "webhook_url": "https://yourapp.com/webhooks/zendfi",
    "status": "Delivered",
    "attempts": 1,
    "last_attempt_at": "2025-10-27T10:30:01Z",
    "next_retry_at": null,
    "response_code": 200,
    "response_body": "{\\"success\\":true}",
    "created_at": "2025-10-27T10:30:00Z"
  }
]`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Webhook Status Values</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Status</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>Pending</code></td>
                  <td className="p-2">Webhook queued for delivery</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>Delivered</code></td>
                  <td className="p-2">Successfully delivered (HTTP 2xx response)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>Failed</code></td>
                  <td className="p-2">Temporary failure, will retry</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>Exhausted</code></td>
                  <td className="p-2">All 5 retry attempts failed, moved to Dead Letter Queue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Retry Failed Webhooks */}
      <div id="retry-failed-webhooks" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-primary" />
          Retry Failed Webhooks
        </h2>
        <p className="text-muted-foreground">
          If a webhook fails to deliver (your server is down, timeout, etc.), ZendFi automatically retries with exponential backoff!
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Automatic Retry Schedule</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Attempt</th>
                  <th className="text-left p-2 font-semibold">Delay After Failure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">1st retry</td>
                  <td className="p-2">1 minute</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">2nd retry</td>
                  <td className="p-2">5 minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">3rd retry</td>
                  <td className="p-2">15 minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">4th retry</td>
                  <td className="p-2">1 hour</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">5th retry</td>
                  <td className="p-2">24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">After 5 failed attempts, the webhook is moved to the <strong>Dead Letter Queue</strong> for manual review.</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Manual Retry Endpoint</h3>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto mb-4">
            <code>{`POST /api/v1/webhooks/{webhook_id}/retry`}</code>
          </pre>
          <h4 className="text-md font-semibold mb-2">URL Parameters</h4>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Parameter</th>
                  <th className="text-left p-2 font-semibold">Type</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><code>webhook_id</code></td>
                  <td className="p-2">UUID</td>
                  <td className="p-2">The webhook event ID</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`curl -X POST https://api.zendfi.tech/api/v1/webhooks/660e8400-e29b-41d4-a716-446655440002/retry \\
  -H "Authorization: Bearer zfi_test_abc123..."`}</code>
          </pre>

          <h4 className="font-semibold mb-2">Example Response</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "message": "Webhook retry triggered",
  "webhook_id": "660e8400-e29b-41d4-a716-446655440002"
}`}</code>
          </pre>
        </Card>

        <p className="text-sm text-muted-foreground">
          <strong>What Happens:</strong>
        </p>
        <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
          <li>Webhook status is reset to "Pending"</li>
          <li>Attempt count is reset to 0</li>
          <li>Delivery is retried immediately</li>
          <li>If it was in Dead Letter Queue, it's marked as "manually_retried"</li>
        </ul>
      </div>

      {/* Dead Letter Queue */}
      <div id="dead-letter-queue" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-primary" />
          Dead Letter Queue (DLQ)
        </h2>
        <p className="text-muted-foreground">
          When webhooks fail all 5 retry attempts, they're moved to the <strong>Dead Letter Queue</strong> for manual review and resolution.
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Why Webhooks End Up in DLQ</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Your server is down for extended period</li>
            <li>Webhook URL is incorrect or unreachable</li>
            <li>Your endpoint returns non-2xx status codes</li>
            <li>Request timeout (30+ seconds)</li>
            <li>SSL certificate issues</li>
            <li>Network connectivity problems</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">List Dead Letter Queue</h3>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto mb-4">
            <code>GET /admin/webhooks/dlq</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-4"><strong>Note:</strong> This is an admin endpoint. Contact support for access.</p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`[
  {
    "id": "880e8400-e29b-41d4-a716-446655440004",
    "webhook_event_id": "660e8400-e29b-41d4-a716-446655440002",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "payment_id": "550e8400-e29b-41d4-a716-446655440000",
    "event_type": "PaymentConfirmed",
    "webhook_url": "https://yourapp.com/webhooks/zendfi",
    "payload": { ... },
    "total_attempts": 5,
    "first_failure_at": "2025-10-27T10:31:16Z",
    "last_failure_at": "2025-10-28T10:31:16Z",
    "failure_reason": "Connection timeout after 30 seconds",
    "last_response_code": null,
    "last_response_body": null,
    "resolution_status": "unresolved",
    "resolved_at": null,
    "created_at": "2025-10-27T10:31:15Z",
    "updated_at": "2025-10-28T10:31:20Z"
  }
]`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">DLQ Entry Details</h3>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto mb-4">
            <code>{`GET /admin/webhooks/dlq/{dlq_id}`}</code>
          </pre>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "dlq_entry": {
    "id": "880e8400-e29b-41d4-a716-446655440004",
    "webhook_event_id": "660e8400-e29b-41d4-a716-446655440002",
    "merchant_id": "770e8400-e29b-41d4-a716-446655440001",
    "payment_id": "550e8400-e29b-41d4-a716-446655440000",
    "event_type": "PaymentConfirmed",
    "webhook_url": "https://yourapp.com/webhooks/zendfi",
    "payload": { ... },
    "total_attempts": 5,
    "first_failure_at": "2025-10-27T10:31:16Z",
    "last_failure_at": "2025-10-28T10:31:16Z",
    "failure_reason": "Connection timeout after 30 seconds",
    "resolution_status": "unresolved"
  },
  "retry_history": [
    {
      "id": "990e8400-e29b-41d4-a716-446655440005",
      "attempt_number": 1,
      "attempted_at": "2025-10-27T10:31:16Z",
      "response_code": null,
      "response_body": null,
      "response_time_ms": 30000,
      "error_message": "Connection timeout",
      "retry_scheduled_for": "2025-10-27T10:32:16Z",
      "retry_delay_seconds": 60
    },
    {
      "id": "aa0e8400-e29b-41d4-a716-446655440006",
      "attempt_number": 2,
      "attempted_at": "2025-10-27T10:32:16Z",
      "response_code": null,
      "response_body": null,
      "response_time_ms": 30000,
      "error_message": "Connection timeout",
      "retry_scheduled_for": "2025-10-27T10:37:16Z",
      "retry_delay_seconds": 300
    }
    // ... attempts 3, 4, 5
  ]
}`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Resolve DLQ Entry</h3>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto mb-4">
            <code>{`POST /admin/webhooks/dlq/{dlq_id}/resolve`}</code>
          </pre>
          <h4 className="font-semibold mb-2">Request:</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`{
  "resolution_status": "resolved",
  "resolution_notes": "Fixed webhook URL and manually retried"
}`}</code>
          </pre>
          <h4 className="font-semibold mb-2">Response:</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "message": "DLQ entry resolved",
  "dlq_id": "880e8400-e29b-41d4-a716-446655440004",
  "status": "resolved"
}`}</code>
          </pre>
        </Card>
      </div>

      {/* Testing Webhooks */}
      <div id="testing-webhooks" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <TestTube className="w-6 h-6 text-primary" />
          Testing Webhooks
        </h2>

        <Card className="p-6 border-primary/50">
          <h3 className="text-lg font-bold mb-3">Step 1: Set Up Local Webhook Endpoint</h3>
          <p className="text-sm text-muted-foreground mb-4">Use <strong>ngrok</strong> to expose your local server to the internet:</p>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto text-sm">
            <code>ngrok http 3000</code>
          </pre>
          <p className="text-sm text-muted-foreground">This gives you a public URL like: <code>https://abc123.ngrok.io</code></p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Step 2: Update Your Webhook URL</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X PATCH https://api.zendfi.tech/api/v1/merchants/me \\
  -H "Authorization: Bearer zfi_test_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "webhook_url": "https://abc123.ngrok.io/webhooks/zendfi"
  }'`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Step 3: Create Test Payment</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Authorization: Bearer zfi_test_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 0.01,
    "currency": "USD",
    "token": "USDC",
    "description": "Webhook test payment"
  }'`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Step 4: Monitor Your Server</h3>
          <p className="text-sm text-muted-foreground">You should receive two webhooks:</p>
          <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
            <li><code>PaymentCreated</code> - immediately</li>
            <li><code>PaymentConfirmed</code> - after you complete the payment (~30-60 seconds)</li>
          </ol>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Alternative: Use webhook.site</h3>
          <p className="text-sm text-muted-foreground">If you don't have a server yet, use <a href="https://webhook.site" className="hover:text-primary transition-colors">webhook.site</a>:</p>
          <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
            <li>Visit https://webhook.site</li>
            <li>Copy your unique URL</li>
            <li>Set it as your webhook URL</li>
            <li>Create a test payment</li>
            <li>Watch webhooks arrive in real-time!</li>
          </ol>
        </Card>
      </div>

      {/* Code Examples */}
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl font-bold">Code Examples</h2>

        {/* Node.js */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Node.js/Express: Complete Webhook Handler</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`const express = require('express');
const crypto = require('crypto');

const app = express();

// IMPORTANT: Use raw body for signature verification
app.use('/webhooks/zendfi', express.raw({ type: 'application/json' }));
app.use(express.json());

const WEBHOOK_SECRET = process.env.ZENDFI_WEBHOOK_SECRET;

// Verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  // Parse signature: "t=1730053845,v1=abc123..."
  const parts = signature.split(',');
  if (parts.length !== 2) return false;
  
  const timestamp = parts[0].split('=')[1];
  const providedSig = parts[1].split('=')[1];
  
  // Check timestamp (max 5 minutes old)
  const now = Math.floor(Date.now() / 1000);
  const age = now - parseInt(timestamp);
  if (age > 300 || age < -60) {
    console.warn(\`Webhook timestamp invalid: \${age}s old\`);
    return false;
  }
  
  // Compute expected signature
  const signedPayload = \`\${timestamp}:\${payload}\`;
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(signedPayload);
  const expectedSig = hmac.digest('hex');
  
  // Constant-time comparison
  return crypto.timingSafeEqual(
    Buffer.from(providedSig),
    Buffer.from(expectedSig)
  );
}

// Webhook endpoint
app.post('/webhooks/zendfi', async (req, res) => {
  const signature = req.headers['x-zendfi-signature'];
  const payload = req.body.toString('utf8');
  
  // Verify signature
  if (!verifyWebhookSignature(payload, signature, WEBHOOK_SECRET)) {
    console.error('⚠️ Invalid webhook signature!');
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  // Parse webhook
  const webhook = JSON.parse(payload);
  const { event, payment } = webhook;
  
  console.log(\`Received webhook: \${event} for payment \${payment.id}\`);
  
  try {
    // Handle different event types
    switch (event) {
      case 'PaymentCreated':
        await handlePaymentCreated(payment);
        break;
        
      case 'PaymentConfirmed':
        await handlePaymentConfirmed(payment);
        break;
        
      case 'PaymentFailed':
        await handlePaymentFailed(payment);
        break;
        
      case 'PaymentExpired':
        await handlePaymentExpired(payment);
        break;
        
      case 'SettlementCompleted':
        await handleSettlementCompleted(payment);
        break;
        
      default:
        console.warn(\`Unknown webhook event: \${event}\`);
    }
    
    // IMPORTANT: Always return 200 OK quickly!
    res.status(200).json({ success: true });
    
  } catch (error) {
    console.error('Error processing webhook:', error);
    
    // Return 500 to trigger retry
    res.status(500).json({ error: 'Internal error' });
  }
});

// Event handlers
async function handlePaymentCreated(payment) {
  console.log(\`💳 Payment created: \${payment.id}\`);
  
  // Update your database
  await db.orders.update({
    where: { id: payment.metadata.order_id },
    data: { 
      payment_status: 'pending',
      zendfi_payment_id: payment.id
    }
  });
}

async function handlePaymentConfirmed(payment) {
  console.log(\`Payment confirmed: \${payment.id}\`);
  
  const orderId = payment.metadata.order_id;
  
  // Mark order as paid
  await db.orders.update({
    where: { id: orderId },
    data: { 
      payment_status: 'paid',
      transaction_signature: payment.transaction_signature,
      paid_at: new Date()
    }
  });
  
  // Deliver digital goods
  await deliverDigitalProduct(orderId);
  
  // Send confirmation email
  await sendConfirmationEmail(orderId);
  
  console.log(\`🎉 Order \${orderId} fulfilled!\`);
}

async function handlePaymentFailed(payment) {
  console.log(\`Payment failed: \${payment.id}\`);
  
  await db.orders.update({
    where: { id: payment.metadata.order_id },
    data: { payment_status: 'failed' }
  });
  
  // Notify customer
  await sendPaymentFailedEmail(payment.metadata.order_id);
}

async function handlePaymentExpired(payment) {
  console.log(\`⏰ Payment expired: \${payment.id}\`);
  
  await db.orders.update({
    where: { id: payment.metadata.order_id },
    data: { payment_status: 'expired' }
  });
}

async function handleSettlementCompleted(payment) {
  console.log(\`💰 Settlement completed: \${payment.id}\`);
  
  // Update revenue tracking
  await db.revenue.create({
    data: {
      payment_id: payment.id,
      amount_usd: payment.amount_usd,
      settled_at: new Date()
    }
  });
}

app.listen(3000, () => {
  console.log('🚀 Webhook server running on http://localhost:3000');
});`}</code>
          </pre>
        </Card>

        {/* Python */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Python/Flask: Webhook Handler with Signature Verification</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`from flask import Flask, request, jsonify
import hmac
import hashlib
import time
import os

app = Flask(__name__)
WEBHOOK_SECRET = os.getenv('ZENDFI_WEBHOOK_SECRET')

def verify_webhook_signature(payload, signature, secret):
    \"""Verify HMAC-SHA256 webhook signature\"""
    try:
        # Parse signature: "t=1730053845,v1=abc123..."
        parts = signature.split(',')
        if len(parts) != 2:
            return False
        
        timestamp = int(parts[0].split('=')[1])
        provided_sig = parts[1].split('=')[1]
        
        # Check timestamp (max 5 minutes old, not in future)
        now = int(time.time())
        age = now - timestamp
        if age > 300 or age < -60:
            print(f"⚠️ Webhook timestamp invalid: {age}s old")
            return False
        
        # Compute expected signature
        signed_payload = f"{timestamp}:{payload}"
        expected_sig = hmac.new(
            secret.encode('utf-8'),
            signed_payload.encode('utf-8'),
            hashlib.sha256
        ).hexdigest()
        
        # Constant-time comparison
        return hmac.compare_digest(provided_sig, expected_sig)
        
    except Exception as e:
        print(f"Signature verification error: {e}")
        return False

@app.route('/webhooks/zendfi', methods=['POST'])
def webhook_handler():
    \"""Handle incoming ZendFi webhooks\"""
    signature = request.headers.get('X-ZendFi-Signature')
    payload = request.get_data(as_text=True)
    
    # Verify signature
    if not verify_webhook_signature(payload, signature, WEBHOOK_SECRET):
        print("⚠️ Invalid webhook signature!")
        return jsonify({'error': 'Invalid signature'}), 401
    
    # Parse webhook
    webhook = request.get_json()
    event = webhook['event']
    payment = webhook['payment']
    
    print(f"Received webhook: {event} for payment {payment['id']}")
    
    try:
        # Handle different event types
        if event == 'PaymentCreated':
            handle_payment_created(payment)
        elif event == 'PaymentConfirmed':
            handle_payment_confirmed(payment)
        elif event == 'PaymentFailed':
            handle_payment_failed(payment)
        elif event == 'PaymentExpired':
            handle_payment_expired(payment)
        elif event == 'SettlementCompleted':
            handle_settlement_completed(payment)
        else:
            print(f"⚠️ Unknown webhook event: {event}")
        
        # IMPORTANT: Always return 200 OK quickly!
        return jsonify({'success': True}), 200
        
    except Exception as e:
        print(f"Error processing webhook: {e}")
        # Return 500 to trigger retry
        return jsonify({'error': 'Internal error'}), 500

def handle_payment_created(payment):
    \"""Handle PaymentCreated event\"""
    print(f"💳 Payment created: {payment['id']}")
    
    # Update database
    order_id = payment['metadata']['order_id']
    db.update_order_status(order_id, 'pending', payment['id'])

def handle_payment_confirmed(payment):
    \"""Handle PaymentConfirmed event\"""
    print(f"Payment confirmed: {payment['id']}")
    
    order_id = payment['metadata']['order_id']
    
    # Mark order as paid
    db.update_order_status(
        order_id, 
        'paid', 
        payment['id'],
        payment['transaction_signature']
    )
    
    # Deliver digital product
    deliver_digital_product(order_id)
    
    # Send confirmation email
    send_confirmation_email(order_id)
    
    print(f"🎉 Order {order_id} fulfilled!")

def handle_payment_failed(payment):
    \"""Handle PaymentFailed event\"""
    print(f"Payment failed: {payment['id']}")
    
    order_id = payment['metadata']['order_id']
    db.update_order_status(order_id, 'failed', payment['id'])
    
    # Notify customer
    send_payment_failed_email(order_id)

def handle_payment_expired(payment):
    \"""Handle PaymentExpired event\"""
    print(f"⏰ Payment expired: {payment['id']}")
    
    order_id = payment['metadata']['order_id']
    db.update_order_status(order_id, 'expired', payment['id'])

def handle_settlement_completed(payment):
    \"""Handle SettlementCompleted event\"""
    print(f"💰 Settlement completed: {payment['id']}")
    
    # Update revenue tracking
    db.log_revenue(payment['id'], payment['amount_usd'])

if __name__ == '__main__':
    app.run(debug=True, port=5000)`}</code>
          </pre>
        </Card>
      </div>

      {/* Best Practices */}
      <div id="best-practices" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Best Practices
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-3">DO</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li><strong>Always verify signatures</strong>: Protect against spoofing</li>
              <li><strong>Return 200 OK quickly</strong>: Under 30 seconds, ideally under 3 seconds</li>
              <li><strong>Process asynchronously</strong>: Use job queues for slow operations</li>
              <li><strong>Handle idempotency</strong>: Same webhook may be delivered multiple times</li>
              <li><strong>Log everything</strong>: Track webhooks for debugging</li>
              <li><strong>Monitor DLQ</strong>: Check for exhausted webhooks regularly</li>
              <li><strong>Test thoroughly</strong>: Use ngrok or webhook.site during development</li>
              <li><strong>Use HTTPS</strong>: Required for production webhook URLs</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-3">DON'T</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li><strong>Don't skip signature verification</strong>: Security risk!</li>
              <li><strong>Don't perform slow operations</strong>: Causes timeouts and retries</li>
              <li><strong>Don't assume order</strong>: Webhooks may arrive out of order</li>
              <li><strong>Don't return errors for duplicates</strong>: Handle idempotency gracefully</li>
              <li><strong>Don't hardcode webhook secret</strong>: Use environment variables</li>
              <li><strong>Don't use HTTP</strong>: Always HTTPS for production</li>
              <li><strong>Don't expose webhook endpoint publicly</strong>: Add rate limiting</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Webhook Checklist */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Webhook Checklist</h3>
        <p className="text-muted-foreground mb-4">Before going live, make sure you've:</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Implemented signature verification</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Tested with ngrok or webhook.site</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Handle all 5 event types</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Return 200 OK within 30 seconds</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Implement idempotency (deduplicate webhooks)</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Add error logging and monitoring</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Use HTTPS endpoint</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Store webhook secret in environment variables</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Test retry behavior (return 500 to trigger)</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Monitor Dead Letter Queue</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Add webhook events to your application logs</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Set up alerts for webhook failures</span>
          </div>
        </div>
      </div>

      {/* Summary & Next Steps */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Summary & Next Steps</h2>
        <p className="text-muted-foreground mb-6">Congratulations! You're now a webhook expert!</p>
        <p className="text-muted-foreground mb-6"><strong>What You Learned:</strong></p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Set up secure webhook endpoints with HMAC-SHA256 verification</li>
          <li>Handle all 5 payment lifecycle events</li>
          <li>Implement automatic retry logic understanding</li>
          <li>Monitor and resolve Dead Letter Queue entries</li>
          <li>Test webhooks locally with ngrok</li>
          <li>Follow best practices for production-ready webhooks</li>
        </ul>
        <h3 className="text-lg font-bold mb-3">Next Steps:</h3>
        <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
          <li>Explore <a href="#wallet-management" className="hover:text-primary transition-colors">Wallet Management</a> to manage your funds</li>
          <li>Check out <a href="#advanced-features" className="hover:text-primary transition-colors">Advanced Features</a> for payment splits, subscriptions, and more</li>
          <li>Review <a href="#api-reference" className="hover:text-primary transition-colors">API Reference</a> for complete endpoint documentation</li>
        </ol>
        <h3 className="text-lg font-bold mb-3 mt-6">Need Help?</h3>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Email: support@zendfi.tech</li>
          <li>Discord: discord.gg/zendfi</li>
          <li>Docs: https://docs.zendfi.tech</li>
        </ul>
        <p className="mt-4 font-semibold text-primary">Happy building!</p>
      </Card>
    </div>
  )
}