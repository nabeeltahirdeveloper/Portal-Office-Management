"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Shield } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/adminDashboard", label: "adminDashboard", icon: Home },
    { href: "/users", label: "Users", icon: User },
    { href: "/roles", label: "Roles", icon: Shield },
  ];

  return (
    <aside className="w-64 h-screen border-r p-4 bg-white hidden md:block">
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
    </aside>
  );
}
