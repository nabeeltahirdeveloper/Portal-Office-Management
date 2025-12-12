import { Card } from "@/components/ui/card";

export default function EmployeeDashboardPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar will be rendered in layout */}

      <main className="flex-1 p-8">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Employee Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Add New
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition">
              Profile
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Attendance</h3>
            <p className="text-gray-600">Clock-in / Clock-out for today</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Leave Requests</h3>
            <p className="text-gray-600">View or submit leave requests</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Assigned Tasks</h3>
            <p className="text-gray-600">Check tasks assigned by your manager</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Task Status</h3>
            <p className="text-gray-600">Update progress and mark tasks complete</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Notifications</h3>
            <p className="text-gray-600">View announcements and important updates</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Profile</h3>
            <p className="text-gray-600">View and edit your basic profile</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project Documents</h3>
            <p className="text-gray-600">Access documents or resources for your assigned projects</p>
          </Card>

        </div>
      </main>
    </div>
  );
}
