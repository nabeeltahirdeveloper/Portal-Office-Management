export default function LeavesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Leave Requests</h1>
      <p className="text-gray-700">Submit a new leave request or view the status of existing requests.</p>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Request Leave</button>
    </div>
  );
}
