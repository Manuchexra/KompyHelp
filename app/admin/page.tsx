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
  TrendingUp,
  Settings,
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle,
  Computer,
  Smartphone,
  Monitor,
  Plus,
  Bell,
  Calendar,
  Wifi,
  Shield,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = [
    {
      title: "Jami Foydalanuvchilar",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-900/20",
    },
    {
      title: "Faol Tiketlar",
      value: "156",
      change: "-8%",
      icon: Ticket,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
    {
      title: "Hal qilingan",
      value: "1,234",
      change: "+23%",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Oylik Daromad",
      value: "$12,450",
      change: "+15%",
      icon: TrendingUp,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
  ]

  const tickets = [
    {
      id: "T-001",
      user: "Aziz Karimov",
      email: "aziz@example.com",
      issue: "Kompyuter ishlamayapti",
      status: "open",
      priority: "high",
      device: "laptop",
      created: "2 soat oldin",
      assignedTo: "Sardor Usmonov",
    },
    {
      id: "T-002",
      user: "Malika Tosheva",
      email: "malika@example.com",
      issue: "Internet ulanmayapti",
      status: "in-progress",
      priority: "medium",
      device: "desktop",
      created: "4 soat oldin",
      assignedTo: "Aziza Rahimova",
    },
    {
      id: "T-003",
      user: "Bobur Aliyev",
      email: "bobur@example.com",
      issue: "Telefon tezligi sekin",
      status: "resolved",
      priority: "low",
      device: "mobile",
      created: "1 kun oldin",
      assignedTo: "Sardor Usmonov",
    },
    {
      id: "T-004",
      user: "Dilnoza Karimova",
      email: "dilnoza@example.com",
      issue: "Virus tozalash kerak",
      status: "open",
      priority: "high",
      device: "laptop",
      created: "30 daqiqa oldin",
      assignedTo: null,
    },
    {
      id: "T-005",
      user: "Jasur Toshev",
      email: "jasur@example.com",
      issue: "Dastur o'rnatish",
      status: "in-progress",
      priority: "medium",
      device: "desktop",
      created: "1 soat oldin",
      assignedTo: "Aziza Rahimova",
    },
  ]

  const users = [
    {
      id: 1,
      name: "Aziz Karimov",
      email: "aziz@example.com",
      role: "Mijoz",
      status: "active",
      joinDate: "2024-01-15",
      totalTickets: 5,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      name: "Malika Tosheva",
      email: "malika@example.com",
      role: "Mijoz",
      status: "active",
      joinDate: "2024-02-20",
      totalTickets: 3,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      name: "Sardor Usmonov",
      email: "sardor@example.com",
      role: "Texnik",
      status: "active",
      joinDate: "2024-01-10",
      totalTickets: 45,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      name: "Aziza Rahimova",
      email: "aziza@example.com",
      role: "Texnik",
      status: "active",
      joinDate: "2024-01-05",
      totalTickets: 38,
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      action: "Yangi tiket yaratildi",
      user: "Dilnoza Karimova",
      time: "30 daqiqa oldin",
      type: "ticket",
    },
    {
      id: 2,
      action: "Tiket hal qilindi",
      user: "Sardor Usmonov",
      time: "1 soat oldin",
      type: "resolved",
    },
    {
      id: 3,
      action: "Yangi foydalanuvchi ro'yxatdan o'tdi",
      user: "Jasur Toshev",
      time: "2 soat oldin",
      type: "user",
    },
    {
      id: 4,
      action: "Tiket tayinlandi",
      user: "Aziza Rahimova",
      time: "3 soat oldin",
      type: "assigned",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="destructive" className="bg-red-900 hover:bg-red-800 text-red-200">
            Ochiq
          </Badge>
        )
      case "in-progress":
        return <Badge className="bg-yellow-700 hover:bg-yellow-600 text-yellow-200">Jarayonda</Badge>
      case "resolved":
        return (
          <Badge variant="secondary" className="bg-green-900/30 text-green-300">
            Hal qilindi
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="destructive" className="bg-red-900 hover:bg-red-800 text-red-200">
            Yuqori
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="default" className="bg-blue-900 hover:bg-blue-800 text-blue-200">
            O'rta
          </Badge>
        )
      case "low":
        return (
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            Past
          </Badge>
        )
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case "laptop":
      case "desktop":
        return <Computer className="h-4 w-4" />
      case "mobile":
        return <Smartphone className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
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
              <h1 className="text-3xl font-bold text-white">KompyHelp Admin Dashboard</h1>
              <p className="text-gray-400">Boshqaruv paneli - Bugungi holat</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <Bell className="h-4 w-4 mr-2" />
                Bildirishnomalar
              </Button>
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <Calendar className="h-4 w-4 mr-2" />
                Hisobot
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Yangi Tiket
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
                    o'tgan oyga nisbatan
                  </p>
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
                Umumiy
              </TabsTrigger>
              <TabsTrigger
                value="tickets"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Tiketlar
              </TabsTrigger>
              <TabsTrigger
                value="users"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Foydalanuvchilar
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Analitika
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Tickets */}
                <Card className="lg:col-span-2 bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">So'nggi Tiketlar</CardTitle>
                    <CardDescription className="text-gray-400">Eng yangi yordam so'rovlari</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {tickets.slice(0, 5).map((ticket) => (
                      <div
                        key={ticket.id}
                        className="flex items-center justify-between p-4 border border-purple-900/20 rounded-lg hover:bg-[#1a1a2e] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-purple-900/20">{getDeviceIcon(ticket.device)}</div>
                          <div>
                            <p className="font-medium text-white">{ticket.issue}</p>
                            <p className="text-sm text-gray-400">
                              {ticket.user} • {ticket.created}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(ticket.status)}
                          {getPriorityBadge(ticket.priority)}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Activities */}
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">So'nggi Faoliyat</CardTitle>
                    <CardDescription className="text-gray-400">Tizimda so'nggi o'zgarishlar</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3 p-3 border-b border-purple-900/20">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-white">{activity.action}</p>
                          <p className="text-xs text-gray-400">{activity.user}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Tezkor Harakatlar</CardTitle>
                  <CardDescription className="text-gray-400">Tez-tez ishlatiladigan amallar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button
                      variant="outline"
                      className="h-20 flex-col border-purple-700 text-purple-400 hover:bg-purple-900/20"
                    >
                      <Users className="h-6 w-6 mb-2" />
                      Yangi foydalanuvchi
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col border-purple-700 text-purple-400 hover:bg-purple-900/20"
                    >
                      <Ticket className="h-6 w-6 mb-2" />
                      Tiket yaratish
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col border-purple-700 text-purple-400 hover:bg-purple-900/20"
                    >
                      <Settings className="h-6 w-6 mb-2" />
                      Tizim sozlamalari
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col border-purple-700 text-purple-400 hover:bg-purple-900/20"
                    >
                      <TrendingUp className="h-6 w-6 mb-2" />
                      Hisobot ko'rish
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tickets" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                      <CardTitle className="text-white">Tiketlar Boshqaruvi</CardTitle>
                      <CardDescription className="text-gray-400">Barcha yordam so'rovlarini boshqaring</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Tiket qidirish..."
                          className="pl-10 w-64 bg-[#0e0e1a] border-purple-900/30 text-white"
                        />
                      </div>
                      <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Yangi Tiket
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-purple-900/30 hover:bg-[#1a1a2e]">
                          <TableHead className="text-gray-400">ID</TableHead>
                          <TableHead className="text-gray-400">Foydalanuvchi</TableHead>
                          <TableHead className="text-gray-400">Muammo</TableHead>
                          <TableHead className="text-gray-400">Qurilma</TableHead>
                          <TableHead className="text-gray-400">Status</TableHead>
                          <TableHead className="text-gray-400">Muhimlik</TableHead>
                          <TableHead className="text-gray-400">Tayinlangan</TableHead>
                          <TableHead className="text-gray-400">Vaqt</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tickets.map((ticket) => (
                          <TableRow key={ticket.id} className="border-purple-900/30 hover:bg-[#1a1a2e]">
                            <TableCell className="font-medium text-white">{ticket.id}</TableCell>
                            <TableCell>
                              <div>
                                <p className="font-medium text-white">{ticket.user}</p>
                                <p className="text-sm text-gray-400">{ticket.email}</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-300">{ticket.issue}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2 text-gray-300">
                                {getDeviceIcon(ticket.device)}
                                <span className="capitalize">{ticket.device}</span>
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                            <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                            <TableCell>
                              {ticket.assignedTo ? (
                                <Badge variant="outline" className="border-purple-700 text-purple-300">
                                  {ticket.assignedTo}
                                </Badge>
                              ) : (
                                <Badge variant="secondary" className="bg-gray-800 text-gray-400">
                                  Tayinlanmagan
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-gray-400">{ticket.created}</TableCell>
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
                                    Ko'rish
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                    Tahrirlash
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                    Tayinlash
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                    Yopish
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

            <TabsContent value="users" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                      <CardTitle className="text-white">Foydalanuvchilar</CardTitle>
                      <CardDescription className="text-gray-400">Tizim foydalanuvchilarini boshqaring</CardDescription>
                    </div>
                    <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                      <Users className="h-4 w-4 mr-2" />
                      Yangi foydalanuvchi
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-purple-900/30 hover:bg-[#1a1a2e]">
                          <TableHead className="text-gray-400">Foydalanuvchi</TableHead>
                          <TableHead className="text-gray-400">Email</TableHead>
                          <TableHead className="text-gray-400">Rol</TableHead>
                          <TableHead className="text-gray-400">Status</TableHead>
                          <TableHead className="text-gray-400">Tiketlar</TableHead>
                          <TableHead className="text-gray-400">Qo'shilgan</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
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
                                <span className="font-medium text-white">{user.name}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-300">{user.email}</TableCell>
                            <TableCell>
                              <Badge
                                variant={user.role === "Texnik" ? "default" : "secondary"}
                                className={
                                  user.role === "Texnik" ? "bg-purple-900 text-purple-200" : "bg-gray-800 text-gray-300"
                                }
                              >
                                {user.role}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={user.status === "active" ? "default" : "secondary"}
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
                            <TableCell className="text-gray-400">{user.joinDate}</TableCell>
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
                                    Profil ko'rish
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                    Tahrirlash
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                    Bloklash
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

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Tiketlar Statistikasi</CardTitle>
                    <CardDescription className="text-gray-400">So'nggi 30 kun</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Hal qilingan tiketlar</span>
                          <span className="font-bold text-green-400">89%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3">
                          <div className="bg-green-600 h-3 rounded-full" style={{ width: "89%" }}></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Jarayondagi tiketlar</span>
                          <span className="font-bold text-yellow-400">8%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3">
                          <div className="bg-yellow-600 h-3 rounded-full" style={{ width: "8%" }}></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Ochiq tiketlar</span>
                          <span className="font-bold text-red-400">3%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3">
                          <div className="bg-red-600 h-3 rounded-full" style={{ width: "3%" }}></div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-purple-900/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">O'rtacha javob vaqti</span>
                          <span className="font-bold text-white">2.5 soat</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Mijozlar qoniqishi</span>
                          <span className="font-bold text-purple-400">4.8/5</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Eng Ko'p Muammolar</CardTitle>
                    <CardDescription className="text-gray-400">Tez-tez uchraydigan muammolar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border border-purple-900/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-blue-900/20">
                            <Wifi className="h-5 w-5 text-blue-400" />
                          </div>
                          <span className="text-gray-300">Internet ulanish muammosi</span>
                        </div>
                        <Badge className="bg-purple-900 text-purple-200">45</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 border border-purple-900/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-green-900/20">
                            <Computer className="h-5 w-5 text-green-400" />
                          </div>
                          <span className="text-gray-300">Kompyuter sekinligi</span>
                        </div>
                        <Badge className="bg-purple-900 text-purple-200">32</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 border border-purple-900/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-purple-900/20">
                            <Settings className="h-5 w-5 text-purple-400" />
                          </div>
                          <span className="text-gray-300">Dastur o'rnatish</span>
                        </div>
                        <Badge className="bg-purple-900 text-purple-200">28</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 border border-purple-900/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-red-900/20">
                            <Shield className="h-5 w-5 text-red-400" />
                          </div>
                          <span className="text-gray-300">Virus tozalash</span>
                        </div>
                        <Badge className="bg-purple-900 text-purple-200">21</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 border border-purple-900/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-orange-900/20">
                            <Smartphone className="h-5 w-5 text-orange-400" />
                          </div>
                          <span className="text-gray-300">Telefon ta'mirlash</span>
                        </div>
                        <Badge className="bg-purple-900 text-purple-200">18</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Metrics */}
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Performance Ko'rsatkichlari</CardTitle>
                  <CardDescription className="text-gray-400">Tizim ishlash ko'rsatkichlari</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/20">
                      <div className="text-3xl font-bold text-blue-400">98.5%</div>
                      <div className="text-sm text-gray-400">Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/20">
                      <div className="text-3xl font-bold text-green-400">1.2s</div>
                      <div className="text-sm text-gray-400">Avg Response</div>
                    </div>
                    <div className="text-center p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/20">
                      <div className="text-3xl font-bold text-purple-400">156</div>
                      <div className="text-sm text-gray-400">Active Users</div>
                    </div>
                    <div className="text-center p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/20">
                      <div className="text-3xl font-bold text-orange-400">24/7</div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
