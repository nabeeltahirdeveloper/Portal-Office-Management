"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, User, Shield, AlertCircle, LogOut, Briefcase, Users } from "lucide-react";
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
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const links = [
    { href: "/adminDashboard", label: "Overview", icon: Home },
    { href: "/adminDashboard/roles", label: "Roles", icon: Shield },
    { href: "/adminDashboard/announcements", label: "Announcements", icon: AlertCircle },
    { href: "/adminDashboard/reports", label: "Reports", icon: Home },
    { href: "/adminDashboard/department", label: "Departments", icon: Users },
  ];

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      router.push("/");
      toast.success("Signed Out Successfully!");
    }, 1000);
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

          {/* Users Dropdown */}
          <div>
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className={`flex items-center justify-between w-full gap-2 p-2 rounded hover:bg-gray-100 transition ${
                pathname.startsWith("/adminDashboard/users") ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <User size={18} />
                Users
              </div>
              <span>{userDropdownOpen ? "▲" : "▼"}</span>
            </button>

            {userDropdownOpen && (
              <div className="ml-6 mt-1 space-y-1 flex flex-col">
                <Link
                  href="/adminDashboard/users/admins"
                  className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition ${
                    pathname === "/adminDashboard/users/admins" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  <Shield size={16} /> Admins
                </Link>
                <Link
                  href="/adminDashboard/users/hr"
                  className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition ${
                    pathname === "/adminDashboard/users/hr" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  <User size={16} /> HR
                </Link>
                <Link
                  href="/adminDashboard/users/employee"
                  className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition ${
                    pathname === "/adminDashboard/users/employee" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  <Briefcase size={16} /> Employee
                </Link>
                <Link
                  href="/adminDashboard/users/project_manager"
                  className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition ${
                    pathname === "/adminDashboard/users/project_manager" ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  <Users size={16} /> Project Manager
                </Link>
              </div>
            )}
          </div>
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
