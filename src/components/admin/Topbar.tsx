// components/admin/Topbar.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";

export default async function Topbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="h-14 border-b flex items-center justify-between px-6 bg-white shadow-sm">
      <div className="text-lg font-bold text-gray-800">Admin Portal</div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          Welcome, {session?.user?.name || session?.user?.email || "Guest"}
        </span>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
          {session?.user?.name?.split(" ").map((n) => n[0]).join("") || "U"}
        </div>
      </div>
    </header>
  );
}
