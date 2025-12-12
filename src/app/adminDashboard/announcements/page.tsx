// app/adminDashboard/attendance.tsx
export default function AttendancePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <p className="text-gray-600">Track employee attendance and reports.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">Attendance Overview Card 1</div>
        <div className="bg-white p-6 rounded shadow">Attendance Overview Card 2</div>
      </div>
    </div>
  );
}
