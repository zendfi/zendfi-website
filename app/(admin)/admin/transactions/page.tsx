import AdminLayout from "@/components/layouts/AdminLayout"

export default function AdminTransactions() {
    const transactions = [
      { id: "#TX1234", user: "John Doe", amount: "$120.00", status: "Success" },
      { id: "#TX5678", user: "Jane Smith", amount: "$85.50", status: "Pending" },
    ]
  
    return (
        <AdminLayout>
      <div className="flex-1 px-6 py-10 md:px-12">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Transactions</h1>
        <div className="bg-white shadow-sm rounded-xl overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="py-3 px-6 text-left">Transaction ID</th>
                <th className="py-3 px-6 text-left">User</th>
                <th className="py-3 px-6 text-left">Amount</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{tx.id}</td>
                  <td className="py-3 px-6">{tx.user}</td>
                  <td className="py-3 px-6">{tx.amount}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tx.status === "Success"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </AdminLayout>
    )
  }
  