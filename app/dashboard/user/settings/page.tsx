"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserSidebar } from "@/components/user-sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { User, Lock, Bell, Globe, Smartphone, Mail, MapPin, Camera, Save, Eye, EyeOff } from "lucide-react"

export default function UserSettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    marketing: false,
  })

  const [security, setSecurity] = useState({
    twoFactor: false,
    loginAlerts: true,
    passwordExpiry: true,
  })

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <UserSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-white">Sozlamalar</h1>
            <p className="text-gray-400">Hisobingizni va xavfsizlik sozlamalarini boshqaring</p>
          </div>

          {/* Settings Tabs */}
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-[#12121e] border border-purple-900/30">
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                <User className="h-4 w-4 mr-2" />
                Profil
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                <Lock className="h-4 w-4 mr-2" />
                Xavfsizlik
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                <Bell className="h-4 w-4 mr-2" />
                Bildirishnomalar
              </TabsTrigger>
              <TabsTrigger
                value="preferences"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                <Globe className="h-4 w-4 mr-2" />
                Sozlamalar
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Shaxsiy Ma'lumotlar</CardTitle>
                  <CardDescription className="text-gray-400">Shaxsiy ma'lumotlaringizni yangilang</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex items-center gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" />
                      <AvatarFallback className="bg-purple-900/50 text-purple-200 text-xl">AK</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                        <Camera className="h-4 w-4 mr-2" />
                        Rasm Yuklash
                      </Button>
                      <p className="text-sm text-gray-400 mt-2">JPG, PNG yoki GIF. Maksimal 5MB.</p>
                    </div>
                  </div>

                  {/* Personal Info Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">
                        Ism
                      </Label>
                      <Input
                        id="firstName"
                        defaultValue="Aziz"
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">
                        Familiya
                      </Label>
                      <Input
                        id="lastName"
                        defaultValue="Karimov"
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="aziz@example.com"
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        defaultValue="+998 90 123 45 67"
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address" className="text-gray-300">
                        Manzil
                      </Label>
                      <Input
                        id="address"
                        defaultValue="Toshkent, O'zbekiston"
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="bio" className="text-gray-300">
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        placeholder="O'zingiz haqingizda qisqacha..."
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-purple-700 hover:bg-purple-800">
                      <Save className="h-4 w-4 mr-2" />
                      Saqlash
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Parolni O'zgartirish</CardTitle>
                  <CardDescription className="text-gray-400">
                    Hisobingiz xavfsizligi uchun kuchli parol tanlang
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword" className="text-gray-300">
                      Joriy Parol
                    </Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showPassword ? "text" : "password"}
                        className="bg-[#0e0e1a] border-purple-900/30 text-white pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="newPassword" className="text-gray-300">
                      Yangi Parol
                    </Label>
                    <Input id="newPassword" type="password" className="bg-[#0e0e1a] border-purple-900/30 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword" className="text-gray-300">
                      Parolni Tasdiqlash
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className="bg-[#0e0e1a] border-purple-900/30 text-white"
                    />
                  </div>
                  <Button className="bg-purple-700 hover:bg-purple-800">Parolni Yangilash</Button>
                </CardContent>
              </Card>

              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Xavfsizlik Sozlamalari</CardTitle>
                  <CardDescription className="text-gray-400">
                    Hisobingizni himoya qilish uchun qo'shimcha sozlamalar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">Ikki Bosqichli Autentifikatsiya</h3>
                      <p className="text-sm text-gray-400">SMS yoki email orqali qo'shimcha himoya</p>
                    </div>
                    <Switch
                      checked={security.twoFactor}
                      onCheckedChange={(checked) => setSecurity({ ...security, twoFactor: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">Kirish Haqida Ogohlantirish</h3>
                      <p className="text-sm text-gray-400">Yangi qurilmadan kirganda xabar yuborish</p>
                    </div>
                    <Switch
                      checked={security.loginAlerts}
                      onCheckedChange={(checked) => setSecurity({ ...security, loginAlerts: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">Parol Muddati</h3>
                      <p className="text-sm text-gray-400">90 kunda bir marta parol o'zgartirishni eslatish</p>
                    </div>
                    <Switch
                      checked={security.passwordExpiry}
                      onCheckedChange={(checked) => setSecurity({ ...security, passwordExpiry: checked })}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Bildirishnoma Sozlamalari</CardTitle>
                  <CardDescription className="text-gray-400">Qaysi bildirishnomalarni olishni tanlang</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-500" />
                      <div>
                        <h3 className="font-medium text-white">Email Bildirishnomalar</h3>
                        <p className="text-sm text-gray-400">Tiket yangilanishlari va muhim xabarlar</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="font-medium text-white">SMS Bildirishnomalar</h3>
                        <p className="text-sm text-gray-400">Shoshilinch bildirishnomalar uchun</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-purple-500" />
                      <div>
                        <h3 className="font-medium text-white">Push Bildirishnomalar</h3>
                        <p className="text-sm text-gray-400">Brauzer bildirishnomalari</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <div>
                        <h3 className="font-medium text-white">Marketing Xabarlari</h3>
                        <p className="text-sm text-gray-400">Yangi xizmatlar va takliflar haqida</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Umumiy Sozlamalar</CardTitle>
                  <CardDescription className="text-gray-400">Dastur ishlashi va ko'rinish sozlamalari</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="language" className="text-gray-300">
                        Til
                      </Label>
                      <Select defaultValue="uz">
                        <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a2e] border-purple-900/30">
                          <SelectItem value="uz">O'zbek tili</SelectItem>
                          <SelectItem value="ru">Русский язык</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timezone" className="text-gray-300">
                        Vaqt Zonasi
                      </Label>
                      <Select defaultValue="tashkent">
                        <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a2e] border-purple-900/30">
                          <SelectItem value="tashkent">(UTC+5) Toshkent</SelectItem>
                          <SelectItem value="moscow">(UTC+3) Moskva</SelectItem>
                          <SelectItem value="dubai">(UTC+4) Dubay</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="theme" className="text-gray-300">
                        Mavzu
                      </Label>
                      <Select defaultValue="dark">
                        <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a2e] border-purple-900/30">
                          <SelectItem value="dark">Qorong'u</SelectItem>
                          <SelectItem value="light">Yorug'</SelectItem>
                          <SelectItem value="auto">Avtomatik</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="dateFormat" className="text-gray-300">
                        Sana Formati
                      </Label>
                      <Select defaultValue="dd.mm.yyyy">
                        <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a2e] border-purple-900/30">
                          <SelectItem value="dd.mm.yyyy">DD.MM.YYYY</SelectItem>
                          <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-purple-700 hover:bg-purple-800">
                      <Save className="h-4 w-4 mr-2" />
                      Sozlamalarni Saqlash
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white text-red-400">Xavfli Zona</CardTitle>
                  <CardDescription className="text-gray-400">
                    Hisobni o'chirish va ma'lumotlarni eksport qilish
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Button variant="outline" className="border-blue-700 text-blue-400 hover:bg-blue-900/20">
                      Ma'lumotlarni Eksport Qilish
                    </Button>
                    <Button variant="outline" className="border-red-700 text-red-400 hover:bg-red-900/20">
                      Hisobni O'chirish
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Hisobni o'chirgandan keyin barcha ma'lumotlar doimiy ravishda yo'qoladi va tiklab bo'lmaydi.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
