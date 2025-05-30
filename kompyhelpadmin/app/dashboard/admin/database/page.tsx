"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  Activity,
  FileText,
  Download,
  Upload,
  RefreshCw,
  Settings,
  AlertTriangle,
  CheckCircle,
  BarChart3,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminDatabasePage() {
  const dbStats = [
    {
      title: "Ma'lumotlar Bazasi Hajmi",
      value: "2.4 GB",
      change: "+5%",
      icon: Database,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
    {
      title: "Jami Jadvallar",
      value: "47",
      change: "+2",
      icon: FileText,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Faol Ulanishlar",
      value: "156",
      change: "+12",
      icon: Activity,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
    },
    {
      title: "So'rovlar/Soniya",
      value: "1,247",
      change: "+8%",
      icon: BarChart3,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
  ]

  const tableStats = [
    { name: "users", records: 3247, size: "45.2 MB", lastUpdate: "2 daqiqa oldin", status: "healthy" },
    { name: "tickets", records: 1456, size: "78.9 MB", lastUpdate: "1 daqiqa oldin", status: "healthy" },
    { name: "knowledge_base", records: 234, size: "12.3 MB", lastUpdate: "5 daqiqa oldin", status: "healthy" },
    { name: "business_accounts", records: 350, size: "8.7 MB", lastUpdate: "3 daqiqa oldin", status: "healthy" },
    { name: "analytics", records: 5678, size: "156.4 MB", lastUpdate: "1 daqiqa oldin", status: "warning" },
    { name: "system_logs", records: 12890, size: "234.1 MB", lastUpdate: "30 soniya oldin", status: "healthy" },
  ]

  const backupHistory = [
    {
      id: 1,
      type: "Full Backup",
      date: "2024-01-15 02:00",
      size: "2.4 GB",
      status: "success",
      duration: "45 daqiqa",
    },
    {
      id: 2,
      type: "Incremental",
      date: "2024-01-14 02:00",
      size: "156 MB",
      status: "success",
      duration: "8 daqiqa",
    },
    {
      id: 3,
      type: "Full Backup",
      date: "2024-01-13 02:00",
      size: "2.3 GB",
      status: "success",
      duration: "42 daqiqa",
    },
    {
      id: 4,
      type: "Incremental",
      date: "2024-01-12 02:00",
      size: "203 MB",
      status: "failed",
      duration: "N/A",
    },
  ]

  const performanceMetrics = [
    { metric: "Query Execution Time", value: "1.2ms", status: "excellent" },
    { metric: "Index Usage", value: "94%", status: "good" },
    { metric: "Cache Hit Ratio", value: "89%", status: "good" },
    { metric: "Lock Wait Time", value: "0.3ms", status: "excellent" },
    { metric: "Deadlocks", value: "0", status: "excellent" },
    { metric: "Slow Queries", value: "2", status: "warning" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
        return <Badge className="bg-green-900/30 text-green-300">Sog'lom</Badge>
      case "warning":
        return <Badge className="bg-yellow-900/30 text-yellow-300">Ogohlantirish</Badge>
      case "critical":
        return <Badge className="bg-red-900/30 text-red-300">Kritik</Badge>
      case "success":
        return <Badge className="bg-green-900/30 text-green-300">Muvaffaqiyatli</Badge>
      case "failed":
        return <Badge className="bg-red-900/30 text-red-300">Muvaffaqiyatsiz</Badge>
      case "excellent":
        return <Badge className="bg-green-900/30 text-green-300">A'lo</Badge>
      case "good":
        return <Badge className="bg-blue-900/30 text-blue-300">Yaxshi</Badge>
      default:
        return <Badge variant="secondary">Noma'lum</Badge>
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
              <h1 className="text-3xl font-bold text-white">Ma'lumotlar Bazasi Boshqaruvi</h1>
              <p className="text-gray-400">Ma'lumotlar bazasi holati va ishlashini monitoring qiling</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <RefreshCw className="h-4 w-4 mr-2" />
                Yangilash
              </Button>
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                <Download className="h-4 w-4 mr-2" />
                Zaxira Nusxa
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                <Settings className="h-4 w-4 mr-2" />
                Sozlamalar
              </Button>
            </div>
          </div>

          {/* Database Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dbStats.map((stat, index) => (
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

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-[#12121e] border border-purple-900/30">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Umumiy Ko'rinish
              </TabsTrigger>
              <TabsTrigger
                value="tables"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Jadvallar
              </TabsTrigger>
              <TabsTrigger
                value="backups"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Zaxira Nusxalar
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
                {/* Database Health */}
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Ma'lumotlar Bazasi Salomatligi</CardTitle>
                    <CardDescription className="text-gray-400">Asosiy ko'rsatkichlar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Ulanish Holati</span>
                        <Badge className="bg-green-900/30 text-green-300">Faol</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Disk Maydoni</span>
                        <div className="flex items-center gap-2">
                          <Progress value={23} className="w-20 h-2" />
                          <span className="text-white">23%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Xotira Foydalanishi</span>
                        <div className="flex items-center gap-2">
                          <Progress value={67} className="w-20 h-2" />
                          <span className="text-white">67%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">CPU Foydalanishi</span>
                        <div className="flex items-center gap-2">
                          <Progress value={34} className="w-20 h-2" />
                          <span className="text-white">34%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="bg-[#12121e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">So'nggi Faoliyat</CardTitle>
                    <CardDescription className="text-gray-400">Ma'lumotlar bazasi operatsiyalari</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 border border-purple-900/20 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-white">Zaxira nusxa yaratildi</p>
                          <p className="text-xs text-gray-400">2 soat oldin</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 border border-purple-900/20 rounded-lg">
                        <Activity className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-white">Index optimizatsiyasi</p>
                          <p className="text-xs text-gray-400">4 soat oldin</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 border border-purple-900/20 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-white">Sekin so'rov aniqlandi</p>
                          <p className="text-xs text-gray-400">6 soat oldin</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tables" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Ma'lumotlar Bazasi Jadvallari</CardTitle>
                  <CardDescription className="text-gray-400">Barcha jadvallar holati va statistikasi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-purple-900/30">
                          <TableHead className="text-gray-400">Jadval Nomi</TableHead>
                          <TableHead className="text-gray-400">Yozuvlar Soni</TableHead>
                          <TableHead className="text-gray-400">Hajmi</TableHead>
                          <TableHead className="text-gray-400">Oxirgi Yangilanish</TableHead>
                          <TableHead className="text-gray-400">Holat</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tableStats.map((table, index) => (
                          <TableRow key={index} className="border-purple-900/30 hover:bg-[#1a1a2e]">
                            <TableCell className="font-medium text-purple-400">{table.name}</TableCell>
                            <TableCell className="text-gray-300">{table.records.toLocaleString()}</TableCell>
                            <TableCell className="text-gray-300">{table.size}</TableCell>
                            <TableCell className="text-gray-400">{table.lastUpdate}</TableCell>
                            <TableCell>{getStatusBadge(table.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backups" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-white">Zaxira Nusxalar Tarixi</CardTitle>
                      <CardDescription className="text-gray-400">So'nggi zaxira nusxalar holati</CardDescription>
                    </div>
                    <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                      <Upload className="h-4 w-4 mr-2" />
                      Yangi Zaxira
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-purple-900/30">
                          <TableHead className="text-gray-400">Turi</TableHead>
                          <TableHead className="text-gray-400">Sana</TableHead>
                          <TableHead className="text-gray-400">Hajmi</TableHead>
                          <TableHead className="text-gray-400">Davomiyligi</TableHead>
                          <TableHead className="text-gray-400">Holat</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {backupHistory.map((backup) => (
                          <TableRow key={backup.id} className="border-purple-900/30 hover:bg-[#1a1a2e]">
                            <TableCell className="font-medium text-white">{backup.type}</TableCell>
                            <TableCell className="text-gray-300">{backup.date}</TableCell>
                            <TableCell className="text-gray-300">{backup.size}</TableCell>
                            <TableCell className="text-gray-300">{backup.duration}</TableCell>
                            <TableCell>{getStatusBadge(backup.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Ma'lumotlar Bazasi Ishlashi</CardTitle>
                  <CardDescription className="text-gray-400">Ishlash ko'rsatkichlari va optimizatsiya</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index} className="p-4 border border-purple-900/20 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-300">{metric.metric}</span>
                          {getStatusBadge(metric.status)}
                        </div>
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
