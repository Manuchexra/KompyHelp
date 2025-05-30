"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Search, Laptop, Monitor, Server, Smartphone, Wifi, Database, Shield } from "lucide-react"
import { motion } from "framer-motion"

type KnowledgeBasePageProps = {
  dict: any
  lang: string
}

export function KnowledgeBasePage({ dict, lang }: KnowledgeBasePageProps) {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  // Categories with icons
  const categories = [
    { id: "all", name: "Barchasi", icon: Laptop },
    { id: "computers", name: "Kompyuterlar", icon: Monitor },
    { id: "servers", name: "Serverlar", icon: Server },
    { id: "mobile", name: "Mobil qurilmalar", icon: Smartphone },
    { id: "network", name: "Tarmoq", icon: Wifi },
    { id: "database", name: "Ma'lumotlar bazasi", icon: Database },
    { id: "security", name: "Xavfsizlik", icon: Shield },
  ]

  // Sample articles
  const articles = [
    {
      id: 1,
      title: "Windows kompyuterini qayta tiklash",
      excerpt: "Windows operatsion tizimini qayta tiklash bo'yicha qadamba-qadam qo'llanma",
      category: "computers",
      readTime: "5 daqiqa",
    },
    {
      id: 2,
      title: "Wi-Fi signalini kuchaytirish",
      excerpt: "Uyingizda Wi-Fi signalini kuchaytirish uchun amaliy maslahatlar",
      category: "network",
      readTime: "3 daqiqa",
    },
    {
      id: 3,
      title: "Viruslardan himoya qilish",
      excerpt: "Kompyuteringizni viruslardan himoya qilish uchun eng yaxshi amaliyotlar",
      category: "security",
      readTime: "7 daqiqa",
    },
    {
      id: 4,
      title: "SSD diskni o'rnatish",
      excerpt: "Kompyuteringizga SSD diskni o'rnatish bo'yicha qadamba-qadam qo'llanma",
      category: "computers",
      readTime: "10 daqiqa",
    },
    {
      id: 5,
      title: "SQL ma'lumotlar bazasini zaxiralash",
      excerpt: "SQL ma'lumotlar bazasini zaxiralash va tiklash bo'yicha qo'llanma",
      category: "database",
      readTime: "8 daqiqa",
    },
    {
      id: 6,
      title: "Android qurilmasini tezlashtirish",
      excerpt: "Android qurilmangizni tezlashtirish uchun amaliy maslahatlar",
      category: "mobile",
      readTime: "4 daqiqa",
    },
    {
      id: 7,
      title: "Server xavfsizligini ta'minlash",
      excerpt: "Serveringizni xakerlardan himoya qilish uchun eng yaxshi amaliyotlar",
      category: "servers",
      readTime: "12 daqiqa",
    },
    {
      id: 8,
      title: "Tarmoq sozlamalarini optimallash",
      excerpt: "Tarmoq sozlamalarini optimallash orqali internet tezligini oshirish",
      category: "network",
      readTime: "6 daqiqa",
    },
    {
      id: 9,
      title: "Parollarni boshqarish",
      excerpt: "Xavfsiz parollarni yaratish va boshqarish bo'yicha qo'llanma",
      category: "security",
      readTime: "5 daqiqa",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/20 text-sm text-purple-300 mb-2">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              <span>Bilimlar bazasi</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">
              Bilimlar bazasi
            </h1>
            <p className="max-w-[600px] text-purple-200/80 md:text-xl">
              Kompyuter va IT muammolarini hal qilish bo'yicha foydali maqolalar va qo'llanmalar
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full max-w-md mt-4"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Maqolalarni qidirish..."
                  className="pl-10 bg-white/10 border-purple-700/20 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-start mb-8 bg-transparent">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="mr-2 mb-2"
                >
                  <TabsTrigger
                    value={category.id}
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-300 border border-purple-100 dark:border-purple-900/20"
                  >
                    <category.icon className="mr-2 h-4 w-4" />
                    {category.name}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {articles
                    .filter((article) => category.id === "all" || article.category === category.id)
                    .map((article) => (
                      <motion.div key={article.id} variants={cardVariants} whileHover="hover">
                        <Card className="h-full bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900/20">
                          <CardHeader>
                            <CardTitle className="text-purple-700 dark:text-purple-300">{article.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-500 dark:text-gray-400 mb-4">{article.excerpt}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
                              <Button
                                variant="ghost"
                                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 p-0"
                              >
                                O'qish
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/20 text-sm text-purple-700 dark:text-purple-300 mb-2">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              <span>Mashhur maqolalar</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
                Eng mashhur maqolalar
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Foydalanuvchilar tomonidan eng ko'p o'qilgan maqolalar
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {articles.slice(0, 3).map((article) => (
              <motion.div key={article.id} variants={cardVariants} whileHover="hover">
                <Card className="h-full bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900/20">
                  <CardHeader>
                    <CardTitle className="text-purple-700 dark:text-purple-300">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
                      <Button
                        variant="ghost"
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 p-0"
                      >
                        O'qish
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/20 text-sm text-purple-700 dark:text-purple-300 mb-2">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              <span>Ko'p so'raladigan savollar</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
                Ko'p so'raladigan savollar
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mijozlarimiz tomonidan eng ko'p so'raladigan savollar
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={cardVariants}>
              <Card className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20">
                <CardHeader>
                  <CardTitle className="text-purple-700 dark:text-purple-300">
                    Kompyuterim sekin ishlayapti, nima qilishim kerak?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Kompyuteringiz sekin ishlashining bir necha sabablari bo'lishi mumkin. Avval, foydalanilmayotgan
                    dasturlarni o'chirib tashlang, viruslarni tekshiring, va diskni tozalang. Agar muammo davom etsa,
                    operativ xotirani oshirish yoki SSD diskka o'tish foydali bo'lishi mumkin.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20">
                <CardHeader>
                  <CardTitle className="text-purple-700 dark:text-purple-300">
                    Internetim sekin ishlayapti, nima qilishim kerak?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Internet tezligini oshirish uchun routerni qayta ishga tushiring, routerni optimal joyga
                    joylashtiring, va Wi-Fi signalini to'sib qo'yishi mumkin bo'lgan to'siqlarni olib tashlang. Agar
                    muammo davom etsa, internet provayderi bilan bog'laning yoki routerni yangilang.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20">
                <CardHeader>
                  <CardTitle className="text-purple-700 dark:text-purple-300">
                    Kompyuterimni viruslardan qanday himoya qilaman?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Kompyuteringizni viruslardan himoya qilish uchun ishonchli antivirus dasturini o'rnating, operatsion
                    tizim va dasturlarni yangilab turing, noma'lum manbalardan fayllarni yuklab olmang, va shubhali
                    elektron pochta xabarlaridagi havolalarga boshmang.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20">
                <CardHeader>
                  <CardTitle className="text-purple-700 dark:text-purple-300">
                    Kompyuterim qizib ketayapti, nima qilishim kerak?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Kompyuter qizib ketishining oldini olish uchun ventilyatorlarni changdan tozalang, kompyuterni tekis
                    yuzaga qo'ying, sovutish tagligidan foydalaning, va og'ir dasturlarni bir vaqtda ishlatmang. Agar
                    muammo davom etsa, sovutish tizimini tekshirish yoki termal pastani almashtirish kerak bo'lishi
                    mumkin.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-white mb-2">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              <span>Yordam kerakmi?</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Javobingizni topa olmadingizmi?
              </h2>
              <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bizning mutaxassislarimiz sizning barcha savollaringizga javob berishga tayyor
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg shadow-purple-900/20 hover:shadow-purple-900/30 transition-all duration-300"
              >
                Biz bilan bog'laning
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                Ko'proq maqolalar
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent opacity-20"></div>
      </section>
    </div>
  )
}
