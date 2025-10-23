"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import AdminLayout from "@/components/layouts/AdminLayout"

export default function AdminUsers() {
    const [search, setSearch] = useState("")

    const users = [
        { name: "John Doe", email: "john@zendfi.com", status: "Active" },
        { name: "Jane Smith", email: "jane@zendfi.com", status: "Suspended" },
    ]

    return (
        <AdminLayout>
            <div className="flex-1 px-6 py-10 md:px-12">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Users</h1>

                <div className="flex items-center gap-3 mb-6">
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:border-accent text-sm"
                            placeholder="Search users..."
                        />
                    </div>
                </div>

                <div className="bg-white shadow-sm rounded-xl overflow-hidden">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-100 text-gray-600">
                            <tr>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-6">{u.name}</td>
                                    <td className="py-3 px-6">{u.email}</td>
                                    <td className="py-3 px-6">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${u.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {u.status}
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
