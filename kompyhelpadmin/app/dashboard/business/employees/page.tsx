"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BusinessSidebar } from "@/components/business-sidebar"
import {
  Users,
  Search,
  Filter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Ticket,
  CheckCircle,
  Clock,
  AlertCircle,
  Edit,
  Trash2,
  Eye,
  UserPlus,
} from "lucide-react"

export default function BusinessEmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock employees data
  const employees = [
    {
      id: "EMP-001",
      name: "John Smith",
      email: "john.smith@techcorp.com",
      phone: "+998 90 123 45 67",
      position: "IT Manager",
      department: "IT Bo'limi",
      status: "active",
      joinDate: "2023-01-15",
      avatar: "/placeholder.svg?height=40&width=40",
      tickets: {
        total: 12,
        open: 2,
        resolved: 10,
      },
      lastActivity: "2024-01-15T14:30:00",
      location: "Toshkent, O'zbekiston",
    },
    {
      id: "EMP-002",
      name: "Sarah Johnson",
      email: "sarah.johnson@techcorp.com",
      phone: "+998 90 234 56 78",
      position: "Sales Manager",
      department: "Savdo",
      status: "active",
      joinDate: "2022-08-20",
      avatar: "/placeholder.svg?height=40&width=40",
      tickets: {
        total: 8,
        open: 1,
        resolved: 7,
      },
      lastActivity: "2024-01-15T16:45:00",
      location: "Samarqand, O'zbekiston",
    },
    {
      id: "EMP-003",
      name: "Mike Wilson",
      email: "mike.wilson@techcorp.com",
      phone: "+998 90 345 67 89",
      position: "Marketing Specialist",
      department: "Marketing",
      status: "active",
      joinDate: "2023-03-10",
      avatar: "/placeholder.svg?height=40&width=40",
      tickets: {
        total: 5,
        open: 0,
        resolved: 5,
      },
      lastActivity: "2024-01-15T12:20:00",
      location: "Buxoro, O'zbekiston",
    },
    {
      id: "EMP-004",
      name: "Lisa Chen",
      email: "lisa.chen@techcorp.com",
      phone: "+998 90 456 78 90",
      position: "Finance Director",
      department: "Moliya",
      status: "active",
      joinDate: "2021-11-05",
      avatar: "/placeholder.svg?height=40&width=40",
      tickets: {
        total: 15,
        open: 3,
        resolved: 12,
      },
      lastActivity: "2024-01-15T17:10:00",
      location: "Toshkent, O'zbekiston",
    },
    {
      id: "EMP-005",
      name: "David Brown",
      email: "david.brown@techcorp.com",
      phone: "+998 90 567 89 01",
      position: "HR Manager",
      department: "Kadrlar",
      status: "inactive",
      joinDate: "2022-05-18",
      avatar: "/placeholder.svg?height=40&width=40",
      tickets: {
        total: 6,
        open: 0,
        resolved: 6,
      },
      lastActivity: "2024-01-10T09:30:00",
      location: "Andijon, O'zbekiston",
    },
    {
      id: "EMP-006",
      name: "Emma Davis",
      email: "emma.davis@techcorp.com",
      phone: "+998 90 678 90 12",
      position: "Software Developer",
      department: "IT Bo'limi",
      status: "active",
      joinDate: "2023-07-22",
      avatar: "/placeholder.svg?height=40&width=40",
      tickets: {
        total: 9,
        open: 1,
        resolved: 8,
      },
      lastActivity: "2024-01-15T15:55:00",
      location: "Namangan, O'zbekiston",
    },
  ]

  const departments = ["IT Bo'limi", "Savdo", "Marketing", "Moliya", "Kadrlar"]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-900/30 text-green-300">Faol</Badge>
      case "inactive":
        return (
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            Nofaol
          </Badge>
        )
      case "suspended":
        return (
          <Badge variant="destructive" className="bg-red-900 text-red-200">
            To'xtatilgan
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "inactive":
        return <Clock className="h-4 w-4 text-gray-400" />
      case "suspended":
        return <AlertCircle className="h-4 w-4 text-red-400" />
      default:
        return <Users className="h-4 w-4" />
    }
  }

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === "all" || employee.department === departmentFilter
    const matchesStatus = statusFilter === "all" || employee.status === statusFilter

    return matchesSearch && matchesDepartment && matchesStatus
  })

  const employeeStats = {
    total: employees.length,
    active: employees.filter((e) => e.status === "active").length,
    inactive: employees.filter((e) => e.status === "inactive").length,
    totalTickets: employees.reduce((sum, e) => sum + e.tickets.total, 0),
    openTickets: employees.reduce((sum, e) => sum + e.tickets.open, 0),
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <BusinessSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Xodimlar Boshqaruvi</h1>
              <p className="text-gray-400">Tashkilotingiz xodimlarini boshqaring va ularning faoliyatini kuzating</p>
            </div>
            <Button className="bg-purple-700 hover:bg-purple-800">
              <UserPlus className="h-4 w-4 mr-2" />
              Yangi Xodim Qo'shish
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Jami Xodimlar</p>
                    <p className="text-2xl font-bold text-white">{employeeStats.total}</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Faol</p>
                    <p className="text-2xl font-bold text-green-400">{employeeStats.active}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Nofaol</p>
                    <p className="text-2xl font-bold text-gray-400">{employeeStats.inactive}</p>
                  </div>
                  <Clock className="h-8 w-8 text-gray-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Jami Tiketlar</p>
                    <p className="text-2xl font-bold text-blue-400">{employeeStats.totalTickets}</p>
                  </div>
                  <Ticket className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Ochiq Tiketlar</p>
                    <p className="text-2xl font-bold text-orange-400">{employeeStats.openTickets}</p>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Xodim qidirish..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-[#0e0e1a] border-purple-900/30 text-white"
                  />
                </div>

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

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                    <SelectValue placeholder="Status bo'yicha" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#12121e] border-purple-900/30">
                    <SelectItem value="all">Barcha statuslar</SelectItem>
                    <SelectItem value="active">Faol</SelectItem>
                    <SelectItem value="inactive">Nofaol</SelectItem>
                    <SelectItem value="suspended">To'xtatilgan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Employees List */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <CardTitle className="text-white">Xodimlar Ro'yxati ({filteredEmployees.length})</CardTitle>
              <CardDescription className="text-gray-400">Filtrlangan xodimlar ro'yxati</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredEmployees.map((employee) => (
                  <div
                    key={employee.id}
                    className="p-4 border border-purple-900/20 rounded-lg hover:bg-[#1a1a2e] transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-purple-900/50 text-purple-200">
                            {employee.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {getStatusIcon(employee.status)}
                            <span className="font-medium text-white">{employee.id}</span>
                            {getStatusBadge(employee.status)}
                            <Badge variant="outline" className="border-purple-700 text-purple-400">
                              {employee.department}
                            </Badge>
                          </div>

                          <h3 className="font-semibold text-white text-lg mb-1">{employee.name}</h3>
                          <p className="text-purple-400 text-sm mb-3">{employee.position}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="text-white">{employee.email}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="text-white">{employee.phone}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="text-white">{employee.location}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="text-white">Ishga kirgan</p>
                                <p className="text-gray-400">
                                  {new Date(employee.joinDate).toLocaleDateString("uz-UZ")}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Ticket className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="text-white">Tiketlar</p>
                                <p className="text-gray-400">
                                  {employee.tickets.total} jami, {employee.tickets.open} ochiq
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="text-white">So'nggi faollik</p>
                                <p className="text-gray-400">
                                  {new Date(employee.lastActivity).toLocaleDateString("uz-UZ")}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Ticket Statistics */}
                          <div className="mt-3 p-3 bg-[#0e0e1a] rounded border border-purple-900/20">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-400">Tiket Statistikasi:</span>
                              <div className="flex gap-4 text-sm">
                                <span className="text-blue-400">Jami: {employee.tickets.total}</span>
                                <span className="text-orange-400">Ochiq: {employee.tickets.open}</span>
                                <span className="text-green-400">Hal qilindi: {employee.tickets.resolved}</span>
                              </div>
                            </div>
                          </div>
                        </div>
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

                {filteredEmployees.length === 0 && (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Hech qanday xodim topilmadi</p>
                    <p className="text-sm text-gray-500">
                      Filtrlash shartlarini o'zgartiring yoki yangi xodim qo'shing
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
