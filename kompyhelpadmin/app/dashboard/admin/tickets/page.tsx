"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AdminSidebar } from "@/components/admin-sidebar"
import {
  Search,
  Filter,
  MoreHorizontal,
  Plus,
  Clock,
  AlertTriangle,
  CheckCircle,
  User,
  Building2,
  Calendar,
  MessageSquare,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminTicketsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const ticketStats = [
    {
      title: "Jami Tiketlar",
      value: "1,247",
      change: "+12%",
      icon: MessageSquare,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
    {
      title: "Ochiq Tiketlar",
      value: "456",
      change: "+8%",
      icon: Clock,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
    {
      title: "Yuqori Ustuvorlik",
      value: "23",
      change: "-15%",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
    },
    {
      title: "Hal Qilingan",
      value: "768",
      change: "+25%",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
  ]

  const tickets = [
    {
      id: "TKT-001",
      title: "Kompyuter ishlamayapti",
      description: "Kompyuter yoqilganda qora ekran ko'rsatmoqda",
      user: "Aziz Karimov",
      userType: "User",
      priority: "Yuqori",
      status: "Ochiq",
      category: "Texnik",
      createdAt: "2024-01-15 10:30",
      assignedTo: "Sardor Usmonov",
      responses: 3,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "TKT-002",
      title: "Internet ulanishi muammosi",
      description: "Ofisda internet tez-tez uzilmoqda",
      user: "TechCorp Solutions",
      userType: "Business",
      priority: "O'rta",
      status: "Jarayonda",
      category: "Tarmoq",
      createdAt: "2024-01-15 09:15",
      assignedTo: "Malika Tosheva",
      responses: 5,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "TKT-003",
      title: "Printer chop etmayapti",
      description: "HP LaserJet printer hujjatlarni chop etmayapti",
      user: "Jasur Toshev",
      userType: "User",
      priority: "Past",
      status: "Kutilmoqda",
      category: "Printer",
      createdAt: "2024-01-15 08:45",
      assignedTo: null,
      responses: 1,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "TKT-004",
      title: "Email server muammosi",
      description: "Korporativ email serveriga ulanib bo'lmayapti",
      user: "InnovateLab LLC",
      userType: "Business",
      priority: "Yuqori",
      status: "Hal qilingan",
      category: "Email",
      createdAt: "2024-01-14 16:20",
      assignedTo: "Admin Tizim",
      responses: 8,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "TKT-005",
      title: "Antivirus yangilanishi",
      description: "Antivirus dasturi yangilanmayapti",
      user: "Malika Rahimova",
      userType: "User",
      priority: "O'rta",
      status: "Ochiq",
      category: "Xavfsizlik",
      createdAt: "2024-01-14 14:10",
      assignedTo: "Sardor Usmonov",
      responses: 2,
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Yuqori":
        return <Badge className="bg-red-900/30 text-red-300">Yuqori</Badge>
      case "O'rta":
        return <Badge className="bg-yellow-900/30 text-yellow-300">O'rta</Badge>
      case "Past":
        return <Badge className="bg-green-900/30 text-green-300">Past</Badge>
      default:
        return <Badge variant="secondary">Noma'lum</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Ochiq":
        return <Badge className="bg-blue-900/30 text-blue-300">Ochiq</Badge>
      case "Jarayonda":
        return <Badge className="bg-orange-900/30 text-orange-300">Jarayonda</Badge>
      case "Kutilmoqda":
        return <Badge className="bg-gray-700 text-gray-300">Kutilmoqda</Badge>
      case "Hal qilingan":
        return <Badge className="bg-green-900/30 text-green-300">Hal qilingan</Badge>
      default:
        return <Badge variant="secondary">Noma'lum</Badge>
    }
  }

  const getUserTypeIcon = (userType: string) => {
    return userType === "Business" ? <Building2 className="h-4 w-4" /> : <User className="h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <AdminSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Tiketlar Boshqaruvi</h1>
              <p className="text-gray-400">Barcha foydalanuvchi so'rovlarini boshqaring</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <Filter className="h-4 w-4 mr-2" />
                Filtr
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Yangi Tiket
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketStats.map((stat, index) => (
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

          {/* Tickets Table */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <CardTitle className="text-white">Barcha Tiketlar</CardTitle>
                  <CardDescription className="text-gray-400">
                    Foydalanuvchi so'rovlarini ko'ring va boshqaring
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Tiketlarni qidirish..."
                      className="pl-10 w-64 bg-[#0e0e1a] border-purple-900/30 text-white"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-40 bg-[#0e0e1a] border-purple-900/30 text-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                      <SelectItem value="all">Barchasi</SelectItem>
                      <SelectItem value="open">Ochiq</SelectItem>
                      <SelectItem value="in-progress">Jarayonda</SelectItem>
                      <SelectItem value="resolved">Hal qilingan</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-40 bg-[#0e0e1a] border-purple-900/30 text-white">
                      <SelectValue placeholder="Ustuvorlik" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                      <SelectItem value="all">Barchasi</SelectItem>
                      <SelectItem value="high">Yuqori</SelectItem>
                      <SelectItem value="medium">O'rta</SelectItem>
                      <SelectItem value="low">Past</SelectItem>
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
                      <TableHead className="text-gray-400">Tiket ID</TableHead>
                      <TableHead className="text-gray-400">Mavzu</TableHead>
                      <TableHead className="text-gray-400">Foydalanuvchi</TableHead>
                      <TableHead className="text-gray-400">Ustuvorlik</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                      <TableHead className="text-gray-400">Tayinlangan</TableHead>
                      <TableHead className="text-gray-400">Sana</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tickets.map((ticket) => (
                      <TableRow key={ticket.id} className="border-purple-900/30 hover:bg-[#1a1a2e]">
                        <TableCell className="font-medium text-purple-400">{ticket.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium text-white">{ticket.title}</p>
                            <p className="text-sm text-gray-400 truncate max-w-xs">{ticket.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs border-purple-700 text-purple-300">
                                {ticket.category}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <MessageSquare className="h-3 w-3" />
                                {ticket.responses}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={ticket.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-purple-900/50 text-purple-200">
                                {ticket.user
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-white text-sm">{ticket.user}</p>
                              <div className="flex items-center gap-1">
                                {getUserTypeIcon(ticket.userType)}
                                <span className="text-xs text-gray-400">{ticket.userType}</span>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                        <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                        <TableCell>
                          {ticket.assignedTo ? (
                            <span className="text-gray-300">{ticket.assignedTo}</span>
                          ) : (
                            <span className="text-gray-500">Tayinlanmagan</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-gray-400">
                            <Calendar className="h-3 w-3" />
                            <span className="text-sm">{ticket.createdAt}</span>
                          </div>
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
                                <Eye className="h-4 w-4 mr-2" />
                                Ko'rish
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                <Edit className="h-4 w-4 mr-2" />
                                Tahrirlash
                              </DropdownMenuItem>
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
