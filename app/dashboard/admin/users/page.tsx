"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AdminSidebar } from "@/components/admin-sidebar"
import {
  Users,
  Search,
  Filter,
  MoreHorizontal,
  Plus,
  UserCheck,
  Building2,
  Crown,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Edit,
  Trash2,
  Shield,
  Ban,
  CheckCircle,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState("all")

  const userStats = [
    {
      title: "Jami Foydalanuvchilar",
      value: "3,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
    {
      title: "Faol Foydalanuvchilar",
      value: "2,847",
      change: "+8%",
      icon: UserCheck,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Biznes Hisoblar",
      value: "350",
      change: "+15%",
      icon: Building2,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
    },
    {
      title: "Admin Foydalanuvchilar",
      value: "50",
      change: "+2%",
      icon: Crown,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
  ]

  const allUsers = [
    {
      id: 1,
      name: "Aziz Karimov",
      email: "aziz@example.com",
      phone: "+998 90 123 45 67",
      role: "User",
      status: "active",
      joinDate: "2024-01-15",
      lastLogin: "2 soat oldin",
      totalTickets: 5,
      location: "Toshkent",
      avatar: "/placeholder.svg?height=32&width=32",
      verified: true,
    },
    {
      id: 2,
      name: "TechCorp Solutions",
      email: "admin@techcorp.com",
      phone: "+998 71 234 56 78",
      role: "Business",
      status: "active",
      joinDate: "2024-01-10",
      lastLogin: "30 daqiqa oldin",
      totalTickets: 45,
      location: "Toshkent",
      avatar: "/placeholder.svg?height=32&width=32",
      employees: 150,
      plan: "Korporativ",
      verified: true,
    },
    {
      id: 3,
      name: "Sardor Usmonov",
      email: "sardor@kompyhelp.uz",
      phone: "+998 90 987 65 43",
      role: "Admin",
      status: "active",
      joinDate: "2023-12-01",
      lastLogin: "Onlayn",
      totalTickets: 0,
      location: "Toshkent",
      avatar: "/placeholder.svg?height=32&width=32",
      permissions: "Super Admin",
      verified: true,
    },
    {
      id: 4,
      name: "Malika Tosheva",
      email: "malika@example.com",
      phone: "+998 93 456 78 90",
      role: "User",
      status: "inactive",
      joinDate: "2024-02-20",
      lastLogin: "1 hafta oldin",
      totalTickets: 3,
      location: "Samarqand",
      avatar: "/placeholder.svg?height=32&width=32",
      verified: false,
    },
    {
      id: 5,
      name: "InnovateLab LLC",
      email: "support@innovatelab.com",
      phone: "+998 71 345 67 89",
      role: "Business",
      status: "active",
      joinDate: "2024-01-05",
      lastLogin: "1 soat oldin",
      totalTickets: 28,
      location: "Toshkent",
      avatar: "/placeholder.svg?height=32&width=32",
      employees: 75,
      plan: "Professional",
      verified: true,
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
        return <Badge className="bg-blue-900/30 text-blue-300">Biznes</Badge>
      case "Admin":
        return <Badge className="bg-purple-900/30 text-purple-300">Admin</Badge>
      default:
        return (
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            Foydalanuvchi
          </Badge>
        )
    }
  }

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-green-900/30 text-green-300">Faol</Badge>
    ) : (
      <Badge className="bg-red-900/30 text-red-300">Nofaol</Badge>
    )
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <AdminSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Foydalanuvchilar Boshqaruvi</h1>
              <p className="text-gray-400">Barcha foydalanuvchi hisoblarini boshqaring</p>
            </div>
            <div className="flex flex-wrap gap-3">
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userStats.map((stat, index) => (
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
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Users Management */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <CardTitle className="text-white">Foydalanuvchilar Ro'yxati</CardTitle>
                  <CardDescription className="text-gray-400">
                    Barcha foydalanuvchi turlarini ko'ring va boshqaring
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
                  <Select>
                    <SelectTrigger className="w-40 bg-[#0e0e1a] border-purple-900/30 text-white">
                      <SelectValue placeholder="Rol" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                      <SelectItem value="all">Barchasi</SelectItem>
                      <SelectItem value="user">Foydalanuvchi</SelectItem>
                      <SelectItem value="business">Biznes</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-40 bg-[#0e0e1a] border-purple-900/30 text-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                      <SelectItem value="all">Barchasi</SelectItem>
                      <SelectItem value="active">Faol</SelectItem>
                      <SelectItem value="inactive">Nofaol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-purple-900/30">
                      <TableHead className="text-gray-400">Foydalanuvchi</TableHead>
                      <TableHead className="text-gray-400">Aloqa</TableHead>
                      <TableHead className="text-gray-400">Rol</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                      <TableHead className="text-gray-400">Oxirgi Kirish</TableHead>
                      <TableHead className="text-gray-400">Tiketlar</TableHead>
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
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-white">{user.name}</p>
                                {user.verified && <CheckCircle className="h-4 w-4 text-green-400" />}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <Calendar className="h-3 w-3" />
                                Qo'shilgan: {user.joinDate}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm text-gray-300">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-400">
                              <Phone className="h-3 w-3" />
                              {user.phone}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-400">
                              <MapPin className="h-3 w-3" />
                              {user.location}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getRoleIcon(user.role)}
                            {getRoleBadge(user.role)}
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell className="text-gray-300">{user.lastLogin}</TableCell>
                        <TableCell className="text-gray-300">{user.totalTickets}</TableCell>
                        <TableCell>
                          {user.role === "Business" && (
                            <div className="text-xs text-gray-400">
                              <div>{user.employees} xodim</div>
                              <div>{user.plan} rejasi</div>
                            </div>
                          )}
                          {user.role === "Admin" && <div className="text-xs text-gray-400">{user.permissions}</div>}
                          {user.role === "User" && (
                            <div className="text-xs text-gray-400">
                              {user.verified ? "Tasdiqlangan" : "Tasdiqlanmagan"}
                            </div>
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
                                <Edit className="h-4 w-4 mr-2" />
                                Tahrirlash
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                <Shield className="h-4 w-4 mr-2" />
                                Ruxsatlar
                              </DropdownMenuItem>
                              {user.status === "active" ? (
                                <DropdownMenuItem className="hover:bg-orange-900/30 hover:text-orange-300 cursor-pointer">
                                  <Ban className="h-4 w-4 mr-2" />
                                  Bloklash
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem className="hover:bg-green-900/30 hover:text-green-300 cursor-pointer">
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Faollashtirish
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem className="hover:bg-red-900/30 hover:text-red-300 cursor-pointer">
                                <Trash2 className="h-4 w-4 mr-2" />
                                O'chirish
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
        </div>
      </div>
    </div>
  )
}
