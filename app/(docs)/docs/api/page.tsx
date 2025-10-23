import { Card } from "@/components/ui/card"

export default function APIReference() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">API Reference</h1>
        <p className="text-base md:text-lg text-muted-foreground">Complete reference for all ZendFi API endpoints.</p>
      </div>

      {/* Authentication */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Authentication</h2>
        <Card className="p-4 md:p-6 bg-card border border-border">
          <p className="text-foreground mb-4 text-sm md:text-base">
            All requests require an API key in the Authorization header:
          </p>
          <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
            <pre>{`Authorization: Bearer sk_live_xxxxxxxxxxxxx`}</pre>
          </div>
        </Card>
      </section>

      {/* Transfers */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Transfers</h2>

        {/* POST /v1/transfer */}
        <Card className="p-4 md:p-6 bg-card border border-border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded text-xs md:text-sm font-semibold w-fit">
              POST
            </span>
            <code className="text-foreground font-mono text-xs md:text-sm break-all">/v1/transfer</code>
          </div>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">Create a new transfer</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Request Parameters</h4>
              <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
                <pre>{`{
  "amount": 100,
  "currency": "USD",
  "recipient": "NG_BANK_ACCOUNT",
  "description": "Payment for services"
}`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Response</h4>
              <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
                <pre>{`{
  "id": "txn_123456",
  "amount": 100,
  "currency": "USD",
  "status": "pending",
  "created_at": "2024-01-15T10:30:00Z"
}`}</pre>
              </div>
            </div>
          </div>
        </Card>

        {/* GET /v1/transfer/:id */}
        <Card className="p-4 md:p-6 bg-card border border-border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs md:text-sm font-semibold w-fit">GET</span>
            <code className="text-foreground font-mono text-xs md:text-sm break-all">/v1/transfer/:id</code>
          </div>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">Retrieve transfer details</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Path Parameters</h4>
              <ul className="text-muted-foreground text-xs md:text-sm space-y-1">
                <li>
                  <code className="bg-secondary px-2 py-1 rounded">id</code> - Transfer ID (required)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Response</h4>
              <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
                <pre>{`{
  "id": "txn_123456",
  "amount": 100,
  "currency": "USD",
  "status": "completed",
  "recipient": "NG_BANK_ACCOUNT",
  "created_at": "2024-01-15T10:30:00Z",
  "completed_at": "2024-01-15T10:35:00Z"
}`}</pre>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Rates */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Rates</h2>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs md:text-sm font-semibold w-fit">GET</span>
            <code className="text-foreground font-mono text-xs md:text-sm break-all">/v1/rates</code>
          </div>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">Get current exchange rates</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Query Parameters</h4>
              <ul className="text-muted-foreground text-xs md:text-sm space-y-1">
                <li>
                  <code className="bg-secondary px-2 py-1 rounded">from</code> - Source currency (e.g., USD)
                </li>
                <li>
                  <code className="bg-secondary px-2 py-1 rounded">to</code> - Target currency (e.g., NGN)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Response</h4>
              <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
                <pre>{`{
  "from": "USD",
  "to": "NGN",
  "rate": 1234.50,
  "timestamp": "2024-01-15T10:30:00Z"
}`}</pre>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Accounts */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Accounts</h2>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs md:text-sm font-semibold w-fit">GET</span>
            <code className="text-foreground font-mono text-xs md:text-sm break-all">/v1/account/balance</code>
          </div>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">Get account balance</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Response</h4>
              <div className="bg-slate-900 text-slate-100 p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm">
                <pre>{`{
  "balance": 5000.00,
  "currency": "USD",
  "available": 5000.00,
  "pending": 0.00
}`}</pre>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Error Codes */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Error Codes</h2>

        <Card className="p-4 md:p-6 bg-card border border-border">
          <div className="space-y-3">
            <div className="border-b border-border pb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">400</span>
                <span className="font-semibold text-foreground text-sm md:text-base">Bad Request</span>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">Invalid request parameters</p>
            </div>

            <div className="border-b border-border pb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">401</span>
                <span className="font-semibold text-foreground text-sm md:text-base">Unauthorized</span>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">Invalid or missing API key</p>
            </div>

            <div className="border-b border-border pb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">404</span>
                <span className="font-semibold text-foreground text-sm md:text-base">Not Found</span>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">Resource not found</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">500</span>
                <span className="font-semibold text-foreground text-sm md:text-base">Server Error</span>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">Internal server error</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
