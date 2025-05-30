"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { UserSidebar } from "@/components/user-sidebar"
import { TicketForm } from "@/components/ticket-form"
import { Ticket, Search, Filter, Plus, Eye, MessageSquare, Star } from "lucide-react"

export default function UserTicketsPage() {
  const [showTicketForm, setShowTicketForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const userTickets = [
    {
      id: "T-001",
      issue: "Kompyuter ishlamayapti",
      description: "Kompyuter yoqilganda qora ekran ko'rsatadi va hech narsa ishlamayapti",
      status: "in-progress",
      priority: "high",
      created: "2024-01-15",
      updated: "2024-01-16",
      assignedTo: "Sardor Usmonov",
      rating: null,
      category: "Hardware",
      responses: 3,
    },
    {
      id: "T-002",
      issue: "Internet sekin ishlayapti",
      description: "Internet tezligi juda sekin, sahifalar uzoq yuklanyapti",
      status: "resolved",
      priority: "medium",
      created: "2024-01-10",
      updated: "2024-01-12",
      assignedTo: "Aziza Rahimova",
      rating: 5,
      category: "Network",
      responses: 5,
    },
    {
      id: "T-003",
      issue: "Dastur o'rnatish kerak",
      description: "Microsoft Office ni o'rnatish kerak ish uchun",
      status: "open",
      priority: "low",
      created: "2024-01-08",
      updated: "2024-01-08",
      assignedTo: null,
      rating: null,
      category: "Software",
      responses: 0,
    },
    {
      id: "T-004",
      issue: "Printer ishlamayapti",
      description: "Printer hujjatlarni chop eta olmayapti, xato beradi",
      status: "in-progress",
      priority: "medium",
      created: "2024-01-05",
      updated: "2024-01-07",
      assignedTo: "Bekzod Karimov",
      rating: null,
      category: "Hardware",
      responses: 2,
    },
  ]

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

  const filteredTickets = userTickets.filter(
    (ticket) =>
      ticket.issue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (showTicketForm) {
    return (
      <div className="min-h-screen bg-[#0e0e1a]">
        <UserSidebar />
        <div className="lg:pl-64 p-6">
          <TicketForm
            onSubmit={(data) => {
              console.log("Yangi tiket:", data)
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
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Mening So'rovlarim</h1>
              <p className="text-gray-400">Barcha texnik yordam so'rovlaringiz</p>
            </div>
            <Button onClick={() => setShowTicketForm(true)} className="bg-purple-700 hover:bg-purple-800">
              <Plus className="h-4 w-4 mr-2" />
              Yangi So'rov
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tiketlarni qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#12121e] border-purple-900/30 text-white"
              />
            </div>
            <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
              <Filter className="h-4 w-4 mr-2" />
              Filtr
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Jami</p>
                    <p className="text-2xl font-bold text-white">{userTickets.length}</p>
                  </div>
                  <Ticket className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Ochiq</p>
                    <p className="text-2xl font-bold text-white">
                      {userTickets.filter((t) => t.status === "open").length}
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Jarayonda</p>
                    <p className="text-2xl font-bold text-white">
                      {userTickets.filter((t) => t.status === "in-progress").length}
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Hal qilindi</p>
                    <p className="text-2xl font-bold text-white">
                      {userTickets.filter((t) => t.status === "resolved").length}
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tickets List */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <CardTitle className="text-white">Barcha Tiketlar</CardTitle>
              <CardDescription className="text-gray-400">{filteredTickets.length} ta tiket topildi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-start justify-between p-6 border border-purple-900/20 rounded-lg hover:bg-[#1a1a2e] transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-bold text-purple-400">{ticket.id}</span>
                        {getStatusBadge(ticket.status)}
                        {getPriorityBadge(ticket.priority)}
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {ticket.category}
                        </Badge>
                        {ticket.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-yellow-500">{ticket.rating}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="font-semibold text-white text-lg mb-2">{ticket.issue}</h3>
                      <p className="text-gray-400 text-sm mb-3">{ticket.description}</p>

                      <div className="text-xs text-gray-500 space-y-1">
                        <div>Yaratilgan: {ticket.created}</div>
                        <div>Yangilangan: {ticket.updated}</div>
                        {ticket.assignedTo && <div>Tayinlangan: {ticket.assignedTo}</div>}
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {ticket.responses} ta javob
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-700 text-purple-400 hover:bg-purple-900/20"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Ko'rish
                      </Button>
                      {ticket.status === "resolved" && !ticket.rating && (
                        <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                          <Star className="h-4 w-4 mr-2" />
                          Baholash
                        </Button>
                      )}
                      {ticket.status !== "resolved" && (
                        <Button size="sm" variant="outline" className="border-blue-700 text-blue-400">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Chat
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
