"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Building2, Shield, Bell, Key, CreditCard, Users, Globe, Mail, Save, Upload, Plus, Settings, Eye, EyeOff, Check, X, AlertTriangle, Zap, Crown, Star, Download, Copy, RefreshCw, Trash2, Edit, MoreHorizontal } from 'lucide-react'
import { toast } from "@/hooks/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function BusinessSettingsPage() {
  const [loading, setLoading] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [companyData, setCompanyData] = useState({
    name: "TechCorp Solutions",
    description: "Texnologiya yechimlarini taqdim etuvchi kompaniya",
    website: "https://techcorp.uz",
    email: "info@techcorp.uz",
    phone: "+998 90 123 45 67",
    address: "Toshkent, O'zbekiston",
    logo: "/placeholder.svg?height=100&width=100",
    industry: "technology",
    size: "50-100",
    founded: "2020",
  })

  const [notifications, setNotifications] = useState({
    emailTickets: true,
    emailReports: true,
    smsAlerts: false,
    pushNotifications: true,
    weeklyReports: true,
    monthlyBilling: true,
    securityAlerts: true,
    marketingEmails: false,
  })

  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: "30",
    ipWhitelist: "",
    passwordPolicy: "strong",
    loginNotifications: true,
    deviceTracking: true,
  })

  const handleSave = async (section: string) => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "✅ Muvaffaqiyatli saqlandi",
        description: `${section} bo'limi yangilandi.`,
      })
    } catch (error) {
      toast({
        title: "❌ Xatolik",
        description: "Sozlamalarni saqlashda xatolik yuz berdi.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const copyApiKey = () => {
    navigator.clipboard.writeText("sk_live_1234567890abcdef")
    toast({
      title: "📋 Nusxalandi",
      description: "API kaliti clipboardga nusxalandi.",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sozlamalar
            </h1>
            <p className="text-lg text-muted-foreground">Kompaniya sozlamalarini boshqaring va sozlang</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Business Pro
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-green-200 text-green-700">
              <Crown className="w-4 h-4 mr-2" />
              Premium
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="company" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6 h-14 bg-white dark:bg-slate-800 shadow-lg rounded-xl p-1">
            <TabsTrigger value="company" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all">
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Kompaniya</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Xavfsizlik</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Bildirishnomalar</span>
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all">
              <Key className="w-4 h-4" />
              <span className="hidden sm:inline">API</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Hisob-kitob</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Jamoa</span>
            </TabsTrigger>
          </TabsList>

          {/* Kompaniya Ma'lumotlari */}
          <TabsContent value="company" className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Building2 className="w-6 h-6" />
                  Kompaniya Ma'lumotlari
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Kompaniya haqidagi asosiy ma'lumotlarni tahrirlang va yangilang
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Logo Section */}
                <div className="flex items-center gap-8 p-6 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-xl">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                    <AvatarImage src={companyData.logo || "/placeholder.svg"} alt="Company Logo" />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      TC
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-3">
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      <Upload className="w-4 h-4 mr-2" />
                      Logo yuklash
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      PNG, JPG yoki SVG formatida. Maksimal 5MB. Tavsiya etilgan o'lcham: 200x200px
                    </p>
                  </div>
                </div>

                {/* Company Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="companyName" className="text-sm font-semibold">Kompaniya nomi *</Label>
                    <Input
                      id="companyName"
                      value={companyData.name}
                      onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                      className="h-12 border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="industry" className="text-sm font-semibold">Soha</Label>
                    <Select value={companyData.industry} onValueChange={(value) => setCompanyData({ ...companyData, industry: value })}>
                      <SelectTrigger className="h-12 border-2 focus:border-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Texnologiya</SelectItem>
                        <SelectItem value="finance">Moliya</SelectItem>
                        <SelectItem value="healthcare">Sog'liqni saqlash</SelectItem>
                        <SelectItem value="education">Ta'lim</SelectItem>
                        <SelectItem value="retail">Chakana savdo</SelectItem>
                        <SelectItem value="manufacturing">Ishlab chiqarish</SelectItem>
                        <SelectItem value="other">Boshqa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="website" className="text-sm font-semibold">Veb-sayt</Label>
                    <Input
                      id="website"
                      type="url"
                      value={companyData.website}
                      onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
                      className="h-12 border-2 focus:border-blue-500 transition-colors"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="size" className="text-sm font-semibold">Kompaniya hajmi</Label>
                    <Select value={companyData.size} onValueChange={(value) => setCompanyData({ ...companyData, size: value })}>
                      <SelectTrigger className="h-12 border-2 focus:border-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 xodim</SelectItem>
                        <SelectItem value="11-50">11-50 xodim</SelectItem>
                        <SelectItem value="51-100">51-100 xodim</SelectItem>
                        <SelectItem value="101-500">101-500 xodim</SelectItem>
                        <SelectItem value="500+">500+ xodim</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={companyData.email}
                      onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
                      className="h-12 border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-semibold">Telefon</Label>
                    <Input
                      id="phone"
                      value={companyData.phone}
                      onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
                      className="h-12 border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="description" className="text-sm font-semibold">Kompaniya tavsifi</Label>
                  <Textarea
                    id="description"
                    value={companyData.description}
                    onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })}
                    rows={4}
                    className="border-2 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Kompaniyangiz haqida qisqacha ma'lumot..."
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="address" className="text-sm font-semibold">Manzil</Label>
                  <Input
                    id="address"
                    value={companyData.address}
                    onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
                    className="h-12 border-2 focus:border-blue-500 transition-colors"
                    placeholder="To'liq manzil..."
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={() => handleSave("Kompaniya ma'lumotlari")} 
                    disabled={loading}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? "Saqlanmoqda..." : "Saqlash"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Xavfsizlik */}
          <TabsContent value="security" className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Shield className="w-6 h-6" />
                  Xavfsizlik Sozlamalari
                </CardTitle>
                <CardDescription className="text-green-100">
                  Hisobingiz xavfsizligini ta'minlang va himoya qiling
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Security Status */}
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Xavfsizlik holati</h3>
                    <Badge className="bg-green-500 text-white">
                      <Check className="w-3 h-3 mr-1" />
                      Yaxshi himoyalangan
                    </Badge>
                  </div>
                  <Progress value={85} className="h-3 mb-2" />
                  <p className="text-sm text-green-700 dark:text-green-300">85% - Xavfsizlik darajasi yaxshi</p>
                </div>

                {/* Security Settings */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Label className="text-base font-semibold">Ikki faktorli autentifikatsiya (2FA)</Label>
                        <Badge variant="secondary" className="text-xs">Tavsiya etiladi</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Qo'shimcha xavfsizlik qatlami qo'shing</p>
                    </div>
                    <Switch
                      checked={security.twoFactor}
                      onCheckedChange={(checked) => setSecurity({ ...security, twoFactor: checked })}
                      className="data-[state=checked]:bg-green-500"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="space-y-1">
                      <Label className="text-base font-semibold">Login bildirishnomalari</Label>
                      <p className="text-sm text-muted-foreground">Yangi qurilmadan kirishda xabar olish</p>
                    </div>
                    <Switch
                      checked={security.loginNotifications}
                      onCheckedChange={(checked) => setSecurity({ ...security, loginNotifications: checked })}
                      className="data-[state=checked]:bg-green-500"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="space-y-1">
                      <Label className="text-base font-semibold">Qurilmalarni kuzatish</Label>
                      <p className="text-sm text-muted-foreground">Faol qurilmalarni kuzatib boring</p>
                    </div>
                    <Switch
                      checked={security.deviceTracking}
                      onCheckedChange={(checked) => setSecurity({ ...security, deviceTracking: checked })}
                      className="data-[state=checked]:bg-green-500"
                    />
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="sessionTimeout" className="text-sm font-semibold">Sessiya tugash vaqti</Label>
                    <Select
                      value={security.sessionTimeout}
                      onValueChange={(value) => setSecurity({ ...security, sessionTimeout: value })}
                    >
                      <SelectTrigger className="h-12 border-2 focus:border-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 daqiqa</SelectItem>
                        <SelectItem value="30">30 daqiqa</SelectItem>
                        <SelectItem value="60">1 soat</SelectItem>
                        <SelectItem value="120">2 soat</SelectItem>
                        <SelectItem value="480">8 soat</SelectItem>
                        <SelectItem value="never">Hech qachon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="passwordPolicy" className="text-sm font-semibold">Parol siyosati</Label>
                    <Select
                      value={security.passwordPolicy}
                      onValueChange={(value) => setSecurity({ ...security, passwordPolicy: value })}
                    >
                      <SelectTrigger className="h-12 border-2 focus:border-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Asosiy (8 belgi)</SelectItem>
                        <SelectItem value="strong">Kuchli (12 belgi, maxsus belgilar)</SelectItem>
                        <SelectItem value="enterprise">Korporativ (16 belgi, murakkab)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="ipWhitelist" className="text-sm font-semibold">Ruxsat etilgan IP manzillar</Label>
                  <Textarea
                    id="ipWhitelist"
                    placeholder="192.168.1.1&#10;10.0.0.1&#10;203.0.113.1"
                    value={security.ipWhitelist}
                    onChange={(e) => setSecurity({ ...security, ipWhitelist: e.target.value })}
                    rows={4}
                    className="border-2 focus:border-blue-500 transition-colors resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    Har bir IP manzilni yangi qatorda kiriting. Bo'sh qoldirish barcha IP manzillarga ruxsat beradi.
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={() => handleSave("Xavfsizlik sozlamalari")} 
                    disabled={loading}
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? "Saqlanmoqda..." : "Saqlash"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bildirishnomalar */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Bell className="w-6 h-6" />
                  Bildirishnoma Sozlamalari
                </CardTitle>
                <CardDescription className="text-orange-100">
                  Qanday bildirishnomalar olishni tanlang va sozlang
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Notification Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Notifications */}
                  <div className="space-y-4 p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-500" />
                      Email Bildirishnomalari
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Tiket bildirishnomalari</Label>
                          <p className="text-xs text-muted-foreground">Yangi tiketlar haqida xabar olish</p>
                        </div>
                        <Switch
                          checked={notifications.emailTickets}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, emailTickets: checked })}
                          className="data-[state=checked]:bg-blue-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Hisobotlar</Label>
                          <p className="text-xs text-muted-foreground">Kunlik va haftalik hisobotlar</p>
                        </div>
                        <Switch
                          checked={notifications.emailReports}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, emailReports: checked })}
                          className="data-[state=checked]:bg-blue-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Xavfsizlik ogohlantirishlari</Label>
                          <p className="text-xs text-muted-foreground">Muhim xavfsizlik hodisalari</p>
                        </div>
                        <Switch
                          checked={notifications.securityAlerts}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, securityAlerts: checked })}
                          className="data-[state=checked]:bg-red-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Marketing xabarlari</Label>
                          <p className="text-xs text-muted-foreground">Yangi xususiyatlar va takliflar</p>
                        </div>
                        <Switch
                          checked={notifications.marketingEmails}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, marketingEmails: checked })}
                          className="data-[state=checked]:bg-purple-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Other Notifications */}
                  <div className="space-y-4 p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      Boshqa Bildirishnomalar
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">SMS ogohlantirishlar</Label>
                          <p className="text-xs text-muted-foreground">Muhim hodisalar haqida SMS</p>
                        </div>
                        <Switch
                          checked={notifications.smsAlerts}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, smsAlerts: checked })}
                          className="data-[state=checked]:bg-green-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Push bildirishnomalar</Label>
                          <p className="text-xs text-muted-foreground">Brauzer push xabarlari</p>
                        </div>
                        <Switch
                          checked={notifications.pushNotifications}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, pushNotifications: checked })}
                          className="data-[state=checked]:bg-indigo-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Haftalik hisobotlar</Label>
                          <p className="text-xs text-muted-foreground">Haftalik faoliyat hisoboti</p>
                        </div>
                        <Switch
                          checked={notifications.weeklyReports}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })}
                          className="data-[state=checked]:bg-teal-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">Oylik hisob-kitob</Label>
                          <p className="text-xs text-muted-foreground">To'lov va hisob-kitob xabarlari</p>
                        </div>
                        <Switch
                          checked={notifications.monthlyBilling}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, monthlyBilling: checked })}
                          className="data-[state=checked]:bg-pink-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={() => handleSave("Bildirishnoma sozlamalari")} 
                    disabled={loading}
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? "Saqlanmoqda..." : "Saqlash"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Sozlamalari */}
          <TabsContent value="api" className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Key className="w-6 h-6" />
                  API Sozlamalari
                </CardTitle>
                <CardDescription className="text-purple-100">
                  API kalitlarini boshqaring va integratsiyalarni sozlang
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* API Key Management */}
                <div className="space-y-6">
                  <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">API Kaliti</h3>
                        <p className="text-sm text-purple-600 dark:text-purple-300">Tashqi ilovalar uchun API kaliti</p>
                      </div>
                      <Badge className="bg-purple-500 text-white">Faol</Badge>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <code className="flex-1 text-sm bg-white dark:bg-slate-800 px-4 py-3 rounded-lg border font-mono">
                        {showApiKey ? "sk_live_1234567890abcdef1234567890abcdef" : "••••••••••••••••••••••••••••••••"}
                      </code>
                      <Button variant="outline" size="sm" onClick={() => setShowApiKey(!showApiKey)}>
                        {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button variant="outline" size="sm" onClick={copyApiKey}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Yangi kalit yaratish
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4 mr-2" />
                            O'chirish
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>API kalitini o'chirish</AlertDialogTitle>
                            <AlertDialogDescription>
                              Bu amalni bekor qilib bo'lmaydi. API kaliti o'chirilgandan so'ng, uni ishlatuvchi barcha ilovalar ishlamay qoladi.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Bekor qilish</AlertDialogCancel>
                            <AlertDialogAction className="bg-red-500 hover:bg-red-600">O'chirish</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>

                  {/* API Settings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="webhookUrl" className="text-sm font-semibold">Webhook URL</Label>
                      <Input
                        id="webhookUrl"
                        placeholder="https://yourcompany.com/webhook"
                        className="h-12 border-2 focus:border-purple-500 transition-colors"
                      />
                      <p className="text-sm text-muted-foreground">
                        Hodisalar haqida bildirishnomalar olish uchun webhook URL
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-semibold">API cheklovlari</Label>
                      <Select defaultValue="1000">
                        <SelectTrigger className="h-12 border-2 focus:border-purple-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100">100 so'rov/soat</SelectItem>
                          <SelectItem value="500">500 so'rov/soat</SelectItem>
                          <SelectItem value="1000">1000 so'rov/soat</SelectItem>
                          <SelectItem value="5000">5000 so'rov/soat</SelectItem>
                          <SelectItem value="unlimited">Cheklovsiz</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Active Integrations */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Faol Integratsiyalar</h3>
                    <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Integratsiya qo'shish
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Slack Integration", description: "Tiketlar haqida Slack da xabar olish", icon: Globe, color: "blue", status: "Faol" },
                      { name: "Email Integration", description: "Email orqali tiket yaratish", icon: Mail, color: "green", status: "Faol" },
                      { name: "Telegram Bot", description: "Telegram orqali bildirishnomalar", icon: Bell, color: "cyan", status: "Nofaol" },
                      { name: "Webhook Integration", description: "Custom webhook integratsiyasi", icon: Zap, color: "yellow", status: "Sozlanmoqda" },
                    ].map((integration, index) => (
                      <div key={index} className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-purple-300 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 bg-${integration.color}-100 dark:bg-${integration.color}-900/20 rounded-lg flex items-center justify-center`}>
                              <integration.icon className={`w-5 h-5 text-${integration.color}-600`} />
                            </div>
                            <div>
                              <p className="font-medium">{integration.name}</p>
                              <p className="text-sm text-muted-foreground">{integration.description}</p>
                            </div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Tahrirlash
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Settings className="w-4 h-4 mr-2" />
                                Sozlamalar
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" />
                                O'chirish
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <Badge 
                          variant={integration.status === "Faol" ? "default" : integration.status === "Nofaol" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {integration.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={() => handleSave("API sozlamalari")} 
                    disabled={loading}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? "Saqlanmoqda..." : "Saqlash"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hisob-kitob */}
          <TabsContent value="billing" className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <CreditCard className="w-6 h-6" />
                  Hisob-kitob va To'lovlar
                </CardTitle>
                <CardDescription className="text-emerald-100">
                  To'lov ma'lumotlari va hisob-kitobni boshqaring
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Current Plan */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                    <CardContent className="p-6 text-center">
                      <Crown className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground mb-1">Joriy tarif</p>
                      <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">Business Pro</p>
                      <p className="text-lg font-semibold text-emerald-600">$99/oy</p>
                      <Badge className="mt-2 bg-emerald-500 text-white">Faol</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Keyingi to'lov</p>
                      <p className="text-2xl font-bold">15 Yan</p>
                      <p className="text-sm text-muted-foreground">2024</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Umumiy xarajat</p>
                      <p className="text-2xl font-bold">$1,188</p>
                      <p className="text-sm text-muted-foreground">Bu yil</p>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Payment Method */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">To'lov usuli</h3>
                    <Button variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Yangi karta qo'shish
                    </Button>
                  </div>
                  
                  <div className="p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">•••• •••• •••• 4242</p>
                          <p className="text-sm text-muted-foreground">Visa • Tugaydi 12/25</p>
                          <Badge variant="secondary" className="mt-1">Asosiy</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Tahrirlash
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Billing History */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Hisob-kitob tarixi</h3>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Barchasini yuklab olish
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {[
                      { date: "1 Yan 2024", amount: "$99.00", status: "To'langan", invoice: "INV-2024-001" },
                      { date: "1 Dek 2023", amount: "$99.00", status: "To'langan", invoice: "INV-2023-012" },
                      { date: "1 Noy 2023", amount: "$99.00", status: "To'langan", invoice: "INV-2023-011" },
                      { date: "1 Okt 2023", amount: "$99.00", status: "To'langan", invoice: "INV-2023-010" },
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-emerald-300 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                            <Check className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="font-semibold">{invoice.date}</p>
                            <p className="text-sm text-muted-foreground">Business Pro • {invoice.invoice}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-semibold text-lg">{invoice.amount}</p>
                            <Badge className="bg-emerald-500 text-white">{invoice.status}</Badge>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={() => handleSave("Hisob-kitob sozlamalari")} 
                    disabled={loading}
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? "Saqlanmoqda..." : "Saqlash"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Jamoa */}
          <TabsContent value="team" className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="w-6 h-6" />
                  Jamoa A'zolari
                </CardTitle>
                <CardDescription className="text-indigo-100">
                  Jamoa a'zolarini boshqaring va huquqlarni belgilang
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Team Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">5</p>
                      <p className="text-sm text-muted-foreground">Jami a'zolar</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold text-green-700 dark:text-green-300">3</p>
                      <p className="text-sm text-muted-foreground">Faol a'zolar</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">1</p>
                      <p className="text-sm text-muted-foreground">Kutilmoqda</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold">1</p>
                      <p className="text-sm text-muted-foreground">Nofaol</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Add Member */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">Jamoa a'zolari</h3>
                    <p className="text-sm text-muted-foreground">A'zolarni boshqaring va huquqlarni belgilang</p>
                  </div>
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    A'zo qo'shish
                  </Button>
                </div>

                {/* Team Members */}
                <div className="space-y-4">
                  {[
                    { name: "Alisher Karimov", email: "alisher@techcorp.uz", role: "Admin", status: "Faol", avatar: "AK", lastActive: "2 daqiqa oldin" },
                    { name: "Malika Tosheva", email: "malika@techcorp.uz", role: "Manager", status: "Faol", avatar: "MT", lastActive: "5 daqiqa oldin" },
                    { name: "Bobur Rahimov", email: "bobur@techcorp.uz", role: "Support", status: "Faol", avatar: "BR", lastActive: "1 soat oldin" },
                    { name: "Nilufar Saidova", email: "nilufar@techcorp.uz", role: "Support", status: "Nofaol", avatar: "NS", lastActive: "3 kun oldin" },
                    { name: "Jasur Abdullayev", email: "jasur@techcorp.uz", role: "Viewer", status: "Kutilmoqda", avatar: "JA", lastActive: "Hech qachon" },
                  ].map((member, index) => (
                    <div key={index} className="p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-indigo-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12 border-2 border-white shadow-lg">
                            <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                            <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold">
                              {member.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-lg">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                            <p className="text-xs text-muted-foreground">Son faollik: {member.lastActive}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <Badge 
                              variant={
                                member.status === "Faol" ? "default" : 
                                member.status === "Nofaol" ? "secondary" : 
                                "outline"
                              }
                              className={
                                member.status === "Faol" ? "bg-green-500 text-white" :
                                member.status === "Nofaol" ? "bg-slate-500 text-white" :
                                "border-yellow-500 text-yellow-700"
                              }
                            >
                              {member.status}
                            </Badge>
                          </div>
                          <Select defaultValue={member.role.toLowerCase()}>
                            <SelectTrigger className="w-32 border-2 focus:border-indigo-500">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="manager">Manager</SelectItem>
                              <SelectItem value="support">Support</SelectItem>
                              <SelectItem value="viewer">Viewer</SelectItem>
                            </SelectContent>
                          </Select>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Tahrirlash
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Settings className="w-4 h-4 mr-2" />
                                Huquqlar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="w-4 h-4 mr-2" />
                                Xabar yuborish
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" />
                                O'chirish
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={() => handleSave("Jamoa sozlamalari")} 
                    disabled={loading}
                    className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? "Saqlanmoqda..." : "Saqlash"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
