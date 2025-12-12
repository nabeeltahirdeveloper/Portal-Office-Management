"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Clock,
  FileText,
  ClipboardList,
  Bell,
  User,
  File,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

// Full-screen loader overlay
function FullScreenLoader({ message }: { message: string }) {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
        <p className="text-sm font-medium text-gray-700">{message}</p>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const links = [
    { href: "/employeeDashboard", label: "Overview", icon: Home },
    { href: "/employeeDashboard/attendance", label: "Clock-in / Clock-out", icon: Clock },
    { href: "/employeeDashboard/leaves", label: "Leave Requests", icon: FileText },
    { href: "/employeeDashboard/tasks", label: "Assigned Tasks", icon: ClipboardList },
    { href: "/employeeDashboard/task-status", label: "Task Status Update", icon: FileText },
    { href: "/employeeDashboard/notifications", label: "Notifications", icon: Bell },
    { href: "/employeeDashboard/profile", label: "Profile", icon: User },
    { href: "/employeeDashboard/documents", label: "Project Documents", icon: File },
  ];

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      router.push("/");
      toast.success("Signed Out Successfully!");
    }, 800);
  };

  return (
    <>
      {loading && <FullScreenLoader message="Signing out…" />}

      <aside className="w-64 h-screen border-r p-4 bg-white hidden md:flex flex-col justify-between">
        <nav className="space-y-2">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition ${
                  isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
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
