import AdminLayout from "@/components/layouts/AdminLayout";

export default function AdminOverview() {
    return (
        <AdminLayout>
            <div className="flex-1 px-6 py-10 md:px-12">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-gray-500 text-sm">Total Users</h2>
                        <p className="text-2xl font-bold mt-2">1,248</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-gray-500 text-sm">Total Transactions</h2>
                        <p className="text-2xl font-bold mt-2">$54,230</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-gray-500 text-sm">Active API Keys</h2>
                        <p className="text-2xl font-bold mt-2">321</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
