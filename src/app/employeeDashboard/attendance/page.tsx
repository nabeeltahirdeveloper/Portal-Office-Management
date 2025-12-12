export default function AttendancePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Clock-in / Clock-out</h1>
      <p className="text-gray-700">Track your attendance and clock-in or clock-out for today.</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Clock In</button>
      <button className="mt-4 ml-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Clock Out</button>
    </div>
  );
}
