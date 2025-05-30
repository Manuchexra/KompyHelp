"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserSidebar } from "@/components/user-sidebar"
import {
  Phone,
  Mail,
  MessageSquare,
  HelpCircle,
  FileText,
  Video,
  Download,
  ExternalLink,
  Headphones,
} from "lucide-react"

export default function UserHelpPage() {
  const contactMethods = [
    {
      title: "Telefon Yordam",
      description: "To'g'ridan-to'g'ri qo'ng'iroq qiling",
      icon: Phone,
      action: "Qo'ng'iroq qilish",
      info: "+998 90 123 45 67",
      available: "24/7",
      color: "text-green-500",
      bgColor: "bg-green-900/20",
    },
    {
      title: "Email Yordam",
      description: "Batafsil savollar uchun",
      icon: Mail,
      action: "Email yuborish",
      info: "support@kompyhelp.uz",
      available: "24 soat ichida javob",
      color: "text-blue-500",
      bgColor: "bg-blue-900/20",
    },
    {
      title: "Jonli Chat",
      description: "Tezkor yordam uchun",
      icon: MessageSquare,
      action: "Chat boshlash",
      info: "Onlayn operatorlar",
      available: "9:00 - 18:00",
      color: "text-purple-500",
      bgColor: "bg-purple-900/20",
    },
    {
      title: "Video Qo'ng'iroq",
      description: "Ekranni ko'rsatish bilan",
      icon: Video,
      action: "Video boshlash",
      info: "Masofaviy yordam",
      available: "Dushanba-Juma",
      color: "text-red-500",
      bgColor: "bg-red-900/20",
    },
  ]

  const helpResources = [
    {
      title: "Bilim Bazasi",
      description: "Ko'p so'raladigan savollar va yechimlar",
      icon: HelpCircle,
      count: "150+ maqola",
      action: "Ko'rish",
    },
    {
      title: "Qo'llanmalar",
      description: "Bosqichma-bosqich ko'rsatmalar",
      icon: FileText,
      count: "25+ qo'llanma",
      action: "Yuklab olish",
    },
    {
      title: "Video Darslar",
      description: "Vizual o'quv materiallari",
      icon: Video,
      count: "40+ video",
      action: "Tomosha qilish",
    },
    {
      title: "Dastur Yuklab Olish",
      description: "Masofaviy yordam dasturlari",
      icon: Download,
      count: "Windows/Mac",
      action: "Yuklab olish",
    },
  ]

  const workingHours = [
    { day: "Dushanba - Juma", time: "9:00 - 18:00", type: "Asosiy" },
    { day: "Shanba", time: "10:00 - 16:00", type: "Cheklangan" },
    { day: "Yakshanba", time: "Yopiq", type: "Dam olish" },
    { day: "Shoshilinch", time: "24/7", type: "Favqulodda" },
  ]

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <UserSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">Yordam va Qo'llab-quvvatlash</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sizga yordam berishga doimo tayyormiz! Quyidagi usullardan birini tanlab biz bilan bog'laning.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-[#12121e] border-purple-900/30 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full ${method.bgColor} flex items-center justify-center mb-4`}
                  >
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <CardTitle className="text-lg text-white">{method.title}</CardTitle>
                  <CardDescription className="text-gray-400">{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div>
                    <p className="font-semibold text-white">{method.info}</p>
                    <p className="text-sm text-gray-400">{method.available}</p>
                  </div>
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">{method.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Help */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <CardTitle className="text-white">Tezkor Yordam</CardTitle>
              <CardDescription className="text-gray-400">
                Eng ko'p so'raladigan masalalar va ularning yechimlari
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {helpResources.map((resource, index) => (
                  <div
                    key={index}
                    className="p-4 border border-purple-900/20 rounded-lg hover:bg-[#1a1a2e] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <resource.icon className="h-6 w-6 text-purple-500" />
                      <h3 className="font-semibold text-white">{resource.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{resource.description}</p>
                    <p className="text-xs text-purple-400 mb-3">{resource.count}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-700 text-purple-400 hover:bg-purple-900/20"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      {resource.action}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white">Ish Vaqtlari</CardTitle>
                <CardDescription className="text-gray-400">Qachon bizdan yordam olishingiz mumkin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-purple-900/20 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-white">{schedule.day}</p>
                        <p className="text-sm text-gray-400">{schedule.type}</p>
                      </div>
                      <p
                        className={`font-semibold ${
                          schedule.time === "24/7"
                            ? "text-green-400"
                            : schedule.time === "Yopiq"
                              ? "text-red-400"
                              : "text-blue-400"
                        }`}
                      >
                        {schedule.time}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white">Shoshilinch Yordam</CardTitle>
                <CardDescription className="text-gray-400">Tezkor yechim kerak bo'lganda</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-900/20 border border-red-900/30 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-5 w-5 text-red-400" />
                    <h3 className="font-semibold text-white">Favqulodda Qo'ng'iroq</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">Juda muhim muammolar uchun 24/7 telefon linyasi</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800">+998 90 911 24 24</Button>
                </div>

                <div className="p-4 bg-blue-900/20 border border-blue-900/30 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Headphones className="h-5 w-5 text-blue-400" />
                    <h3 className="font-semibold text-white">Premium Yordam</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">Katta biznes mijozlar uchun maxsus qo'llab-quvvatlash</p>
                  <Button variant="outline" className="w-full border-blue-700 text-blue-400 hover:bg-blue-900/20">
                    Premium Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="bg-[#12121e] border-purple-900/30">
            <CardHeader>
              <CardTitle className="text-white">Ko'p So'raladigan Savollar</CardTitle>
              <CardDescription className="text-gray-400">Eng mashhur savollar va javoblar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Yordam so'rovi qancha vaqtda javob oladi?</h3>
                  <p className="text-gray-400 text-sm">
                    Oddiy muammolar uchun 15-30 daqiqa, murakkab masalalar uchun 2-4 soat ichida javob beramiz.
                  </p>
                </div>
                <div className="p-4 border border-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Masofaviy yordam xavfsizmi?</h3>
                  <p className="text-gray-400 text-sm">
                    Ha, biz faqat litsenziyalangan va xavfsiz dasturlardan foydalanamiz. Sizning roziligingizsiz hech
                    narsa qilmaymiz.
                  </p>
                </div>
                <div className="p-4 border border-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Yordam xizmati pullikmi?</h3>
                  <p className="text-gray-400 text-sm">
                    Asosiy yordam xizmatlari bepul. Maxsus xizmatlar va katta ishlar uchun alohida to'lov mavjud.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
