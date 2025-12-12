// app/adminDashboard/roles.tsx
export default function RolesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Roles</h1>
      <p className="text-gray-600">Manage user roles and permissions.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">Admin Role</div>
        <div className="bg-white p-6 rounded shadow">Manager Role</div>
      </div>
    </div>
  );
}
