"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UserSidebar } from "@/components/user-sidebar"
import { TicketForm } from "@/components/ticket-form"
import { Ticket, Clock, CheckCircle, Plus, MessageSquare, Phone, Mail, Star, FileText } from "lucide-react"

export default function UserDashboard() {
  const [showTicketForm, setShowTicketForm] = useState(false)
  const [userTickets, setUserTickets] = useState([])

  // Mock user data
  const user = {
    name: "Aziz Karimov",
    email: "aziz@example.com",
    phone: "+998 90 123 45 67",
    totalTickets: 5,
    resolvedTickets: 3,
    memberSince: "2024-01-15",
    plan: "Asosiy Yordam",
  }

  const mockTickets = [
    {
      id: "T-001",
      issue: "Kompyuter ishlamayapti",
      status: "in-progress",
      priority: "high",
      created: "2024-01-15",
      assignedTo: "Sardor Usmonov",
      rating: null,
    },
    {
      id: "T-002",
      issue: "Internet sekin ishlayapti",
      status: "resolved",
      priority: "medium",
      created: "2024-01-10",
      assignedTo: "Aziza Rahimova",
      rating: 5,
    },
    {
      id: "T-003",
      issue: "Dastur o'rnatish kerak",
      status: "open",
      priority: "low",
      created: "2024-01-08",
      assignedTo: null,
      rating: null,
    },
  ]

  const quickActions = [
    { title: "Yangi So'rov", icon: Plus, color: "bg-blue-600 hover:bg-blue-700" },
    { title: "Chat Yordam", icon: MessageSquare, color: "bg-green-600 hover:bg-green-700" },
    { title: "Qo'ng'iroq", icon: Phone, color: "bg-purple-600 hover:bg-purple-700" },
    { title: "Bilim Bazasi", icon: FileText, color: "bg-orange-600 hover:bg-orange-700" },
  ]

  useEffect(() => {
    setUserTickets(mockTickets)
  }, [])

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

  if (showTicketForm) {
    return (
      <div className="min-h-screen bg-[#0e0e1a]">
        <UserSidebar />
        <div className="lg:pl-64 p-6">
          <TicketForm
            onSubmit={(data) => {
              setUserTickets([data, ...userTickets])
              setShowTicketForm(false)
            }}
            onCancel={() => setShowTicketForm(false)}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <UserSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Xush kelibsiz, {user.name}!</h1>
                <p className="text-purple-100">Sizning shaxsiy dashboard'ingiz</p>
                <p className="text-sm text-purple-200 mt-1">
                  Reja: {user.plan} • A'zo: {user.memberSince}
                </p>
              </div>
              <Button
                onClick={() => setShowTicketForm(true)}
                className="mt-4 md:mt-0 bg-white text-purple-600 hover:bg-gray-100"
              >
                <Plus className="h-4 w-4 mr-2" />
                Yangi So'rov
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                className={`h-20 flex-col ${action.color} text-white`}
                onClick={() => {
                  if (action.title === "Yangi So'rov") setShowTicketForm(true)
                }}
              >
                <action.icon className="h-6 w-6 mb-2" />
                {action.title}
              </Button>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Jami So'rovlar</CardTitle>
                <Ticket className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{user.totalTickets}</div>
                <p className="text-xs text-gray-400">Barcha vaqt davomida</p>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Hal qilingan</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{user.resolvedTickets}</div>
                <p className="text-xs text-gray-400">Muvaffaqiyatli yakunlangan</p>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Faol So'rovlar</CardTitle>
                <Clock className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{user.totalTickets - user.resolvedTickets}</div>
                <p className="text-xs text-gray-400">Hozirda jarayonda</p>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Reyting</CardTitle>
                <Star className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">4.8</div>
                <p className="text-xs text-gray-400">O'rtacha baholash</p>
              </CardContent>
            </Card>
          </div>

          {/* Tickets List */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <CardTitle className="text-white">Sizning So'rovlaringiz</CardTitle>
              <CardDescription className="text-gray-400">Barcha texnik yordam so'rovlari</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-center justify-between p-4 border border-purple-900/20 rounded-lg hover:bg-[#1a1a2e] transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium text-sm text-gray-400">{ticket.id}</span>
                        {getStatusBadge(ticket.status)}
                        {getPriorityBadge(ticket.priority)}
                        {ticket.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-yellow-500">{ticket.rating}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-medium text-white">{ticket.issue}</h3>
                      <p className="text-sm text-gray-400">
                        Yaratilgan: {ticket.created}
                        {ticket.assignedTo && ` • Tayinlangan: ${ticket.assignedTo}`}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-700 text-purple-400 hover:bg-purple-900/20"
                      >
                        Ko'rish
                      </Button>
                      {ticket.status === "resolved" && !ticket.rating && (
                        <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                          Baholash
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact & Support Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white">Tezkor Aloqa</CardTitle>
                <CardDescription className="text-gray-400">Shoshilinch yordam kerak bo'lsa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="font-medium text-white">Telefon</p>
                    <p className="text-sm text-gray-400">+998 90 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-400">support@kompyhelp.uz</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="font-medium text-white">Jonli Chat</p>
                    <p className="text-sm text-gray-400">24/7 onlayn yordam</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white">Ish Vaqti</CardTitle>
                <CardDescription className="text-gray-400">Qachon yordam olishingiz mumkin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Dushanba - Juma</span>
                  <span className="font-medium text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Shanba</span>
                  <span className="font-medium text-white">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Yakshanba</span>
                  <span className="font-medium text-white">Yopiq</span>
                </div>
                <div className="pt-2 border-t border-purple-900/20">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Shoshilinch yordam</span>
                    <span className="font-medium text-green-400">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
