"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Headphones,
  Laptop,
  Monitor,
  MousePointer,
  Network,
  Phone,
  Shield,
  Smartphone,
  Star,
  Wifi,
  Zap,
} from "lucide-react"

type HomePageProps = {
  dict: any
  lang: string
}

export function HomePage({ dict, lang }: HomePageProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState("individual")

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    setIsLoggedIn(!!token)
  }, [])

  const services = {
    individual: [
      {
        icon: <Laptop className="h-10 w-10" />,
        title: "Kompyuter ta'mirlash",
        description: "Barcha turdagi kompyuter va noutbuklarni ta'mirlash",
      },
      {
        icon: <HardDrive className="h-10 w-10" />,
        title: "Ma'lumotlarni tiklash",
        description: "Yo'qolgan ma'lumotlarni tiklash xizmati",
      },
      {
        icon: <Shield className="h-10 w-10" />,
        title: "Viruslarni tozalash",
        description: "Kompyuteringizni viruslardan tozalash",
      },
      {
        icon: <Zap className="h-10 w-10" />,
        title: "Tizimni optimizatsiya",
        description: "Kompyuter ishlashini tezlashtirish",
      },
      {
        icon: <Monitor className="h-10 w-10" />,
        title: "Ekran ta'mirlash",
        description: "Ekranlarni almashtirish va ta'mirlash",
      },
      {
        icon: <Cpu className="h-10 w-10" />,
        title: "Apparat yangilash",
        description: "RAM, SSD va boshqa qismlarni yangilash",
      },
    ],
    business: [
      {
        icon: <Network className="h-10 w-10" />,
        title: "Tarmoq o'rnatish",
        description: "Ofis tarmoqlarini o'rnatish va sozlash",
      },
      {
        icon: <Database className="h-10 w-10" />,
        title: "Server o'rnatish",
        description: "Biznes serverlari o'rnatish",
      },
      {
        icon: <Globe className="h-10 w-10" />,
        title: "Veb-sayt yaratish",
        description: "Biznesingiz uchun veb-saytlar yaratish",
      },
      {
        icon: <Headphones className="h-10 w-10" />,
        title: "IT qo'llab-quvvatlash",
        description: "24/7 IT qo'llab-quvvatlash",
      },
      {
        icon: <Code className="h-10 w-10" />,
        title: "Dasturiy ta'minot",
        description: "Maxsus dasturiy ta'minot yaratish",
      },
      {
        icon: <Shield className="h-10 w-10" />,
        title: "Xavfsizlik tizimlari",
        description: "Biznes ma'lumotlarini himoya qilish",
      },
    ],
    mobile: [
      {
        icon: <Smartphone className="h-10 w-10" />,
        title: "Smartfon ta'mirlash",
        description: "Barcha turdagi smartfonlarni ta'mirlash",
      },
      {
        icon: <MousePointer className="h-10 w-10" />,
        title: "Ekran almashtirish",
        description: "Singan ekranlarni almashtirish",
      },
      {
        icon: <Wifi className="h-10 w-10" />,
        title: "Ulanish muammolari",
        description: "Wi-Fi va Bluetooth muammolarini hal qilish",
      },
      {
        icon: <HardDrive className="h-10 w-10" />,
        title: "Ma'lumotlarni tiklash",
        description: "Smartfondagi ma'lumotlarni tiklash",
      },
      {
        icon: <Zap className="h-10 w-10" />,
        title: "Batareya almashtirish",
        description: "Batareya almashtirish xizmati",
      },
      {
        icon: <Shield className="h-10 w-10" />,
        title: "Xavfsizlik",
        description: "Mobil qurilmalar xavfsizligi",
      },
    ],
  }

  const testimonials = [
    {
      name: "Oybek T.",
      role: "Mijoz",
      content: "KompyHelp xizmatidan juda mamnunman. Kompyuterim yana yangiday ishlayapti!",
      rating: 5,
    },
    {
      name: "Aziza K.",
      role: "Biznes",
      content: "Biznesimiz uchun IT qo'llab-quvvatlash xizmatini KompyHelp'dan olamiz. Professional jamoa!",
      rating: 5,
    },
    {
      name: "Dmitriy P.",
      role: "Mijoz",
      content: "Профессиональный сервис. Рекомендую всем!",
      rating: 5,
    },
  ]

  const stats = [
    { value: "5000+", label: "Mijozlar" },
    { value: "10+", label: "Yil tajriba" },
    { value: "24/7", label: "Xizmat" },
    { value: "100%", label: "Kafolat" },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-full h-1/2 bg-gradient-to-t from-purple-900/50 to-transparent"></div>

          {/* Circuit Board Pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="circuit-board"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
                patternTransform="scale(0.75) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M0,0 L100,0 L100,100 L0,100 Z M20,20 L20,80 M20,50 L50,50 M50,20 L50,80 M80,20 L80,80 M50,50 L80,50"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="20" cy="20" r="4" fill="currentColor" />
                <circle cx="20" cy="50" r="4" fill="currentColor" />
                <circle cx="20" cy="80" r="4" fill="currentColor" />
                <circle cx="50" cy="20" r="4" fill="currentColor" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
                <circle cx="50" cy="80" r="4" fill="currentColor" />
                <circle cx="80" cy="20" r="4" fill="currentColor" />
                <circle cx="80" cy="50" r="4" fill="currentColor" />
                <circle cx="80" cy="80" r="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-board)" />
          </svg>
        </div>

        <div className="container relative px-4 py-20 md:py-32 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-8 text-center lg:text-left"
            >
              <Badge
                className="inline-flex items-center border-0 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 text-sm font-medium"
                variant="outline"
              >
                #1 Kompyuter xizmatlari
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
                  IT xizmatlar
                </span>
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 max-w-xl mx-auto lg:mx-0">
                Kompyuter, noutbuk va mobil qurilmalar uchun professional ta'mirlash xizmatlari
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href={isLoggedIn ? `/uz/service-request` : `/uz/register`}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white hover:bg-white/90 text-purple-900 hover:text-purple-800"
                  >
                    Xizmat jso'rash <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/uz/knowledge-base`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white"
                  >
                    Bilimlar bazasi
                  </Button>
                </Link>
              </div>

              <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-full"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs text-purple-200">KompyHelp Diagnostika</div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-800/50 rounded-lg p-4 border border-purple-700/30">
                      <div className="flex items-center">
                        <Laptop className="h-6 w-6 text-purple-300 mr-3" />
                        <div className="text-sm font-medium text-purple-100">Kompyuter diagnostikasi</div>
                      </div>
                      <div className="mt-3 h-2 w-full bg-purple-900/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-purple-400 to-indigo-400"
                        ></motion.div>
                      </div>
                      <div className="mt-1 text-right text-xs text-purple-300">85%</div>
                    </div>

                    <div className="bg-purple-800/50 rounded-lg p-4 border border-purple-700/30">
                      <div className="flex items-center">
                        <HardDrive className="h-6 w-6 text-purple-300 mr-3" />
                        <div className="text-sm font-medium text-purple-100">Xotira tekshiruvi</div>
                      </div>
                      <div className="mt-3 h-2 w-full bg-purple-900/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-purple-400 to-indigo-400"
                        ></motion.div>
                      </div>
                      <div className="mt-1 text-right text-xs text-purple-300">65%</div>
                    </div>

                    <div className="bg-purple-800/50 rounded-lg p-4 border border-purple-700/30">
                      <div className="flex items-center">
                        <Shield className="h-6 w-6 text-purple-300 mr-3" />
                        <div className="text-sm font-medium text-purple-100">Xavfsizlik tekshiruvi</div>
                      </div>
                      <div className="mt-3 h-2 w-full bg-purple-900/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "45%" }}
                          transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-purple-400 to-indigo-400"
                        ></motion.div>
                      </div>
                      <div className="mt-1 text-right text-xs text-purple-300">45%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600/30 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="dark:fill-gray-950"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Bizning xizmatlar
            </Badge>
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
              IT ehtiyojlaringiz uchun yechimlar
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Kompyuter ta'mirlashdan biznes IT yechimlarigacha - biz barcha raqamli ehtiyojlaringizni qondira olamiz.
            </p>
          </div>

          <Tabs defaultValue="individual" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger
                  value="individual"
                  className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-300"
                >
                  Shaxsiy
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-300"
                >
                  Biznes
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-300"
                >
                  Mobil
                </TabsTrigger>
              </TabsList>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="individual" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.individual.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Card className="h-full overflow-hidden border-purple-100 dark:border-purple-900/20 hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="rounded-full w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 mb-4">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                            <Link
                              href={`/${lang}/services`}
                              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                            >
                              Batafsil <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="business" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.business.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Card className="h-full overflow-hidden border-purple-100 dark:border-purple-900/20 hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="rounded-full w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 mb-4">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                            <Link
                              href={`/${lang}/services`}
                              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                            >
                              Batafsil <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.mobile.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Card className="h-full overflow-hidden border-purple-100 dark:border-purple-900/20 hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="rounded-full w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 mb-4">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                            <Link
                              href={`/${lang}/services`}
                              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                            >
                              Batafsil <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </motion.div>
          </Tabs>

          <div className="text-center mt-8">
            <Link href={`/${lang}/services`}>
              <Button
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/30"
              >
                Barcha xizmatlar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Qanday ishlaydi
            </Badge>
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
              Uch qadamda muammolarni hal qiling
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Bizning xizmatlarimizdan foydalanish juda oson</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-purple-100 dark:border-purple-900/20 h-full">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  1
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">So'rov yuboring</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Veb-sayt orqali so'rov yuboring yoki qo'ng'iroq qiling
                  </p>
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
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-purple-100 dark:border-purple-900/20 h-full">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  2
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Diagnostika</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mutaxassislarimiz qurilmangizni tekshirib, muammoni aniqlab, ta'mirlash rejasini tuzishadi.
                  </p>
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
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
                    Ta'mirlash va topshirish
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Qurilmangiz ta'mirlanadi va sizga qaytariladi. Barcha ta'mirlash ishlari kafolat bilan ta'minlanadi.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link href={isLoggedIn ? `/${lang}/service-request` : `/${lang}/register`}>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Hozir boshlang <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Mijozlar fikrlari
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
              Mijozlarimiz biz haqimizda nima deyishadi
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Bizning mijozlarimiz bizning xizmatlarimizdan mamnun. Ularning fikrlarini o'qing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-purple-100 dark:border-purple-900/20 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-300 font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-purple-700 dark:text-purple-300">{testimonial.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href={`/${lang}/testimonials`}>
              <Button
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/30"
              >
                Barcha fikrlarni ko'rish <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/10 backdrop-blur-sm">Hoziroq boshlang</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Kompyuter muammolaringizni hal qilishga tayyormisiz?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Bizning professional xizmatlarimiz bilan kompyuteringiz yana yangiday ishlaydi. Hoziroq boshlang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/uz/service-request` + (isLoggedIn ? "" : "?redirect=true")}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-white/90 text-purple-900 hover:text-purple-800"
                >
                  Xizmat so'rash <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={`/uz/contact`}>
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
