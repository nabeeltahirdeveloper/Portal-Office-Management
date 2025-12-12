import { Card } from "@/components/ui/card";
export default function adminDashboardPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Assuming Sidebar is rendered in your layout */}
      <main className="flex-1 p-8">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Add New
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition">
              Profile
            </button>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Users</h3>
            <p className="text-gray-600">1,245 active users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Revenue</h3>
            <p className="text-gray-600">$12,340 this month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Orders</h3>
            <p className="text-gray-600">320 new orders</p>
          </div>
          
        </div>
      </main>
    </div>
  );
}
