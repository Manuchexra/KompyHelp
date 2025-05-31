"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Computer, Eye, EyeOff, Loader2 } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { toast } from "@/hooks/use-toast"

export default function LoginPage() {
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      })

      const result = await response.json()

      if (result.success) {
        login(result.user, result.token)
        toast({
          title: "Muvaffaqiyat!",
          description: "Tizimga muvaffaqiyatli kirdingiz",
        })
      } else {
        toast({
          title: "Xato!",
          description: result.error || "Login xatosi",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Xato!",
        description: "Server bilan bog'lanishda xatolik yuz berdi",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Xato!",
        description: "Parollar mos kelmaydi!",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
          phone: registerData.phone,
          role: "user",
        }),
      })

      const result = await response.json()

      if (result.success) {
        login(result.user, result.token)
        toast({
          title: "Muvaffaqiyat!",
          description: "Ro'yxatdan muvaffaqiyatli o'tdingiz",
        })
      } else {
        toast({
          title: "Xato!",
          description: result.error || "Ro'yxatdan o'tishda xatolik yuz berdi",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Registration error:", error)
      toast({
        title: "Xato!",
        description: "Server bilan bog'lanishda xatolik yuz berdi",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDemoLogin = (role: string) => {
    let email = ""
    switch (role) {
      case "admin":
        email = "admin@kompyhelp.uz"
        break
      case "business":
        email = "business@kompyhelp.uz"
        break
      case "user":
        email = "user@kompyhelp.uz"
        break
    }
    setLoginData({ email, password: "demo123" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e1a] to-[#1a1a3a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <Computer className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold text-white">KompyHelp</span>
          </Link>
          <p className="text-gray-400 mt-2">Professional texnik yordam xizmati</p>
        </div>

        <Card className="bg-[#12121e] border-purple-900/30 shadow-xl shadow-purple-900/10">
          <CardHeader className="text-center">
            <CardTitle className="text-white">Xush kelibsiz!</CardTitle>
            <CardDescription className="text-gray-400">Hisobingizga kiring yoki ro'yxatdan o'ting</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#0e0e1a] border border-purple-900/30">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
                >
                  Kirish
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
                >
                  Ro'yxat
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                      className="bg-[#0e0e1a] border-purple-900/30 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">
                      Parol
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Parolingizni kiriting"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                        className="bg-[#0e0e1a] border-purple-900/30 text-white placeholder:text-gray-500"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="remember" className="rounded bg-[#0e0e1a] border-purple-900/30" />
                      <Label htmlFor="remember" className="text-sm text-gray-300">
                        Eslab qolish
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
                      Parolni unutdingizmi?
                    </Link>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Kirilmoqda...
                      </>
                    ) : (
                      "Kirish"
                    )}
                  </Button>
                </form>

                {/* Demo credentials */}
                <div className="mt-6 p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/30">
                  <p className="text-sm text-gray-400 mb-3">Demo hisoblar (bir marta bosing):</p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-purple-700 text-purple-400 hover:bg-purple-900/20"
                      onClick={() => handleDemoLogin("admin")}
                    >
                      👑 Admin Panel
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-blue-700 text-blue-400 hover:bg-blue-900/20"
                      onClick={() => handleDemoLogin("business")}
                    >
                      🏢 Biznes Panel
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-green-700 text-green-400 hover:bg-green-900/20"
                      onClick={() => handleDemoLogin("user")}
                    >
                      👤 Foydalanuvchi Panel
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      To'liq ism
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ismingizni kiriting"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      required
                      className="bg-[#0e0e1a] border-purple-900/30 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="reg-email"
                      type="email"
                      placeholder="email@example.com"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      required
                      className="bg-[#0e0e1a] border-purple-900/30 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">
                      Telefon raqam
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      required
                      className="bg-[#0e0e1a] border-purple-900/30 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password" className="text-gray-300">
                      Parol
                    </Label>
                    <div className="relative">
                      <Input
                        id="reg-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Parol yarating"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        required
                        className="bg-[#0e0e1a] border-purple-900/30 text-white placeholder:text-gray-500"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-gray-300">
                      Parolni tasdiqlang
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Parolni qayta kiriting"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      required
                      className="bg-[#0e0e1a] border-purple-900/30 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" required className="rounded bg-[#0e0e1a] border-purple-900/30" />
                    <Label htmlFor="terms" className="text-sm text-gray-300">
                      Men{" "}
                      <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                        foydalanish shartlari
                      </Link>{" "}
                      bilan roziman
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Ro'yxatdan o'tilmoqda...
                      </>
                    ) : (
                      "Ro'yxatdan o'tish"
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
