"use client"

import { useState } from "react"
import { Copy, LogOut, Key, CreditCard, User } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { DashHeader } from "../_components/DashHeader"

export default function DashboardPage() {
  const [apiKey] = useState("zndf_4f7b98xk2e9q91m3p6t")
  const [copied, setCopied] = useState(false)

  const transactions = [
    { id: "TX001", amount: "$200.00", status: "Success", date: "Oct 21, 2025" },
    { id: "TX002", amount: "$500.00", status: "Pending", date: "Oct 20, 2025" },
    { id: "TX003", amount: "$90.00", status: "Failed", date: "Oct 19, 2025" },
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex flex-1 w-full">
        <section className="flex-1 px-6 py-10 md:px-12">
          {/* Profile Section */}
          <div id="profile" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-accent">
              <User size={18} /> User Info
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> daniel@zendfi.com</p>
              <p><strong>Account Type:</strong> Business</p>
              <p><strong>Joined:</strong> March 2025</p>
            </div>
          </div>

          {/* API Key Section */}
          <div id="api" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-accent">
              <Key size={18} /> API Key
            </h3>
            <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
              <code className="font-mono text-gray-700 truncate">{apiKey}</code>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="flex items-center gap-2 text-accent hover:text-accent/80"
              >
                <Copy size={16} />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Keep your API key secure. Do not share it publicly.
            </p>
          </div>

          {/* Transactions Section */}
          <div id="transactions" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-accent">
              <CreditCard size={18} /> Recent Transactions
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-600">
                    <th className="py-3 px-4">Transaction ID</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-800">{tx.id}</td>
                      <td className="py-3 px-4">{tx.amount}</td>
                      <td
                        className={`py-3 px-4 font-medium ${
                          tx.status === "Success"
                            ? "text-green-600"
                            : tx.status === "Pending"
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {tx.status}
                      </td>
                      <td className="py-3 px-4 text-gray-500">{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
