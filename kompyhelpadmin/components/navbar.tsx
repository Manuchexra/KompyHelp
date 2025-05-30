"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Computer, Menu, X, User, LogOut } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleDashboardRedirect = () => {
    if (user) {
      const dashboardPath =
        user.role === "admin"
          ? "/dashboard/admin"
          : user.role === "business"
            ? "/dashboard/business"
            : "/dashboard/user"
      return dashboardPath
    }
    return "/login"
  }

  return (
    <nav className="bg-[#12121e] border-b border-purple-900/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Computer className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white">KompyHelp</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Bosh sahifa
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              Biz haqimizda
            </Link>
            <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">
              Do'kon
            </Link>
            <Link href="/knowledge-base" className="text-gray-300 hover:text-white transition-colors">
              Bilim bazasi
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Aloqa
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link href={handleDashboardRedirect()}>
                  <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  onClick={logout}
                  className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Chiqish
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                    Kirish
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white">Ro'yxat</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0e0e1a] rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Bosh sahifa
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Biz haqimizda
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Do'kon
              </Link>
              <Link
                href="/knowledge-base"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Bilim bazasi
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Aloqa
              </Link>

              {user ? (
                <div className="space-y-2 pt-2 border-t border-purple-900/30">
                  <Link href={handleDashboardRedirect()}>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-700 text-purple-400 hover:bg-purple-900/20"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="h-4 w-4 mr-2" />
                      {user.name}
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                    className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Chiqish
                  </Button>
                </div>
              ) : (
                <div className="space-y-2 pt-2 border-t border-purple-900/30">
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="w-full border-purple-700 text-purple-400 hover:bg-purple-900/20"
                      onClick={() => setIsOpen(false)}
                    >
                      Kirish
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button
                      className="w-full bg-purple-700 hover:bg-purple-800 text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Ro'yxat
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
