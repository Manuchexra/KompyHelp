"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminSidebar } from "@/components/admin-sidebar"
import { TrendingUp, Users, Ticket, DollarSign, Clock, CheckCircle, AlertTriangle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function AdminAnalyticsPage() {
  const analyticsStats = [
    {
      title: "Jami Foydalanuvchilar",
      value: "3,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
    {
      title: "Oylik Daromad",
      value: "$45,230",
      change: "+18%",
      icon: DollarSign,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Hal Qilingan Tiketlar",
      value: "1,456",
      change: "+25%",
      icon: CheckCircle,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
    },
    {
      title: "O'rtacha Javob Vaqti",
      value: "2.4 soat",
      change: "-15%",
      icon: Clock,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
  ]

  const monthlyData = [
    { month: "Yanvar", users: 2800, revenue: 38000, tickets: 1200, satisfaction: 92 },
    { month: "Fevral", users: 2950, revenue: 41000, tickets: 1350, satisfaction: 94 },
    { month: "Mart", users: 3100, revenue: 43500, tickets: 1400, satisfaction: 93 },
    { month: "Aprel", users: 3247, revenue: 45230, tickets: 1456, satisfaction: 95 },
  ]

  const categoryStats = [
    { category: "Texnik Yordam", tickets: 456, percentage: 35, color: "bg-blue-500" },
    { category: "Tarmoq Muammolari", tickets: 298, percentage: 23, color: "bg-green-500" },
    { category: "Dasturiy Ta'minot", tickets: 234, percentage: 18, color: "bg-purple-500" },
    { category: "Apparat Muammolari", tickets: 189, percentage: 14, color: "bg-orange-500" },
    { category: "Boshqa", tickets: 130, percentage: 10, color: "bg-gray-500" },
  ]

  const topPerformers = [
    { name: "Sardor Usmonov", resolved: 89, rating: 4.9, avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Malika Tosheva", resolved: 76, rating: 4.8, avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Aziz Karimov", resolved: 65, rating: 4.7, avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Jasur Toshev", resolved: 58, rating: 4.6, avatar: "/placeholder.svg?height=32&width=32" },
  ]

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <AdminSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Analitika va Hisobotlar</h1>
              <p className="text-gray-400">Tizim ishlashi va biznes ko'rsatkichlarini tahlil qiling</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Select>
                <SelectTrigger className="w-40 bg-[#12121e] border-purple-900/30 text-white">
                  <SelectValue placeholder="Davr" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                  <SelectItem value="7d">7 kun</SelectItem>
                  <SelectItem value="30d">30 kun</SelectItem>
                  <SelectItem value="90d">90 kun</SelectItem>
                  <SelectItem value="1y">1 yil</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <Download className="h-4 w-4 mr-2" />
                Hisobotni Yuklab Olish
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsStats.map((stat, index) => (
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Trends */}
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white">Oylik Tendentsiyalar</CardTitle>
                <CardDescription className="text-gray-400">So'nggi 4 oylik ko'rsatkichlar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-300">{data.month}</span>
                        <div className="flex gap-4 text-xs">
                          <span className="text-blue-400">{data.users} foydalanuvchi</span>
                          <span className="text-green-400">${data.revenue}</span>
                          <span className="text-purple-400">{data.tickets} tiket</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Progress value={(data.users / 3500) * 100} className="flex-1 h-2" />
                        <span className="text-xs text-gray-400">{data.satisfaction}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white">Tiket Kategoriyalari</CardTitle>
                <CardDescription className="text-gray-400">Muammolar bo'yicha taqsimot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryStats.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-300">{category.category}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">{category.tickets}</span>
                          <span className="text-xs text-gray-400">{category.percentage}%</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${category.color}`}
                            style={{ width: `${category.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Performers */}
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white">Eng Yaxshi Xodimlar</CardTitle>
                <CardDescription className="text-gray-400">Oy davomida eng ko'p tiket hal qilganlar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((performer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-purple-900/20 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-900/50 rounded-full flex items-center justify-center text-purple-200 font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-white">{performer.name}</p>
                          <p className="text-xs text-gray-400">{performer.resolved} tiket hal qildi</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4 text-yellow-400" />
                          <span className="text-yellow-400 font-medium">{performer.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white">Tizim Salomatligi</CardTitle>
                <CardDescription className="text-gray-400">Real vaqt tizim ko'rsatkichlari</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Server Ishlashi</span>
                    <div className="flex items-center gap-2">
                      <Progress value={99.9} className="w-20 h-2" />
                      <span className="text-green-400 font-medium">99.9%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Javob Vaqti</span>
                    <div className="flex items-center gap-2">
                      <Progress value={85} className="w-20 h-2" />
                      <span className="text-blue-400 font-medium">1.2s</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Ma'lumotlar Bazasi</span>
                    <div className="flex items-center gap-2">
                      <Progress value={78} className="w-20 h-2" />
                      <span className="text-yellow-400 font-medium">78%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Xotira Foydalanishi</span>
                    <div className="flex items-center gap-2">
                      <Progress value={67} className="w-20 h-2" />
                      <span className="text-orange-400 font-medium">67%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Faol Seanslar</span>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-medium">1,247</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity Summary */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <CardTitle className="text-white">So'nggi Faoliyat Xulosasi</CardTitle>
              <CardDescription className="text-gray-400">Bugungi asosiy hodisalar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-purple-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Ticket className="h-5 w-5 text-blue-400" />
                    <span className="font-medium text-white">Yangi Tiketlar</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">23</div>
                  <div className="text-xs text-gray-400">Bugun yaratildi</div>
                </div>
                <div className="p-4 border border-purple-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="font-medium text-white">Hal Qilingan</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">18</div>
                  <div className="text-xs text-gray-400">Bugun yopildi</div>
                </div>
                <div className="p-4 border border-purple-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-purple-400" />
                    <span className="font-medium text-white">Yangi Foydalanuvchilar</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">12</div>
                  <div className="text-xs text-gray-400">Bugun ro'yxatdan o'tdi</div>
                </div>
                <div className="p-4 border border-purple-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-orange-400" />
                    <span className="font-medium text-white">Yuqori Ustuvorlik</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-400">3</div>
                  <div className="text-xs text-gray-400">Hal qilinishi kerak</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
