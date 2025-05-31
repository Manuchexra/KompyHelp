"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Server,
  Database,
  Wifi,
  HardDrive,
  Cpu,
  MemoryStick,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  RefreshCw,
  Download,
  Settings,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminSystemPage() {
  const systemMetrics = [
    {
      title: "Server Ishlashi",
      value: "99.9%",
      status: "excellent",
      icon: Server,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Ma'lumotlar Bazasi",
      value: "Sog'lom",
      status: "good",
      icon: Database,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
    {
      title: "Tarmoq Holati",
      value: "Barqaror",
      status: "excellent",
      icon: Wifi,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Xavfsizlik",
      value: "Himoyalangan",
      status: "excellent",
      icon: Shield,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
    },
  ]

  const resourceUsage = [
    { name: "CPU Foydalanishi", value: 45, max: 100, unit: "%", color: "bg-blue-500" },
    { name: "RAM Foydalanishi", value: 67, max: 100, unit: "%", color: "bg-green-500" },
    { name: "Disk Maydoni", value: 23, max: 100, unit: "%", color: "bg-purple-500" },
    { name: "Tarmoq Trafigi", value: 34, max: 100, unit: "%", color: "bg-orange-500" },
  ]

  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      title: "Ma'lumotlar bazasi zaxira nusxasi rejalashtirilgan",
      description: "Texnik xizmat oynasi: 2:00 - 4:00",
      time: "2 soat oldin",
    },
    {
      id: 2,
      type: "info",
      title: "Tizim yangilanishi muvaffaqiyatli",
      description: "Versiya 2.1.4 joylashtirildi",
      time: "6 soat oldin",
    },
    {
      id: 3,
      type: "success",
      title: "Xavfsizlik skaneri yakunlandi",
      description: "Hech qanday zaiflik aniqlanmadi",
      time: "1 kun oldin",
    },
  ]

  const serverStats = [
    { name: "Javob Vaqti", value: "1.2s", status: "good" },
    { name: "Faol Ulanishlar", value: "1,247", status: "normal" },
    { name: "So'rovlar/Soniya", value: "456", status: "good" },
    { name: "Xatoliklar Soni", value: "0.02%", status: "excellent" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-400"
      case "good":
        return "text-blue-400"
      case "normal":
        return "text-yellow-400"
      case "warning":
        return "text-orange-400"
      case "critical":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return <Badge className="bg-green-900/30 text-green-300">A'lo</Badge>
      case "good":
        return <Badge className="bg-blue-900/30 text-blue-300">Yaxshi</Badge>
      case "normal":
        return <Badge className="bg-yellow-900/30 text-yellow-300">Normal</Badge>
      case "warning":
        return <Badge className="bg-orange-900/30 text-orange-300">Ogohlantirish</Badge>
      case "critical":
        return <Badge className="bg-red-900/30 text-red-300">Kritik</Badge>
      default:
        return <Badge variant="secondary">Noma'lum</Badge>
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "info":
        return <CheckCircle className="h-5 w-5 text-blue-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <AdminSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Tizim Salomatligi</h1>
              <p className="text-gray-400">Server va tizim ko'rsatkichlarini monitoring qiling</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <RefreshCw className="h-4 w-4 mr-2" />
                Yangilash
              </Button>
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <Download className="h-4 w-4 mr-2" />
                Hisobot
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                <Settings className="h-4 w-4 mr-2" />
                Sozlamalar
              </Button>
            </div>
          </div>

          {/* System Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric, index) => (
              <Card key={index} className="bg-[#12121e] border-purple-900/30 hover:border-purple-500/50 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">{metric.title}</CardTitle>
                  <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                    <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="mt-2">{getStatusBadge(metric.status)}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-[#12121e] border border-purple-900/30">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Umumiy Ko'rinish
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Resurslar
              </TabsTrigger>
              <TabsTrigger
                value="alerts"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Ogohlantirishlar
              </TabsTrigger>
              <TabsTrigger
                value="performance"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Ishlash
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Server Statistics */}
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Server Statistikasi</CardTitle>
                    <CardDescription className="text-gray-400">Real vaqt server ko'rsatkichlari</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {serverStats.map((stat, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border border-purple-900/20 rounded-lg"
                        >
                          <span className="text-gray-300">{stat.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white">{stat.value}</span>
                            {getStatusBadge(stat.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* System Health Overview */}
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Tizim Salomatligi</CardTitle>
                    <CardDescription className="text-gray-400">Asosiy komponentlar holati</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Server className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300">Web Server</span>
                        </div>
                        <Badge className="bg-green-900/30 text-green-300">Ishlayapti</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-300">Ma'lumotlar Bazasi</span>
                        </div>
                        <Badge className="bg-blue-900/30 text-blue-300">Sog'lom</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Wifi className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300">Tarmoq</span>
                        </div>
                        <Badge className="bg-green-900/30 text-green-300">Barqaror</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-purple-400" />
                          <span className="text-gray-300">Xavfsizlik</span>
                        </div>
                        <Badge className="bg-purple-900/30 text-purple-300">Himoyalangan</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Resurs Foydalanishi</CardTitle>
                  <CardDescription className="text-gray-400">
                    Server resurslarining real vaqt monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resourceUsage.map((resource, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">{resource.name}</span>
                          <span className="text-white font-bold">
                            {resource.value}
                            {resource.unit}
                          </span>
                        </div>
                        <Progress value={resource.value} className="h-3" />
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>0{resource.unit}</span>
                          <span>
                            {resource.max}
                            {resource.unit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alerts" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Tizim Ogohlantirishlari</CardTitle>
                  <CardDescription className="text-gray-400">
                    So'nggi tizim hodisalari va ogohlantirishlar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemAlerts.map((alert) => (
                      <div key={alert.id} className="flex items-start gap-3 p-4 border border-purple-900/20 rounded-lg">
                        {getAlertIcon(alert.type)}
                        <div className="flex-1">
                          <h4 className="font-medium text-white">{alert.title}</h4>
                          <p className="text-sm text-gray-400 mt-1">{alert.description}</p>
                          <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            {alert.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Ishlash Ko'rsatkichlari</CardTitle>
                    <CardDescription className="text-gray-400">Tizim ishlash tahlili</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">O'rtacha Javob Vaqti</span>
                        <span className="text-green-400 font-medium">1.2s</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Throughput</span>
                        <span className="text-blue-400 font-medium">456 req/s</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Xatoliklar Darajasi</span>
                        <span className="text-green-400 font-medium">0.02%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Uptime</span>
                        <span className="text-green-400 font-medium">99.9%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Tizim Yuklamasi</CardTitle>
                    <CardDescription className="text-gray-400">Real vaqt yuklanish ko'rsatkichlari</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Cpu className="h-5 w-5 text-blue-400" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-gray-300">CPU</span>
                            <span className="text-white">45%</span>
                          </div>
                          <Progress value={45} className="mt-1 h-2" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MemoryStick className="h-5 w-5 text-green-400" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-gray-300">RAM</span>
                            <span className="text-white">67%</span>
                          </div>
                          <Progress value={67} className="mt-1 h-2" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <HardDrive className="h-5 w-5 text-purple-400" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Disk</span>
                            <span className="text-white">23%</span>
                          </div>
                          <Progress value={23} className="mt-1 h-2" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Activity className="h-5 w-5 text-orange-400" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Tarmoq</span>
                            <span className="text-white">34%</span>
                          </div>
                          <Progress value={34} className="mt-1 h-2" />
                        </div>
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
