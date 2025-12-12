import { Card } from "@/components/ui/card";

export default function PMDashboardPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Assuming Sidebar is rendered in your layout */}
      <main className="flex-1 p-8">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Project Manager Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Add New Project
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition">
              Profile
            </button>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Assigned Projects</h3>
            <p className="text-gray-600">12 active projects</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Tasks</h3>
            <p className="text-gray-600">45 tasks created/updated</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Team Workload</h3>
            <p className="text-gray-600">5 employees overloaded</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project Progress</h3>
            <p className="text-gray-600">Overall 68% completed</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Attendance & Leave</h3>
            <p className="text-gray-600">2 employees on leave today</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Documents</h3>
            <p className="text-gray-600">7 documents uploaded</p>
          </div>
        </div>
      </main>
    </div>
  );
}
