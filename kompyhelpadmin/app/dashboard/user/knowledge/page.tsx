"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { UserSidebar } from "@/components/user-sidebar"
import { Search, BookOpen, Video, FileText, ExternalLink, Clock, User } from "lucide-react"

export default function UserKnowledgePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Barchasi", count: 45 },
    { id: "hardware", name: "Hardware", count: 12 },
    { id: "software", name: "Software", count: 18 },
    { id: "network", name: "Tarmoq", count: 8 },
    { id: "security", name: "Xavfsizlik", count: 7 },
  ]

  const articles = [
    {
      id: 1,
      title: "Kompyuterni tez ishlatish usullari",
      description: "Kompyuteringizni yangi sotib olingandek tez ishlashini ta'minlash bo'yicha maslahatlar",
      category: "hardware",
      type: "article",
      readTime: "5 daqiqa",
      author: "Sardor Usmonov",
      views: 324,
      date: "2024-01-15",
      helpful: 45,
    },
    {
      id: 2,
      title: "Windows ni yangilash qanday amalga oshiriladi",
      description: "Windows operatsion tizimini xavfsiz va to'g'ri yangilash yo'llari",
      category: "software",
      type: "video",
      readTime: "10 daqiqa",
      author: "Aziza Rahimova",
      views: 256,
      date: "2024-01-12",
      helpful: 38,
    },
    {
      id: 3,
      title: "Wi-Fi ulanish muammolarini hal qilish",
      description: "Internet ulanishi va Wi-Fi muammolarini mustaqil hal qilish usullari",
      category: "network",
      type: "article",
      readTime: "7 daqiqa",
      author: "Bekzod Karimov",
      views: 412,
      date: "2024-01-10",
      helpful: 52,
    },
    {
      id: 4,
      title: "Parollarni xavfsiz saqlash",
      description: "Kuchli parollar yaratish va ularni xavfsiz saqlash bo'yicha ko'rsatmalar",
      category: "security",
      type: "article",
      readTime: "8 daqiqa",
      author: "Malika Tosheva",
      views: 189,
      date: "2024-01-08",
      helpful: 29,
    },
    {
      id: 5,
      title: "Microsoft Office o'rnatish va sozlash",
      description: "Microsoft Office dasturlarini o'rnatish va ishlash uchun sozlash",
      category: "software",
      type: "video",
      readTime: "15 daqiqa",
      author: "Sardor Usmonov",
      views: 678,
      date: "2024-01-05",
      helpful: 89,
    },
    {
      id: 6,
      title: "Virus va zararli dasturlardan himoyalanish",
      description: "Kompyuterni virus va zararli dasturlardan himoyalash usullari",
      category: "security",
      type: "article",
      readTime: "12 daqiqa",
      author: "Aziza Rahimova",
      views: 543,
      date: "2024-01-03",
      helpful: 67,
    },
  ]

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "article":
        return <FileText className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "video":
        return <Badge className="bg-red-900 text-red-200">Video</Badge>
      case "article":
        return <Badge className="bg-blue-900 text-blue-200">Maqola</Badge>
      default:
        return <Badge variant="outline">Noma'lum</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      <UserSidebar />

      <div className="lg:pl-64">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-white">Bilim Bazasi</h1>
            <p className="text-gray-400">Texnik masalalarni mustaqil hal qilish uchun qo'llanma</p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Maqolalar va videolarni qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-[#12121e] border-purple-900/30 text-white"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-purple-700 text-white"
                    : "border-purple-700 text-purple-400 hover:bg-purple-900/20"
                }
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Jami Maqolalar</p>
                    <p className="text-2xl font-bold text-white">{articles.length}</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Video Darslar</p>
                    <p className="text-2xl font-bold text-white">{articles.filter((a) => a.type === "video").length}</p>
                  </div>
                  <Video className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Jami Ko'rishlar</p>
                    <p className="text-2xl font-bold text-white">
                      {articles.reduce((sum, article) => sum + article.views, 0)}
                    </p>
                  </div>
                  <ExternalLink className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                className="bg-[#12121e] border-purple-900/30 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(article.type)}
                      {getTypeBadge(article.type)}
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg text-white leading-tight">{article.title}</CardTitle>
                  <CardDescription className="text-gray-400 line-clamp-3">{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{article.date}</span>
                      <div className="flex items-center gap-3">
                        <span>{article.views} ko'rishlar</span>
                        <span className="text-green-400">{article.helpful} foydali</span>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                      {article.type === "video" ? "Video ko'rish" : "Maqolani o'qish"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <Card className="bg-[#12121e] border-purple-900/30">
              <CardContent className="p-12 text-center">
                <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">Hech narsa topilmadi</h3>
                <p className="text-gray-500">Qidiruv so'zingizni o'zgartiring yoki boshqa kategoriyani tanlang</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
