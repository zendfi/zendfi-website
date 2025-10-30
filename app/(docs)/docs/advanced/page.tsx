import { Card } from "@/components/ui/card"
import { Users, RefreshCw, Calendar, Shield, Mail, ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react"
import Link from "next/link"

export default function AdvancedFeatures() {
  return (
    <div className="space-y-6 md:space-y-8 max-w-5xl">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
          Advanced Features - Level Up Your Payments!
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Welcome to Advanced Features! This is where ZendFi gets really powerful. From splitting payments among multiple recipients to subscriptions and escrow - we've got enterprise-grade features ready for you. Let's explore! ✨
        </p>
      </div>

      {/* Table of Contents */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Table of Contents
        </h2>
        <ul className="space-y-2 list-disc pl-5">
          <li><Link href="#payment-splits-available-now" className="text-accent/60 hover:underline">Payment Splits</Link></li>
          <li><Link href="#subscriptions-coming-soon" className="text-accent/60 hover:underline">Subscriptions</Link></li>
          <li><Link href="#installment-plans-coming-soon" className="text-accent/60 hover:underline">Installment Plans</Link></li>
          <li><Link href="#escrow-payments-coming-soon" className="text-accent/60 hover:underline">Escrow Payments</Link></li>
          <li><Link href="#invoices-coming-soon" className="text-accent/60 hover:underline">Invoices</Link></li>
        </ul>
      </Card>

      {/* Payment Splits */}
      <section id="payment-splits-available-now">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Payment Splits</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            <strong>Payment Splits</strong> let you automatically distribute a single payment among multiple recipients - perfect for marketplaces, affiliate programs, revenue sharing, and multi-vendor platforms!
          </p>
          <h3 className="text-lg font-semibold mb-2">How It Works</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-4 text-muted-foreground">
            <li>Customer makes a single payment</li>
            <li>ZendFi receives the full amount</li>
            <li>After confirmation, funds are automatically split</li>
            <li>Each recipient gets their share sent to their wallet</li>
            <li>All splits tracked with unique transaction signatures</li>
          </ol>
          <h3 className="text-lg font-semibold mb-2">Perfect For:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-6 text-muted-foreground">
            <li><strong>Marketplaces</strong>: Split between seller, platform fee, and payment processor</li>
            <li><strong>Affiliates</strong>: Share revenue with referral partners</li>
            <li><strong>Creators</strong>: Split royalties with collaborators</li>
            <li><strong>Agencies</strong>: Distribute payments among team members</li>
            <li><strong>Platforms</strong>: Revenue sharing (e.g., Spotify-style splits)</li>
          </ul>
          <hr className="my-6 border-muted" />
          <h3 className="text-xl font-semibold mb-4">Create Payment with Splits</h3>
          <p className="mb-2">Add <code>split_recipients</code> to any payment creation request!</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>POST /api/v1/payments</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>amount</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Total payment amount in USD</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>currency</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Currency code (USD only)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>token</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Token to receive (USDC, SOL, USDT)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>description</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Payment description</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>metadata</code></td>
                  <td className="border border-muted p-2">object</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Custom data (max 16KB JSON)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mb-4"><strong>Split Fields:</strong></p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>split_recipients</code></td>
                  <td className="border border-muted p-2">array</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Array of split recipient objects</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>split_recipients[].recipient_wallet</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Solana wallet address (base58)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>split_recipients[].recipient_name</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Recipient name for reference</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>split_recipients[].percentage</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Yes*</td>
                  <td className="border border-muted p-2">Percentage of payment (0-100)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>split_recipients[].fixed_amount_usd</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Yes*</td>
                  <td className="border border-muted p-2">Fixed USD amount</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>split_recipients[].split_order</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Order of execution (default: 0)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mb-6"><em>*Note: Use <strong>either</strong> <code>percentage</code> OR <code>fixed_amount_usd</code>, not both.</em></p>
          <h4 className="font-semibold mb-2">Response Fields</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Field</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>id</code></td>
                  <td className="border border-muted p-2">UUID</td>
                  <td className="border border-muted p-2">Payment ID</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>amount</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Payment amount in USD</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>currency</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Currency code</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>status</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Payment status</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>qr_code</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Solana Pay URI</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>payment_url</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Payment URL</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>expires_at</code></td>
                  <td className="border border-muted p-2">datetime</td>
                  <td className="border border-muted p-2">Expiration timestamp (15 minutes)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>split_ids</code></td>
                  <td className="border border-muted p-2">array</td>
                  <td className="border border-muted p-2">Array of split IDs (if splits configured)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mb-4">Payment Split Examples</h3>
          <h4 className="font-semibold mb-2">Example 1: Marketplace with Platform Fee (Percentage)</h4>
          <p className="text-muted-foreground mb-4">Perfect for platforms like Etsy, Gumroad, or any marketplace!</p>
          <h5 className="font-medium mb-2">Request:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Authorization: Bearer zfi_test_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 100.00,
    "currency": "USD",
    "token": "USDC",
    "description": "Handmade Pottery - Order #12345",
    "metadata": {
      "order_id": "12345",
      "product": "Ceramic Vase",
      "seller": "ArtisanPottery"
    },
    "split_recipients": [
      {
        "recipient_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
        "recipient_name": "Seller - ArtisanPottery",
        "percentage": 85.0,
        "split_order": 1
      },
      {
        "recipient_wallet": "8yKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsV",
        "recipient_name": "Platform Fee",
        "percentage": 10.0,
        "split_order": 2
      },
      {
        "recipient_wallet": "9zKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsW",
        "recipient_name": "Payment Processor",
        "percentage": 5.0,
        "split_order": 3
      }
    ]
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "amount": 100.00,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:ABC123...?amount=100&spl-token=USDC",
  "payment_url": "https://zendfi.tech/pay/550e8400-e29b-41d4-a716-446655440000",
  "expires_at": "2024-01-15T10:45:00Z",
  "split_ids": [
    "660e8400-e29b-41d4-a716-446655440001",
    "770e8400-e29b-41d4-a716-446655440002",
    "880e8400-e29b-41d4-a716-446655440003"
  ]
}`}</code>
          </pre>
          <h5 className="font-medium mb-4">What Happens:</h5>
          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground mb-6">
            <li>Customer pays $100 USDC</li>
            <li>After confirmation:
              <ul className="list-disc pl-5 mt-1">
                <li>Seller gets $85 (85%)</li>
                <li>Platform gets $10 (10%)</li>
                <li>Payment processor gets $5 (5%)</li>
              </ul>
            </li>
            <li>All splits executed automatically</li>
            <li>Each recipient gets a separate transaction</li>
          </ol>
          <h4 className="font-semibold mb-2">Example 2: Affiliate Program (Fixed + Percentage)</h4>
          <p className="text-muted-foreground mb-4">Great for referral programs and affiliate marketing!</p>
          <h5 className="font-medium mb-2">Request:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Authorization: Bearer zfi_test_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 299.99,
    "currency": "USD",
    "token": "USDC",
    "description": "Premium Course - Web3 Development",
    "metadata": {
      "course_id": "web3-101",
      "affiliate_code": "JOHN2024"
    },
    "split_recipients": [
      {
        "recipient_wallet": "AxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsX",
        "recipient_name": "Course Creator",
        "percentage": 70.0,
        "split_order": 1
      },
      {
        "recipient_wallet": "BxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsY",
        "recipient_name": "Affiliate - John",
        "fixed_amount_usd": 50.00,
        "split_order": 2
      },
      {
        "recipient_wallet": "CxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsZ",
        "recipient_name": "Platform",
        "percentage": 13.33,
        "split_order": 3
      }
    ]
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "990e8400-e29b-41d4-a716-446655440004",
  "amount": 299.99,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:DEF456...?amount=299.99&spl-token=USDC",
  "payment_url": "https://zendfi.tech/pay/990e8400-e29b-41d4-a716-446655440004",
  "expires_at": "2024-01-15T11:00:00Z",
  "split_ids": [
    "aa0e8400-e29b-41d4-a716-446655440005",
    "bb0e8400-e29b-41d4-a716-446655440006",
    "cc0e8400-e29b-41d4-a716-446655440007"
  ]
}`}</code>
          </pre>
          <h5 className="font-medium mb-4">What Happens:</h5>
          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground mb-6">
            <li>Customer pays $299.99 USDC</li>
            <li>After confirmation:
              <ul className="list-disc pl-5 mt-1">
                <li>Course creator gets $210.00 (70% = ~$209.99, rounded)</li>
                <li>Affiliate gets $50.00 (fixed amount)</li>
                <li>Platform gets $39.99 (remaining after fixed amounts)</li>
              </ul>
            </li>
            <li>All recipients paid automatically</li>
          </ol>
          <p className="text-sm text-muted-foreground mb-2"><strong>Split Calculation:</strong></p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Course Creator: 70% of $299.99 = $209.99</li>
            <li>Affiliate: Fixed $50.00</li>
            <li>Platform: 13.33% of remaining = ~$40.00</li>
          </ul>
          <h4 className="font-semibold mb-2">Example 3: Multi-Creator Revenue Share</h4>
          <p className="text-muted-foreground mb-4">Perfect for music, podcasts, or collaborative content!</p>
          <h5 className="font-medium mb-2">Request:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Authorization: Bearer zfi_live_xyz789..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 9.99,
    "currency": "USD",
    "token": "USDC",
    "description": "Album Purchase - Midnight Dreams",
    "metadata": {
      "album_id": "midnight-dreams",
      "format": "digital"
    },
    "split_recipients": [
      {
        "recipient_wallet": "DxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsA",
        "recipient_name": "Artist 1 - Vocals",
        "percentage": 40.0,
        "split_order": 1
      },
      {
        "recipient_wallet": "ExKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsB",
        "recipient_name": "Artist 2 - Production",
        "percentage": 40.0,
        "split_order": 2
      },
      {
        "recipient_wallet": "FxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsC",
        "recipient_name": "Label",
        "percentage": 15.0,
        "split_order": 3
      },
      {
        "recipient_wallet": "GxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsD",
        "recipient_name": "Distribution Platform",
        "percentage": 5.0,
        "split_order": 4
      }
    ]
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "dd0e8400-e29b-41d4-a716-446655440008",
  "amount": 9.99,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:GHI789...?amount=9.99&spl-token=USDC",
  "payment_url": "https://zendfi.tech/pay/dd0e8400-e29b-41d4-a716-446655440008",
  "expires_at": "2024-01-15T11:15:00Z",
  "split_ids": [
    "ee0e8400-e29b-41d4-a716-446655440009",
    "ff0e8400-e29b-41d4-a716-446655440010",
    "000e8400-e29b-41d4-a716-446655440011",
    "110e8400-e29b-41d4-a716-446655440012"
  ]
}`}</code>
          </pre>
          <h5 className="font-medium mb-4">What Happens:</h5>
          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground mb-6">
            <li>Customer pays $9.99 USDC</li>
            <li>After confirmation:
              <ul className="list-disc pl-5 mt-1">
                <li>Vocalist gets $3.996 (40%)</li>
                <li>Producer gets $3.996 (40%)</li>
                <li>Label gets $1.499 (15%)</li>
                <li>Platform gets $0.499 (5%)</li>
              </ul>
            </li>
            <li>Percentages add up to 100%</li>
            <li>Each artist gets paid directly</li>
          </ol>
          <h3 className="text-xl font-semibold mb-4">Split Validation Rules</h3>
          <p className="text-muted-foreground mb-4">ZendFi automatically validates your splits to prevent errors! ✅</p>
          <h4 className="font-semibold mb-2">Percentage-Based Splits</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
            <li>Total percentages must equal exactly 100%</li>
            <li>Each percentage: 0.01% to 99.99%</li>
            <li>At least 1 recipient required</li>
            <li>Maximum 10 recipients per payment</li>
          </ul>
          <h4 className="font-semibold mb-2">Fixed Amount Splits</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
            <li>Total fixed amounts must be less than payment amount</li>
            <li>Remaining balance distributed via percentages</li>
            <li>Minimum $0.01 per recipient</li>
            <li>Each wallet address must be valid Solana address</li>
          </ul>
          <h4 className="font-semibold mb-2">General Rules</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-6">
            <li>No duplicate wallet addresses</li>
            <li>Cannot split to the merchant&apos;s own wallet</li>
            <li>All wallet addresses must be base58 format</li>
            <li><code>split_order</code> determines execution sequence</li>
            <li>Each split gets unique ID for tracking</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4">Error Responses</h3>
          <h4 className="font-semibold mb-2">400 Bad Request - Invalid Split Configuration</h4>
          <p className="text-muted-foreground mb-2"><strong>Total percentages don&apos;t equal 100%:</strong></p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "error": "Invalid split configuration",
  "details": "Total percentages must equal 100%, got 95%",
  "field": "split_recipients"
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-4"><strong>Solution:</strong> Ensure all percentages add up to exactly 100.</p>
          <p className="text-muted-foreground mb-2"><strong>Fixed amounts exceed payment total:</strong></p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "error": "Invalid split configuration",
  "details": "Total fixed amounts ($120.00) exceed payment amount ($100.00)",
  "field": "split_recipients"
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-4"><strong>Solution:</strong> Fixed amounts must leave room for percentage-based splits.</p>
          <p className="text-muted-foreground mb-2"><strong>Invalid wallet address:</strong></p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "error": "Invalid split configuration",
  "details": "Invalid Solana wallet address: invalid_address",
  "field": "split_recipients[0].recipient_wallet"
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-4"><strong>Solution:</strong> All recipient wallets must be valid base58 Solana addresses.</p>
          <p className="text-muted-foreground mb-2"><strong>Duplicate wallets:</strong></p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "error": "Invalid split configuration",
  "details": "Duplicate wallet address: 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "field": "split_recipients"
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-4"><strong>Solution:</strong> Each recipient must have a unique wallet address.</p>
          <p className="text-muted-foreground mb-2"><strong>Too many recipients:</strong></p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "error": "Invalid split configuration",
  "details": "Maximum 10 split recipients allowed, got 15",
  "field": "split_recipients"
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-4"><strong>Solution:</strong> Limit splits to 10 recipients per payment.</p>
          <p className="text-muted-foreground mb-2"><strong>Missing required field:</strong></p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "error": "Invalid split configuration",
  "details": "Either percentage or fixed_amount_usd is required",
  "field": "split_recipients[1]"
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-4"><strong>Solution:</strong> Each recipient needs either <code>percentage</code> or <code>fixed_amount_usd</code>.</p>
          <h3 className="text-xl font-semibold mb-4">Split Status & Tracking</h3>
          <p className="text-muted-foreground mb-4">Each split has its own lifecycle and can be tracked independently!</p>
          <h4 className="font-semibold mb-2">Split Statuses</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Status</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>pending</code></td>
                  <td className="border border-muted p-2">Payment confirmed, split queued for processing</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>processing</code></td>
                  <td className="border border-muted p-2">Split transaction being sent on-chain</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>completed</code></td>
                  <td className="border border-muted p-2">Split successfully sent to recipient</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>failed</code></td>
                  <td className="border border-muted p-2">Split failed (will retry automatically)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>refunded</code></td>
                  <td className="border border-muted p-2">Split was refunded due to payment refund</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-semibold mb-2">Automatic Retry</h4>
          <p className="text-muted-foreground mb-4">If a split fails (network issues, insufficient fees, etc.), ZendFi automatically retries:</p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-6">
            <li><strong>1st retry:</strong> After 1 minute</li>
            <li><strong>2nd retry:</strong> After 5 minutes</li>
            <li><strong>3rd retry:</strong> After 15 minutes</li>
            <li><strong>4th retry:</strong> After 1 hour</li>
            <li><strong>5th retry:</strong> After 24 hours</li>
          </ul>
          <p className="text-sm text-muted-foreground">After 5 failed attempts, the split is moved to manual review.</p>
          <h3 className="text-xl font-semibold mb-4">Webhooks for Splits</h3>
          <p className="text-muted-foreground mb-4">ZendFi sends separate webhook events for split completions!</p>
          <h4 className="font-semibold mb-2">Split Webhook Events</h4>
          <h5 className="font-medium mb-2">Split Completed:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "event": "SplitCompleted",
  "split": {
    "id": "660e8400-e29b-41d4-a716-446655440001",
    "payment_id": "550e8400-e29b-41d4-a716-446655440000",
    "recipient_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    "recipient_name": "Seller - ArtisanPottery",
    "amount_usd": 85.00,
    "amount_crypto": 85.00,
    "currency": "USDC",
    "status": "completed",
    "transaction_signature": "5KzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2...",
    "settled_at": "2024-01-15T10:35:00Z"
  },
  "timestamp": "2024-01-15T10:35:00Z"
}`}</code>
          </pre>
          <h5 className="font-medium mb-2">Split Failed:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "event": "SplitFailed",
  "split": {
    "id": "770e8400-e29b-41d4-a716-446655440002",
    "payment_id": "550e8400-e29b-41d4-a716-446655440000",
    "recipient_wallet": "8yKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsV",
    "failure_reason": "Insufficient SOL for transaction fees",
    "retry_count": 3,
    "next_retry_at": "2024-01-15T11:35:00Z"
  },
  "timestamp": "2024-01-15T10:36:00Z"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
          <h4 className="font-semibold mb-2">Node.js: Create Payment with Splits</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`const axios = require('axios');

const ZENDFI_API_KEY = process.env.ZENDFI_API_KEY;

async function createMarketplacePayment(orderData) {
  const { 
    totalAmount, 
    sellerWallet, 
    sellerPercentage,
    platformWallet,
    platformPercentage 
  } = orderData;

  try {
    const response = await axios.post(
      'https://api.zendfi.tech/api/v1/payments',
      {
        amount: totalAmount,
        currency: 'USD',
        token: 'USDC',
        description: \`Order \${orderData.orderId} - \${orderData.productName}\`,
        metadata: {
          order_id: orderData.orderId,
          seller_id: orderData.sellerId,
          product_id: orderData.productId
        },
        split_recipients: [
          {
            recipient_wallet: sellerWallet,
            recipient_name: \`Seller - \${orderData.sellerName}\`,
            percentage: sellerPercentage,
            split_order: 1
          },
          {
            recipient_wallet: platformWallet,
            recipient_name: 'Platform Fee',
            percentage: platformPercentage,
            split_order: 2
          }
        ]
      },
      {
        headers: {
          'Authorization': \`Bearer \${ZENDFI_API_KEY}\`,
          'Content-Type': 'application/json'
        }
      }
    );

    const payment = response.data;
    console.log('zendfi.techPayment created with splits:');
    console.log(\`  Payment ID: \${payment.id}\`);
    console.log(\`  Amount: \$\${payment.amount} \${payment.currency}\`);
    console.log(\`  Splits: \${payment.split_ids.length} recipients\`);
    console.log(\`  QR Code: \${payment.qr_code}\`);
    console.log(\`  Expires: \${payment.expires_at}\`);

    return payment;
  } catch (error) {
    console.error('❌ Failed to create payment:', error.response?.data || error.message);
    throw error;
  }
}

// Example usage
(async () => {
  const payment = await createMarketplacePayment({
    orderId: 'ORD-12345',
    productName: 'Handmade Ceramic Vase',
    productId: 'PROD-999',
    totalAmount: 100.00,
    sellerId: 'SELLER-123',
    sellerName: 'ArtisanPottery',
    sellerWallet: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    sellerPercentage: 85.0,
    platformWallet: '8yKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsV',
    platformPercentage: 15.0
  });

  console.log('\\n💡 Next steps:');
  console.log('1. Show QR code to customer');
  console.log('2. Monitor payment status via webhooks');
  console.log('3. Splits will process automatically after confirmation');
})();`}</code>
          </pre>
          <h4 className="font-semibold mb-2">Python: Affiliate Payment with Fixed Commission</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`import requests
import os

ZENDFI_API_KEY = os.getenv('ZENDFI_API_KEY')
BASE_URL = 'https://api.zendfi.tech'

def create_affiliate_payment(sale_data):
    """Create payment with affiliate commission"""
    
    # Calculate splits
    affiliate_fixed = 50.00  # Fixed $50 commission
    creator_percentage = 70.0
    platform_percentage = 100.0 - creator_percentage  # Remaining after fixed amount
    
    response = requests.post(
        f'{BASE_URL}/api/v1/payments',
        headers={
            'Authorization': f'Bearer {ZENDFI_API_KEY}',
            'Content-Type': 'application/json'
        },
        json={
            'amount': sale_data['total_amount'],
            'currency': 'USD',
            'token': 'USDC',
            'description': f"{sale_data['product_name']} - Affiliate Sale",
            'metadata': {
                'product_id': sale_data['product_id'],
                'affiliate_code': sale_data['affiliate_code'],
                'customer_email': sale_data['customer_email']
            },
            'split_recipients': [
                {
                    'recipient_wallet': sale_data['creator_wallet'],
                    'recipient_name': f"Creator - {sale_data['creator_name']}",
                    'percentage': creator_percentage,
                    'split_order': 1
                },
                {
                    'recipient_wallet': sale_data['affiliate_wallet'],
                    'recipient_name': f"Affiliate - {sale_data['affiliate_name']}",
                    'fixed_amount_usd': affiliate_fixed,
                    'split_order': 2
                },
                {
                    'recipient_wallet': sale_data['platform_wallet'],
                    'recipient_name': 'Platform',
                    'percentage': platform_percentage,
                    'split_order': 3
                }
            ]
        }
    )
    
    if response.status_code == 200:
        payment = response.json()
        print('zendfi.techAffiliate payment created:')
        print(f'  Payment ID: {payment["id"]}')
        print(f'  Total: {payment["amount"]} {payment["currency"]}')
        print(f'  Splits: {len(payment["split_ids"])} recipients')
        print(f'  Creator gets: {creator_percentage}%')
        print(f'  Affiliate gets: {affiliate_fixed} (fixed)')
        print(f'  Platform gets: {platform_percentage}% of remainder')
        return payment
    else:
        print(f'❌ Payment creation failed: {response.json()}')
        return None

# Example usage
if __name__ == '__main__':
    payment = create_affiliate_payment({
        'product_id': 'course-web3-101',
        'product_name': 'Web3 Development Course',
        'total_amount': 299.99,
        'creator_name': 'TechGuru',
        'creator_wallet': 'AxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsX',
        'affiliate_code': 'JOHN2024',
        'affiliate_name': 'John',
        'affiliate_wallet': 'BxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsY',
        'platform_wallet': 'CxKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsZ',
        'customer_email': 'customer@example.com'
    })
    
    if payment:
        print('\\n💡 Payment created successfully!')
        print('Splits will be processed automatically after payment confirmation.')`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Best Practices for Splits</h3>
          <h4 className="font-semibold mb-2">✅ DO</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
            <li><strong>Validate splits on your backend</strong>: Double-check percentages add to 100%</li>
            <li><strong>Use recipient names</strong>: Helps with tracking and debugging</li>
            <li><strong>Set split_order</strong>: Control execution sequence</li>
            <li><strong>Store split_ids</strong>: Track each split independently</li>
            <li><strong>Listen for split webhooks</strong>: Know when each recipient gets paid</li>
            <li><strong>Test on devnet first</strong>: Verify split logic before production</li>
            <li><strong>Keep metadata detailed</strong>: Include order/transaction context</li>
            <li><strong>Handle split failures gracefully</strong>: Automatic retries handle most cases</li>
          </ul>
          <h4 className="font-semibold mb-2">❌ DON&apos;T</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>❌ <strong>Don&apos;t hardcode percentages</strong>: Make them configurable</li>
            <li>❌ <strong>Don&apos;t ignore validation</strong>: ZendFi validates, but you should too</li>
            <li>❌ <strong>Don&apos;t exceed 10 recipients</strong>: Keep it simple</li>
            <li>❌ <strong>Don&apos;t mix percentage and fixed randomly</strong>: Be consistent in your model</li>
            <li>❌ <strong>Don&apos;t forget transaction fees</strong>: Recipients need SOL for USDC</li>
            <li>❌ <strong>Don&apos;t skip testing</strong>: Test all split scenarios</li>
            <li>❌ <strong>Don&apos;t assume instant</strong>: Splits process after payment confirms (~30-60s)</li>
          </ul>
        </Card>
      </section>

      {/* Subscriptions Section */}
      <section id="subscriptions-coming-soon">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Subscriptions API (LIVE NOW!) 🔄</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            <strong>Recurring payments made easy!</strong> Create subscription plans with flexible billing intervals - perfect for SaaS, memberships, and any recurring service!
          </p>
          <h3 className="text-lg font-semibold mb-2">What&apos;s Available:</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-6">
            <li>Multiple billing intervals (daily, weekly, monthly, yearly)</li>
            <li>Trial periods (free trials before billing starts)</li>
            <li>Automatic billing cycle processing</li>
            <li>Subscription management (cancel immediately or at period end)</li>
            <li>Cycle limits (max number of billing cycles)</li>
            <li>Customer subscription tracking</li>
            <li>Webhook events for subscription lifecycle</li>
          </ul>
          <p className="text-green-600 font-semibold mb-4"><strong>Status:</strong> <strong>FULLY OPERATIONAL</strong> - Start using subscriptions today!</p>
          <h3 className="text-xl font-semibold mb-4">Create Subscription Plan</h3>
          <p className="text-muted-foreground mb-4">Create a reusable subscription plan that customers can subscribe to!</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/subscription-plans</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>name</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Plan name (e.g., &quot;Premium Monthly&quot;)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>description</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Plan description</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>amount</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Price per billing cycle in USD (must be &gt; 0)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>currency</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Currency code (&quot;USD&quot; only)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>billing_interval</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">&quot;daily&quot;, &quot;weekly&quot;, &quot;monthly&quot;, or &quot;yearly&quot;</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>interval_count</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Number of intervals between charges (default: 1)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>trial_days</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Free trial days before first charge (default: 0)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>max_cycles</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Maximum billing cycles (null = unlimited)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>metadata</code></td>
                  <td className="border border-muted p-2">object</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Custom key-value pairs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-semibold mb-2">Example 1: Monthly SaaS Plan</h4>
          <h5 className="font-medium mb-2">Request:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/subscription-plans \\
  -H "Authorization: Bearer zfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Pro Plan - Monthly",
    "description": "Full access to all pro features",
    "amount": 29.99,
    "currency": "USD",
    "billing_interval": "monthly",
    "interval_count": 1,
    "trial_days": 14,
    "metadata": {
      "features": ["unlimited_api_calls", "priority_support", "advanced_analytics"],
      "tier": "pro"
    }
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response: 200 OK</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "plan_abc123def456",
  "merchant_id": "merchant_xyz789",
  "name": "Pro Plan - Monthly",
  "description": "Full access to all pro features",
  "amount": 29.99,
  "currency": "USD",
  "billing_interval": "monthly",
  "interval_count": 1,
  "trial_days": 14,
  "max_cycles": null,
  "is_active": true,
  "created_at": "2025-10-26T12:00:00Z",
  "subscription_url": "/subscribe/plan_abc123def456"
}`}</code>
          </pre>
          <h4 className="font-semibold mb-2">Example 2: Annual Plan with Discount</h4>
          <h5 className="font-medium mb-2">Request:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/subscription-plans \\
  -H "Authorization: Bearer zfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Pro Plan - Annual",
    "description": "Save 20% with annual billing!",
    "amount": 287.90,
    "currency": "USD",
    "billing_interval": "yearly",
    "interval_count": 1,
    "trial_days": 0,
    "metadata": {
      "annual_discount": "20%",
      "monthly_equivalent": 23.99
    }
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response: 200 OK</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "plan_annual_xyz",
  "merchant_id": "merchant_xyz789",
  "name": "Pro Plan - Annual",
  "description": "Save 20% with annual billing!",
  "amount": 287.90,
  "currency": "USD",
  "billing_interval": "yearly",
  "interval_count": 1,
  "trial_days": 0,
  "max_cycles": null,
  "is_active": true,
  "created_at": "2025-10-26T12:05:00Z",
  "subscription_url": "/subscribe/plan_annual_xyz"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">List Subscription Plans</h3>
          <p className="text-muted-foreground mb-4">Get all subscription plans for your merchant account.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/subscription-plans</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET https://api.zendfi.tech/api/v1/subscription-plans \\
  -H "Authorization: Bearer zfi_live_abc123..."`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`[
  {
    "id": "plan_abc123def456",
    "merchant_id": "merchant_xyz789",
    "name": "Pro Plan - Monthly",
    "description": "Full access to all pro features",
    "amount": 29.99,
    "currency": "USD",
    "billing_interval": "monthly",
    "interval_count": 1,
    "trial_days": 14,
    "max_cycles": null,
    "is_active": true,
    "created_at": "2025-10-26T12:00:00Z",
    "subscription_url": "/subscribe/plan_abc123def456"
  },
  {
    "id": "plan_annual_xyz",
    "merchant_id": "merchant_xyz789",
    "name": "Pro Plan - Annual",
    "description": "Save 20% with annual billing!",
    "amount": 287.90,
    "currency": "USD",
    "billing_interval": "yearly",
    "interval_count": 1,
    "trial_days": 0,
    "max_cycles": null,
    "is_active": true,
    "created_at": "2025-10-26T12:05:00Z",
    "subscription_url": "/subscribe/plan_annual_xyz"
  }
]`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Get Subscription Plan</h3>
          <p className="text-muted-foreground mb-4">Get details of a specific subscription plan (public endpoint - no auth required).</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/subscription-plans/:plan_id</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET https://api.zendfi.tech/api/v1/subscription-plans/plan_abc123def456`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "plan_abc123def456",
  "merchant_id": "merchant_xyz789",
  "name": "Pro Plan - Monthly",
  "description": "Full access to all pro features",
  "amount": 29.99,
  "currency": "USD",
  "billing_interval": "monthly",
  "interval_count": 1,
  "trial_days": 14,
  "max_cycles": null,
  "is_active": true,
  "created_at": "2025-10-26T12:00:00Z",
  "subscription_url": "/subscribe/plan_abc123def456"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Subscribe Customer to Plan</h3>
          <p className="text-muted-foreground mb-4">Create a subscription for a customer on a specific plan.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/subscriptions</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>plan_id</code></td>
                  <td className="border border-muted p-2">UUID</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Subscription plan ID</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>customer_wallet</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Customer&apos;s Solana wallet address</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>customer_email</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Customer&apos;s email for notifications</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>metadata</code></td>
                  <td className="border border-muted p-2">object</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Custom key-value pairs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/subscriptions \\
  -H "Content-Type: application/json" \\
  -d '{
    "plan_id": "plan_abc123def456",
    "customer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    "customer_email": "customer@example.com",
    "metadata": {
      "user_id": "user_12345",
      "signup_source": "landing_page"
    }
  }'`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "sub_xyz789abc123",
  "plan_id": "plan_abc123def456",
  "plan_name": "Pro Plan - Monthly",
  "customer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "status": "trialing",
  "current_period_start": "2025-10-26T12:10:00Z",
  "current_period_end": "2025-11-09T12:10:00Z",
  "next_payment_attempt": "2025-11-09T12:10:00Z",
  "cycles_completed": 0,
  "trial_end": "2025-11-09T12:10:00Z",
  "created_at": "2025-10-26T12:10:00Z",
  "payment_url": null
}`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-4"><strong>Note:</strong> If plan has <code>trial_days &gt; 0</code>, subscription status is <code>&quot;trialing&quot;</code> and <code>payment_url</code> is <code>null</code>. First payment happens after trial ends!</p>
          <h3 className="text-xl font-semibold mb-4">Get Subscription</h3>
          <p className="text-muted-foreground mb-4">Get details of a specific subscription.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/subscriptions/:id</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET https://api.zendfi.tech/api/v1/subscriptions/sub_xyz789abc123`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "sub_xyz789abc123",
  "plan_id": "plan_abc123def456",
  "plan_name": "Pro Plan - Monthly",
  "customer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "status": "active",
  "current_period_start": "2025-11-09T12:10:00Z",
  "current_period_end": "2025-12-09T12:10:00Z",
  "next_payment_attempt": "2025-12-09T12:10:00Z",
  "cycles_completed": 1,
  "trial_end": null,
  "created_at": "2025-10-26T12:10:00Z",
  "payment_url": "https://zendfi.tech/subscription/sub_xyz789abc123/pay"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Cancel Subscription</h3>
          <p className="text-muted-foreground mb-4">Cancel a subscription immediately or at the end of the current billing period.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/subscriptions/:id/cancel</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>cancel_at_period_end</code></td>
                  <td className="border border-muted p-2">boolean</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">If true, subscription continues until period ends (default: false)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>reason</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Cancellation reason</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-medium mb-2">Example 1: Cancel Immediately</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/subscriptions/sub_xyz789abc123/cancel \\
  -H "Content-Type: application/json" \\
  -d '{
    "cancel_at_period_end": false,
    "reason": "Customer requested cancellation"
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response: 200 OK</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "message": "Subscription cancelled successfully",
  "subscription_id": "sub_xyz789abc123",
  "cancel_at_period_end": false
}`}</code>
          </pre>
          <h4 className="font-medium mb-2">Example 2: Cancel at Period End</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/subscriptions/sub_xyz789abc123/cancel \\
  -H "Content-Type: application/json" \\
  -d '{
    "cancel_at_period_end": true,
    "reason": "Switching to annual plan"
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response: 200 OK</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "message": "Subscription cancelled successfully",
  "subscription_id": "sub_xyz789abc123",
  "cancel_at_period_end": true
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Subscription Statuses</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Status</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>trialing</code></td>
                  <td className="border border-muted p-2">In free trial period - no charges yet</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>active</code></td>
                  <td className="border border-muted p-2">Subscription is active and billing</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>past_due</code></td>
                  <td className="border border-muted p-2">Last payment failed - subscription still active but needs payment</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>paused</code></td>
                  <td className="border border-muted p-2">Subscription temporarily paused (future feature)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>cancelled</code></td>
                  <td className="border border-muted p-2">Subscription cancelled</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>expired</code></td>
                  <td className="border border-muted p-2">Subscription reached max_cycles or ended</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mb-4">Automatic Billing</h3>
          <p className="text-muted-foreground">ZendFi automatically processes subscription billing! A background worker runs every hour to:</p>
          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground mt-2 mb-6">
            <li>Check for subscriptions with <code>next_payment_attempt</code> due</li>
            <li>Create payment for the billing amount</li>
            <li>Send payment link to customer via webhook/email</li>
            <li>On successful payment: Advance billing cycle</li>
            <li>On failed payment: Mark subscription <code>past_due</code> and retry</li>
            <li>Send webhooks for all subscription events</li>
          </ol>
          <p className="text-muted-foreground">You don&apos;t need to do anything - just create the subscription and we handle the rest! 🎉</p>
        </Card>
      </section>

      {/* Installment Plans Section */}
      <section id="installment-plans-coming-soon">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Installment Plans API (LIVE NOW!)</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            <strong>Let customers pay over time!</strong> Split a single purchase into multiple scheduled payments - perfect for big-ticket items!
          </p>
          <h3 className="text-lg font-semibold mb-2">What&apos;s Available:</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-6">
            <li>Flexible payment schedules (custom frequency in days)</li>
            <li>Automatic payment tracking</li>
            <li>Late payment detection with grace periods</li>
            <li>Late fees support</li>
            <li>Default tracking and notifications</li>
            <li>Plan cancellation</li>
            <li>Customer and merchant plan views</li>
          </ul>
          <p className="text-green-600 font-semibold mb-4"><strong>Status:</strong> <strong>FULLY OPERATIONAL</strong> - Start offering installment plans today!</p>
          <h3 className="text-xl font-semibold mb-4">Create Installment Plan</h3>
          <p className="text-muted-foreground mb-4">Create a payment plan that spreads a purchase across multiple payments!</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/installment-plans</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>customer_wallet</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Customer&apos;s Solana wallet address</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>customer_email</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Customer&apos;s email for reminders</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>total_amount</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Total purchase amount in USD (must be &gt; 0)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>installment_count</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Number of payments (must be &gt; 0)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>first_payment_date</code></td>
                  <td className="border border-muted p-2">datetime</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">First payment due date (default: tomorrow)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>payment_frequency_days</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Days between payments (e.g., 30 for monthly)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>description</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Plan description</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>late_fee_amount</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Late fee in USD</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>grace_period_days</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Grace period after due date (default: 7)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>metadata</code></td>
                  <td className="border border-muted p-2">object</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Custom key-value pairs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-semibold mb-2">Example: 3-Month Payment Plan</h4>
          <h5 className="font-medium mb-2">Request:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/installment-plans \\
  -H "Authorization: Bearer zfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    "customer_email": "customer@example.com",
    "total_amount": 900.00,
    "installment_count": 3,
    "payment_frequency_days": 30,
    "description": "MacBook Pro - 3 Monthly Payments",
    "late_fee_amount": 25.00,
    "grace_period_days": 5,
    "metadata": {
      "product_id": "macbook_pro_16",
      "order_id": "ORD-12345"
    }
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response: 200 OK</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "plan_id": "install_abc123def456",
  "status": "active"
}`}</code>
          </pre>
          <p className="text-muted-foreground mb-6"><strong>What Happens:</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Customer pays $300 now, $300 in 30 days, $300 in 60 days</li>
              <li>5-day grace period after each due date</li>
              <li>$25 late fee if payment is late</li>
              <li>Automatic reminders sent via email</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold mb-4">Get Installment Plan</h3>
          <p className="text-muted-foreground mb-4">Get details of a specific installment plan including payment schedule!</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/installment-plans/:plan_id</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET https://api.zendfi.tech/api/v1/installment-plans/install_abc123def456 \\
  -H "Authorization: Bearer zfi_live_abc123..."`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "install_abc123def456",
  "merchant_id": "merchant_xyz789",
  "customer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "customer_email": "customer@example.com",
  "total_amount": "900.00",
  "installment_count": 3,
  "amount_per_installment": "300.00",
  "payment_schedule": [
    {
      "installment_number": 1,
      "due_date": "2025-10-27T12:00:00Z",
      "amount": "300.00",
      "status": "paid",
      "payment_id": "payment_1_abc",
      "paid_at": "2025-10-27T10:30:00Z"
    },
    {
      "installment_number": 2,
      "due_date": "2025-11-26T12:00:00Z",
      "amount": "300.00",
      "status": "pending",
      "payment_id": null,
      "paid_at": null
    },
    {
      "installment_number": 3,
      "due_date": "2025-12-26T12:00:00Z",
      "amount": "300.00",
      "status": "pending",
      "payment_id": null,
      "paid_at": null
    }
  ],
  "paid_count": 1,
  "status": "active",
  "description": "MacBook Pro - 3 Monthly Payments",
  "late_fee_amount": "25.00",
  "grace_period_days": 5,
  "metadata": {
    "product_id": "macbook_pro_16",
    "order_id": "ORD-12345"
  },
  "created_at": "2025-10-26T12:00:00Z",
  "updated_at": "2025-10-27T10:30:00Z",
  "completed_at": null,
  "defaulted_at": null
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">List Merchant&apos;s Installment Plans</h3>
          <p className="text-muted-foreground mb-4">Get all installment plans for your merchant account.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/installment-plans</code>
          </pre>
          <h4 className="font-semibold mb-2">Query Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>limit</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Max results (default: 50, max: 100)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>offset</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Pagination offset (default: 0)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET "https://api.zendfi.tech/api/v1/installment-plans?limit=20&offset=0" \\
  -H "Authorization: Bearer zfi_live_abc123..."`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">List Customer&apos;s Installment Plans</h3>
          <p className="text-muted-foreground mb-4">Get all installment plans for a specific customer (public endpoint).</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/customers/:customer_wallet/installment-plans</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET https://api.zendfi.tech/api/v1/customers/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU/installment-plans`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Cancel Installment Plan</h3>
          <p className="text-muted-foreground mb-4">Cancel an active installment plan.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/installment-plans/:plan_id/cancel</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/installment-plans/install_abc123def456/cancel \\
  -H "Authorization: Bearer zfi_live_abc123..."`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "message": "Installment plan cancelled successfully",
  "plan_id": "install_abc123def456"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Installment Plan Statuses</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Status</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>active</code></td>
                  <td className="border border-muted p-2">Plan is active, customer making payments</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>completed</code></td>
                  <td className="border border-muted p-2">All installments paid successfully! 🎉</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>defaulted</code></td>
                  <td className="border border-muted p-2">Customer missed payment beyond grace period</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>cancelled</code></td>
                  <td className="border border-muted p-2">Plan cancelled by merchant</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mb-4">Automatic Monitoring</h3>
          <p className="text-muted-foreground">ZendFi automatically monitors installment plans! A background worker runs hourly to:</p>
          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground mt-2 mb-6">
            <li>Check for overdue installments</li>
            <li>Send late payment reminders</li>
            <li>Apply late fees after grace period</li>
            <li>Mark plans as defaulted if payment missed too long</li>
            <li>Send email notifications to customers</li>
            <li>Trigger webhooks for payment events</li>
          </ol>
        </Card>
      </section>

      {/* Escrow Payments Section */}
      <section id="escrow-payments-coming-soon">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Escrow Payments API (LIVE NOW!)</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            <strong>Protect buyers and sellers!</strong> Hold funds in escrow until conditions are met - perfect for high-value transactions!
          </p>
          <h3 className="text-lg font-semibold mb-2">What&apos;s Available:</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-6">
            <li>Funds held in secure escrow wallet</li>
            <li>Multiple release conditions (manual approval, time-based, confirmations, milestones)</li>
            <li>Approve release to seller</li>
            <li>Refund to buyer</li>
            <li>Dispute resolution workflow</li>
            <li>Automatic time-based releases</li>
            <li>Webhook events for escrow lifecycle</li>
          </ul>
          <p className="text-green-600 font-semibold mb-4"><strong>Status:</strong> <strong>FULLY OPERATIONAL</strong> - Start using escrow today!</p>
          <h3 className="text-xl font-semibold mb-4">Create Escrow</h3>
          <p className="text-muted-foreground mb-4">Create an escrow transaction that holds funds until conditions are met!</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/escrows</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>buyer_wallet</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Buyer&apos;s Solana wallet address</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>seller_wallet</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Seller&apos;s Solana wallet address</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>amount</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Escrow amount in USD (must be &gt; 0)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>currency</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Currency code (&quot;USD&quot; only)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>token</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Token for payment (&quot;USDC&quot;, &quot;SOL&quot;, &quot;USDT&quot;)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>description</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Escrow description</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>release_conditions</code></td>
                  <td className="border border-muted p-2">object</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Conditions for releasing funds (see below)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>metadata</code></td>
                  <td className="border border-muted p-2">object</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Custom key-value pairs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-semibold mb-2">Release Condition Types</h4>
          <h5 className="font-medium mb-2">1. Manual Approval:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "type": "manual_approval",
  "approver": "wallet_address",
  "approved": false
}`}</code>
          </pre>
          <h5 className="font-medium mb-2">2. Time-Based (Auto-release after date):</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "type": "time_based",
  "release_after": "2025-11-01T00:00:00Z"
}`}</code>
          </pre>
          <h5 className="font-medium mb-2">3. Confirmation Required (Multiple approvals):</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "type": "confirmation_required",
  "confirmations_needed": 2,
  "confirmed_by": []
}`}</code>
          </pre>
          <h5 className="font-medium mb-2">4. Milestone-Based:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "type": "milestone",
  "description": "Website delivered and approved",
  "approved": false,
  "approved_by": null
}`}</code>
          </pre>
          <h4 className="font-semibold mb-2">Example: Freelance Project Escrow</h4>
          <h5 className="font-medium mb-2">Request:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/escrows \\
  -H "Authorization: Bearer zfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "buyer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    "seller_wallet": "9yJKg3DX98h87TYKSDqcE6jCkhgTrB94UZSmKptgBsV",
    "amount": 2500.00,
    "currency": "USD",
    "token": "USDC",
    "description": "Website Development - Full Stack Project",
    "release_conditions": {
      "type": "milestone",
      "description": "Website delivered and approved by client",
      "approved": false,
      "approved_by": null
    },
    "metadata": {
      "project_id": "proj_12345",
      "contract_url": "https://example.com/contracts/12345"
    }
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response: 200 OK</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "escrow_abc123def456",
  "payment_id": "payment_xyz789",
  "buyer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "seller_wallet": "9yJKg3DX98h87TYKSDqcE6jCkhgTrB94UZSmKptgBsV",
  "escrow_wallet": "EscrowSystemWallet...",
  "amount": 2500.00,
  "status": "pending",
  "release_conditions": {
    "type": "milestone",
    "description": "Website delivered and approved by client",
    "approved": false,
    "approved_by": null
  },
  "payment_url": "https://zendfi.tech/pay/payment_xyz789",
  "qr_code": "solana:...",
  "created_at": "2025-10-26T12:00:00Z"
}`}</code>
          </pre>
          <p className="text-muted-foreground mb-6"><strong>What Happens Next:</strong>
            <ol className="list-decimal pl-5 mt-2">
              <li>Buyer pays $2,500 USDC</li>
              <li>Funds held in secure escrow wallet</li>
              <li>Seller delivers website</li>
              <li>Buyer approves milestone</li>
              <li>Funds automatically released to seller! 🎉</li>
            </ol>
          </p>
          <h3 className="text-xl font-semibold mb-4">Get Escrow</h3>
          <p className="text-muted-foreground mb-4">Get details of a specific escrow transaction.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/escrows/:escrow_id</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET https://api.zendfi.tech/api/v1/escrows/escrow_abc123def456 \\
  -H "Authorization: Bearer zfi_live_abc123..."`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "escrow_abc123def456",
  "payment_id": "payment_xyz789",
  "merchant_id": "merchant_123",
  "buyer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "seller_wallet": "9yJKg3DX98h87TYKSDqcE6jCkhgTrB94UZSmKptgBsV",
  "escrow_wallet": "EscrowSystemWallet...",
  "release_conditions": {
    "type": "milestone",
    "description": "Website delivered and approved by client",
    "approved": false,
    "approved_by": null
  },
  "status": "funded",
  "funded_at": "2025-10-26T14:30:00Z",
  "released_at": null,
  "refunded_at": null,
  "disputed_at": null,
  "dispute_reason": null,
  "release_transaction_signature": null,
  "refund_transaction_signature": null,
  "metadata": {
    "project_id": "proj_12345"
  },
  "created_at": "2025-10-26T12:00:00Z",
  "updated_at": "2025-10-26T14:30:00Z"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">List Escrows</h3>
          <p className="text-muted-foreground mb-4">Get all escrow transactions for your merchant account.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/escrows</code>
          </pre>
          <h4 className="font-semibold mb-2">Query Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>limit</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Max results (default: 50, max: 100)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>offset</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Pagination offset (default: 0)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET "https://api.zendfi.tech/api/v1/escrows?limit=20&offset=0" \\
  -H "Authorization: Bearer zfi_live_abc123..."`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Approve Escrow Release</h3>
          <p className="text-muted-foreground mb-4">Approve the release of escrowed funds to the seller!</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/escrows/:escrow_id/approve</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>approver_wallet</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Wallet address of approver</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/escrows/escrow_abc123def456/approve \\
  -H "Authorization: Bearer zfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "approver_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response: 200 OK (Fully Released)</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "status": "released",
  "transaction_signature": "5KzZ8LWvZh7NYjJvPhHGYnNrB2rKqb2...",
  "message": "Escrow funds released to seller"
}`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response: 200 OK (Approval Recorded, Waiting for More)</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "status": "approved",
  "message": "Approval recorded, waiting for additional confirmations"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Refund Escrow</h3>
          <p className="text-muted-foreground mb-4">Refund escrowed funds back to the buyer.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/escrows/:escrow_id/refund</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>reason</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Refund reason</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/escrows/escrow_abc123def456/refund \\
  -H "Authorization: Bearer zfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "reason": "Project cancelled by mutual agreement"
  }'`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "status": "refunded",
  "transaction_signature": "3k8n5TY89VvD2kRfV4iqmLKtSWFjDnMoRcWr4dJYKPcH...",
  "message": "Escrow funds refunded to buyer",
  "reason": "Project cancelled by mutual agreement"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Dispute Escrow</h3>
          <p className="text-muted-foreground mb-4">Raise a dispute for an escrow transaction.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/escrows/:escrow_id/dispute</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>reason</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Dispute reason (detailed)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/escrows/escrow_abc123def456/dispute \\
  -H "Authorization: Bearer zfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "reason": "Seller did not deliver agreed upon features. Missing responsive design and payment integration."
  }'`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "status": "disputed",
  "message": "Dispute raised successfully. ZendFi support will review within 24 hours.",
  "dispute_id": "dispute_abc123",
  "created_at": "2025-10-26T16:00:00Z"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Escrow Statuses</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Status</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>pending</code></td>
                  <td className="border border-muted p-2">Escrow created, waiting for buyer payment</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>funded</code></td>
                  <td className="border border-muted p-2">Payment received, funds held in escrow</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>released</code></td>
                  <td className="border border-muted p-2">Funds released to seller</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>refunded</code></td>
                  <td className="border border-muted p-2">Funds refunded to buyer</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>disputed</code></td>
                  <td className="border border-muted p-2">Dispute raised, under review</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>cancelled</code></td>
                  <td className="border border-muted p-2">Escrow cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mb-4">Automatic Monitoring</h3>
          <p className="text-muted-foreground">ZendFi automatically monitors escrow transactions! A background worker runs hourly to:</p>
          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground mt-2 mb-6">
            <li>Check time-based release conditions</li>
            <li>Auto-release funds when time condition met</li>
            <li>Send email notifications to all parties</li>
            <li>Trigger webhooks for status changes</li>
            <li>Alert admins for disputed transactions</li>
          </ol>
        </Card>
      </section>

      {/* Invoices Section */}
      <section id="invoices-coming-soon">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Invoices API (LIVE NOW!)</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            <strong>Professional invoicing for your business!</strong> Generate and send invoices with payment tracking and email delivery!
          </p>
          <h3 className="text-lg font-semibold mb-2">What&apos;s Available:</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-6">
            <li>Automatic invoice numbering (INV-2025-00001)</li>
            <li>Line items support</li>
            <li>Due dates</li>
            <li>Email delivery to customers</li>
            <li>Payment URL generation</li>
            <li>Status tracking (draft, sent, paid)</li>
            <li>List all invoices</li>
          </ul>
          <p className="text-green-600 font-semibold mb-4"><strong>Status:</strong> <strong>FULLY OPERATIONAL</strong> - Start invoicing today!</p>
          <h3 className="text-xl font-semibold mb-4">Create Invoice</h3>
          <p className="text-muted-foreground mb-4">Create a professional invoice for your customer!</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/invoices</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-semibold mb-2">Request Parameters</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Parameter</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Required</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>customer_email</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Customer&apos;s email address</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>customer_name</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Customer&apos;s name</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>amount</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Invoice amount in USD (must be &gt; 0)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>token</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Token for payment (&quot;USDC&quot;, &quot;SOL&quot;, &quot;USDT&quot;)</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>description</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Yes</td>
                  <td className="border border-muted p-2">Invoice description</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>line_items</code></td>
                  <td className="border border-muted p-2">array</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Array of line item objects</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>due_date</code></td>
                  <td className="border border-muted p-2">datetime</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Payment due date</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>metadata</code></td>
                  <td className="border border-muted p-2">object</td>
                  <td className="border border-muted p-2">No</td>
                  <td className="border border-muted p-2">Custom key-value pairs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-semibold mb-2">Line Item Object</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Field</th>
                  <th className="border border-muted p-2 text-left">Type</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>description</code></td>
                  <td className="border border-muted p-2">string</td>
                  <td className="border border-muted p-2">Item description</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>quantity</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Quantity</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>unit_price</code></td>
                  <td className="border border-muted p-2">number</td>
                  <td className="border border-muted p-2">Price per unit in USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-semibold mb-2">Example: Service Invoice with Line Items</h4>
          <h5 className="font-medium mb-2">Request:</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/invoices \\
  -H "Authorization: Bearer zfi_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_email": "client@example.com",
    "customer_name": "Acme Corp",
    "amount": 3500.00,
    "token": "USDC",
    "description": "Web Development Services - Q4 2025",
    "line_items": [
      {
        "description": "Frontend Development (React)",
        "quantity": 40,
        "unit_price": 50.00
      },
      {
        "description": "Backend API Development",
        "quantity": 30,
        "unit_price": 50.00
      },
      {
        "description": "UI/UX Design",
        "quantity": 10,
        "unit_price": 100.00
      }
    ],
    "due_date": "2025-11-15T23:59:59Z",
    "metadata": {
      "project_id": "proj_q4_2025",
      "po_number": "PO-12345"
    }
  }'`}</code>
          </pre>
          <h5 className="font-medium mb-2">Response: 200 OK</h5>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "invoice_abc123def456",
  "invoice_number": "INV-2025-00042",
  "customer_email": "client@example.com",
  "customer_name": "Acme Corp",
  "amount_usd": 3500.00,
  "token": "USDC",
  "description": "Web Development Services - Q4 2025",
  "status": "draft",
  "payment_url": null,
  "due_date": "2025-11-15T23:59:59Z",
  "created_at": "2025-10-26T12:00:00Z"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">Send Invoice</h3>
          <p className="text-muted-foreground mb-4">Send an invoice to your customer via email with a payment link!</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>POST /api/v1/invoices/:id/send</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X POST https://api.zendfi.tech/api/v1/invoices/invoice_abc123def456/send \\
  -H "Authorization: Bearer zfi_live_abc123..."`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "success": true,
  "invoice_id": "invoice_abc123def456",
  "invoice_number": "INV-2025-00042",
  "sent_to": "client@example.com",
  "payment_url": "https://zendfi.tech/checkout/link_xyz789",
  "status": "sent"
}`}</code>
          </pre>
          <p className="text-muted-foreground mb-6"><strong>What Happens:</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Invoice status changed to &quot;sent&quot;</li>
              <li>Professional email sent to customer</li>
              <li>Payment link generated and included</li>
              <li>Customer can click link to pay immediately!</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold mb-4">Get Invoice</h3>
          <p className="text-muted-foreground mb-4">Get details of a specific invoice.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/invoices/:id</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET https://api.zendfi.tech/api/v1/invoices/invoice_abc123def456 \\
  -H "Authorization: Bearer zfi_live_abc123..."`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`{
  "id": "invoice_abc123def456",
  "invoice_number": "INV-2025-00042",
  "customer_email": "client@example.com",
  "customer_name": "Acme Corp",
  "amount_usd": 3500.00,
  "token": "USDC",
  "description": "Web Development Services - Q4 2025",
  "status": "sent",
  "payment_url": "https://zendfi.tech/checkout/link_xyz789",
  "due_date": "2025-11-15T23:59:59Z",
  "created_at": "2025-10-26T12:00:00Z"
}`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-4">List Invoices</h3>
          <p className="text-muted-foreground mb-4">Get all invoices for your merchant account.</p>
          <h4 className="font-semibold mb-2">Endpoint</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>GET /api/v1/invoices</code>
          </pre>
          <h4 className="font-semibold mb-2">Authentication</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>
          <h4 className="font-medium mb-2">Example Request</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`curl -X GET https://api.zendfi.tech/api/v1/invoices \\
  -H "Authorization: Bearer zfi_live_abc123..."`}</code>
          </pre>
          <h4 className="font-medium mb-2">Response: 200 OK</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
<code>{`[
  {
    "id": "invoice_abc123def456",
    "invoice_number": "INV-2025-00042",
    "customer_email": "client@example.com",
    "customer_name": "Acme Corp",
    "amount_usd": 3500.00,
    "token": "USDC",
    "description": "Web Development Services - Q4 2025",
    "status": "sent",
    "payment_url": "https://zendfi.tech/checkout/link_xyz789",
    "due_date": "2025-11-15T23:59:59Z",
    "created_at": "2025-10-26T12:00:00Z"
  },
  {
    "id": "invoice_def456ghi789",
    "invoice_number": "INV-2025-00041",
    "customer_email": "another@example.com",
    "customer_name": "Tech Startup Inc",
    "amount_usd": 1200.00,
    "token": "USDC",
    "description": "Consulting Services - October 2025",
    "status": "paid",
    "payment_url": null,
    "due_date": "2025-10-31T23:59:59Z",
    "created_at": "2025-10-20T10:00:00Z"
  }
]`}</code>
          </pre>
          <p className="text-sm text-muted-foreground mb-6"><strong>Note:</strong> List is ordered by creation date (newest first), limited to 100 results.</p>
          <h3 className="text-xl font-semibold mb-4">Invoice Statuses</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-muted p-2 text-left">Status</th>
                  <th className="border border-muted p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-2"><code>draft</code></td>
                  <td className="border border-muted p-2">Invoice created but not sent yet</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>sent</code></td>
                  <td className="border border-muted p-2">Invoice emailed to customer with payment link</td>
                </tr>
                <tr>
                  <td className="border border-muted p-2"><code>paid</code></td>
                  <td className="border border-muted p-2">Invoice paid successfully! 🎉</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Summary */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold">Summary & Next Steps (You&apos;re All Set! 🎉)</h2>
        </div>
        <p className="text-muted-foreground mb-4">Congratulations! You now have access to ZendFi&apos;s complete suite of advanced features!</p>
        <p className="font-semibold mb-4"><strong>ALL Features Are LIVE and Ready to Use:</strong></p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-6">
          <li><strong>Payment Splits</strong>: Automatically distribute payments among multiple recipients</li>
          <li><strong>Subscriptions</strong>: Recurring billing with flexible intervals and trial periods</li>
          <li><strong>Installment Plans</strong>: Let customers pay over time with flexible schedules</li>
          <li><strong>Escrow Payments</strong>: Secure fund holding with multiple release conditions</li>
          <li><strong>Invoices</strong>: Professional invoicing with email delivery</li>
        </ul>
        <p className="font-semibold mb-4"><strong>You Can Now:</strong></p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-6">
          <li>Accept recurring payments (SaaS, memberships, subscriptions)</li>
          <li>Offer payment plans (big-ticket items, courses)</li>
          <li>Protect high-value transactions (freelance, real estate)</li>
          <li>Send professional invoices with one-click payment</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Next Steps:</h3>
        <ol className="list-decimal pl-5 space-y-1 text-muted-foreground mb-6">
          <li>Review <Link href="./07-reference.md" className="text-accent/60 hover:underline">API Reference</Link> for complete endpoint documentation</li>
          <li>Check out <Link href="./03-payment-links.md" className="text-accent/60 hover:underline">Payment Links</Link> for reusable payment URLs</li>
          <li>Set up <Link href="./04-webhooks.md" className="text-accent/60 hover:underline">Webhooks</Link> to track payment events</li>
          <li>Manage funds with <Link href="./05-wallet-management.md" className="text-accent/60 hover:underline">Wallet Management</Link></li>
        </ol>
        <h3 className="text-lg font-semibold mb-2">Need Help? We&apos;re Here for You!</h3>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Email: support@zendfi.tech - Real humans, real fast!</li>
          <li>Discord: discord.gg/zendfi - Join the community!</li>
          <li>Docs: https://docs.zendfi.tech - Full documentation</li>
          <li>Feature Requests: features@zendfi.tech - We listen!</li>
        </ul>
        <p className="text-lg font-bold text-center mt-6 text-primary">Ready to Build Something Amazing?</p>
        <p className="text-muted-foreground text-center">You have everything you need to create world-class payment experiences! Start with one feature or combine them all - the possibilities are endless!</p>
        <p className="text-center font-semibold mt-2">Happy building! You&apos;re going to do great things!</p>
      </Card>

      {/* Quick Links */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <ArrowRight className="h-5 w-5" />
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="./07-reference.md" className="block p-3 bg-muted/50 rounded-md hover:bg-muted text-center">Full API Reference</Link>
          <Link href="./03-payment-links.md" className="block p-3 bg-muted/50 rounded-md hover:bg-muted text-center">Payment Links Guide</Link>
          <Link href="./04-webhooks.md" className="block p-3 bg-muted/50 rounded-md hover:bg-muted text-center">Webhooks Setup</Link>
          <Link href="./05-wallet-management.md" className="block p-3 bg-muted/50 rounded-md hover:bg-muted text-center">Wallet Management</Link>
        </div>
      </Card>
    </div>
  )
}