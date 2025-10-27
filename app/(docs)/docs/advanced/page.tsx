import { Card } from "@/components/ui/card"
import { Users, RefreshCw, Calendar, Shield, Mail, ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react"

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
      <Card className="p-6 bg-primary/5">
        <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#payment-splits-available-now" className="hover:text-primary transition-colors">Payment Splits (Available Now!)</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#subscriptions-coming-soon" className="hover:text-primary transition-colors">Subscriptions</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#installment-plans-coming-soon" className="hover:text-primary transition-colors">Installment Plans</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#escrow-payments-coming-soon" className="hover:text-primary transition-colors">Escrow Payments</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="#invoices-coming-soon" className="hover:text-primary transition-colors">Invoices</a>
          </li>
        </ul>
      </Card>

      {/* Payment Splits */}
      <div id="payment-splits-available-now" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Payment Splits (Available Now!)
        </h2>
        <p className="text-muted-foreground">
          <strong>Payment Splits</strong> let you automatically distribute a single payment among multiple recipients - perfect for marketplaces, affiliate programs, revenue sharing, and multi-vendor platforms!
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">How It Works</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Customer makes a single payment</li>
            <li>ZendFi receives the full amount</li>
            <li>After confirmation, funds are automatically split</li>
            <li>Each recipient gets their share sent to their wallet</li>
            <li>All splits tracked with unique transaction signatures</li>
          </ol>
        </Card>

        <Card className="p-6 bg-primary/5">
          <h3 className="text-lg font-bold mb-3">Perfect For:</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>Marketplaces</strong>: Split between seller, platform fee, and payment processor</li>
            <li><strong>Affiliates</strong>: Share revenue with referral partners</li>
            <li><strong>Creators</strong>: Split royalties with collaborators</li>
            <li><strong>Agencies</strong>: Distribute payments among team members</li>
            <li><strong>Platforms</strong>: Revenue sharing (e.g., Spotify-style splits)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-2">Endpoint</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>POST /api/v1/payments</code>
          </pre>

          <h3 className="text-lg font-bold mb-2">Authentication</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </pre>

          <h3 className="text-lg font-bold mb-3">Request Parameters</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Basic Payment Fields</h4>
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
                      <td className="p-2"><code>amount</code></td>
                      <td className="p-2">number</td>
                      <td className="p-2"><strong>Yes</strong></td>
                      <td className="p-2">Total payment amount in USD</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>currency</code></td>
                      <td className="p-2">string</td>
                      <td className="p-2"><strong>Yes</strong></td>
                      <td className="p-2">Currency code (USD only)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>token</code></td>
                      <td className="p-2">string</td>
                      <td className="p-2">No</td>
                      <td className="p-2">Token to receive (USDC, SOL, USDT)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>description</code></td>
                      <td className="p-2">string</td>
                      <td className="p-2">No</td>
                      <td className="p-2">Payment description</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>metadata</code></td>
                      <td className="p-2">object</td>
                      <td className="p-2">No</td>
                      <td className="p-2">Custom data (max 16KB JSON)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Split Fields</h4>
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
                      <td className="p-2"><code>split_recipients</code></td>
                      <td className="p-2">array</td>
                      <td className="p-2">No</td>
                      <td className="p-2">Array of split recipient objects</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>split_recipients[].recipient_wallet</code></td>
                      <td className="p-2">string</td>
                      <td className="p-2"><strong>Yes</strong></td>
                      <td className="p-2">Solana wallet address (base58)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>split_recipients[].recipient_name</code></td>
                      <td className="p-2">string</td>
                      <td className="p-2">No</td>
                      <td className="p-2">Recipient name for reference</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>split_recipients[].percentage</code></td>
                      <td className="p-2">number</td>
                      <td className="p-2"><strong>Yes*</strong></td>
                      <td className="p-2">Percentage of payment (0-100)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>split_recipients[].fixed_amount_usd</code></td>
                      <td className="p-2">number</td>
                      <td className="p-2"><strong>Yes*</strong></td>
                      <td className="p-2">Fixed USD amount</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>split_recipients[].split_order</code></td>
                      <td className="p-2">number</td>
                      <td className="p-2">No</td>
                      <td className="p-2">Order of execution (default: 0)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2"><strong>*Note:</strong> Use <strong>either</strong> <code>percentage</code> OR <code>fixed_amount_usd</code>, not both.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-3 mt-4">Response Fields</h3>
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
                  <td className="p-2">UUID</td>
                  <td className="p-2">Payment ID</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>amount</code></td>
                  <td className="p-2">number</td>
                  <td className="p-2">Payment amount in USD</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>currency</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Currency code</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>status</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Payment status</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>qr_code</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Solana Pay URI</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>payment_url</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">Payment URL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>expires_at</code></td>
                  <td className="p-2">datetime</td>
                  <td className="p-2">Expiration timestamp (15 minutes)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>split_ids</code></td>
                  <td className="p-2">array</td>
                  <td className="p-2">Array of split IDs (if splits configured)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <div className="space-y-6">
          <h3 className="text-lg font-bold">Payment Split Examples</h3>

          {/* Example 1 */}
          <Card className="p-6 border-primary/50">
            <h4 className="text-lg font-bold mb-3">Example 1: Marketplace with Platform Fee (Percentage)</h4>
            <p className="text-muted-foreground mb-4">Perfect for platforms like Etsy, Gumroad, or any marketplace!</p>
            <h5 className="font-semibold mb-2">Request:</h5>
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
            <h5 className="font-semibold mb-2">Response:</h5>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "amount": 100.00,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:ABC123...?amount=100&spl-token=USDC",
  "payment_url": "https://zendfi.tech/pay/550e8400-e29b-41d4-a716-446655440000",
  "expires_at": "2025-10-27T10:45:00Z",
  "split_ids": [
    "660e8400-e29b-41d4-a716-446655440001",
    "770e8400-e29b-41d4-a716-446655440002",
    "880e8400-e29b-41d4-a716-446655440003"
  ]
}`}</code>
            </pre>
            <p className="text-sm text-muted-foreground">
              <strong>What Happens:</strong>
            </p>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
              <li>Customer pays $100 USDC</li>
              <li>After confirmation:
                <ul className="list-disc list-inside ml-4">
                  <li>Seller gets $85 (85%)</li>
                  <li>Platform gets $10 (10%)</li>
                  <li>Payment processor gets $5 (5%)</li>
                </ul>
              </li>
              <li>All splits executed automatically</li>
              <li>Each recipient gets a separate transaction</li>
            </ol>
          </Card>

          {/* Example 2 */}
          <Card className="p-6">
            <h4 className="text-lg font-bold mb-3">Example 2: Affiliate Program (Fixed + Percentage)</h4>
            <p className="text-muted-foreground mb-4">Great for referral programs and affiliate marketing!</p>
            <h5 className="font-semibold mb-2">Request:</h5>
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
            <h5 className="font-semibold mb-2">Response:</h5>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "id": "990e8400-e29b-41d4-a716-446655440004",
  "amount": 299.99,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:DEF456...?amount=299.99&spl-token=USDC",
  "payment_url": "https://zendfi.tech/pay/990e8400-e29b-41d4-a716-446655440004",
  "expires_at": "2025-10-27T11:00:00Z",
  "split_ids": [
    "aa0e8400-e29b-41d4-a716-446655440005",
    "bb0e8400-e29b-41d4-a716-446655440006",
    "cc0e8400-e29b-41d4-a716-446655440007"
  ]
}`}</code>
            </pre>
            <p className="text-sm text-muted-foreground">
              <strong>What Happens:</strong>
            </p>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
              <li>Customer pays $299.99 USDC</li>
              <li>After confirmation:
                <ul className="list-disc list-inside ml-4">
                  <li>Course Creator gets $209.99 (70%)</li>
                  <li>Affiliate gets $50.00 (fixed amount)</li>
                  <li>Platform gets $40.00 (13.33%)</li>
                </ul>
              </li>
              <li>All splits executed in order</li>
              <li>Fixed amounts processed first, then percentages</li>
            </ol>
          </Card>
        </div>
      </div>

      {/* Subscriptions Section */}
      <div id="subscriptions-coming-soon" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-primary" />
          Subscriptions
        </h2>
        <p className="text-muted-foreground">
          Recurring payments made simple! Perfect for SaaS products, memberships, and subscription-based services.
        </p>

        <Card className="p-6 bg-primary/5">
          <h3 className="text-lg font-bold mb-3">Coming Features</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>Flexible Billing Cycles</strong>: Daily, weekly, monthly, yearly, or custom intervals</li>
            <li><strong>Trial Periods</strong>: Free trials with automatic conversion to paid</li>
            <li><strong>Prorated Billing</strong>: Automatic proration for plan upgrades/downgrades</li>
            <li><strong>Usage-Based</strong>: Metered billing for pay-as-you-go models</li>
            <li><strong>Smart Retry Logic</strong>: Automatic payment retry with exponential backoff</li>
            <li><strong>Dunning Management</strong>: Automated notifications for failed payments</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Use Cases</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>SaaS Platforms</strong>: Monthly/annual software subscriptions</li>
            <li><strong>Content Creators</strong>: Patreon-style membership tiers</li>
            <li><strong>Streaming Services</strong>: Video/music streaming subscriptions</li>
            <li><strong>Online Communities</strong>: Paid Discord/forum access</li>
            <li><strong>Education</strong>: Course access and learning platforms</li>
          </ul>
        </Card>
      </div>

      {/* Installment Plans Section */}
      <div id="installment-plans-coming-soon" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          Installment Plans
        </h2>
        <p className="text-muted-foreground">
          Buy now, pay later functionality. Split large purchases into manageable payments over time.
        </p>

        <Card className="p-6 bg-primary/5">
          <h3 className="text-lg font-bold mb-3">Coming Features</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>Flexible Schedules</strong>: 2, 3, 4, 6, or 12 monthly installments</li>
            <li><strong>Custom Down Payments</strong>: Require initial payment percentage</li>
            <li><strong>Auto-Debit</strong>: Automatic payment collection on schedule</li>
            <li><strong>Payment Reminders</strong>: Notifications before each installment</li>
            <li><strong>Early Payoff</strong>: Allow customers to pay off early</li>
            <li><strong>Late Fee Options</strong>: Optional penalties for missed payments</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Use Cases</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>E-commerce</strong>: High-ticket product purchases</li>
            <li><strong>Education</strong>: Course payments over time</li>
            <li><strong>Services</strong>: Consulting or agency retainers</li>
            <li><strong>Event Tickets</strong>: Conference or festival passes</li>
            <li><strong>Electronics</strong>: Computer and device financing</li>
          </ul>
        </Card>
      </div>

      {/* Escrow Payments Section */}
      <div id="escrow-payments-coming-soon" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Escrow Payments
        </h2>
        <p className="text-muted-foreground">
          Hold funds securely until conditions are met. Perfect for freelance work, real estate, and high-value transactions requiring buyer/seller protection.
        </p>

        <Card className="p-6 bg-primary/5">
          <h3 className="text-lg font-bold mb-3">Coming Features</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>Milestone-Based Release</strong>: Release funds as work is completed</li>
            <li><strong>Time-Locked Escrow</strong>: Automatic release after specified time</li>
            <li><strong>Dispute Resolution</strong>: Built-in mediation for disagreements</li>
            <li><strong>Partial Releases</strong>: Release funds in increments</li>
            <li><strong>Multi-Signature</strong>: Require multiple parties to approve release</li>
            <li><strong>Refund Protection</strong>: Automatic refunds if conditions not met</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">How Escrow Works</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li><strong>Buyer Deposits</strong>: Buyer sends payment to escrow</li>
            <li><strong>Funds Held</strong>: ZendFi securely holds funds on-chain</li>
            <li><strong>Seller Delivers</strong>: Seller completes work or ships product</li>
            <li><strong>Buyer Confirms</strong>: Buyer verifies and approves release</li>
            <li><strong>Funds Released</strong>: Seller receives payment automatically</li>
          </ol>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Use Cases</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>Freelance Platforms</strong>: Protect both client and freelancer</li>
            <li><strong>Marketplaces</strong>: Secure high-value transactions</li>
            <li><strong>Real Estate</strong>: Property deposits and transactions</li>
            <li><strong>B2B Services</strong>: Milestone-based project payments</li>
            <li><strong>Digital Goods</strong>: License transfers and software sales</li>
            <li><strong>P2P Trading</strong>: Peer-to-peer commerce protection</li>
          </ul>
        </Card>
      </div>

      {/* Invoices Section */}
      <div id="invoices-coming-soon" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <Mail className="w-6 h-6 text-primary" />
          Invoices
        </h2>
        <p className="text-muted-foreground">
          Professional crypto invoicing for B2B payments. Send beautiful invoices, track payments, and manage your receivables all in one place.
        </p>

        <Card className="p-6 bg-primary/5">
          <h3 className="text-lg font-bold mb-3">Coming Features</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>Customizable Templates</strong>: Brand your invoices with logo and colors</li>
            <li><strong>Line Items</strong>: Detailed breakdown of products/services</li>
            <li><strong>Tax & Discounts</strong>: Automatic calculations for taxes and promo codes</li>
            <li><strong>Payment Terms</strong>: Net-30, Net-60, or custom due dates</li>
            <li><strong>Auto Reminders</strong>: Scheduled payment reminder emails</li>
            <li><strong>Partial Payments</strong>: Accept deposits and installments</li>
            <li><strong>Multi-Currency</strong>: Invoice in USD, EUR, or any fiat currency</li>
            <li><strong>PDF Export</strong>: Download and email invoices as PDFs</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Use Cases</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>Agencies</strong>: Bill clients for services rendered</li>
            <li><strong>Consultants</strong>: Professional invoicing for billable hours</li>
            <li><strong>B2B Sales</strong>: Enterprise software and service billing</li>
            <li><strong>Contractors</strong>: Construction and project invoicing</li>
            <li><strong>Wholesalers</strong>: Bulk orders and trade accounts</li>
            <li><strong>Service Providers</strong>: Recurring billing for ongoing services</li>
          </ul>
        </Card>
      </div>

      {/* Need Help Section */}
      <Card className="p-6 bg-primary/5">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          Ready to Get Started?
        </h3>
        <p className="text-muted-foreground mb-4">
          Payment Splits are available now! The other features are coming soon. Want early access or have questions? Get in touch!
        </p>
        <div className="flex flex-wrap gap-3">
          <a 
            href="mailto:support@zendfi.tech" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            <Mail className="w-4 h-4" />
            Email Support
          </a>
          <a 
            href="https://discord.gg/zendfi" 
            className="inline-flex items-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-medium"
          >
            Join Discord
          </a>
          <a 
            href="https://github.com/zendfi" 
            className="inline-flex items-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-medium"
          >
            GitHub Issues
          </a>
        </div>
      </Card>

      {/* Quick Links */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="https://api.zendfi.tech/dashboard" className="hover:text-primary transition-colors">Get Your API Key</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="/01-getting-started" className="hover:text-primary transition-colors">Getting Started Guide</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="/02-payments" className="hover:text-primary transition-colors">Payments API</a>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            <a href="/04-webhooks" className="hover:text-primary transition-colors">Webhooks Documentation</a>
          </li>
        </ul>
      </Card>
    </div>
  )
}