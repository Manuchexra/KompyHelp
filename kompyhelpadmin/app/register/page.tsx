"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Computer, Eye, EyeOff, User, Mail, Phone, MapPin, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Step 2: Address
    region: "",
    city: "",
    address: "",

    // Step 3: Account
    password: "",
    confirmPassword: "",
    accountType: "",

    // Step 4: Preferences
    notifications: {
      email: true,
      sms: false,
      marketing: false,
    },
    terms: false,
    privacy: false,
  })

  const router = useRouter()

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Parollar mos kelmaydi!")
      return
    }

    try {
      // Create user registration data
      const userData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        role: formData.accountType || "user",
        phone: formData.phone,
        address: {
          region: formData.region,
          city: formData.city,
          address: formData.address,
        },
        notifications: formData.notifications,
      }

      // Send registration request
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      const result = await response.json()

      if (result.success) {
        // Save user data
        localStorage.setItem("user", JSON.stringify(result.user))
        localStorage.setItem("token", result.token)

        // Redirect to dashboard
        router.push("/dashboard/user")
      } else {
        alert(result.error || "Ro'yxatdan o'tishda xatolik yuz berdi")
      }
    } catch (error) {
      alert("Server bilan bog'lanishda xatolik yuz berdi")
    }
  }

  const steps = [
    { number: 1, title: "Shaxsiy ma'lumotlar", icon: User },
    { number: 2, title: "Manzil", icon: MapPin },
    { number: 3, title: "Hisob yaratish", icon: Shield },
    { number: 4, title: "Sozlamalar", icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e1a] to-[#1a1a3a] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
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
            <CardTitle className="text-white text-2xl">Ro'yxatdan O'tish</CardTitle>
            <CardDescription className="text-gray-400">
              KompyHelp xizmatlaridan foydalanish uchun hisob yarating
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        currentStep >= step.number
                          ? "bg-purple-600 border-purple-600 text-white"
                          : "border-purple-900/50 text-gray-400"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-16 h-0.5 mx-2 ${
                          currentStep > step.number ? "bg-purple-600" : "bg-purple-900/30"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                {steps.map((step) => (
                  <span
                    key={step.number}
                    className={`${currentStep >= step.number ? "text-purple-400" : "text-gray-500"}`}
                  >
                    {step.title}
                  </span>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Shaxsiy Ma'lumotlar</h3>
                    <p className="text-gray-400">Ism va aloqa ma'lumotlaringizni kiriting</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-300">
                        Ism *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Ismingiz"
                        required
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-300">
                        Familiya *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Familiyangiz"
                        required
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        required
                        className="pl-10 bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">
                      Telefon raqam *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+998 90 123 45 67"
                        required
                        className="pl-10 bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Address */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Manzil Ma'lumotlari</h3>
                    <p className="text-gray-400">Yashash joyingiz haqida ma'lumot</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="region" className="text-gray-300">
                        Viloyat *
                      </Label>
                      <Select
                        value={formData.region}
                        onValueChange={(value) => setFormData({ ...formData, region: value })}
                      >
                        <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                          <SelectValue placeholder="Viloyatni tanlang" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                          <SelectItem value="tashkent">Toshkent</SelectItem>
                          <SelectItem value="samarkand">Samarqand</SelectItem>
                          <SelectItem value="bukhara">Buxoro</SelectItem>
                          <SelectItem value="andijan">Andijon</SelectItem>
                          <SelectItem value="fergana">Farg'ona</SelectItem>
                          <SelectItem value="namangan">Namangan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-gray-300">
                        Shahar/Tuman *
                      </Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Shahar yoki tuman"
                        required
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-gray-300">
                      To'liq manzil
                    </Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Ko'cha, uy raqami"
                      className="bg-[#0e0e1a] border-purple-900/30 text-white"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Account Setup */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Hisob Yaratish</h3>
                    <p className="text-gray-400">Xavfsiz parol va hisob turi tanlang</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accountType" className="text-gray-300">
                      Hisob turi *
                    </Label>
                    <Select
                      value={formData.accountType}
                      onValueChange={(value) => setFormData({ ...formData, accountType: value })}
                    >
                      <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                        <SelectValue placeholder="Hisob turini tanlang" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                        <SelectItem value="individual">Jismoniy shaxs</SelectItem>
                        <SelectItem value="business">Yuridik shaxs</SelectItem>
                        <SelectItem value="technician">Texnik mutaxassis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">
                      Parol *
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Xavfsiz parol yarating"
                        required
                        className="bg-[#0e0e1a] border-purple-900/30 text-white pr-10"
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
                    <p className="text-xs text-gray-400">Kamida 8 ta belgi, katta va kichik harflar, raqam</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-300">
                      Parolni tasdiqlang *
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        placeholder="Parolni qayta kiriting"
                        required
                        className="bg-[#0e0e1a] border-purple-900/30 text-white pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-white"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Preferences */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Sozlamalar</h3>
                    <p className="text-gray-400">Bildirishnomalar va shartlarni sozlang</p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/30">
                      <h4 className="text-white font-medium mb-3">Bildirishnomalar</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="email-notifications"
                            checked={formData.notifications.email}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                notifications: { ...formData.notifications, email: checked as boolean },
                              })
                            }
                          />
                          <Label htmlFor="email-notifications" className="text-gray-300">
                            Email orqali bildirishnomalar
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="sms-notifications"
                            checked={formData.notifications.sms}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                notifications: { ...formData.notifications, sms: checked as boolean },
                              })
                            }
                          />
                          <Label htmlFor="sms-notifications" className="text-gray-300">
                            SMS bildirishnomalar
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="marketing-notifications"
                            checked={formData.notifications.marketing}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                notifications: { ...formData.notifications, marketing: checked as boolean },
                              })
                            }
                          />
                          <Label htmlFor="marketing-notifications" className="text-gray-300">
                            Marketing xabarlari
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
                          required
                        />
                        <Label htmlFor="terms" className="text-gray-300">
                          <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                            Foydalanish shartlari
                          </Link>
                          ni qabul qilaman *
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="privacy"
                          checked={formData.privacy}
                          onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
                          required
                        />
                        <Label htmlFor="privacy" className="text-gray-300">
                          <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                            Maxfiylik siyosati
                          </Link>
                          bilan tanishdim *
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="border-purple-700 text-purple-400 hover:bg-purple-900/20"
                >
                  Orqaga
                </Button>

                {currentStep < 4 ? (
                  <Button type="button" onClick={handleNext} className="bg-purple-600 hover:bg-purple-700 text-white">
                    Keyingi
                  </Button>
                ) : (
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Ro'yxatdan o'tish
                  </Button>
                )}
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Allaqachon hisobingiz bormi?{" "}
                <Link href="/login" className="text-purple-400 hover:text-purple-300">
                  Kirish
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-purple-400">
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  )
}
