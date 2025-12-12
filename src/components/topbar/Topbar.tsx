
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";

export default async function Topbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="h-14 border-b flex items-center justify-between px-6 bg-white shadow-sm">
      {/* Left side: could be logo or title */}
      <div className="text-lg font-bold text-gray-800">My Portal</div>

      {/* Right side: user info */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          Welcome, {session?.user?.name || session?.user?.email || "Guest"}
        </span>
        {/* Optional: add user avatar or dropdown */}
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
          {session?.user?.name?.split(" ").map(n => n[0]).join("") || "U"}
        </div>
      </div>
    </header>
  );
}
