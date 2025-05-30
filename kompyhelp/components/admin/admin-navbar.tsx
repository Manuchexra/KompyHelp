// components/admin-navbar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, FileText, Database, MessageSquare, Settings } from "lucide-react"

export function AdminNavbar() {
  const pathname = usePathname()

  const links = [
    { href: "/admin", icon: Home, label: "Bosh sahifa" },
    { href: "/admin/users", icon: Users, label: "Foydalanuvchilar" },
    { href: "/admin/requests", icon: FileText, label: "So'rovlar" },
    { href: "/admin/knowledge", icon: Database, label: "Bilimlar bazasi" },
    { href: "/admin/feedback", icon: MessageSquare, label: "Fikrlar" },
    { href: "/admin/settings", icon: Settings, label: "Sozlamalar" },
  ]

  return (
    <nav className="hidden md:flex flex-col w-64 h-screen bg-white border-r fixed top-0 left-0 pt-4">
      <div className="px-4 mb-8">
        <h1 className="text-xl font-bold text-blue-600">KompyHelp Admin</h1>
        <p className="text-xs text-gray-500">Boshqaruv paneli</p>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center px-4 py-3 text-sm font-medium ${
              pathname === link.href
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <link.icon className="h-4 w-4 mr-3" />
            {link.label}
          </Link>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-sm font-medium">Sabrina Davronova</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
        <button className="mt-2 text-xs text-gray-500 hover:text-gray-700">
          Chiqish
        </button>
      </div>
    </nav>
  )
}