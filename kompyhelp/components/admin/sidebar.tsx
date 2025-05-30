// components/admin/sidebar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Database, 
  MessageSquare, 
  Settings 
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/users", icon: Users, label: "Foydalanuvchilar" },
    { href: "/admin/requests", icon: FileText, label: "So'rovlar" },
    { href: "/admin/knowledge", icon: Database, label: "Bilimlar bazasi" },
    { href: "/admin/feedback", icon: MessageSquare, label: "Fikrlar" },
    { href: "/admin/settings", icon: Settings, label: "Sozlamalar" },
  ]

  return (
    <div className="fixed left-0 top-0 h-full w-64 border-r bg-white z-10">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-blue-600">KompyHelp</h1>
        <p className="text-xs text-gray-500">Admin Panel</p>
      </div>
      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}