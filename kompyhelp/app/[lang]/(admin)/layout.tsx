// app/admin/layout.tsx
"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "../../context/auth-context"
import { AdminNavbar } from "@/components/admin/admin-navbar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user?.role !== 'admin') {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Yuklanmoqda...</h1>
          <p>Kirish ruxsatnomalari tekshirilmoqda</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}