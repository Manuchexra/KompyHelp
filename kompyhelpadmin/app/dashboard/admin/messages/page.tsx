"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Search, Filter, Plus, Clock, CheckCircle, AlertTriangle, Users, Building2 } from 'lucide-react'
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminMessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)

  const messageStats = [
    {
      title: "Jami Xabarlar",
      value: "2,456",
      change: "+18%",
      icon: MessageSquare,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
    {
      title: "Javobsiz Xabarlar",
      value: "89",
      change: "-12%",
      icon: Clock,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
    {
      title: "Bugun Javob Berilgan",
      value: "156",
      change: "+25%",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Yuqori Ustuvorlik",
      value: "12",
      change: "-8%",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
    },
  ]

  const messages = [
    {
      id: 1,
      subject: "Texnik yordam so'rovi",
      sender: "Aziz Karimov",
      senderEmail: "aziz@example.com",
      senderType: "User",
      content: "Kompyuterimda muammo bor, yordam kerak. Tizim sekin ishlayapti va ba'zi dasturlar ochilmayapti.",
      priority: "Yuqori",
      status: "unread",
      category: "Texnik",
      createdAt: "2024-01-15 14:30",
      avatar: "/placeholder.svg?height=32&width=32",
      hasAttachment: true,
    },
    {
      id: 2,
      subject: "Korporativ hisob sozlamalari",
      sender: "TechCorp Solutions",
      senderEmail: "admin@techcorp.com",
      senderType: "Business",
      content: "Bizning korporativ hisobimiz uchun qo'shimcha foydalanuvchilar qo'shish kerak.",
      priority: "O'rta",
      status: "replied",
      category: "Hisob",
      createdAt: "2024-01-15 13:15",
      avatar: "/placeholder.svg?height=32&width=32",
      hasAttachment: false,
    },
    {
      id: 3,
      subject: "Billing muammosi",
      sender: "Malika Tosheva",
      senderEmail: "malika@example.com",
      senderType: "User",
      content: "Hisobimdan noto'g'ri summa yechilgan. Iltimos, tekshirib ko'ring.",
      priority: "Yuqori",
      status: "unread",
      category: "Billing",
      createdAt: "2024-01-15 12:45",
      avatar: "/placeholder.svg?height=32&width=32",
      hasAttachment: true,
    },
    {
      id: 4,
      subject: "Yangi xizmat so'rovi",
      sender: "InnovateLab LLC",
      senderEmail: "support@innovatelab.com",
      senderType: "Business",
      content: "Bizga qo'shimcha xizmatlar kerak. Korporativ paket haqida ma'lumot bering.",
      priority: "Past",
      status: "read",
      category: "Savdo",
      createdAt: "2024-01-15 11:20",
      avatar: "/placeholder.svg?height=32&width=32",
      hasAttachment: false,
    },
    {
      id: 5,
      subject: "Parol tiklash muammosi",
      sender: "Jasur Toshev",
      senderEmail: "jasur@example.com",
      senderType: "User",
      content: "Parolimni tiklay olmayapman. Email kelmayapti.",
      priority: "O'rta",
      status: "replied",
      category: "Hisob",
      createdAt: "2024-01-15 10:10",
      avatar: "/placeholder.svg?height=32&width=32",
      hasAttachment: false,
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
      case "unread":
        return <Badge className="bg-blue-900/30 text-blue-300">O'qilmagan</Badge>
      case "read":
        return <Badge className="bg-gray-700 text-gray-300">O'qilgan</Badge>
      case "replied":
        return <Badge className="bg-green-900/30 text-green-300">Javob berilgan</Badge>
      default:
        return <Badge variant="secondary">Noma'lum</Badge>
    }
  }

  const getUserTypeIcon = (userType: string) => {
    return userType === "Business" ? <Building2 className="h-4 w-4" /> : <Users className="h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <AdminSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Xabarlar Boshqaruvi</h1>
              <p className="text-gray-400">Foydalanuvchi xabarlarini ko'ring va javob bering</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <Filter className="h-4 w-4 mr-2" />
                Filtr
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Yangi Xabar
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {messageStats.map((stat, index) => (
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
                    o'tgan haftadan
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Messages Table */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <CardTitle className="text-white">Barcha Xabarlar</CardTitle>
                  <CardDescription className="text-gray-400">
                    Foydalanuvchi xabarlarini ko'ring va boshqaring
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Xabarlarni qidirish..."
                      className="pl-10 w-64 bg-[#0e0e1a] border-purple-900/30 text-white"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-40 bg-[#0e0e1a] border-purple-900/30 text-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                      <SelectItem value="all">Barchasi</SelectItem>
                      <SelectItem value="unread">O'qilmagan</SelectItem>
                      <SelectItem value="read">O'qilgan</SelectItem>
                      <SelectItem value="replied">Javob berilgan</SelectItem>
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
                      <TableHead className="text-gray-400">Jo'natuvchi</TableHead>
                      <TableHead className="text-gray-400">Mavzu</TableHead>
                      <TableHead className="text-gray-400">Kategoriya</TableHead>
                      
                      <TableHead className="text-gray-400">Ustuvorlik</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                      <TableHead className="text-gray-400">Sana</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages.map((message) => (
                      <TableRow 
                        key={message.id} 
                        className={`border-purple-900/30 hover:bg-[#1a1a2e] cursor-pointer ${
                          selectedMessage === message.id ? 'bg-[#1a1a2e]' : ''
                        }`}
                        onClick={() => setSelectedMessage(message.id)}
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-900/50 rounded-full flex items-center justify-center text-purple-200 font-bold">
                              {message.sender.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-white">{message.sender}</p>
                                {getUserTypeIcon(message.senderType)}
                              </div>
                              <p className="text-sm text-gray-400">{message.senderEmail}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium text-white">{message.subject}</p>
                            <p className="text-sm text-gray-400 truncate max-w-xs">{message.content}</p>
                            {message.hasAttachment && (
                              <Badge variant="outline" className="text-xs mt-1 border-purple-700 text-purple-300">
                                Biriktirma
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-purple-700 text-purple-300">
                            {message.category}
                          </Badge>
                        </TableCell>
                        <TableCell>{getPriorityBadge(message.priority)}</TableCell>
                        <TableCell>{getStatusBadge(message.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-gray-400">
                            <Clock className="h-3 w-3" />
                            <span className="text-sm">{message.createdAt}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-purple-400 hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedMessage(message.id)
                            }}
                          >
                            Ko'rish
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Message Detail Modal/Panel */}
          {selectedMessage && (
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">
                      {messages.find(m => m.id === selectedMessage)?.subject}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {messages.find(m => m.id === selectedMessage)?.sender} dan xabar
                    </CardDescription>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedMessage(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/20">
                    <p className="text-gray-200 leading-relaxed">
                      {messages.find(m => m.id === selectedMessage)?.content}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {getPriorityBadge(messages.find(m => m.id === selectedMessage)?.priority || '')}
                    {getStatusBadge(messages.find(m => m.id === selectedMessage)?.status || '')}
                    <Badge variant="outline" className="border-purple-700 text-purple-300">
                      {messages.find(m => m.id === selectedMessage)?.category}
                    </Badge>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                      Javob Berish
                    </Button>
                    <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                      Boshqa Xodimga Topshirish
                    </Button>
                    <Button variant="outline" className="border-gray-700 text-gray-400 hover:bg-gray-900/20">
                      Yopish
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
