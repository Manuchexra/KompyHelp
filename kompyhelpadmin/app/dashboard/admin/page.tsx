"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AdminSidebar } from "@/components/admin-sidebar"
import {
  Users,
  Ticket,
  Settings,
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle,
  Plus,
  Bell,
  Calendar,
  Wifi,
  Shield,
  Building2,
  Crown,
  UserCheck,
  AlertTriangle,
  DollarSign,
  BarChart3,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data with all user types
  const stats = [
    {
      title: "Jami Foydalanuvchilar",
      value: "3,247",
      change: "+12%",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-900/20",
      breakdown: { users: 2847, business: 350, admins: 50 },
    },
    {
      title: "Faol Tiketlar",
      value: "456",
      change: "-8%",
      icon: Ticket,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
    {
      title: "Bugun Hal Qilingan",
      value: "89",
      change: "+23%",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Oylik Daromad",
      value: "$45,230",
      change: "+15%",
      icon: DollarSign,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
  ]

  const allUsers = [
    {
      id: 1,
      name: "Aziz Karimov",
      email: "aziz@example.com",
      role: "User",
      status: "active",
      joinDate: "2024-01-15",
      totalTickets: 5,
      avatar: "/placeholder.svg?height=32&width=32",
      lastActive: "2 soat oldin",
    },
    {
      id: 2,
      name: "TechCorp Solutions",
      email: "admin@techcorp.com",
      role: "Business",
      status: "active",
      joinDate: "2024-01-10",
      totalTickets: 45,
      avatar: "/placeholder.svg?height=32&width=32",
      lastActive: "30 daqiqa oldin",
      employees: 150,
      plan: "Korporativ",
    },
    {
      id: 3,
      name: "Sardor Usmonov",
      email: "sardor@kompyhelp.uz",
      role: "Admin",
      status: "active",
      joinDate: "2023-12-01",
      totalTickets: 0,
      avatar: "/placeholder.svg?height=32&width=32",
      lastActive: "Onlayn",
      permissions: "Super Admin",
    },
    {
      id: 4,
      name: "Malika Tosheva",
      email: "malika@example.com",
      role: "User",
      status: "active",
      joinDate: "2024-02-20",
      totalTickets: 3,
      avatar: "/placeholder.svg?height=32&width=32",
      lastActive: "1 kun oldin",
    },
    {
      id: 5,
      name: "InnovateLab LLC",
      email: "support@innovatelab.com",
      role: "Business",
      status: "active",
      joinDate: "2024-01-05",
      totalTickets: 28,
      avatar: "/placeholder.svg?height=32&width=32",
      lastActive: "1 soat oldin",
      employees: 75,
      plan: "Professional",
    },
  ]

  const systemMetrics = [
    { name: "Server Ishlashi", value: "99.9%", status: "excellent" },
    { name: "Javob Vaqti", value: "1.2s", status: "good" },
    { name: "Faol Seanslar", value: "1,247", status: "normal" },
    { name: "Ma'lumotlar Bazasi Yuki", value: "45%", status: "good" },
    { name: "Xotira Foydalanishi", value: "67%", status: "normal" },
    { name: "Disk Maydoni", value: "23%", status: "excellent" },
  ]

  const recentActivities = [
    {
      id: 1,
      action: "Yangi biznes hisob ro'yxatdan o'tdi",
      user: "StartupHub Inc",
      time: "15 daqiqa oldin",
      type: "business",
    },
    {
      id: 2,
      action: "Yuqori ustuvorlikli tiket hal qilindi",
      user: "Tizim Admin",
      time: "30 daqiqa oldin",
      type: "resolved",
    },
    {
      id: 3,
      action: "Yangi foydalanuvchi ro'yxatdan o'tdi",
      user: "Jasur Toshev",
      time: "1 soat oldin",
      type: "user",
    },
    {
      id: 4,
      action: "Biznes rejasi yangilandi",
      user: "TechCorp Solutions",
      time: "2 soat oldin",
      type: "upgrade",
    },
    {
      id: 5,
      action: "Admin ruxsatlari berildi",
      user: "Aziza Rahimova",
      time: "3 soat oldin",
      type: "admin",
    },
  ]

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Business":
        return <Building2 className="h-4 w-4" />
      case "Admin":
        return <Crown className="h-4 w-4" />
      default:
        return <UserCheck className="h-4 w-4" />
    }
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Business":
        return <Badge className="bg-blue-900 text-blue-200">Biznes</Badge>
      case "Admin":
        return <Badge className="bg-purple-900 text-purple-200">Admin</Badge>
      default:
        return (
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            Foydalanuvchi
          </Badge>
        )
    }
  }

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "excellent":
        return <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      case "good":
        return <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      case "normal":
        return <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
      case "warning":
        return <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      case "critical":
        return <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      default:
        return <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <AdminSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Tizim Boshqaruvi</h1>
              <p className="text-gray-400">To'liq tizim ko'rinishi va boshqaruv</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <Bell className="h-4 w-4 mr-2" />
                Tizim Ogohlantirishlari
              </Button>
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analitika
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                <Settings className="h-4 w-4 mr-2" />
                Tizim Sozlamalari
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-[#12121e] border-purple-900/30 hover:border-purple-500/50 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <p className="text-xs text-gray-400">
                    <span className={stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
                      {stat.change}
                    </span>{" "}
                    o'tgan oydan
                  </p>
                  {stat.breakdown && (
                    <div className="text-xs text-gray-500 mt-1">
                      Foydalanuvchilar: {stat.breakdown.users} • Biznes: {stat.breakdown.business} • Adminlar:{" "}
                      {stat.breakdown.admins}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-[#12121e] border border-purple-900/30">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Umumiy Ko'rinish
              </TabsTrigger>
              <TabsTrigger
                value="users"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Barcha Foydalanuvchilar
              </TabsTrigger>
              <TabsTrigger
                value="system"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Tizim Salomatligi
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Biznes Hisoblar
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Sozlamalar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activities */}
                <Card className="lg:col-span-2 bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">So'nggi Tizim Faoliyatlari</CardTitle>
                    <CardDescription className="text-gray-400">
                      So'nggi tizim hodisalari va foydalanuvchi faoliyatlari
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start gap-3 p-3 border border-purple-900/20 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">{activity.action}</p>
                          <p className="text-xs text-gray-400">{activity.user}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                        <Badge variant="outline" className="border-purple-700 text-purple-300">
                          {activity.type}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Tezkor Statistika</CardTitle>
                    <CardDescription className="text-gray-400">Real vaqt tizim ko'rsatkichlari</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Onlayn Foydalanuvchilar</span>
                      <span className="text-white font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Faol Biznes</span>
                      <span className="text-white font-bold">89</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Ochiq Tiketlar</span>
                      <span className="text-white font-bold">456</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Tizim Yuki</span>
                      <span className="text-green-400 font-bold">Normal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Bugungi Daromad</span>
                      <span className="text-white font-bold">$2,340</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                      <CardTitle className="text-white">Barcha Foydalanuvchilar Boshqaruvi</CardTitle>
                      <CardDescription className="text-gray-400">
                        Barcha foydalanuvchi turlarini boshqaring: Foydalanuvchilar, Biznes va Adminlar
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Foydalanuvchilarni qidirish..."
                          className="pl-10 w-64 bg-[#0e0e1a] border-purple-900/30 text-white"
                        />
                      </div>
                      <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                        <Filter className="h-4 w-4 mr-2" />
                        Filtr
                      </Button>
                      <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Foydalanuvchi Qo'shish
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-purple-900/30">
                          <TableHead className="text-gray-400">Foydalanuvchi</TableHead>
                          <TableHead className="text-gray-400">Rol</TableHead>
                          <TableHead className="text-gray-400">Holat</TableHead>
                          <TableHead className="text-gray-400">Tiketlar</TableHead>
                          <TableHead className="text-gray-400">Oxirgi Faollik</TableHead>
                          <TableHead className="text-gray-400">Tafsilotlar</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {allUsers.map((user) => (
                          <TableRow key={user.id} className="border-purple-900/30 hover:bg-[#1a1a2e]">
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                                  <AvatarFallback className="bg-purple-900/50 text-purple-200">
                                    {user.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium text-white">{user.name}</p>
                                  <p className="text-sm text-gray-400">{user.email}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {getRoleIcon(user.role)}
                                {getRoleBadge(user.role)}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  user.status === "active"
                                    ? "bg-green-900/30 text-green-300"
                                    : "bg-gray-800 text-gray-300"
                                }
                              >
                                {user.status === "active" ? "Faol" : "Nofaol"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-gray-300">{user.totalTickets}</TableCell>
                            <TableCell className="text-gray-400">{user.lastActive}</TableCell>
                            <TableCell>
                              {user.role === "Business" && (
                                <div className="text-xs text-gray-400">
                                  <div>{user.employees} xodim</div>
                                  <div>{user.plan} rejasi</div>
                                </div>
                              )}
                              {user.role === "Admin" && <div className="text-xs text-gray-400">{user.permissions}</div>}
                              {user.role === "User" && (
                                <div className="text-xs text-gray-400">Qo'shilgan: {user.joinDate}</div>
                              )}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  align="end"
                                  className="bg-[#1a1a2e] border-purple-900/30 text-gray-200"
                                >
                                  <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                    Profilni Ko'rish
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                    Foydalanuvchini Tahrirlash
                                  </DropdownMenuItem>
                                  {user.role !== "Admin" && (
                                    <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                      {user.status === "active" ? "To'xtatish" : "Faollashtirish"}
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem className="hover:bg-red-900/30 hover:text-red-300 cursor-pointer">
                                    Foydalanuvchini O'chirish
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="system" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Tizim Salomatligi</CardTitle>
                    <CardDescription className="text-gray-400">Real vaqt tizim monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {systemMetrics.map((metric, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border border-purple-900/20 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            {getStatusIndicator(metric.status)}
                            <span className="text-gray-300">{metric.name}</span>
                          </div>
                          <span className="font-medium text-white">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Tizim Ogohlantirishlari</CardTitle>
                    <CardDescription className="text-gray-400">Muhim tizim bildirishnomalari</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 border border-yellow-900/20 rounded-lg bg-yellow-900/10">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-white">
                            Ma'lumotlar bazasi zaxira nusxasi rejalashtirilgan
                          </p>
                          <p className="text-xs text-gray-400">Texnik xizmat oynasi: 2:00 - 4:00</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 border border-blue-900/20 rounded-lg bg-blue-900/10">
                        <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-white">Xavfsizlik skaneri yakunlandi</p>
                          <p className="text-xs text-gray-400">Hech qanday zaiflik aniqlanmadi</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 border border-green-900/20 rounded-lg bg-green-900/10">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-white">Tizim yangilanishi muvaffaqiyatli</p>
                          <p className="text-xs text-gray-400">Versiya 2.1.4 joylashtirildi</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Biznes Hisoblar</CardTitle>
                  <CardDescription className="text-gray-400">
                    Korporativ va biznes mijozlarni boshqarish
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allUsers
                      .filter((user) => user.role === "Business")
                      .map((business) => (
                        <Card key={business.id} className="bg-[#0e0e1a] border-purple-900/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={business.avatar || "/placeholder.svg"} />
                                <AvatarFallback className="bg-blue-900/50 text-blue-200">
                                  {business.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg text-white">{business.name}</CardTitle>
                                <Badge className="bg-blue-900/30 text-blue-300">{business.plan}</Badge>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Xodimlar:</span>
                                <span className="text-white">{business.employees}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Tiketlar:</span>
                                <span className="text-white">{business.totalTickets}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Oxirgi Faollik:</span>
                                <span className="text-white">{business.lastActive}</span>
                              </div>
                            </div>
                            <Button className="w-full mt-4 bg-purple-700 hover:bg-purple-800" size="sm">
                              Hisobni Boshqarish
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Tizim Konfiguratsiyasi</CardTitle>
                    <CardDescription className="text-gray-400">Asosiy tizim sozlamalari</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start bg-purple-700 hover:bg-purple-800">
                      <Settings className="h-4 w-4 mr-2" />
                      Umumiy Sozlamalar
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Foydalanuvchi Boshqaruvi
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Xavfsizlik Sozlamalari
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Bell className="h-4 w-4 mr-2" />
                      Bildirishnoma Sozlamalari
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Texnik Xizmat</CardTitle>
                    <CardDescription className="text-gray-400">Tizim texnik xizmat vositalari</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Texnik Xizmat Rejalashtirish
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Tizim Hisobotlari
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Wifi className="h-4 w-4 mr-2" />
                      Tarmoq Diagnostikasi
                    </Button>
                    <Button
                      className="w-full justify-start text-red-400 border-red-700 hover:bg-red-900/20"
                      variant="outline"
                    >
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Favqulodda O'chirish
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
