// app/adminDashboard/users.tsx
export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <p className="text-gray-600">Here you can manage all users.</p>

      {/* Example Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">john@example.com</td>
              <td className="px-4 py-2">Admin</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">jane@example.com</td>
              <td className="px-4 py-2">Manager</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
