"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  Users,
  Ticket,
  Settings,
  BarChart3,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Computer,
  Bell,
  MessageSquare,
  Shield,
  Building2,
  Database,
} from "lucide-react"
import { useAuth } from "@/components/auth-provider"

const sidebarItems = [
  {
    title: "Bosh sahifa",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Bosh Panel",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Tiketlar",
    href: "/dashboard/admin/tickets",
    icon: Ticket,
  },
  {
    title: "Foydalanuvchilar",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "Biznes Hisoblar",
    href: "/dashboard/admin/business",
    icon: Building2,
  },
  {
    title: "Analitika",
    href: "/dashboard/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Tizim Salomatligi",
    href: "/dashboard/admin/system",
    icon: Shield,
  },
  {
    title: "Ma'lumotlar Bazasi",
    href: "/dashboard/admin/database",
    icon: Database,
  },
  {
    title: "Xabarlar",
    href: "/dashboard/admin/messages",
    icon: MessageSquare,
  },
  {
    title: "Yordam",
    href: "/dashboard/admin/help",
    icon: HelpCircle,
  },
  {
    title: "Sozlamalar",
    href: "/dashboard/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-[#12121e] border-r border-purple-900/30 transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-purple-900/30 bg-[#0e0e1a]">
            <Computer className="h-8 w-8 text-purple-500" />
            <h1 className="ml-2 text-xl font-bold text-purple-400">KompyHelp</h1>
          </div>

          {/* Admin Info */}
          <div className="p-4 border-b border-purple-900/30 bg-[#0e0e1a]">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-purple-900/50 text-purple-200">AD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm text-white">Admin Foydalanuvchi</p>
                <p className="text-xs text-gray-400">admin@kompyhelp.uz</p>
                <p className="text-xs text-purple-400">Super Admin</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 py-4">
            <nav className="space-y-2 px-3">
              {sidebarItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start text-gray-300 hover:text-white hover:bg-purple-900/30",
                      pathname === item.href && "bg-purple-700 text-white hover:bg-purple-600",
                    )}
                  >
                    <item.icon className="h-4 w-4 mr-3" />
                    {item.title}
                    {item.title === "Tiketlar" && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">5</span>
                    )}
                    {item.title === "Xabarlar" && (
                      <span className="ml-auto bg-blue-500 text-white text-xs rounded-full px-2 py-1">12</span>
                    )}
                  </Button>
                </Link>
              ))}
            </nav>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="p-3 border-t border-purple-900/30 bg-[#0e0e1a]">
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start border-purple-700 text-purple-400 hover:bg-purple-900/20"
              >
                <Bell className="h-4 w-4 mr-2" />
                Tizim Ogohlantirishlari
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
                onClick={logout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Chiqish
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}
