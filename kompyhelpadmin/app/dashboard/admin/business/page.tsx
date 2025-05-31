"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AdminSidebar } from "@/components/admin-sidebar"
import {
  Building2,
  Search,
  Filter,
  MoreHorizontal,
  Plus,
  Users,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function AdminBusinessPage() {
  const businessStats = [
    {
      title: "Jami Biznes Hisoblar",
      value: "350",
      change: "+15%",
      icon: Building2,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
    {
      title: "Faol Bizneslar",
      value: "298",
      change: "+12%",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Oylik Daromad",
      value: "$45,230",
      change: "+18%",
      icon: DollarSign,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
    },
    {
      title: "Jami Xodimlar",
      value: "12,450",
      change: "+8%",
      icon: Users,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
  ]

  const businessAccounts = [
    {
      id: 1,
      name: "TechCorp Solutions",
      email: "admin@techcorp.com",
      phone: "+998 71 234 56 78",
      plan: "Korporativ",
      employees: 150,
      monthlyFee: "$299",
      status: "active",
      joinDate: "2024-01-10",
      lastActivity: "30 daqiqa oldin",
      totalTickets: 45,
      resolvedTickets: 38,
      location: "Toshkent",
      avatar: "/placeholder.svg?height=32&width=32",
      industry: "IT Xizmatlar",
      satisfaction: 95,
    },
    {
      id: 2,
      name: "InnovateLab LLC",
      email: "support@innovatelab.com",
      phone: "+998 71 345 67 89",
      plan: "Professional",
      employees: 75,
      monthlyFee: "$199",
      status: "active",
      joinDate: "2024-01-05",
      lastActivity: "1 soat oldin",
      totalTickets: 28,
      resolvedTickets: 25,
      location: "Toshkent",
      avatar: "/placeholder.svg?height=32&width=32",
      industry: "Tadqiqot",
      satisfaction: 88,
    },
    {
      id: 3,
      name: "StartupHub Inc",
      email: "hello@startuphub.uz",
      phone: "+998 90 123 45 67",
      plan: "Startup",
      employees: 25,
      monthlyFee: "$99",
      status: "active",
      joinDate: "2024-02-01",
      lastActivity: "2 soat oldin",
      totalTickets: 12,
      resolvedTickets: 10,
      location: "Samarqand",
      avatar: "/placeholder.svg?height=32&width=32",
      industry: "Startup",
      satisfaction: 92,
    },
    {
      id: 4,
      name: "MegaCorp Enterprise",
      email: "it@megacorp.uz",
      phone: "+998 71 987 65 43",
      plan: "Enterprise",
      employees: 500,
      monthlyFee: "$599",
      status: "active",
      joinDate: "2023-12-15",
      lastActivity: "15 daqiqa oldin",
      totalTickets: 89,
      resolvedTickets: 82,
      location: "Toshkent",
      avatar: "/placeholder.svg?height=32&width=32",
      industry: "Ishlab chiqarish",
      satisfaction: 97,
    },
    {
      id: 5,
      name: "DigitalWave Agency",
      email: "support@digitalwave.uz",
      phone: "+998 93 456 78 90",
      plan: "Professional",
      employees: 45,
      monthlyFee: "$199",
      status: "trial",
      joinDate: "2024-02-15",
      lastActivity: "1 kun oldin",
      totalTickets: 8,
      resolvedTickets: 6,
      location: "Buxoro",
      avatar: "/placeholder.svg?height=32&width=32",
      industry: "Marketing",
      satisfaction: 85,
    },
  ]

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "Enterprise":
        return <Badge className="bg-purple-900/30 text-purple-300">Enterprise</Badge>
      case "Korporativ":
        return <Badge className="bg-blue-900/30 text-blue-300">Korporativ</Badge>
      case "Professional":
        return <Badge className="bg-green-900/30 text-green-300">Professional</Badge>
      case "Startup":
        return <Badge className="bg-orange-900/30 text-orange-300">Startup</Badge>
      default:
        return <Badge variant="secondary">Asosiy</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-900/30 text-green-300">Faol</Badge>
      case "trial":
        return <Badge className="bg-yellow-900/30 text-yellow-300">Sinov</Badge>
      case "suspended":
        return <Badge className="bg-red-900/30 text-red-300">To'xtatilgan</Badge>
      default:
        return <Badge variant="secondary">Noma'lum</Badge>
    }
  }

  const getSatisfactionColor = (satisfaction: number) => {
    if (satisfaction >= 90) return "text-green-400"
    if (satisfaction >= 80) return "text-yellow-400"
    return "text-red-400"
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <AdminSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Biznes Hisoblar</h1>
              <p className="text-gray-400">Korporativ mijozlarni boshqaring</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <Filter className="h-4 w-4 mr-2" />
                Filtr
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Biznes Qo'shish
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessStats.map((stat, index) => (
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

          {/* Business Accounts Table */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <CardTitle className="text-white">Biznes Hisoblar Ro'yxati</CardTitle>
                  <CardDescription className="text-gray-400">
                    Korporativ mijozlarni ko'ring va boshqaring
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Bizneslarni qidirish..."
                      className="pl-10 w-64 bg-[#0e0e1a] border-purple-900/30 text-white"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-40 bg-[#0e0e1a] border-purple-900/30 text-white">
                      <SelectValue placeholder="Reja" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                      <SelectItem value="all">Barchasi</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="corporate">Korporativ</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="startup">Startup</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-40 bg-[#0e0e1a] border-purple-900/30 text-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                      <SelectItem value="all">Barchasi</SelectItem>
                      <SelectItem value="active">Faol</SelectItem>
                      <SelectItem value="trial">Sinov</SelectItem>
                      <SelectItem value="suspended">To'xtatilgan</SelectItem>
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
                      <TableHead className="text-gray-400">Kompaniya</TableHead>
                      <TableHead className="text-gray-400">Aloqa</TableHead>
                      <TableHead className="text-gray-400">Reja</TableHead>
                      <TableHead className="text-gray-400">Xodimlar</TableHead>
                      <TableHead className="text-gray-400">Tiketlar</TableHead>
                      <TableHead className="text-gray-400">Mamnunlik</TableHead>
                      <TableHead className="text-gray-400">Oylik To'lov</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {businessAccounts.map((business) => (
                      <TableRow key={business.id} className="border-purple-900/30 hover:bg-[#1a1a2e]">
                        <TableCell>
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
                              <p className="font-medium text-white">{business.name}</p>
                              <div className="flex items-center gap-2 mt-1">
                                {getStatusBadge(business.status)}
                                <span className="text-xs text-gray-400">{business.industry}</span>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm text-gray-300">
                              <Mail className="h-3 w-3" />
                              {business.email}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-400">
                              <Phone className="h-3 w-3" />
                              {business.phone}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-400">
                              <MapPin className="h-3 w-3" />
                              {business.location}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getPlanBadge(business.plan)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-gray-300">
                            <Users className="h-4 w-4" />
                            {business.employees}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm text-gray-300">
                              {business.resolvedTickets}/{business.totalTickets}
                            </div>
                            <Progress
                              value={(business.resolvedTickets / business.totalTickets) * 100}
                              className="h-2 w-16"
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className={`font-medium ${getSatisfactionColor(business.satisfaction)}`}>
                              {business.satisfaction}%
                            </span>
                            <TrendingUp className={`h-4 w-4 ${getSatisfactionColor(business.satisfaction)}`} />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-green-400 font-medium">
                            <DollarSign className="h-4 w-4" />
                            {business.monthlyFee.replace("$", "")}
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
                                Tafsilotlar
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                <Edit className="h-4 w-4 mr-2" />
                                Tahrirlash
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer">
                                <Clock className="h-4 w-4 mr-2" />
                                Tarix
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
