"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import {
  Computer,
  Search,
  Filter,
  Star,
  Clock,
  User,
  FileText,
  Video,
  ShoppingBag,
  BookOpen,
  ChevronRight,
  Smartphone,
  Wifi,
  Shield,
} from "lucide-react"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const searchResults = [
    {
      type: "service",
      title: "Kompyuter Tezkor Ta'mirlash",
      description: "Desktop kompyuterlar uchun tezkor diagnostika va ta'mirlash xizmati",
      price: "50,000 so'm",
      rating: 4.9,
      reviews: 156,
      category: "Xizmat",
      icon: Computer,
      url: "/shop",
    },
    {
      type: "article",
      title: "Kompyuter sekin ishlayotganda nima qilish kerak?",
      description: "Kompyuter tezligini oshirish uchun 10 ta samarali usul",
      readTime: "5 daqiqa",
      views: "2.5k",
      category: "Maqola",
      icon: FileText,
      url: "/knowledge-base",
    },
    {
      type: "video",
      title: "Windows 11 o'rnatish qo'llanmasi",
      description: "Bosqichma-bosqich Windows 11 o'rnatish jarayoni",
      duration: "15 daqiqa",
      views: "1.2k",
      category: "Video",
      icon: Video,
      url: "/knowledge-base",
    },
    {
      type: "service",
      title: "Telefon Ekran Ta'mirlash",
      description: "Smartphone ekranlarini tezkor va sifatli ta'mirlash",
      price: "80,000 so'm",
      rating: 4.7,
      reviews: 234,
      category: "Xizmat",
      icon: Smartphone,
      url: "/shop",
    },
    {
      type: "article",
      title: "Wi-Fi parolini qanday o'zgartirish mumkin?",
      description: "Router parolini xavfsiz o'zgartirish bo'yicha qo'llanma",
      readTime: "3 daqiqa",
      views: "1.8k",
      category: "Maqola",
      icon: FileText,
      url: "/knowledge-base",
    },
    {
      type: "service",
      title: "Wi-Fi Tarmoq Sozlash",
      description: "Uy va ofis uchun Wi-Fi tarmoqni professional sozlash",
      price: "25,000 so'm",
      rating: 4.9,
      reviews: 67,
      category: "Xizmat",
      icon: Wifi,
      url: "/shop",
    },
    {
      type: "article",
      title: "Virusdan qanday himoyalanish mumkin?",
      description: "Kompyuterni viruslardan himoya qilish usullari",
      readTime: "7 daqiqa",
      views: "1.4k",
      category: "Maqola",
      icon: FileText,
      url: "/knowledge-base",
    },
    {
      type: "service",
      title: "Virus Tozalash Premium",
      description: "To'liq tizim tozalash va antivirus o'rnatish xizmati",
      price: "40,000 so'm",
      rating: 4.8,
      reviews: 123,
      category: "Xizmat",
      icon: Shield,
      url: "/shop",
    },
  ]

  const filters = [
    { value: "all", label: "Barchasi", count: searchResults.length },
    { value: "service", label: "Xizmatlar", count: searchResults.filter((r) => r.type === "service").length },
    { value: "article", label: "Maqolalar", count: searchResults.filter((r) => r.type === "article").length },
    { value: "video", label: "Videolar", count: searchResults.filter((r) => r.type === "video").length },
  ]

  const filteredResults =
    activeFilter === "all" ? searchResults : searchResults.filter((result) => result.type === activeFilter)

  const getResultIcon = (type: string) => {
    switch (type) {
      case "service":
        return ShoppingBag
      case "article":
        return FileText
      case "video":
        return Video
      default:
        return BookOpen
    }
  }

  const getResultBadgeColor = (type: string) => {
    switch (type) {
      case "service":
        return "bg-purple-900 text-purple-200"
      case "article":
        return "bg-blue-900 text-blue-200"
      case "video":
        return "bg-red-900 text-red-200"
      default:
        return "bg-gray-800 text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      {/* Header */}
      <header className="bg-[#12121e] border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Computer className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">KompyHelp</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-purple-400">
                Bosh sahifa
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-purple-400">
                Biz haqimizda
              </Link>
              <Link href="/knowledge-base" className="text-gray-300 hover:text-purple-400">
                Bilimlar bazasi
              </Link>
              <Link href="/shop" className="text-gray-300 hover:text-purple-400">
                Do'kon
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-purple-400">
                Aloqa
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20">
                  Kirish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Search Hero */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Qidiruv Natijalari</h1>
            <p className="text-xl text-purple-200">Sizning so'rovingiz bo'yicha topilgan natijalar</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-700">Qidirish</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-[#0e0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-64 space-y-6">
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Filter className="h-5 w-5 text-purple-500" />
                    Filterlar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {filters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setActiveFilter(filter.value)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeFilter === filter.value
                          ? "bg-purple-900/30 text-purple-300 border border-purple-500/50"
                          : "bg-[#0e0e1a] text-gray-300 hover:bg-purple-900/20"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{filter.label}</span>
                        <Badge className="bg-purple-900/50 text-purple-200">{filter.count}</Badge>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Sort Options */}
              <Card className="bg-[#12121e] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Saralash</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select>
                    <SelectTrigger className="bg-[#0e0e1a] border-purple-900/30 text-white">
                      <SelectValue placeholder="Saralash turi" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                      <SelectItem value="relevance">Mos kelishi bo'yicha</SelectItem>
                      <SelectItem value="newest">Eng yangi</SelectItem>
                      <SelectItem value="popular">Mashhur</SelectItem>
                      <SelectItem value="rating">Reyting bo'yicha</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-gray-400">
                  <span className="text-white font-semibold">{filteredResults.length}</span> ta natija topildi
                </p>
              </div>

              <div className="space-y-6">
                {filteredResults.map((result, index) => {
                  const ResultIcon = getResultIcon(result.type)
                  return (
                    <Card
                      key={index}
                      className="bg-[#12121e] border-purple-900/30 hover:border-purple-500/50 transition-all cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-purple-900/20 flex-shrink-0">
                            <result.icon className="h-6 w-6 text-purple-500" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Badge className={getResultBadgeColor(result.type)}>{result.category}</Badge>
                                <ResultIcon className="h-4 w-4 text-gray-400" />
                              </div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-2 hover:text-purple-400 transition-colors">
                              {result.title}
                            </h3>

                            <p className="text-gray-400 mb-4">{result.description}</p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-400">
                                {result.type === "service" && (
                                  <>
                                    <span className="text-lg font-semibold text-white">{result.price}</span>
                                    <div className="flex items-center gap-1">
                                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                      <span className="text-white">{result.rating}</span>
                                      <span>({result.reviews})</span>
                                    </div>
                                  </>
                                )}

                                {result.type === "article" && (
                                  <>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      <span>{result.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <User className="h-4 w-4" />
                                      <span>{result.views} ko'rishlar</span>
                                    </div>
                                  </>
                                )}

                                {result.type === "video" && (
                                  <>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      <span>{result.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <User className="h-4 w-4" />
                                      <span>{result.views} ko'rishlar</span>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link href={result.url}>
                                <Button
                                  variant="outline"
                                  className="border-purple-700 text-purple-400 hover:bg-purple-900/20"
                                >
                                  {result.type === "service" ? "Buyurtma" : "Ko'rish"}
                                  <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                    Oldingi
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">1</Button>
                  <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                    2
                  </Button>
                  <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                    3
                  </Button>
                  <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                    Keyingi
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a14] text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Computer className="h-8 w-8 text-purple-500" />
                <span className="ml-2 text-xl font-bold text-white">KompyHelp</span>
              </div>
              <p className="text-gray-400">Professional kompyuter va texnik yordam xizmatlari</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Xizmatlar</h3>
              <ul className="space-y-2">
                <li>Kompyuter ta'mirlash</li>
                <li>Telefon ta'mirlash</li>
                <li>Internet sozlash</li>
                <li>Virus tozalash</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Kompaniya</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-purple-400">
                    Biz haqimizda
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-purple-400">
                    Xizmatlar
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-400">
                    Aloqa
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge-base" className="hover:text-purple-400">
                    Yordam
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Aloqa</h3>
              <ul className="space-y-2">
                <li>+998 90 123 45 67</li>
                <li>info@kompyhelp.uz</li>
                <li>Toshkent, Chilonzor</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 KompyHelp. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
