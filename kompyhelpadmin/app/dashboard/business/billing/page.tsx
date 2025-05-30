"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BusinessSidebar } from "@/components/business-sidebar"
import {
  CreditCard,
  DollarSign,
  Calendar,
  Download,
  Eye,
  Plus,
  Settings,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Zap,
  Star,
} from "lucide-react"

export default function BusinessBillingPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock billing data
  const billingData = {
    currentPlan: {
      name: "Business Pro",
      price: 99,
      currency: "USD",
      billing: "monthly",
      features: [
        "500 tiket/oy",
        "24/7 yordam",
        "API kirish",
        "Kengaytirilgan analitika",
        "Prioritet yordam",
        "Maxsus integratsiyalar",
      ],
      usage: {
        tickets: { used: 342, limit: 500 },
        storage: { used: 15.2, limit: 50 },
        apiCalls: { used: 8420, limit: 10000 },
        users: { used: 25, limit: 50 },
      },
    },
    nextBilling: {
      date: "2024-02-15",
      amount: 99,
      status: "scheduled",
    },
    paymentMethod: {
      type: "card",
      last4: "4242",
      brand: "Visa",
      expiry: "12/25",
    },
    invoices: [
      {
        id: "INV-2024-001",
        date: "2024-01-15",
        amount: 99,
        status: "paid",
        description: "Business Pro - Yanvar 2024",
        downloadUrl: "#",
      },
      {
        id: "INV-2023-012",
        date: "2023-12-15",
        amount: 99,
        status: "paid",
        description: "Business Pro - Dekabr 2023",
        downloadUrl: "#",
      },
      {
        id: "INV-2023-011",
        date: "2023-11-15",
        amount: 99,
        status: "paid",
        description: "Business Pro - Noyabr 2023",
        downloadUrl: "#",
      },
      {
        id: "INV-2023-010",
        date: "2023-10-15",
        amount: 99,
        status: "paid",
        description: "Business Pro - Oktabr 2023",
        downloadUrl: "#",
      },
    ],
    plans: [
      {
        name: "Starter",
        price: 29,
        features: ["100 tiket/oy", "Email yordam", "Asosiy analitika"],
        recommended: false,
      },
      {
        name: "Business Pro",
        price: 99,
        features: ["500 tiket/oy", "24/7 yordam", "API kirish", "Kengaytirilgan analitika"],
        recommended: true,
        current: true,
      },
      {
        name: "Enterprise",
        price: 299,
        features: ["Cheksiz tiket", "Maxsus yordam", "Barcha integratsiyalar", "Maxsus sozlamalar"],
        recommended: false,
      },
    ],
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-900/30 text-green-300">To'langan</Badge>
      case "pending":
        return <Badge className="bg-yellow-700 text-yellow-200">Kutilmoqda</Badge>
      case "overdue":
        return (
          <Badge variant="destructive" className="bg-red-900 text-red-200">
            Kechikkan
          </Badge>
        )
      case "scheduled":
        return <Badge className="bg-blue-900 text-blue-200">Rejalashtirilgan</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getUsageColor = (percentage: number) => {
    if (percentage >= 90) return "text-red-400"
    if (percentage >= 70) return "text-yellow-400"
    return "text-green-400"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0e0e1a] to-[#1a1a2e] text-gray-200">
      <BusinessSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Hisob-kitob va To'lovlar
              </h1>
              <p className="text-gray-400 text-lg">Obuna va to'lov ma'lumotlarini boshqaring</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-green-700 text-green-400 hover:bg-green-900/20">
                <Download className="h-4 w-4 mr-2" />
                Hisob-kitob Tarixi
              </Button>
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                To'lov Usuli Qo'shish
              </Button>
            </div>
          </div>

          {/* Current Plan Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-400" />
                      Joriy Tarif Rejasi
                    </CardTitle>
                    <CardDescription className="text-gray-400">Sizning hozirgi obuna ma'lumotlari</CardDescription>
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1">
                    {billingData.currentPlan.name}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-900/30">
                  <div>
                    <p className="text-3xl font-bold text-white">
                      ${billingData.currentPlan.price}
                      <span className="text-lg text-gray-400">/oy</span>
                    </p>
                    <p className="text-green-400">Keyingi to'lov: {billingData.nextBilling.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Status</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-green-400">Faol</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(billingData.currentPlan.usage).map(([key, usage]) => {
                    const percentage = (usage.used / usage.limit) * 100
                    return (
                      <div key={key} className="p-4 bg-[#0e0e1a] rounded-lg border border-purple-900/20">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 capitalize">
                            {key === "apiCalls" ? "API So'rovlar" : key === "users" ? "Foydalanuvchilar" : key}
                          </span>
                          <span className={`font-bold ${getUsageColor(percentage)}`}>
                            {usage.used}
                            {key === "storage" ? "GB" : ""} / {usage.limit}
                            {key === "storage" ? "GB" : ""}
                          </span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                        <p className="text-xs text-gray-400 mt-1">{percentage.toFixed(1)}% ishlatilgan</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-400" />
                  To'lov Usuli
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-900/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">VISA</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">•••• •••• •••• {billingData.paymentMethod.last4}</p>
                        <p className="text-sm text-gray-400">Tugaydi {billingData.paymentMethod.expiry}</p>
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-700 text-blue-400 hover:bg-blue-900/20"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Tahrirlash
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#0e0e1a] rounded-lg">
                    <span className="text-gray-300">Keyingi to'lov</span>
                    <span className="text-white font-bold">${billingData.nextBilling.amount}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#0e0e1a] rounded-lg">
                    <span className="text-gray-300">To'lov sanasi</span>
                    <span className="text-white">{billingData.nextBilling.date}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#0e0e1a] rounded-lg">
                    <span className="text-gray-300">Status</span>
                    {getStatusBadge(billingData.nextBilling.status)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Billing Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-[#12121e] border border-purple-900/30 p-1">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Umumiy Ko'rinish
              </TabsTrigger>
              <TabsTrigger
                value="invoices"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Hisob-kitob Tarixi
              </TabsTrigger>
              <TabsTrigger
                value="plans"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <Zap className="h-4 w-4 mr-2" />
                Tarif Rejalari
              </TabsTrigger>
              <TabsTrigger
                value="usage"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Foydalanish Statistikasi
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Bu Oyda Xarajat</p>
                        <p className="text-3xl font-bold text-white">$99.00</p>
                        <p className="text-sm text-green-400">Vaqtida to'langan</p>
                      </div>
                      <div className="p-3 bg-green-900/30 rounded-full">
                        <DollarSign className="h-8 w-8 text-green-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Yillik Xarajat</p>
                        <p className="text-3xl font-bold text-white">$1,188</p>
                        <p className="text-sm text-blue-400">12 oylik obuna</p>
                      </div>
                      <div className="p-3 bg-blue-900/30 rounded-full">
                        <Calendar className="h-8 w-8 text-blue-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Tejamkorlik</p>
                        <p className="text-3xl font-bold text-white">$180</p>
                        <p className="text-sm text-purple-400">Yillik to'lovda</p>
                      </div>
                      <div className="p-3 bg-purple-900/30 rounded-full">
                        <TrendingUp className="h-8 w-8 text-purple-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Xizmat Xususiyatlari</CardTitle>
                  <CardDescription className="text-gray-400">
                    Joriy tarif rejangizda mavjud xususiyatlar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {billingData.currentPlan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-[#0e0e1a] rounded-lg border border-purple-900/20"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Invoices Tab */}
            <TabsContent value="invoices" className="space-y-6">
              <Card className="bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-white">Hisob-kitob Tarixi</CardTitle>
                      <CardDescription className="text-gray-400">
                        Barcha to'lovlar va hisob-kitoblar tarixi
                      </CardDescription>
                    </div>
                    <Button variant="outline" className="border-green-700 text-green-400 hover:bg-green-900/20">
                      <Download className="h-4 w-4 mr-2" />
                      Barchasini Yuklab Olish
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {billingData.invoices.map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0e0e1a] to-[#1a1a2e] rounded-lg border border-purple-900/20 hover:border-purple-700/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-green-900/30 rounded-lg">
                            <Calendar className="h-5 w-5 text-green-400" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white">{invoice.id}</h3>
                            <p className="text-sm text-gray-400">{invoice.description}</p>
                            <p className="text-xs text-gray-500">
                              {new Date(invoice.date).toLocaleDateString("uz-UZ")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-xl font-bold text-white">${invoice.amount}</p>
                            {getStatusBadge(invoice.status)}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-700 text-blue-400 hover:bg-blue-900/20"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-green-700 text-green-400 hover:bg-green-900/20"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Plans Tab */}
            <TabsContent value="plans" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {billingData.plans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30 relative ${
                      plan.recommended ? "ring-2 ring-purple-500" : ""
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1">
                          Tavsiya etiladi
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                      <div className="space-y-2">
                        <p className="text-4xl font-bold text-white">
                          ${plan.price}
                          <span className="text-lg text-gray-400">/oy</span>
                        </p>
                        {plan.current && <Badge className="bg-green-900/30 text-green-300">Joriy Reja</Badge>}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className={`w-full ${
                          plan.current
                            ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        }`}
                        disabled={plan.current}
                      >
                        {plan.current ? "Joriy Reja" : "Tanlash"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Usage Tab */}
            <TabsContent value="usage" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Oylik Foydalanish</CardTitle>
                    <CardDescription className="text-gray-400">Joriy oy davomida xizmat foydalanishi</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(billingData.currentPlan.usage).map(([key, usage]) => {
                      const percentage = (usage.used / usage.limit) * 100
                      return (
                        <div key={key} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-300 capitalize">
                              {key === "apiCalls" ? "API So'rovlar" : key === "users" ? "Foydalanuvchilar" : key}
                            </span>
                            <span className={`font-bold ${getUsageColor(percentage)}`}>
                              {usage.used}
                              {key === "storage" ? "GB" : ""} / {usage.limit}
                              {key === "storage" ? "GB" : ""}
                            </span>
                          </div>
                          <Progress value={percentage} className="h-3" />
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>{percentage.toFixed(1)}% ishlatilgan</span>
                            <span>
                              {usage.limit - usage.used}
                              {key === "storage" ? "GB" : ""} qolgan
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-white">Foydalanish Tendensiyasi</CardTitle>
                    <CardDescription className="text-gray-400">So'nggi 6 oy foydalanish tarixi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { month: "Yanvar", usage: 85 },
                        { month: "Fevral", usage: 72 },
                        { month: "Mart", usage: 68 },
                        { month: "Aprel", usage: 91 },
                        { month: "May", usage: 76 },
                        { month: "Iyun", usage: 68 },
                      ].map((month, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-300">{month.month}</span>
                            <span className="text-white font-bold">{month.usage}%</span>
                          </div>
                          <Progress value={month.usage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-[#12121e] to-[#1a1a2e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-400" />
                    Foydalanish Ogohlantirishlari
                  </CardTitle>
                  <CardDescription className="text-gray-400">Limit yaqinlashganda ogohlantirish olish</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-900/20 border border-yellow-900/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-yellow-400" />
                        <div>
                          <p className="text-white font-medium">Tiket Limiti Ogohlantirishi</p>
                          <p className="text-sm text-gray-400">
                            Siz oylik tiket limitingizning 68%ini ishlatgansiz (342/500)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-900/20 border border-green-900/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <div>
                          <p className="text-white font-medium">Boshqa Xizmatlar Normal</p>
                          <p className="text-sm text-gray-400">
                            Storage, API va foydalanuvchi limitleri normal holatda
                          </p>
                        </div>
                      </div>
                    </div>
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
