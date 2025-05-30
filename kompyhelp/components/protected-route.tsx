// components/protected-route.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/context/auth-context"

export default function ProtectedRoute({
  children,
  requiredRole = null,
}: {
  children: React.ReactNode
  requiredRole?: 'admin' | 'user' | null
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login')
      } else if (requiredRole && user.role !== requiredRole) {
        router.push(user.role === 'admin' ? '/admin-dashboard' : '/dashboard')
      }
    }
  }, [user, loading, router, requiredRole])

  if (loading || !user || (requiredRole && user.role !== requiredRole)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Yuklanmoqda...</h1>
          <p>Kirish ruxsatnomalari tekshirilmoqda</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}