"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BusinessSidebar } from "@/components/business-sidebar"
import {
  Ticket,
  Plus,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Calendar,
  MessageSquare,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"

export default function BusinessTicketsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  // Mock tickets data
  const tickets = [
    {
      id: "B-001",
      title: "Server texnik xizmati kerak",
      description: "Asosiy server sekinlashmoqda va texnik xizmat talab qiladi",
      department: "IT Bo'limi",
      priority: "high",
      status: "in-progress",
      assignedTo: "Katta Texnik Guruh",
      created: "2024-01-15T10:30:00",
      updated: "2024-01-15T14:20:00",
      employee: {
        name: "John Smith",
        email: "john.smith@techcorp.com",
        position: "IT Manager",
      },
      responses: 3,
      estimatedTime: "4 soat",
    },
    {
      id: "B-002",
      title: "Tarmoq ulanish muammolari",
      description: "Savdo bo'limida internet ulanishi tez-tez uzilmoqda",
      department: "Savdo",
      priority: "medium",
      status: "open",
      assignedTo: null,
      created: "2024-01-15T09:15:00",
      updated: "2024-01-15T09:15:00",
      employee: {
        name: "Sarah Johnson",
        email: "sarah.johnson@techcorp.com",
        position: "Sales Manager",
      },
      responses: 0,
      estimatedTime: "2 soat",
    },
    {
      id: "B-003",
      title: "Dastur o'rnatish",
      description: "Marketing bo'limi uchun yangi dizayn dasturini o'rnatish kerak",
      department: "Marketing",
      priority: "low",
      status: "resolved",
      assignedTo: "Texnik Yordam",
      created: "2024-01-14T16:45:00",
      updated: "2024-01-15T11:30:00",
      employee: {
        name: "Mike Wilson",
        email: "mike.wilson@techcorp.com",
        position: "Marketing Specialist",
      },
      responses: 5,
      estimatedTime: "1 soat",
    },
    {
      id: "B-004",
      title: "Email tizimi muammosi",
      description: "Moliya bo'limida email yuborish va qabul qilishda muammo",
      department: "Moliya",
      priority: "high",
      status: "escalated",
      assignedTo: "Katta Texnik Guruh",
      created: "2024-01-15T08:00:00",
      updated: "2024-01-15T13:45:00",
      employee: {
        name: "Lisa Chen",
        email: "lisa.chen@techcorp.com",
        position: "Finance Director",
      },
      responses: 7,
      estimatedTime: "6 soat",
    },
    {
      id: "B-005",
      title: "Printer sozlash",
      description: "Kadrlar bo'limida yangi printer sozlash va ulanish",
      department: "Kadrlar",
      priority: "low",
      status: "pending",
      assignedTo: "Texnik Yordam",
      created: "2024-01-15T11:20:00",
      updated: "2024-01-15T11:20:00",
      employee: {
        name: "David Brown",
        email: "david.brown@techcorp.com",
        position: "HR Manager",
      },
      responses: 1,
      estimatedTime: "30 daqiqa",
    },
  ]

  const departments = ["IT Bo'limi", "Savdo", "Marketing", "Moliya", "Kadrlar"]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="destructive" className="bg-red-900 text-red-200">
            Ochiq
          </Badge>
        )
      case "in-progress":
        return <Badge className="bg-yellow-700 text-yellow-200">Jarayonda</Badge>
      case "resolved":
        return <Badge className="bg-green-900/30 text-green-300">Hal qilindi</Badge>
      case "escalated":
        return <Badge className="bg-orange-700 text-orange-200">Ko'tarildi</Badge>
      case "pending":
        return (
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            Kutilmoqda
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
          <Badge variant="destructive" className="bg-red-900 text-red-200">
            Yuqori
          </Badge>
        )
      case "medium":
        return <Badge className="bg-blue-900 text-blue-200">O'rta</Badge>
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <AlertCircle className="h-4 w-4 text-red-400" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-400" />
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "escalated":
        return <AlertCircle className="h-4 w-4 text-orange-400" />
      case "pending":
        return <Clock className="h-4 w-4 text-gray-400" />
      default:
        return <Ticket className="h-4 w-4" />
    }
  }

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || ticket.status === statusFilter
    const matchesPriority = priorityFilter === "all" || ticket.priority === priorityFilter
    const matchesDepartment = departmentFilter === "all" || ticket.department === departmentFilter

    return matchesSearch && matchesStatus && matchesPriority && matchesDepartment
  })

  const ticketStats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in-progress").length,
    resolved: tickets.filter((t) => t.status === "resolved").length,
    escalated: tickets.filter((t) => t.status === "escalated").length,
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <BusinessSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Tiketlar Boshqaruvi</h1>
              <p className="text-gray-400">Tashkilotingiz uchun barcha yordam tiketlarini boshqaring</p>
            </div>
            <Button className="bg-purple-700 hover:bg-purple-800">
              <Plus className="h-4 w-4 mr-2" />
              Yangi Tiket Yaratish
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Jami Tiketlar</p>
                    <p className="text-2xl font-bold text-white">{ticketStats.total}</p>
                  </div>
                  <Ticket className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Ochiq</p>
                    <p className="text-2xl font-bold text-red-400">{ticketStats.open}</p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Jarayonda</p>
                    <p className="text-2xl font-bold text-yellow-400">{ticketStats.inProgress}</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Hal qilindi</p>
                    <p className="text-2xl font-bold text-green-400">{ticketStats.resolved}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Ko'tarildi</p>
                    <p className="text-2xl font-bold text-orange-400">{ticketStats.escalated}</p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtrlash va Qidirish
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Tiket qidirish..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-[#0e0e1a] border-purple-900/30 text-white"
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                    <SelectValue placeholder="Status bo'yicha" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#12121e] border-purple-900/30">
                    <SelectItem value="all">Barcha statuslar</SelectItem>
                    <SelectItem value="open">Ochiq</SelectItem>
                    <SelectItem value="in-progress">Jarayonda</SelectItem>
                    <SelectItem value="resolved">Hal qilindi</SelectItem>
                    <SelectItem value="escalated">Ko'tarildi</SelectItem>
                    <SelectItem value="pending">Kutilmoqda</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                    <SelectValue placeholder="Muhimlik bo'yicha" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#12121e] border-purple-900/30">
                    <SelectItem value="all">Barcha muhimliklar</SelectItem>
                    <SelectItem value="high">Yuqori</SelectItem>
                    <SelectItem value="medium">O'rta</SelectItem>
                    <SelectItem value="low">Past</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                    <SelectValue placeholder="Bo'lim bo'yicha" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#12121e] border-purple-900/30">
                    <SelectItem value="all">Barcha bo'limlar</SelectItem>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Tickets List */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <CardTitle className="text-white">Tiketlar Ro'yxati ({filteredTickets.length})</CardTitle>
              <CardDescription className="text-gray-400">Filtrlangan tiketlar ro'yxati</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="p-4 border border-purple-900/20 rounded-lg hover:bg-[#1a1a2e] transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {getStatusIcon(ticket.status)}
                          <span className="font-medium text-white">{ticket.id}</span>
                          {getStatusBadge(ticket.status)}
                          {getPriorityBadge(ticket.priority)}
                          <Badge variant="outline" className="border-purple-700 text-purple-400">
                            {ticket.department}
                          </Badge>
                        </div>

                        <h3 className="font-semibold text-white text-lg mb-2">{ticket.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{ticket.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <div>
                              <p className="text-white">{ticket.employee.name}</p>
                              <p className="text-gray-400">{ticket.employee.position}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <div>
                              <p className="text-white">Yaratildi</p>
                              <p className="text-gray-400">{new Date(ticket.created).toLocaleDateString("uz-UZ")}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-gray-400" />
                            <div>
                              <p className="text-white">Javoblar</p>
                              <p className="text-gray-400">{ticket.responses} ta</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <div>
                              <p className="text-white">Taxminiy vaqt</p>
                              <p className="text-gray-400">{ticket.estimatedTime}</p>
                            </div>
                          </div>
                        </div>

                        {ticket.assignedTo && (
                          <div className="mt-3 p-2 bg-[#0e0e1a] rounded border border-purple-900/20">
                            <p className="text-sm text-gray-400">
                              Tayinlangan: <span className="text-purple-400">{ticket.assignedTo}</span>
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-700 text-purple-400 hover:bg-purple-900/20"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Ko'rish
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-700 text-blue-400 hover:bg-blue-900/20"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Tahrirlash
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-700 text-red-400 hover:bg-red-900/20">
                          <Trash2 className="h-4 w-4 mr-1" />
                          O'chirish
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredTickets.length === 0 && (
                  <div className="text-center py-8">
                    <Ticket className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Hech qanday tiket topilmadi</p>
                    <p className="text-sm text-gray-500">
                      Filtrlash shartlarini o'zgartiring yoki yangi tiket yarating
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
