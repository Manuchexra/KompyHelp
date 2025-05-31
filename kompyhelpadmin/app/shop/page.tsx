import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  CheckCircle,
  Smartphone,
  Wifi,
  Shield,
  Settings,
  Monitor,
  Laptop,
  Tablet,
  HardDrive,
} from "lucide-react"

export default function ShopPage() {
  const services = [
    {
      id: 1,
      title: "Kompyuter Tezkor Ta'mirlash",
      description: "Desktop kompyuterlar uchun tezkor diagnostika va ta'mirlash xizmati",
      price: "50,000",
      originalPrice: "70,000",
      duration: "2-4 soat",
      rating: 4.9,
      reviews: 156,
      category: "Kompyuter",
      icon: Computer,
      popular: true,
      features: ["Tezkor diagnostika", "Kafolat 6 oy", "Bepul konsultatsiya"],
    },
    {
      id: 2,
      title: "Laptop Ekran Almashtirish",
      description: "Laptop ekranlarini professional almashtirish va ta'mirlash",
      price: "120,000",
      originalPrice: "150,000",
      duration: "1-2 kun",
      rating: 4.8,
      reviews: 89,
      category: "Laptop",
      icon: Laptop,
      popular: false,
      features: ["Original qismlar", "Kafolat 1 yil", "Bepul yetkazib berish"],
    },
    {
      id: 3,
      title: "Telefon Ekran Ta'mirlash",
      description: "Smartphone ekranlarini tezkor va sifatli ta'mirlash",
      price: "80,000",
      originalPrice: "100,000",
      duration: "1-3 soat",
      rating: 4.7,
      reviews: 234,
      category: "Telefon",
      icon: Smartphone,
      popular: true,
      features: ["Tezkor xizmat", "Kafolat 3 oy", "Bepul diagnostika"],
    },
    {
      id: 4,
      title: "Wi-Fi Tarmoq Sozlash",
      description: "Uy va ofis uchun Wi-Fi tarmoqni professional sozlash",
      price: "25,000",
      originalPrice: "35,000",
      duration: "1-2 soat",
      rating: 4.9,
      reviews: 67,
      category: "Internet",
      icon: Wifi,
      popular: false,
      features: ["Tezkor sozlash", "Xavfsizlik sozlamalari", "Bepul maslahat"],
    },
    {
      id: 5,
      title: "Virus Tozalash Premium",
      description: "To'liq tizim tozalash va antivirus o'rnatish xizmati",
      price: "40,000",
      originalPrice: "55,000",
      duration: "2-3 soat",
      rating: 4.8,
      reviews: 123,
      category: "Xavfsizlik",
      icon: Shield,
      popular: false,
      features: ["To'liq tozalash", "Antivirus o'rnatish", "Kafolat 3 oy"],
    },
    {
      id: 6,
      title: "Dastur O'rnatish Paketi",
      description: "Kerakli dasturlarni o'rnatish va sozlash xizmati",
      price: "30,000",
      originalPrice: "45,000",
      duration: "1-2 soat",
      rating: 4.6,
      reviews: 91,
      category: "Dastur",
      icon: Settings,
      popular: false,
      features: ["Kerakli dasturlar", "Sozlash", "Qo'llanma"],
    },
    {
      id: 7,
      title: "Monitor Ta'mirlash",
      description: "LCD va LED monitorlarni professional ta'mirlash",
      price: "60,000",
      originalPrice: "80,000",
      duration: "1-3 kun",
      rating: 4.7,
      reviews: 45,
      category: "Monitor",
      icon: Monitor,
      popular: false,
      features: ["Professional ta'mirlash", "Kafolat 6 oy", "Bepul diagnostika"],
    },
    {
      id: 8,
      title: "Planshet Ta'mirlash",
      description: "iPad va Android planshetlar uchun ta'mirlash xizmati",
      price: "90,000",
      originalPrice: "110,000",
      duration: "2-4 soat",
      rating: 4.8,
      reviews: 78,
      category: "Planshet",
      icon: Tablet,
      popular: false,
      features: ["Tezkor ta'mirlash", "Kafolat 4 oy", "Bepul konsultatsiya"],
    },
    {
      id: 9,
      title: "Ma'lumot Tiklash",
      description: "Yo'qolgan ma'lumotlarni professional tiklash xizmati",
      price: "100,000",
      originalPrice: "130,000",
      duration: "1-5 kun",
      rating: 4.9,
      reviews: 156,
      category: "Ma'lumot",
      icon: HardDrive,
      popular: true,
      features: ["Professional tiklash", "95% muvaffaqiyat", "Kafolat"],
    },
  ]

  const categories = [
    { value: "all", label: "Barcha xizmatlar" },
    { value: "Kompyuter", label: "Kompyuter" },
    { value: "Laptop", label: "Laptop" },
    { value: "Telefon", label: "Telefon" },
    { value: "Internet", label: "Internet" },
    { value: "Xavfsizlik", label: "Xavfsizlik" },
    { value: "Dastur", label: "Dastur" },
  ]

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
              <Link href="/shop" className="text-purple-400">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Xizmatlar Do'koni</h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200 max-w-3xl mx-auto">
            Professional texnik yordam xizmatlarini onlayn buyurtma qiling
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#12121e] border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Xizmat qidirish..."
                  className="pl-10 bg-[#0e0e1a] border-purple-900/30 text-white"
                />
              </div>
              <Select>
                <SelectTrigger className="w-48 bg-[#0e0e1a] border-purple-900/30 text-white">
                  <SelectValue placeholder="Kategoriya" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-48 bg-[#0e0e1a] border-purple-900/30 text-white">
                  <SelectValue placeholder="Narx bo'yicha" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                  <SelectItem value="low-high">Arzondan qimmatge</SelectItem>
                  <SelectItem value="high-low">Qimmatdan arzonga</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0e0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-[#12121e] border-purple-900/30 hover:border-purple-500/50 transition-all relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Mashhur</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-purple-900/20 w-fit">
                      <service.icon className="h-8 w-8 text-purple-500" />
                    </div>
                    <Badge variant="outline" className="border-purple-700 text-purple-300">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-gray-400">so'm</span>
                    {service.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">{service.originalPrice}</span>
                    )}
                  </div>

                  {/* Rating and Duration */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-gray-400">({service.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Buyurtma berish</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Maxsus takliflar</h2>
          <p className="text-xl text-purple-200 mb-8">
            Bir nechta xizmatni birga buyurtma qiling va 20% chegirma oling
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
            Paket takliflarni ko'rish
          </Button>
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
