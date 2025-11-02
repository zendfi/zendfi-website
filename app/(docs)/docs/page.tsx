import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Shield, Clock, Gift, Wallet, Key, AlertCircle } from "lucide-react"

export default function GettingStarted() {
  return (
    <div className="space-y-6 md:space-y-8 max-w-5xl">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
          Getting Started with ZendFi - Accept Crypto in Minutes!
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Welcome to ZendFi! You're about to join the future of payments. This guide will get you accepting crypto payments in minutes - no blockchain experience needed. Let's make this super easy and fun!
        </p>
      </div>

      {/* What You'll Need */}
      <div className="p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          What You'll Need
        </h2>
        <p className="text-muted-foreground mb-4">Before we start, make sure you have:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>A valid business email address</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Your business/organization name</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>A webhook endpoint URL (optional but recommended for real-time notifications)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Either:</span>
          </li>
          <ul className="ml-6 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">◦</span>
              <span>A Solana wallet address (if you already have one), OR</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">◦</span>
              <span>A modern browser with Face ID/Touch ID for passkey setup (takes 5 seconds!)</span>
            </li>
          </ul>
        </ul>
        <p className="text-muted-foreground mt-4 font-medium">That's it! No complicated crypto setup required. Let's go!</p>
      </div>

      {/* Step 1: Create Your Merchant Account */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Step 1: Create Your Merchant Account</h2>
        <p className="text-muted-foreground">
          This is where the magic begins! Creating your merchant account takes just one API call. Choose the wallet type that works best for you - we'll walk you through all the options!
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Endpoint</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>POST /api/v1/merchants</code>
          </pre>

          <h3 className="text-lg font-semibold mt-6 mb-2">Request</h3>
          <p className="text-muted-foreground mb-3">No authentication required for this endpoint - everyone's welcome!</p>

          <h4 className="font-semibold mb-2">Headers</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>Content-Type: application/json</code>
          </pre>

          <h4 className="font-semibold mb-3">Body Parameters</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Parameter</th>
                  <th className="text-left p-2 font-semibold">Type</th>
                  <th className="text-left p-2 font-semibold">Required</th>
                  <th className="text-left p-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-2"><code>name</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2"><strong>Yes</strong></td>
                  <td className="p-2">Your business or organization name (2-100 characters)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>email</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2"><strong>Yes</strong></td>
                  <td className="p-2">Your business email address</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>business_address</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2"><strong>Yes</strong></td>
                  <td className="p-2">Your business address (max 500 characters)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>webhook_url</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">No</td>
                  <td className="p-2">HTTPS URL to receive payment notifications</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>wallet_address</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">No</td>
                  <td className="p-2">Your existing Solana wallet address</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>wallet_generation_method</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">No</td>
                  <td className="p-2"><code>"mpc_passkey"</code> (default), <code>"mnemonic"</code>, <code>"simple"</code>, or omit if providing wallet_address</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2"><code>settlement_preference</code></td>
                  <td className="p-2">string</td>
                  <td className="p-2">No</td>
                  <td className="p-2"><code>"auto_usdc"</code> (default) or <code>"direct_token"</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Wallet Generation Methods */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Wallet Generation Methods Explained</h2>
        <p className="text-muted-foreground">Choose the wallet type that fits your needs! Each has its own superpowers.</p>

        {/* Option 1: MPC Passkey */}
        <Card className="p-6 border-primary/50">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold">Option 1: MPC Passkey Wallet (Recommended - Non-Custodial)</h3>
              <p className="text-sm text-muted-foreground"><strong>Best for:</strong> Merchants who want maximum security without managing seed phrases</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Why we love it:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Non-custodial</strong>: You own the keys, always</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Secured by Face ID/Touch ID</strong>: No passwords to remember!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>No seed phrases</strong>: No more writing down 12 words on paper</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>MPC security</strong>: Multi-party computation keeps you ultra-safe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Can export anytime</strong>: Full control when you need it</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>5-second setup</strong>: Just one quick biometric scan</span>
              </li>
            </ul>
          </div>

          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "name": "My Online Store",
  "email": "payments@mystore.com",
  "business_address": "123 Main Street, San Francisco, CA 94102",
  "webhook_url": "https://mystore.com/webhooks/zendfi",
  "wallet_generation_method": "mpc_passkey"
}`}</code>
          </pre>

          <div className="mb-4">
            <p className="font-semibold mb-2">What you get:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Non-custodial wallet (you own the keys)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Secured by Face ID/Touch ID/Windows Hello</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>No seed phrases to manage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Multi-party computation (MPC) security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Can export private key anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Requires completing passkey setup (5 seconds)</span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-muted-foreground"><strong>Next step:</strong> You'll receive a <code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">passkey_setup_url</code> - just open it in your browser, scan your face/finger, and you're done! Easy!</p>
        </Card>

        {/* Option 2: BIP39 Mnemonic */}
        <Card className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <Key className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold">Option 2: BIP39 Mnemonic Wallet (Traditional & Reliable - Custodial)</h3>
              <p className="text-sm text-muted-foreground"><strong>Best for:</strong> Merchants who prefer traditional crypto wallets with recovery phrases</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Why it's great:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>BIP39-compatible</strong>: Works with all standard crypto tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Recoverable</strong>: Use your mnemonic phrase if needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Instant activation</strong>: Ready to use immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Enterprise custody</strong>: ZendFi secures your master mnemonic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Support available</strong>: Contact us anytime for mnemonic backup</span>
              </li>
            </ul>
          </div>

          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "name": "My Online Store", 
  "email": "payments@mystore.com",
  "business_address": "123 Main Street, San Francisco, CA 94102",
  "webhook_url": "https://mystore.com/webhooks/zendfi",
  "wallet_generation_method": "mnemonic"
}`}</code>
          </pre>

          <div>
            <p className="font-semibold mb-2">What you get:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>BIP39-compatible wallet (standard HD derivation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Can recover with master mnemonic phrase</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Immediate activation (no setup required)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>ZendFi holds the master mnemonic (custodial)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Contact support for mnemonic backup</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Option 3: Simple Deterministic */}
        <Card className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold">Option 3: Simple Deterministic Wallet (Fastest Setup Ever! - Custodial)</h3>
              <p className="text-sm text-muted-foreground"><strong>Best for:</strong> Merchants who want the fastest setup and trust ZendFi with custody</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Why it rocks:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Lightning fast</strong>: One API call and you're done!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Instant activation</strong>: Start accepting payments immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Enterprise security</strong>: Bank-grade key management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Fully managed</strong>: ZendFi handles all the crypto complexity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Zero hassle</strong>: Just focus on your business!</span>
              </li>
            </ul>
          </div>

          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "name": "My Online Store",
  "email": "payments@mystore.com",
  "business_address": "123 Main Street, San Francisco, CA 94102",
  "webhook_url": "https://mystore.com/webhooks/zendfi",
  "wallet_generation_method": "simple"
}`}</code>
          </pre>

          <div>
            <p className="font-semibold mb-2">What you get:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Fastest setup (1 API call, done!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Immediate activation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Secure enterprise key management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>ZendFi holds the keys (custodial)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cannot export private key</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Option 4: Bring Your Own */}
        <Card className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <Wallet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold">Option 4: Bring Your Own Wallet (Already Have a Wallet? Perfect!)</h3>
              <p className="text-sm text-muted-foreground"><strong>Best for:</strong> Merchants who already have a Solana wallet they want to use</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Why it's awesome:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Full control</strong>: Your wallet, your rules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Works with everything</strong>: Phantom, Solflare, Ledger, you name it!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Non-custodial</strong>: Always in your control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>You manage keys</strong>: Use your existing wallet setup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Keep it safe</strong>: Remember, lost keys = lost funds (but you already know that!)</span>
              </li>
            </ul>
          </div>

          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "name": "My Online Store",
  "email": "payments@mystore.com",
  "business_address": "123 Main Street, San Francisco, CA 94102",
  "webhook_url": "https://mystore.com/webhooks/zendfi",
  "wallet_address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
}`}</code>
          </pre>

          <div>
            <p className="font-semibold mb-2">What you get:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Full control of your wallet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Use with Phantom, Solflare, Ledger, etc.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Non-custodial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>You must manage your own keys</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Lost keys = lost funds, please we always advice to be very careful</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Webhook URL Configuration */}
      <Card className="p-6 border-primary/50">
        <h2 className="text-xl font-bold mb-4">Webhook URL Configuration (Highly Recommended!)</h2>
        <p className="text-muted-foreground mb-4">
          Your webhook URL receives real-time notifications for payment events - it's like having a direct hotline to ZendFi! Set this up and you'll always know what's happening with your payments.
        </p>

        <div className="mb-4">
          <p className="font-semibold mb-2">Your webhook endpoint must:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Use HTTPS (security first!)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Respond within 30 seconds</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Return <code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">200 OK</code> status code</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Be publicly accessible (we need to reach you!)</span>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-2">What you'll get notified about:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">payment.confirmed</code> - Cha-ching! Money received</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">payment.failed</code> - Oops, something went wrong</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">settlement.completed</code> - Funds are in your wallet</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">settlement.failed</code> - Rare, but we'll let you know</span>
            </li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground">
          Want to become a webhook pro? Check out our Webhooks Deep Dive!
        </p>
      </Card>

      {/* API Responses */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Response - MPC Passkey Wallet</h2>
        <Card className="p-6">
          <p className="font-semibold mb-2">Status: <code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">200 OK</code></p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "merchant": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "My Online Store",
    "wallet_address": "",
    "wallet_type": "mpc",
    "settlement_preference": "auto_usdc",
    "wallet_generation_method": "mpc_passkey"
  },
  "api_key": "zendfi_live_abc123def456...",
  "message": "Merchant created with non-custodial MPC wallet! Complete passkey setup to activate auto-settlements.",
  "security_note": "Non-custodial MPC wallet secured by your device biometrics (Face ID/Touch ID). We never hold your keys!",
  "next_steps": {
    "passkey_setup_url": "https://api.zendfi.tech/merchants/550e8400-e29b-41d4-a716-446655440000/setup-passkey",
    "setup_required": true,
    "estimated_time": "5 seconds with Face ID/Touch ID",
    "api_endpoints": {
      "register_start": "/api/v1/webauthn/register/start",
      "register_finish": "/api/v1/webauthn/register/finish"
    }
  },
  "warning": "Store this API key securely. It will not be shown again."
}`}</code>
          </pre>
        </Card>

        <h2 className="text-xl md:text-2xl font-bold mt-6">Response - Mnemonic/Simple/Provided Wallet</h2>
        <Card className="p-6">
          <p className="font-semibold mb-2">Status: <code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">200 OK</code></p>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "merchant": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "My Online Store",
    "wallet_address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    "wallet_type": "custodial",
    "settlement_preference": "auto_usdc",
    "wallet_generation_method": "mnemonic"
  },
  "api_key": "zendfi_live_abc123def456...",
  "message": "Merchant created with BIP39 mnemonic-derived wallet! Store your master mnemonic securely.",
  "security_note": "Your wallet can be recovered using the master mnemonic phrase. Keep it secure!",
  "next_steps": {
    "setup_required": false
  },
  "warning": "Store this API key securely. It will not be shown again."
}`}</code>
          </pre>
        </Card>

        <h2 className="text-xl md:text-2xl font-bold mt-6">Error Responses</h2>
        <div className="space-y-4">
          <Card className="p-4">
            <h4 className="font-semibold mb-2">400 Bad Request - Invalid Wallet Address</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": "validation_error",
  "message": "Invalid Solana wallet address format"
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">400 Bad Request - Invalid Webhook URL</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": "invalid_webhook_url",
  "message": "Webhook URL must use HTTPS"
}`}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-2">500 Internal Server Error</h4>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`{
  "error": "internal_server_error",
  "message": "Failed to create merchant account"
}`}</code>
            </pre>
          </Card>
        </div>
      </div>

      {/* Step 2: Complete Passkey Setup */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Step 2: Complete Passkey Setup (MPC Wallet Only)</h2>
        <p className="text-muted-foreground">
          If you chose <code className=" bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">wallet_generation_method: "mpc_passkey"</code>, you'll need to complete this super quick step before you can receive payments. Don't worry, it takes literally 5 seconds! ⚡
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Option A: Browser Setup (Easiest Way!)</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Open the <code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">passkey_setup_url</code> from your merchant creation response</li>
            <li>Click "Setup Passkey"</li>
            <li>Authenticate with Face ID/Touch ID/Windows Hello</li>
            <li>Done! Your wallet is now active and ready to rock!</li>
          </ol>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Option B: API Setup (For the Tech-Savvy!)</h3>
          <p className="text-muted-foreground">
            Prefer to do it programmatically? We've got you covered! Check out our Passkey Setup Guide for the API approach.
          </p>
        </Card>
      </div>

      {/* Step 3: Store Your API Key */}
      <Card className="p-6 border-destructive/50">
        <div className="flex items-start gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold">Step 3: Store Your API Key Securely (This Is Important! 🔐)</h2>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          <strong>SUPER IMPORTANT:</strong> Your API key is shown only once during merchant creation. Store it securely immediately - we can't show it again!
        </p>
        <p className="text-muted-foreground mb-6">
          Think of your API key like your house keys - keep them safe!
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Environment Variables (Recommended Best Practice!)</h3>
            <p className="text-sm text-muted-foreground mb-3">Store your API key in environment variables - never hardcode it! 🚫</p>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`# .env file
ZENDFI_API_KEY=zendfi_live_abc123def456...`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Configuration Management (Enterprise Level!)</h3>
            <p className="text-sm text-muted-foreground mb-3">For production apps, use a secrets manager. Your security team will love you! ❤️</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>AWS Secrets Manager</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>HashiCorp Vault</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Azure Key Vault</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Google Secret Manager</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Never Commit API Keys (Golden Rule!)</h3>
            <p className="text-sm text-muted-foreground mb-3">Add to <code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">.gitignore</code>:</p>
            <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
              <code>{`.env
.env.local
config/secrets.*`}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Your future self will thank you!</p>
          </div>
        </div>
      </Card>

      {/* Step 4: Test Your Integration */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Step 4: Test Your Integration (Let's See It Work! 🎉)</h2>
        <p className="text-muted-foreground">Time to create your first payment! This is the fun part.</p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Create a Test Payment</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`curl -X POST https://api.zendfi.tech/api/v1/payments \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "amount": 1.00,
    "currency": "USD",
    "description": "Test Payment",
    "token": "USDC"
  }'`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Response</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "id": "payment_abc123",
  "amount": 1.00,
  "currency": "USD",
  "status": "Pending",
  "qr_code": "solana:6qWDyySDsrWbUqXCzwaxVYc47xTaZVUEdeC9apdo6Ewa?amount=...",
  "payment_url": "https://api.zendfi.tech/pay/payment_abc123",
  "expires_at": "2025-10-26T12:30:00Z"
}`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Test the Payment Flow</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Open the <code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">payment_url</code> in your browser</li>
            <li>Connect a Solana wallet (Phantom, Solflare, etc.)</li>
            <li>Approve the transaction</li>
            <li>Check payment status (see below)</li>
          </ol>
        </Card>
      </div>

      {/* Step 5: Monitor Payment Status */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Step 5: Monitor Payment Status (Keep Track of Your Money!)</h2>
        <p className="text-muted-foreground">Want to check how your payment is doing? Easy!</p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-2">Endpoint</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>GET /api/v1/payments/:id/status</code>
          </pre>

          <h3 className="text-lg font-bold mb-2">Request</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`curl -X GET https://api.zendfi.tech/api/v1/payments/payment_abc123/status \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</code>
          </pre>

          <h3 className="text-lg font-bold mb-2">Response</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <code>{`{
  "id": "payment_abc123",
  "status": "Confirmed",
  "amount": 1.00,
  "transaction_signature": "5j7s6JP28XvC1...",
  "confirmed_at": "2025-10-26T12:15:30Z",
  "settlement_status": "pending"
}`}</code>
          </pre>

          <div>
            <h4 className="font-semibold mb-2">Payment Statuses Explained:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">Pending</code> - Waiting for customer payment (they have 15 minutes!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">Confirmed</code> - Payment received and verified on blockchain (woohoo!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">Failed</code> - Transaction failed (no worries, just create a new one)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><code className="bg-slate-100 border rounded-sm font-mono text-gray-600 px-[5px] py-[2px] text-xs">Expired</code> - Payment window expired (15 minutes passed)</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Step 6: Receive Webhook Notifications */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Step 6: Receive Webhook Notifications (Real-Time Magic! ⚡)</h2>
        <p className="text-muted-foreground">
          When a payment is confirmed, ZendFi instantly sends a webhook to your configured URL. It's like getting a text message every time you make money!
        </p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Webhook Payload</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`{
  "event": "payment.confirmed",
  "payment": {
    "id": "payment_abc123",
    "amount": 1.00,
    "currency": "USD",
    "status": "Confirmed",
    "transaction_signature": "5j7s6JP28XvC1...",
    "customer_wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    "confirmed_at": "2025-10-26T12:15:30Z"
  },
  "timestamp": "2025-10-26T12:15:31Z"
}`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Verify Webhook Signatures (Security First!)</h3>
          <p className="text-muted-foreground">
            Always verify webhook signatures to ensure they're really from ZendFi! See Webhook Security for the complete guide.
          </p>
        </Card>
      </div>

      {/* Settlement Preferences */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Settlement Preferences Explained (Where Does the Money Go? 💵)</h2>
        <p className="text-muted-foreground">Choose how you want to receive your funds!</p>

        <Card className="p-6 border-primary/50">
          <h3 className="text-lg font-bold mb-3">auto_usdc (Default - Recommended for Most Merchants! 🌟)</h3>

          <div className="mb-4">
            <p className="font-semibold mb-2">How it works:</p>
            <ol className="space-y-1 text-muted-foreground list-decimal list-inside">
              <li>Customer pays with SOL or USDC</li>
              <li>If paid in SOL, we automatically swap to USDC (stable value!)</li>
              <li>USDC is settled to your wallet (minus 0.5% fee)</li>
            </ol>
          </div>

          <p className="text-muted-foreground mb-4">
            <strong>Why it's great:</strong> Stable value, predictable, no crypto volatility worries!
          </p>

          <div>
            <p className="font-semibold mb-2">Fees:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>USDC payment: 0.5% (clean and simple!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>SOL payment: 0.5% + Solana gas fees + tiny swap fee (~0.1%)</span>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">direct_token (For Crypto Enthusiasts!)</h3>

          <div className="mb-4">
            <p className="font-semibold mb-2">How it works:</p>
            <ol className="space-y-1 text-muted-foreground list-decimal list-inside">
              <li>Customer pays with specified token (SOL or USDC)</li>
              <li>Same token is settled to your wallet (minus 0.5% fee)</li>
            </ol>
          </div>

          <p className="text-muted-foreground mb-4">
            <strong>Why it's cool:</strong> Hold crypto directly, ride the wave, be a HODLer!
          </p>

          <div>
            <p className="font-semibold mb-2">Fees:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Any token: 0.5% flat (that's it!)</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Quick Start Code Examples */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Quick Start Code Examples (Copy, Paste, Win!)</h2>
        <p className="text-muted-foreground">Let's get you up and running with some production-ready code!</p>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Node.js/Express</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`const express = require('express');
const axios = require('axios');

const app = express();
const ZENDFI_API_KEY = process.env.ZENDFI_API_KEY;

// Create payment
app.post('/api/checkout', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.zendfi.tech/api/v1/payments',
      {
        amount: req.body.amount,
        currency: 'USD',
        description: req.body.description,
        token: 'USDC'
      },
      {
        headers: {
          'Authorization': \`Bearer \${ZENDFI_API_KEY}\`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Webhook handler
app.post('/webhooks/zendfi', express.json(), (req, res) => {
  const { event, payment } = req.body;
  
  if (event === 'payment.confirmed') {
    console.log('Payment confirmed:', payment.id);
    // Fulfill order, grant access, etc.
  }
  
  res.status(200).send('OK');
});

app.listen(3000);`}</code>
          </pre>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Python/Flask</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <code>{`from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)
ZENDFI_API_KEY = os.getenv('ZENDFI_API_KEY')

# Create payment
@app.route('/api/checkout', methods=['POST'])
def create_checkout():
    data = request.json
    
    response = requests.post(
        'https://api.zendfi.tech/api/v1/payments',
        json={
            'amount': data['amount'],
            'currency': 'USD',
            'description': data['description'],
            'token': 'USDC'
        },
        headers={
            'Authorization': f'Bearer {ZENDFI_API_KEY}',
            'Content-Type': 'application/json'
        }
    )
    
    return jsonify(response.json())

# Webhook handler
@app.route('/webhooks/zendfi', methods=['POST'])
def handle_webhook():
    data = request.json
    
    if data['event'] == 'payment.confirmed':
        print(f"Payment confirmed: {data['payment']['id']}")
        # Fulfill order, grant access, etc.
    
    return 'OK', 200

if __name__ == '__main__':
    app.run(port=3000)`}</code>
          </pre>
        </Card>
      </div>

      {/* Next Steps */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Next Steps (Your Journey Continues!)</h2>
        <p className="text-lg font-semibold mb-4">You're now accepting crypto payments! How awesome is that?</p>

        <div className="mb-6">
          <p className="font-semibold mb-3">Continue your ZendFi journey:</p>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Full Payment API Reference - Master all payment options</li>
            <li>Payment Links - Create reusable payment URLs</li>
            <li>Webhooks Deep Dive - Become a webhook wizard</li>
            <li>Wallet Management - Manage your funds like a pro</li>
            <li>Advanced Features - Subscriptions, splits, and more!</li>
          </ol>
        </div>

        <div>
          <p className="font-semibold mb-3">Need help? We're here for you!</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>support@zendfi.tech - We actually read our emails!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Discord Community - Join the conversation!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Video Tutorials - Watch and learn!</span>
            </li>
          </ul>
        </div>
      </Card>

      {/* Welcome Message */}
      <Card className="p-6 text-center bg-gradient-to-r from-primary/10 to-primary/5">
        <h2 className="text-2xl font-bold mb-2">Welcome to ZendFi! Let's revolutionize payments together!</h2>
        <p className="text-muted-foreground">
          You're not just integrating a payment API - you're joining a community building the future of money. We're excited to have you here!
        </p>
      </Card>
    </div>
  )

}