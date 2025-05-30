"use client"
import { createContext, useContext, useState } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  email: string
  role?: string  // Role optional qilindi
  // Boshqa user properties
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      
      // Agar role kelmasa, default qiymat beramiz
      const userData = {
        ...data.user,
        role: data.user.role || 'user'  // Default role
      }

      setUser(userData)
      localStorage.setItem('authToken', data.token)
      
      // Rolega qarab yo'naltiramiz
      router.push(userData.role === 'admin' ? '/admin/dashboard' : '/dashboard')
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('authToken')
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}