"use client"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Shield, Clock, Rocket, Heart, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function GettingStarted() {
  const [selectedWallet, setSelectedWallet] = useState("mpc_passkey")

  const walletOptions = [
    {
      id: "mpc_passkey",
      name: "Passkey Wallet",
      icon: Shield,
      badge: "Most Secure",
      tagline: "Face ID security, no passwords",
      description: "Your customers use Face ID or fingerprint to approve transactions. No seed phrases, no crypto knowledge needed.",
      perfect: "Teams who want maximum security with zero crypto complexity",
      setupTime: "5 seconds",
      custody: "Non-custodial",
      color: "primary"
    },
    {
      id: "simple",
      name: "Managed Wallet",
      icon: Zap,
      badge: "Fastest",
      tagline: "One click, you're done",
      description: "We handle everything for you. Just create your account and start accepting payments immediately.",
      perfect: "Businesses who want to get started in seconds",
      setupTime: "Instant",
      custody: "Custodial",
      color: "blue-500"
    },
    {
      id: "mnemonic",
      name: "Recovery Phrase",
      icon: Clock,
      badge: "Traditional",
      tagline: "Standard crypto wallet",
      description: "Get a traditional 12-word recovery phrase. Compatible with all major crypto wallets.",
      perfect: "Users familiar with crypto wallets",
      setupTime: "Instant",
      custody: "Custodial",
      color: "purple-500"
    },
    {
      id: "own",
      name: "Your Own Wallet",
      icon: CheckCircle2,
      badge: "Full Control",
      tagline: "Use your existing wallet",
      description: "Already have a Solana wallet? Perfect! Just connect it and you're ready to go.",
      perfect: "Crypto-native teams with existing wallets",
      setupTime: "Instant",
      custody: "Non-custodial",
      color: "green-500"
    }
  ]

  const selectedOption = walletOptions.find(w => w.id === selectedWallet)

  return (
    <div className="space-y-12 max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <div className="text- space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Getting Started</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Learn how to create your first payment and integrate with the ZendFi API.
        </p>
        <p className="text-base text-muted-foreground max-w-2xl">
          This guide will walk you through creating your first payment order and integrating with the ZendFi API.
        </p>
      </div>

      {/* What You'll Need */}
      <div className="">
        <div className=" space-y-6">
          <div className="inline-flex items-center gap-3 text-lg text-muted-foreground">
            <span>Ready to launch? Here's what you'll need:</span>
          </div>
          <ul className="max-w-lg space-y-3 text-left">
            <li className="flex items-center gap-3 p-3 bg-white/60 dark:bg-slate-800/60 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-accent/10 dark:bg-accent/90 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <span className="text-sm font-medium">A valid business email address</span>
            </li>
            <li className="flex items-center gap-3 p-3 bg-white/60 dark:bg-slate-800/60 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-accent/10 dark:bg-accent/90 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <span className="text-sm font-medium">Your business/organization name</span>
            </li>
            <li className="flex items-center gap-3 p-3 bg-white/60 dark:bg-slate-800/60 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-accent/10 dark:bg-accent/90 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <span className="text-sm font-medium">Webhook URL (optional—for instant notifications)</span>
            </li>
            <li className="flex items-center gap-3 p-3 bg-white/60 dark:bg-slate-800/60 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-accent/10 dark:bg-accent/90 rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <span className="text-sm font-medium">A Solana wallet (or use our 5-second Face ID setup!)</span>
            </li>
          </ul>
          <p className="text-base text-muted-foreground">
            That's literally it! No complex setups or crypto expertise needed. Let's make payments magical. ✨
          </p>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center  transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">1. Choose Your Wallet</h3>
          <p className="text-sm text-muted-foreground">Pick the wallet type that fits your needs</p>
        </Card>

        <Card className="p-6 text-center  transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">2. Get Your API Key</h3>
          <p className="text-sm text-muted-foreground">One API call creates your merchant account</p>
        </Card>

        <Card className="p-6 text-center  transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Rocket className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">3. Accept Payments</h3>
          <p className="text-sm text-muted-foreground">Start receiving crypto payments instantly</p>
        </Card>
      </div>

      {/* Step 1: Choose Your Wallet */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Choose Your Wallet Type</h2>
          <p className="text-lg text-muted-foreground">
            Each wallet type has different benefits. Don't worry, you can't pick wrong!
          </p>
        </div>

        {/* Wallet Selection Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {walletOptions.map((option) => {
            const Icon = option.icon
            const isSelected = selectedWallet === option.id
            return (
              <Card
                key={option.id}
                className={`p-6 cursor-pointer transition-all  ${isSelected ? 'border-accent border-2' : ''
                  }`}
                onClick={() => setSelectedWallet(option.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-accent text-white' : 'bg-muted'
                    }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{option.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${isSelected ? 'bg-accent text-white' : 'bg-muted'
                        }`}>
                        {option.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{option.tagline}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {option.setupTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        {option.custody}
                      </span>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-accent bg-accent' : 'border-muted'
                    }`}>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Selected Wallet Details */}
        {selectedOption && (
          <Card className="p-8  border-accent/20">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">About {selectedOption.name}</h3>
                <p className="text-muted-foreground text-lg">{selectedOption.description}</p>
              </div>

              <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-1">Perfect for:</p>
                <p className="text-muted-foreground">{selectedOption.perfect}</p>
              </div>

              {/* Code Example */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Create your account with this wallet type:</h4>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Copy & paste this
                  </span>
                </div>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-xs">
                  <code>{getCodeExample(selectedWallet)}</code>
                </pre>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Step 2: API Key */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Get Your API Key</h2>
          <p className="text-lg text-muted-foreground">
            Make one API call to create your account. You'll get your API key instantly.
          </p>
        </div>

        <Card className="p-8">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">What you need:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Business email address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Business name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Business address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Webhook URL (optional)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">What you get back:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Your unique API key</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Merchant ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Wallet address (for receiving funds)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Setup instructions (if needed)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">
                🔐 Important: Save your API key!
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Your API key is shown only once. Store it securely in your environment variables immediately.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3">API Endpoint:</p>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm">
                <code>POST https://api.zendfi.tech/api/v1/merchants</code>
              </pre>
            </div>
          </div>
        </Card>
      </div>

      {/* Step 3: Accept Payments */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Start Accepting Payments</h2>
          <p className="text-lg text-muted-foreground">
            Create your first payment in seconds. Your customers can pay with any Solana wallet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Create a Payment</h3>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-xs mb-4">
              <code>{`POST /api/v1/payments

{
  "amount": 50.00,
  "currency": "USD",
  "description": "Premium Plan",
  "token": "USDC"
}`}</code>
            </pre>
            <p className="text-sm text-muted-foreground">
              You'll get back a payment URL and QR code to show your customer
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Customer Experience</h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span className="text-sm">Opens the payment link or scans QR code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span className="text-sm">Connects their wallet (Phantom, Solflare, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span className="text-sm">Approves the transaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span className="text-sm">Payment confirmed instantly!</span>
              </li>
            </ol>
          </Card>
        </div>
      </div>

      {/* How Settlements Work */}
      <Card className="p-8 ">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">How You Get Paid</h2>
            <p className="text-muted-foreground">
              Choose how you want to receive your funds. You can change this anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">

                <h3 className="font-bold">Auto USDC (Recommended)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Customers pay in SOL or USDC, you always receive stable USDC. No volatility risk.
              </p>
              <div className="bg-muted/50 rounded p-3 text-xs">
                <span className="font-semibold">Fee:</span> 0.5% + minimal swap fees
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">

                <h3 className="font-bold">Direct Token</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Receive payments in the exact token your customer pays with. Perfect for crypto enthusiasts.
              </p>
              <div className="bg-muted/50 rounded p-3 text-xs">
                <span className="font-semibold">Fee:</span> 0.5% flat
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Real-time Notifications */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Get Real-Time Notifications</h2>
          <p className="text-lg text-muted-foreground">
            Set up webhooks to receive instant notifications when payments are completed.
          </p>
        </div>

        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Events we send:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-mono text-sm">payment.confirmed</p>
                    <p className="text-xs text-muted-foreground">Payment received and verified</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-mono text-sm">settlement.completed</p>
                    <p className="text-xs text-muted-foreground">Funds settled to your wallet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-mono text-sm">payment.failed</p>
                    <p className="text-xs text-muted-foreground">Transaction didn't complete</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Your webhook must:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use HTTPS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Respond within 30 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Return 200 OK status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Verify webhook signatures</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Next Steps */}
      <Card className="p-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-2xl font-bold">
            <Heart className="w-6 h-6 text-primary" />
            You're All Set!
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You now have everything you need to accept crypto payments. Here's what to explore next:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 text-left  transition-shadow cursor-pointer">
              <h3 className="font-bold mb-2">API Reference</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Explore all available endpoints and parameters
              </p>
              <Link href={"/docs/api"}>
                <span className="text-sm text-primary font-semibold flex items-center gap-1">
                  View docs <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 text-left  transition-shadow cursor-pointer">
              <h3 className="font-bold mb-2">SDK and Toolkit</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Node.js, Python, PHP, and more
              </p>
              <Link href={"/docs/sdk"}>
                <span className="text-sm text-primary font-semibold flex items-center gap-1">
                  See examples <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 text-left  transition-shadow cursor-pointer">
              <h3 className="font-bold mb-2">Get Help</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Join our Discord or email support
              </p>
              <Link href={"mailto:support@zendfi.tech"}>
                <span className="text-sm text-primary font-semibold flex items-center gap-1">
                  Contact us <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function getCodeExample(walletType: string) {
  const examples = {
    mpc_passkey: `curl -X POST https://api.zendfi.tech/api/v1/merchants \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Store",
    "email": "hello@mystore.com",
    "business_address": "123 Main St, SF, CA",
    "wallet_generation_method": "mpc_passkey"
  }'`,
    simple: `curl -X POST https://api.zendfi.tech/api/v1/merchants \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Store",
    "email": "hello@mystore.com",
    "business_address": "123 Main St, SF, CA",
    "wallet_generation_method": "simple"
  }'`,
    mnemonic: `curl -X POST https://api.zendfi.tech/api/v1/merchants \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Store",
    "email": "hello@mystore.com",
    "business_address": "123 Main St, SF, CA",
    "wallet_generation_method": "mnemonic"
  }'`,
    own: `curl -X POST https://api.zendfi.tech/api/v1/merchants \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Store",
    "email": "hello@mystore.com",
    "business_address": "123 Main St, SF, CA",
    "wallet_address": "YOUR_SOLANA_WALLET_ADDRESS"
  }'`
  }
  return examples[walletType as keyof typeof examples]
}