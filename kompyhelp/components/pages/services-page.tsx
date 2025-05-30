"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Clock,
  DollarSign,
  Cpu,
  HardDrive,
  Wifi,
  Shield,
  Smartphone,
  Printer,
  Monitor,
  Headphones,
} from "lucide-react"
import { ArrowRight, Phone } from "lucide-react" // Import ArrowRight and Phone icons
import { Badge } from "@/components/ui/badge" // Import Badge component
import Link from "next/link"
import { useAuth } from "@/context/auth-context" // Import useAuth hook to get isLoggedIn state

interface ServicesPageProps {
  dict: any
  lang: string
}

export default function ServicesPage({ dict, lang }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { isLoggedIn } = useAuth() // Use useAuth hook to get isLoggedIn state

  const categories = [
    { id: "all", name: "Barcha xizmatlar" },
    { id: "repair", name: "Kompyuter ta'mirlash" },
    { id: "network", name: "Tarmoq xizmatlari" },
    { id: "mobile", name: "Mobil qurilmalar" },
    { id: "software", name: "Dasturiy ta'minot" },
  ]

  const services = [
    {
      id: 1,
      title: "Kompyuter diagnostikasi",
      description: "Kompyuteringizning to'liq diagnostikasi",
      price: "50,000 so'm",
      category: "repair",
      icon: <Cpu className="h-10 w-10 text-purple-500" />,
      features: ["Tezkor diagnostika", "Batafsil hisobot", "Muammolarni aniqlash", "Narx taklifi"],
      popular: false,
      time: "30-60 daqiqa",
    },
    {
      id: 2,
      title: "Operatsion tizimni o'rnatish",
      description: "Windows, macOS yoki Linux o'rnatish",
      price: "150,000 so'm",
      category: "software",
      icon: <HardDrive className="h-10 w-10 text-purple-500" />,
      features: [
        "Operatsion tizim o'rnatish",
        "Drayverlani o'rnatish",
        "Asosiy dasturlarni o'rnatish",
        "Tizimni optimallashtirish",
      ],
      popular: true,
      time: "1-2 soat",
    },
    {
      id: 3,
      title: "Wi-Fi tarmoq o'rnatish",
      description: "Uy yoki ofis uchun Wi-Fi o'rnatish",
      price: "200,000 so'm",
      category: "network",
      icon: <Wifi className="h-10 w-10 text-purple-500" />,
      features: ["Wi-Fi router o'rnatish", "Tarmoq sozlash", "Xavfsizlik sozlamalari", "Qurilmalarni ulash"],
      popular: false,
      time: "1-3 soat",
    },
    {
      id: 4,
      title: "Viruslarni tozalash",
      description: "Kompyuterdan viruslar va zararli dasturlarni tozalash",
      price: "100,000 so'm",
      category: "software",
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      features: ["Virus tekshiruvi", "Zararli dasturlarni o'chirish", "Antivirus o'rnatish", "Xavfsizlik maslahatlar"],
      popular: false,
      time: "1-2 soat",
    },
    {
      id: 5,
      title: "Smartfon ta'mirlash",
      description: "Barcha turdagi smartfonlarni ta'mirlash",
      price: "Narx muammoga qarab",
      category: "mobile",
      icon: <Smartphone className="h-10 w-10 text-purple-500" />,
      features: [
        "Ekran almashtirish",
        "Batareya almashtirish",
        "Dasturiy ta'minot muammolari",
        "Ma'lumotlarni tiklash",
      ],
      popular: false,
      time: "1-3 soat",
    },
    {
      id: 6,
      title: "Printer ta'mirlash",
      description: "Printer va skanerlarni ta'mirlash",
      price: "80,000 so'm",
      category: "repair",
      icon: <Printer className="h-10 w-10 text-purple-500" />,
      features: ["Printer ta'mirlash", "Kartrijlarni to'ldirish", "Drayverlani o'rnatish", "Tarmoqqa ulash"],
      popular: false,
      time: "30-60 daqiqa",
    },
    {
      id: 7,
      title: "Ma'lumotlarni tiklash",
      description: "Yo'qolgan ma'lumotlarni tiklash",
      price: "300,000 so'm dan",
      category: "repair",
      icon: <HardDrive className="h-10 w-10 text-purple-500" />,
      features: ["Qattiq diskdan tiklash", "Flash-drayverdan tiklash", "SD-kartadan tiklash", "Tezkor xizmat"],
      popular: true,
      time: "1-5 kun",
    },
    {
      id: 8,
      title: "Monitor ta'mirlash",
      description: "Monitor va displeylarni ta'mirlash",
      price: "Narx muammoga qarab",
      category: "repair",
      icon: <Monitor className="h-10 w-10 text-purple-500" />,
      features: ["Ekran almashtirish", "Backlight ta'mirlash", "Kabel ta'mirlash", "Rangli kalibrovka"],
      popular: false,
      time: "1-3 kun",
    },
    {
      id: 9,
      title: "Audio ta'mirlash",
      description: "Naushnik, kolonka va boshqa audio qurilmalarni ta'mirlash",
      price: "70,000 so'm dan",
      category: "repair",
      icon: <Headphones className="h-10 w-10 text-purple-500" />,
      features: ["Kabel ta'mirlash", "Dinamik almashtirish", "Bluetooth muammolari", "Sifat tekshiruvi"],
      popular: false,
      time: "1-2 soat",
    },
  ]

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Bizning xizmatlarimiz</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Kompyuter ta'mirlash va IT xizmatlarining to'liq spektri
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="mb-2"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredServices.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full overflow-hidden border-2 hover:border-purple-500 transition-all duration-300">
              {service.popular && (
                <div className="bg-purple-600 text-white text-center py-1 px-4 absolute right-0 top-4 rounded-l-lg font-medium">
                  Ommabop
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4 pt-4 border-t">
                <div className="flex justify-between w-full">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-500 mr-1" />
                    <span className="font-semibold text-lg">{service.price}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-1" />
                    <span>{service.time}</span>
                  </div>
                </div>
                <Button className="w-full">Xizmatni buyurtma qilish</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Business Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-2xl p-8 mb-16 text-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Biznes xizmatlar</h2>
            <p className="text-lg mb-6 text-purple-100">Biznesingiz uchun maxsus IT xizmatlari</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-purple-300 mr-3" />
                <span className="text-lg">IT infratuzilmani boshqarish</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-purple-300 mr-3" />
                <span className="text-lg">Tarmoq xavfsizligi</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-purple-300 mr-3" />
                <span className="text-lg">Ma'lumotlar zaxiralash</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-purple-300 mr-3" />
                <span className="text-lg">24/7 texnik yordam</span>
              </div>
            </div>
            <Button size="lg" variant="secondary">
              Biznes xizmatlari
            </Button>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Business IT Services"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Service Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Xizmat jarayoni</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">So'rov yuboring</h3>
            <p className="text-gray-600 dark:text-gray-400">Veb-sayt orqali so'rov yuboring</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-purple-100 dark:border-purple-900/20 h-full">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                2
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Diagnostika</h3>
                <p className="text-gray-600 dark:text-gray-400">Mutaxassislarimiz qurilmangizni tekshiradi</p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#9F7AEA" fillOpacity="0.2" />
                <path
                  d="M18 12L26 20L18 28"
                  stroke="#9F7AEA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-purple-100 dark:border-purple-900/20 h-full">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                3
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Ta'mirlash</h3>
                <p className="text-gray-600 dark:text-gray-400">Qurilmangiz ta'mirlanadi va sizga qaytariladi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/10 backdrop-blur-sm">Hoziroq boshlang</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Kompyuter muammolaringizni hal qilishga tayyormiz</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Bizning professional jamoamiz sizning barcha kompyuter va IT muammolaringizni hal qilishga tayyor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={isLoggedIn ? `/${lang}/service-request` : `/${lang}/register`}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-white/90 text-purple-900 hover:text-purple-800"
                >
                  Xizmat so'rash <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={`/${lang}/contact`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  Biz bilan bog'laning <Phone className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-200 mr-2" />
                <span className="text-purple-100">Tez xizmat</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-200 mr-2" />
                <span className="text-purple-100">Kafolatli ta'mirlash</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-200 mr-2" />
                <span className="text-purple-100">Professional mutaxassislar</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
