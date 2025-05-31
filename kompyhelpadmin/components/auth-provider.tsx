"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { getStoredUser, getStoredToken, clearUserData, type User } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  token: string | null
  login: (user: User, token: string) => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check for stored auth data on mount
    const storedUser = getStoredUser()
    const storedToken = getStoredToken()

    if (storedUser && storedToken) {
      setUser(storedUser)
      setToken(storedToken)
    }

    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Redirect logic based on auth state and current path
    if (!isLoading) {
      const isAuthPage = pathname === "/login" || pathname === "/register"
      const isDashboardPage = pathname.startsWith("/dashboard")

      if (!user && isDashboardPage) {
        // Not authenticated but trying to access dashboard
        router.push("/login")
      } else if (user && isAuthPage) {
        // Authenticated but on auth page, redirect to appropriate dashboard
        const dashboardPath =
          user.role === "admin"
            ? "/dashboard/admin"
            : user.role === "business"
              ? "/dashboard/business"
              : "/dashboard/user"
        router.push(dashboardPath)
      }
    }
  }, [user, pathname, isLoading, router])

  const login = (userData: User, userToken: string) => {
    setUser(userData)
    setToken(userToken)

    // Store in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(userData))
      localStorage.setItem("token", userToken)
    }

    // Redirect to appropriate dashboard
    const dashboardPath =
      userData.role === "admin"
        ? "/dashboard/admin"
        : userData.role === "business"
          ? "/dashboard/business"
          : "/dashboard/user"
    router.push(dashboardPath)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    clearUserData()
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
