"use client"
import { Sparkles, Users, Award, Clock, CheckCircle, Building } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

type AboutPageProps = {
  dict: any
  lang: string
}

export function AboutPage({ dict, lang }: AboutPageProps) {
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/20 text-sm text-purple-300 mb-2">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                <span>Biz haqimizda</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">
                KompyHelp Haqida
              </h1>
              <p className="max-w-[600px] text-purple-200/80 md:text-xl">
                Biz mijozlarimizga eng yuqori sifatli kompyuter ta'mirlash xizmatlarini taqdim etishga intilamiz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-indigo-900/50 shadow-lg shadow-purple-900/30 border border-purple-700/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <Building className="h-24 w-24 text-purple-300" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
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
              <span>Bizning tarix</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
                Bizning tarix
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                KompyHelp qanday boshlangan va qanday rivojlangan
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300">Qanday boshlanganmiz</h3>
              <p className="text-gray-500 dark:text-gray-400">
                KompyHelp 2015 yilda tajribali IT mutaxassislari tomonidan tashkil etilgan. Bizning maqsadimiz oddiy va
                tushunarli kompyuter ta'mirlash xizmatlarini taqdim etish edi.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Biz mijozlarimizga eng yuqori sifatli xizmatlarni taqdim etishga intilamiz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300">Bugungi kunda</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Bugungi kunda KompyHelp O'zbekistonning eng ishonchli kompyuter ta'mirlash xizmatlaridan biriga aylandi.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Biz individual mijozlar va bizneslar uchun keng ko'lamli xizmatlarni taqdim etamiz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              <span>Bizning qadriyatlar</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
                Bizning qadriyatlar
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bizning ishimizni boshqaradigan asosiy tamoyillar
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div
              variants={fadeIn}
              custom={1}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Mijozlar</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Biz har doim mijozlarimizning ehtiyojlarini birinchi o'ringa qo'yamiz.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              custom={2}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Sifat</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Biz har bir ishni eng yuqori sifat standartlariga muvofiq bajaramiz.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              custom={3}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Tezlik</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">Biz mijozlarimizning vaqtini qadrlaymiz.</p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              custom={4}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Ishonchlilik</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">Biz har doim o'z va'dalarimizni bajaramiz.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
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
              <span>Bizning jamoa</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
                Bizning jamoa
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                KompyHelp ortidagi ajoyib odamlar bilan tanishing
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
            <motion.div
              variants={fadeIn}
              custom={1}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
            >
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                AK
              </div>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-1">Alisher Karimov</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Asoschisi va CEO</p>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Alisher 15 yildan ortiq IT sohasida tajribaga ega.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              custom={2}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
            >
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                MR
              </div>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-1">Malika Rahimova</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Texnik Direktor</p>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Malika bizning texnik jamoamizni boshqaradi.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              custom={3}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
            >
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                DT
              </div>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-1">Davron Toshmatov</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Mijozlar xizmati rahbari</p>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Davron mijozlar bilan munosabatlarni boshqaradi.
              </p>
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
              <span>Biz bilan bog'laning</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Kompyuter muammolaringizni hal qilishga tayyormiz
              </h2>
              <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bizning professional jamoamiz sizning barcha kompyuter va IT muammolaringizni hal qilishga tayyor
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
                Xizmatlarimiz
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent opacity-20"></div>
      </section>
    </div>
  )
}
