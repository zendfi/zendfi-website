import { Card } from "@/components/ui/card"

export default function SDKs() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">SDKs & Libraries</h1>
        <p className="text-base md:text-lg text-muted-foreground">Official SDKs for popular programming languages.</p>
      </div>

      {/* JavaScript SDK */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">JavaScript SDK</h2>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Installation</h3>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <pre>{`npm install zendfi-sdk`}</pre>
          </div>

          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Basic Usage</h3>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <pre>{`import { ZendFi } from "zendfi-sdk"

const zendfi = new ZendFi("YOUR_API_KEY")

// Create a transfer
const transfer = await zendfi.transfer({
  amount: 500,
  from: "USD",
  to: "NGN",
  recipient: "0123456789",
  description: "Payment"
})

console.log(transfer.status)
console.log(transfer.id)`}</pre>
          </div>
        </Card>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-xs md:text-sm">
            <li>Full TypeScript support with auto-completion</li>
            <li>Promise-based API</li>
            <li>Automatic error handling</li>
            <li>Request retry logic</li>
            <li>Webhook signature verification</li>
          </ul>
        </Card>
      </section>

      {/* Python SDK */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Python SDK</h2>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Installation</h3>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <pre>{`pip install zendfi`}</pre>
          </div>

          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Basic Usage</h3>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <pre>{`from zendfi import ZendFi

zendfi = ZendFi("YOUR_API_KEY")

# Create a transfer
transfer = zendfi.transfer(
    amount=500,
    from_currency="USD",
    to_currency="NGN",
    recipient="0123456789",
    description="Payment"
)

print(transfer.status)
print(transfer.id)`}</pre>
          </div>
        </Card>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-xs md:text-sm">
            <li>Full type hints for IDE support</li>
            <li>Async/await support</li>
            <li>Built-in rate limiting</li>
            <li>Comprehensive error handling</li>
            <li>Webhook event parsing</li>
          </ul>
        </Card>
      </section>

      {/* Go SDK */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Go SDK</h2>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Installation</h3>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mb-4">
            <pre>{`go get github.com/zendfi/zendfi-go`}</pre>
          </div>

          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Basic Usage</h3>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <pre>{`package main

import (
    "fmt"
    "github.com/zendfi/zendfi-go"
)

func main() {
    client := zendfi.NewClient("YOUR_API_KEY")
    
    transfer, err := client.Transfer(&zendfi.TransferRequest{
        Amount:    500,
        From:      "USD",
        To:        "NGN",
        Recipient: "0123456789",
    })
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(transfer.Status)
}`}</pre>
          </div>
        </Card>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-xs md:text-sm">
            <li>Strongly typed API</li>
            <li>Context support for cancellation</li>
            <li>Connection pooling</li>
            <li>Comprehensive logging</li>
            <li>Webhook signature verification</li>
          </ul>
        </Card>
      </section>

      {/* Common Patterns */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Common Patterns</h2>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Error Handling (JavaScript)</h3>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <pre>{`try {
  const transfer = await zendfi.transfer({
    amount: 500,
    from: "USD",
    to: "NGN",
    recipient: "0123456789"
  })
} catch (error) {
  if (error.code === "INSUFFICIENT_BALANCE") {
    console.error("Not enough balance")
  } else if (error.code === "INVALID_RECIPIENT") {
    console.error("Invalid recipient")
  } else {
    console.error("Transfer failed:", error.message)
  }
}`}</pre>
          </div>
        </Card>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-3 text-sm md:text-base">Webhook Verification (JavaScript)</h3>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <pre>{`import { ZendFi } from "zendfi-sdk"

const zendfi = new ZendFi("YOUR_API_KEY")

// Verify webhook signature
const isValid = zendfi.verifyWebhookSignature(
  payload,
  signature,
  "YOUR_WEBHOOK_SECRET"
)

if (isValid) {
  console.log("Webhook is authentic")
  // Process webhook
} else {
  console.error("Invalid webhook signature")
}`}</pre>
          </div>
        </Card>
      </section>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6 md:mt-8">
        <p className="text-foreground font-semibold text-sm md:text-base">Need Help?</p>
        <p className="text-muted-foreground text-xs md:text-sm mt-2">
          Check the{" "}
          <a href="/docs" className="text-primary hover:underline">
            Getting Started
          </a>{" "}
          guide or visit our{" "}
          <a href="/docs/api" className="text-primary hover:underline">
            API Reference
          </a>{" "}
          for more details.
        </p>
      </div>
    </div>
  )
}
