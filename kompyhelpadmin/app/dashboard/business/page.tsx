"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BusinessSidebar } from "@/components/business-sidebar"
import { Ticket, Calendar, Clock, CheckCircle, DollarSign, Zap, Plus } from "lucide-react"

export default function BusinessDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock business data
  const businessData = {
    company: "TechCorp Solutions",
    plan: "Korporativ",
    employees: 150,
    monthlyTickets: 45,
    resolvedTickets: 42,
    avgResponseTime: "15 daqiqa",
    uptime: 99.8,
    monthlyCost: 2500,
    contractEnd: "2024-12-31",
  }

  const tickets = [
    {
      id: "B-001",
      title: "Server texnik xizmati kerak",
      department: "IT Bo'limi",
      priority: "high",
      status: "in-progress",
      assignedTo: "Katta Texnik Guruh",
      created: "2 soat oldin",
      employee: "John Smith",
    },
    {
      id: "B-002",
      title: "Tarmoq ulanish muammolari",
      department: "Savdo",
      priority: "medium",
      status: "open",
      assignedTo: null,
      created: "4 soat oldin",
      employee: "Sarah Johnson",
    },
    {
      id: "B-003",
      title: "Dastur o'rnatish",
      department: "Marketing",
      priority: "low",
      status: "resolved",
      assignedTo: "Texnik Yordam",
      created: "1 kun oldin",
      employee: "Mike Wilson",
    },
  ]

  const departments = [
    { name: "IT Bo'limi", tickets: 15, employees: 25 },
    { name: "Savdo", tickets: 12, employees: 40 },
    { name: "Marketing", tickets: 8, employees: 30 },
    { name: "Moliya", tickets: 6, employees: 20 },
    { name: "Kadrlar", tickets: 4, employees: 15 },
  ]

  const monthlyStats = [
    { month: "Yan", tickets: 38, resolved: 36 },
    { month: "Fev", tickets: 42, resolved: 40 },
    { month: "Mar", tickets: 45, resolved: 42 },
    { month: "Apr", tickets: 39, resolved: 38 },
    { month: "May", tickets: 45, resolved: 42 },
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

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <BusinessSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Xush kelibsiz, {businessData.company}</h1>
                <p className="text-purple-100">Biznes IT Boshqaruv Dashboard'i</p>
                <p className="text-sm text-purple-200 mt-1">
                  {businessData.employees} xodim • Shartnoma tugaydi: {businessData.contractEnd}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  <Plus className="h-4 w-4 mr-2" />
                  Yangi Tiket
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Calendar className="h-4 w-4 mr-2" />
                  Texnik Xizmat
                </Button>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Oylik Tiketlar</CardTitle>
                <Ticket className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{businessData.monthlyTickets}</div>
                <p className="text-xs text-gray-400">
                  <span className="text-green-400">+12%</span> o'tgan oydan
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Hal Qilish Darajasi</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">93.3%</div>
                <Progress value={93.3} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">O'rtacha Javob</CardTitle>
                <Clock className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{businessData.avgResponseTime}</div>
                <p className="text-xs text-gray-400">
                  <span className="text-green-400">-5 daqiqa</span> yaxshilash
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Tizim Ishlashi</CardTitle>
                <Zap className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{businessData.uptime}%</div>
                <Progress value={businessData.uptime} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-[#12121e] border border-purple-900/30">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Umumiy Ko'rinish
              </TabsTrigger>
              <TabsTrigger
                value="tickets"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Tiketlar
              </TabsTrigger>
              <TabsTrigger
                value="departments"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Bo'limlar
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Analitika
              </TabsTrigger>
              <TabsTrigger
                value="billing"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Hisob-kitob
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Tickets */}
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">So'nggi Tiketlar</CardTitle>
                    <CardDescription className="text-gray-400">Jamoangizdan so'nggi yordam so'rovlari</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {tickets.slice(0, 3).map((ticket) => (
                      <div
                        key={ticket.id}
                        className="flex items-center justify-between p-4 border border-purple-900/20 rounded-lg"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-white">{ticket.id}</span>
                            {getStatusBadge(ticket.status)}
                            {getPriorityBadge(ticket.priority)}
                          </div>
                          <p className="text-sm text-gray-300">{ticket.title}</p>
                          <p className="text-xs text-gray-400">
                            {ticket.department} • {ticket.employee}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Department Overview */}
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Bo'limlar Faolligi</CardTitle>
                    <CardDescription className="text-gray-400">Bu oyda bo'limlar bo'yicha tiketlar</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {departments.slice(0, 5).map((dept) => (
                      <div key={dept.name} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-white">{dept.name}</p>
                          <p className="text-sm text-gray-400">{dept.employees} xodim</p>
                        </div>
                        <Badge className="bg-purple-900/30 text-purple-300">{dept.tickets} tiket</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Service Level Agreement */}
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Xizmat Darajasi Kelishuvi (SLA)</CardTitle>
                  <CardDescription className="text-gray-400">Joriy oy ishlash ko'rsatkichlari</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/20">
                      <div className="text-2xl font-bold text-green-400">98.5%</div>
                      <div className="text-sm text-gray-400">Ishlash maqsadi: 99%</div>
                      <Progress value={98.5} className="mt-2" />
                    </div>
                    <div className="text-center p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/20">
                      <div className="text-2xl font-bold text-blue-400">15 daqiqa</div>
                      <div className="text-sm text-gray-400">Javob maqsadi: 30 daqiqa</div>
                      <Progress value={50} className="mt-2" />
                    </div>
                    <div className="text-center p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/20">
                      <div className="text-2xl font-bold text-purple-400">93.3%</div>
                      <div className="text-sm text-gray-400">Hal qilish maqsadi: 90%</div>
                      <Progress value={93.3} className="mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tickets" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-white">Barcha Tiketlar</CardTitle>
                      <CardDescription className="text-gray-400">
                        Tashkilotingiz uchun barcha yordam tiketlarini boshqaring
                      </CardDescription>
                    </div>
                    <Button className="bg-purple-700 hover:bg-purple-800">
                      <Plus className="h-4 w-4 mr-2" />
                      Yangi Tiket
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tickets.map((ticket) => (
                      <div
                        key={ticket.id}
                        className="flex items-center justify-between p-4 border border-purple-900/20 rounded-lg hover:bg-[#1a1a2e] transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-medium text-white">{ticket.id}</span>
                            {getStatusBadge(ticket.status)}
                            {getPriorityBadge(ticket.priority)}
                          </div>
                          <h3 className="font-medium text-white">{ticket.title}</h3>
                          <p className="text-sm text-gray-400">
                            {ticket.department} • {ticket.employee} • {ticket.created}
                            {ticket.assignedTo && ` • Tayinlangan: ${ticket.assignedTo}`}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-700 text-purple-400 hover:bg-purple-900/20"
                        >
                          Batafsil Ko'rish
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="departments" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Bo'limlar Boshqaruvi</CardTitle>
                  <CardDescription className="text-gray-400">Bo'limlar bo'yicha IT yordam ko'rinishi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {departments.map((dept) => (
                      <Card key={dept.name} className="bg-[#0e0e1a] border-purple-900/20">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-white">{dept.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Xodimlar:</span>
                              <span className="text-white">{dept.employees}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Faol Tiketlar:</span>
                              <span className="text-white">{dept.tickets}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Xodim boshiga:</span>
                              <span className="text-white">{(dept.tickets / dept.employees).toFixed(1)}</span>
                            </div>
                          </div>
                          <Button className="w-full mt-4 bg-purple-700 hover:bg-purple-800" size="sm">
                            Batafsil Ko'rish
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Oylik Tendensiyalar</CardTitle>
                    <CardDescription className="text-gray-400">
                      Tiket hajmi va hal qilish tendensiyalari
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {monthlyStats.map((stat) => (
                        <div key={stat.month} className="flex items-center justify-between">
                          <span className="text-gray-300">{stat.month}</span>
                          <div className="flex items-center gap-4">
                            <div className="text-sm">
                              <span className="text-blue-400">{stat.tickets}</span>
                              <span className="text-gray-400"> / </span>
                              <span className="text-green-400">{stat.resolved}</span>
                            </div>
                            <Progress value={(stat.resolved / stat.tickets) * 100} className="w-20" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Ishlash Ko'rsatkichlari</CardTitle>
                    <CardDescription className="text-gray-400">Asosiy ishlash ko'rsatkichlari</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Birinchi Javob Vaqti</span>
                          <span className="text-white">15 daqiqa</span>
                        </div>
                        <Progress value={75} />
                        <p className="text-xs text-gray-400 mt-1">Maqsad: 30 daqiqa</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Hal Qilish Vaqti</span>
                          <span className="text-white">4.2 soat</span>
                        </div>
                        <Progress value={85} />
                        <p className="text-xs text-gray-400 mt-1">Maqsad: 8 soat</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Mijoz Mamnuniyati</span>
                          <span className="text-white">4.8/5</span>
                        </div>
                        <Progress value={96} />
                        <p className="text-xs text-gray-400 mt-1">Maqsad: 4.5/5</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Joriy Reja</CardTitle>
                    <CardDescription className="text-gray-400">Sizning obuna tafsilotlari</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Reja:</span>
                        <Badge className="bg-purple-900/30 text-purple-300">{businessData.plan}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Oylik To'lov:</span>
                        <span className="text-white font-bold">${businessData.monthlyCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Qamrab Olingan Xodimlar:</span>
                        <span className="text-white">{businessData.employees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Shartnoma Tugashi:</span>
                        <span className="text-white">{businessData.contractEnd}</span>
                      </div>
                      <Button className="w-full bg-purple-700 hover:bg-purple-800">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Hisob-kitob Tarixi
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Bu Oyda Foydalanish</CardTitle>
                    <CardDescription className="text-gray-400">Xizmat foydalanish taqsimoti</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Yordam Tiketlari</span>
                          <span className="text-white">{businessData.monthlyTickets}/100</span>
                        </div>
                        <Progress value={(businessData.monthlyTickets / 100) * 100} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Muhim Yordam Soatlari</span>
                          <span className="text-white">12/50</span>
                        </div>
                        <Progress value={24} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Masofaviy Seanslar</span>
                          <span className="text-white">8/25</span>
                        </div>
                        <Progress value={32} />
                      </div>
                      <div className="pt-4 border-t border-purple-900/20">
                        <p className="text-sm text-gray-400">
                          Siz oylik ajratmangizning <span className="text-purple-400">45%</span>ini ishlatmoqdasiz
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
