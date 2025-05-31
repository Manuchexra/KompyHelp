"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TicketForm } from "@/components/ticket-form"
import { Computer, Ticket, Clock, CheckCircle, Plus, MessageSquare, Phone, Mail } from "lucide-react"

export default function UserDashboard() {
  const [showTicketForm, setShowTicketForm] = useState(false)
  const [userTickets, setUserTickets] = useState([])

  // Mock user data
  const user = {
    name: "Aziz Karimov",
    email: "aziz@example.com",
    phone: "+998 90 123 45 67",
    avatar: "/placeholder.svg?height=40&width=40",
    totalTickets: 5,
    resolvedTickets: 3,
  }

  const mockTickets = [
    {
      id: "T-001",
      issue: "Kompyuter ishlamayapti",
      status: "in-progress",
      priority: "high",
      created: "2024-01-15",
      assignedTo: "Sardor Usmonov",
    },
    {
      id: "T-002",
      issue: "Internet sekin ishlayapti",
      status: "resolved",
      priority: "medium",
      created: "2024-01-10",
      assignedTo: "Aziza Rahimova",
    },
    {
      id: "T-003",
      issue: "Dastur o'rnatish kerak",
      status: "open",
      priority: "low",
      created: "2024-01-08",
      assignedTo: null,
    },
  ]

  useEffect(() => {
    setUserTickets(mockTickets)
  }, [])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge variant="destructive">Ochiq</Badge>
      case "in-progress":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Jarayonda</Badge>
      case "resolved":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
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
        return <Badge variant="destructive">Yuqori</Badge>
      case "medium":
        return <Badge variant="default">O'rta</Badge>
      case "low":
        return <Badge variant="secondary">Past</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  if (showTicketForm) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Computer className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">KompyHelp</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Yordam
              </Button>
              <Avatar>
                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Xush kelibsiz, {user.name}!</h1>
              <p className="text-blue-100">Sizning shaxsiy dashboard'ingiz</p>
            </div>
            <Button
              onClick={() => setShowTicketForm(true)}
              className="mt-4 md:mt-0 bg-white text-blue-600 hover:bg-gray-100"
            >
              <Plus className="h-4 w-4 mr-2" />
              Yangi So'rov
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jami So'rovlar</CardTitle>
              <Ticket className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.totalTickets}</div>
              <p className="text-xs text-muted-foreground">Barcha vaqt davomida</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hal qilingan</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.resolvedTickets}</div>
              <p className="text-xs text-muted-foreground">Muvaffaqiyatli yakunlangan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faol So'rovlar</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.totalTickets - user.resolvedTickets}</div>
              <p className="text-xs text-muted-foreground">Hozirda jarayonda</p>
            </CardContent>
          </Card>
        </div>

        {/* Tickets List */}
        <Card>
          <CardHeader>
            <CardTitle>Sizning So'rovlaringiz</CardTitle>
            <CardDescription>Barcha texnik yordam so'rovlari</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-medium text-sm text-gray-600">{ticket.id}</span>
                      {getStatusBadge(ticket.status)}
                      {getPriorityBadge(ticket.priority)}
                    </div>
                    <h3 className="font-medium">{ticket.issue}</h3>
                    <p className="text-sm text-gray-600">
                      Yaratilgan: {ticket.created}
                      {ticket.assignedTo && ` • Tayinlangan: ${ticket.assignedTo}`}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Ko'rish
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tezkor Aloqa</CardTitle>
              <CardDescription>Shoshilinch yordam kerak bo'lsa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <p className="text-sm text-gray-600">+998 90 123 45 67</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-600">support@kompyhelp.uz</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ish Vaqti</CardTitle>
              <CardDescription>Qachon yordam olishingiz mumkin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Dushanba - Juma</span>
                <span className="font-medium">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Shanba</span>
                <span className="font-medium">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Yakshanba</span>
                <span className="font-medium">Yopiq</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between">
                  <span>Shoshilinch yordam</span>
                  <span className="font-medium text-green-600">24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
