"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Settings, Save, RefreshCw, Shield, Mail, Database, Bell, Eye, EyeOff } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminSettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [showDbPassword, setShowDbPassword] = useState(false)

  const [generalSettings, setGeneralSettings] = useState({
    siteName: "KompyHelp",
    siteDescription: "Professional IT yordam xizmati",
    adminEmail: "admin@kompyhelp.uz",
    supportEmail: "support@kompyhelp.uz",
    timezone: "Asia/Tashkent",
    language: "uz",
    maintenanceMode: false,
    registrationEnabled: true,
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordMinLength: 8,
    maxLoginAttempts: 5,
    apiKeyRotation: true,
    sslRequired: true,
  })

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: "smtp.gmail.com",
    smtpPort: "587",
    smtpUsername: "noreply@kompyhelp.uz",
    smtpPassword: "••••••••••••",
    emailFromName: "KompyHelp Support",
    emailFromAddress: "noreply@kompyhelp.uz",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    newTicketNotification: true,
    systemAlerts: true,
    maintenanceNotifications: true,
    userRegistrationNotification: true,
    dailyReports: true,
    weeklyReports: true,
  })

  const handleSaveSettings = (section: string) => {
    // Save settings logic here
    console.log(`Saving ${section} settings`)
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <AdminSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Tizim Sozlamalari</h1>
              <p className="text-gray-400">Admin panel va tizim sozlamalarini boshqaring</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <RefreshCw className="h-4 w-4 mr-2" />
                Qayta Yuklash
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                <Save className="h-4 w-4 mr-2" />
                Barcha Sozlamalarni Saqlash
              </Button>
            </div>
          </div>

          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="bg-[#12121e] border border-purple-900/30">
              <TabsTrigger
                value="general"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                <Settings className="h-4 w-4 mr-2" />
                Umumiy
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                <Shield className="h-4 w-4 mr-2" />
                Xavfsizlik
              </TabsTrigger>
              <TabsTrigger
                value="email"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </TabsTrigger>
              <TabsTrigger
                value="database"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                <Database className="h-4 w-4 mr-2" />
                Ma'lumotlar Bazasi
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                <Bell className="h-4 w-4 mr-2" />
                Bildirishnomalar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Umumiy Sozlamalar</CardTitle>
                  <CardDescription className="text-gray-400">Sayt va tizimning asosiy sozlamalari</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="siteName" className="text-gray-300">
                        Sayt Nomi
                      </Label>
                      <Input
                        id="siteName"
                        value={generalSettings.siteName}
                        onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="adminEmail" className="text-gray-300">
                        Admin Email
                      </Label>
                      <Input
                        id="adminEmail"
                        type="email"
                        value={generalSettings.adminEmail}
                        onChange={(e) => setGeneralSettings({ ...generalSettings, adminEmail: e.target.value })}
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="siteDescription" className="text-gray-300">
                      Sayt Tavsifi
                    </Label>
                    <Textarea
                      id="siteDescription"
                      value={generalSettings.siteDescription}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
                      className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="timezone" className="text-gray-300">
                        Vaqt Zonasi
                      </Label>
                      <Select value={generalSettings.timezone}>
                        <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                          <SelectItem value="Asia/Tashkent">Asia/Tashkent</SelectItem>
                          <SelectItem value="UTC">UTC</SelectItem>
                          <SelectItem value="Europe/Moscow">Europe/Moscow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language" className="text-gray-300">
                        Til
                      </Label>
                      <Select value={generalSettings.language}>
                        <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                          <SelectItem value="uz">O'zbek</SelectItem>
                          <SelectItem value="ru">Русский</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-gray-300">Texnik Xizmat Rejimi</Label>
                        <p className="text-sm text-gray-400">Saytni texnik xizmat rejimiga o'tkazish</p>
                      </div>
                      <Switch
                        checked={generalSettings.maintenanceMode}
                        onCheckedChange={(checked) =>
                          setGeneralSettings({ ...generalSettings, maintenanceMode: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-gray-300">Ro'yxatdan O'tishni Yoqish</Label>
                        <p className="text-sm text-gray-400">Yangi foydalanuvchilar ro'yxatdan o'ta oladi</p>
                      </div>
                      <Switch
                        checked={generalSettings.registrationEnabled}
                        onCheckedChange={(checked) =>
                          setGeneralSettings({ ...generalSettings, registrationEnabled: checked })
                        }
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => handleSaveSettings("general")}
                    className="bg-purple-700 hover:bg-purple-800 text-white"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Umumiy Sozlamalarni Saqlash
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Xavfsizlik Sozlamalari</CardTitle>
                  <CardDescription className="text-gray-400">
                    Tizim xavfsizligi va autentifikatsiya sozlamalari
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="sessionTimeout" className="text-gray-300">
                        Sessiya Tugash Vaqti (daqiqa)
                      </Label>
                      <Input
                        id="sessionTimeout"
                        type="number"
                        value={securitySettings.sessionTimeout}
                        onChange={(e) =>
                          setSecuritySettings({ ...securitySettings, sessionTimeout: Number.parseInt(e.target.value) })
                        }
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passwordMinLength" className="text-gray-300">
                        Parol Minimal Uzunligi
                      </Label>
                      <Input
                        id="passwordMinLength"
                        type="number"
                        value={securitySettings.passwordMinLength}
                        onChange={(e) =>
                          setSecuritySettings({
                            ...securitySettings,
                            passwordMinLength: Number.parseInt(e.target.value),
                          })
                        }
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxLoginAttempts" className="text-gray-300">
                      Maksimal Kirish Urinishlari
                    </Label>
                    <Input
                      id="maxLoginAttempts"
                      type="number"
                      value={securitySettings.maxLoginAttempts}
                      onChange={(e) =>
                        setSecuritySettings({ ...securitySettings, maxLoginAttempts: Number.parseInt(e.target.value) })
                      }
                      className="bg-[#0e0e1a] border-purple-900/30 text-white"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-gray-300">Ikki Faktorli Autentifikatsiya</Label>
                        <p className="text-sm text-gray-400">Admin hisoblar uchun 2FA ni yoqish</p>
                      </div>
                      <Switch
                        checked={securitySettings.twoFactorAuth}
                        onCheckedChange={(checked) =>
                          setSecuritySettings({ ...securitySettings, twoFactorAuth: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-gray-300">API Kalit Rotatsiyasi</Label>
                        <p className="text-sm text-gray-400">API kalitlarni avtomatik yangilash</p>
                      </div>
                      <Switch
                        checked={securitySettings.apiKeyRotation}
                        onCheckedChange={(checked) =>
                          setSecuritySettings({ ...securitySettings, apiKeyRotation: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-gray-300">SSL Majburiy</Label>
                        <p className="text-sm text-gray-400">Barcha ulanishlar uchun HTTPS talab qilish</p>
                      </div>
                      <Switch
                        checked={securitySettings.sslRequired}
                        onCheckedChange={(checked) =>
                          setSecuritySettings({ ...securitySettings, sslRequired: checked })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">API Kaliti</Label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Input
                          type={showApiKey ? "text" : "password"}
                          value="sk-1234567890abcdef1234567890abcdef"
                          readOnly
                          className="bg-[#0e0e1a] border-purple-900/30 text-white pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                        Yangilash
                      </Button>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleSaveSettings("security")}
                    className="bg-purple-700 hover:bg-purple-800 text-white"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Xavfsizlik Sozlamalarni Saqlash
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="email" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Email Sozlamalari</CardTitle>
                  <CardDescription className="text-gray-400">SMTP server va email sozlamalari</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="smtpHost" className="text-gray-300">
                        SMTP Host
                      </Label>
                      <Input
                        id="smtpHost"
                        value={emailSettings.smtpHost}
                        onChange={(e) => setEmailSettings({ ...emailSettings, smtpHost: e.target.value })}
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtpPort" className="text-gray-300">
                        SMTP Port
                      </Label>
                      <Input
                        id="smtpPort"
                        value={emailSettings.smtpPort}
                        onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="smtpUsername" className="text-gray-300">
                        SMTP Foydalanuvchi Nomi
                      </Label>
                      <Input
                        id="smtpUsername"
                        value={emailSettings.smtpUsername}
                        onChange={(e) => setEmailSettings({ ...emailSettings, smtpUsername: e.target.value })}
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtpPassword" className="text-gray-300">
                        SMTP Parol
                      </Label>
                      <Input
                        id="smtpPassword"
                        type="password"
                        value={emailSettings.smtpPassword}
                        onChange={(e) => setEmailSettings({ ...emailSettings, smtpPassword: e.target.value })}
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="emailFromName" className="text-gray-300">
                        Jo'natuvchi Nomi
                      </Label>
                      <Input
                        id="emailFromName"
                        value={emailSettings.emailFromName}
                        onChange={(e) => setEmailSettings({ ...emailSettings, emailFromName: e.target.value })}
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emailFromAddress" className="text-gray-300">
                        Jo'natuvchi Email
                      </Label>
                      <Input
                        id="emailFromAddress"
                        type="email"
                        value={emailSettings.emailFromAddress}
                        onChange={(e) => setEmailSettings({ ...emailSettings, emailFromAddress: e.target.value })}
                        className="bg-[#0e0e1a] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleSaveSettings("email")}
                      className="bg-purple-700 hover:bg-purple-800 text-white"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Email Sozlamalarni Saqlash
                    </Button>
                    <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                      Test Email Jo'natish
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="database" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Ma'lumotlar Bazasi Sozlamalari</CardTitle>
                  <CardDescription className="text-gray-400">
                    Ma'lumotlar bazasi ulanishi va zaxira sozlamalari
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Ma'lumotlar Bazasi Turi</Label>
                      <Input value="PostgreSQL" readOnly className="bg-[#0e0e1a] border-purple-900/30 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Host</Label>
                      <Input value="localhost:5432" readOnly className="bg-[#0e0e1a] border-purple-900/30 text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Ma'lumotlar Bazasi Nomi</Label>
                      <Input value="kompyhelp_db" readOnly className="bg-[#0e0e1a] border-purple-900/30 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Foydalanuvchi</Label>
                      <Input value="kompyhelp_user" readOnly className="bg-[#0e0e1a] border-purple-900/30 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">Parol</Label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Input
                          type={showDbPassword ? "text" : "password"}
                          value="••••••••••••"
                          readOnly
                          className="bg-[#0e0e1a] border-purple-900/30 text-white pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                          onClick={() => setShowDbPassword(!showDbPassword)}
                        >
                          {showDbPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                        Yangilash
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Zaxira Nusxa Sozlamalari</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-gray-300">Avtomatik Zaxira Vaqti</Label>
                        <Select defaultValue="02:00">
                          <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                            <SelectItem value="01:00">01:00</SelectItem>
                            <SelectItem value="02:00">02:00</SelectItem>
                            <SelectItem value="03:00">03:00</SelectItem>
                            <SelectItem value="04:00">04:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-300">Zaxira Saqlash Muddati (kun)</Label>
                        <Input
                          type="number"
                          defaultValue="30"
                          className="bg-[#0e0e1a] border-purple-900/30 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleSaveSettings("database")}
                      className="bg-purple-700 hover:bg-purple-800 text-white"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Ma'lumotlar Bazasi Sozlamalarni Saqlash
                    </Button>
                    <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                      Ulanishni Tekshirish
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Bildirishnoma Sozlamalari</CardTitle>
                  <CardDescription className="text-gray-400">
                    Email va tizim bildirishnomalarini sozlang
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Email Bildirishnomalar</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-300">Yangi Tiket Bildirishnomasi</Label>
                          <p className="text-sm text-gray-400">Yangi tiket yaratilganda email jo'natish</p>
                        </div>
                        <Switch
                          checked={notificationSettings.newTicketNotification}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, newTicketNotification: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-300">Tizim Ogohlantirishlari</Label>
                          <p className="text-sm text-gray-400">Tizim xatoliklari va ogohlantirishlar</p>
                        </div>
                        <Switch
                          checked={notificationSettings.systemAlerts}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, systemAlerts: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-300">Texnik Xizmat Bildirishnomasi</Label>
                          <p className="text-sm text-gray-400">Rejalashtirilgan texnik xizmat haqida</p>
                        </div>
                        <Switch
                          checked={notificationSettings.maintenanceNotifications}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, maintenanceNotifications: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-300">Foydalanuvchi Ro'yxatdan O'tishi</Label>
                          <p className="text-sm text-gray-400">Yangi foydalanuvchi ro'yxatdan o'tganda</p>
                        </div>
                        <Switch
                          checked={notificationSettings.userRegistrationNotification}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, userRegistrationNotification: checked })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Hisobotlar</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-300">Kunlik Hisobotlar</Label>
                          <p className="text-sm text-gray-400">Har kuni tizim hisobotini jo'natish</p>
                        </div>
                        <Switch
                          checked={notificationSettings.dailyReports}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, dailyReports: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-300">Haftalik Hisobotlar</Label>
                          <p className="text-sm text-gray-400">Har hafta batafsil hisobotni jo'natish</p>
                        </div>
                        <Switch
                          checked={notificationSettings.weeklyReports}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, weeklyReports: checked })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleSaveSettings("notifications")}
                    className="bg-purple-700 hover:bg-purple-800 text-white"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Bildirishnoma Sozlamalarni Saqlash
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
