"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FolderKanban,
  ClipboardList,
  FilePlus,
  Users,
  Layers,
  BarChart3,
  UserCheck,
  FileText,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PMSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      router.push("/");
      toast.success("Signed Out Successfully!");
    }, 800);
  };

  const links = [
    { href: "/pmDashboard", label: "Assigned Projects", icon: ClipboardList },
    { href: "/pmDashboard/tasks", label: "Create / Update Tasks", icon: FilePlus },
    { href: "/pmDashboard/assign", label: "Assign Tasks", icon: Users },
    { href: "/pmDashboard/workload", label: "Team Workload", icon: Layers },
    { href: "/pmDashboard/progress", label: "Project Progress", icon: BarChart3 },
    { href: "/pmDashboard/attendance", label: "Attendance & Leave", icon: UserCheck },
    { href: "/pmDashboard/documents", label: "Documents & Guidelines", icon: FileText },
  ];

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
            <p className="text-sm font-medium text-gray-700">Signing out…</p>
          </div>
        </div>
      )}

      <aside className="w-64 h-screen border-r p-4 bg-white hidden md:flex flex-col justify-between">
        <nav className="space-y-2">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition ${
                pathname === href
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 p-2 mt-4 rounded hover:bg-red-100 transition text-red-600 font-semibold"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  );
}
